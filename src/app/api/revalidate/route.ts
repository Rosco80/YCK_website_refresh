import { revalidateTag } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';
import { parseBody } from 'next-sanity/webhook';

// Map of Sanity document types to Next.js cache tags
const TAG_MAP: Record<string, string[]> = {
  'siteSettings': ['site-settings'],
  'websiteImages': ['website-images'],
  'physiotherapist': ['physiotherapists'],
  'article': ['sanity-articles', 'insights'],
  'testimonial': ['testimonials'],
  'staticTestimonial': ['testimonials'],
  'landingPage': ['landing-pages'],
};

export async function POST(req: NextRequest) {
  try {
    const secret = process.env.SANITY_WEBHOOK_SECRET;
    if (!secret) {
      console.error('Missing SANITY_WEBHOOK_SECRET environment variable.');
      return new Response('Configuration error: Missing webhook secret', { status: 500 });
    }

    const { body, isValidSignature } = await parseBody<{
      _type: string;
    }>(req, secret);

    if (!isValidSignature) {
      return new Response('Invalid Signature', { status: 401 });
    }

    if (!body?._type) {
      return new Response('Bad Request: Missing document type', { status: 400 });
    }

    const tags = TAG_MAP[body._type] || [];
    
    if (tags.length === 0) {
      return NextResponse.json({
        status: 200,
        revalidated: false,
        message: 'No mapped tags for this document type',
        type: body._type,
      });
    }

    tags.forEach((tag) => {
      // @ts-ignore - Next.js typing discrepancy requires 2 arguments in some canary versions
      revalidateTag(tag);
    });

    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      tags,
    });
  } catch (err: any) {
    console.error('Webhook error:', err);
    return new Response(err.message, { status: 500 });
  }
}
