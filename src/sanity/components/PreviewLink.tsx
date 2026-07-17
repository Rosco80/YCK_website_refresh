import React from 'react'

import { useFormValue } from 'sanity'

export function PreviewLink() {
  const slug = useFormValue(['slug', 'current']) as string

  if (!slug) {
    return (
      <div style={{ padding: '1rem', borderRadius: '4px', backgroundColor: '#f1f3f5', color: '#666', fontSize: '0.875rem' }}>
        Generate a URL slug above to see the preview link.
      </div>
    )
  }

  const url = `https://www.yapchankor.com/en/lp/${slug}`

  return (
    <div style={{ padding: '1rem', borderRadius: '4px', backgroundColor: '#eef2ff', border: '1px solid #c7d2fe' }}>
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ color: '#4338ca', textDecoration: 'underline', fontWeight: 600, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '8px' }}
      >
        Open Live Preview ↗
      </a>
    </div>
  )
}
