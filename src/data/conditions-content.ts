// This file contains the structured content for all condition pages
// Maps condition slugs to their detailed content sections

import { conditionsContentMs } from './conditions-content-ms';
import { conditionsContentZh } from './conditions-content-zh';

export type ConditionContent = {
  title?: string;
  subtitle?: string;
  intro?: string;
  whyNotImprove: string;
  whatCauses: string[];
  approach: string;
  approachPoints: string[];
  expectation: string;
  whenToSeek: string[];
  faqs: Array<{ question: string; answer: string }>;
  relatedConditions: string[]; // slugs only — titles resolved via i18n
}

export function getConditionsContent(locale: string): Record<string, ConditionContent> {
  if (locale === 'ms') return conditionsContentMs;
  if (locale === 'zh') return conditionsContentZh;
  return conditionsContentEn;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const conditionsContentEn = {
  "back-pain": {
    title: "Back Pain Treatment In Malaysia",
    subtitle: "Structured Recovery for Chronic and Recurring Back Pain — Refined Over 45 Years",
    intro: "Back pain often improves temporarily — but returns when underlying issues remain. If you've been living with it for weeks, months, or years, you may already have tried rest, medication, or other treatments without lasting improvement.\n\nAt YAPCHANKOR, we regularly see patients in this situation — where the pain persists despite multiple attempts to treat it.",
    whyNotImprove: "Back pain is rarely caused by a single issue. In many cases, it involves a combination of structural stress in the spine, movement limitations, and persistent inflammation. Treatments that focus on only one aspect — such as pain relief alone or exercise alone — may not fully resolve the condition. This is why many patients experience temporary relief, only for the pain to return.",
    whatCauses: [
      "Muscle and ligament strain from injury or overuse",
      "Slipped or herniated discs",
      "Degenerative disc disease and arthritis",
      "Scoliosis and other spinal irregularities",
      "Osteoporosis-related compression fractures",
      "Post-accident or post-surgical back pain"
    ],
    approach: "Our approach is shaped by Shaolin injury medicine — a tradition developed through treating real musculoskeletal injuries — and refined through over 45 years of clinical experience. At YAPCHANKOR, we focus on understanding what is contributing to your pain, rather than relying on a single treatment method.",
    approachPoints: [
      "Hands-on physiotherapy to reduce strain and improve mobility",
      "Structured rehabilitation to restore movement and stability",
      "A proprietary herbal formulation used in our clinics for decades on over 50,000 patients, and studied for its anti-inflammatory properties through laboratory research"
    ],
    step1: "Every treatment begins with a structured assessment by our certified physiotherapists. We evaluate your posture, movement, pain severity, and how the condition is affecting your daily life. If you have existing X-rays, MRIs or CT scans, bring them along.",
    step2: "Your treatment plan combines hands-on physiotherapy — including muscle release, heat therapy, TENS electrical stimulation and ultrasound — with our proprietary herbal patches applied directly to the affected area. Worn for at least 12 hours, the patches work to reduce inflammation, improve circulation and support the body's natural recovery process.",
    step3: "As your condition improves, we guide you through targeted exercises to strengthen your back, correct your posture and maintain the gains you've made — so the pain doesn't return.",
    expectation: "Many patients begin to notice improvement within the first few sessions. Recovery depends on the severity and duration of your condition and your consistency with recommended exercises. Our focus is on sustainable recovery — not short-term relief.",
    testimonials: [
      {
        quote: "After carrying heavy bags while travelling, my back start hurting and I could hardly walk. After having my treatment at YAPCHANKOR, there is no more pain and I can return to my daily activities.",
        author: "Ramil"
      },
      {
        quote: "Ngan Bee Hong, suffered spinal fractures, located at her lower back (L3-L5), after a traffic accident. Before treatment at YAPCHANKOR, she could not work, and suffered extreme pain. Now she's walking again! — 21-session Treatment Plan",
        author: null
      },
      {
        quote: "Alvin suffered from acute back pain which we solved in just 1.5 weeks. Most treatments for back pain will take months, and will also require much more expense compared to ours.",
        author: null
      }
    ],
    faqs: [
      {
        question: "Do I need a referral?",
        answer: "No. You can book directly with us — no doctor's referral is required."
      },
      {
        question: "How many sessions will I need?",
        answer: "Many patients begin to notice improvement within the first few sessions. A full recovery plan is discussed after your initial assessment."
      },
      {
        question: "Is this suitable if I've already tried physiotherapy elsewhere?",
        answer: "Yes. Many of our patients come to us after trying conventional physiotherapy without lasting results. Our integrative approach addresses multiple contributing factors together."
      },
      {
        question: "Do you have X-ray or MRI facilities?",
        answer: "We don't. If a fracture is suspected, please see a doctor for imaging first before visiting us."
      },
      {
        question: "Is this suitable for elderly patients?",
        answer: "Yes. We regularly treat patients across all age groups, including those with age-related conditions like osteoporosis and degenerative disc disease."
      }
    ],
    whenToSeek: [
      "Keeps returning after treatment",
      "Is affecting your sleep, work or daily activities",
      "Has not improved with previous treatment",
      "Has you considering injections or surgery"
    ],
    relatedConditions: ["lower-back-pain", "slipped-disc", "sciatica"]
  },
  "frozen-shoulder": {
    title: "Frozen Shoulder Treatment In Malaysia",
    subtitle: "Restore Mobility and Reduce Pain — Without Relying on Injections or Forceful Manipulation",
    intro: "You may find it difficult to sleep on your side, lift your arm, or carry out simple daily tasks. Frozen shoulder doesn't just limit movement — it gradually affects everyday life. If you've been told to wait it out, you may already know how frustrating that can be. Without proper management, the full cycle of frozen shoulder — from freezing to frozen to thawing — can take months or even years.",
    whyNotImprove: "Frozen shoulder — medically known as adhesive capsulitis — develops in stages, each lasting several months. The joint capsule gradually tightens, restricting movement and causing persistent inflammation. In many cases, treatment focuses on either reducing pain or improving mobility — but not both together. Without addressing inflammation while restoring movement at the same time, recovery may plateau rather than progress.",
    whatCauses: [
      "Primary frozen shoulder with no clear cause",
      "Post-injury stiffness including sports injuries and tendinitis",
      "Shoulder issues related to prolonged poor posture in office and corporate workers",
      "Post-surgical shoulder restriction",
      "Early-stage frozen shoulder where timely intervention may prevent progression"
    ],
    approach: "Our approach is shaped by Shaolin injury medicine — a tradition developed through treating real musculoskeletal injuries — and refined through over 45 years of clinical experience. At YAPCHANKOR, we focus on addressing both inflammation and mobility together.",
    approachPoints: [
      "Hands-on physiotherapy to improve joint movement",
      "Structured mobility work to restore function",
      "A proprietary herbal formulation used in our clinics for decades on over 50,000 patients"
    ],
    step1: "Your first visit begins with a structured physical assessment by our certified physiotherapists. We measure both your active and passive range of motion, assess pain levels, and evaluate how the condition is affecting your daily function. If you have existing X-rays, MRIs or CT scans, bring them along.",
    step2: "Your treatment plan combines hands-on physiotherapy — including muscle release, heat therapy, TENS electrical stimulation and ultrasound — to relax the shoulder joint and surrounding soft tissues. Following each session, our proprietary herbal patches are applied directly around the affected shoulder joint and worn for at least 12 hours to reduce inflammation, improve circulation and support recovery.",
    step3: "As your shoulder loosens, we guide you through progressive range of motion exercises to restore full function. Consistency with these exercises between sessions is key to maintaining and building on the improvements made in clinic.",
    expectation: "Frozen shoulder develops gradually over time — and recovery also takes time. Many of our patients report noticeable progress around the 7th session. How quickly you recover depends on the severity and duration of your condition, and your consistency with the recommended exercises. Our goal is sustainable recovery — not temporary relief.",
    testimonials: [
      {
        quote: "In early March 2014, I experienced sharp shoulder pain which persisted despite taking medicine and physiotherapy / acupuncture. I then signed up for treatment with YAPCHANKOR under Mr. Ganesh in Subang Jaya. Today is the final day and I am almost healed. I am very happy with the treatment under Mr. Ganesh.",
        author: "Alan Heng"
      },
      {
        quote: "Frozen shoulder (bahu beku) affects many corporate and office workers because of the prolonged sitting and bad posture that our modern lives involve. Mr. Tan suffered from excruciating pain before our treatment but after just 10 sessions, he has improved remarkably.",
        author: null
      },
      {
        quote: "Mr. Khoo suffered a sports injury from badminton, which led to shoulder tendinitis. Besides feeling pain, he also lost some flexibility and range in his affected arm. This was basically early stage frozen shoulder, which was prevented from getting worse with Mr. Khoo's early intervention.",
        author: null
      }
    ],
    faqs: [
      {
        question: "Do I need a referral?",
        answer: "No. You can book directly with us — no doctor's referral is required."
      },
      {
        question: "How many sessions will I need?",
        answer: "Many patients report noticeable progress around the 7th session. A full recovery plan is discussed after your initial assessment based on the severity and stage of your condition."
      },
      {
        question: "Is this suitable if I've already tried physiotherapy elsewhere?",
        answer: "Yes. Many of our patients come to us after trying conventional physiotherapy without lasting results. Our approach addresses both inflammation and mobility together, which is often what makes the difference."
      },
      {
        question: "Will I need injections or manipulation?",
        answer: "No. Our approach does not involve steroid injections or forceful joint manipulation."
      },
      {
        question: "Do you have X-ray or MRI facilities?",
        answer: "We don't. If imaging is needed, please consult a medical doctor before visiting us."
      }
    ],
    whenToSeek: [
      "Is disrupting your sleep or daily activities",
      "Has not improved with previous treatment",
      "Is in early stages and you want to prevent it from worsening",
      "Has you considering injections or surgical manipulation"
    ],
    relatedConditions: ["shoulder-pain", "neck-pain"]
  },
  "shoulder-pain": {
    title: "Shoulder Pain Treatment In Malaysia",
    subtitle: "Comprehensive Recovery for Shoulder Injuries, Rotator Cuff Pain and Chronic Shoulder Conditions",
    intro: "Shoulder pain doesn't just affect your shoulder. It affects how you sleep, how you dress, how you work — and whether you can do the things you enjoy. The shoulder is one of the most complex joints in the body, which is why pain here can be difficult to resolve without the right approach.",
    whyNotImprove: "Shoulder pain can originate from the joint itself, or from the surrounding muscles, tendons, ligaments and soft tissues. Because so many structures are involved, a problem in one area often creates compensatory strain in others — which is why the pain can persist, spread, or worsen over time. Treating one aspect in isolation — such as pain relief alone or strengthening alone — is often not sufficient.",
    whatCauses: [
      "Rotator cuff injuries and tears",
      "Bursitis and tendinitis",
      "Frozen shoulder (adhesive capsulitis)",
      "Osteoarthritis of the shoulder joint",
      "Sprains, strains and soft tissue injuries",
      "Sports-related shoulder injuries including golf and racquet sports",
      "Dislocated shoulder and cartilage damage",
      "Wrist and shoulder pain occurring together"
    ],
    approach: "Our approach is shaped by Shaolin injury medicine — a tradition developed through treating real musculoskeletal injuries — and refined through over 45 years of clinical experience. At YAPCHANKOR, we focus on addressing inflammation, mobility and strength together.",
    approachPoints: [
      "Hands-on physiotherapy to reduce strain on the joint and surrounding tissues",
      "Structured rehabilitation to restore flexibility and strength",
      "A proprietary herbal formulation used in our clinics for decades on over 50,000 patients"
    ],
    step1: "Your first visit begins with a thorough physical assessment by our certified physiotherapists. We measure your active and passive range of motion, assess pain levels and patterns, and evaluate how the condition is affecting your daily function. If you have existing X-rays, MRIs or CT scans, bring them along.",
    step2: "Your treatment plan combines hands-on physiotherapy — including muscle release, heat therapy, TENS electrical stimulation and ultrasound — to relax the shoulder joint and surrounding soft tissues. Following each session, our proprietary herbal patches are applied around the affected area and worn for at least 12 hours to reduce inflammation, improve circulation and support recovery.",
    step3: "As your shoulder improves, we guide you through progressive exercises to restore flexibility and rebuild strength around the joint. Consistency with these exercises between sessions is essential to maintaining progress and preventing recurrence.",
    expectation: "Most patients begin to feel improvement within the first few sessions. For chronic shoulder conditions, meaningful progress is typically noticed within 7 to 10 sessions. How quickly you recover depends on the cause and severity of your condition, how long it has been present, and your consistency with recommended exercises. Our focus is on sustainable recovery — not short-term relief.",
    testimonials: [
      {
        quote: "I am a housewife who play some golf during my free time. I may have hurt my shoulder while playing golf. After my few visits to YAPCHANKOR for treatments I feel much better and hope to resume my routine soon.",
        author: null
      },
      {
        quote: "Before I could not lift my right hand but after 14 times treatment I have more or less been able to lift up my hand and am pleased with my treatment. And hopefully with further follow up I should be O.K. Thanks.",
        author: "Ng Ah Lean"
      },
      {
        quote: "My wrist & shoulders are feeling better. 80% improvement after the whole sessions.",
        author: "Elena"
      }
    ],
    faqs: [
      {
        question: "Do I need a referral?",
        answer: "No. You can book directly with us — no doctor's referral is required."
      },
      {
        question: "How many sessions will I need?",
        answer: "Most patients begin to feel improvement within the first few sessions. Chronic conditions typically show meaningful progress within 7 to 10 sessions. A full plan is discussed after your initial assessment."
      },
      {
        question: "Is this suitable if I've already tried physiotherapy elsewhere?",
        answer: "Yes. Many of our patients come to us after trying conventional physiotherapy without lasting results. Our approach addresses inflammation, mobility and strength together — which is often what makes the difference."
      },
      {
        question: "Will I need injections or manipulation?",
        answer: "No. Our approach does not rely on steroid injections or forceful joint manipulation."
      },
      {
        question: "Can you treat both wrist and shoulder pain together?",
        answer: "Yes. We regularly treat patients presenting with pain across multiple areas and will assess and address all affected regions as part of your treatment plan."
      },
      {
        question: "Do you have X-ray or MRI facilities?",
        answer: "We don't. If imaging is needed, please consult a medical doctor before visiting us."
      }
    ],
    whenToSeek: [
      "Is affecting your sleep or daily activities",
      "Involves radiating pain, numbness or tingling down the arm",
      "Has not improved with previous treatment",
      "Has you considering injections or surgery"
    ],
    relatedConditions: ["frozen-shoulder", "neck-pain"]
  },
  "knee-pain": {
    title: "Knee Pain Treatment In Malaysia",
    subtitle: "Effective Recovery for Joint Stiffness, Structural Knee Pain and Chronic Knee Conditions",
    intro: "Knee pain affects more than just your knees. It can stop you from kneeling for prayers, climbing stairs, playing sport, walking comfortably — or simply getting through a full day without discomfort. Whether your pain came on suddenly from an injury or has been building gradually over years, the frustration of treatments that only provide temporary relief is something we hear from patients every day.",
    whyNotImprove: "Knee pain can originate from the joint itself, the surrounding ligaments, cartilage, tendons or soft tissues. Because the knee bears significant load with almost every movement, a problem in one structure frequently creates strain in others — making the condition harder to resolve without addressing multiple contributing factors together. Conditions such as osteoarthritis and ligament injuries in particular tend to plateau when treatment focuses on a single aspect.",
    whatCauses: [
      "ACL and ligament injuries",
      "Meniscus tears (medial and lateral)",
      "Patellar tendinitis",
      "Knee osteoarthritis",
      "Knee bursitis",
      "Sports injuries including futsal, running and court sports",
      "Gout-related knee pain",
      "Generalised knee stiffness and degeneration"
    ],
    approach: "Our approach is shaped by Shaolin injury medicine — a tradition developed through treating real musculoskeletal injuries — and refined through over 45 years of clinical experience. At YAPCHANKOR, we focus on addressing inflammation, movement and strength together.",
    approachPoints: [
      "Hands-on physiotherapy to reduce strain on the joint and surrounding tissues",
      "Structured rehabilitation to restore flexibility and strengthen the knee and leg muscles",
      "A proprietary herbal formulation used in our clinics for decades on over 50,000 patients"
    ],
    step1: "Your first visit begins with a thorough physical assessment by our certified physiotherapists. We evaluate your ability to sit, stand, walk and move your legs, assess pain levels and patterns, and determine the severity and contributing factors of your condition. If you have existing X-rays, MRIs or CT scans, bring them along.",
    step2: "Your treatment plan combines hands-on physiotherapy — including muscle release, heat therapy, TENS electrical stimulation and ultrasound — to relax the knee joint and surrounding soft tissues. Following each session, our proprietary herbal patches are applied around the affected knee and worn for at least 12 hours to reduce inflammation, improve circulation and support recovery.",
    step3: "As your knee improves, we guide you through progressive exercises to restore flexibility and strengthen the knee and surrounding muscles. Consistency with these exercises between sessions is essential to maintaining progress and reducing recurrence.",
    expectation: "Most patients begin to notice improvement within the first 3 sessions. Conditions such as knee osteoarthritis or ligament injuries may take a little longer, with meaningful progress typically reported between 7 and 10 sessions. Our focus is on sustainable recovery — not short-term relief.",
    testimonials: [
      {
        quote: "When Jason suffered from a knee injury, he came to us and we diagnosed his problem as a minor medial meniscus tear. We recommended a 10 session treatment plan and after his sessions, he is now well on his way to recovery.",
        author: null
      },
      {
        quote: "Overall, recovered fast and the herbal medicine helped [me] to recover. Not really sure how I got injured. Service of the staff are good and really helpful. Lastly, I feel lucky that I came over here for my treatment and made my pain reduce fast & less. Thank you.",
        author: "Low S.C."
      },
      {
        quote: "Obtained injury after futsal session. Janna (and other physiotherapists) helped in identifying what are the causes and ways to reduce future injuries. Will definitely recommend YCK to friends and family members.",
        author: "Shahnaz"
      }
    ],
    faqs: [
      {
        question: "Do I need a referral?",
        answer: "No. You can book directly with us — no doctor's referral is required."
      },
      {
        question: "How many sessions will I need?",
        answer: "Most patients begin to notice improvement within the first 3 sessions. More complex conditions typically show meaningful progress between 7 and 10 sessions. A full recovery plan is discussed after your initial assessment."
      },
      {
        question: "Is this a real alternative to knee injections or surgery?",
        answer: "Yes. Many of our patients come to us specifically before considering injections or surgical procedures. Current clinical guidelines also support trying conservative, multidisciplinary treatment first — which is exactly what we provide."
      },
      {
        question: "Can you treat ligament tears?",
        answer: "We can treat minor ligament injuries. If you suspect a significant ligament tear, we recommend seeing a doctor for an MRI first. Bring the report along and we will advise on the most appropriate treatment plan."
      },
      {
        question: "Is this suitable for elderly patients with osteoarthritis?",
        answer: "Yes. Knee osteoarthritis is one of the conditions we treat most frequently, including in older patients. Treatment is adapted to your specific condition and physical capacity."
      },
      {
        question: "Do you have X-ray or MRI facilities?",
        answer: "We don't. If imaging is needed, please consult a medical doctor before visiting us."
      }
    ],
    whenToSeek: [
      "Is affecting your ability to walk, climb stairs, kneel or play sport",
      "Has not improved with previous treatment",
      "Is being managed with painkillers but keeps returning",
      "Has you considering injections or surgery"
    ],
    relatedConditions: ["osteoarthritis-knee", "hip-pain"]
  },
  "neck-pain": {
    title: "Neck Pain Treatment In Malaysia",
    subtitle: "Relief for Cervical Tension, Pinched Nerves and Chronic Neck Stiffness",
    intro: "Neck pain is one of the most common complaints we see today. Hours at a desk, prolonged phone use, poor posture, and cumulative daily strain all place significant stress on the cervical spine. But neck pain is not limited to the neck. When nerves are involved, it can cause numbness, tingling and radiating pain down the arms, disrupt sleep, and affect concentration and daily function.",
    whyNotImprove: "Neck pain often arises from overlapping causes. Muscle strain from posture is common, but deeper structural issues are frequently involved — including cervical spondylosis or disc-related conditions that affect surrounding nerves. When nerve compression is present, treating muscles alone is often insufficient. Inflammation, mobility and structural stress need to be addressed together.",
    whatCauses: [
      "Muscle strain from desk work and prolonged device use",
      "Cervical spondylosis and osteoarthritis",
      "Herniated or degenerated cervical discs",
      "Nerve compression causing arm numbness and tingling",
      "Whiplash from road accidents",
      "Chronic stiffness and restricted cervical movement"
    ],
    approach: "Our approach is shaped by Shaolin injury medicine — a tradition developed through treating real musculoskeletal injuries — and refined through over 45 years of clinical experience. At YAPCHANKOR, we address neck pain by targeting inflammation, restoring cervical mobility and rebuilding the strength needed to maintain recovery.",
    approachPoints: [
      "Hands-on physiotherapy",
      "Posture correction and movement work",
      "Structured strengthening exercises",
      "A proprietary herbal formulation used in our clinics for decades on over 50,000 patients"
    ],
    step1: "Your first visit begins with a thorough physical assessment by our certified physiotherapists. We examine your neck for areas of tenderness and measure your range of motion. We assess pain levels, nerve involvement and how the condition is affecting your daily function. If you have existing X-rays, MRIs or CT scans, bring them along.",
    step2: "Your treatment plan combines hands-on physiotherapy, guided rehabilitation, and our clinical herbal formulation. Specific techniques are selected based on your condition and progress.",
    step3: "As your neck improves, we guide you through targeted strengthening and posture correction exercises. Performing these consistently between sessions is essential to maintaining progress and reducing recurrence.",
    expectation: "Recovery depends on the underlying cause of your neck pain. Acute conditions may improve more quickly, while chronic conditions require a longer period of structured care. Our focus is on sustainable recovery rather than short-term relief.",
    testimonials: [
      {
        quote: "Neck pain patient, Mr. Lim, found us online and decided to give us a try after consulting various other medical options, both conventional and alternative. We managed to control his neck pain and taught him some exercises to maintain its strength and flexibility. Thank you for sharing your story here!",
        author: null
      },
      {
        quote: "Recently we treated a Kenyan national, Mr Mohamed Omar who suffered from arm and neck pain. The problem was causing numbness down his arm, which is a typical symptom of pinched nerves. We treated him in a week's worth of sessions and put him on the path to long term recovery. Thanks for sharing your story!",
        author: null
      },
      {
        quote: "I am from Kenya, I got cold problem in my arm and neck. I have been treated 7 days in Yap Chan Kor and am now feeling better. Thanks to this institution and special thanks to Mr. Arwin.",
        author: "Mohamed Omar"
      }
    ],
    faqs: [
      {
        question: "Do I need a referral?",
        answer: "No. You can book directly with us — no doctor's referral is required."
      },
      {
        question: "How many sessions will I need?",
        answer: "It depends on the severity and duration of your condition. A full plan is discussed after your initial assessment."
      },
      {
        question: "Can you treat numbness and tingling down the arm?",
        answer: "Yes. These symptoms are often linked to nerve compression in the cervical spine, which we assess and manage as part of treatment."
      },
      {
        question: "Is this suitable if I've already tried physiotherapy elsewhere?",
        answer: "Yes. Many patients come to us after trying conventional physiotherapy without lasting results."
      },
      {
        question: "Do you have X-ray or MRI facilities?",
        answer: "We don't. If imaging is needed, please consult a medical doctor before visiting us."
      }
    ],
    whenToSeek: [
      "Is persistent or keeps returning",
      "Involves numbness, tingling or radiating pain",
      "Is affecting your sleep or daily activities",
      "Has not improved with previous treatment"
    ],
    relatedConditions: ["shoulder-pain", "slipped-disc"]
  },
  "sprained-ankle": {
    title: "Sprained Ankle Treatment In Malaysia",
    subtitle: "Accelerate Ligament Healing and Regain Strength After Ankle Sprains",
    intro: "An ankle sprain can happen in an instant — a missed step, an uneven surface, or an awkward landing. But the recovery that follows can affect your mobility for days, weeks, or longer if the injury is not properly managed. Beyond the physical limitation, many patients feel frustrated at being unable to move normally, concerned about re-injury, or restricted from sport and daily activities.",
    whyNotImprove: "When you sprain your ankle, the ligaments supporting the joint are stretched or partially torn. The body's natural response — swelling, bruising, and pain — is part of the healing process. Standard early-stage care such as rest, ice, compression, and elevation can help manage symptoms. However, without active rehabilitation and structured recovery, the ankle may not regain full strength and stability. This can lead to incomplete healing and an increased risk of recurring sprains.",
    whatCauses: [
      "Acute ankle sprains from sports, falls, or uneven surfaces",
      "Chronic or recurrent ankle sprains",
      "Ligament laxity and ankle instability",
      "Ankle injuries with swelling and bruising",
      "Post-sprain stiffness and restricted movement"
    ],
    approach: "Our approach is shaped by Shaolin injury medicine — a tradition developed through treating real musculoskeletal injuries — and refined through over 45 years of clinical experience. At YAPCHANKOR, we support recovery by addressing inflammation, restoring joint mobility, and rebuilding stability.",
    approachPoints: [
      "Targeted physiotherapy to reduce swelling and improve joint movement",
      "Structured rehabilitation to rebuild strength and stability",
      "A proprietary herbal formulation used in our clinics for decades on over 50,000 patients"
    ],
    step1: "Your first visit begins with a physical assessment by our certified physiotherapists. We examine your ankle, foot, and lower leg for tenderness, swelling, and movement limitations, and assess the severity of the injury. If you have existing X-rays or MRIs, bring them along.",
    step2: "Your treatment plan combines hands-on physiotherapy, guided rehabilitation, and our clinical herbal formulation. Specific techniques are selected based on your condition and stage of recovery.",
    step3: "As pain and swelling reduce, we guide you through progressive exercises to rebuild strength and stability around the ankle. Because a previously sprained ankle is more vulnerable to re-injury, restoring stability is an essential part of recovery.",
    expectation: "Acute sprains typically improve more quickly than chronic or recurrent injuries. Recovery time depends on the severity of the injury and consistency with rehabilitation. Our focus is on complete recovery — not just returning to movement, but restoring the strength needed to prevent recurrence.",
    testimonials: [
      {
        quote: "I have sprained my ankle 3 weeks ago. On that day itself I quickly come to Yap Chan Kor for treatment. Physiotherapist suggested for the treatment plan which is 7 sessions. Surprisingly, till the 6th session, I recovered and my ankle no more pain and can walk or run as normal.",
        author: null
      },
      {
        quote: "I have engaged the treatment at YAPCHANKOR, I knew the injury would take a few weeks to heal and so we organised each session well. My injury has improved vastly since I started, and all the staff have treated me well. I got this injury from playing sports. I would like to say thank you to all the staff.",
        author: "Chan Ming Yang"
      },
      {
        quote: "Day 1. I need help and treatment. Day 7. I can work and [go] running.",
        author: "Jamie Yong"
      }
    ],
    faqs: [
      {
        question: "Do I need a referral?",
        answer: "No. You can book directly with us — no doctor's referral is required."
      },
      {
        question: "How many sessions will I need?",
        answer: "It depends on the severity of the injury. A full plan is discussed after your assessment."
      },
      {
        question: "Should I see a doctor before coming to you?",
        answer: "If you suspect a fracture or significant ligament tear, we recommend seeing a doctor for imaging first."
      },
      {
        question: "Can you help prevent my ankle from being sprained again?",
        answer: "Yes. Strengthening and stabilising the ankle is a core part of our rehabilitation approach."
      },
      {
        question: "Do you have X-ray or MRI facilities?",
        answer: "We don't. If imaging is needed, please consult a medical doctor before visiting us."
      }
    ],
    whenToSeek: [
      "Is not improving with rest",
      "Involves significant swelling, bruising or instability",
      "Is recurring",
      "Is limiting your ability to walk or return to activity"
    ],
    relatedConditions: ["plantar-fasciitis"]
  },
  "wrist-pain": {
    title: "Wrist Pain Treatment In Malaysia",
    subtitle: "Specialised Care for Carpal Tunnel Syndrome, Repetitive Strain and Wrist Injuries",
    intro: "Your wrists are involved in almost everything you do — typing, cooking, driving, lifting, and playing sport. When wrist pain develops, even routine daily tasks can become difficult. Whether your pain started from an injury or developed gradually through repetitive use, the impact on function and quality of life can be significant.",
    whyNotImprove: "Wrist pain can arise from different structures depending on the cause. Sprains affect the ligaments. Repetitive strain affects tendons and soft tissues. Conditions such as carpal tunnel syndrome involve nerve compression at the wrist. Without identifying the underlying cause, treatment may address the wrong issue — leading to only temporary improvement.",
    whatCauses: [
      "Wrist sprains and soft tissue injuries",
      "Carpal tunnel syndrome",
      "Repetitive strain injuries from occupational or sports use",
      "Wrist osteoarthritis",
      "Tendinitis and tendon irritation",
      "Work-related wrist conditions"
    ],
    approach: "Our approach is shaped by Shaolin injury medicine — a tradition developed through treating real musculoskeletal injuries — and refined through over 45 years of clinical experience. At YAPCHANKOR, we address wrist pain by targeting inflammation, restoring mobility, and rebuilding strength together.",
    approachPoints: [
      "Hands-on physiotherapy to improve movement and reduce strain",
      "Structured rehabilitation exercises to restore function",
      "A proprietary herbal formulation used in our clinics for decades on over 50,000 patients"
    ],
    step1: "Your first visit begins with a physical assessment by our certified physiotherapists. We examine your wrist, arm, and hand for tenderness, swelling, movement limitations, and strength. If you have existing X-rays, MRIs or CT scans, bring them along.",
    step2: "Your treatment plan combines hands-on physiotherapy, guided rehabilitation, and our clinical herbal formulation. Specific techniques are selected based on your condition and progress.",
    step3: "As your condition improves, we guide you through targeted exercises to restore wrist strength and flexibility. Consistency with these exercises is essential to maintaining progress and reducing recurrence.",
    expectation: "Recovery depends on the nature and severity of the condition. Some conditions improve more quickly, while others require a longer period of structured care. Our focus is on sustainable recovery rather than short-term relief.",
    testimonials: [
      {
        quote: "Mr. Chin is quite the DIY guy, and likes to use power tools at home. Frequent use probably caused some repetitive strain on his wrist. We treated his wrist pain promptly, and within just a few days, his pain level dropped 70%. Thank you for sharing your story!",
        author: null
      },
      {
        quote: "Janne suffered a common occupational hazard, wrist pain. She came to us after a colleague who was also undergoing treatment recommended us, and using our proprietary herbal medicine and physiotherapy modalities, she's on her way to long-term recovery. Thank you for sharing your story Janne!",
        author: null
      },
      {
        quote: "Carpal tunnel syndrome is a work-related condition that is becoming more prevalent today. Ms Ai Hoon is one of the sufferers who came to see us recently. We are glad we fixed her problem, and would like to let office workers everywhere know that we can offer a non-invasive and painless alternative treatment to surgery.",
        author: null
      }
    ],
    faqs: [
      {
        question: "Do I need a referral?",
        answer: "No. You can book directly with us — no doctor's referral is required."
      },
      {
        question: "How many sessions will I need?",
        answer: "It depends on the condition and severity. A full plan is discussed after your assessment."
      },
      {
        question: "Can you treat carpal tunnel syndrome without surgery?",
        answer: "Yes. Conservative treatment is typically recommended as the first step, and many patients experience improvement without surgery."
      },
      {
        question: "Is this suitable for work-related wrist conditions?",
        answer: "Yes. Repetitive strain and occupational wrist conditions are among the most common cases we treat."
      },
      {
        question: "Do you have X-ray or MRI facilities?",
        answer: "We don't. If imaging is needed, please consult a medical doctor before visiting us."
      }
    ],
    whenToSeek: [
      "Is affecting your ability to work or carry out daily tasks",
      "Involves tingling, numbness or pins and needles",
      "Has not improved with rest or previous treatment",
      "Has you considering surgery as the next step"
    ],
    relatedConditions: ["elbow-pain", "shoulder-pain"]
  },
  "plantar-fasciitis": {
    title: "Plantar Fasciitis and Heel Pain Treatment In Malaysia",
    subtitle: "Resolve Heel Pain and Foot Inflammation With Targeted Functional Therapy",
    intro: "Heel pain can affect every step you take. The first steps in the morning, walking after sitting, or simply getting through a day can become uncomfortable and limiting. Plantar fasciitis is one of the most common causes of heel pain, and one of the most persistent when not properly managed.",
    whyNotImprove: "Plantar fasciitis involves inflammation of the plantar fascia — the band of tissue connecting your heel to your toes. Without actively reducing inflammation and rebuilding foot strength, the condition may persist or recur.",
    whatCauses: [
      "Plantar fasciitis and chronic heel pain",
      "Heel bone spurs (calcaneal spurs)",
      "Achilles tendon tightness contributing to heel pain",
      "Foot strain from prolonged standing or walking",
      "Heel pain that worsens after rest"
    ],
    approach: "Our approach is shaped by Shaolin injury medicine — a tradition developed through treating real musculoskeletal injuries — and refined through over 45 years of clinical experience. At YAPCHANKOR, we address plantar fasciitis by reducing inflammation and restoring the strength needed for long-term support of the foot.",
    approachPoints: [
      "Targeted physiotherapy to reduce strain in the plantar fascia and surrounding structures",
      "Structured strengthening exercises for the foot and lower leg",
      "A proprietary herbal formulation used in our clinics for decades on over 50,000 patients"
    ],
    step1: "Your first visit begins with a physical assessment by our certified physiotherapists. We examine your foot for areas of tenderness, assess pain levels, and evaluate how the condition is affecting your daily function. If you have existing X-rays or MRIs, bring them along.",
    step2: "Your treatment plan combines hands-on physiotherapy, guided rehabilitation, and our clinical herbal formulation. Specific techniques are selected based on your condition and stage of recovery.",
    step3: "As inflammation reduces, we guide you through exercises to strengthen the foot and lower leg. We also advise on footwear and activity modification, as long-term recovery depends on restoring foot strength rather than relying only on symptom relief.",
    expectation: "Recovery depends on the severity and duration of your condition, as well as consistency with treatment and exercises. Many patients begin to notice improvement as treatment progresses. Our focus is on resolving the condition and supporting long-term function.",
    testimonials: [
      {
        quote: "Saya mengalami Plantar Fasciitis dimana saya berasa sakit di bahagian tumit kaki kiri. Saya mengetahui mengenai Yap Chan Kor melalui suami saya, dan menyarankan agar mendapatkan rawatan di sini sebagai alternatif suntikan steroid. Terima kasih kepada Cik Najihah, fisioterapi yang telah memantau perkembangan rawatan yang telah diberikan. Frankly, saya amat menyukai the patch medicine as it soothe the pain. Malah, ia menghilangkan sekahan di kaki. Thanks to Cik Najihah and YapChanKor!",
        author: "Wan Noraishah"
      },
      {
        quote: "I got to know Yap Chan Kor from the internet. I had this shooting pain around my heel area. After about 7 sessions of treatment, the pain around the heel has gone. Thanks to Yap Chan Kor and I will surely recommend the treatment to my friends if any of them has any problem with their muscle or joints.",
        author: "Zahrul"
      },
      {
        quote: "For almost a year, I had experienced heel pain during initial few steps of walking whenever rising from bed or after prolonged period of sitting. An X-ray confirmed it is a calcaneal spur and I was referred for physiotherapy. Through online research, I came across YAPCHANKOR and having read the testimonials, decided to sign up for 14-days treatment plan. Treatment has reduced inflammation of my heel tendon notably after the 7th session. Thank you to YAPCHANKOR and special thanks to Mr. Ganesh for his effort and services.",
        author: "Philip Liew"
      }
    ],
    faqs: [
      {
        question: "Do I need a referral?",
        answer: "No. You can book directly with us — no doctor's referral is required."
      },
      {
        question: "How many sessions will I need?",
        answer: "It depends on the severity and duration of your condition. A full plan is discussed after your assessment."
      },
      {
        question: "Can you treat heel bone spurs?",
        answer: "Yes. Heel bone spurs often occur alongside plantar fasciitis. Treatment focuses on reducing inflammation and improving function."
      },
      {
        question: "Do I need to stop walking or exercising during treatment?",
        answer: "Your physiotherapist will advise based on your condition. Activity modification may be recommended."
      },
      {
        question: "Should I use orthotics?",
        answer: "Orthotics may provide temporary support. We also focus on strengthening the foot to support long-term recovery."
      },
      {
        question: "Do you have X-ray or MRI facilities?",
        answer: "We don't. If imaging is needed, please consult a medical doctor before visiting us."
      }
    ],
    whenToSeek: [
      "Is worse during your first steps in the morning or after rest",
      "Is affecting your ability to walk or stand comfortably",
      "Has not improved with previous treatment",
      "Has you considering injections as the next step"
    ],
    relatedConditions: ["sprained-ankle", "knee-pain"]
  },
  "lower-back-pain": {
    title: "Lower Back Pain Treatment In Malaysia",
    subtitle: "Structured Recovery for Lumbar Pain, Sciatica and Chronic Lower Back Conditions",
    intro: "Lower back pain affects the area below the rib cage, known as the lumbar region. It can interfere with how you sit, stand, walk, sleep, and work — and over time, it can significantly impact your daily life and productivity. Whether your pain started from an injury or developed gradually, many patients find that relief is temporary and the problem keeps returning.",
    whyNotImprove: "Lower back pain rarely comes from a single cause. It may involve muscle or ligament strain, slipped or herniated discs, joint degeneration such as arthritis, spinal irregularities such as scoliosis, or nerve compression causing sciatica. Because these factors often overlap, treating only one aspect — such as pain relief alone or exercise alone — may not fully resolve the condition.",
    whatCauses: [
      "Muscle and ligament strain",
      "Slipped or herniated discs",
      "Sciatica and nerve-related pain",
      "Osteoarthritis and spinal degeneration",
      "Scoliosis and postural imbalances",
      "Osteoporosis-related compression issues"
    ],
    approach: "Our approach is shaped by Shaolin injury medicine — a tradition developed through treating real musculoskeletal injuries — and refined through over 45 years of clinical experience. At YAPCHANKOR, we focus on addressing inflammation, restoring movement, and rebuilding strength together.",
    approachPoints: [
      "Hands-on physiotherapy to reduce strain and improve mobility",
      "Structured rehabilitation to restore function and stability",
      "A proprietary herbal formulation used in our clinics for decades on over 50,000 patients"
    ],
    step1: "Your first visit begins with a physical assessment by our certified physiotherapists. We evaluate your ability to sit, stand, walk, and move your legs, assess pain levels and patterns, and determine how the condition is affecting your daily function. If you have existing X-rays, MRIs or CT scans, bring them along.",
    step2: "Your treatment plan combines hands-on physiotherapy, guided rehabilitation, and our clinical herbal formulation. Specific techniques are selected based on your condition and progress.",
    step3: "As your condition improves, we guide you through exercises to strengthen your core muscles — including your back and abdominal muscles — and improve posture and movement patterns. Consistency with these exercises is essential to maintaining recovery and reducing recurrence.",
    expectation: "Lower back pain often develops over time, and recovery also takes time. Some patients notice improvement earlier, while more chronic conditions require a longer period of structured care. Our focus is on sustainable recovery rather than short-term relief.",
    testimonials: [
      {
        quote: "I was involved in many sport activities back in high school 12 years ago. One particular incident I remember was injuring my spine and that also affected my right leg. I sought acupuncture treatment and thought it was healed because the pain subsided. 12 years later the pain came back and I decided to have it X-rayed only to realise I was diagnosed with scoliosis and back pain. So I tried Yap Chan Kor for a few months and every session showed a lot of improvement.",
        author: "Chen JJ"
      },
      {
        quote: "Semenjak menjalani rawatan di YAP CHAN KOR, sakit belakang, bahu dan leher saya telah berkurangan sebanyak 80%, lagi 20% saya perlu membuat latihan dan senaman seperti yang telah juru terapi saya ajarkan. Terima kasih Yap Chan Kor dan juru terapi saya, Vaharli Hasan atas layanan yang sangat bagus sepanjang saya menjalani rawatan saya disini.",
        author: "Wan Zainuriah"
      }
    ],
    faqs: [
      {
        question: "Do I need a referral?",
        answer: "No. You can book directly with us — no doctor's referral is required."
      },
      {
        question: "How many sessions will I need?",
        answer: "It depends on the severity and duration of your condition. A full plan is discussed after your assessment."
      },
      {
        question: "Can you treat sciatica?",
        answer: "Yes. Sciatica, which involves nerve-related pain radiating down the leg, is one of the conditions we assess and manage as part of lower back treatment."
      },
      {
        question: "Is this suitable if I've tried other treatments?",
        answer: "Yes. Many patients come to us after trying other approaches without lasting improvement."
      },
      {
        question: "Do you have X-ray or MRI facilities?",
        answer: "We do not provide imaging. If needed, please consult a medical doctor before visiting us."
      }
    ],
    whenToSeek: [
      "Is persistent or keeps returning",
      "Involves numbness or tingling down the legs",
      "Is affecting your sleep, work, or mobility",
      "Has not improved with previous treatment"
    ],
    relatedConditions: ["back-pain", "sciatica", "slipped-disc"]
  },
  "slipped-disc": {
    title: "Slipped Disc Treatment In Malaysia",
    subtitle: "Non-Surgical Recovery for Herniated and Bulging Disc Conditions",
    intro: "Between each vertebra in your spine are discs that act as cushions, allowing movement and absorbing pressure. When the inner portion of a disc pushes out through its outer layer, it is known as a slipped disc, or herniated disc. This can place pressure on nearby nerves, leading to pain, numbness, or weakness in the arms or legs depending on where the disc is affected.",
    whyNotImprove: "A slipped disc is not just a structural issue — it often involves a combination of disc displacement affecting surrounding nerves, inflammation contributing to pain and nerve irritation, and reduced mobility and muscle weakness around the spine. When treatment focuses on only one aspect, such as pain relief alone, symptoms may improve temporarily but return when underlying factors are not addressed together.",
    whatCauses: [
      "Herniated or bulging discs in the lumbar spine (e.g. L4/L5, L5/S1)",
      "Cervical disc conditions affecting the neck",
      "Sciatica with pain radiating down the leg",
      "Nerve compression causing arm or leg numbness",
      "Disc-related lower back or neck pain"
    ],
    approach: "Our approach is shaped by Shaolin injury medicine — a tradition developed through treating real musculoskeletal injuries — and refined through over 45 years of clinical experience. At YAPCHANKOR, we focus on reducing inflammation, restoring movement, and rebuilding spinal support to stabilise recovery.",
    approachPoints: [
      "Hands-on physiotherapy to reduce strain and improve mobility",
      "Structured rehabilitation to restore strength and spinal stability",
      "A proprietary herbal formulation used in our clinics for decades on over 50,000 patients"
    ],
    step1: "Your first visit begins with a physical assessment by our certified physiotherapists. We examine your spine for areas of tenderness, assess your movement, muscle strength, and nerve involvement, and evaluate how the condition is affecting your daily function. If you have existing X-rays, MRIs or CT scans, bring them along.",
    step2: "Your treatment plan combines hands-on physiotherapy, guided rehabilitation, and our clinical herbal formulation. Specific techniques are selected based on your condition and progress.",
    step3: "As your condition improves, we guide you through exercises to strengthen your back and core muscles, improve flexibility, and support long-term spinal stability. Consistency with these exercises is essential to maintaining recovery and reducing recurrence.",
    expectation: "Recovery depends on the severity of the disc condition, the duration of symptoms, and consistency with treatment and rehabilitation. Some patients notice improvement earlier, while more persistent conditions require a longer period of structured care. Our focus is on sustainable recovery rather than short-term symptom relief.",
    testimonials: [
      {
        quote: "Pada mulanya, saya tidak berjalan elok mahupun berdiri tegak disebabkan constrained Calf Muscle. Saya mengalami sakit ini sejak 2 bulan lepas. Selepas treatment di hospital, urut dan macam-macam lagi, tidak ada yang elok. Mujur ibu saya berikan saya nombor YCK dan beritahu tentang kebaikan treatment di YCK. Alhamdulilah selepas beberapa sesi, kaki saya sembuh dan boleh berjalan dan berdiri tegak. Terima kasih atas layanan doktor yang baik yang sentiasa melayan kerenah saya.",
        author: "Eqhwan"
      },
      {
        quote: "Hana was a great success story for us recently. She suffered from herniated disc at her L5/S1 with mild scoliosis. She was suffering from really bad pain and the doctor advised surgery as her conservative treatments like physiotherapy and acupuncture weren't working. It was a stroke of luck she came to us because of a scheduling delay for her MRI, because after our treatment, the MRI showed that her herniated disc condition was improving! Her doctor had the good sense and open mind to ask her to continue with our treatment and we hope that she's now well on her way to a full recovery!",
        author: null
      },
      {
        quote: "I was involved in many sport activities back in high school 12 years ago. One particular incident I remember was injuring my spine and that also affected my right leg. I sought acupuncture treatment and thought it was healed because the pain subsided. 12 years later the pain came back and I decided to have it X-rayed only to realise I was diagnosed with scoliosis and back pain. So I tried Yap Chan Kor for a few months and every session showed a lot of improvement.",
        author: "Chen JJ"
      }
    ],
    faqs: [
      {
        question: "Do I need a referral?",
        answer: "No. You can book directly with us — no doctor's referral is required."
      },
      {
        question: "How many sessions will I need?",
        answer: "It depends on the severity and duration of your condition. A full plan is discussed after your assessment."
      },
      {
        question: "Can slipped discs be treated without surgery?",
        answer: "Many disc-related conditions are managed conservatively. Clinical guidelines recommend starting with non-invasive treatment before considering surgery."
      },
      {
        question: "Can you treat sciatica?",
        answer: "Yes. Sciatica, involving nerve-related pain down the leg, is one of the conditions we assess and manage."
      },
      {
        question: "Do you have X-ray or MRI facilities?",
        answer: "We do not provide imaging. If needed, please consult a medical doctor before visiting us."
      }
    ],
    whenToSeek: [
      "Involve persistent back or neck pain",
      "Include numbness, tingling, or weakness in the limbs",
      "Are affecting your daily activities or work",
      "Have not improved with previous treatment"
    ],
    relatedConditions: ["sciatica", "lower-back-pain", "back-pain"]
  },
  "osteoarthritis-knee": {
    title: "Knee Osteoarthritis Treatment In Malaysia",
    subtitle: "Manage Degenerative Knee Conditions and Improve Mobility and Comfort",
    intro: "Knee osteoarthritis is a degenerative joint condition that develops over time as the cartilage within the knee gradually wears down. It can affect how you walk, climb stairs, stand up from sitting, and carry out daily activities — often reducing overall mobility and quality of life.",
    whyNotImprove: "Knee osteoarthritis is not just a wear-and-tear issue. It often involves a combination of cartilage degeneration within the joint, inflammation contributing to pain and stiffness, reduced mobility and joint function, and weakening of surrounding muscles due to reduced use. Without addressing both joint function and surrounding muscle support, the condition may continue to limit mobility over time.",
    whatCauses: [
      "Age-related joint degeneration",
      "Excess weight placing increased load on the knee",
      "Repetitive strain from activities such as running or sports",
      "Previous knee injuries",
      "Hereditary factors"
    ],
    approach: "Our approach is shaped by Shaolin injury medicine — a tradition developed through treating real musculoskeletal injuries — and refined through over 45 years of clinical experience. At YAPCHANKOR, we focus on reducing inflammation, improving joint mobility, and strengthening the structures that support the knee.",
    approachPoints: [
      "Hands-on physiotherapy to reduce strain and improve joint movement",
      "Structured rehabilitation to restore strength and mobility",
      "A proprietary herbal formulation used in our clinics for decades on over 50,000 patients"
    ],
    step1: "Your first visit begins with a physical assessment by our certified physiotherapists. We evaluate pain levels, swelling, and both active and passive range of motion, and assess how the condition is affecting your daily activities. If you have existing X-rays, MRIs or CT scans, bring them along.",
    step2: "Your treatment plan combines hands-on physiotherapy, guided rehabilitation, and our clinical herbal formulation. Specific techniques are selected based on your condition and progress.",
    step3: "As your condition improves, we guide you through exercises to strengthen the muscles supporting the knee and improve joint mobility. Maintaining muscle strength is important in supporting joint function and reducing long-term strain.",
    expectation: "Knee osteoarthritis is a chronic condition that develops over time, and recovery also requires a structured approach over time. Many patients begin to notice improvement as treatment progresses, depending on the severity of the condition, how long symptoms have been present, and consistency with rehabilitation exercises. Our focus is on improving function and reducing discomfort in a sustainable way.",
    testimonials: [
      {
        quote: "Pada mulanya, saya tidak berjalan elok mahupun berdiri tegak disebabkan constrained Calf Muscle. Saya mengalami sakit ini sejak 2 bulan lepas. Selepas treatment di hospital, urut dan macam-macam lagi, tidak ada yang elok. Mujur ibu saya berikan saya nombor YCK dan beritahu tentang kebaikan treatment di YCK. Alhamdulilah selepas beberapa sesi, kaki saya sembuh dan boleh berjalan dan berdiri tegak. Terima kasih atas layanan doktor yang baik yang sentiasa melayan kerenah saya.",
        author: "Eqhwan"
      },
      {
        quote: "I was involved in many sport activities back in high school 12 years ago. One particular incident I remember was injuring my spine and that also affected my right leg. I sought acupuncture treatment and thought it was healed because the pain subsided. 12 years later the pain came back and I decided to have it X-rayed only to realise I was diagnosed with scoliosis and back pain. So I tried Yap Chan Kor for a few months and every session showed a lot of improvement.",
        author: "Chen JJ"
      }
    ],
    faqs: [
      {
        question: "Do I need a referral?",
        answer: "No. You can book directly with us — no doctor's referral is required."
      },
      {
        question: "How many sessions will I need?",
        answer: "It depends on the severity and duration of your condition. A full plan is discussed after your assessment."
      },
      {
        question: "Is this suitable before considering injections or surgery?",
        answer: "Yes. Conservative care is typically recommended as the first step for knee osteoarthritis."
      },
      {
        question: "Can elderly patients undergo this treatment?",
        answer: "Yes. Treatment is adapted based on your condition and physical capacity."
      },
      {
        question: "Do you have X-ray or MRI facilities?",
        answer: "We do not provide imaging. If needed, please consult a medical doctor before visiting us."
      }
    ],
    whenToSeek: [
      "Is affecting your ability to walk, climb stairs, or stand comfortably",
      "Is becoming progressively worse",
      "Has not improved with previous treatment",
      "Has you considering injections or surgery"
    ],
    relatedConditions: ["knee-pain", "osteoarthritis"]
  },
  "osteoarthritis": {
    title: "Hip Osteoarthritis Treatment In Malaysia",
    subtitle: "Manage Hip Joint Degeneration and Improve Mobility and Comfort",
    intro: "Hip osteoarthritis is a degenerative joint condition where the cartilage in the hip gradually wears down over time. It can affect how you walk, stand, climb stairs, and even sit or lie down comfortably. Many patients also notice stiffness when getting up from a seated position, or reduced flexibility when moving the hip.",
    whyNotImprove: "Hip osteoarthritis is not just a wear-and-tear issue. It often involves a combination of cartilage degeneration within the hip joint, inflammation contributing to pain and stiffness, reduced range of motion and joint mobility, and weakening of surrounding muscles due to reduced use. Without addressing both joint function and muscle support, the condition may continue to limit mobility over time.",
    whatCauses: [
      "Age-related joint degeneration",
      "Previous hip injuries",
      "Repetitive stress on the hip joint",
      "Muscle weakness affecting joint support",
      "Hereditary factors"
    ],
    approach: "Our approach is shaped by Shaolin injury medicine — a tradition developed through treating real musculoskeletal injuries — and refined through over 45 years of clinical experience. At YAPCHANKOR, we focus on reducing inflammation, improving hip mobility, and strengthening the structures that support the joint.",
    approachPoints: [
      "Hands-on physiotherapy to improve joint movement and reduce strain",
      "Structured rehabilitation to restore strength and mobility",
      "A proprietary herbal formulation used in our clinics for decades on over 50,000 patients"
    ],
    step1: "Your first visit begins with a physical assessment by our certified physiotherapists. We evaluate pain levels, joint mobility, and both active and passive range of motion, and assess how the condition is affecting your daily activities. If you have existing X-rays, MRIs or CT scans, bring them along.",
    step2: "Your treatment plan combines hands-on physiotherapy, guided rehabilitation, and our clinical herbal formulation. Specific techniques are selected based on your condition and progress.",
    step3: "As your condition improves, we guide you through exercises to strengthen the muscles supporting the hip joint and improve movement patterns. Maintaining muscle strength is important in supporting joint function and reducing long-term strain.",
    expectation: "Hip osteoarthritis develops over time, and recovery also requires a structured and consistent approach. Many patients begin to notice improvement as treatment progresses, depending on the severity of the condition, how long symptoms have been present, and consistency with rehabilitation exercises. Our focus is on improving mobility and reducing discomfort in a sustainable way.",
    testimonials: [
      {
        quote: "Pada mulanya, saya tidak berjalan elok mahupun berdiri tegak disebabkan constrained Calf Muscle. Selepas treatment di hospital, urut dan macam-macam lagi, tidak ada yang elok. Alhamdulilah selepas beberapa sesi, kaki saya sembuh dan boleh berjalan dan berdiri tegak. Terima kasih atas layanan doktor yang baik.",
        author: "Eqhwan"
      },
      {
        quote: "I was involved in many sport activities back in high school 12 years ago. One particular incident I remember was injuring my spine and that also affected my right leg. So I tried Yap Chan Kor for a few months and every session showed a lot of improvement. The nagging pain has been reduced to nothing.",
        author: "Chen JJ"
      }
    ],
    faqs: [
      {
        question: "Do I need a referral?",
        answer: "No. You can book directly with us — no doctor's referral is required."
      },
      {
        question: "How many sessions will I need?",
        answer: "It depends on the severity and duration of your condition. A full plan is discussed after your assessment."
      },
      {
        question: "Is this suitable before considering injections or surgery?",
        answer: "Yes. Conservative care is typically recommended as the first step for hip osteoarthritis."
      },
      {
        question: "Is this suitable for older patients?",
        answer: "Yes. Treatment is adapted based on your condition and physical capacity."
      },
      {
        question: "Do you have X-ray or MRI facilities?",
        answer: "We do not provide imaging. If needed, please consult a medical doctor before visiting us."
      }
    ],
    whenToSeek: [
      "Is affecting your ability to walk or stand comfortably",
      "Is becoming progressively worse",
      "Has not improved with previous treatment",
      "Has you considering injections or surgery"
    ],
    relatedConditions: ["hip-pain", "osteoarthritis-knee"]
  },
  "sciatica": {
    title: "Sciatica Treatment In Malaysia",
    subtitle: "Targeted Relief for Nerve Pain Radiating from the Lower Back to the Leg",
    intro: "Sciatica is a condition where pain radiates from the lower back down through the buttock and into the leg. It is typically caused by irritation or compression of the sciatic nerve — the longest nerve in the body. The pain can range from a dull ache to a sharp, burning sensation.",
    whyNotImprove: "Sciatica is not just a nerve problem. It often involves a combination of disc-related issues such as slipped or bulging discs, inflammation affecting the nerve, muscle tightness placing additional pressure on the nerve, and reduced mobility and strength in the lower back and hips. When treatment focuses only on pain relief, symptoms may temporarily improve but return because the underlying causes are not addressed together.",
    whatCauses: [
      "Slipped or herniated discs (lumbar spine)",
      "Nerve compression in the lower back",
      "Muscle-related pressure on the sciatic nerve",
      "Postural or movement-related imbalances",
      "Recurring lower back conditions leading to nerve irritation"
    ],
    approach: "Our approach is shaped by Shaolin injury medicine — a tradition developed through treating real musculoskeletal injuries — and refined through over 45 years of clinical experience. At YAPCHANKOR, we address sciatica by reducing inflammation around the nerve, restoring movement, and rebuilding the strength needed to support long-term recovery.",
    approachPoints: [
      "Hands-on physiotherapy to reduce pressure on the nerve and improve mobility",
      "Structured rehabilitation to restore strength and movement patterns",
      "A proprietary herbal formulation used in our clinics for decades on over 50,000 patients"
    ],
    step1: "Your first visit begins with a physical assessment by our certified physiotherapists. We evaluate your lower back, hip movement, nerve involvement, and how the condition is affecting your daily activities. If you have existing X-rays, MRIs or CT scans, bring them along.",
    step2: "Your treatment plan combines hands-on physiotherapy, guided rehabilitation, and our clinical herbal formulation. Specific techniques are selected based on your condition and stage of recovery.",
    step3: "As your condition improves, we guide you through exercises to strengthen your lower back and hip muscles, improve mobility, and reduce pressure on the sciatic nerve. Consistency with these exercises is essential to maintaining recovery and reducing recurrence.",
    expectation: "Sciatica can vary significantly in severity. Some patients experience improvement earlier, while others require a longer period of structured care depending on the cause and duration of symptoms. Our focus is on sustainable recovery rather than short-term symptom relief.",
    testimonials: [
      {
        quote: "I was suffering from sciatica for months. After trying various treatments without lasting improvement, I came to YAPCHANKOR. The integrated approach addressing both the nerve compression and the underlying inflammation made a real difference. I'm back to my normal activities now.",
        author: null
      }
    ],
    faqs: [
      {
        question: "Do I need a referral?",
        answer: "No. You can book directly with us — no doctor's referral is required."
      },
      {
        question: "How many sessions will I need?",
        answer: "It depends on the cause and severity of your condition. A full plan is discussed after your assessment."
      },
      {
        question: "Is sciatica related to slipped discs?",
        answer: "In many cases, sciatica is linked to disc-related issues in the lower back. These are assessed during your first visit."
      },
      {
        question: "Can this be treated without injections or surgery?",
        answer: "Conservative care is typically recommended as the first step for sciatica."
      },
      {
        question: "Do you have X-ray or MRI facilities?",
        answer: "We do not provide imaging. If needed, please consult a medical doctor before visiting us."
      }
    ],
    whenToSeek: [
      "Include pain radiating from the lower back into the leg",
      "Involve numbness, tingling, or weakness",
      "Are affecting your ability to walk, sit, or work",
      "Have not improved with previous treatment"
    ],
    relatedConditions: ["slipped-disc", "lower-back-pain", "back-pain"]
  },
  "hip-pain": {
    title: "Hip Pain Treatment In Malaysia",
    subtitle: "Restore Hip Mobility and Reduce Pain with Targeted Functional Therapy",
    intro: "Hip pain can affect how you walk, sit, stand, and move throughout the day. Over time, even simple activities like climbing stairs, getting out of a chair, or turning in bed can become uncomfortable. Unlike knee pain, hip pain is often harder to pinpoint — and many patients find that it persists despite rest or basic treatment.",
    whyNotImprove: "Hip pain is rarely caused by a single issue. It often involves a combination of muscle tightness and imbalance around the hip joint, joint stiffness reducing range of motion, inflammation affecting surrounding tissues, and movement patterns that continue to strain the joint. Because the hip is a deep, load-bearing joint, problems here can also affect the lower back, knees, and overall posture. When treatment focuses on only one aspect — such as pain relief alone — symptoms may return when underlying factors are not addressed together.",
    whatCauses: [
      "Muscle strains and soft tissue injuries around the hip",
      "Hip joint stiffness and restricted movement",
      "Tendon irritation (e.g. hip tendinitis)",
      "Sports-related hip injuries",
      "Postural or movement-related imbalances",
      "Referred pain from the lower back"
    ],
    approach: "Our approach is shaped by Shaolin injury medicine — a tradition developed through treating real musculoskeletal injuries — and refined through over 45 years of clinical experience. At YAPCHANKOR, we address hip pain by reducing inflammation, restoring joint mobility, and rebuilding strength to support long-term movement.",
    approachPoints: [
      "Hands-on physiotherapy to reduce tension and improve joint movement",
      "Structured rehabilitation to restore strength and mobility",
      "A proprietary herbal formulation used in our clinics for decades on over 50,000 patients"
    ],
    step1: "Your first visit begins with a physical assessment by our certified physiotherapists. We evaluate your hip movement, pain patterns, and how the condition is affecting your daily activities. We also assess related areas such as the lower back and knees, as these often contribute to hip pain. If you have existing X-rays, MRIs or CT scans, bring them along.",
    step2: "Your treatment plan combines hands-on physiotherapy, guided rehabilitation, and our clinical herbal formulation. Specific techniques are selected based on your condition and stage of recovery.",
    step3: "As your condition improves, we guide you through exercises to strengthen the muscles around the hip and improve movement patterns. This is essential for maintaining recovery and reducing recurrence.",
    expectation: "Recovery depends on the cause and duration of your hip pain. Some conditions improve more quickly, while others require a longer period of structured care. Our focus is on restoring function and reducing discomfort in a sustainable way.",
    testimonials: [
      {
        quote: "Hip pain was affecting my daily life and my ability to exercise. After treatment at YAPCHANKOR, I've regained my mobility and can move without discomfort. The comprehensive approach really made the difference.",
        author: null
      }
    ],
    faqs: [
      {
        question: "Do I need a referral?",
        answer: "No. You can book directly with us — no doctor's referral is required."
      },
      {
        question: "How many sessions will I need?",
        answer: "It depends on the cause and severity of your condition. A full plan is discussed after your assessment."
      },
      {
        question: "Is hip pain related to lower back problems?",
        answer: "In many cases, hip pain is linked to lower back or movement-related issues. These are assessed during your visit."
      },
      {
        question: "Can this be treated without injections or surgery?",
        answer: "Conservative care is typically recommended as the first step for most hip-related conditions."
      },
      {
        question: "Do you have X-ray or MRI facilities?",
        answer: "We do not provide imaging. If needed, please consult a medical doctor before visiting us."
      }
    ],
    whenToSeek: [
      "Is affecting your ability to walk, sit, or move comfortably",
      "Keeps returning despite rest or treatment",
      "Is spreading to your lower back or knees",
      "Has not improved with previous treatment"
    ],
    relatedConditions: ["osteoarthritis", "knee-pain", "lower-back-pain"]
  },
  "elbow-pain": {
    title: "Elbow Pain Treatment In Malaysia",
    subtitle: "Targeted Care for Tennis Elbow, Golfer's Elbow and Repetitive Strain Injuries",
    intro: "Elbow pain can make simple daily activities difficult — lifting objects, typing, gripping, or even holding a cup can trigger discomfort. Two of the most common conditions are tennis elbow (lateral epicondylitis) — pain on the outer elbow and golfer's elbow (medial epicondylitis) — pain on the inner elbow. These conditions are often caused by repetitive strain rather than a single injury.",
    whyNotImprove: "Elbow pain is typically not just an isolated joint issue. It often involves a combination of overuse of the forearm muscles and tendons, inflammation at the tendon attachment points, repetitive strain from work or sports activities, and weakness in supporting muscle groups. Because these factors develop over time, simply resting the elbow may not fully resolve the condition. Without restoring strength and reducing underlying strain, symptoms often return when activity resumes.",
    whatCauses: [
      "Tennis elbow (outer elbow pain)",
      "Golfer's elbow (inner elbow pain)",
      "Repetitive strain injuries from office work or manual labour",
      "Tendon irritation from sports such as badminton, tennis, or golf",
      "General elbow stiffness and weakness"
    ],
    approach: "Our approach is shaped by Shaolin injury medicine — a tradition developed through treating real musculoskeletal injuries — and refined through over 45 years of clinical experience. At YAPCHANKOR, we address elbow pain by reducing inflammation, restoring movement, and rebuilding strength to prevent recurrence.",
    approachPoints: [
      "Hands-on physiotherapy to reduce strain and improve movement",
      "Structured rehabilitation to restore strength in the forearm and elbow",
      "A proprietary herbal formulation used in our clinics for decades on over 50,000 patients"
    ],
    step1: "Your first visit begins with a physical assessment by our certified physiotherapists. We examine your elbow, forearm, and wrist, assess pain points, movement limitations, and how the condition is affecting your daily activities. If you have existing imaging, bring it along.",
    step2: "Your treatment plan combines hands-on physiotherapy, guided rehabilitation, and our clinical herbal formulation. Specific techniques are selected based on your condition and stage of recovery.",
    step3: "As your condition improves, we guide you through exercises to strengthen the forearm muscles and improve load tolerance. This is essential for preventing recurrence when you return to work or sports activities.",
    expectation: "Elbow pain caused by repetitive strain typically improves with structured treatment, though recovery depends on how long the condition has been present, the level of strain placed on the elbow, and consistency with rehabilitation exercises. Our focus is on sustainable recovery and preventing recurrence.",
    testimonials: [
      {
        quote: "My tennis elbow was affecting my work and my ability to play sports. After treatment at YAPCHANKOR, I've regained full function and strength in my elbow. I'm back to playing tennis without pain.",
        author: null
      }
    ],
    faqs: [
      {
        question: "Do I need a referral?",
        answer: "No. You can book directly with us — no doctor's referral is required."
      },
      {
        question: "How many sessions will I need?",
        answer: "It depends on the severity and duration of your condition. A full plan is discussed after your assessment."
      },
      {
        question: "Is this suitable if I use my hands a lot for work?",
        answer: "Yes. Many elbow pain cases are work-related, and treatment includes guidance to reduce strain while maintaining activity."
      },
      {
        question: "Can this be treated without injections or surgery?",
        answer: "Conservative care is typically recommended as the first step for tendon-related conditions."
      },
      {
        question: "Do you have X-ray or MRI facilities?",
        answer: "We do not provide imaging. If needed, please consult a medical doctor before visiting us."
      }
    ],
    whenToSeek: [
      "Is affecting your ability to grip, lift, or carry objects",
      "Is worsening with repeated use",
      "Has not improved with rest or previous treatment",
      "Keeps returning when you resume activity"
    ],
    relatedConditions: ["wrist-pain", "shoulder-pain"]
  },
  "post-surgery-rehab": {
    title: "Post-Surgery and Post-Injury Rehabilitation in Malaysia",
    subtitle: "Structured Recovery to Restore Function After Injury or Surgery",
    intro: "Recovering from an injury or surgery does not end when the procedure or initial treatment is over.\n\nMany patients find that even after medical treatment, they continue to experience stiffness, weakness, limited mobility, or recurring pain. Without proper rehabilitation, recovery may remain incomplete.\n\nAt YAPCHANKOR, we support patients in the recovery phase — helping restore movement, rebuild strength, and return to normal activity with a structured, integrated approach.",
    whyNotImprove: "After injury or surgery, the body goes through a healing process — but healing alone does not always restore full function.\n\nWithout structured rehabilitation, factors like reduced mobility, muscle weakness, and stiffness can lead to prolonged discomfort or incomplete recovery.",
    whatCauses: [
      "reduced mobility in the affected joint or area",
      "muscle weakness from disuse",
      "scar tissue or stiffness limiting movement",
      "lingering inflammation affecting recovery",
      "fear of movement or re-injury"
    ],
    approach: "Our approach is shaped by Shaolin injury medicine — a tradition developed through treating real injuries — and refined through over 45 years of clinical experience. At YAPCHANKOR, we focus on supporting recovery after the initial medical phase — restoring function, mobility, and strength in a structured way.",
    approachPoints: [
      "hands-on physiotherapy to improve movement and reduce stiffness",
      "structured rehabilitation to rebuild strength and coordination",
      "a proprietary herbal formulation used in our clinics for decades on over 50,000 patients, and studied for its anti-inflammatory properties through laboratory research conducted by our research partner, Relivium Sciences (maker of PainFix products)"
    ],
    expectation: "Recovery timelines vary depending on the type of injury or surgery, how long ago the procedure occurred, your baseline mobility, and consistency with rehabilitation. Our focus is on restoring function and helping you regain confidence in movement over time.",
    whenToSeek: [
      "feel stiff or weak after injury or surgery",
      "are not regaining full movement",
      "experience ongoing discomfort after initial treatment",
      "want to return safely to normal activity"
    ],
    faqs: [
      { question: "Do I need a referral?", answer: "No. You can book directly with us — no doctor’s referral is required." },
      { question: "When should I start rehabilitation?", answer: "This depends on your condition and medical advice. We can assess and guide you based on your stage of recovery." },
      { question: "Can you work together with my doctor or surgeon?", answer: "Yes. Our role is to support your recovery alongside your existing medical care." },
      { question: "Is this suitable after surgery?", answer: "Yes. Post-surgical rehabilitation is one of the key areas we support." },
      { question: "Do you have X-ray or MRI facilities?", answer: "We do not provide imaging. Please bring any existing reports if available." }
    ],
    relatedConditions: ["osteoarthritis-knee", "slipped-disc", "shoulder-pain"]
  },
  "chronic-pain": {
    title: "Chronic Pain Treatment in Malaysia",
    subtitle: "When Pain Keeps Coming Back, There Is Usually a Reason",
    intro: "Many people come to us with the same experience. The pain improves for a while — after rest, medication, massage, or treatment — but then it comes back again.\n\nOver time, this cycle becomes frustrating. You start to wonder if the condition will ever fully resolve.\n\nAt YAPCHANKOR, we regularly see patients who have been dealing with pain for months or years. In many of these cases, the issue is not that the pain cannot improve — but that it has not been addressed in a structured way.",
    whyNotImprove: "Pain is not always caused by a single problem. When only one part of the problem is treated — for example, reducing pain without restoring movement — the condition may improve temporarily but return over time.",
    whatCauses: [
      "underlying inflammation that has not fully resolved",
      "restricted movement or joint stiffness",
      "muscle weakness or imbalance",
      "repeated strain from daily activities",
      "incomplete recovery from past injuries"
    ],
    approach: "Shaolin injury medicine developed through treating real injuries — not just relieving symptoms, but helping the body recover function over time. At YAPCHANKOR, we apply this same principle to chronic pain. Our focus is not just to reduce discomfort, but to address the factors that cause pain to return.",
    approachPoints: [
      "hands-on physiotherapy to restore movement and reduce strain",
      "structured rehabilitation to rebuild strength and stability",
      "a proprietary herbal formulation used in our clinics for decades on over 50,000 patients, and studied for its anti-inflammatory properties through laboratory research conducted by our research partner, Relivium Sciences (maker of PainFix products)"
    ],
    expectation: "Chronic pain develops over time, and recovery also takes time. Progress may not always be immediate, but a structured approach can lead to meaningful improvement in function and comfort. Our focus is on helping you move better and maintain that improvement.",
    whenToSeek: [
      "keeps returning after treatment",
      "has lasted for weeks or months",
      "is affecting your daily life or work",
      "does not fully resolve despite rest or medication"
    ],
    faqs: [
      { question: "Do I need a referral?", answer: "No. You can book directly with us — no doctor’s referral is required." },
      { question: "How long does chronic pain take to improve?", answer: "It depends on how long the condition has been present and the underlying causes. A structured plan is discussed after assessment." },
      { question: "Is this suitable if I’ve tried other treatments?", answer: "Yes. Many patients come to us after trying other approaches without lasting results." },
      { question: "Will the pain come back again?", answer: "Our approach focuses on reducing recurrence by addressing underlying factors, not just symptoms." },
      { question: "Do you have X-ray or MRI facilities?", answer: "We do not provide imaging. If needed, please consult a medical doctor before visiting us." }
    ],
    relatedConditions: ["back-pain", "knee-pain", "shoulder-pain", "sciatica"]
  },
  "sports-injury": {
    title: "Sports Injury Treatment in Malaysia",
    subtitle: "Recover from Injuries and Return to Activity with Structured Rehabilitation",
    intro: "Sports injuries can happen suddenly — during a game, a run, or even routine exercise. What starts as a minor strain or sprain can develop into a longer-term issue if not properly managed.\n\nFor many patients, the challenge is not just recovering from the injury, but returning to activity without the pain coming back.\n\nAt YAPCHANKOR, we regularly see patients who have tried rest, basic physiotherapy, or self-treatment but are unable to fully recover. This is where a more structured, integrated approach can make a difference.",
    whyNotImprove: "Sports injuries are not just about the initial damage. When issues like incomplete healing, lingering inflammation, or joint instability are not addressed together, patients may recover partially — only for the injury to return when activity resumes.",
    whatCauses: [
      "incomplete healing of muscles, ligaments, or tendons",
      "lingering inflammation affecting recovery",
      "reduced mobility or joint stability after injury",
      "weakness in surrounding muscle groups",
      "returning to activity before full recovery"
    ],
    approach: "Our approach is shaped by Shaolin injury medicine — a tradition developed through treating real injuries — and refined through over 45 years of clinical experience. At YAPCHANKOR, we focus on not just healing the injury, but restoring the function and strength needed to return to activity safely.",
    approachPoints: [
      "hands-on physiotherapy to reduce pain and improve mobility",
      "structured rehabilitation to rebuild strength and joint stability",
      "a proprietary herbal formulation used in our clinics for decades on over 50,000 patients, and studied for its anti-inflammatory properties through laboratory research conducted by our research partner, Relivium Sciences (maker of PainFix products)"
    ],
    expectation: "Recovery depends on the severity of the injury and how early it is treated. Some minor injuries improve quickly, while more complex or recurring injuries require a longer period of structured rehabilitation. Our focus is on full recovery and reducing the risk of re-injury.",
    whenToSeek: [
      "is not improving after rest",
      "keeps recurring when you return to activity",
      "is affecting your performance or daily movement",
      "feels unstable or weak"
    ],
    faqs: [
      { question: "Do I need a referral?", answer: "No. You can book directly with us — no doctor’s referral is required." },
      { question: "How soon should I seek treatment after an injury?", answer: "Early assessment can help prevent the injury from becoming more serious or recurring." },
      { question: "Can I continue exercising during treatment?", answer: "This depends on your injury. Your physiotherapist will advise on safe activity levels." },
      { question: "Is this suitable for recurring injuries?", answer: "Yes. Addressing the underlying causes of recurrence is a key part of our approach." },
      { question: "Do you have X-ray or MRI facilities?", answer: "We do not provide imaging. If needed, please consult a medical doctor before visiting us." }
    ],
    relatedConditions: ["sprained-ankle", "knee-pain", "shoulder-pain", "elbow-pain"]
  }
} as Record<string, ConditionContent>;

