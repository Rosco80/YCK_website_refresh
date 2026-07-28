export interface Testimonial {
  id: string;
  title: string;
  slug: string;
  content: string;
  outcome: string;
  link: string;
  length?: number;
  imageUrl?: string; // Optional: add a URL to show a patient photo on the card
}

export function getTopTestimonials(limit: number = 15): Testimonial[] {
  // Sort by content length descending and pick the most comprehensive ones
  return [...testimonialsData]
    .sort((a, b) => (b.content.length || 0) - (a.content.length || 0))
    .slice(0, limit);
}

export function getConditionTestimonials(slug: string, limit: number = 4): Testimonial[] {
  // Filter by slug
  const relevant = testimonialsData.filter(t => t.slug === slug);
  
  // If we don't have enough, try to find "general" or similar
  const general = testimonialsData.filter(t => t.slug === 'general' || t.slug === 'back-pain');
  const pool = relevant.length >= limit ? relevant : [...relevant, ...general.slice(0, limit - relevant.length)];

  // Sort by length ascending (shorter ones) but above a reasonable threshold (e.g., 200 chars)
  return pool
    .sort((a, b) => (a.content.length || 0) - (b.content.length || 0))
    .filter(t => t.content.length > 200)
    .slice(0, limit);
}

export const testimonialsData: Testimonial[] = [
  {
    "id": "testimonial-0",
    "title": "A Healing Journey with An Osteoarthritis Patient",
    "slug": "knee-pain",
    "content": "Madam Lo, standing tall with Mr Yap Chan Kor at the Old Klang Road centre (July 2018)\nMadam Irene Lo, age 66, from Subang Jaya came to YapChanKor Pain Treatment Centre to treat severe pain in her right knee which started in March 2018. The knee pain originated from a mild sprain or injury sustained when she stood up after sitting on the floor for 30 minutes.\nWhen the pain started, she did not seek treatment from our centre immediately. She visited a medical doctor in April which resulted in a prescription for anti-inflammatory drugs and painkillers. The doctor brushed off the injury by saying that it was common for the elderly to injure themselves if they were doing anything strenuous.\nWhat started as a mild throbbing pain on her knee gradually worsened into constant and severe pain. It was aggravated by constant walking and performing household chores.\nBy May, the pain was so bad that it affected her daily mobility. She could not walk, sit or sleep without feeling the pain. While sleeping, a bent knee would trigger the pain so she had to keep her leg straight all the time. Doing housework, marketing, taking care of the grandchildren and walking the dog were all out of the question. Madam Lo was in so much pain that, where once she walked upright, now she could only walk slowly with her back bent, relying on her left knee and a cane for support.\nMadam Lo before treatment for knee osteoarthritis\nWhen she visited YapChanKor in May 2018, her condition had deteriorated and the knee was swollen with inflammation; the injured right knee was visibly larger than the left knee. She was seen by our senior physiotherapist Vicky and the case was diagnosed as Grade 3 chronic osteoarthritis. Madam Lo signed on for 21 treatments of 2 herbal patches and would also be guided to do some physiotherapy exercises at home to strengthen her joints.\nIn this article, we give you some insights into Madam Lo’s treatment course and what goes on behind the doors of the treatment rooms at YapChanKor.\n(Note: Although the 21 treatments were spread across 3 months, for the purposes of this article, we will name the first day of treatment as Day 1, second treatment as Day 2, and so on.)\nPhase I: Daily\nDay 1 to Day 3\nThe swollen knee was treated with ice packs to reduce inflammation and 2 herbal patches were wrapped around the knee before Madam Lo was sent home. As the injury was still prevalent, no massages or other treatments were done in order to prevent the inflammation from getting worse. After 3 consecutive days, the swelling had reduced tremendously and Madam Lo reported feeling less pain and tenderness around the injury.\nHerbal patches wrap the front and back knee\nPhase II: 2 to 3 Times A Week\nDay 4 to Day 12\nAfter the swelling had reduced, the proper treatment began. In every session, Madam Lo experienced the same sequence of treatments.\nFirst, the knee was warmed for 15 minutes with an infrared heat machine to relax muscles and improve blood circulation. This step is only introduced once the swelling has fully subsided, which depends on the speed of the patient’s recovery.\nInfrared heat treatment\nIf infrared heat treatment can’t be introduced yet, an ultrasound device is used on and around the injury to reduce swelling and improve the healing rate by increasing blood circulation. The device administers sound waves and low heat to the skin.\nUltrasound treatment device\nUltrasound treatment device\nFollowing that, a TENS machine providing an adjustable electricity charge was hooked up to Madam Lo’s knee to stimulate the muscles and nerves. This process takes about 15 to 20 minutes.\nElectro-stimulation with a TENS machine\nThe second last part of the treatment involved a light massage of about 10 minutes to loosen and strengthen the tight muscles of the leg. Finally, the 2 herbal patches were administered and wrapped. The patches should stay on for at least 12 to 18 hours.\nMassage being done by senior physiotherapist, Vicky\nMadam Lo was advised to come 2 to 3 times a week during this second phase of the treatment. Each appointment is given a specific date and time slot by the physiotherapist in-charge. The entire session takes approximately 1 hour.\nDay 12 – Physiotherapy Begins\nWhen Vicky, the physiotherapist, detected an improvement and reduction in the swelling of the knee, she began teaching Madam Lo some physiotherapy exercises to perform at home. All she needed are an exercise band and ankle weights. The number of repetitions was suggested and was gradually increased after monitoring the progress.\nLifting the leg and providing resistance with an exercise band\nStrengthening the knee muscles with ankle weights\nStationary cycling\nThe stationary physiotherapy cycle is an optional exercise where she could use a stationary bicycle at home or at the gym.\nMadam Lo’s skin was a bit sensitive so there were some days when the herbal patches are skipped until the following session, but the steps of the treatment still remain the same.\nPhase III: Once a Week\nDay 13 to 16\nGreat progress was seen to the knee recovery and so, Madam Lo was asked to visit only once a week from now on. During each session, she spent about 1 hour undergoing the treatment and did some physiotherapy exercises as guided by the physiotherapist for about 15 minutes.\nDay 16\nMadam Lo reported that after 16 sessions (approximately 8 weeks) and diligent practice of physiotherapy exercises, she could do some light walking around a shopping mall with barely any pain. She felt extremely relieved to know that she was on a fast journey to recovery!\nDay 17 to 21\nWith great happiness that her injury was healing well, Madam Lo was elated that she could now stand upright without her cane and walk with greater walking speed. She also felt well enough to be doing some light cooking, housework and playing with her grandchildren again!\nIn her own words, she praised the treatment at Yap Chan Kor Pain Treatment Centre for its effectiveness, comfort and efficiency in healing her osteoarthritic knee”\n“I would like to thank my therapist, Vicky, for being so patient and skilful in treating my injury. Before the treatment, I couldn’t walk due to the pain. After the treatment, I can walk very well without any pain. I want to thank YapChanKor Pain Treatment Centre for giving back my freedom and mobility.”\nBelow are videos of Madam Lo’s walking to show the difference before and after the treatment.\nThis article was written by Chuah Ai Jou, Madam Lo’s daughter, who is a returning customer herself of YapChanKor Pain Treatment Centre.\nMadam Irene Lo, age 66, from Subang Jaya came to YapChanKor Pain Treatment Centre to treat severe pain in her right knee which started in March 2018. When the pain started, she visited a medical doctor in April who prescribed anti-inflammatory drugs and painkillers. The doctor brushed off the injury by saying that it was common for the elderly to injure themselves if they were doing anything strenuous. But what started as a mild throbbing pain on her knee gradually worsened into constant and severe pain. It was aggravated by constant walking and performing household chores.",
    "outcome": "First, the knee was warmed for 15 minutes with an infrared heat machine to relax muscles and improve blood circulation. This step is only introduced once the swelling has fully subsided, which depends...",
    "link": "https://yapchankor.com/testimonials/a-healing-journey-with-an-osteoarthritis-patient/",
    "length": 7143
  },
  {
    "id": "testimonial-1",
    "title": "Neck and arm pain | Mohamed Omar",
    "slug": "neck-pain",
    "content": "“I am from Kenya, I got cold problem in my arm and neck.\nI have been treated 7 days in Yap Chan Kor and am now feeling better. Thanks to this institution and special thanks to Mr. Arwin.” – Mohamed\nEn.Mohamed Omar_Arwin Testimonial at YAPCHANKOR\nKenyan citizen Mohamed took advantage of this trip to Malaysia to get the numbness in his arm and neck treated at our centre. He felt \"cold\" in his arm, which is due to some compressed nerves in his neck. Our treatment involves reducing the inflammation in his cervical area to release the compression with our medicine.",
    "outcome": "I have been treated 7 days in Yap Chan Kor and am now feeling better. Thanks to this institution and special thanks to Mr. Arwin.” – Mohamed",
    "link": "https://yapchankor.com/testimonials/neck-and-arm-pain-mohamed-omar/",
    "length": 566
  },
  {
    "id": "testimonial-2",
    "title": "Chronic Ankle Sprain | Taufiq C",
    "slug": "sports-injury",
    "content": "“Hi I’m Taufiq. 31 years old. I got injured in a football match. I sprained my ankle badly which was swelling at that time. The next day I went to Hospital Selayang to do X-ray and consultation from doctor. After 3 weeks the ankle still not fully recover. So I decided to search for a therapy where I found Yap Chan Kor in a blog. I went for 7 days course. Alhamdulillah (all praise to Allah) that after the first treatment, I’m able to feel much better and the swelling in my ankle improved. After 7 days, I received good recovery. I got good services and good hospitality from Yap Chan Kor.” –  Taufiq Cheng\nTaufiq_Arwin YAPCHANKOR Testimonial for Chronic Ankle Sprain\nA chronic ankle sprain injury from playing football wasn't going away despite seeing a doctor at a local hospital for Taufiq. With pain and swelling disrupting his active life, Taufiq sought us out and within just 7 days of treatment, he recovered. Our treatment involved applying our anti-swelling, anti-inflammatory Shaolin patches and various physiotherapy modalities.",
    "outcome": "“Hi I’m Taufiq. 31 years old. I got injured in a football match. I sprained my ankle badly which was swelling at that time. The next day I went to Hospital Selayang to do X-ray and consultation from d...",
    "link": "https://yapchankor.com/testimonials/chronic-ankle-sprain-taufiq-c/",
    "length": 1042
  },
  {
    "id": "testimonial-3",
    "title": "Carpal Tunnel Syndrome | Puan Rosliza",
    "slug": "wrist-pain",
    "content": "“Saya mengalami sakit ini mulai bulan Julai 2017. Mendapat rawatan di klinik pakar dan dinasihatkan menjalani pembedahan atau rawatan saraf. Pada bulan Dec 2018, penyakit ini berulang kembali. Kami mencari rawatan tanpa perlu menjalani pembedahan dan akhirnya saya mendapat rawatan di Yap Chan Kor. Dalam tempoh 21 kali rawatan, urutan, ultrasound, dan senaman keadaan tangan saya telah pulih. Terima kasih pada Pn Vaharli dan Pn Sue yang telah merawat saya dengan baik dan mesra sekali. Tips yang baik untuk kesihatan. Terima kasih semua.” – Rosliza\nPuan Rosliza Sakit Carpal Tunnel YCK Testimonial 2019\nAnother patient that we saved from invasive surgery! This patient was suffering from carpal tunnel syndrome, and was advised by her specialists to undergo surgery but wanting to avoid a risky and invasive procedure, she found us, and within just 3 weeks of treatment, her wrist pain has gone.",
    "outcome": "Another patient that we saved from invasive surgery! This patient was suffering from carpal tunnel syndrome, and was advised by her specialists to undergo surgery but wanting to avoid a risky and inva...",
    "link": "https://yapchankor.com/testimonials/carpal-tunnel-syndrome-puan-rosliza/",
    "length": 897
  },
  {
    "id": "testimonial-4",
    "title": "Knee Pain | Puan Rauyah",
    "slug": "knee-pain",
    "content": "“My name is Rauyah, I am 64 years old. I started to have knee pain when I travelled to Terengganu by van in early September. My daughter introduced me to Yap Chan Kor after she made her own research via Google. I started treatment on October 2018 with 21 sessions recommended.\nThis knee pain disallowed me to bend my knee and was difficult to walk properly. I started to feel at ease on my knee as I went through the sessions, with the remaining balance of 5 sessions, I am able to bend my knee and walk properly. The physiotherapist also was very helpful and friendly throughout the sessions. ” – Rauyah M.\nPn Rauyah Ampang Knee Testimonial YAPCHANKOR\nPuan Rauyah recovered from her knee pain after our 21 session integrative treatment using Shaolin herbs and physiotherapy. She could not bend her knee previously and was also unable to walk properly. Our knee pain treatment is a comprehensive and holistic treatment that treats various stages of the healing process. First we have to reduce the pain and inflammation, then we have to improve the body's healing via our medicine as well as physiotherapy, and finally to strengthen and improve the knees flexibility with therapeutic exercises.",
    "outcome": "Puan Rauyah recovered from her knee pain after our 21 session integrative treatment using Shaolin herbs and physiotherapy. She could not bend her knee previously and was also unable to walk properly. ...",
    "link": "https://yapchankor.com/testimonials/knee-pain-puan-rauyah/",
    "length": 1194
  },
  {
    "id": "testimonial-5",
    "title": "Hand Pain, De Quervain’s – Syed Amran",
    "slug": "wrist-pain",
    "content": "Hurt my thumb while twisting the can opener – swollen and unable to perform daily chores. I was even not able to write. I was in pain.\nTreatment with YCK – went for about a period of 2 months with Cik Su. She is an excellent physiotherapist with good customer service. She is polite, respectful and professional.\nAs of today, I believe I have recovered about 95%. I shall continue to do the exercises as recommended by Cik Su.\nThank you YCK. I will definitely recommend YCK to anyone who needs physiotherapy.\nSyed Amran_Susilawati YCK Testimonial",
    "outcome": "As of today, I believe I have recovered about 95%. I shall continue to do the exercises as recommended by Cik Su.",
    "link": "https://yapchankor.com/testimonials/hand-pain-de-quervains-syed-amran/",
    "length": 546
  },
  {
    "id": "testimonial-6",
    "title": "Back Pain with Scoliosis – Chen J J",
    "slug": "back-pain",
    "content": "“I was involved in many sport activities back in high school 12 years ago. One particular incident I remember was injuring my spine and that also affected my right leg. I sought acupuncture treatment and thought it was healed because the pain subsided. 12 years later the pain came back and I decided to have it X-rayed only to realise I was diagnosed with scoliosis and back pain. So I tried Yap Chan Kor for a few months and every session showed a lot of improvement. So far, the nagging pain has been reduced to nothing and I hope it stays that way for good!” – Chen JJ\nScoliosis and back pain real recoveries testimonial from Chen JJ",
    "outcome": "Scoliosis and back pain real recoveries testimonial from Chen JJ",
    "link": "https://yapchankor.com/testimonials/back-pain-with-scoliosis-chen-j-j/",
    "length": 637
  },
  {
    "id": "testimonial-7",
    "title": "Calf Muscle Pain – Eqhwan",
    "slug": "general",
    "content": "“Pada mulanya, saya tidak berjalan elok mahupun berdiri tegak disebabkan constrained Calf Muscle. Saya mengalami sakit ini sejak 2 bulan lepas. Selepas treatment di hospital, urut dan macam-macam lagi, tidak ada yang elok. Mujur ibu saya berikan saya nombor YCK dan beritahu tentang kebaikan treatment di YCK. Alhamdulilah selepas beberapa sesi, kaki saya sembuh dan boleh berjalan dan berdiri tegak. Terima kasih atas layanan doktor yang baik yang sentiasa melayan kerenah saya.” – Eqhwan\nEqhwan_Susilawati-YCK Testimonial",
    "outcome": "Eqhwan_Susilawati-YCK Testimonial",
    "link": "https://yapchankor.com/testimonials/calf-muscle-pain-eqhwan/",
    "length": 523
  },
  {
    "id": "testimonial-8",
    "title": "Sakit belakang, bahu, leher | Wan Zainuriah",
    "slug": "back-pain",
    "content": "“Semenjak menjalani rawatan di YAP CHAN KOR, sakit belakang, bahu dan leher saya telah berkurangan sebanyak 80%, lagi 20% saya perlu membuat latihan dan senaman seperti yang telah juru terapi saya ajarkan. Terima kasih Yap Chan Kor dan juru terapi saya, Vaharli Hasan atas layanan yang sangat bagus sepanjang saya menjalani rawatan saya disini. Kini pergerakan bahu dan leher saya rasa lebih ringan dan kuräng sakit.\nSekian terima kasih.” – Wan Zainuriah\nwan zuinuriah testimonial\nPuan Wan Zainuriah had suffered from cervical pain for months. After our treatment, which in total was 3 weeks of sessions, she recovered by 80% in her pain levels and functional movement. Thanks Puan Wan Zainuriah for sharing your story!",
    "outcome": "Puan Wan Zainuriah had suffered from cervical pain for months. After our treatment, which in total was 3 weeks of sessions, she recovered by 80% in her pain levels and functional movement. Thanks Puan...",
    "link": "https://yapchankor.com/testimonials/sakit-belakang-bahu-leher-wan-zainuriah/",
    "length": 719
  },
  {
    "id": "testimonial-9",
    "title": "Knee and Heel Pain | Wendy C.",
    "slug": "knee-pain",
    "content": "“The new outlet of YAPCHANKOR is comfortable and nice ambience compared with the Subang Jaya which I have been treated for more than 21 days.\nThe pain in the heel is completely gone. The knee is keeping well with good knowledge of understanding from your physio Sharifah and proper guidance by Joy Gan. I am very happy and would like to thank your staff and management for good service and best treatment. Thanks so much.” – Wendy C.\nwendy testimonial for Yapchankor\nWendy is a patient with knee and heel pain who came from our Subang Jaya branch to our new Puchong IOI Mall branch. We treated her problems with our special mix of medicinal herbs (applied topically only) and physiotherapy techniques. Thanks for sharing your story...we are glad to hear that you've recovered!",
    "outcome": "The pain in the heel is completely gone. The knee is keeping well with good knowledge of understanding from your physio Sharifah and proper guidance by Joy Gan. I am very happy and would like to thank...",
    "link": "https://yapchankor.com/testimonials/knee-heel-pain-wendy/",
    "length": 776
  },
  {
    "id": "testimonial-10",
    "title": "Knee PCL Ligament | Dandy",
    "slug": "post-surgery-rehab",
    "content": "“I am an active footballer and sports(man) last 2 years, and in 2015 my knee felt not comfortable when running and jogging.\n2016 I went to MRI and X-ray, found both of my knee PCL a bit (torn) and (the) gap a bit close.\nAfter 21 treatment sessions with YapChanKor, I feel good and more comfortable. 80% improvement success. So I need to continue to take supplements and physiotherapy for better result. Thanks YCK.”\n– Dandy S.\nknee_ligament_injury_soft_tissue_yck_yapchankor_dandy_ema Testimonial\nAn avid footballer and athlete, Dandy suffered from minor tears in his knee PCL (posterior cruciate ligament) a few years back. He had tried some treatments that his orthopaedic doctor prescribed but when he didn't see satisfactory results, he came to YAPCHANKOR. We succeeded in getting his pain and functional levels to improve by 80% based on various measures. Thanks Dandy for sharing your story!",
    "outcome": "After 21 treatment sessions with YapChanKor, I feel good and more comfortable. 80% improvement success. So I need to continue to take supplements and physiotherapy for better result. Thanks YCK.”",
    "link": "https://yapchankor.com/testimonials/knee-pcl-ligament-dandy/",
    "length": 897
  },
  {
    "id": "testimonial-11",
    "title": "Chronic Ankle Pain – Aedan",
    "slug": "post-surgery-rehab",
    "content": "“I work as a mechanic, everyday in my life is mostly lifting heavy objects. One day, I was trying to put on the tires of a BMW X6 when my right ankle slipped. What I thought was a simple sprain happened to be a pain that haunted me for the next 3 years. Every time the pain came, I would go to my usual doctor to get painkillers and anti-swelling [medicine]. My parents told me to go to a physiotherapist to try to cure it, and I came to YAPCHANKOR. After 21 days of treatment, my ankle felt like the incident 3 years ago never happened. Thanks YAPCHANKOR and to its physiotherapists. You all did a great job ♥” – Aedan, 2018\nAedan testimonial for YCK\nThis is a case we are particularly proud of. A 3 year chronic ankle pain sufferer who had been taking painkillers and anti-swelling medicine from doctors to reduce the pain and symptoms, finally was cured of this pain after our treatment. In just 3 weeks worth of treatment!\r\n\r\nIf you have a friend or relative who has been suffering from chronic pain for years, or needs rehab after surgery, or is considering an orthopaedic surgery, share this story with them. We could help save them months of pain and unnecessary procedures.\r\n\r\nThank you Aedan for sharing your story so effusively!",
    "outcome": "“I work as a mechanic, everyday in my life is mostly lifting heavy objects. One day, I was trying to put on the tires of a BMW X6 when my right ankle slipped. What I thought was a simple sprain happen...",
    "link": "https://yapchankor.com/testimonials/chronic-ankle-pain-aedan/",
    "length": 1238
  },
  {
    "id": "testimonial-12",
    "title": "Knee Ligament Tear – Wong SW",
    "slug": "knee-pain",
    "content": "”\nI came to YAPCHANKOR because of my knee ligament tear\nKnee ligament tear happened after I played badminton\nBefore I came here, I tried normal clinics.\nA traditional clinic (too) but no improvement then my friend introduced me to YAPCHANKOR\nAfter full set of treatments, now my knee getting better. I almost recovered\nThanks a lot. ” –\nWong SW\nknee_ligament_tear_soft_tissue_yck_yapchankor_wongshiau_anitha\nKnee ligament tears are a common injury for active people, and can happen when you land from a badminton jump wrongly, or twist your knee trying to reach a ball. There are various grades of tears, starting with a minor Stage 1 tear to a full tear for Stage 4 injuries. In many cases, doctors will only recommend rest and painkillers for the pain. However, for more serious tears, e.g. Stage 3 upwards, they sometimes recommend reconstructive surgery.\r\n\r\nMr. Wong's knee ligament tear was similarly treated. When the treatment recommended by his doctors did not work, he tried our proven Chinese medicine for sports injuries, and saw rapid improvement. Today, he has almost fully recovered.",
    "outcome": "After full set of treatments, now my knee getting better. I almost recovered",
    "link": "https://yapchankor.com/testimonials/knee-ligament-tear-wong-sw/",
    "length": 1097
  },
  {
    "id": "testimonial-13",
    "title": "Neck and Shoulder Pain | Lee MM",
    "slug": "back-pain",
    "content": "“\nI suffered from neck and shoulder pain stiffness mainly due to straining of my neck during my gym workout regimen. Furthermore, I have cervical spine spondylosis and poor posture. I tried acupuncture but the problem still persisted.\nBoth the physiotherapists, Vand My, were experienced and professional. Since being treated at YAPCHANKOR, I have found great relief. They have also incorporated simple stretching and strengthening exercises for maintenance purposes. I will definitely recommend YCK to anyone for pain treatment/maintenance.\n” – Lee MM\nLee MM Testimonial for neck and shoulder pain yck\nOur busy modern work lives usually place us in a stooped position at our desks in front of computers. Prolonged sitting hunched over our laptops will lead to the neck and shoulder muscles tightening up and weakening from lack of use. This leads to injury, soreness and pain.\r\n\r\nMany of us will seek temporary remedies like acupuncture or massage. They feel good during the moment, but are rarely long term solutions. Ms. Lee decided to give us a try after her acupuncture treatment didn't work. Our proven medicines, together with physiotherapy exercises, have worked far better on chronic muscle conditions for many patients and we recommend you try us out first.",
    "outcome": "Many of us will seek temporary remedies like acupuncture or massage. They feel good during the moment, but are rarely long term solutions. Ms. Lee decided to give us a try after her acupuncture treatm...",
    "link": "https://yapchankor.com/testimonials/neck-and-shoulder-pain-lee-mm/",
    "length": 1267
  },
  {
    "id": "testimonial-14",
    "title": "Achilles Tendon Injury – Choong FH",
    "slug": "sprained-ankle",
    "content": "“\nMy heel was painful. Am not sure what caused it. I am not a believer in Western medicine but I still went to see a doctor. As expected, was given anti-inflammatory medicine only.\nDecided to do some research and came across YAPCHANKOR. Was impressed by their explanation and decided to seek treatment.\nTheir staff in Subang Jaya, Anitha and others are very professional and patient in providing treatment and guided me through various exercises.\nNow it has improved a lot. The pain has reduced significantly. Thanks.\n” – 8/6/2018\nachilles_tendon_ankle_injury_yapchankor_yck_chongfookhing_anitha\nAn Achilles tendon injury can happen to anyone because of various reasons such as overuse in sports such as running, tennis, football, badminton, or because of shoe habits such as high heels. The Achilles tendon is the largest tendon in your body, stretching from your heel to the calf muscles.\r\n\r\nMr. Choong's doctor didn't do much for his injury except to recommend some NSAIDs, which didn't do much for him. After he discovered our treatment, combining proven Chinese medicine and physiotherapy, he tried us out happily as it turned out, because his pain soon disappeared. Thank you for sharing your story!",
    "outcome": "Now it has improved a lot. The pain has reduced significantly. Thanks.",
    "link": "https://yapchankor.com/testimonials/achilles-tendon-injury-choong-fh/",
    "length": 1205
  },
  {
    "id": "testimonial-15",
    "title": "Degenerative Spondylolisthesis | Ann B.",
    "slug": "chronic-pain",
    "content": "“A year and a half ago, I was diagnosed with degenerative spondilolesthis, spinal stenosis and degenerative discs from L2/3 to L5 S1. At this time I was given 2 options, conservative treatment or surgery. I opted for conservative. My back and leg pain began about 4 years ago during which I have undergone many treatments and therapies such as massage therapy, acupuncture, cupping, physiotherapy, chiropractic, traction, intense daily exercise in the gym and swimming daily ~ 2km. I even lost 15 kilos in an effort to decrease the pressure on my spine but nothing was resonating. In fact my pain seemed to be getting worse. YAPCHANKOR was my last hope before resorting to surgery for decompression and instrumental fusion. I was consuming a lot of medication such as Lyrica and Celebrex and didn’t want to do this for the rest of my life.\nAt first I was very skeptical that this treatment would be any different but I had to give it a try. My therapist Ganesh Vijayam seemed to understand my problem and set out a course of treatment to prove to me that YAPCHANKOR would be different. He asked me to keep a daily log of my activities to help determine if I was doing something to aggravate my problem. He showed me several exercises which have made a world of difference to managing my pain. He offered me advice to keep me from re-injuring myself such as changing the side of the bed I was sleeping on to make it easier getting up without pulling unnecessarily my problem side.\nAfter 10 sessions, my pain level has gone from an 8 or 9 to a 2 or 3 – something I can now manage. And that is without any medication. I consider this a victory!\nWalking great distances is still a problem for me but by stretching before and after, its not as bad.\nI must give credit to my therapist Ganesh for taking the time to listen and try to understand my pain and work with me to improve my situation. I was never made to feel like just another number. For the first time I felt that someone truly cared. Thank you YAPCHANKOR. You now have a convert!”\nAnn Beckett\nAnn Beckett YCK Testimonial for Degenerative Spondylolisthesis Part 1\nAnn Beckett YCK Testimonial for Degenerative Spondylolisthesis Part 2\nThank you Ann for sharing your recovery and your generous words. We are glad that we could help bring some much needed relief in your life, and perhaps even saved you from invasive surgery.",
    "outcome": "I must give credit to my therapist Ganesh for taking the time to listen and try to understand my pain and work with me to improve my situation. I was never made to feel like just another number. For t...",
    "link": "https://yapchankor.com/testimonials/degenerative-spondylolisthesis-ann-b/",
    "length": 2379
  },
  {
    "id": "testimonial-16",
    "title": "Left Ankle Injury – Catherine",
    "slug": "back-pain",
    "content": "“Name as mentioned above, I’m an Indian lady, I had a fall last year December while on my way with my family for dinner. I did not realise that there was a hole near the restaurant. Both my legs landed in the hole whereby my right foot was bleeding (big toe). I went to clinic, got treatment. I forgot completely about my left foot (ankle) as I fell, I tripped my left ankle too. Anyway, on January this year (2018) my right foot was ok but my left ankle was giving me a lot of pain. I went to 2 government hospital and did X-ray. Doctor said ok, nothing broken just ligament torn. Given medication still the same. I barely can walk.\nWent for 3rd opinion (SJMC hospital) saw specialist also gave the same remarks and medication. I didn’t see any improvement. Finally someone informed us about this centre. I been coming here for treatment for 10 sessions. So far I find it very effective. My pain more than 90% relieved. I am very happy as I can walk and do my daily routine. I really am grateful and thankful for YAPCHANKOR treatment. I am also pleased with staff Jannatul. She is so kind, polite and gave me a lot of advice how to improve my ankle condition. Finally, but not least I do believe YAPCHANKOR really works. I am going to recommend my friends to this centre in the future.” – Catherine ,  26/4/2018\nankle_tendon_injury_yck_yapchankor_catherine_janna\nCatherine fell into a hole and tore an ankle ligament. She could barely walk. The doctors could not help her with her left ankle injury, even though she tried 3 specialists. Our treatment reduced her pain by 90% and she was able walk and go back to her daily routine. Find out more!",
    "outcome": "Went for 3rd opinion (SJMC hospital) saw specialist also gave the same remarks and medication. I didn’t see any improvement. Finally someone informed us about this centre. I been coming here for treat...",
    "link": "https://yapchankor.com/testimonials/left-ankle-injury-catherine/",
    "length": 1646
  },
  {
    "id": "testimonial-17",
    "title": "Cervical Spondylosis – Shiveh S",
    "slug": "back-pain",
    "content": "“I am an academician who is on post-grad study leave. Extended hours of study with the wrong posture plus lugging heavy bags/hand bags, up and down four flights of stairs at my workplace resulted in my diagnosis for Cervical Spondylosis.\nYCK offered me immediate relief. In just one treatment, the pain had almost vanished. The subsequent visits offered further comfort and enabled me to resume my life. I am grateful. Thank you.\n*And Mytily rocks! ” – Shiveh S.\nShiveh Cervical Spondylosis YCK Testimonial 2018\n#\ncervicalspondylosis\n#\nosteoarthritis\n#\nneckpain\n#\nneckinjury\n#\nneckarthritis\n#\nKungFumedicine\n#\nphysiotherapy\n#\nyapchankor\n#\nyck\n#\ncervicalspondylosisrecovery\n#\npaintreatment\nCervical spondylosis or wear and tear arthritis in the cervical area of the spine (neck region) can cause severe pain and discomfort. Conventional treatments today involve painkillers or surgery, but the results are not always reliable. Shiveh is an academician who we helped recover from the pain and discomfort of her cervical spondylosis.",
    "outcome": "YCK offered me immediate relief. In just one treatment, the pain had almost vanished. The subsequent visits offered further comfort and enabled me to resume my life. I am grateful. Thank you.",
    "link": "https://yapchankor.com/testimonials/cervical-spondylosis-shiveh-s/",
    "length": 1030
  },
  {
    "id": "testimonial-18",
    "title": "Twisted Ankle – Naomi",
    "slug": "sprained-ankle",
    "content": "“I was climbing down the stairs at the station and skipped the last few steps and that’s how I twisted my ankle. I’ve visited two clinics near my work place but all they gave me was meds for painkiller and inflammation, which weren’t a big help. I desperately was looking for a proper treatment and luckily I found YAPCHANKOR, while surfing the internet. I’ve received 10 sessions and I could gradually feel that the swelling and pain were reducing. Definitely the treatment was working for me and I can’t thank Anitha and other staff enough for healing my ankle.”\nNaomi YCK Testimonial 2018 for Twisted Ankle\nAfter trying 2 different clinics which just gave her painkillers for her twisted ankle, Naomi decided to try our treatment, which combines herbal medicine used to treat ancient Kung Fu injuries and modern physiotherapy. Within a few days she experienced rapid relief and recovery. Most other treatments for joint injuries available today don't approach healing in a holistic way like we do at YAPCHANKOR. It is either too reliant on numbing chemicals found in painkillers, which don't treat the underlying condition or too slow and ineffective, because exercise or physical movements with an injured joint is hard to do. The body needs a healing boost that we can provide via our time tested herbal medicine patches, which is made to a secret formula used previously on Kung Fu injuries.\n#twistedankleinjury\n#twistedankle\n#anklesprain\n#ankleinjury\n#ankletreatment\n#yapchankor\n#kungfumedicine\n#yck\n#chinesemedicine\n#physiotherapy\n#anklerecovery",
    "outcome": "“I was climbing down the stairs at the station and skipped the last few steps and that’s how I twisted my ankle. I’ve visited two clinics near my work place but all they gave me was meds for painkille...",
    "link": "https://yapchankor.com/testimonials/twisted-ankle-naomi/",
    "length": 1553
  },
  {
    "id": "testimonial-19",
    "title": "Chronic Shoulder Pain Recovery Video",
    "slug": "shoulder-pain",
    "content": "Terence injured his shoulder at the gym, a more frequent accident these days because gym attendance is going up. For months the pain did not go away and his range of movement reduced.\r\n\r\nWith our unique combination treatment using physiotherapy and our proprietary Chinese herbal medicine patches, he recovered within 2 weeks. Months of pain and suffering, and reduced activity was resolved in a matter of a couple of weeks. That's how much faster YAPCHANKOR treatment works.\r\n\r\nThank you for your recommendation and for sharing your story Terence!",
    "outcome": "With our unique combination treatment using physiotherapy and our proprietary Chinese herbal medicine patches, he recovered within 2 weeks. Months of pain and suffering, and reduced activity was resol...",
    "link": "https://yapchankor.com/testimonials/chronic-shoulder-pain-terence/",
    "length": 548
  },
  {
    "id": "testimonial-20",
    "title": "Knee Injury from Football | Azrizan",
    "slug": "sports-injury",
    "content": "“I got my injury when I played football. After that, the injury are repeatable [sic. ‘repeated’]. I’ve tried many treatments but it didn’t work well. Until I tried YAPCHANKOR…my knee showed positive results with less pain and I can play football normally back. Thank you for your great treatment and physio. I would recommend this kind of treatment to others.” – Azrizan 30/5/18\nAzrizan Testimonial Football for YCK\nThank you Azrizan for your positive words. We are so glad we could help you to play football again. Our treatment works well for sports injuries like the knee injury suffered by Azrizan, and is a non-invasive, fast and long-term focused recovery treatment.",
    "outcome": "“I got my injury when I played football. After that, the injury are repeatable [sic. ‘repeated’]. I’ve tried many treatments but it didn’t work well. Until I tried YAPCHANKOR…my knee showed positive r...",
    "link": "https://yapchankor.com/testimonials/knee-injury-from-football-azrizan/",
    "length": 672
  },
  {
    "id": "testimonial-21",
    "title": "Wrist & Elbow Pain",
    "slug": "back-pain",
    "content": "“I had a fall about 5 years ago. I left it like that as there was no pain. The pain came recently and I couldn’t bear the pain. So my sister Devina recommended me to YAPCHANKOR for treatment. Came for first treatment on 22nd Nov 2017. It was a relief as 60% felt better. After undergoing the next few treatments, [I] felt much better, thanks to YAPCHANKOR. Will definitely recommend to other friends. Hope will open another branch in Cheras. Keep it up!! Thank you so much Ms. Vaharli.” – Lai Neo\nLai Neo_Vaharli-YAPCHANKOR Testimonial\nMadam Lai had an old injury that came back to haunt her after 5 years. Her pain level on the elbow and wrist was high and affected her quality of life severely. Her recovery happened within a few days and in 2 weeks of treatment, we helped her to achieve normal range and function again in her arm. Thank you for sharing your story Madam Lai!\r\n\r\nThank you also to our physiotherapist Vaharli for doing such a good job with our patient!\r\n\r\n#elbowpainrecovery #elbowpaintreatment #yapchankor #vaharli #physiotherapy #chinesemedicine #yck #ampang #kualalumpur #paintreatmentcentre",
    "outcome": "“I had a fall about 5 years ago. I left it like that as there was no pain. The pain came recently and I couldn’t bear the pain. So my sister Devina recommended me to YAPCHANKOR for treatment. Came for...",
    "link": "https://yapchankor.com/testimonials/wrist-elbow-pain/",
    "length": 1113
  },
  {
    "id": "testimonial-22",
    "title": "Elbow and Chest Pain",
    "slug": "general",
    "content": "“I came with elbow and right chest pain. I had a soft tissue injury due to I fell inside bathroom. My physiotherapist asked me to go for 10 sessions of treatment. I had severe pain. After the treatments, my pain improved a lot. Once all treatments over, I was completely out of pain. Thank you very much.” – Sutha\nThis is Madam Sutha's recovery from her elbow and chest pain after her fall in the bathroom. She came to see us at our #Puchong branch and was attended to by physiotherapist Sharifah. Because of our early intervention, the soft tissue injury in her elbow and chest healed up quickly, after only 10 sessions. Some chronic problems happen when old injuries are not treated well, so we are glad that Madam Sutha did not wait too long. Thank you for sharing your story!",
    "outcome": "“I came with elbow and right chest pain. I had a soft tissue injury due to I fell inside bathroom. My physiotherapist asked me to go for 10 sessions of treatment. I had severe pain. After the treatmen...",
    "link": "https://yapchankor.com/testimonials/elbow-and-chest-pain/",
    "length": 779
  },
  {
    "id": "testimonial-23",
    "title": "Bilateral Knee OA",
    "slug": "knee-pain",
    "content": "Madam Aishah suffered from a common wear and tear problem for females in their middle age and up – bilateral knee OA (osteoarthritis). There is a lot of confusion about what to do with OA, and most people rightly start by going to see their doctor. However, most doctors are not aware of good alternative treatments out there, so they prescribe the typical NSAID painkillers, physiotherapy or even surgery. Patients who are looking for something less invasive end up trying up many kinds of expensive treatments that don’t work. Madam Aishah tried a traditional treatment for 1 year to no avail.\nShe only started seeing real results i.e. real recovery when she started our treatment. In just 5 sessions, she saw drastically better results than in the whole 1 year of treatment at the other place. We have a long history treating bilateral knee OA as well as other osteoarthritis cases with our proven medicine in combination with physiotherapy. Our treatment is non-invasive, external (nothing ingested) and produces real relief. Thank you Madam Aishah for sharing your recovery story!\nAishah bilateral knee OA YCK Testimonial\n#realrecoveries #realrelief #yapchankor #bilateralkneeOA #KneeOA #Osteoarthritis #osteoarthritistreatment #physiotherapy #chinesemedicine #pharmaceuticalchinesemedicine\n\"Have been going to normal traditional treatment for past one year but doesn't seem to help till I found YCK. My treatment started but after about 5 treatments, I feel much better for I  would be able to bend more and pain has lessened. Azlan is very dedicated and passionate toward his job, and has helped me to understand my injuries. More improvement has to be done by helping own self by exercising too.\" - Aishah 10/10/17",
    "outcome": "She only started seeing real results i.e. real recovery when she started our treatment. In just 5 sessions, she saw drastically better results than in the whole 1 year of treatment at the other place....",
    "link": "https://yapchankor.com/testimonials/bilateral-knee-oa/",
    "length": 1722
  },
  {
    "id": "testimonial-24",
    "title": "Knee Injury Recovery Video April 2018",
    "slug": "knee-pain",
    "content": "In this video, you can see the difference in just 5 days with our treatment for knee pain. Our 60 year old patient suffered a fall 2 weeks before our treatment, which injured her left knee. Her pain level was 7/10 and she was not able to place weight on that leg. You can see that she also has difficulty pushing her self off a chair because the left leg is now unable to contribute and she has to rely on her arm strength. Her walking gait on the 1st day is also weighted towards the right, because she is trying to avoid relying on her painful left leg.\nAfter 5 sessions, the difference is remarkable. She is able to push herself off a chair with much greater ease. Her walking gait is almost back to normal and her pain level has reduced by 70%!\nSo happy we could help this grandmother from JB! Her progress is so obvious and it happened in less than 1 week. Don't suffer unnecessarily folks!\r\n\r\n#RealRecovery #RealRelief",
    "outcome": "#RealRecovery #RealRelief",
    "link": "https://yapchankor.com/testimonials/knee-injury-recovery-video-april-2018/",
    "length": 924
  },
  {
    "id": "testimonial-25",
    "title": "Carpal Tunnel Syndrome Treatment | Non-Surgical Progress",
    "slug": "wrist-pain",
    "content": "This year, we saved a 63-year old female patient from surgery on her injured wrist. She had been suffering from Carpal Tunnel Syndrome for almost 20 years, and her doctor was only prescribing Neurobion, which did not provide relief. The doctor suggested surgery as a last resort, but the patient chose instead to see us.\nIn the video, you can see that her hand has very slow, limited movement. She felt numb in all her fingers, and when her hand hits anything, it feels like an electric shock down her hand. She cannot fully clench her hand into a fist, at most it is only a 50% clenching action.\nAfter our treatment, which lasted for 21 sessions, or about 3 weeks in total spread over 1.5 months, she is able to clench her hand 100%. Her numbness has also reduced significantly, and you can see that her strength and speed also has improved tremendously. This is another Carpal Tunnel Syndrome case that we resolved without surgery.\nReal Recoveries. Real Relief.\n#\nyapchankor\n#\ncarpaltunnelsyndrome\n#\ncarpaltunnel\n#\nwristpain\n#\nnumbfingers\n#\nnumbness\n#\nyck\n#\nrealrecoveries\n#\nrealrelief\n#\nampang\n#\nnonsurgical\n#\npharmaceuticalchinesemedicine\n#\nphysiotherapy\n#\nphysiotherapist\nThis 63 year old female patient avoided surgery with our carpal tunnel syndrome treatment at YAPCHANKOR Ampang. She was suffering from severe numbness and tingling down her hand, with very weak strength and slow movement. In this video, you can see a real recovery happening without invasive surgery or synthetic painkillers.",
    "outcome": "Real Recoveries. Real Relief.",
    "link": "https://yapchankor.com/testimonials/carpal-tunnel-syndrome-treatment-non-surgical-progress/",
    "length": 1502
  },
  {
    "id": "testimonial-26",
    "title": "Collarbone Fracture Mano",
    "slug": "back-pain",
    "content": "Mano fractured his clavicle or collar bone in a motorcycle accident. The collarbone is the thin bone that connects your breastbone to your shoulder blade. When someone suffers a collarbone fracture, there will typically be a lot of pain and swelling, followed by a difficulty in using your arm. Mano could not lift his arm and could not play badminton as a result of his injury.\nUsually doctors say that you should let the collarbone fracture heal on its own, and it can take 6 to 12 weeks. In Mano’s case, he recovered after our treatment in just 2 weeks of treatment session. Our recovery plans always focus on patient’s long term healing, not just short term relief, which is why Mano could go back to playing badminton. Thanks for sharing your story Mano!\nCollarbone fracture testimonial from Mano 2018 YCK\n#realrecovery #collarbonefracture #yapchankor #yck #physiotherapy #pharmaceuticalchinesemedicine #PCM #KualaLumpur #paintreatmentcentre\nMy injury was motorbike accident, left collar bone fracture. After treatment at YAPCHANKOR, my pain recovered.  Now I can move my hand normal and also can play badminton because I am left handed.",
    "outcome": "Usually doctors say that you should let the collarbone fracture heal on its own, and it can take 6 to 12 weeks. In Mano’s case, he recovered after our treatment in just 2 weeks of treatment session. O...",
    "link": "https://yapchankor.com/testimonials/collarbone-fracture-mano/",
    "length": 1142
  },
  {
    "id": "testimonial-27",
    "title": "Shoulder Pain Madam Yap",
    "slug": "shoulder-pain",
    "content": "After years of using OTC plasters like Salon Pas without long term recovery, Madam Yap decided to give us a try for her shoulder pain. The recovery she felt from our treatment came fast, and will last a lot longer than the temporary numbing effects that OTC pain relief plasters provide. Thank you Madam Yap for your recommendation!\nMadam Yap Shoulder Pain Testimonial for YAPCHANKOR\n“I have my shoulder pain for 4 years. To eliminate the pain, I used Salon Pas. The relief was temporal. While I was surfing FB one day, I came across YCK. I wrote an email, received a reply (promptly). I returned from China in October 2016, I immediately signed up with YCK.\nInitially the treatments were uncomfortable but subsequently I got better. I will definitely recommend others who have similar problems to YCK. The patient therapists were kind and efficient. They were very knowledgeable.” - Madam Yap",
    "outcome": "After years of using OTC plasters like Salon Pas without long term recovery, Madam Yap decided to give us a try for her shoulder pain. The recovery she felt from our treatment came fast, and will last...",
    "link": "https://yapchankor.com/testimonials/shoulder-pain-madam-yap/",
    "length": 893
  },
  {
    "id": "testimonial-28",
    "title": "Neck and Shoulder Pain Pn. Rohaya",
    "slug": "shoulder-pain",
    "content": "Teacher, Pn Rohaya, suffered for over 6 months with neck and shoulder pain. Her work at the computer and poor posture led to weakening shoulder muscles, which can cause stiff neck, shoulders and pain. We treated her with a combination of our proven Chinese medicine patches made according to a secret martial arts formula, and physiotherapy modalities like trigger point massage, TENs or electrotherapy and exercises. After 10 sessions, she felt a marked improvement and we have continued to teach her how to maintain her recovery. Thank you Pn Rohaya for sharing your recovery story!\nRohaya Testimonial YCK Ampang Neck and Shoulder Pain\n\"At Yap Chan Kor, I sought treatment for shoulder + neck pain. I am not sure how the problem starts but the pain has been more than 6 months. After about 10 sessions, I can see marked improvement in pain relief. The therapy, exercises, and the advice given works well for me. The pain is reduced and manageable. I believe I still need ongoing sessions as my nature of work, teaching, requires constant use of my shoulder muscle plus the use of computer.\" - Rohaya",
    "outcome": "Teacher, Pn Rohaya, suffered for over 6 months with neck and shoulder pain. Her work at the computer and poor posture led to weakening shoulder muscles, which can cause stiff neck, shoulders and pain....",
    "link": "https://yapchankor.com/testimonials/neck-and-shoulder-pain-pn-rohaya/",
    "length": 1101
  },
  {
    "id": "testimonial-29",
    "title": "Leg Pain Rita",
    "slug": "back-pain",
    "content": "It’s always a wonderful feeling for us to help someone walk again! When Rita came, her legs were swollen and she was in a lot of pain. She could hardly walk because of the leg pain. After our treatment, which involves wrapping her swollen legs with YCK proprietary Chinese medicine patches and physiotherapy, she is “back to a normal person”. Thank you Rita for sharing your story!\nRita Leg pain testimonial for YAPCHANKOR\n\"Firstly, I have to thank Mr. Yap Chan Kor for his hospitality. He is a kind and wonderful person who introduced Miss Hema (physiotherapist) for my treatment. Miss Hema is excellent in her work. At the same time, all the other physiotherapists are also very good.\r\n\r\nWhen I came with pain and could not walk. After the treatment, I was back to a normal person. Now I can walk without any pain. So I thank everyone in this clinic. Thank you very much a million times.\" - Rita",
    "outcome": "It’s always a wonderful feeling for us to help someone walk again! When Rita came, her legs were swollen and she was in a lot of pain. She could hardly walk because of the leg pain. After our treatmen...",
    "link": "https://yapchankor.com/testimonials/leg-pain-rita/",
    "length": 897
  },
  {
    "id": "testimonial-30",
    "title": "Back Pain, Neck Pain Chuah",
    "slug": "back-pain",
    "content": "For years, Mr Chuah suffered from back pain and neck pain, which resulted from poor posture at work over the decades. This resulted in the weakening of the muscles around his spine, specifically in the cervical and lumbar regions, which led him to feeling tired easily as well as pain.When his spine specialist could not do anything for him, he decided to seek treatment at YAPCHANKOR. We were able to set him on the road to real recovery using our medicine and the skills of our physiotherapist Ema. Thank you Mr. Chuah for sharing your story!\nTestimonial for back pain neck pain from Mr Chuah for YAPCHANKOR\n“I suffered from back and neck pain for a few years and was not getting better. My back and neck muscles were weak and I feel tired most of the time. I went to see a spine specialist but he said that my spine is alright. But my back and neck muscles were weak.  After the treatment here, my muscles are stronger and I feel very much less pain in both neck and back.”",
    "outcome": "For years, Mr Chuah suffered from back pain and neck pain, which resulted from poor posture at work over the decades. This resulted in the weakening of the muscles around his spine, specifically in th...",
    "link": "https://yapchankor.com/testimonials/back-pain-neck-pain-chuah/",
    "length": 976
  },
  {
    "id": "testimonial-31",
    "title": "Ankle Sprain Aisah",
    "slug": "back-pain",
    "content": "Aisah was wrongly diagnosed by her doctor as suffering from gout when she experienced severe pain and swelling in her ankle. We diagnosed her problem as an ankle sprain to the ligament and treated her with a combination of our proven Chinese medicine patch and physiotherapy modalities. Within 1 day, her swelling and pain reduced greatly and within 1 week she was almost back to normal. Thank you Aisah for sharing your story.\nAnkle sprain Aisah YCK Testimonial\n“I had massive swelling on my foot with excruciating pain. Doctors initially treated me for gout and later discovered it was not due to gout (after blood test). I was then recommended to YCK centre by a friend. I was advised to take 14 sessions of treatment after diagnosing the injury type. After the 1st session, the swelling reduced by 75% and pain reduced by 50%. After 5 sessions, there was no more swelling or severe pain. I am now getting back to normal surely... Excellent expertise and outstanding customer service!”",
    "outcome": "Aisah was wrongly diagnosed by her doctor as suffering from gout when she experienced severe pain and swelling in her ankle. We diagnosed her problem as an ankle sprain to the ligament and treated her...",
    "link": "https://yapchankor.com/testimonials/ankle-sprain-aisah/",
    "length": 988
  },
  {
    "id": "testimonial-32",
    "title": "Mechanical Back Pain Mei",
    "slug": "back-pain",
    "content": "Mei worked as a digital artist, a new type of job for the new generation of millennial adults. But with new millennial jobs come new occupational hazards, such as the mechanical back pain she suffered from. When you are sitting at work too much, and not exercising enough, your back muscles will start to weaken. This will increase your chances of getting lower back pain. Mei suffered from mechanical back pain that started to compress some nerves, which led to feelings of numbness and discomfort down her legs.\nSo when you are sitting at your desk job, try to stand and walk around more every couple of hours. Also do some desk exercises and work out your core muscles more during your exercises. Thank you Mei for sharing your recovery story here!\n#yapchankor #mechanicalbackpain #backpain #yck #shaolinherbs #chinesemedicine #physiotherapy\n\"I obtained this injury because my occupation is a digital artist. That means having to sit in front of the computer for long hours, never taking breaks in between. On the first day of treatment, I seek help because the pain had constantly extended to both legs, numbing them and causing extreme discomfort in my work.\r\n\r\nAfter 3 to 5 days of treatment, the pain was slowly coming and going. It was definitely better than before.\r\n\r\nToday is the last day of my sessions, I was able to not feel any more pain in my back. Moreover, I was given enough proper instructions by Anita to help fix my sitting and overall standing posture. Because before this, slouching is my favourite dance move and sitting posture XD haha.\" - Mei",
    "outcome": "So when you are sitting at your desk job, try to stand and walk around more every couple of hours. Also do some desk exercises and work out your core muscles more during your exercises. Thank you Mei ...",
    "link": "https://yapchankor.com/testimonials/mechanical-back-pain-mei/",
    "length": 1569
  },
  {
    "id": "testimonial-33",
    "title": "Frozen Shoulder Michael",
    "slug": "back-pain",
    "content": "Michael flies from Alaska, USA to get his frozen shoulder fixed at YAPCHANKOR!\nA bit of background about Michael’s case: We had previously treated Michael’s left frozen shoulder a year ago, and after 2-3 months, he was 75%-80% better. Before he came to see us, during the 5 years he suffered from frozen shoulder, he had tried acupuncture for 4 months, and physiotherapy for 8 months, as well as massage therapy. Nothing worked as well as he hoped, but he responded extremely well to our treatment, which combines Shaolin herbal medicine patches together with physiotherapy. Today, as he reports, he’s back to normal on his left shoulder.\nSo when his right shoulder started to give him problems, Michael decided to skip the doctors in the US, and to fly back to Malaysia for our treatment! He knew our treatment works better and faster than other treatments, and decided to incur the expense of the flight from Alaska as well as our treatment costs to heal his shoulder. This time, he underwent a couple of weeks treatment, making good progress, and we look forward to seeing him again soon when he returns! Thanks again Michael!\nRead his earlier recovery testimonial from his first frozen shoulder here: http://yapchankor.com/testimonials/mike-frozen-shoulder-1/\nAfter experiencing an almost full recovery with his previous frozen shoulder problem, Michael decides to skip all the Western doctors and alternative treatments available in the US to fly to KL from Alaska to treat his new frozen shoulder problem. Take a listen to his very generous testimonial. Thank you Michael!\nMichael flies from Alaska, USA to get his frozen shoulder fixed at YAPCHANKOR!\nA bit of background about Michael's case: We had previously treated Michael's left frozen shoulder a year ago, and after 2-3 months, he was 75%-80% better. Before he came to see us, during the 5 years he suffered from frozen shoulder, he had tried acupuncture for 4 months, and physiotherapy for 8 months, as well as massage therapy. Nothing worked as well as he hoped, but he responded extremely well to our treatment, which combines Shaolin herbal medicine patches together with physiotherapy. Today, as he reports, he's back to normal on his left shoulder.\r\n\r\nSo when his right shoulder started to give him problems, Michael decided to skip the doctors in the US, and to fly back to Malaysia for our treatment! He knew our treatment works better and faster than other treatments, and decided to incur the expense of the flight from Alaska as well as our treatment costs to heal his shoulder. This time, he underwent a couple of weeks treatment, making good progress, and we look forward to seeing him again soon when he returns! Thanks again Michael!",
    "outcome": "A bit of background about Michael’s case: We had previously treated Michael’s left frozen shoulder a year ago, and after 2-3 months, he was 75%-80% better. Before he came to see us, during the 5 years...",
    "link": "https://yapchankor.com/testimonials/frozen-shoulder-michael/",
    "length": 2711
  },
  {
    "id": "testimonial-34",
    "title": "Knee Osteoarthritis Madam Chia",
    "slug": "knee-pain",
    "content": "Knee osteoarthritis patient Madam Chia sought treatment at YAPCHANKOR after a fall caused her knees to hurt even more than before. She also had a stiff shoulder and our physiotherapist treated her with our proprietary Chinese medicine, together with physical therapy modalities.\n#kneepain #kneeosteoarthritis #alternativepaintreatment #injuryfromfall #physiotherapy #chiropracticalternative #fasterresults #osteoarthritis #chinesemartialartsmedicine #yck #yapchankor",
    "outcome": "#kneepain #kneeosteoarthritis #alternativepaintreatment #injuryfromfall #physiotherapy #chiropracticalternative #fasterresults #osteoarthritis #chinesemartialartsmedicine #yck #yapchankor",
    "link": "https://yapchankor.com/testimonials/madam-chia-knee-osteoarthritis/",
    "length": 466
  },
  {
    "id": "testimonial-35",
    "title": "Ankle Sprain Natalie",
    "slug": "shoulder-pain",
    "content": "Natalie’s ankle sprain was from an injury from horse riding. More interestingly, in Hong Kong, she was treated by various bone-setting doctors and physiotherapists, which did not help her ankle sprain injury. She only got better with our treatment, which combines Shaolin medicine herbs with physiotherapy to treat joint injuries such as ankle sprains, tennis elbow or shoulder conditions.\n#anklesprain #horseridinginjury #horsefallinjury #yapchankor #chinesemedicine #physiotherapy #betterthanhk #yck",
    "outcome": "Natalie’s ankle sprain was from an injury from horse riding. More interestingly, in Hong Kong, she was treated by various bone-setting doctors and physiotherapists, which did not help her ankle sprain...",
    "link": "https://yapchankor.com/testimonials/natalie-ankle-sprain/",
    "length": 501
  },
  {
    "id": "testimonial-36",
    "title": "Cervical Spondylosis Belinda",
    "slug": "shoulder-pain",
    "content": "Belinda (65 years old) came to us after suffering many months from neck pain (due to cervical spondylosis), shoulder and hip pain. We treated these various areas, especially her neck. Gladly, she is almost fully recovered (85% in her assessment) and felt a huge release from the tightness and pain in her neck after our treatment. She also loved the patches we used! Thanks very much Belinda!\n#neckpain #shoulderpain #hippain #cervicalspondylosis #chinesemedicine #yapchankor #yck #subangjaya #physiotherapy",
    "outcome": "Belinda (65 years old) came to us after suffering many months from neck pain (due to cervical spondylosis), shoulder and hip pain. We treated these various areas, especially her neck. Gladly, she is a...",
    "link": "https://yapchankor.com/testimonials/belinda-cervical-spondylosis/",
    "length": 507
  },
  {
    "id": "testimonial-37",
    "title": "Lumbar scoliosis Mohd",
    "slug": "back-pain",
    "content": "Mohammad suffered from lumbar scoliosis causing back pain for many years. A few months before he visited us for treatment, his back pain increased until he could not sit or drive. He was also feeling numbness down his legs.\nAfter our treatment, he can now sit and drive again. Our treatment lasted for 21 sessions and was completed in around 1 month. We are always happy to read about patients who have been given a new lease on life after our treatment so thank you Mohammad for sharing your story!\n#lumbarscoliosis #chinesemedicine #alternativetreatment #yapchankor #yck #shahalam #paintreatmentcentre #backpain #chronicpain #numbness",
    "outcome": "After our treatment, he can now sit and drive again. Our treatment lasted for 21 sessions and was completed in around 1 month. We are always happy to read about patients who have been given a new leas...",
    "link": "https://yapchankor.com/testimonials/mohd-lumbar-scoliosis/",
    "length": 636
  },
  {
    "id": "testimonial-38",
    "title": "Shoulder Tendinitis Khoo",
    "slug": "frozen-shoulder",
    "content": "Mr. Khoo suffered a sports injury from badminton, which led to shoulder tendinitis. Besides feeling pain, he also lost some flexibility and range in his affected arm. This was basically early stage frozen shoulder, which was prevented from getting worse with Mr. Khoo’s early intervention. Thanks Mr. Khoo for sharing your story here!\n#shouldertendinitis #frozenshoulder #yapchankor #yck #physiotherapy #chinesemedicine #paintreatment #sportsinjury #alternativemedicine",
    "outcome": "Mr. Khoo suffered a sports injury from badminton, which led to shoulder tendinitis. Besides feeling pain, he also lost some flexibility and range in his affected arm. This was basically early stage fr...",
    "link": "https://yapchankor.com/testimonials/khoo-shoulder-tendinitis/",
    "length": 469
  },
  {
    "id": "testimonial-39",
    "title": "Knee Osteoarthritis Annie",
    "slug": "knee-pain",
    "content": "Annie suffers from severe knee OA (osteoarthritis) before she came to see us. Her pain was excruciating, measuring around 6 on a 10 point scale. She could not bend her knees below 90 degrees much. Her orthopaedic doctors advised her to do knee replacement surgery. However, because of her understanding of possible complications that could result from surgery, she did not want to go for surgery.\nShe came and was attended to at our Shah Alam centre for 21 sessions. At the end, her pain reduced to around 2/10 and she could bend her knees below 90 degrees. She was quite satisfied with this result, as she can now manage her pain better.\nThank you Annie and we hope you continue with the exercises we taught you!\n#kneeOAtreatment #kneeosteoarthritis #osteoarthritis #surgeryalternative #herbalmedicine #chinesemedicine #fusiontreatment #physiotherapy #yapchankor #YCK #ShahAlam",
    "outcome": "She came and was attended to at our Shah Alam centre for 21 sessions. At the end, her pain reduced to around 2/10 and she could bend her knees below 90 degrees. She was quite satisfied with this resul...",
    "link": "https://yapchankor.com/testimonials/annie-knee-osteoarthritis/",
    "length": 878
  },
  {
    "id": "testimonial-40",
    "title": "Shoulder pain Jimmy",
    "slug": "back-pain",
    "content": "Jimmy, 21 years old, is an avid basketball player but his shoulder tendinitis prevented him from playing optimally. The pain came when he tries to shoot the basketball, which requires the movement of the whole shoulder joint. As a result of his sport, Jimmy also came to see us for hip joint tightness because of a slight muscle imbalance. We treated all these conditions and happily report that Jimmy is now back to playing basketball well again! Thanks Jimmy!\n#basketballinjury #sportsinjury #physiotherapy #yapchankor #chinesemedicine #shouldertendinitis #hiptightness #alternativemedicine #herbalmedicine #yck #subangjaya #malaysia",
    "outcome": "Jimmy, 21 years old, is an avid basketball player but his shoulder tendinitis prevented him from playing optimally. The pain came when he tries to shoot the basketball, which requires the movement of ...",
    "link": "https://yapchankor.com/testimonials/jimmy-shoulder-pain/",
    "length": 635
  },
  {
    "id": "testimonial-41",
    "title": "Lower Back Pain Farzan",
    "slug": "back-pain",
    "content": "Farzan’s story about recovery from his lower back pain emphasises our focus on treating the root cause of muscle and joint conditions that cause pain. He speaks about getting 3 in 1 treatment with us – physiotherapy, chinese medicine and advice on improving his strength and flexibility outside of treatment. We are really happy to read about his progress with his lower back pain problem. Thanks for sharing!\n#lowerbackpain #yapchankor #subangjaya #ss15 #malaysia #physiotherapy #chinesemedicine #alternativetreatment #muscleandjoint #backpain #lowbackpain",
    "outcome": "Farzan’s story about recovery from his lower back pain emphasises our focus on treating the root cause of muscle and joint conditions that cause pain. He speaks about getting 3 in 1 treatment with us ...",
    "link": "https://yapchankor.com/testimonials/farzan-lower-back-pain/",
    "length": 557
  },
  {
    "id": "testimonial-42",
    "title": "Knee OA Khalib",
    "slug": "knee-pain",
    "content": "Khalib suffered from knee OA (osteoarthritis). This is a condition that affects middle-aged and seniors frequently, and is also known as wear-and-tear arthritis. Typically the symptoms of knee OA involve pain, redness and swelling around the knee joints leading to trouble walking, or standing for long. Conventional treatments use painkillers, physiotherapy and sometimes surgery (total knee replacement surgeries are typical when more conservative methods fail). Most of these conventional methods provide symptomatic relief, with adverse side effects from medications taken.\nOur treatment involves physiotherapy too, but is supported with our proprietary herbal medicine patches, which are wrapped around the knees. These help to improve blood circulation, reduce inflammation and expedite healing, which leads to good results for our knee OA patients. Most of our patients report feeling pain reduced substantially and functional movements improve, so that they can get on with their lives better.\nThank you En. Khalib for sharing your recovery story!\n#yapchankor #yck #kneeoa #osteoarthritis #osteoarthritistreatment #chinesemedicine #alternativetreatment #arthritistreatment #kneepain #physiotherapy #shahalam #malaysia",
    "outcome": "Our treatment involves physiotherapy too, but is supported with our proprietary herbal medicine patches, which are wrapped around the knees. These help to improve blood circulation, reduce inflammatio...",
    "link": "https://yapchankor.com/testimonials/khalib-knee-oa/",
    "length": 1225
  },
  {
    "id": "testimonial-43",
    "title": "Frozen shoulder Tan SH",
    "slug": "frozen-shoulder",
    "content": "Frozen shoulder (bahu beku) affects many corporate and office workers because of the prolonged sitting and bad posture that our modern lives involve. Mr. Tan suffered from excruciating pain before our treatment but after just 10 sessions, he has improved remarkably. Thank you again for sharing your story Mr. Tan!\n#bahubeku #frozenshoulder #yapchankor #physiotherapy #fusiontreatment #musculoskeletalpain #shoulderpain #chinesemedicine #tcm #alternativetreatment",
    "outcome": "Frozen shoulder (bahu beku) affects many corporate and office workers because of the prolonged sitting and bad posture that our modern lives involve. Mr. Tan suffered from excruciating pain before our...",
    "link": "https://yapchankor.com/testimonials/tan-sh-frozen-shoulder/",
    "length": 463
  },
  {
    "id": "testimonial-44",
    "title": "Sprained Ankle Izni",
    "slug": "back-pain",
    "content": "Izni is a gymnast representing her state for the SUKMA games. She sprained her ankle quite badly during her training. When she first came to us, her pain level was very high and she could not step her foot on the ground. After just 7 sessions, she has recovered and was able to go back to train for the next SUKMA games. Thanks for sharing your story Izni!\n#anklespraintreatment #chinesemedicine #yapchankor #yck #physiotherapy #shahalam #malaysia #gymnastinjury #sportsinjury",
    "outcome": "Izni is a gymnast representing her state for the SUKMA games. She sprained her ankle quite badly during her training. When she first came to us, her pain level was very high and she could not step her...",
    "link": "https://yapchankor.com/testimonials/izni-sprained-ankle/",
    "length": 476
  },
  {
    "id": "testimonial-45",
    "title": "Ankle Sprain Yeoh",
    "slug": "sprained-ankle",
    "content": "Ankle sprain patient Mr. Yeoh previously treated his ankle in 2014. After our treatment, the injury did not recur, which is the major risk of ankle sprain cases. However, in 2016, he sprained his other ankle instead, and came to see us again. The condition was a chronic ankle sprain and required 2 weeks of sessions with us.\nOur goal with all our patients is long-term recovery, not just temporary relief. This is the major difference between YAPCHANKOR and our competitors, which we hope patients will understand. The main reason we can achieve long term recovery is because we use a combination of our proprietary herbal medicine together with modern physiotherapy, combining the best of both Chinese medicine and allopathic medicine.\nThank you Mr. Yeoh for sharing your story with us!\n#yapchankor #anklesprain #chronicanklesprain #yck #alternativetreatment #fusiontreatment #chinesemedicine #oldklangroad #kualalumpur #malaysia",
    "outcome": "Our goal with all our patients is long-term recovery, not just temporary relief. This is the major difference between YAPCHANKOR and our competitors, which we hope patients will understand. The main r...",
    "link": "https://yapchankor.com/testimonials/yeoh-ankle-sprain/",
    "length": 931
  },
  {
    "id": "testimonial-46",
    "title": "Leg pain Mokhtar",
    "slug": "general",
    "content": "Encik Mokhtar suffered from leg pain for 4 months and went to a hospital for treatment without seeing any improvements. When he came to us, he saw improvements on his 1st day. Within 5 sessions, his pain was had reduced so much that he claims it is “fully cured”. Thank you for sharing your story!\n#legpain #alternativetreatment #chinesemedicine #physiotherapy #yapchankor #yck #subangjaya #malaysia",
    "outcome": "Encik Mokhtar suffered from leg pain for 4 months and went to a hospital for treatment without seeing any improvements. When he came to us, he saw improvements on his 1st day. Within 5 sessions, his p...",
    "link": "https://yapchankor.com/testimonials/mokhtar-leg-pain/",
    "length": 399
  },
  {
    "id": "testimonial-47",
    "title": "Frozen shoulder Mariambi",
    "slug": "frozen-shoulder",
    "content": "Pn. Mariambi suffered from frozen shoulder (bahu beku) on her left side. The condition got so bad that she felt pain in her fingers, with a very uncomfortable numbness down her whole arm. Her daughter writes her testimonial here, explaining how through the course of the treatment, her pain kept getting less and movement in her arm started to return. Terima kasih Pn. Mariambi!\n#bahubeku #frozenshoulder #stiffshoulder #numbness #yapchankor #yck #shahalam #physiotherapy #selangor #malaysia #chinesetreatment",
    "outcome": "#bahubeku #frozenshoulder #stiffshoulder #numbness #yapchankor #yck #shahalam #physiotherapy #selangor #malaysia #chinesetreatment",
    "link": "https://yapchankor.com/testimonials/mariambi-frozen-shoulder/",
    "length": 509
  },
  {
    "id": "testimonial-48",
    "title": "Slipped Disc Nour H.",
    "slug": "back-pain",
    "content": "Nour, an independent woman liked to carry and move furniture around her home when she felt the need to redecorate. Too many wrong heavy lifting movements eventually caused a slipped disc issue for her. As a teacher, it’s understandable that she was initially skeptical about our treatment, which combines Chinese medicine with modern physiotherapy. But after 7 sessions of treatment, she became a believer because she saw results for herself.\n#slippeddisc #yapchankor #shahalam #prolapseddisc #discbulge #backpain #chinesemedicine #physiotherapy #yck",
    "outcome": "#slippeddisc #yapchankor #shahalam #prolapseddisc #discbulge #backpain #chinesemedicine #physiotherapy #yck",
    "link": "https://yapchankor.com/testimonials/nour-h-slipped-disc/",
    "length": 550
  },
  {
    "id": "testimonial-49",
    "title": "Lumbar spondylosis Fariz",
    "slug": "back-pain",
    "content": "Fariz suffered from lumbar spondylosis at his L5 and S1 discs, and when he came to us he was reporting excruciating pain levels at the maximum 10 on the 10-point scale physiotherapists and doctors use to measure pain levels. He was constantly on painkillers, which were prescribed by doctors.\nModern painkillers usually come with severe side effects such as heart attack risks (e.g. Arcoxia). His doctors recommended surgery, which was a last resort option and Fariz decided to give us a try first. After 3 weeks of treatment sessions, spread out over slightly a month, his pain levels dropped by 84% to around 1-2 on the same pain scale. This remarkable improvement in pain levels allowed us to work on strengthening the back muscles too, so that the recovery is long term, not just short term.\n#lumbarspondylosis #yapchankor #backpain #backinjury #degenerativediscs #physiotherapy #chinesemedicine #shahalam #selangor\nOur goal with our treatment and for all our patients, whether those with lumbar spondylosis or other conditions, is always return of normal function and long term recovery. We are so happy to hear that Fariz has recovered so much. Thank you for sharing your story!",
    "outcome": "Modern painkillers usually come with severe side effects such as heart attack risks (e.g. Arcoxia). His doctors recommended surgery, which was a last resort option and Fariz decided to give us a try f...",
    "link": "https://yapchankor.com/testimonials/fariz-lumbar-spondylosis/",
    "length": 1184
  },
  {
    "id": "testimonial-50",
    "title": "Frozen shoulder Choo YW",
    "slug": "frozen-shoulder",
    "content": "When she could not lift up her left arm and also felt extreme pain, Madam Choo knew she had a problem. Online research told her she might have a frozen shoulder, which eventually led her to us. Given the chronic nature of her problem, she was recommended a 3 week or 21 session treatment plan, which led to her eventual long-term recovery.\nFrozen shoulder issues (known also as adhesive capsulitis) can become really serious. Ineffective or inappropriate treatment can lead to the shoulder capsule thickening and hardening further. According to a leading American clinic’s website, frozen shoulder issues resolve in 1 to 3 years, usually with range of motion exercises, corticosteroids and numbing medications injected into the joint capsule.\nSometimes even arthroscopic surgery is recommended.\nOur treatment resolves frozen shoulder issues without these invasive procedures. It also is a lot faster, taking just 1-2 months instead of years. So please come in for a consultation for any frozen shoulder issues you, your family or your friends may have!\nThank you Madam Choo for your wholehearted testimonial!\n#frozenshoulder #chinesemedicine #alternativetreatment #chiropractoralternative #physiotherapy #yapchankor #shahalam #selangor #malaysia",
    "outcome": "When she could not lift up her left arm and also felt extreme pain, Madam Choo knew she had a problem. Online research told her she might have a frozen shoulder, which eventually led her to us. Given ...",
    "link": "https://yapchankor.com/testimonials/choo-yw-frozen-shoulder/",
    "length": 1245
  },
  {
    "id": "testimonial-51",
    "title": "Sakit belakang Bibi K",
    "slug": "back-pain",
    "content": "Madam Bibi K suffered from back (sakit belakang) and neck pain (sakit leher) for 10 years. After just 7 sessions of treatment with us, her pain reduced by 90%. Thank you for being a great patient and for sharing your story here!\n#neckpain #sakitleher #sakitbelakang #backpain #yapchankor #chiropractoralternative #chinesemedicine #alternativemedicine #yck #physiotherapy #shahalam #selangor #malaysia",
    "outcome": "Madam Bibi K suffered from back (sakit belakang) and neck pain (sakit leher) for 10 years. After just 7 sessions of treatment with us, her pain reduced by 90%. Thank you for being a great patient and ...",
    "link": "https://yapchankor.com/testimonials/bibi-k-sakit-belakang/",
    "length": 400
  },
  {
    "id": "testimonial-52",
    "title": "Arthritis Christine",
    "slug": "sprained-ankle",
    "content": "Rheumatic pain is a general description of pain and discomfort found in the joints. Many conditions can cause rheumatic pains, such as osteoarthritis or rheumatoid arthritis. Christine suffered from these pains in her hands and fingers as well as a sprain in her right foot. We were able to improve her quality of life by reducing the pain with a combination treatment using our proprietary topical medicines and ultrasound and TENS. Thanks for sharing your story!\n#rheumaticpain #rheumatismtreatment #yapchankor #yck #alternativetreatment #paintreatment #fingerpain #anklesprain",
    "outcome": "Rheumatic pain is a general description of pain and discomfort found in the joints. Many conditions can cause rheumatic pains, such as osteoarthritis or rheumatoid arthritis. Christine suffered from t...",
    "link": "https://yapchankor.com/testimonials/christine-arthritis/",
    "length": 579
  },
  {
    "id": "testimonial-53",
    "title": "Meniscus Injury Ahmad",
    "slug": "sports-injury",
    "content": "Ahmad is a young active and athletic guy whose sports injury to the knee caused him to stop sports. The left knee MCL & meniscus injury was caused by straining from previous sporting activities. After we treated him for just 10 sessions, we have renewed his confidence in being able to go back to sports. Thanks again Ahmad for sharing your story here!\n#kneemclinjury #meniscusinjury #yapchankor #yck #shahalam #physiotherapy #alternativetreatment #sportsinjury",
    "outcome": "Ahmad is a young active and athletic guy whose sports injury to the knee caused him to stop sports. The left knee MCL & meniscus injury was caused by straining from previous sporting activities. After...",
    "link": "https://yapchankor.com/testimonials/ahmad-meniscus-injury/",
    "length": 461
  },
  {
    "id": "testimonial-54",
    "title": "Sciatica Sarah",
    "slug": "back-pain",
    "content": "Long term chronic lower back pain usually can result in sciatica, which is a condition where the sciatic nerve is impinged, causing numbness and tingling pain down the leg. Sarah suffered from both back pain and sciatica from a fall 5 years ago, and despite many types of treatments like chiropractors and conventional care, she did not recover.\nShe was skeptical when she came to see us, but after only 7 sessions she saw great improvements. We hope that she will continue her treatment with us but in the meantime, we are glad to see that she is making progress with her back pain issues.\nThank you for sharing Sarah\n#backpain #sciatica #yapchankor #physiotherapy #alternativetreatment #lowerbackpain #numbness #subangjaya #ss15 #chinesemedicine #fusiontreatment",
    "outcome": "Long term chronic lower back pain usually can result in sciatica, which is a condition where the sciatic nerve is impinged, causing numbness and tingling pain down the leg. Sarah suffered from both ba...",
    "link": "https://yapchankor.com/testimonials/sarah-sciatica/",
    "length": 764
  },
  {
    "id": "testimonial-55",
    "title": "Slipped discs Cheong",
    "slug": "back-pain",
    "content": "Our treatment for slipped discs combines our proprietary herbal medicine patches with physiotherapy. The medicine is key to helping the body heal itself and has been time-tested and used by thousands. In Mr Cheong’s slipped discs case, we were able to produce superior results compared to the various other treatments he had tried before, such as chiropractors or massages. Within 7 sessions he felt a dramatic improvement. And over the entire 21 session treatment plan, we were able to treat his condition comprehensively, attacking not just the pain phase, but the healing and remodeling phases in the body’s soft tissue recovery process. Thanks Mr. Cheong for sharing your story!\n#slippeddiscs #yapchankor #backpaintreatment #slipdisc #slippeddiscstreatment #discdegeneration #backpain #kualalumpur #subangjaya #malaysia #alternativemedicine #chineseherbs #chinesemedicine #chiropractor #physiotherapy",
    "outcome": "Our treatment for slipped discs combines our proprietary herbal medicine patches with physiotherapy. The medicine is key to helping the body heal itself and has been time-tested and used by thousands....",
    "link": "https://yapchankor.com/testimonials/cheong-slipped-discs/",
    "length": 904
  },
  {
    "id": "testimonial-56",
    "title": "Slipped disc Marliyana",
    "slug": "back-pain",
    "content": "Marliyana is a young woman who has a history of back pain due to slipped discs at her L4 and L5 discs. When she came to us, she also complained of shoulder pain and numbness down her right arm, which we diagnosed as right bicipital tendonitis, a condition where the bicep tendon becomes inflamed. After just 2 weeks of treatment sessions, she has recovered her function in the right arm as well as seen her pain levels in both her back and shoulder regions drop significantly. Her slipped disc and shoulder pain case is typical of our current modern work lifestyle, and is in fact an occupational hazard from working long hours at a desk in front of computers.\nThank you for sharing your story Marliyana!\n#slippeddisc #chronicpaintreatment #lowerbackpain #tendinopathy #l4l5slippeddisc #slipdisc #yapchankor #yck #shahalam #selangor #malaysia #physiotherapy #chinesemedicine #martialartsmedicine #alternativetreatment",
    "outcome": "Marliyana is a young woman who has a history of back pain due to slipped discs at her L4 and L5 discs. When she came to us, she also complained of shoulder pain and numbness down her right arm, which ...",
    "link": "https://yapchankor.com/testimonials/marliyana-slipped-disc/",
    "length": 917
  },
  {
    "id": "testimonial-57",
    "title": "Sakit Belakang Azrul",
    "slug": "back-pain",
    "content": "Encik Azrul berumur 31 tahun bekerja sebagai esekutif di sebuah syarikat. Pekerjaan beliau banyak menggunakan pergerakan dan berdiri dalam masa yang lama. Selain itu, beliau juga sangat aktif dalam melakukan aktiviti sukan. Sejak kebelakangan ini, beliau mengalami sakit belakang selepas jatuh dari motosikal hampir 3 tahun. Semasa pemerhatian kami mendapati beliau mempunyai sedikit kecederaan pada tulang belakang dan membuatkan otot-otot di kawasan tersebut menjadi ketat atau dipanggil Mechanical Lower Back Pain. Hal ini menyebabkan beliau berasa tidak selesa dan tahap kesakitan beliau adalah 8/10. Beliau telah menjalani sesi rawatan bersama kami selama 21 sesi dan banyak perubahan telah berlaku pada diri beliau. Sekarang tahap kesakitan beliau semakin berkurangan, kekuatan otot semakin meningkat, boleh kembali melakukan aktiviti sukan dan bekerja seperti biasa. Terima kasih Encik Azrul Shaf’i kerana memilih kami sebagai tempat rawatan utama anda.\n#sakitbelakang #rawatansakitbelakang #rawatansakitkronik #yapchankor #yck #shahalam #fisioterapi #malaysia #selangor #rawatanalternatif",
    "outcome": "#sakitbelakang #rawatansakitbelakang #rawatansakitkronik #yapchankor #yck #shahalam #fisioterapi #malaysia #selangor #rawatanalternatif",
    "link": "https://yapchankor.com/testimonials/azrul-sakit-belakang/",
    "length": 1096
  },
  {
    "id": "testimonial-58",
    "title": "Ankle Injury Siva",
    "slug": "back-pain",
    "content": "Thanks for the referrals and recommendation! Siva suffered from an ankle injury which is a relatively common musculoskeletal injury that we treat at YAPCHANKOR. Ankle injuries can be due to sprains or tendon strains. In Siva’s case, his ankle injury prevented him from doing his gym routine. After just 2 weeks with us, he was back at his gym and he has referred several other patients to us. Thank you again Siva!\n#ankleinjury #anklesprain #yapchankor #yck #alternativemedicine #physiotherapy #chinesemedicine #fastrecovery #longtermrecovery",
    "outcome": "Thanks for the referrals and recommendation! Siva suffered from an ankle injury which is a relatively common musculoskeletal injury that we treat at YAPCHANKOR. Ankle injuries can be due to sprains or...",
    "link": "https://yapchankor.com/testimonials/siva-ankle-injury/",
    "length": 542
  },
  {
    "id": "testimonial-59",
    "title": "Knee Osteoarthritis Wendy",
    "slug": "knee-pain",
    "content": "The actives in the patches help with reducing inflammation and promoting healing, resulting in successes like Wendy’s case, where we have managed to give her back long-term function with minor everyday management for the remaining pain. 80% reduction in pain, and improvement in functional abilities is a common result with our knee OA cases, which is also accomplished in a remarkably short 2-3 weeks, compared to many months of painkillers.\nThanks Wendy for sharing your story!\n#kneeOA #osteoarthritis #paintreatment #kneepaintreatment #treatOA #YAPCHANKOR #subangjaya #ss15 #malaysia #physiotherapy #alternativetreatment #chinesemedicine #yck\nKNEE OA | WENDY\nWendy suffered from knee OA (osteoarthritis) for quite some time before visiting us at YAPCHANKOR. Knee OA cases are commonly experienced by people in their middle ages and up, and is also known as wear and tear arthritis. The pain from knee OA can be severe, and cause sufferers to lose the ability to do normal everyday activities such as climbing stairs, walking or stand for long periods or running, let alone jumping.\r\n\r\nWe have treated many cases of knee OA over the years, numbering in the hundreds. Conventional medicine usually only treats these conditions with long periods of painkillers (which can result in adverse cardiovascular or gastro-intestinal side effects), or steroid injections or total knee replacements. Without using any of these, we treat knee OA cases with physiotherapy modalities, exercises and most importantly, our proprietary herbal patches which are wrapped around the knees. The actives in the patches help with reducing inflammation and promoting healing, resulting in successes like Wendy’s case, where we have managed to give her back long-term function with minor everyday management for the remaining pain. 80% reduction in pain, and improvement in functional abilities is a common result with our knee OA cases, which is also accomplished in a remarkably short 2-3 weeks, compared to many months of painkillers.",
    "outcome": "Thanks Wendy for sharing your story!",
    "link": "https://yapchankor.com/testimonials/wendy-knee-osteoarthritis/",
    "length": 2014
  },
  {
    "id": "testimonial-60",
    "title": "Knee OA Rosni",
    "slug": "knee-pain",
    "content": "Puan Rosni suffered from bilateral knee OA (osteoarthritis) for 5 years. She was treated with painkillers mainly by her doctor, but the treatment did not help reduce her pain. She lost functional movement, and could not stand or walk for long, let alone walk fast. Only 2 weeks of treatment with us at YAPCHANKOR helped reduce her pain significantly enough that she was able to regain function (walking and standing for longer periods). She could probably use another week of treatment since her condition is usually treated a little longer at our centres, but nonetheless, we are happy to see that she has progressed this far. Thank you again Puan Rosni for sharing your story here.\n#kneeosteoarthritis #oatreatment #bilateralkneeoa #yapchankor #yck #chinesemedicine #alternativetreatment #painrelief #longtermrecovery #shahalam #selangor #malaysia #sakitlutut",
    "outcome": "Puan Rosni suffered from bilateral knee OA (osteoarthritis) for 5 years. She was treated with painkillers mainly by her doctor, but the treatment did not help reduce her pain. She lost functional move...",
    "link": "https://yapchankor.com/testimonials/rosni-knee-oa/",
    "length": 861
  },
  {
    "id": "testimonial-61",
    "title": "Elbow Pain Cecelia",
    "slug": "wrist-pain",
    "content": "Cecelia suffered from a wrist and elbow injury when she came to see us at YAPCHANKOR. Her injuries were quite chronic, and we recommended a 21 session treatment plan for her. Her elbow is now healed but when she wrote this for us, we were still treating her wrist, where the improvement has not been as complete. We hope that by the end of the treatment, and with the help of strengthening exercises, she will have full use of her wrist again. Thank you for sharing your story here.\n#wristpain #elbowpain #wristandelbowinjury #yapchankor #yck #oldklangroad #kualalumpur #physiotherapy",
    "outcome": "Cecelia suffered from a wrist and elbow injury when she came to see us at YAPCHANKOR. Her injuries were quite chronic, and we recommended a 21 session treatment plan for her. Her elbow is now healed b...",
    "link": "https://yapchankor.com/testimonials/cecelia-elbow-pain/",
    "length": 584
  },
  {
    "id": "testimonial-62",
    "title": "Cervical Slipped Disc Danny",
    "slug": "chronic-pain",
    "content": "Danny suffered from a cervical slipped disc which caused discomfort, pain and numbness down his right arm to his hand. This sensation is not only very uncomfortable and painful, it also causes a loss of function. Danny had trouble using his right arm for daily activities. He came to see us and was treated by our physiotherapist Joy. Glad to hear that he’s improved tremendously. Thank you for sharing your story!\n#cervicalslippeddisc #cervicalpain #slippeddiscpain #slippeddisctreatment #yapchankor #yck #alternativetreatment #muscleandjointpaintreatment #subangjaya #subangss15 #malaysia #selangor #klangvalley",
    "outcome": "Danny suffered from a cervical slipped disc which caused discomfort, pain and numbness down his right arm to his hand. This sensation is not only very uncomfortable and painful, it also causes a loss ...",
    "link": "https://yapchankor.com/testimonials/danny-cervical-slipped-disc/",
    "length": 613
  },
  {
    "id": "testimonial-63",
    "title": "Frozen shoulder Dato Segara",
    "slug": "back-pain",
    "content": "We treated Dato’ Segara for his frozen shoulder and for back pain due to lumbar spondylosis. When he first came, he complained of moderate pain (4/10 for both the shoulder and back), restricted movement (his range was 90 degrees vs. the normal 140-160 degrees) and limitations on functional activities such as gardening. After our treatment, which lasted 21 sessions, we got rid of his frozen shoulder, his pain level dropped to 1/10 for his shoulder and 0/10 for his back, his range improved to 130 degrees and he could go back to doing the activity that he loves in retirement – gardening.\nThanks for sharing your story here Dato Segara!\n#frozenshoulder #frozenshouldertreatment #lumbarspondylosis #shoulderpaintreatment #stiffshoulders #yapchankor #yck #kualalumpur #malaysia #alternativemedicine #physiotherapy #chinesemedicine #secretformula",
    "outcome": "Thanks for sharing your story here Dato Segara!",
    "link": "https://yapchankor.com/testimonials/dato-segara-frozen-shoulder/",
    "length": 846
  },
  {
    "id": "testimonial-64",
    "title": "Lower Back Pain Tang YP",
    "slug": "back-pain",
    "content": "We healed a 20 year old injury for Mr. Tang! After suffering for 2 decades because he lifted a bucket of ice the wrong way, Mr. Tang has been suffering from lower back pain off and on, and also been seeing a chiropractor for a long time. His wife finally suggested he come see us instead, and with just 14 sessions or 2 weeks of treatment, we have gotten rid of his pain and helped him regain normal function. Thanks for sharing your story Mr. Tang!\n#lowerbackpain #backpaintreatment #mechanicalbackpainttreatment #yapchankor #yck #alternativetreatment #physiotherapy #subangjaya #ss15 #kualalumpur #malaysia",
    "outcome": "We healed a 20 year old injury for Mr. Tang! After suffering for 2 decades because he lifted a bucket of ice the wrong way, Mr. Tang has been suffering from lower back pain off and on, and also been s...",
    "link": "https://yapchankor.com/testimonials/tang-yp-lower-back-pain/",
    "length": 608
  },
  {
    "id": "testimonial-65",
    "title": "Knee Injury Wendy",
    "slug": "knee-pain",
    "content": "Thanks Wendy for your glowing testimonial! We are glad we were able to fix your knee, and glad to hear you are on the path to long term recovery. Wendy suffered from a knee injury from climbing a hill that strained her meniscus. She underwent 21 sessions with us and we have managed to fix her knee. With a home exercise program taught by our physiotherapists, she should be well on her way to regain normal function in her knee. Thanks again Wendy!\n#‎kneemeniscusinjury\n‪#‎knee\npain‬\n‪#‎hikinginjury\n‬\n‪#knee\ntreatment‬\n‪#‎\nyapchankor‬\n‪#‎\nyck‬\n‪\n#‎\nalternativetreatment‬\n#‎\nmuscleandjointpaintreatment‬\n‪#‎\nsubangjaya‬\n‪#‎\nsubang",
    "outcome": "Thanks Wendy for your glowing testimonial! We are glad we were able to fix your knee, and glad to hear you are on the path to long term recovery. Wendy suffered from a knee injury from climbing a hill...",
    "link": "https://yapchankor.com/testimonials/wendy-knee-injury/",
    "length": 631
  },
  {
    "id": "testimonial-66",
    "title": "Pinched Nerves Mohamed",
    "slug": "neck-pain",
    "content": "Recently we treated a Kenyan national, Mr Mohamed Omar who suffered from arm and neck pain. The problem was causing numbness down his arm, which is a typical symptom of pinched nerves. We treated him in a week’s worth of sessions and put him on the path to long term recovery. Thanks for sharing your story!\n#armnumbness #neckpain #pinchednerves #herniateddisc #armpain #yapchankor #alternativemedicine #yck #physiotherapy #longtermrecovery #muscleandjoint",
    "outcome": "Recently we treated a Kenyan national, Mr Mohamed Omar who suffered from arm and neck pain. The problem was causing numbness down his arm, which is a typical symptom of pinched nerves. We treated him ...",
    "link": "https://yapchankor.com/testimonials/mohamed-pinched-nerves/",
    "length": 456
  },
  {
    "id": "testimonial-67",
    "title": "Meniscus tear Jason",
    "slug": "knee-pain",
    "content": "When Jason suffered from a knee injury, he came to us and we diagnosed his problem as a minor medial meniscus tear. We recommended a 10 session treatment plan and after his sessions, he is now well on his way to recovery.\n#medialmeniscustear #kneeinjury #kneepain #yapchankor #yck",
    "outcome": "When Jason suffered from a knee injury, he came to us and we diagnosed his problem as a minor medial meniscus tear. We recommended a 10 session treatment plan and after his sessions, he is now well on...",
    "link": "https://yapchankor.com/testimonials/jason-meniscus-tear/",
    "length": 280
  },
  {
    "id": "testimonial-68",
    "title": "Sciatica Jamilah",
    "slug": "back-pain",
    "content": "Jamilah actually is giving her 2nd testimonial here for sciatica on the left side. Previously we treated her for her slipped disc back pain, which was primarily on the right side. When she first came to us, she could not walk without assistance, could not sit or stand for too long, and could not drive. She had also tried physiotherapy at a local hospital but that didn’t help. Her pain level on the Visual Analogue scale was 8 or 9/10. After our treatment for 21 sessions, she has recovered tremendously. Her functional improvements are the main accomplishment for us, as she is now able to walk and drive again. Her pain level, while not 0/10, has dropped by 76% to around 2/10. Jamilah has also referred many friends to our clinic, which we are really grateful for. Terima kasih Jamilah!\n#sakitpinggang #sciaticatreatment #sciaticapain #rawatansciatica #yapchankor #yck #alternativetreatment #rawatanalternatif#selangor #shahalam #otottulang #slippeddisc",
    "outcome": "Jamilah actually is giving her 2nd testimonial here for sciatica on the left side. Previously we treated her for her slipped disc back pain, which was primarily on the right side. When she first came ...",
    "link": "https://yapchankor.com/testimonials/jamilah-sciatica/",
    "length": 958
  },
  {
    "id": "testimonial-69",
    "title": "Plantar fasciitis Salleh",
    "slug": "sprained-ankle",
    "content": "Saleh is a young man who suffered from plantar fasciitis and an ankle sprain, though he refers to it as “sakit kaki”. We are thrilled to hear that he progressed so well from our treatment, and really appreciate your kind words! Glad we were able to help and thank you for sharing your story!\n#sakitkaki #plantarfasciitis #anklesprain #rawatansakitkaki #yapchankor #yck #alternativetreatment #rawatanalternatif #selangor #shahalam #otottulang",
    "outcome": "Saleh is a young man who suffered from plantar fasciitis and an ankle sprain, though he refers to it as “sakit kaki”. We are thrilled to hear that he progressed so well from our treatment, and really ...",
    "link": "https://yapchankor.com/testimonials/salleh-plantar-fasciitis/",
    "length": 441
  },
  {
    "id": "testimonial-70",
    "title": "Wrist Injury Jonathan",
    "slug": "wrist-pain",
    "content": "Jonathan suffered from a wrist injury and after finding us online, he decided to try us out. After a few sessions, his skin did not take well to our herbal patches, which sometimes happens with a small number of patients. However, we continued to treat him using more manual methods and physiotherapy, and at the end, he recovered sufficiently to regain almost normal use of his wrist. Thank you Jonathan for your patience and for giving us a try!\n#wristinjury #wristpaintreatment #yapchankor #yck #physiotherapy #alternativetreatment #muscleandjointpain",
    "outcome": "Jonathan suffered from a wrist injury and after finding us online, he decided to try us out. After a few sessions, his skin did not take well to our herbal patches, which sometimes happens with a smal...",
    "link": "https://yapchankor.com/testimonials/jonathan-wrist-injury/",
    "length": 554
  },
  {
    "id": "testimonial-71",
    "title": "Carpal Tunnel Hazana",
    "slug": "wrist-pain",
    "content": "Another case that we saved from surgery! Puan Hazana was diagnosed with carpal tunnel syndrome, which affected her work since she couldn’t type. Her treatment with an acupuncturist helped temporarily but when she came to see us last year, the pain in her fingers was rated by her at around 4, on the Visual Analogue scale of 1 to 10 (10 being unbearable pain). By the end of the treatment, her pain was down to 0, and she was quite satisfied with the result. Thank you for trying us out without any hesitation!\n#carpaltunnelsyndrome #wristpain #fingerpain #handpain #paintreatment #yapchankor #yck #alternativetreatment #nonsurgical #noninvasive",
    "outcome": "Another case that we saved from surgery! Puan Hazana was diagnosed with carpal tunnel syndrome, which affected her work since she couldn’t type. Her treatment with an acupuncturist helped temporarily ...",
    "link": "https://yapchankor.com/testimonials/hazana-carpal-tunnel/",
    "length": 645
  },
  {
    "id": "testimonial-72",
    "title": "Muscle Strains Ms Kong",
    "slug": "general",
    "content": "“I suffered from a pectoralis major strain due to work habits and long distance driving. Right muscle was aching and slight weakness was felt at right arm. I did stretching exercises with [TENs] and massages with patch at YAPCHANKOR Subang outlet. The pain reduced after 6 treatments and the aching has stopped. I would like to thank YAPCHANKOR staff for their considerate and great treatment while I was here. Thank you.” – Kong SY\n#pectoralismajor #musclestrain #cheststrain #chestpain #yapchankor #yck #alternativetreatment #physiotherapy",
    "outcome": "“I suffered from a pectoralis major strain due to work habits and long distance driving. Right muscle was aching and slight weakness was felt at right arm. I did stretching exercises with [TENs] and m...",
    "link": "https://yapchankor.com/testimonials/ms-kong-muscle-strains/",
    "length": 541
  },
  {
    "id": "testimonial-73",
    "title": "Ankle Sprain Puan Rahimah",
    "slug": "sprained-ankle",
    "content": "“Saya telah terjatuh dan kaki saya berlipat menyebabkan sakit yang teramat sangat. Dalam seminggu saya terpaksa solat atas kerusi. Kawan saya syorkan supaya saya membuat rawatan di YAPCHANKOR. Setelah beberapa kali rawatan kaki saya beransur pulih. Alhamdulillah syukur setelah membuat rawatan sebanyak 7 kali, kaki saya telah pulih sepenuhnya. Terima kasih banyak saya ucapkan kepada Cik Vaharli Hassan yang telah merawat saya dengan begitu baik sekali, penuh dengan kelembutan dan kasih sayang. TQ.” – Rahimah\n#bukulaliterseliuh #anklesprain #yapchankor #yck #testimonial #paintreatment #alternativetreatment #kualalumpur #malaysia",
    "outcome": "#bukulaliterseliuh #anklesprain #yapchankor #yck #testimonial #paintreatment #alternativetreatment #kualalumpur #malaysia",
    "link": "https://yapchankor.com/testimonials/puan-rahimah-ankle-sprain/",
    "length": 633
  },
  {
    "id": "testimonial-74",
    "title": "Back Pain Ghazali",
    "slug": "back-pain",
    "content": "“Came here with serious back pain and numbness at my left thigh. After the 3rd treatment I felt a lot better and the numbness at my left thigh was almost gone.\nAfter the treatment only minimal back pain left which I felt manageable. I wish to thank all the physiotherapists for the kind treatment and friendly welcoming experience.” –  Ghazali\n#numbnesswithbackpain #backpaintreatment #treatingnumbness #yapchankor #yck #herbalmedicine #alternativemedicine #chinesemedicine #kungfumedicine #ampang #kualalumpur",
    "outcome": "“Came here with serious back pain and numbness at my left thigh. After the 3rd treatment I felt a lot better and the numbness at my left thigh was almost gone.",
    "link": "https://yapchankor.com/testimonials/ghazali-back-pain/",
    "length": 510
  },
  {
    "id": "testimonial-75",
    "title": "Lower Back Pain Farzana",
    "slug": "back-pain",
    "content": "“I have problem with my upper and lower back for several years. After I follow several sessions for fisio, treatment and exercise. After several sessions, I’m feeling better. Now, I just continue with my exercises.” – Farzana\n#backpaintreatment #yapchankor #yck #physiotherapywithadifference #chinesemedicine #herbalmedicine #alternativetreatmentforpain",
    "outcome": "“I have problem with my upper and lower back for several years. After I follow several sessions for fisio, treatment and exercise. After several sessions, I’m feeling better. Now, I just continue with...",
    "link": "https://yapchankor.com/testimonials/farzana-lower-back-pain/",
    "length": 353
  },
  {
    "id": "testimonial-76",
    "title": "Osteoarthritis Madam Lim",
    "slug": "knee-pain",
    "content": "“I have ‘O’ shaped legs for quite some time, it caused me to suffer from pain everytime I walk for a distance. Besides that, I have stiff shoulders and neck too due to my working posture. I never been for any therapies or treatment as I worried of surgery like replacement of knee cap till I heard about YAP CHAN KOR. I give it a try for the 21 times treatment plan and now I feel better when I walk, especially during my holiday in Bangkok. The pain is still there but as compared to previously, it improved a lot. Thanks so much to the physiotherapist who attended me, like Vaharli, Bella Lai Thing and Sue.” – Lim S.L.\n#kneeoa #kneepain #kneeosteoarthritis #yapchankor #testimonial #yck #physiotherapy #chinesemedicineforpain #paintreatmentcentre",
    "outcome": "“I have ‘O’ shaped legs for quite some time, it caused me to suffer from pain everytime I walk for a distance. Besides that, I have stiff shoulders and neck too due to my working posture. I never been...",
    "link": "https://yapchankor.com/testimonials/madam-lim-osteoarthritis/",
    "length": 749
  },
  {
    "id": "testimonial-77",
    "title": "Ankle Sprain Yani",
    "slug": "sprained-ankle",
    "content": "“I sprained my right ankle during a badminton game & zumba exercise. The ankle became swollen and painful. After 3 times went to clinic, the doctor just gave me painkiller and gel to apply on my ankle. About 1 month suffering on my injury, my friend introduced me to YCK. I made an appointment for the treatment. After the several treatments, the pain and [swelling] on the ankle more reduced. Even though it is not 100% fully recovered, the physiotherapist taught me a lot of exercise which could help me to improve my condition even after the treatment. I thoroughly appreciated their service.” – Yani\n#anklespraintreatment #yapchankor #yck #anklesprainrecovery #testimonial #kualalumpur #physiotherapy",
    "outcome": "“I sprained my right ankle during a badminton game & zumba exercise. The ankle became swollen and painful. After 3 times went to clinic, the doctor just gave me painkiller and gel to apply on my ankle...",
    "link": "https://yapchankor.com/testimonials/yani-ankle-sprain/",
    "length": 704
  },
  {
    "id": "testimonial-78",
    "title": "Climber’s Finger Surain",
    "slug": "general",
    "content": "“Been doing rock/wall climbing for more than 5 years which involves a lot of crimping (whereby the fingers pull up the body up a wall/rock surface). Due to that, my fingers (the joints) have become stiff and sore, making it difficult to clench (make a fist). Got to know YAP CHAN KOR from a fellow climber. After 10 sessions, I’d say it has improved by 80%. Still have work to do on one more finger. My physiotherapist did a fantastic job, he has excellent knowledge and experience that I can relate to and he has people skills (able to make conversation), and explain my condition. I’d highly recommend YCK to my family and friends.” – Surain\n#climbersfingertreatment #sorefingertreatment #stifffingers #yck #yapchankor #chinesemedicine #physiotherapist",
    "outcome": "#climbersfingertreatment #sorefingertreatment #stifffingers #yck #yapchankor #chinesemedicine #physiotherapist",
    "link": "https://yapchankor.com/testimonials/surain-climbers-finger/",
    "length": 754
  },
  {
    "id": "testimonial-79",
    "title": "Chronic Ankle Injury Amir",
    "slug": "sprained-ankle",
    "content": "“Kecederaan ankle saya semenjak lebih kurang 15-17 tahun dula sangat teruk. Sedikit kesilapan semasa terpijak jalan tidak rata atau terseleh step akan mendatangkan kesakitan. Alhamdulillah setelah mengalami rawatan di sini, ankle saya bertambah kuat dan kesakitan lama semakin hilang. Terima kasih.” – Amir\n#chronicankleinjurytreatment #yapchankor #anklesprain #yck #chinesemedicine #alternativetreatmentforanklepain",
    "outcome": "#chronicankleinjurytreatment #yapchankor #anklesprain #yck #chinesemedicine #alternativetreatmentforanklepain",
    "link": "https://yapchankor.com/testimonials/amir-ankle-injury/",
    "length": 416
  },
  {
    "id": "testimonial-80",
    "title": "Sakit Tulang Belakang Asa",
    "slug": "back-pain",
    "content": "“Saya sakit tulang belakang sangat teruk, sakit sangat – jadi saya pergi but rawatan klinik sakit tulang sendi. Saya ambil dalam masa dua bulan. Sekarang ini saya merasa sangat baik pulih, seperti biasa dan dah balik buat aktiviti seperti biasa. Alhamdullilah. Terbaik bah.” – Asa\n#sakittulangbelakang #backpaintreatment #rawatansakitbelakang #yapchankor #yck #fisioterapi",
    "outcome": "#sakittulangbelakang #backpaintreatment #rawatansakitbelakang #yapchankor #yck #fisioterapi",
    "link": "https://yapchankor.com/testimonials/asa-sakit-tulang-belakang/",
    "length": 372
  },
  {
    "id": "testimonial-81",
    "title": "Knee Sprain Datin Rosilina",
    "slug": "knee-pain",
    "content": "“My right knee was injured when I fell while walking. I attended YAP CHAN KOR for 22 treatments. I find the treatment is effective since the facility provided me with specific exercises to cure my ailment.” – Rosilina\n#kneeligamentspraintreatment #kneepaintreatment #treatkneesprain #yapchankor #yck #testimonials #physiotherapists #chinesemedicine",
    "outcome": "#kneeligamentspraintreatment #kneepaintreatment #treatkneesprain #yapchankor #yck #testimonials #physiotherapists #chinesemedicine",
    "link": "https://yapchankor.com/testimonials/datin-rosilina-knee-sprain/",
    "length": 348
  },
  {
    "id": "testimonial-82",
    "title": "Chronic Leg Pain Dato Rahmat",
    "slug": "back-pain",
    "content": "“About four months ago, I had a MRI taken for my spine on Doctors’ advice. Confirmed that my 4 & 5 lumbar were pinching on my nerves, especially on my left leg.\nI went through various treatments – physic and chiropractic treatment, but my left leg pain persisted.\nOn referral by a friend, I discovered YAPCHANKOR Subang Jaya. I find the treatment very effective. I find that I may not be able to achieve 100% full recovery but the exercises always help in my treatment for my leg pain.” – Rahmat\n#legpaintreatment #calfpaintreatment #pinchednerves #pinchednervetreatment #lumbarpaintreatment #yapchankor #yck #alternativetreatment",
    "outcome": "On referral by a friend, I discovered YAPCHANKOR Subang Jaya. I find the treatment very effective. I find that I may not be able to achieve 100% full recovery but the exercises always help in my treat...",
    "link": "https://yapchankor.com/testimonials/dato-rahmat-chronic-leg-pain/",
    "length": 630
  },
  {
    "id": "testimonial-83",
    "title": "Knee Pain Shahnaz",
    "slug": "knee-pain",
    "content": "“Obtained injury after futsal session. Janna (and other physiotherapists) helped in identifying what are causes and ways to reduce future injuries.\nWill definitely recommend YCK to friends and family members.” – Shahnaz\n#futsalinjury #kneepaintreatment #yck #yapchankor #sportsinjurytreatment",
    "outcome": "#futsalinjury #kneepaintreatment #yck #yapchankor #sportsinjurytreatment",
    "link": "https://yapchankor.com/testimonials/shahnaz-knee-pain/",
    "length": 292
  },
  {
    "id": "testimonial-84",
    "title": "Lumbar Spondylosis Jez L.",
    "slug": "chronic-pain",
    "content": "“Suffering chronic pain for a year and a half.  Tried medication, acupuncture and chiropractic but no effect. At Yap Chan Kor, I was undergoing 21 sessions of herbal patching, massages, infrared, strengthening, flexibility.\nI’m truly impressed by YAP CHAN KOR and especially my physiotherapist Brian Moreira. He has not only received my pain, he has treated the root cause! It’s worth the money spent. As I’m back to outdoor activities / exercises – HAPPILY.” – Jezamine Lo\n#lumbarspondylosistreatment #scoliosistreatment #yapchankor #yck #secretformula #lowbackpaintreatment #alternativetreatment #chinesemedicine #testimonial\nJezamine was a recent success story. She had suffered for over one year from low back pain due to lumbar spondylosis and some slight scoliosis. She spent thousands of ringgit trying different treatments during this year, but either there was no effect on reducing her pain or the pain relief was temporary. This really affected her quality of life as she was a very active person and loved exercising, cycling, doing yoga and running.\r\n\r\nShe found us after searching online and came to see us after reading our testimonials. Due to the chronic nature of her problem, our physiotherapists recommended a 21-session treatment plan, where we comprehensively addressed the pain, healing and remodelling stages of soft tissue recoveries. Her recovery was apparent during the first week but became much more obvious after the first week. This is typical of our chronic pain patients’ experiences, which is why it is important for our patients to remain patient with our treatment sometimes.\r\n\r\nToday her back pain has been resolved and she’s back to her active lifestyle. She has told us that she can cycle and jog now without any pain. We also taught her some further exercises to continue to maintain the strength and flexibility of her back. Thank you Jezamine for your testimonial!",
    "outcome": "She found us after searching online and came to see us after reading our testimonials. Due to the chronic nature of her problem, our physiotherapists recommended a 21-session treatment plan, where we ...",
    "link": "https://yapchankor.com/testimonials/jez-l-lumbar-spondylosis/",
    "length": 1906
  },
  {
    "id": "testimonial-85",
    "title": "Wrist Pain Chong",
    "slug": "knee-pain",
    "content": "“The treatment and services of the physiotherapist (My and Brian) are good and patient to provide their services. The medicine especially massage by using the cream are quite effective.\nI got the hand (wrist) swollen and pain for numbness of ( ) and after massage and put on the medicine by YCK, the hand is now much better and recovering after I had tried other treatment in many places, inclusive seeing doctor (giving painkiller). It is glad that I came to YCK for treatment.” – Chong PK\n#wristpaintreatment #yapchankor #yck #kneeoatreatment #tenosynovitistreatment #chinesemedicine #secretformula",
    "outcome": "I got the hand (wrist) swollen and pain for numbness of ( ) and after massage and put on the medicine by YCK, the hand is now much better and recovering after I had tried other treatment in many place...",
    "link": "https://yapchankor.com/testimonials/chong-wrist-pain/",
    "length": 600
  },
  {
    "id": "testimonial-86",
    "title": "Ankle Sprain Tee KJ",
    "slug": "sprained-ankle",
    "content": "“One day, when I woke up from bed, I felt my left leg was [in] pain, but it [didn’t hurt] until I can’t walk, so I didn’t care about it…thought it was just normal and I went to work as usual. But the time when I was working, the pain [kept] getting serious until I couldn’t walk properly. Then my colleague suggested me that I got for YAPCHANKOR because she tried before and says that it is good. So I made an appointment and looked for treatment. Ms. Siva who attended to me and recommended me the treatment after she checked my leg. After few treatments, my leg doesn’t feel that pain anymore and now after the treatment, my leg has recovered from the pain. I feel very happy and satisfied with the service and treatment that I have at YAPCHANKOR. (Credit to Ms. Siva).” – Tee KJ\n#anklespraintreatment #ankleligamentsprain #treatingankles #yapchankor #yck #paintreatment #limping #ankleandfootpain #alternativetreatment #physiotherapy",
    "outcome": "“One day, when I woke up from bed, I felt my left leg was [in] pain, but it [didn’t hurt] until I can’t walk, so I didn’t care about it…thought it was just normal and I went to work as usual. But the ...",
    "link": "https://yapchankor.com/testimonials/tee-kj-ankle-sprain/",
    "length": 936
  },
  {
    "id": "testimonial-87",
    "title": "Stiff neck Winnie",
    "slug": "shoulder-pain",
    "content": "“Was having numbness of left side: from shoulder to fingers and stiff neck the same time. This problem has bothered me for almost 2 months+.\nMy colleague recommended me to try this “Chinese traditional + Western treatment” in month of August 2015. My problem has gradually reduced and has almost recovered before the end of the recommended “10 sessions” treatment.\nThanks to my physiotherapist Joy who is a very patient, caring, gentle and friendly person.”\n#numbnessinarm #numbnesstreatment #stiffnecktreatment #yck #yapchankor #chinesetraditionaltreatment #westernandeasterntreatment #neckpain #shoulderpain #shouldernumbness",
    "outcome": "My colleague recommended me to try this “Chinese traditional + Western treatment” in month of August 2015. My problem has gradually reduced and has almost recovered before the end of the recommended “...",
    "link": "https://yapchankor.com/testimonials/winnie-stiff-neck/",
    "length": 627
  },
  {
    "id": "testimonial-88",
    "title": "Shoulder Soreness Daniel",
    "slug": "shoulder-pain",
    "content": "“My neck & shoulder showed gradual improvement throughout the treatment sessions. The strength is now beginning to return to the shoulder.” – Daniel\n#shouldersorenesstreatment #shoulderpaintreatment #neckandshouldertreatment #neckpain #shoulderpain #yapchankor #yck #subangjaya",
    "outcome": "#shouldersorenesstreatment #shoulderpaintreatment #neckandshouldertreatment #neckpain #shoulderpain #yapchankor #yck #subangjaya",
    "link": "https://yapchankor.com/testimonials/daniel-shoulder-soreness/",
    "length": 277
  },
  {
    "id": "testimonial-89",
    "title": "Sciatica Romesh",
    "slug": "back-pain",
    "content": "“For a week or 2, had pain in back radiating to left hamstring when sitting down and when standing up after sitting. After googling [symptoms, I] found out I had sciatica and friend suggested to come to YCK. Since undergoing treatment, I have found to be back to normal around 9-10th session. The exercises taught by physiotherapist helped a lot to recover. Thank you YCK.” – Romesh\n#sciaticatreatment #yck #yapchankor #lowerbackpaintreatment #legpaintreatment",
    "outcome": "“For a week or 2, had pain in back radiating to left hamstring when sitting down and when standing up after sitting. After googling [symptoms, I] found out I had sciatica and friend suggested to come ...",
    "link": "https://yapchankor.com/testimonials/romesh-sciatica/",
    "length": 460
  },
  {
    "id": "testimonial-90",
    "title": "Sakit Pergelangan Tangan Fatimah",
    "slug": "wrist-pain",
    "content": "“Saya mengalami masalah sendi tangan sejak 5 bulan lalu sehingga kedua-dua belah tangan bengkak dan sakit. Melalui anak saya, kami menemui YCK treatment centre di Shah Alam. Kali pertama melangkah ke YCK treatment centre dan dibantu oleh saudara Azlan maka bermulalah rawatan untuk membantu tangan saya daripada bengkak dan sakit. Saudara Azlan telah menjalankan rawatan dari sehari ke sehari sehinggalah tamat rawatan sebanyak 14 kali. Saya mula merasa perubahan pada minggu kedua rewatan di mana tangan mula boleh bergerak dan bengkak telah hilang. Bermulalah kehidupan saya seperti biasa. Terima kasih kepada saudara Azlan serta kakitangan lain yang membantu saya semasa mendapat rawatan disini. Saya akan mengesyorkan kepada rakan-rakan serta saudara jika perlu untuk mendapat rawatan di YCK. Bukan sahaja mendapat rawatan memuaskan kami sekeluarga mendapat menjalin persahabatan dengan saudara Azlan. Terima kasih sekali lagi.” – Fatimah\n#sakitpergelangantangan #wristpaintreatment #triggerfingertreatment #yapchankor #yck #physiotherapy #tanganbengkak",
    "outcome": "#sakitpergelangantangan #wristpaintreatment #triggerfingertreatment #yapchankor #yck #physiotherapy #tanganbengkak",
    "link": "https://yapchankor.com/testimonials/fatimah-sakit-pergelangan-tangan/",
    "length": 1057
  },
  {
    "id": "testimonial-91",
    "title": "Sakit Lutut Fawzi",
    "slug": "knee-pain",
    "content": "“Saya telah mengalami kemalangan motosikal hampir setahun yang lalu (Nov 2014). Kaki kanan saya mengalami ‘multiple fracture’ dan saya tidak dapat berjalan tanpa menggunakan tongkat (sakit walaupun patah yang saya alami itu telah sembuh sepenuhnya). Saya telah memilih rawatan 21 kali di YAPCHANKOR. Selama 21 hari saya dirawat (urut, exercise & tampalan ubat herba) dan ALHAMDULILLAH kini saya berjaya berjalan tanpa menggunakan tongkat lagi dan saya boleh kembali berkerja semula.” – Fawzi\n#kemalanganmotosikal #tulangpatah #yapchankor #berjalantanpatongkat",
    "outcome": "#kemalanganmotosikal #tulangpatah #yapchankor #berjalantanpatongkat",
    "link": "https://yapchankor.com/testimonials/fawzi-sakit-lutut/",
    "length": 559
  },
  {
    "id": "testimonial-92",
    "title": "Shoulder Tendinitis Hafizudin",
    "slug": "shoulder-pain",
    "content": "“I was diagnosed with severe shoulder muscle tenderness / stiffness. I experienced this pain for almost a year. Due [to] bad body posture, lack of exercise and office work. I started treatment with YAPCHANKOR for 3 months.\nThe result was spectacular and promising, with good knowledge, tips and advice from their therapist. I managed to fully recover. Well done guys. Keep up the great service. I thank you for your service and treatment. ” – Muhd Hafizuddin\n#shouldertendinitistreatment #shoulderstiffness #musclepaintreatment #severeshoulderpain #yck #yapchankor #alternativemedicine #stiffshouldertreatment",
    "outcome": "The result was spectacular and promising, with good knowledge, tips and advice from their therapist. I managed to fully recover. Well done guys. Keep up the great service. I thank you for your service...",
    "link": "https://yapchankor.com/testimonials/hafizudin-shoulder-tendinitis/",
    "length": 609
  },
  {
    "id": "testimonial-93",
    "title": "Meniscus injury Marzuki",
    "slug": "knee-pain",
    "content": "“I’m quite an active golfer, playing 2-3 times a week. About 2 months ago, I developed pain in my right knee but could still walk. A month later I developed pain, this time in my left knee, [with] difficulties in walking. I was referred to YCK by Dr. Tan. After 3 days of consecutive treatments by En. Azlan, I can walk with less pain. After 10 sessions of treatment, both my knees are feeling better with no pain. Thank you to En. Azlan and YCK staff for a professional handling of the case.” – Marzuki S\n#golfinjurytreatment #meniscusinjurytreatment #kneepaintreatment #plantarfasciitistreatment #yapchankor #yck #alternativemedicineforpain",
    "outcome": "“I’m quite an active golfer, playing 2-3 times a week. About 2 months ago, I developed pain in my right knee but could still walk. A month later I developed pain, this time in my left knee, [with] dif...",
    "link": "https://yapchankor.com/testimonials/marzuki/",
    "length": 642
  },
  {
    "id": "testimonial-94",
    "title": "Slipped Disc Ng",
    "slug": "back-pain",
    "content": "Mr. Ng is another recent slipped disc case that we treated. Slipped disc or disc herniation cases are quite common these days but the options for patients are not so great. Usually conservative treatment that the doctor recommends will involve taking painkillers and doing conventional physiotherapy. These only treat the symptoms, not the cause, and also either take an extremely long time to produce results, or just don’t work, as in the case of Mr. Ng.\nMany alternative treatments have emerged claiming their credentials to treat slipped disc cases. Chiropractors and acupuncturists are some examples, and patients should be careful before accepting their claims at face value.\nOur treatment for slipped discs involve using our proprietary herbal medicine patches together with physiotherapy modalities to not just treat the symptoms, but to attack the cause. This is why our goal for every patient we treat is long-term recovery, and our track record speaks for itself.\nThank you Mr. Ng for trying us out and sharing your story here!\n#slippeddisctreatmentthatworks #yapchankor #backpaintreatment #slipdisctreatment",
    "outcome": "Our treatment for slipped discs involve using our proprietary herbal medicine patches together with physiotherapy modalities to not just treat the symptoms, but to attack the cause. This is why our go...",
    "link": "https://yapchankor.com/testimonials/ng-slipped-disc/",
    "length": 1119
  },
  {
    "id": "testimonial-95",
    "title": "Lower back pain Yomiko",
    "slug": "back-pain",
    "content": "Budding actress Yomiko hurt her back during a drama session, suffering an excruciating lower back pain till she almost cried. It’s a good thing for younger folk to get early treatment for these types of problems, because the body heals faster and better, instead of allowing these problems to turn chronic. Thank you Yomiko and good luck with school!\n#lowerbackpain #yapchankor #backpaintreatment #yck #alternativetreatment",
    "outcome": "Budding actress Yomiko hurt her back during a drama session, suffering an excruciating lower back pain till she almost cried. It’s a good thing for younger folk to get early treatment for these types ...",
    "link": "https://yapchankor.com/testimonials/yomiko-lower-back-pain/",
    "length": 423
  },
  {
    "id": "testimonial-96",
    "title": "Sakit lutut Madam Chong",
    "slug": "knee-pain",
    "content": "Madam Chong mengalami sakit lutut sejak beberapa tahun yang lalu, apabila beliau jatuh dan lututnya tercerdera. Kesusahan apabila hendak menaiki tangga dan kesakitan yang teruk dilutut membawanya ke pusat rawatan kami. Selepas rawatan bersama kami, beliau tidak lagi mempunyai kesakitan ini. Terima kasih Madam Chong!\n#sakitlutut #rawatansakitlutut #kneepain #painwhenclimbingstairs #yapchankor",
    "outcome": "#sakitlutut #rawatansakitlutut #kneepain #painwhenclimbingstairs #yapchankor",
    "link": "https://yapchankor.com/testimonials/madam-chong-sakit-lutut/",
    "length": 394
  },
  {
    "id": "testimonial-97",
    "title": "Neck and Shoulder Pain Chow",
    "slug": "shoulder-pain",
    "content": "Madam Chow suffered from severe neck & shoulder pain and came to us after a friend recommended our treatment. She took 14 sessions, or approximately 2 weeks of treatment, which got rid of her 2 month old problem. Indeed, many pain sufferers continue suffering from various types of pain for months, trying less effective treatments or more invasive options like painkillers or injections or surgery, to no avail. Alternatively, our treatment for even the most chronic and longstanding neck & shoulder pain, as well as a whole host of other problems, is only between 1 week to 3 weeks. This is a huge difference in efficacy and speed of recovery that the medical community has not yet recognised. We hope that by publishing more stories like Madam Chow’s, eventually the right people or authorities will recognise that our form of non-invasive treatment can save people and health stakeholders a lot of time, money and pain.\nThank you for sharing your story Madam Chow!\n#neck&shoulderpain #yapchankor #treatmentforneckpain #treatmentforshoulderpain #shoulderstiffness",
    "outcome": "Madam Chow suffered from severe neck & shoulder pain and came to us after a friend recommended our treatment. She took 14 sessions, or approximately 2 weeks of treatment, which got rid of her 2 month ...",
    "link": "https://yapchankor.com/testimonials/chow-neck-and-shoulder-pain/",
    "length": 1066
  },
  {
    "id": "testimonial-98",
    "title": "Slip disc Norhayati",
    "slug": "back-pain",
    "content": "Puan Norhayati mengalami masalah slip disc sejak 5 tahun tetapi selama itu, tiada baik. Selepas mengalami kesakitan yang terlalu teruk, beliau membuat keputusan untuk mendapat rawatan daripada kami kerana kawannya pernah dirawat disini. Nasib baik Puan Norhayati memilih kami untuk rawatannya kerana selepas rawatan selama 2 minggu (14 sesi) sahaja, kesakitannya semakin berkurangan. Terima kasih kerana memberi peluang kepada kami!\n#sakitbelakang #slipdisctreatment #slippeddisctreatment #yapchankor #yck #rawatanslipdisc",
    "outcome": "#sakitbelakang #slipdisctreatment #slippeddisctreatment #yapchankor #yck #rawatanslipdisc",
    "link": "https://yapchankor.com/testimonials/norhayati-slip-disc/",
    "length": 522
  },
  {
    "id": "testimonial-99",
    "title": "Gout Pain Kharlil",
    "slug": "sprained-ankle",
    "content": "We have treated a few gout pain patients successfully. Kharlil is a recent case who had ankle pain from gout. Despite the painkillers he was taking, he still suffered from the pain so much that he was limping. We got rid of the pain and now he is able to run on treadmills. Thanks for sharing your case here Kharlil!\n#yapchankor #goutpain #anklepaingout #anklepaintreatment",
    "outcome": "We have treated a few gout pain patients successfully. Kharlil is a recent case who had ankle pain from gout. Despite the painkillers he was taking, he still suffered from the pain so much that he was...",
    "link": "https://yapchankor.com/testimonials/kharlil-gout-pain/",
    "length": 373
  },
  {
    "id": "testimonial-100",
    "title": "Lower back pain Jeffrey",
    "slug": "back-pain",
    "content": "To our readers: Don’t settle for short term relief only!\nJeffrey tried chiropractors and acupuncturists for years because of his lower back pain, but there was no long term relief. Our proprietary herbal medicine patches and physiotherapy methods, however, gave him his first feeling of normality after only 10 days of treatment. With the exercises taught, he should be on track to long term recovery – the goal we have for every patient. Thanks for sharing your story Jeffrey!\n#lowerbackpain #longtermrecovery #betterthanchiropractors #yapchankor #yck #backpaintreatment",
    "outcome": "Jeffrey tried chiropractors and acupuncturists for years because of his lower back pain, but there was no long term relief. Our proprietary herbal medicine patches and physiotherapy methods, however, ...",
    "link": "https://yapchankor.com/testimonials/jeffrey/",
    "length": 571
  },
  {
    "id": "testimonial-101",
    "title": "Wrist pain Janne",
    "slug": "wrist-pain",
    "content": "Janne suffered a common occupational hazard, wrist pain. She came to us after a colleague who was also undergoing treatment recommended us, and using our proprietary herbal medicine and physiotherapy modalities, she’s on her way to long-term recovery. Thank you for sharing your story Janne!\n#occupationalhazard #wristpain #herbalmedicine #yapchankor #yck",
    "outcome": "Janne suffered a common occupational hazard, wrist pain. She came to us after a colleague who was also undergoing treatment recommended us, and using our proprietary herbal medicine and physiotherapy ...",
    "link": "https://yapchankor.com/testimonials/janne-wrist-pain/",
    "length": 355
  },
  {
    "id": "testimonial-102",
    "title": "Carpal Tunnel Syndrome Ai Hoon",
    "slug": "wrist-pain",
    "content": "Carpal tunnel syndrome is a work-related condition that is becoming more prevalent today. Ms Ai Hoon is one of the sufferers who came to see us recently. We are glad we fixed her problem, and would like to let office workers everywhere know that we can offer a non-invasive and painless alternative treatment to surgery.\n#carpaltunnelsyndrometreatment #carpaltunneltreatment #yck #yapchankor #workrelatedinjury #occupationalhazard",
    "outcome": "#carpaltunnelsyndrometreatment #carpaltunneltreatment #yck #yapchankor #workrelatedinjury #occupationalhazard",
    "link": "https://yapchankor.com/testimonials/ai-hoon-carpal-tunnel-syndrome/",
    "length": 430
  },
  {
    "id": "testimonial-103",
    "title": "Back Pain Lim",
    "slug": "back-pain",
    "content": "Young Ms. Lim suffered from back pain due to a very common reason for back occurrence – undefined causes. Mostly this is due to our sedentary lifestyles causing our back muscles to weaken, and in her case, her back muscle soreness was on her right side. These cases are relatively simple to treat at our centres, and Ms Lim did the right thing by coming to us early, rather than trying to wait it out which risks it turning into a chronic issue. Thank you for your kind words!\n#backmusclesoreness #backmusclestrain #muscleimbalance #yapchankor",
    "outcome": "Young Ms. Lim suffered from back pain due to a very common reason for back occurrence – undefined causes. Mostly this is due to our sedentary lifestyles causing our back muscles to weaken, and in her ...",
    "link": "https://yapchankor.com/testimonials/lim-back-pain/",
    "length": 543
  },
  {
    "id": "testimonial-104",
    "title": "Ankle Sprain Chin MY",
    "slug": "sprained-ankle",
    "content": "Young Ms Chin twisted her ankle and came to us for treatment. After 1 week (7 sessions) of treatment, she is already on the path to full recovery. Her pain levels from the ankle sprain have fallen significantly. Thank you for sharing your story!\n#anklespraintreatment #ankleligamentstrain #yck #yapchankor #physiotherapy #chinesemedicine #alternativemedicine",
    "outcome": "Young Ms Chin twisted her ankle and came to us for treatment. After 1 week (7 sessions) of treatment, she is already on the path to full recovery. Her pain levels from the ankle sprain have fallen sig...",
    "link": "https://yapchankor.com/testimonials/chin-my-ankle-sprain/",
    "length": 358
  },
  {
    "id": "testimonial-105",
    "title": "Achilles Tendon Lim SK",
    "slug": "sprained-ankle",
    "content": "Lim hurt her achilles tendon after boot camp, but because it did not affect her day to day activities, she decided to let her body solve it. Sometimes that works, but in this case, after 3 weeks the pain didn’t go away. We helped resolve the pain in a short 2 weeks and to improve the strength around her achilles tendon region. Thanks for sharing your story here!\n#achillestendoninjury #anklepaintreatment #yck #yapchankor #chinesemedicine #alternativetreatment",
    "outcome": "Lim hurt her achilles tendon after boot camp, but because it did not affect her day to day activities, she decided to let her body solve it. Sometimes that works, but in this case, after 3 weeks the p...",
    "link": "https://yapchankor.com/testimonials/lim-sk-achilles-tendon/",
    "length": 462
  },
  {
    "id": "testimonial-106",
    "title": "Lumbar Spondylosis Madam Lim",
    "slug": "knee-pain",
    "content": "Madam Lim came to us from a doctor’s referral. She had suffered for many years from chronic lumbar spondylosis which affected her daily functions like going upstairs, squatting, walking and daily chores. Despite all the treatments she tried, there wasn’t any improvement till her treatment with us. After 21 sessions with us, the pain in her back and other areas like her legs disappeared, leaving only some muscle weakness in her right knee. With exercises that we taught her, she should be able to maintain strength and muscle tone in her legs to go about her daily activities without much problem. Thank you Madam Lim and Miss Tan for sharing your story here!\n#chroniclumbarspondylosis #alternativetreatment #backpain #yapchankor",
    "outcome": "Madam Lim came to us from a doctor’s referral. She had suffered for many years from chronic lumbar spondylosis which affected her daily functions like going upstairs, squatting, walking and daily chor...",
    "link": "https://yapchankor.com/testimonials/madam-lim-lumbar-spondylosis/",
    "length": 732
  },
  {
    "id": "testimonial-107",
    "title": "Wrist sprain Maria",
    "slug": "sprained-ankle",
    "content": "Wrist sprain patient Maria loved that our treatment was all natural, and even more importantly, that she could see improvement so quickly. We solved her problem in just a 1 week worth of treatment, and she’s already recommended a few people to visit. Read on for her story and thank you Maria for trying us out!\n#wristspraintreatment #allnatural #wristpainnaturaltreatment",
    "outcome": "Wrist sprain patient Maria loved that our treatment was all natural, and even more importantly, that she could see improvement so quickly. We solved her problem in just a 1 week worth of treatment, an...",
    "link": "https://yapchankor.com/testimonials/maria-wrist-sprain/",
    "length": 372
  },
  {
    "id": "testimonial-108",
    "title": "Neck Bone Spurs Loke PW",
    "slug": "neck-pain",
    "content": "Mr. Loke’s neck was feeling quite weak and tired, leading him to see a Western doctor. The doctor did an X-ray and diagnosed neck bone spurs as the problem. He recommended eating a vegetarian diet. After several weeks of the same weakness, Mr. Loke decided to visit us on his friend’s recommendation. He did 2 weeks worth of treatment and recovered about 80% of his previous function and strength. He has to continue with the home exercise program we taught him but is very satisfied with our treatment. Thank you Mr. Loke!\n#neckbonespurs #bonespurstreatment #neckpain #neckweakness #yapchankor",
    "outcome": "Mr. Loke’s neck was feeling quite weak and tired, leading him to see a Western doctor. The doctor did an X-ray and diagnosed neck bone spurs as the problem. He recommended eating a vegetarian diet. Af...",
    "link": "https://yapchankor.com/testimonials/loke-pw-neck-bone-spurs/",
    "length": 594
  },
  {
    "id": "testimonial-109",
    "title": "Wrist pain Matthew",
    "slug": "wrist-pain",
    "content": "SPM student Matthew needed to use his hand for his exam so we are really glad that our treatment has gotten rid of his wrist pain completely. He calls ours an “awesome” and “perfect” treatment, which is fantastic to hear since it’s always great to hear such affirmation from our patients! A bonus for Matthew was that he was able to get a Biology lesson too from our physiotherapists in preparation for his exam! Thank you Matthew for your enthusiastic story!\n#wristpaintreatment #writinghandproblem #chinesetreatmentforpain #awesometreatment #yapchankor",
    "outcome": "SPM student Matthew needed to use his hand for his exam so we are really glad that our treatment has gotten rid of his wrist pain completely. He calls ours an “awesome” and “perfect” treatment, which ...",
    "link": "https://yapchankor.com/testimonials/matthew-wrist-pain/",
    "length": 554
  },
  {
    "id": "testimonial-110",
    "title": "Sakit Otot Kronik Nurisah",
    "slug": "general",
    "content": "Pada mulanya, Hajah Nurisah tidak boleh berjalan tanpa bergantung kepada tongkat. Beliau juga mengalami sakit otot kronik di kakinya. Selama 16 tahun Puan Nurisah mengalami kesakitan in yang tidak berkurang, dan tiada apa yang beliau cuba berjaya untuk mengurangkan kesakitan ini untuk jangka masa panjang. Nasib baik beliau mencuba rawatan kami, kerana selepas rawatan selama 3 minggu sahaja, Hajah Nurisah tidak perlu mengguna tongkatnya kerana sakitnya telah berkurang dengan ketara. Terima kasih Hajah Nurisah!\n#sakitototkronik #rawatansakitotot #chronicmusclepain #yapchankor",
    "outcome": "#sakitototkronik #rawatansakitotot #chronicmusclepain #yapchankor",
    "link": "https://yapchankor.com/testimonials/nurisah-sakit-otot-kronik/",
    "length": 580
  },
  {
    "id": "testimonial-111",
    "title": "Back Pain Eddie",
    "slug": "back-pain",
    "content": "Eddie suffered from back pain for many years. His previous treatments didn’t work, including acupuncture. But after our comprehensive treatment plan for just 2 weeks, he has recovered from the back pain. Years of suffering resolved in just 2 weeks. This is typical of the results we achieve for our patients, so please check us out first if you have any muscle or joint pain, instead of suffering for years and wasting lots of money on less effective treatments. Thanks Eddie!\n#yapchankor #backpaintreatment #fastrecoverybackpain #yck #chinesemedicine #alternativemedicine",
    "outcome": "Eddie suffered from back pain for many years. His previous treatments didn’t work, including acupuncture. But after our comprehensive treatment plan for just 2 weeks, he has recovered from the back pa...",
    "link": "https://yapchankor.com/testimonials/eddie-back-pain/",
    "length": 572
  },
  {
    "id": "testimonial-112",
    "title": "Foot pain Lee Peter",
    "slug": "general",
    "content": "Mr. Lee suffered from foot pain due to arthritis. The foot pain was most intense in the morning, and his daily quality of life was affected badly. Walking was difficult, let alone running or doing any sort of prolonged activity on his feet. So we are so glad to read that he’s now feeling a whole lot better with a lot less pain. Thank you Mr. Lee for sharing your story….read on for his testimonial!\n#footpain #arthriticfoot #paintreatmentforarthritis #yapchankor",
    "outcome": "Mr. Lee suffered from foot pain due to arthritis. The foot pain was most intense in the morning, and his daily quality of life was affected badly. Walking was difficult, let alone running or doing any...",
    "link": "https://yapchankor.com/testimonials/lee-peter/",
    "length": 464
  },
  {
    "id": "testimonial-113",
    "title": "Rotator Cuff Tear Kamariah",
    "slug": "shoulder-pain",
    "content": "This is another case we saved from surgery! Puan Kamariah suffered shoulder pains on her left side due to a diagnosed rotator cuff tear and also neck pains from a cervical disc prolapse. She had to stay in a hospital for 10 days because of these severe pains. But when the doctors advised surgery, she decided to seek a second opinion and came to see us. Well, the rest is history as they say. We managed to get rid of all her shoulder pain in just 21 sessions of treatments. When she suffered an ankle sprain during the treatment, she immediately treated that too, and we cured that in 5 days. Please read her story here…thank you so much for sharing this Puan Kamariah!\n“About 6 months ago, I have encountered rotator cuff tear and cervical prolapsed on my left side shoulder. My movement of my shoulder and my neck is getting stiff especially at nite and during getting up from bed early morning. I was admitted in the hospital for 10 days and advised to go for surgery. A friend of mine recommended to get 2nd opinion from YAPCHANKOR i.e. traditional Chinese herbs and my case was attended by Miss Bella. Before proceed with my treatments, Miss Bella explained the process treatments and the symptoms which I have to bear during treatments. She advised that I have to take 21 days treatments due to my age factor and condition of my injury.\nFor the 1st day up to 3rd day, 4 patches containing herbs [were] attached onto my injury area and I feel the pain worsen. As this is the symptoms which will occur during the treatments and [I had] been informed earlier, therefore I continued the treatments. On the 5th day, I feel [a] miracle happen to me when my shoulder movement is improved and the stiffness is lesser. With the addition of exercises and massages, it really enhanced the curing to be speedy healing. The staffs are very committed during the services. Now I feel so much better and my shoulder movement [is] without pain anymore. I still have slight pain at my neck area [but] I knes this part will take time to heal and will continue the treatment until it’s fully recovered. During this treatment, I also injured my ankle which I hardly could walk and stand properly. With the same treatments in 5 days my ankle swelling was subsided and I can walk like usual.\nI surely recommend this centre to others and thumbs up to the dedication and the services of the staffs to me during my treatments.\nThank you.\nKamariah\n#rotatorcuffteartreatment #secondopinion #yapchankor #shoulderinjurytreatment",
    "outcome": "This is another case we saved from surgery! Puan Kamariah suffered shoulder pains on her left side due to a diagnosed rotator cuff tear and also neck pains from a cervical disc prolapse. She had to st...",
    "link": "https://yapchankor.com/testimonials/kamariah-rotator-cuff-tear/",
    "length": 2506
  },
  {
    "id": "testimonial-114",
    "title": "Cervical Spondylosis Azizah",
    "slug": "back-pain",
    "content": "Puan Azizah’s quality of life really suffered from her cervical spondylosis problem. She was feeling nauseous and suffered constant headaches. We are so glad she’s not almost back to normal after our treatment. Her daughter shares her recovery story from cervical spondylosis below. Terima kasih Puan Azizah dan Afiza!\n#cervicalspondylosis #sakitleher #yapchankor #neckpaintreatment #headaches",
    "outcome": "Puan Azizah’s quality of life really suffered from her cervical spondylosis problem. She was feeling nauseous and suffered constant headaches. We are so glad she’s not almost back to normal after our ...",
    "link": "https://yapchankor.com/testimonials/azizah-cervical-spondylosis/",
    "length": 393
  },
  {
    "id": "testimonial-115",
    "title": "Knee Ligament Sprain Chin",
    "slug": "knee-pain",
    "content": "This is a story we love sharing….it’s why we exist and want our treatment to be known by more people. 16 year old Chin loved sports, but her knee ligament sprain was causing her too much pain. She tried fixing it herself with exercises but it didn’t work, but having undergone our treatment for just 3 weeks, she has recovered so much that she’s now able to go back to her love of sports! Thank you for sharing and hope you have a long pain-free sporting career!\n#sportsinjury #kneeligamentsprain #yapchankor #alternativetreatmentforkneepain",
    "outcome": "This is a story we love sharing….it’s why we exist and want our treatment to be known by more people. 16 year old Chin loved sports, but her knee ligament sprain was causing her too much pain. She tri...",
    "link": "https://yapchankor.com/testimonials/chin-knee-ligament-sprain/",
    "length": 541
  },
  {
    "id": "testimonial-116",
    "title": "Twisted ankle Chin MY",
    "slug": "sprained-ankle",
    "content": "Young Ms Chin suffered an ankle sprain and came to us fairly quickly after the injury. Which was a good thing, because we dealt with her twisted ankle in only 1 week. It’s good for young people to seek early treatment because if there is improper healing, injuries can turn chronic as people age. Thanks for sharing your testimonial!\n#anklesprain #twistedankletreatment #sportsinjury #yapchankor",
    "outcome": "Young Ms Chin suffered an ankle sprain and came to us fairly quickly after the injury. Which was a good thing, because we dealt with her twisted ankle in only 1 week. It’s good for young people to see...",
    "link": "https://yapchankor.com/testimonials/chin-my/",
    "length": 395
  },
  {
    "id": "testimonial-117",
    "title": "Frozen shoulder Mike",
    "slug": "frozen-shoulder",
    "content": "“Thank you to YAPCHANKOR and its wonderful staff. I had frozen shoulder for two years and had tried many therapies, traditional, Western therapy and acupuncture. None of them seemed to work. I was referred by a friend to come here to YAPCHANKOR and Wow! What an amazing difference it made to my recovery. I am now enjoying golf and fishing where I could not do these things before. Feel certain if they say they can help you they will. Bella, you are very attentive and understanding and thank you.\nMy thanks also to Ganesh and Arwin for your help as well. You are all very good at what you do here.” – Mike M\n#frozenshouldertreatment #golfinjury #yapchankor",
    "outcome": "“Thank you to YAPCHANKOR and its wonderful staff. I had frozen shoulder for two years and had tried many therapies, traditional, Western therapy and acupuncture. None of them seemed to work. I was ref...",
    "link": "https://yapchankor.com/testimonials/mike-frozen-shoulder-1/",
    "length": 658
  },
  {
    "id": "testimonial-118",
    "title": "Sports injury Bernice",
    "slug": "knee-pain",
    "content": "Schoolgirl Bernice suffered a sports injury to her knee after running in school. Her father brought her to see us promptly and we were able to rid her of the problem within 1 week. Thanks for sharing the story Sam! Hopefully all parents will treat their kids’ sports injuries as quickly as you did.\n#sportsinjurytreatment #yapchankor #kneepaintreatment #schoolinjury",
    "outcome": "Schoolgirl Bernice suffered a sports injury to her knee after running in school. Her father brought her to see us promptly and we were able to rid her of the problem within 1 week. Thanks for sharing ...",
    "link": "https://yapchankor.com/testimonials/bernice/",
    "length": 366
  },
  {
    "id": "testimonial-119",
    "title": "Wrist pain Chin SK",
    "slug": "wrist-pain",
    "content": "Mr. Chin is quite the DIY guy, and likes to use power tools at home. Frequent use probably caused some repetitive strain on his wrist. We treated his wrist pain promptly, and within just a few days, his pain level dropped 70%. Thank you for sharing your story!\n#wristpaintreatment #diyinjury #powertoolinjury #yapchankor",
    "outcome": "Mr. Chin is quite the DIY guy, and likes to use power tools at home. Frequent use probably caused some repetitive strain on his wrist. We treated his wrist pain promptly, and within just a few days, h...",
    "link": "https://yapchankor.com/testimonials/chin-sk-wrist-pain/",
    "length": 320
  },
  {
    "id": "testimonial-120",
    "title": "Back muscle strain Lim MW",
    "slug": "back-pain",
    "content": "A speedy recovery indeed….only 1 week or 7 sessions for Lim MW who suffered a back muscle strain from carrying heavy loads of paper. Good thing Lim came early after the injury to see us, because it could have easily turned into a chronic problem, which happens to most people with back pain.\n#speedyrecovery #backpaintreatment #backmusclestrain #yapchankor",
    "outcome": "A speedy recovery indeed….only 1 week or 7 sessions for Lim MW who suffered a back muscle strain from carrying heavy loads of paper. Good thing Lim came early after the injury to see us, because it co...",
    "link": "https://yapchankor.com/testimonials/lim-mw-back-muscle-strain/",
    "length": 356
  },
  {
    "id": "testimonial-121",
    "title": "Acute back pain Alvin",
    "slug": "back-pain",
    "content": "Alvin suffered from acute back pain which we solved in just 1.5 weeks. Most treatments for back pain will take months, and will also require much more expense compared to ours.\n#lowerbackpaintreatment #yapchankor #fastrecoveryforbackpain #acutebackpain",
    "outcome": "#lowerbackpaintreatment #yapchankor #fastrecoveryforbackpain #acutebackpain",
    "link": "https://yapchankor.com/testimonials/alvin-acute-back-pain/",
    "length": 252
  },
  {
    "id": "testimonial-122",
    "title": "Slipped disc Vincent K",
    "slug": "back-pain",
    "content": "Vincent’s slipped disc back problem is a common injury we treat. While he did not recover after conventional treatments, after just 2 sessions with us, he felt incredible improvements. Thank you for your story!Vincent’s slipped disc back problem is a common injury we treat. While he did not recover after conventional treatments, after just 2 sessions with us, he felt incredible improvements. Thank you for your story!\n#slippeddisctreatment #backpaintreatment #yapchankor",
    "outcome": "Vincent’s slipped disc back problem is a common injury we treat. While he did not recover after conventional treatments, after just 2 sessions with us, he felt incredible improvements. Thank you for y...",
    "link": "https://yapchankor.com/testimonials/vincent-k-slipped-disc/",
    "length": 473
  },
  {
    "id": "testimonial-123",
    "title": "Meniscus Tear Arif",
    "slug": "knee-pain",
    "content": "A meniscus tear is a very serious problem in the knee, and generally surgery is recommended by conventional medicine. Mohammed Ariff, however, researched the surgery enough to know he wanted to try something different first, and it was a good thing too, since we managed to expedite his recovery without any surgical measures. At the end, Mohammed Ariff has great advice to people suffering from a similar meniscus tear injury or other chronic pain problems –\n“My advice to anyone who’s reading this and have similar but not limited to my condition, to give it a try. It worked wonders for me.” – Mohamed Ariff\nThank you for sharing your story and for recommending our centre!\n#meniscustearrecovery #meniscusinjury #meniscustreatment #kneepaintreatment #kneepainmeniscus #yapchankor #nonsurgical",
    "outcome": "A meniscus tear is a very serious problem in the knee, and generally surgery is recommended by conventional medicine. Mohammed Ariff, however, researched the surgery enough to know he wanted to try so...",
    "link": "https://yapchankor.com/testimonials/arif-meniscus-tear/",
    "length": 795
  },
  {
    "id": "testimonial-124",
    "title": "Back pain Go JY",
    "slug": "back-pain",
    "content": "Poor posture over the years affected Jun Yong’s back, resulting in a condition called lordosis, or the inward curving of the spine because of the imbalances in the surrounding muscles. By the time he came to us, it was a pretty serious and chronic back pain condition despite his young age, but we were able to rectify the problem in large part. His pain has come down significantly, while posture correction exercises have helped to strengthen the back. Thanks for sharing Jun Yong!\n#lordosistreatment #chronicbackpaintreatment #yapchankor",
    "outcome": "Poor posture over the years affected Jun Yong’s back, resulting in a condition called lordosis, or the inward curving of the spine because of the imbalances in the surrounding muscles. By the time he ...",
    "link": "https://yapchankor.com/testimonials/go-jy-back-pain/",
    "length": 540
  },
  {
    "id": "testimonial-125",
    "title": "Lower back pain Ooi KL",
    "slug": "back-pain",
    "content": "Mr. Ooi’s story is another common one that we treat. He suffered from lower back pain from lifting heavy objects with a weak back due to years of poor posture and lack of exercise. After the treatment, he’s recovered and needs to do the exercises taught to maintain a stronger back. Thank you for sharing your story!\n#lowerbackpain #backpaintreatment #yapchankor",
    "outcome": "Mr. Ooi’s story is another common one that we treat. He suffered from lower back pain from lifting heavy objects with a weak back due to years of poor posture and lack of exercise. After the treatment...",
    "link": "https://yapchankor.com/testimonials/ooi-kl-lower-back-pain/",
    "length": 362
  },
  {
    "id": "testimonial-126",
    "title": "Stiff Neck Fatin",
    "slug": "shoulder-pain",
    "content": "Fatin suffered from headaches due to her stiff neck and shoulder. We treated her neck and head pain by applying our proprietary medicine patches onto the neck and shoulder region, after the physiotherapy sessions. After 2 weeks only, her headaches disappeared and she has regained mobility. Thank you Fatin for sharing your story!\n#yapchankor #neckandheadpain #headaches #neckpaintreatment",
    "outcome": "Fatin suffered from headaches due to her stiff neck and shoulder. We treated her neck and head pain by applying our proprietary medicine patches onto the neck and shoulder region, after the physiother...",
    "link": "https://yapchankor.com/testimonials/fatin-stiff-neck/",
    "length": 389
  },
  {
    "id": "testimonial-127",
    "title": "Cervical spine surgery Madam Yoong",
    "slug": "back-pain",
    "content": "Madam Yoong, a cervical spine surgery patient, suffered a stiff neck shoulder with pain. She is a great example of how our treatmnet can help post-surgery patients recover faster. Her neck range of motion improved and she has made a lot of progress.\n#postsurgeryrecovery #neckshoulderstiffness #neckpain #shoulderpain #yapchankor #physiotherapy",
    "outcome": "Madam Yoong, a cervical spine surgery patient, suffered a stiff neck shoulder with pain. She is a great example of how our treatmnet can help post-surgery patients recover faster. Her neck range of mo...",
    "link": "https://yapchankor.com/testimonials/madam-yoong-cervical-spine-surgery/",
    "length": 344
  },
  {
    "id": "testimonial-128",
    "title": "Knee pain Rugmini",
    "slug": "knee-pain",
    "content": "Rugmini, who is in her 80s, suffered from knee pain due to osteoarthritis. When she came to see us, she had been suffering for 5 years and her knees were swollen because of the inflammation caused by the arthritis. After 21 sessions of our treatment, her pain reduced by 80%, which is a highly significant improvement, especially given the longer term nature of the recovery compared to conventional treatments that use painkillers or standard physical therapy methods. Thank you for sharing your story Madam Rugmini!\n#kneepaintreatment #kneeosteoarthritis #yapchankor #kneeoatreatment",
    "outcome": "Rugmini, who is in her 80s, suffered from knee pain due to osteoarthritis. When she came to see us, she had been suffering for 5 years and her knees were swollen because of the inflammation caused by ...",
    "link": "https://yapchankor.com/testimonials/rugmini-knee-pain/",
    "length": 585
  },
  {
    "id": "testimonial-129",
    "title": "Lower back pain Grace",
    "slug": "back-pain",
    "content": "Grace is a nurse who started to suffer from lower back pain 3 years ago, but the pain became a lot worse 2 years ago after she became a Good Samaritan to help a lady change her car tire. We feel great that we were able to help this wonderful human being who works hard to help others recover from her lower back pain, so that she can continue to do good with her own patients! Thank you for trusting us!\n#lowerbackpaintreatment #yapchankor #physiotherapy #alternativetreatmentforbackpain\n“Thank you for fixing me!”",
    "outcome": "Grace is a nurse who started to suffer from lower back pain 3 years ago, but the pain became a lot worse 2 years ago after she became a Good Samaritan to help a lady change her car tire. We feel great...",
    "link": "https://yapchankor.com/testimonials/grace-lower-back-pain/",
    "length": 514
  },
  {
    "id": "testimonial-130",
    "title": "Chronic Knee Pain Jasotha",
    "slug": "knee-pain",
    "content": "Wow! We are so happy to get such a detailed effusive testimonial from our recent patient with chronic knee pain. Jasotha’s recovery story from chronic knee pain is written eloquently below, and we will just give a brief summary here:\nBefore our treatment:\nHer knee pain was gradually getting worse, and her knees stiffer\nConstantly in pain\nLimping, and walking with a stick\nTrouble with basic actions like sitting in a chair, climbing stairs\nDoctor just advised to take glucosamine supplements without any further advice on proper exercise techniques\nAfter our treatment:\nNo more pain\nNo more limp, no more walking stick\n3 years of suffering knee pain solved in 3 months of treatment.\nThank you Jasotha for your kind words for us and Vicky! We hope that you’ll continue to improve and do let us know if we can help further!\n#kneepaintreatment #osteoarthritis #yapchankor #kneeoa #physiotherapy",
    "outcome": "Wow! We are so happy to get such a detailed effusive testimonial from our recent patient with chronic knee pain. Jasotha’s recovery story from chronic knee pain is written eloquently below, and we wil...",
    "link": "https://yapchankor.com/testimonials/jasotha-knee-pain/",
    "length": 893
  },
  {
    "id": "testimonial-131",
    "title": "Knee Osteoarthritis Lee M",
    "slug": "knee-pain",
    "content": "Lee M. came to us when the pain in her right knee became unbearable and there was significant swelling in the leg. We recommended a 21 session treatment plan, at the end of which, we managed to reduce her pain and the swelling, while allowing her to get on with her life with exercises to maintain the knee strength. Thank you for sharing your story and we hope that you’ll continue with the exercises after the treatment to manage the pain\n#kneepaintreatment #kneeoa #osteoarthritis #yapchankor #physiotherapy",
    "outcome": "Lee M. came to us when the pain in her right knee became unbearable and there was significant swelling in the leg. We recommended a 21 session treatment plan, at the end of which, we managed to reduce...",
    "link": "https://yapchankor.com/testimonials/lee-m-knee-osteoarthritis/",
    "length": 510
  },
  {
    "id": "testimonial-132",
    "title": "Wrist pain Lee HF",
    "slug": "wrist-pain",
    "content": "Mr. Lee suffered from wrist pain due to a squash injury, which in the past would recover relatively quickly. However, this time round, his wrist pain didn’t go away and even after consulting doctors, his pain persisted. So he came to us after a friend’s recommendation and within a couple of sessions, he saw great improvement. Today, after completion of his full treatment plan, his wrist is performing like when he was young again. Thanks Mr. Lee for sharing your story here.\n#wristpain #wristinjurytreatment #yapchankor #physiotherapy",
    "outcome": "Mr. Lee suffered from wrist pain due to a squash injury, which in the past would recover relatively quickly. However, this time round, his wrist pain didn’t go away and even after consulting doctors, ...",
    "link": "https://yapchankor.com/testimonials/lee-hf-wrist-pain/",
    "length": 537
  },
  {
    "id": "testimonial-133",
    "title": "Neck pain Lim PK",
    "slug": "neck-pain",
    "content": "Neck pain patient, Mr. Lim, found us online and decided to give us a try after consulting various other medical options, both conventional and alternative. We managed to control his neck pain and taught him some exercises to maintain its strength and flexibility. Thank you for sharing your story here!\n#neckpaintreatment #yapchankor #physiotherapy #alternativetreatmentforpain",
    "outcome": "Neck pain patient, Mr. Lim, found us online and decided to give us a try after consulting various other medical options, both conventional and alternative. We managed to control his neck pain and taug...",
    "link": "https://yapchankor.com/testimonials/lim-pk-neck-pain/",
    "length": 377
  },
  {
    "id": "testimonial-134",
    "title": "Herniated Disc Hana",
    "slug": "slipped-disc",
    "content": "Hana was a great success story for us recently. She suffered from herniated disc at her L5/S1 with mild scoliosis. She was suffering from really bad pain and the doctor advised surgery as her conservative treatments like physiotherapy and acupuncture weren’t working. It was a stroke of luck she came to us because of a scheduling delay for her MRI, because after our treatment, the MRI showed that her herniated disc condition was improving! Her doctor had the good sense and open mind to ask her to continue with our treatment and we hope that she’s now well on her way to a full recovery! Thanks for sharing your story Hana!!",
    "outcome": "Hana was a great success story for us recently. She suffered from herniated disc at her L5/S1 with mild scoliosis. She was suffering from really bad pain and the doctor advised surgery as her conserva...",
    "link": "https://yapchankor.com/testimonials/hana-herniated-disc/",
    "length": 628
  },
  {
    "id": "testimonial-135",
    "title": "Lower Back Pain Haniza",
    "slug": "back-pain",
    "content": "Haniza gave us a very short and sweet testimonial after her treatment for lower back pain due to a slipped disc. We like especially your quote, “Best treatment received! Almost 100% improvement” for your lower back pain condition. Thank you!\n#yapchankor #lowerbackpaintreatment #slippeddisctreatment #yck #ylab #physiotherapy",
    "outcome": "Haniza gave us a very short and sweet testimonial after her treatment for lower back pain due to a slipped disc. We like especially your quote, “Best treatment received! Almost 100% improvement” for y...",
    "link": "https://yapchankor.com/testimonials/haniza-lower-back-pain/",
    "length": 325
  },
  {
    "id": "testimonial-136",
    "title": "Tennis Elbow Thomas W.",
    "slug": "general",
    "content": "Thomas suffered from a tennis elbow in his left arm that medical specialists and other physiotherapists took almost a year to treat before he saw significant improvement. When he injured his right arm, he decided to try us instead, and we achieved major improvements in just 7 sessions. Over the course of the rest of his treatment, his improvement became more rapid. Thanks for sharing Thomas!\n#tenniselbowinjury #tenniselbowtreatment #yapchankor #elbowpain",
    "outcome": "Thomas suffered from a tennis elbow in his left arm that medical specialists and other physiotherapists took almost a year to treat before he saw significant improvement. When he injured his right arm...",
    "link": "https://yapchankor.com/testimonials/thomas-w-tennis-elbow/",
    "length": 458
  },
  {
    "id": "testimonial-137",
    "title": "Sakit Belakang Mahizan",
    "slug": "back-pain",
    "content": "Mahizan mengalami sakit belakang selama 8 bulan tetapi rawatan sebelum YAPCHANKOR, seperti akupuntur dan urut, tidak menolong mengurangkan sakitnya. Nasib baik beliau menjalani rawatan di pusat kami, kerana pada hari in, sakit belakangnya sudah berkurangan dengan ketara. Kami berharap dengan latihan dan exercise yang kami telah mengajar, Cik Mahizan akan mengekalkan belakang yang kuat. Terima kasih!\n“Rasa sakit di bahagian belakang hampir 8 bulan. Pernah menjalani akunpuntur dan urut. Masih tidak kurang sakit dan tidak selesa sepanjang hari. Sakit disebabkan jatuh dan postur badan yang tidak betul. Terasa sangat selesa setelah menjalani 4 sesi dan keadaan bertambah baik. Telah mendapati pelbagai tip dan senaman untuk mengelakkan perkara ini berlaku dan bagaimana untuk menghadapinya. Telah mendapat rawatan dan terapi yang sangat baik.” – Mahizan\n#yapchankor #sakitbelakang #rawatansakitbelakang",
    "outcome": "#yapchankor #sakitbelakang #rawatansakitbelakang",
    "link": "https://yapchankor.com/testimonials/mahizan-sakit-belakang/",
    "length": 905
  },
  {
    "id": "testimonial-138",
    "title": "Wrist pain Sek",
    "slug": "wrist-pain",
    "content": "Mr. Sek was another case we saved from unneeded surgery. He had gone to the doctors who gave him various painkillers and an injection for his wrist tendonitis but to no avail. But after just 10 sessions with us, his pain levels had reduced by 90%. And no more need for surgery! Thank you Mr. Sek for sharing your story and believing in us.\n“It is very hard for me to believe that it works. Before I decided to try out your treatment, I have paid several visits to [the] hospital and after 1 injection and some medication, I noticed my wrist still hurt. The doctor advised me to go for surgery. So luckily I came here and now I can say that my wrist is 90% cured.”\n#wristtendonitis #surgeryalternativeforpain #yapchankor #paintreatment #wristpain",
    "outcome": "Mr. Sek was another case we saved from unneeded surgery. He had gone to the doctors who gave him various painkillers and an injection for his wrist tendonitis but to no avail. But after just 10 sessio...",
    "link": "https://yapchankor.com/testimonials/sek-wrist-pain/",
    "length": 745
  },
  {
    "id": "testimonial-139",
    "title": "Wrist pain Mathivanan",
    "slug": "wrist-pain",
    "content": "Mathivanan came to us 2 years ago for wrist pain, caused by repetitive strain and also trauma from a fall. We are glad that his recovery is obvious and hope that he’s doing well now after the treatment. Our goal for all patients always is long term recovery, not just short term relief. Thank you for sharing your story!\n“I hurt my wrist maybe because of overtyping and a fall. I am impressed with the treatment I have received and I will highly recommend this place. Adibah has been fantastic. She knows her trade well. After the treatment, the improvement is obvious. Than\nk you.”\n#yapchankor #wristpaintreatment #physiotherapy #chinesemedicine #ylab",
    "outcome": "Mathivanan came to us 2 years ago for wrist pain, caused by repetitive strain and also trauma from a fall. We are glad that his recovery is obvious and hope that he’s doing well now after the treatmen...",
    "link": "https://yapchankor.com/testimonials/mathivanan/",
    "length": 652
  },
  {
    "id": "testimonial-140",
    "title": "Prolapsed disc Low SH",
    "slug": "knee-pain",
    "content": "Madam Low was suffering from multiple problems, primarily her prolapsed disc pain, but also knee pain from osteoarthritis and shoulder pain. We are really happy with the results achieved. Firstly she no longer needs to use her walking aid and wheelchair! And secondly, we have helped her cut down her daily painkiller dose by 75%! Thank you so much for sharing your story Madam Low!\n“\nI came to YAPCHANKOR with slipped disc, shoulder and knee pain, possibly caused by my aging process. I was attended by Joy who was very patient, meticulous, detailed and professional in her assessment and suggested treatment. Before I began my treatment I had to either use the three legged walking stick or the wheelchair. But after about 10 treatments,\nI no longer need the walking stick nor the wheelchair at all.\nJoy’s treatment has restored my ability to walk and stand back to normal.\nThe acute shoulder and knee pain was also totally cured after the treatment.\nI used to take painkillers 4 times a day to relieve my slipped disc pain but now, I only need to take it once a day.\nMy heartfelt and sincere thanks to Joy for her vast knowledge and invaluable techniques used to help me and restore me back to my normal self. Thank You! And God Bless!…”\n#yapchankor #slippeddisctreatment #nomorewalkingaids #kneeosteoarthritis #shoulderpain #ylab #physiotherapysuccessstory #testimonial",
    "outcome": "Madam Low was suffering from multiple problems, primarily her prolapsed disc pain, but also knee pain from osteoarthritis and shoulder pain. We are really happy with the results achieved. Firstly she ...",
    "link": "https://yapchankor.com/testimonials/low-sh-prolapsed-disc/",
    "length": 1373
  },
  {
    "id": "testimonial-141",
    "title": "Scoliosis Mehta",
    "slug": "back-pain",
    "content": "S Mehta suffered from scoliosis and had a major spine surgery a few years before seeking our treatment. She only tried 7 sessions with us, which was really enough to help relieve the pain, but still we are glad that she saw some improvements. Hope that she continues her exercises. Thank you for sharing your story!\n“I had a back problem, whereby my spine was curving 45 degrees. Did a major spine operation 4 years ago. Didn’t really try anything much, sometimes went for acupuncture. After my 7 treatments here, there are slight improvements. Those staff who treated me are very polite and lovely. Eventually, they did a good job and helped me to improve myself and ways to overcome my pain. Thank you for the wonderfful treatment. To Mr. Yap, thanks for the care shown to me. Do take care and God bless all”\n#scoliosistreatment #yapchankor #backpain",
    "outcome": "S Mehta suffered from scoliosis and had a major spine surgery a few years before seeking our treatment. She only tried 7 sessions with us, which was really enough to help relieve the pain, but still w...",
    "link": "https://yapchankor.com/testimonials/mehta-scoliosis/",
    "length": 852
  },
  {
    "id": "testimonial-142",
    "title": "Back pain Chong",
    "slug": "back-pain",
    "content": "Mr. Chong’s wife recommended that he come to see us for his back pain. She had recovered herself from her ankle sprain after our treatment. We love to get families like the Chongs who come to us for their pain management needs! Mr. Chong’s back pain is now almost gone, and we’ve also worked on strengthening his back with the right type of exercises. As he says at the end, it’s always better to get the treatment earlier than later. Thank you for sharing your story!\n“Firstly, I know YAPCHANKOR from my wife. She got a twisted leg at the ankle. After few treatments, [she] recovered quite well. When I injured [myself] on the back, my wife recommended me to come over here. After a few treatments, the pain [reduced] and got better. Now almost the end of the treatment. I recovered quite well. Thanks for Vicky. If no need to wait long [to] get the treatment [is] the best.” – Chong SC\n#chronicbackpain #yapchankor #ylab #backpain #chronicbackpaintreatmen",
    "outcome": "Mr. Chong’s wife recommended that he come to see us for his back pain. She had recovered herself from her ankle sprain after our treatment. We love to get families like the Chongs who come to us for t...",
    "link": "https://yapchankor.com/testimonials/chong-back-pain/",
    "length": 957
  },
  {
    "id": "testimonial-143",
    "title": "Back and Knee Pain Cindy",
    "slug": "knee-pain",
    "content": "Cindy’s left side was in pain and had numbness down the entire side. The pain had been with her for a few years but only in the last 6 months did it get worse, with the appearance of numbness. After just 1 week of treatment with our proprietary patches, the numbness reduced. Her back and knee pain was due to a combination of lumbar spondylosis and knee osteoarthritis. After her 21 session treatment, her knee pain is almost completely gone, and while her back pain is gone, she still needs to exercise her back to build strength. Overall, we have a happy patient who we helped deal with a very serious chronic problem. Thank you Cindy for sharing your story!\n“I have back and knee pain on the left of my body. I came to know about YAPCHANKOR through a FB posting advertisement. My therapist assessed me through a set of questions and came out with a treatment plan with utmost care and understanding of my problem. I like coming here for my treatment because of the harmonious environment that I received here. The bonding of patient and therapist is very important for my treatment especially the healing path of the treatment.\n#yapchankor #numbness #backandkneepaintreatment #numbnesstreatment #chronicpain #ylab #physiotherapy",
    "outcome": "Cindy’s left side was in pain and had numbness down the entire side. The pain had been with her for a few years but only in the last 6 months did it get worse, with the appearance of numbness. After j...",
    "link": "https://yapchankor.com/testimonials/cindy-back-and-knee-pain/",
    "length": 1232
  },
  {
    "id": "testimonial-144",
    "title": "Cervical Disc Prolapse Khairudin",
    "slug": "back-pain",
    "content": "Khairudin suffered from a cervical disc prolapse, which is basically a condition where the disc in his neck protrude and pinch a cervical nerve, causing pain and numbness. It’s amazing that he’s been suffering for 7 years, before we were able to relieve the condition for him. His progress was pretty rapid too under our treatment, reporting significant improvement in 5 sessions, and now 90% better after the treatment. Thank you for sharing your story!\n“Diagnosed with cervical disc prolapse 7 years ago resulting in severe pain and numbness in my right arm and shoulder. I have decided to try YAPCHANKOR treatment recently and experiencing very positive results. After 5 sessions, I felt a lot improvement and now, I can say 90% cured. I have regained back strength in my weak arm and so happy and highly recommend to all.  THANK YOU” – Khairudin\n#yapchankor #testimonial #neckpaintreatment #cervicaldiscprolapse #ylab",
    "outcome": "Khairudin suffered from a cervical disc prolapse, which is basically a condition where the disc in his neck protrude and pinch a cervical nerve, causing pain and numbness. It’s amazing that he’s been ...",
    "link": "https://yapchankor.com/testimonials/khairudin-cervical-disc-prolapse/",
    "length": 921
  },
  {
    "id": "testimonial-145",
    "title": "Wrist sprain Yvonne",
    "slug": "sprained-ankle",
    "content": "Yvonne sprained her wrist at the gym and had been suffering from pain for over 1 month. She visited an alternative treatment centre for her wrist sprain but it didn’t work for her. So it was a good thing that she discovered us, as we were able to get her wrist sprain fixed, and the pain down 90% and with the help of the exercises we taught her, she should be on her way to long term recovery. Thank you for sharing your story!\n“I sprained my wrist while doing workout at gym – I suffered from pain for one month. I tried other Osteocare but wasn’t [working]. My other colleague recommended me to visit YAPCHANKOR. I write in via email for my first appointment. Eventually I signed up for 14 treatments. After my 5th treatment, the pain on my wrist [had] gone down to 50%. Today is my last treatment, the pain has gone down to 10%. The herb patch is very effective, and the physiotherapy is equally important for strengthening of my muscle. I’m satisfied with my wrist improvement and a big “thank you” to YAPCHANKOR.” – Yvonne\n#yapchankor #wristspraintreatment #wristproblem #chronicpaintreatment #ylab #paintreatment #physiotherapy",
    "outcome": "Yvonne sprained her wrist at the gym and had been suffering from pain for over 1 month. She visited an alternative treatment centre for her wrist sprain but it didn’t work for her. So it was a good th...",
    "link": "https://yapchankor.com/testimonials/yvonne-wrist-sprain/",
    "length": 1134
  },
  {
    "id": "testimonial-146",
    "title": "Back pain Ahmad Hafiz",
    "slug": "back-pain",
    "content": "17-year old Ahmad suffered from back pain that was due to muscle spasms in his back. He recovered in less than 2 weeks after our treatment, despite having the problem for a long time. Thanks Ahmad for your story!\n“I faced bad pain at my back. In less than 2 weeks, I recovered. After coming here, the pain I suffered for a long time is gone thanks to Mr. Arwin and Ms. Bella. I received good and fast treatment and also good services.”\n#yapchankor #backpaintreatment #musclespasms #paintreatmentmalaysia #sportsinjury #ylab",
    "outcome": "17-year old Ahmad suffered from back pain that was due to muscle spasms in his back. He recovered in less than 2 weeks after our treatment, despite having the problem for a long time. Thanks Ahmad for...",
    "link": "https://yapchankor.com/testimonials/ahmad-hafiz-back-pain/",
    "length": 523
  },
  {
    "id": "testimonial-147",
    "title": "Chest injury Yip CL",
    "slug": "general",
    "content": "Mr. Yip, 72 years old, suffered from pain and tightness in his chest muscles because of a chest injury that he got from a car accident. He had suffered for several months, and had gone to see a Chinese doctor for treatment but to no avail. When he came to us, we could see that his chest muscles were already starting to waste away, and his ribs were all very obviously showing. We worked on improving the pain with our proprietary medicine, which helped our physiotherapist to strengthen the muscles around his chest too. Pretty soon he could see progress, even in just 10 sessions. As he puts it, his chest became more “fleshy”.\n“My name is Yip Chee Lok. I had a car accident. My chest got hurt. I went to see one Chinese doctor for treatment but no progress. Some recommended me to YAPCHANKOR.\nAfter a few treatments my chest pain reduced. The nurse attended me was very good in giving me massaging. Even my chest bone [flesh] becomes [more fleshy]. I highly recommend YAPCHANKOR for treatment.”\n#yapchankor #chestinjurytreatment #caraccidentvictim #wastedmuscles #chestmuscleswasting #chronicpaintreatment #ylab",
    "outcome": "#yapchankor #chestinjurytreatment #caraccidentvictim #wastedmuscles #chestmuscleswasting #chronicpaintreatment #ylab",
    "link": "https://yapchankor.com/testimonials/yip-cl-chest-injury/",
    "length": 1115
  },
  {
    "id": "testimonial-148",
    "title": "Finger sprain Thong KW",
    "slug": "sprained-ankle",
    "content": "Madam Thong injured her finger when her friend accidentally let go of a heavy bag that they were both carrying. Her finger sprain was dealt with in 7 sessions, which was completed in less than 2 weeks. Thank you Madam Thong for sharing your story!\n“After 7 treatments, better now.\nGot my injury while helping my pax with her heavy luggage. Asked me to help her carry to the check in counter but she let go.\nI feel better after 7 treatments compared to the 1st time when I’m in pain. TQ Brian!!!”\n#yapchankor #fingersprain #fingertreatment #ylab",
    "outcome": "Madam Thong injured her finger when her friend accidentally let go of a heavy bag that they were both carrying. Her finger sprain was dealt with in 7 sessions, which was completed in less than 2 weeks...",
    "link": "https://yapchankor.com/testimonials/thong-kw-finger-sprain/",
    "length": 544
  },
  {
    "id": "testimonial-149",
    "title": "Low Back Pain Sim YY",
    "slug": "back-pain",
    "content": "Ms. Sim, fell from a staircase and injured her lower back about 1 year ago. Then recently, while lifting heavy objects, the low back pain became a lot worse, around 7 – 8 over 10 on the Visual Analogue Scale. After our treatment, her pain reduced significantly. Thank you for your testimonial!\n“My sister [told] me about YAPCHANKOR, so that [I came] and let doctor Yap [do] some checking. I injured [myself] at [a] friend’s house, [where I fell] down a staircase about 3 times. After [I did] ultrasound, pain is not so seriously pain. Mytily is a nice person. She [helped] me do treatment very good, and she is friendly too. And Shamini also helped me do treatment a few times. She is professional, and very nice & friendly too.” – Sim\n#yapchankor #lowbackpain #lowbackpaintreatment #staircasefall #chronicpain #ylab",
    "outcome": "Ms. Sim, fell from a staircase and injured her lower back about 1 year ago. Then recently, while lifting heavy objects, the low back pain became a lot worse, around 7 – 8 over 10 on the Visual Analogu...",
    "link": "https://yapchankor.com/testimonials/sim-yy-low-back-pain/",
    "length": 816
  },
  {
    "id": "testimonial-150",
    "title": "Buku Lali Terseliuh Pn Kasmah",
    "slug": "sprained-ankle",
    "content": "Pn. Kasmah, 53, mengalami buku lali terseliuh. Dalam 1 minggu, apabila kesakitannya tidak berkurang, Pn Kasmah datang ke YAPCHANKOR untuk mendapatkan rawatan. Selepas beberapa hari sahaja, sakit dan bengkak pada buku lalinya juga telah dikurangkan. Sekarang dia mengesyorkan rawatan kami kepada kawan-kawannya. Terima kasih Pn Kasmah!\n“After one week [from when] I got injured, I came to YAPCHANKOR to get a treatment. A young lady came and explained about my injuries. After [a few] days, I feel more better, and today I have completed my 7 treatments. Now I feel even better. I started to recommend to some of my friends. Than you to young lady (our physiotherapist Susilawati) and YAPCHANKOR.” – Pn. Kasmah\n#yapchankor #bukulaliterseliuh #anklespraintreatment #acuteanklepain #paintreatment #ylab",
    "outcome": "“After one week [from when] I got injured, I came to YAPCHANKOR to get a treatment. A young lady came and explained about my injuries. After [a few] days, I feel more better, and today I have complete...",
    "link": "https://yapchankor.com/testimonials/pn-kasmah-buku-lali-terseliuh/",
    "length": 799
  },
  {
    "id": "testimonial-151",
    "title": "De Quervain Sim FW",
    "slug": "wrist-pain",
    "content": "De Quervain tenosynovitis is a painful condition affecting the tendons on the thumb side of your wrist. Recently, our patient Miss Sim, came to see us with this problem after 2 and a half months of physiotherapy that didn’t help. Her case is a great example of how our treatment works so much better, because of our proprietary medicine patches that help reduce the inflammation in the tendons and aid healing, thus making the physiotherapy we do work a whole lot better. After just 2-3 weeks, her pain reduced and she could work on exercises to improve her wrist muscles. Thanks Miss Sim for sharing your story!\n“I was suffering from De Quervain since November 2014 due to overuse of my right hand in work. I’m a designer. After 2.5 months of physiotherapy, the inflammation didn’t improve and the pain [was] still there. My colleague recommended YAPCHANKOR, so I came to see them. Within 14 treatments, with their special patches and some physiotherapy, the inflammation has gone down significantly and the pain reduced. With regular visits to do physiotherapy, the pain slowly subsides and I gradually regained muscle strength on my hand and wrist.” – Sim Fui Wah\n#yapchankor #dequervaintreatment #tenosynovitistreatment #wristpain #wristproblem #ylab #chronicpaintreatment #physiotherapyalternative",
    "outcome": "De Quervain tenosynovitis is a painful condition affecting the tendons on the thumb side of your wrist. Recently, our patient Miss Sim, came to see us with this problem after 2 and a half months of ph...",
    "link": "https://yapchankor.com/testimonials/sim-fw-de-quervain/",
    "length": 1302
  },
  {
    "id": "testimonial-152",
    "title": "Ankle injury Lim HC",
    "slug": "sprained-ankle",
    "content": "Mr. Lim, 46, injured his ankle while changing his car tyre and fortunately came to us early for treatment. Within 10 sessions, we were able to get the pain from his ankle injury under control in 2 weeks and he’s on his road to recovery. Thanks for sharing Mr. Lim!\n“Injury caused when changing tyres, suddenly I [slipped] from the tyre opener.\nI had no experience with others’ therapies before, this is the first time with this kind of injury.\nWith your treatment, I can see the improvement on my swelling, pain and etc. Have a good [confidence] with your treatment.\nThanks.” –  Lim HC\n#yapchankor #ankleinjurytreatment #paintreatment #acuteanklesprain #ylab",
    "outcome": "Mr. Lim, 46, injured his ankle while changing his car tyre and fortunately came to us early for treatment. Within 10 sessions, we were able to get the pain from his ankle injury under control in 2 wee...",
    "link": "https://yapchankor.com/testimonials/lim-hc-ankle-injury/",
    "length": 658
  },
  {
    "id": "testimonial-153",
    "title": "Cervical Spondylosis Kanatha",
    "slug": "back-pain",
    "content": "Kanatha, 67, suffered from chronic cervical spondylosis, and the pain and stiffness was causing her to bad headaches and dizziness. She could not sleep well, if at all, most nights before our treatment. So it was without a doubt a great result for us that she now reports her pain levels and headaches have significantly reduced, and she’s getting back her vital sleep. Thank you Kanatha for sharing your story here!\n“My name is Kanatha, I was introduced by my friend Elizabeth. I suffer from Cervical spondylosis. I used to have severe neck pain with headache and dizziness.\nI have so much relief from pain after coming for treatment here at YAPCHANKOR. I have proper sleep and feel more relaxed with less pain.\nThanks to my physiotherapist Vicky for all the patience to work on me.” –  Kanatha\n#YAPCHANKOR #cervicalspondylosistreatment #neckpaintreatment #cervicalspondylosisalternativetreatment #ylab #chronicpain",
    "outcome": "Kanatha, 67, suffered from chronic cervical spondylosis, and the pain and stiffness was causing her to bad headaches and dizziness. She could not sleep well, if at all, most nights before our treatmen...",
    "link": "https://yapchankor.com/testimonials/kanatha-cervical-spondylosis/",
    "length": 916
  },
  {
    "id": "testimonial-154",
    "title": "Shoulder Injury Lee Y.C.",
    "slug": "shoulder-pain",
    "content": "Mr. Lee, 54, suffered a shoulder injury from work. The pain and swelling kept increasing, which affected this daily work routine and quality of life adversely. After a 14 session treatment with us, he’s well on the path towards long term recovery and we wish him the best! Thank you Mr. Lee for sharing your story here!\n“I had injured my left shoulder during work while I was lifting up [an] object. I accidentally twisted my left shoulder muscle. Pain and swelling gradually increases after that incident. I took up a 14 days treatment at YAPCHANKOR for my shoulder and I feel much better after the treatment. My pain and swelling has subsided. Thanks to Brian who [has] done a wonderful job in treating my shoulder. He guided me well on the exercises and thanks to YAPCHANKOR for the good service.” – Lee Yan Chwan\n#yapchankor #shoulderinjury #workinjury #paintreatment #ylab #herbalmedicineforpain #alternativetreatmentforpain",
    "outcome": "Mr. Lee, 54, suffered a shoulder injury from work. The pain and swelling kept increasing, which affected this daily work routine and quality of life adversely. After a 14 session treatment with us, he...",
    "link": "https://yapchankor.com/testimonials/lee-y-c-shoulder-injury/",
    "length": 929
  },
  {
    "id": "testimonial-155",
    "title": "Ankle sprain Huan",
    "slug": "back-pain",
    "content": "Huan, 27, came to us for an ankle sprain treatment after his injury during a basketball game. He recovered in 2 weeks, compared to 3 months under a standard of care regimen that conventional medicine would have advised. Thank you Huan and we’re glad we could help you get back to your game!\n“I sprained my right ankle during a basketball game. The treatment was very effective and the physiotherapist is very experienced [in explaining] my conditions and what is the best treatment to heal my ankle. The treatment is effective [in] that I can play back [the] sport in two weeks.” – Huan\n#yapchankor #anklespraintreatment #basketballinjury #effectivetreatment #ankleinjury #acuteanklesprain #ylab",
    "outcome": "Huan, 27, came to us for an ankle sprain treatment after his injury during a basketball game. He recovered in 2 weeks, compared to 3 months under a standard of care regimen that conventional medicine ...",
    "link": "https://yapchankor.com/testimonials/huan-ankle-sprain/",
    "length": 695
  },
  {
    "id": "testimonial-156",
    "title": "Shoulder impingement Catherine",
    "slug": "frozen-shoulder",
    "content": "Catherine, 51, suffered from a shoulder impingement problem on her left side, which resulted in pain and problems raising her arm. She tried our treatment for 7 sessions, and even that short duration, completed in 1-2 weeks, was sufficient to lower her pain and improve her mobility. Her frozen shoulder problem would improve much more with continued treatment and exercises. Thank you Catherine for sharing your story\n“I was having [impingement] shoulder on my left hand, shoulder and I started to get medical consultation at YAPCHANKOR. Was [signed] up [to] a 7 days treatment. Before this, I could not lift my left hand up because of the pain. Now, after the 7 days treatment, I feel better now, as I am able to lift my left hand higher than before and feel lesser pain.” – Catherine\n#yapchankor #frozenshoulder #shoulderimpingement #ylab #treatmentforshoulderpain",
    "outcome": "Catherine, 51, suffered from a shoulder impingement problem on her left side, which resulted in pain and problems raising her arm. She tried our treatment for 7 sessions, and even that short duration,...",
    "link": "https://yapchankor.com/testimonials/catherine-shoulder-impingement/",
    "length": 867
  },
  {
    "id": "testimonial-157",
    "title": "Frozen shoulder Tamilsevi",
    "slug": "back-pain",
    "content": "Madam Tamilsevi, 54, suffered from a frozen shoulder, which came from her work as a dance instructor and volunteer at a social organisation. When she came, she had already visited an alternative Chinese centre in Puchong for 1 month, but the pain came back more severely 2 months after the treatment ended. Then a friend recommended us to her, and she signed up for a 14-session treatment plan. Initially, she had very limited range of motion as noted below. She could hardly get her work done, finding it very difficult to write and file documents because of the pain. However, after our treatment, her pain levels came down very significantly, and she regained full range of motion, and was able to get back to living her life free of pain.\nAt first, her range of motion was extremely limited:\n1) Abduction & adduction movement was limited to 0 to 60 degrees only;\n2) Flexion was 0-110 degrees;\n3) Internal & external Rotation 0-30 degrees only, i.e. she could hardly turn her arm;\n“I am a dance tutor (Indian classical dance). The pain came all of a sudden. After sometime it became bad and the pain was excruciating. A friend of mine introduced me to YAPCHANKOR. After coming for the treatment, I felt very much better. I really have to thank YAPCHANKOR and the physiotherapist Ms. Vegeneswary for her kind, gentle and patient treatment.” – P. Tamilsevi,\n#yapchankor #frozenshouldertreatment #limitedrangeofmotion #shoulderinjury #danceinjury #chronicpaintreatment #shoulderpain #ylab #effectivetreatmentforfrozenshoulder",
    "outcome": "“I am a dance tutor (Indian classical dance). The pain came all of a sudden. After sometime it became bad and the pain was excruciating. A friend of mine introduced me to YAPCHANKOR. After coming for ...",
    "link": "https://yapchankor.com/testimonials/tamilsevi-frozen-shoulder/",
    "length": 1525
  },
  {
    "id": "testimonial-158",
    "title": "Frozen shoulder Vasantha",
    "slug": "back-pain",
    "content": "“…I will be back to normal soon….am also very happy with the result.”\nVasantha, 51, suffered from a frozen shoulder which limited her range of movement and caused her a lot of pain. When she could not take it any longer, she visited us and signed up for our treatment plan. After 2-weeks of treatment, her pain levels dropped significantly and she regained functional range of movement in her left arm. All she needs now is some more exercise and she is well on the road to recovery. Thank you Vasantha for your story!\n“I was having shoulder pain (left) for sometime. I ignored it but the situation did not improve. Then a friend of mine suggested me to YCK. I explained my problem to Ms Vicky and she told me that I am having a frozen shoulder problem. I started my treatment in Jan 2015. After the medication patch and physio treatment, I am so much better. I could lift up my arm now. With regular exercise, I think I will be back to normal soon. I am also very happy with the result. My sincere thanks to Vicky and YCK for helping me.” – Vasantha Krishnan\n#yapchankor #frozenshouldertreatment #chronicshoulderpain #frozenshoulder #ylab #physiotherapy #alternativetreatment",
    "outcome": "Vasantha, 51, suffered from a frozen shoulder which limited her range of movement and caused her a lot of pain. When she could not take it any longer, she visited us and signed up for our treatment pl...",
    "link": "https://yapchankor.com/testimonials/vasantha-frozen-shoulder/",
    "length": 1176
  },
  {
    "id": "testimonial-159",
    "title": "Thigh pain Ahmad",
    "slug": "knee-pain",
    "content": "Ahmad, 58, suffered from knee & thigh pain, due to muscle strains in the thigh, and some osteoarthritis in the knee. After our 21-session treatment plan, his pain levels have reduced significantly, allowing him to regain function and strength in his daily life. Thank you Ahmad for your story!\n“I have [a] knee & thigh problem. I came here and your therapist Miss Joy has done a good job. At first it was very [painful] and since she [did] massage, I feel a bit better and need further treatment. Also big thank you to my physiotherapist Miss Joy for her best excellent service.” – Ahmad\n#yapchankor #knee&thighpain #chronicpaintreatment #ylab #sakitlutut #sakitpinggul",
    "outcome": "Ahmad, 58, suffered from knee & thigh pain, due to muscle strains in the thigh, and some osteoarthritis in the knee. After our 21-session treatment plan, his pain levels have reduced significantly, al...",
    "link": "https://yapchankor.com/testimonials/ahmad-thigh-pain/",
    "length": 669
  },
  {
    "id": "testimonial-160",
    "title": "Shoulder lump Madam Lim",
    "slug": "shoulder-pain",
    "content": "Madam Lim, 74, had a lump in her right shoulder. She tried acupuncture but it did not reduce the swelling. On the other hand, our treatment managed to reduce the swelling and the shoulder lump is now diminishing. Thank you Madam Lim for sharing your story.\n“I had a swollen lump for 2 years on my right shoulder. Acupuncture did not help. After 14 sessions of YCK treatment, the swelling has subsided. Mytily knows her job and I am satisfied with her.” – Madam Lim\n#yapchankor #shoulderlump #shoulderswelling #shouldertreatment #ylab #chronicpain #acupuncturealternative",
    "outcome": "Madam Lim, 74, had a lump in her right shoulder. She tried acupuncture but it did not reduce the swelling. On the other hand, our treatment managed to reduce the swelling and the shoulder lump is now ...",
    "link": "https://yapchankor.com/testimonials/madam-lim-shoulder-lump/",
    "length": 570
  },
  {
    "id": "testimonial-161",
    "title": "Knee pain Ohn Myint",
    "slug": "knee-pain",
    "content": "“…I recommended that this YAPCHANKOR treatment is the best.”\n20 years ago, Mr. Ohn Myint came to YAPCHANKOR for a knee problem. That was resolved in 1 week. This year, Mr. Ohn came back to us for a different knee problem, and after just 1 week again, his knee pain subsided, along with the swelling. Pretty soon he was walking more again. Thank you Mr. Ohn for being such a loyal patient!\n“I feel better within one week. Before my knee is swelling and when bent [was] very painful. After a few sessions my knee swelling finished and I can walk more and more.\nTwenty years before my knee [was] broken and took YAPCHANKOR treatment and got better within one week.\nAfter all, I recommended that this YAPCHANKOR treatment is the best.” – Mr. Ohn Myint,\n#yapchankor #kneepaintreatment #kneeswelling #paintreatment #ylab #chronicpain #effectivetreatmentforpain\n“…I recommended that this YAPCHANKOR treatment is the best.”\r\n\r\n20 years ago, Mr. Ohn Myint came to YAPCHANKOR for a knee problem. That was resolved in 1 week. This year, Mr. Ohn came back to us for a different knee problem, and after just 1 week again, his knee pain subsided, along with the swelling. Pretty soon he was walking more again. Thank you Mr. Ohn for being such a loyal patient!",
    "outcome": "20 years ago, Mr. Ohn Myint came to YAPCHANKOR for a knee problem. That was resolved in 1 week. This year, Mr. Ohn came back to us for a different knee problem, and after just 1 week again, his knee p...",
    "link": "https://yapchankor.com/testimonials/ohn-myint-knee-pain/",
    "length": 1246
  },
  {
    "id": "testimonial-162",
    "title": "Lower back pain Victor",
    "slug": "back-pain",
    "content": "Our treatment goal for all our patients is to help them regain long term function in as short a time period as possible. With Victor, who suffered from lower back pain due to muscle strains and old injuries from his sports, we are grateful that we could help him with his pain, but also to help him understand how to prevent future injuries. Thank you for sharing your story and good luck with your sports!\n“My experience at YAPCHANKOR was great as I was able to understand my body better. I understood what causes the soreness, pain and tense feeling in my muscles. Joy has been amazing in her attention to detail, explaining the various causes of my pain. Although the massages have been a bit torturous at times, it has truly helped me improve my situation. Being an active person since my schooling days meant that I had to endure multiple injuries. I feel grateful to Joy and YAPCHANKOR for having a better understanding of my body. I may not have completely healed my pain, but I know what to do now to improve my situation. Thank you!” – Victor Lee\n#yapchankor #lowerbackpain #backpaintreatment #sportsinjurytreatment #ylab #athleticpaintreatment",
    "outcome": "Our treatment goal for all our patients is to help them regain long term function in as short a time period as possible. With Victor, who suffered from lower back pain due to muscle strains and old in...",
    "link": "https://yapchankor.com/testimonials/victor-lower-back-pain/",
    "length": 1153
  },
  {
    "id": "testimonial-163",
    "title": "Knee Ligament Strain Michelle",
    "slug": "knee-pain",
    "content": "Michelle couldn’t go to the gym because of the knee pain she had. The problem was caused by a knee ligament strain and we were able to help get rid of the pain for her, which eventually led her to go back to the gym. Thanks Michelle for your story!\n“I have knee pain for almost 1 year plus and ever since I started my treatment with YAPCHANKOR, my pain has subsided after 7 sessions. I am very grateful that it really helped me to regain my activities back at the gym. This is one pain relieve centre that I will highly recommend to friends. And also a big thank you to my physiotherapist Ms Sangitha for her excellent service.” – Michelle Kong",
    "outcome": "Michelle couldn’t go to the gym because of the knee pain she had. The problem was caused by a knee ligament strain and we were able to help get rid of the pain for her, which eventually led her to go ...",
    "link": "https://yapchankor.com/testimonials/michelle-knee-ligament-strain/",
    "length": 644
  },
  {
    "id": "testimonial-164",
    "title": "Leg muscle pain Tenh CT",
    "slug": "back-pain",
    "content": "“One day I woke up and found that my legs were stiff and sore. As days passed, it got worse and I struggled to walk, bend or lift up my legs. By chance I stumbled upon ‘muscles therapy’ signboard and upon assessment, I knew that this is the right centre for me. Physio Joy treated me with utmost care and sound good advice on how to build up my muscles again. After 21 sessions, I am now about 70% normal and getting better each day. With further exercises, I am optimistic that I will be 100% back to normal. Praise God for this treatment and Oh yes, the patches work too.” – Tenh Cheng Tiap\n#YAPCHANKOR #chronicpaintreatment #legmusclestrain #legmusclepain #calfpaintreatment #ylab #alternativetreatment\nMr. Tenh, 58, came all the way from Ipoh for our treatment. He signed up for our 21-session treatment plan for his lower leg muscle pain, which was getting worse, and preventing him from even walking or bending over. Both his legs were gradually stiffening, but after our treatment, he has regained around 70% of his normal function, and is on his way to full long term recovery. Thank you Mr. Tenh for believing in us….your story is the reason we wake up each day to continue helping our patients recover!",
    "outcome": "“One day I woke up and found that my legs were stiff and sore. As days passed, it got worse and I struggled to walk, bend or lift up my legs. By chance I stumbled upon ‘muscles therapy’ signboard and ...",
    "link": "https://yapchankor.com/testimonials/tenh-ct-leg-muscle-pain/",
    "length": 1212
  },
  {
    "id": "testimonial-165",
    "title": "Ankle sprain Edmund",
    "slug": "sprained-ankle",
    "content": "9-year old Edmund sprained his ankle playing at school. A good thing his mom brought him to see us, as early treatment is the best way to prevent future injury recurrence. Thanks Edmund for sharing your story! Hope you continue to have fun at school!\n“One day I have sprain my ankle at school while playing with friend. And the ankle become swollen and painful. Therefore my mother brought me to YAPCHANKOR to seek therapist’s treatment.\nAfter few days of treatment, my ankle recover fully. Many thanks to Encik Arif for his help on the therapies.” – Edmund\n#yapchankor #anklespraintreatment #paintreatment #ylab #physiotherapy #schoolinjury\n9-year old Edmund sprained his ankle playing at school. A good thing his mom brought him to see us, as early treatment is the best way to prevent future injury recurrence. Thanks Edmund for sharing your story! Hope you continue to have fun at school",
    "outcome": "9-year old Edmund sprained his ankle playing at school. A good thing his mom brought him to see us, as early treatment is the best way to prevent future injury recurrence. Thanks Edmund for sharing yo...",
    "link": "https://yapchankor.com/testimonials/edmund-ankle-sprain/",
    "length": 891
  },
  {
    "id": "testimonial-166",
    "title": "Bone spur Philip",
    "slug": "plantar-fasciitis",
    "content": "Philip suffered from a heel bone spur which was causing him pain when he walked and whenever he rose from bed. He did some research before coming to see us, and we’re glad that we have helped him walk without as much pain as before. Thank you for sharing your story!\n“For almost a year, I had experienced heel pain during initial few steps of walking whenever rising from bed or after prolonged period of sitting. An X-ray confirmed it is a calcaneal spur and I was referred for physiotherapy. Through online research, I came across YAPCHANKOR and having read the testimonials, decided to sign up for 14-days treatment plan. Treatment has reduced inflammation of my heel tendon notably after the 7th session. It has improved my ability to walk with ease. Thank you to YAPCHANKOR and special thanks to Mr. Ganesh for his effort and services.” – Philip Liew\n#heelbonespur #yapchankor #paintreatment #heelpain #ylab #chronicpaintreatment #physiotherapy\nPhilip suffered from a heel bone spur which was causing him pain when he walked and whenever he rose from bed. He did some research before coming to see us, and we’re glad that we have helped him walk without as much pain as before. Thank you for sharing your story!",
    "outcome": "Philip suffered from a heel bone spur which was causing him pain when he walked and whenever he rose from bed. He did some research before coming to see us, and we’re glad that we have helped him walk...",
    "link": "https://yapchankor.com/testimonials/philip-bone-spur/",
    "length": 1216
  },
  {
    "id": "testimonial-167",
    "title": "Shoulder pain Elena",
    "slug": "shoulder-pain",
    "content": "A short and sweet testimonial from Elena who suffered from wrist & shoulder pain\n“My wrist & shoulders are feeling better. 80% improvement after the whole sessions.” – Elena\nA short and sweet testimonial from Elena who suffered from wrist & shoulder pain",
    "outcome": "“My wrist & shoulders are feeling better. 80% improvement after the whole sessions.” – Elena",
    "link": "https://yapchankor.com/testimonials/elena-shoulder-pain/",
    "length": 254
  },
  {
    "id": "testimonial-168",
    "title": "Calf pain Irene",
    "slug": "back-pain",
    "content": "Irene, 56, from Ipoh, came all the way down to our Subang Jaya branch every Monday and Friday for her treatment with our physiotherapist Joy. She suffered from pain in both her calves, due to muscle strains. Despite all the physiotherapy she did in Ipoh, her pain did not go away, but after our treatment, we were able to reduce her calf pain levels and improve her function by 90%. This included her taking back our medicinal patches to apply at home in Ipoh. Thank you Irene, for allowing us to help you and for sharing your story here!\n“I twisted my calf muscles (left leg) while bringing dog(sp?) out for morning walk. The left leg was injured and swollen. My right leg also felt painful but not as serious as the left leg. I bypassed this clinic one day while sending my daughter to work. So went in to ask and then signed up for the 21 sessions treatment. Every Friday and Monday we will be here for treatment (all the way from Ipoh) and bringing back patches back to Ipoh to apply every Wednesday. After completing the 21 sessions, both my legs are 90% cured. Thanks to physiotherapist Joy Ang for her care and love over both my husband and me. She is very knowledgeable and caring and her physio treatment is the best of all the other physio treatment I have done before in Ipoh. Really grateful to God to make way for us to know about this clinic and get the best treatment from Joy. Thanks Joy for everything.” – Chong Loong Fang\n#yapchankor #calfpain #calfmusclestrain #physiotherapy #chinesemedicine #chronicpaintreatment\nIrene, 56, from Ipoh, came all the way down to our Subang Jaya branch every Monday and Friday for her treatment with our physiotherapist Joy. She suffered from pain in both her calves, due to muscle strains. Despite all the physiotherapy she did in Ipoh, her pain did not go away, but after our treatment, we were able to reduce her calf pain levels and improve her function by 90%. This included her taking back our medicinal patches to apply at home in Ipoh. Thank you Irene, for allowing us to help you and for sharing your story here!",
    "outcome": "Irene, 56, from Ipoh, came all the way down to our Subang Jaya branch every Monday and Friday for her treatment with our physiotherapist Joy. She suffered from pain in both her calves, due to muscle s...",
    "link": "https://yapchankor.com/testimonials/irene-calf-pain/",
    "length": 2072
  },
  {
    "id": "testimonial-169",
    "title": "Ankle sprain Jill C.",
    "slug": "sprained-ankle",
    "content": "Jill C. Suffered an ankle sprain carrying her son out of a car. When the pain didn’t go away but became worse instead, she came to YAPCHANKOR on a friend’s recommendation. Today her pain is gone and her ankle has recovered only after 7 sessions of treatment. Thank you for sharing your story Jill!\n“I got injured during Chinese New Year while carrying my son down from a car. Initially, I thought it was just a normal injury but the pain got worse as the days [went] by. I was introduced to YAPCHANKOR by a friend and I’m glad that my therapist is Joy. She is really good and friendly. I am very happy, satisfied with the service given by Joy. My foot is recovered and I would definitely recommend YAPCHANKOR to friends who need it.” – Jill\nJill C. sprained her ankle carrying her son out of a car. When the pain didn’t go away but became worse instead, she came to YAPCHANKOR on a friend’s recommendation. Today her pain is gone and her ankle has recovered only after 7 sessions of treatment. Thank you for sharing your story Jill!",
    "outcome": "Jill C. Suffered an ankle sprain carrying her son out of a car. When the pain didn’t go away but became worse instead, she came to YAPCHANKOR on a friend’s recommendation. Today her pain is gone and h...",
    "link": "https://yapchankor.com/testimonials/jill-c-ankle-sprain/",
    "length": 1032
  },
  {
    "id": "testimonial-170",
    "title": "Ankle sprain Tiruchelvam",
    "slug": "sprained-ankle",
    "content": "A recent ankle sprain was quickly treated by us for Mr. Tiruchelvam, 61 years old. A good thing too, as the problem could have turned into a chronic one if left untreated. Thank you for your testimonial and we wish you the best!\n“I recently hurt my foot when I missed a step coming down the stairs of my house. I saw a GP and I took painkillers and muscle relaxants. After about a week, my friend introduced me to YAPCHANKOR. Immediately (after one day) there was an improvement. Now I am able to walk without pain. The treatment was quite good with physiotherapy and herbal medicine. Physio Arif is very pleasant and dedicated. Thank you.” – Tiruchelvam\nA recent ankle sprain was quickly treated by us for Mr. Tiruchelvam, 61 years old. A good thing too, as the problem could have turned into a chronic one if left untreated. Thank you for your testimonial and we wish you the best!",
    "outcome": "A recent ankle sprain was quickly treated by us for Mr. Tiruchelvam, 61 years old. A good thing too, as the problem could have turned into a chronic one if left untreated. Thank you for your testimoni...",
    "link": "https://yapchankor.com/testimonials/tiruchelvam-ankle-sprain/",
    "length": 883
  },
  {
    "id": "testimonial-171",
    "title": "Knee osteoarthritis Madam Foo",
    "slug": "knee-pain",
    "content": "Madam Foo, 76, came to us for pain in her knees due to osteoarthritis. Usually knee OA cases take a few weeks to treat, but in Madam Foo’s case, she chose to do 7 sessions with us for pain relief. In her words, she is “fully satisfied”. Thank you Madam Foo and we wish you the best!\n“Thanks to Ms. Sangitha at YAPCHANKOR.\nExcellent treatments.\nI am fully satisfied.” – Foo Fong Thol\nMadam Foo, 76, came to us for pain in her knees due to osteoarthritis. Usually knee OA cases take a few weeks to treat, but in Madam Foo’s case, she chose to do 7 sessions with us for pain relief. In her words, she is “fully satisfied”. Thank you Madam Foo and we wish you the best!",
    "outcome": "Madam Foo, 76, came to us for pain in her knees due to osteoarthritis. Usually knee OA cases take a few weeks to treat, but in Madam Foo’s case, she chose to do 7 sessions with us for pain relief. In ...",
    "link": "https://yapchankor.com/testimonials/madam-foo-osteoarthritis/",
    "length": 665
  },
  {
    "id": "testimonial-172",
    "title": "Neck and Shoulder pain Amanda",
    "slug": "back-pain",
    "content": "Go Amanda! We love hearing stories like Amanda’s! Amanda, a very youthful 20 year old, is an ardent cheerleader, but her neck and shoulder pain and stiffness, coupled with lumbar scoliosis, was causing her terrible pain, and preventing her from expressing herself fully in her cheerleading. She tried physiotherapy before coming to see us, and after just 10 sessions, she is able to go back cheering without pain! Thanks for sharing and we wish you all the best!\n“I am a cheerleader and I constantly practice and train for upcoming competitions. I am studying as well for my diploma currently and often face the laptop. I’ve been suffering with this terrible stiffness on my neck and shoulders for quite some time due to [strenuous] exercises as well as lifting my flyers who are about my weight in cheer. I was also diagnosed with mild lumbar scoliosis a few months back and went for physiotherapy before going to YAPCHANKOR. As of today, I’ve felt so much better. I can continue on my daily routine as well as cheering with no pain bothering me. I just really want to say thank you very much to Ganesh for the treatment in helping me to reduce the pain as well as helping me gain back full mobility of my shoulders.” – Amanda\n#yapchankor #neckstiffness #shoulderstiffness #paintreatment #ylab #cheerleadingpain #necktreatment #neckpaintreatment #shoulderpaintreatment\nGo Amanda! We love hearing stories like Amanda’s! Amanda, a very youthful 20 year old, is an ardent cheerleader, but her neck & shoulder stiffness, coupled with lumbar scoliosis, was causing her terrible pain, and preventing her from expressing herself fully in her cheerleading. She tried physiotherapy before coming to see us, and after just 10 sessions, she is able to go back cheering without pain! Thanks for sharing and we wish you all the best!",
    "outcome": "Go Amanda! We love hearing stories like Amanda’s! Amanda, a very youthful 20 year old, is an ardent cheerleader, but her neck and shoulder pain and stiffness, coupled with lumbar scoliosis, was causin...",
    "link": "https://yapchankor.com/testimonials/amanda-neck-and-shoulder-pain/",
    "length": 1821
  },
  {
    "id": "testimonial-173",
    "title": "Frozen shoulder treatment Benjamin",
    "slug": "back-pain",
    "content": "Benjamin, 56 years old, chose us for his frozen shoulder treatment on his left side. The pain became progressively worse and the movement progressively more restricted before he came to see us, which is typical of a frozen shoulder case. We are glad that he is back to normal, and happy that he will be continuing his exercises at home! Thanks Benjamin for sharing your story!\n“I had been having pain for a few weeks on my left shoulder which had restrictred my movement progressively. After about 14 treatments, the pain was reduced significantly and my movement was almost as good as before.\nOne of the benefits I take with me was the different exercises that helped me to stretch and strengthen my muscles in the different parts, and to be more conscious of my movements.” – Benjamin Skadiang\n#yapchankor #paintreatment #frozenshoulder #chronicpain #nonsurgicalalternative #testimonial #physiotherapy #ylab #shoulderpain #shouldersurgeryalternative",
    "outcome": "Benjamin, 56 years old, chose us for his frozen shoulder treatment on his left side. The pain became progressively worse and the movement progressively more restricted before he came to see us, which ...",
    "link": "https://yapchankor.com/testimonials/benjamin-frozen-shoulder-treatment/",
    "length": 951
  },
  {
    "id": "testimonial-174",
    "title": "Shoulder pain Rubiah",
    "slug": "shoulder-pain",
    "content": "Puan Rubiah was a long time sufferer of shoulder pain and stiffness (2 years in fact). The physiotherapy that she did could only provide short term relief. Thank you for trying our treatment and for sharing your shoulder pain recovery story here!\n“I had stiffness and pain in my right shoulder for about 2 years. I’ve had physiotherapy on and off. But treatment at YAPCHANKOR has helped to relieve the pain and stiffness. Thank you.” – Rubiah",
    "outcome": "Puan Rubiah was a long time sufferer of shoulder pain and stiffness (2 years in fact). The physiotherapy that she did could only provide short term relief. Thank you for trying our treatment and for s...",
    "link": "https://yapchankor.com/testimonials/rubiah-shoulder-pain/",
    "length": 442
  },
  {
    "id": "testimonial-175",
    "title": "Knee Osteoarthritis Puan Latifah",
    "slug": "knee-pain",
    "content": "80-year old Puan Latifah suffered for 10 years from back and knee pain (due to knee OA or osteoarthritis). Despite the many orthopedic doctors, pain killers and other treatments, she did not feel any improvement. After the treatment with us, her pain and functional abilities have improved by 60% and we hope that it will continue to improve further! Thank you for sharing your story Puan Latifah….if only you had come to us earlier!\n“I am 80 years old and had experienced lower back and knee pain for quite some time, almost 10 years. Having treated by a few orthopedic doctors and had to depend on and off with medications, pain killers etc, the pain had not improved much. I was recommended to YAPCHANKOR for a comprehensive pain treatment and was advised to undergo a package treatment of 21 sessions with herbal patches and physiotherapy exercises.\nI was attended by En. Arif Afandi Rosli who was very helpful, kind, dedicated and patient enough and had taught me several therapy exercises. On completion of the pain treatment sessions, I must say the pain has reduced to almost 60% and I could move about today with more comfort.\nThank you.\nBest regards,\nPuan Latifah Ashari”",
    "outcome": "80-year old Puan Latifah suffered for 10 years from back and knee pain (due to knee OA or osteoarthritis). Despite the many orthopedic doctors, pain killers and other treatments, she did not feel any ...",
    "link": "https://yapchankor.com/testimonials/puan-latifah-knee-osteoarthritis/",
    "length": 1181
  },
  {
    "id": "testimonial-176",
    "title": "Sciatic nerve impingement Peter",
    "slug": "sprained-ankle",
    "content": "“Treatment cost is value for money” – Peter, 57, suffered from sciatica or sciatic nerve impingement, which is a condition where pressure on the sciatic nerve causes radiating pain down the leg. We were able to get rid of the inflammation and relieve the swelling, and get rid of his persistent pain. Thank you Peter for sharing your story and we hope that you will continue your exercises!\n“My injury recurred on 23/2/15 @ about 7.00 am when I woke up. I felt a “twitch” on my left leg. The pain was persistent for a week, radiating down from the buttocks area to the calf and ankle. I believe my injury was due to stretching (splits) over the years which I regularly do when I exercised. Another factor may be the squats –  causing my muscles gluteals to be hardened. After a week of experiencing persistent pain, I seek treatment at YAPCHANKOR. Treatment was effective and I was advised by En. Ganesh to continue to exercise and take care. I believe I have recovered. I feel fine and happy. Treatment cost is value for money.” – Peter\n“Treatment cost is value for money”",
    "outcome": "“Treatment cost is value for money” – Peter, 57, suffered from sciatica or sciatic nerve impingement, which is a condition where pressure on the sciatic nerve causes radiating pain down the leg. We we...",
    "link": "https://yapchankor.com/testimonials/peter-sciatic-nerve-impingement/",
    "length": 1073
  },
  {
    "id": "testimonial-177",
    "title": "Ankle sprain Yong",
    "slug": "sprained-ankle",
    "content": "Jamie suffered an ankle sprain and came to us early enough that we could help her with a short treatment course for a week. Her pithy testimonial below ? Thank you Jamie!\n“Day 1. I need help and treatment.\nDay 7. I can work and [go] running” – Jamie Yong\n“Day 1. I need help and treatment.\r\n\r\nDay 7. I can work and [go] running” – Jamie Yong",
    "outcome": "Jamie suffered an ankle sprain and came to us early enough that we could help her with a short treatment course for a week. Her pithy testimonial below ? Thank you Jamie!",
    "link": "https://yapchankor.com/testimonials/yong-ankle-sprain/",
    "length": 341
  },
  {
    "id": "testimonial-178",
    "title": "Meniscus surgery Nigel",
    "slug": "knee-pain",
    "content": "16-year old Nigel’s case is a pretty interesting one that we recently saw. He had undergone a meniscus surgery at the KLSMC in early 2014 to fix his discoid meniscus in his left knee (basically the meniscus was too thick) and was told he would recover in 3 months after physiotherapy and stem cell injections to combat the pain. But the pain persisted. The doctor there suspected a tear had formed in the meniscus and recommended another surgery. His parents planned to have his surgery at the end of 2015.\nFortunately, he came to see us first. From not being able to play sports or do long walks without suffering serious pain, he was able to jump squats, go back to playing futsal and his sports after our treatment! We were able to help him build back his atrophied leg muscles. He now has decided that he does not need surgery on his knee anymore, which is fantastic for a young man like himself. We are even more happy to hear that he has gone back to playing sports, something that he hasn’t been able to do for over a year since his surgery. Thank you for sharing your story here Nigel!\n“I had gone for surgery back in early February for a discoid meniscus at Kuala Lumpur Sports Medicine Centre (KLSMC). Going for their physiotherapy and injecting stem cells after the surgery, I was expected to recover by 3 months or so. 3 months had gone by but the pain on my left knee persisted. After going for an MRI scan advised by the doctor, they told me that my meniscus had a tear and advised another surgery. My parents and I had planned to have the surgery at the end of the year as I had school. In the meantime, I got to know about YAPCHANKOR online and decided to get a second opinion there. When I went to YAPCHANKOR, I was told that the tear in my meniscus had been healed and the scarring was causing the pain. They told me that they couldn’t help much with the pain but could help me build my leg muscles back, but of course I was in much doubt as I had experienced a lot of pain during the physiotherapy in KLSMC, but my parents had signed me up anyway. Amazingly, after just 10 sessions with YAPCHANKOR, I was able to do squats and other leg workouts without much pain, thanks to Arif, the physiotherapist in YAPCHANKOR who had corrected my form and taught me ways to do the leg exercises with less pain. As time progressed, my leg muscles were building through the workouts. I have also noticed that as my leg muscles increased, the pain decreases. Ever since, I have refused surgery, as I do not see the need to. I now am occasionally playing futsal and going for jogs. I’d like to thank YAPCHANKOR, my parents and God.” – Nigel Caoile Phang\n16-year old Nigel’s case is a pretty interesting one that we recently saw. He had undergone a surgery at the KLSMC in early 2014 to fix his discoid meniscus in his left knee (basically the meniscus was too thick) and was told he would recover in 3 months after physiotherapy and stem cell injections to combat the pain. But the pain persisted. The doctor there suspected a tear had formed in the meniscus and recommended another surgery. His parents planned to have his surgery at the end of 2015.\r\n\r\nFortunately, he came to see us first. From not being able to play sports or do long walks without suffering serious pain, he was able to jump squats, go back to playing futsal and his sports after our treatment! We were able to help him build back his atrophied leg muscles. He now has decided that he does not need surgery on his knee anymore, which is fantastic for a young man like himself. We are even more happy to hear that he has gone back to playing sports, something that he hasn’t been able to do for over a year since his surgery. Thank you for sharing your story here Nigel!",
    "outcome": "16-year old Nigel’s case is a pretty interesting one that we recently saw. He had undergone a meniscus surgery at the KLSMC in early 2014 to fix his discoid meniscus in his left knee (basically the me...",
    "link": "https://yapchankor.com/testimonials/nigel-meniscus-surgery/",
    "length": 3745
  },
  {
    "id": "testimonial-179",
    "title": "Lower Back Injury Brian Kay",
    "slug": "back-pain",
    "content": "Brian, 54 years old, suffered from a lower back injury and after just 7 sessions, we were able to get his pain under control and his functional abilities back to normal. Thank you for sharing your story here Brian!\n“Had treatment for lower back injury, the pain point was identified quickly and I was provided treatment by massage, electrodes and exercise routine. Now on my 7th visit, pain is almost gone, no more stiffness and getting back to normal. Very worthwhile treatment. Would recommend to anyone.” – Brian Kay\n“...pain is almost gone, no more stiffness and getting back to normal. Very worthwhile treatment. Would recommend to anyone.” – Brian Kay",
    "outcome": "Brian, 54 years old, suffered from a lower back injury and after just 7 sessions, we were able to get his pain under control and his functional abilities back to normal. Thank you for sharing your sto...",
    "link": "https://yapchankor.com/testimonials/brian-kay-lower-back-injury/",
    "length": 657
  },
  {
    "id": "testimonial-180",
    "title": "Hip fracture recovery Nagaraju",
    "slug": "knee-pain",
    "content": "83 year old S. Nagaraju pithy testimonial about the outcomes we helped him achieve made our day! We are happy we could help this wonderful old man to experience a better quality of life in his golden years. He was a post-op hip fracture recovery case, and was suffering from a lot of pain, thus losing his ability to do simple things like walk, sleep or climb stairs. Thank you and keep on exercising Mr. Nagaraju!\n“The treatment has helped me to reduce my pain in the hip and left leg, back , knee pain and I am [able to] walk with the single stick. Can climb stairs with the stick. I can sit comfortably without any pain. Stiffness of the thighs and legs reduced. Can sleep well.” – S. Nagaraju",
    "outcome": "83 year old S. Nagaraju pithy testimonial about the outcomes we helped him achieve made our day! We are happy we could help this wonderful old man to experience a better quality of life in his golden ...",
    "link": "https://yapchankor.com/testimonials/nagaraju-hip-fracture-recovery/",
    "length": 696
  },
  {
    "id": "testimonial-181",
    "title": "Knee OA Karen Kong",
    "slug": "knee-pain",
    "content": "Another case we saved from surgery! Karen, 60, suffered from knee OA (osteoarthritis), which is due to wear-and-tear and aging. Her days as a badminton player probably increased the stress on the knees. One of the great things with our line of work is that we can help people maintain a good standard of living, and in Karen’s case, she was able to continue with her job as an insurance agent after our treatment! Thanks for sharing your story Karen!\n“I am now an insurance agent. My knee injuries started from earlier days of badminton game and training. For the past 2 years, the pain became worse and my doctor has advised for surgery. During this CNY, the pain was intense that I went to look for [a] Chinese sinseh but most of the clinics I found closed for 2 weeks. Thru’ a recommendation, I came to YAPCHANKOR and was advised for 21 treatments. During the treatment, I was given physio and also Chinese herbs bandaged on both knees. Initially the exercise was tough but became easier after several treatments. Now I can walk around with less pain. I am pleased with the improvement because I can continue working.” – Karen Kong",
    "outcome": "Another case we saved from surgery! Karen, 60, suffered from knee OA (osteoarthritis), which is due to wear-and-tear and aging. Her days as a badminton player probably increased the stress on the knee...",
    "link": "https://yapchankor.com/testimonials/karen-kong-knee-oa/",
    "length": 1134
  },
  {
    "id": "testimonial-182",
    "title": "Severe back pain Pn Hidayah",
    "slug": "back-pain",
    "content": "When Puan Hidayah, 48, first walked into our treatment centre, she was suffering from severe back pain. She could hardly walk, and only through a lot of slow and painful effort was she able to move. Her back pain was also causing some mild numbness down her back and leg. After we assessed her, we gave her a 14 session treatment plan to treat her pain, then to help her heal and recover faster, and finally to strengthen her back. After a few days, her pain levels decreased significantly and by the end of the treatment, the back pain and numbness was gone. She was able to return to her normal walking gait within a couple of weeks. Thank you for sharing your story Pn Hidayah!\n“I am [an] Executive in one of the private [companies]. My job as [an] HR executive and most of the time, spending my time looking at the computer. I think my back pain because of the lack of exercise and less moving around. I happened to know about YAPCHANKOR through the Internet and I feel this treatment is better rather than going to the hospital. So far I never been to other therapists and this is my first time and a lot of improvement after a few sessions through YAPCHANKOR. The way they conduct the massage is acceptable and comfortable. The exercise is simple (not extreme) and the massage is good and they handle it [in a] very professional way. What I can say is YAPCHANKOR is a good place for the solution and the price is reasonable.” – Hidayah\n“What I can say is YAPCHANKOR is a good place for the solution and the price is reasonable.”",
    "outcome": "When Puan Hidayah, 48, first walked into our treatment centre, she was suffering from severe back pain. She could hardly walk, and only through a lot of slow and painful effort was she able to move. H...",
    "link": "https://yapchankor.com/testimonials/pn-hidayah-severe-back-pain/",
    "length": 1534
  },
  {
    "id": "testimonial-183",
    "title": "Slipped disc Norsaadah",
    "slug": "back-pain",
    "content": "Norsaadah, 24 years old, suffered a minor slipped disc injury after lifting heavy objects the wrong way. She tried physiotherapy at the hospital for 4 months without any improvement, and indeed, the pain worsened. After just 1 week of treatment with us, her lower back pain levels have dropped by 90% and her upper back has recovered by 75%. She needs to continue her treatment here to ensure that the risk of recurrence is lowered, so hopefully she’ll return soon! Thanks Norsaadah!\n“I have minor slipped [discs] on my lower back cause of “salah angkat barang berat”. The pain [started at the] end of year 2013. So [after] that I decided to go to a [clinic] & Hospital Ampang.  I have done [a] few times of physio treatment at Hospital Ampang [for] 4 months. But I still feel the pain and it [became] worse. Then I found YAPCHANKOR, [which] has [a] different physio treatment so [I tried] my luck here. After 3 times of treatment, my lower back 90% [recovered] and my upper back about 75% [recovered]. I feel good now and maybe I will continue my treatment here in [the] future. Thank you YAPCHANKOR.” – Norsaadah",
    "outcome": "Norsaadah, 24 years old, suffered a minor slipped disc injury after lifting heavy objects the wrong way. She tried physiotherapy at the hospital for 4 months without any improvement, and indeed, the p...",
    "link": "https://yapchankor.com/testimonials/norsaadah-slipped-disc/",
    "length": 1114
  },
  {
    "id": "testimonial-184",
    "title": "Ankle injury Shaun",
    "slug": "back-pain",
    "content": "Shaun, 27 years old, suffered a futsal injury to his ankle. There was a lot of pain and swelling from the injury, but we were able to get him on the right path to recovery quickly with our combination of physiotherapy and special herbal medicine patches that reduced the inflammation and improved his healing. Thanks Shaun for sharing your story!\n“I injured my ankle by playing futsal. I lost my balance and rolled on it. Vani from YAPCHANKOR reduced the swelling and made sure I was able to recover properly. The difference between YAPCHANKOR and other “tit da’s” is they have a background in physiotherapy, and made me do strengthening exercises, allowing my muscle to heal and strengthen at the same time. Thank you Vani!” – Shaun Leong",
    "outcome": "Shaun, 27 years old, suffered a futsal injury to his ankle. There was a lot of pain and swelling from the injury, but we were able to get him on the right path to recovery quickly with our combination...",
    "link": "https://yapchankor.com/testimonials/shaun-ankle-injury/",
    "length": 739
  },
  {
    "id": "testimonial-185",
    "title": "Spine fracture Madam Khor",
    "slug": "back-pain",
    "content": "80 year old Madam Khor suffered a compression spine fracture on her spine after a fall. She had trouble walking with the pain, and at her age, surgery would have been a real risk. After her treatment with us however, her pain has improved tremendously and she is now on the road to recovery. Thank you Madam Khor and take care of yourself!\n“I’m having a fracture to my spine after a fall. My daughter located YAPCHANKOR through the web. After a few therapy sessions, I’m getting so much better…the pain is less and I can walk better now. Anyway, thanks to Ms. Umi and Vani. They are so professional. ” – Khor",
    "outcome": "80 year old Madam Khor suffered a compression spine fracture on her spine after a fall. She had trouble walking with the pain, and at her age, surgery would have been a real risk. After her treatment ...",
    "link": "https://yapchankor.com/testimonials/madam-khor-spine-fracture/",
    "length": 608
  },
  {
    "id": "testimonial-186",
    "title": "Lower back pain Mohan Bakar",
    "slug": "back-pain",
    "content": "Golfer Mohan, 62, suffered from lower back pain due to a slipped disc condition which prevented him from enjoying his passion, golf. Our advice was for him to stay off the course till the treatment was done but he could not resist ? Still it’s good to hear that he did not have any more pain while playing golf. Thank you Mohan and good luck with your golf game!\n“My treatment was very good. Within 3 sessions, the pain was mostly gone. The fact that I could still play golf after 10 sessions without pain speaks a lot. I really appreciate the therapist, Janna, her patience and total approach to the problem. Thank you very much” – Mohan Bakar",
    "outcome": "Golfer Mohan, 62, suffered from lower back pain due to a slipped disc condition which prevented him from enjoying his passion, golf. Our advice was for him to stay off the course till the treatment wa...",
    "link": "https://yapchankor.com/testimonials/mohan-bakar-lower-back-pain/",
    "length": 644
  },
  {
    "id": "testimonial-187",
    "title": "Back Injury Louise Lo",
    "slug": "back-pain",
    "content": "Louise, 30, suffered from pains in her back, shoulder and thigh after her fall from the stairs. Because of her age and the mechanical nature of her injuries (e.g. her mechanical back injury), we were able to treat all her problems within a 2 week treatment plan. Her testimonial below is rather whimsical and quite individual, and we decided to reproduce it fully without any edits. Thank you Louise and we appreciate your feedback about our physiotherapist! We are glad that we have relieved you of your pain!\n“YAPCHANKOR Old Klang Road is the nearest shop to my place that I stay. First, I fall/slip from staircase caused injury on leg and hand. Until the next day, I directly looking around to find someone to wrap for my njuries, till I saw big signboard from roadside and here I know YAPCHANKOR. The day I finish my treatment, I told Mr. Yap that on my frequent pain on back. With awkward, he checked my back and realize on swelling, thus he suggest the period of treatment for me that came since 10 years ago. Today I was under 13 treatments, everything getting better and improvement on my daily hectic work. Although I’m not fully utilities the suggested treatment, everything went well and I can do housework or work longer than like last time.\nI am no longer old lady, I am back to my age. Hahaha….\nBTW, my therapist was Vicky, she was awesome in terms of explain and the strength and best energy to cure my back. But she’s super busy schedule but I was willing to follow because I choose the best, I am not saying others not good but I am choosy. LOL\nMr. Yap, u did gain a good employee and please to be good to her, if not it will be losing on YAPCHANKOR. She get along with everyone well, I guess so far no complain for her because she please older or young one.\nIn terms of improving, I do not have any suggestion because I have never been to any therapy before in KL. So far this is the best. Although shop looks old but old things doesn’t makes anything as long the objectives in helping more people from suffering. Lastly, thank you Vicki and YAPCHANKOR.\nRegards,\nLouise Lo\n“I am no longer old lady, I am back to my age.”",
    "outcome": "Louise, 30, suffered from pains in her back, shoulder and thigh after her fall from the stairs. Because of her age and the mechanical nature of her injuries (e.g. her mechanical back injury), we were ...",
    "link": "https://yapchankor.com/testimonials/louise-lo-back-injury/",
    "length": 2138
  },
  {
    "id": "testimonial-188",
    "title": "Neck and Shoulder Pain Wong",
    "slug": "back-pain",
    "content": "Ms Wong came to see us after visiting Tung Shin’s TCM hospital. But because of the language barriers, she found our treatment and approach more suitable. Good thing too, since she now has recovered from her long-term neck and shoulder pain, and is working on improving her strength with home exercises. Thanks Ms Wong for sharing\n“My job as an IT professional constantly sees me glued to the computer for long hours of time. About 6 months ago, I developed a nagging pain on my right shoulder. Pain increases when I bend my neck backwards. I tried therapeutic massage at Tung Shin TCM but due to language barriers with the doctor (he speaks little English, I speak little Mandarin), I gave up after 2 sessions. Today I don’t feel the pain anymore but need to work on increasing muscle strength. Vaharli has shown me simple exercises which I have been doing and they have helped too. Many thanks and appreciation to Vaharli for her experienced hands in treating my problem.” –  Deanna Wong",
    "outcome": "Ms Wong came to see us after visiting Tung Shin’s TCM hospital. But because of the language barriers, she found our treatment and approach more suitable. Good thing too, since she now has recovered fr...",
    "link": "https://yapchankor.com/testimonials/wong-neck-and-shoulder-pain/",
    "length": 988
  },
  {
    "id": "testimonial-189",
    "title": "Back pain N.C. Teh",
    "slug": "back-pain",
    "content": "Mr Teh, 27 years old, suffered from back pain because of an old injury. The worst thing was that he suffered for 15 years! His is also a good case in point to be patient with our treatment. Because of the extremely chronic back pain he faced, he did not see much improvement in pain levels in the 1st week. But after that 1st week, the pain started to reduce dramatically. Today he is able to function at work without pain, which is a huge achievement, after 15 years of suffering! Thank you for sharing your story, Mr. Teh!\n“I [was] having back pain since 15 years [ago] due to [an] old injury. One of my friends recommended me to YCK. The therapist recommended to me to do treatment for 21 days with Chinese herbs and physio. First week I felt my pain was the same like [the] 1st day. But after that my pain reduced a lot. I can continue doing my work without pain. I feel happy with this treatment. At the same time, I must thank Miss Vicky. She [did] a good job to treat me.\n‘NANDRI VANAKAM’ ” – NC Teh",
    "outcome": "Mr Teh, 27 years old, suffered from back pain because of an old injury. The worst thing was that he suffered for 15 years! His is also a good case in point to be patient with our treatment. Because of...",
    "link": "https://yapchankor.com/testimonials/n-c-teh-back-pain/",
    "length": 1006
  },
  {
    "id": "testimonial-190",
    "title": "Disc Degeneration J.Tong",
    "slug": "back-pain",
    "content": "Mr. Tong, 60, is one of our great success stories. He had severe neck and back pain, caused by disc degeneration in his C3 to C5 and L3 to L5 vertabrae. Disc degeneration usually results from wear and tear in the human body, and modern medicine has a hard time dealing with the pain and suffering that results. Mr. Tong sought many types of treatment, including from chiropractors and doctors, but to no avail. However, his treatment at YAPCHANKOR has been a huge success, and he claims that his recovery is complete and that his mobility has returned to a full range. Thank you for sharing your recovery story! We wish you well too\nMedical Issues: Discs Degeneration due to wear & tear.\nBackground: Medically Proficient\nPast Therapies: Meridian Points Massage. Chiropractic.\nPost-Treatment Feelings: Completely healed. Mobility (Full) reinstated back to younger days. Comfortable & Elated.\nLuckily we have YCK around. This centuries old treatment coupled with modern physiotherapy works to CURE you, not SUPPRESS your symptoms like other medical approaches / practices.\nWishing Well & Happy Always” – Jinson Tong",
    "outcome": "Mr. Tong, 60, is one of our great success stories. He had severe neck and back pain, caused by disc degeneration in his C3 to C5 and L3 to L5 vertabrae. Disc degeneration usually results from wear and...",
    "link": "https://yapchankor.com/testimonials/j-tong-disc-degeneration/",
    "length": 1113
  },
  {
    "id": "testimonial-191",
    "title": "Back and Knee pain Mr Soo",
    "slug": "knee-pain",
    "content": "Mr. Soo, 27 years old, is a field engineer who injured himself at work on an offshore platform, lifting heavy items. Due to the mechanical nature of his injuries, he recovered fairly quickly from his back and knee pain after our treatment. After treatment of just over a week, his knee pain has disappeared and his back pain has largely been resolved. With continued exercises, he should be able to maintain his back and knee health going forward. Thanks for sharing!\n“My occupation is [a] field engineer in [the] oil & gas industry. Most of the time, I need to do physical work and heavy lifting. I got my backache and knee pain [when] running a job offshore. After that, I went to YAPCHANKOR to treat my injury. After 8 sessions of treatment, the knee pain is totally relieved. I just need to keep doing exercises to strengthen my muscles. My backache has been largely reduced. I feel comfortable compared to previously. Thanks to Vaharli.” – Soo SK",
    "outcome": "Mr. Soo, 27 years old, is a field engineer who injured himself at work on an offshore platform, lifting heavy items. Due to the mechanical nature of his injuries, he recovered fairly quickly from his ...",
    "link": "https://yapchankor.com/testimonials/mr-soo-back-and-knee-pain/",
    "length": 951
  },
  {
    "id": "testimonial-192",
    "title": "Trigger Finger Paruvathy",
    "slug": "back-pain",
    "content": "“A few years ago, while I was helping to [carry] out some boxes with my colleagues, I injured my fingers. I had pain in fingers. I went to U.H. (Universiti Hospital) for treatment. They did waxing, ultrasound and massage for a week. The pain went off. After a couple of years, the pain came back and was unbearable. So my friend Elizabeth recommended YAPCHANKOR. Ms Vicky advised me for 21 days treatment. I did my treatment and about 70% healed. After the treatment, now only my 2 fingers have pain and Ms. Vicky advised me to continue doing the exercises regularly. Thank you. ” – Paruvathy M",
    "outcome": "“A few years ago, while I was helping to [carry] out some boxes with my colleagues, I injured my fingers. I had pain in fingers. I went to U.H. (Universiti Hospital) for treatment. They did waxing, ul...",
    "link": "https://yapchankor.com/testimonials/paruvathy-trigger-finger/",
    "length": 594
  },
  {
    "id": "testimonial-193",
    "title": "Shoulder Pain Madam Pang",
    "slug": "back-pain",
    "content": "“I was having my left shoulder pain for the past about few months. Then one of my personal girl friends recommend me to see YAPCHANKOR for treatment. At first it started on my ankle because I fell down and twisted and later it was cured. Then I started to let YAPCHANKOR to do the treatment on my left shoulder for 21 days. I was very happy with the treatment, there is no more pain and come back to normal – no more suffering. I must thank Yap Chan Kor and his physiotherapist very much.” – Madam Pang",
    "outcome": "“I was having my left shoulder pain for the past about few months. Then one of my personal girl friends recommend me to see YAPCHANKOR for treatment. At first it started on my ankle because I fell dow...",
    "link": "https://yapchankor.com/testimonials/madam-pang-shoulder-pain/",
    "length": 502
  },
  {
    "id": "testimonial-194",
    "title": "Knee Pain Noremeelia",
    "slug": "knee-pain",
    "content": "“Sebelum in lutut saya kerap sakit dan ngilu akibat muscle yang terlalu tegang. Kesakitan in berlaku akibat mungkin sebelum ini berat badan mendadak naik dan senaman yang dilakukan tidak mengikut cara yang betul. Selepas mendapat treatmen di sini, kesakitan lutut saya berkurangan, ngilu yang dialami juga kurang. TQ “YCK”.” – Noremeelia",
    "outcome": "“Sebelum in lutut saya kerap sakit dan ngilu akibat muscle yang terlalu tegang. Kesakitan in berlaku akibat mungkin sebelum ini berat badan mendadak naik dan senaman yang dilakukan tidak mengikut cara...",
    "link": "https://yapchankor.com/testimonials/noremeelia-knee-pain/",
    "length": 337
  },
  {
    "id": "testimonial-195",
    "title": "Knee Osteoarthritis Mohd Rus Jaafar",
    "slug": "knee-pain",
    "content": "“My injury is due to [the] aging process. My left knee had a nagging pain due to [the] weakening of the cartilage. I signed up for two weeks herbal treatment.\nI am now healed at the end of the two weeks period. I definitely will recommend friends to come for treatment when needed.” – Mohd Rus Jaafar",
    "outcome": "I am now healed at the end of the two weeks period. I definitely will recommend friends to come for treatment when needed.” – Mohd Rus Jaafar",
    "link": "https://yapchankor.com/testimonials/mohd-rus-jaafar-knee-osteoarthritis/",
    "length": 300
  },
  {
    "id": "testimonial-196",
    "title": "Knee Ligament Sprain Peter",
    "slug": "knee-pain",
    "content": "“Injured my right knee during a badminton game, due to overstretching. The injury was healed after 2 weeks , during which I applied a glucosamine cream. The injury re-occurred when I again overstretched my legs at Skytrax (climbing). Decided to try YAPCHANKOR. The first couple of sessions relieved the pain at my knee. The stretching and strengthening exercises helped to ensure my knee is strong and flexible. I am feeling fine today after the therapy sessions at YAPCHANKOR. Working on strengthening and stretching exercises will hopefully keep my knees strong and flexible and free from pain.” – Peter C.",
    "outcome": "“Injured my right knee during a badminton game, due to overstretching. The injury was healed after 2 weeks , during which I applied a glucosamine cream. The injury re-occurred when I again overstretch...",
    "link": "https://yapchankor.com/testimonials/peter-2-knee-ligament-sprain/",
    "length": 608
  },
  {
    "id": "testimonial-197",
    "title": "Knee Osteoarthritis Madam Lee",
    "slug": "knee-pain",
    "content": "“I came to know YAPCHANKOR through [their] website [with] all the testimonials. I [have] swollen knee pain so I came here cuase I don’t like painkillers and injections. I want it all natural.\nWhen I came here I was limping but now I can walk properly and without pain; the nurses here are friendly too.” – Madam Lee",
    "outcome": "When I came here I was limping but now I can walk properly and without pain; the nurses here are friendly too.” – Madam Lee",
    "link": "https://yapchankor.com/testimonials/madam-lee-knee-osteoarthritis/",
    "length": 315
  },
  {
    "id": "testimonial-198",
    "title": "Lower Back Pain Willcan",
    "slug": "back-pain",
    "content": "“In December 2014, I experienced severe lower back pain. After I was advised by my doctor to go see a specialist, I remembered seeing YAPCHANKOR when I passed Subang Square and decided to come. Glad that Janna checked my spine and advised me that the condition is muscle related and proceeded with the treatments. Today is my last session. I am more than 90% healed following her treatments and exercises. I am glad and thankful for the restoration and understanding and believe I’ll be fully recovered soon.”",
    "outcome": "“In December 2014, I experienced severe lower back pain. After I was advised by my doctor to go see a specialist, I remembered seeing YAPCHANKOR when I passed Subang Square and decided to come. Glad t...",
    "link": "https://yapchankor.com/testimonials/willcan-lower-back-pain/",
    "length": 509
  },
  {
    "id": "testimonial-199",
    "title": "Leg Numbness Wendy C.",
    "slug": "back-pain",
    "content": "“Found out about YAPCHANKOR from the Internet, read about the feedback from previous clients. Majority of them ‘talked’ about their ‘recovery’ and success ‘stories’. Very impressed with what they said. Noticed an old friend who also had his treatment at YAPCHANKOR.\nAs for my injury, I experienced numbness in my ‘legs’. Without any second thoughts, decided to try YAPCHANKOR. Tried the ten sessions treatment and found improvement from day 2 onwards. Today is the last day of treatment and am very satisfied. I would strongly recommend YAPCHANKOR to my friends.” – Wendy",
    "outcome": "“Found out about YAPCHANKOR from the Internet, read about the feedback from previous clients. Majority of them ‘talked’ about their ‘recovery’ and success ‘stories’. Very impressed with what they said...",
    "link": "https://yapchankor.com/testimonials/wendy-c-leg-numbness/",
    "length": 571
  },
  {
    "id": "testimonial-200",
    "title": "Knee Osteoarthritis Abd Hamid",
    "slug": "knee-pain",
    "content": "“I would like to thank your therapists, Umi and Vani, who had treated me during the 21 days of treatments. They had given the utmost help for me to cure me of my illness. The treatments have improved my knees at least around 80%. There is still some persistent pain at times. I hope with more exercises I will regain my strength. Thanks for your help.” – Abd Hamid Zakaria",
    "outcome": "“I would like to thank your therapists, Umi and Vani, who had treated me during the 21 days of treatments. They had given the utmost help for me to cure me of my illness. The treatments have improved ...",
    "link": "https://yapchankor.com/testimonials/abd-hamid-knee-osteoarthritis/",
    "length": 372
  },
  {
    "id": "testimonial-201",
    "title": "Back Injury Daniel",
    "slug": "back-pain",
    "content": "“I go to the gym quite often therefore I’ve injured my shoulder and lower back. Before I come to YAPCHANKOR, I’ve been to [a] few massage centres and [to] see [a] chiropractor to deal with the pain [that] I was suffering. But until the end there is no result from them. One day, I [passed] by this YAPCHANKOR and I decided to give a try. [There] I met Vaharli as my physiotherapist, so I took the treatment package and it makes me feel better day by day. Although it is a slow progress, but the result is full of satisfaction. Now I feel more comfortable than ever. Thanks to Vaharli and YAPCHANKOR for the good services.” – Daniel K",
    "outcome": "“I go to the gym quite often therefore I’ve injured my shoulder and lower back. Before I come to YAPCHANKOR, I’ve been to [a] few massage centres and [to] see [a] chiropractor to deal with the pain [t...",
    "link": "https://yapchankor.com/testimonials/daniel-back-injury/",
    "length": 633
  },
  {
    "id": "testimonial-202",
    "title": "Arm Pain Karen Sim",
    "slug": "general",
    "content": "“The pain at my arm was [in pain] for more than 1 year before I came to YAPCHANKOR. I have seen a few Chinese physicians and even an orthopedic but the pain cannot be resolved. This [bring] me to YAPCHANKOR. Well, Vaharli is good, knows what she is doing, did a good job and [teaching] me various exercises to strengthen my muscles. I felt much better now and the pain at my arm improve tremendously and [if I] to continue with the exercises, I believe I will fully recover.” – Karen",
    "outcome": "“The pain at my arm was [in pain] for more than 1 year before I came to YAPCHANKOR. I have seen a few Chinese physicians and even an orthopedic but the pain cannot be resolved. This [bring] me to YAPC...",
    "link": "https://yapchankor.com/testimonials/karen-sim-arm-pain/",
    "length": 483
  },
  {
    "id": "testimonial-203",
    "title": "Back Pain Asriyah",
    "slug": "back-pain",
    "content": "“Saya tidak dapat bergerak untuk bangun dari baring, sakit – jadi kaku\nApabila datang buat rawatan di sini, selepas hari 1 memang ada perubahan yang sangat terkesan.\nSehingga sampai 7 hari dari perubatan, rawatan – senaman dan sebagainya halhadulilah terasa satu kelebihan pada badan.\nAsriyah\n* Layanan staf sangat OK.",
    "outcome": "* Layanan staf sangat OK.",
    "link": "https://yapchankor.com/testimonials/asriyah-back-pain/",
    "length": 318
  },
  {
    "id": "testimonial-204",
    "title": "Knee Osteoarthritis Madam Khoo C.S.",
    "slug": "knee-pain",
    "content": "“I started suffering from right hip pain in early 2013 and this was later confirmed to be osteoarthritis of the hip. In the beginning, I had to take pills for the pain, but later I started going for regular acupuncture in 2014 for 9 months. Whilst this helped to reduce the pain, I was walking awkwardly with a limp. My right leg progressively felt more stiff and ‘heavy’ as I was experiencing muscle aches and pains. I got tired quickly when walking and I was also having lower back pain when standing for more than 20 mins.\nI came across the YAPCHANKOR advertisement on the internet, I read about the treatment and so I decided to give it a try. I signed up for 21 treatments and by the end of the treatment, I found that I was walking more normally, the stiffness and muscle aches in my right leg reduced significantly and my walking improved by 70%. The physio and stretching exercises initially caused pain in my right leg and my hip joint, but I am now able to perform the exercises mostly without any pain, though there is still the occasional pressure felt on the joints.\nI used to experience pain around my hip joint whenever I stood up from a sitting position and I had to start moving slowly due to the pain but this rarely occurs now.\nThe range of movement for my right leg has improved by about 50%. Although I am able to stretch my legs without pain, I am unable to recover the full range of movement for my right leg.\nOverall, I am pleased with the treatment at YAPCHANKOR and the level of professionalism of the physiotherapist, Ms Janna who has been very patient and determined to help me get better.” – Khoo C.S",
    "outcome": "The range of movement for my right leg has improved by about 50%. Although I am able to stretch my legs without pain, I am unable to recover the full range of movement for my right leg.",
    "link": "https://yapchankor.com/testimonials/madam-khoo-c-s-knee-osteoarthritis/",
    "length": 1629
  },
  {
    "id": "testimonial-205",
    "title": "Elbow Pain Sim.X.C",
    "slug": "general",
    "content": "Injured: Fall from bike and jumpstreet\nTherapy before: Osteotherapy and Chiropractor\nToday: Feel better after the 7 sessions.",
    "outcome": "Today: Feel better after the 7 sessions.",
    "link": "https://yapchankor.com/testimonials/sim-x-c-elbow-pain/",
    "length": 125
  },
  {
    "id": "testimonial-206",
    "title": "Pain Management Ampa",
    "slug": "general",
    "content": "“I have suffered [from] pain for more than 3 years. My half body progressively getting stiff until it’s limited my movement. Since I cannot write, I just want to thank you YAPCHANKOR, especially Vaharli for their kindness to treat my sickness. Even though I have not fully recovered, but half of my pain has gone.” – Ampa",
    "outcome": "“I have suffered [from] pain for more than 3 years. My half body progressively getting stiff until it’s limited my movement. Since I cannot write, I just want to thank you YAPCHANKOR, especially Vahar...",
    "link": "https://yapchankor.com/testimonials/ampa-pain-management/",
    "length": 321
  },
  {
    "id": "testimonial-207",
    "title": "Lower Back Pain Ramil",
    "slug": "back-pain",
    "content": "“After carrying heavy bags while travelling, my back start hurting and I could hardly walk. After having my treatment at YAPCHANKOR, there is no more pain and I can return to my daily activities.” – Ramil",
    "outcome": "“After carrying heavy bags while travelling, my back start hurting and I could hardly walk. After having my treatment at YAPCHANKOR, there is no more pain and I can return to my daily activities.” – R...",
    "link": "https://yapchankor.com/testimonials/ramil-lower-back-pain/",
    "length": 204
  },
  {
    "id": "testimonial-208",
    "title": "Upper Back Pain Edna Choo",
    "slug": "back-pain",
    "content": "“I had upper back pain for more than 2 years. I tried massage & physiotherapy but there was not much improvement.\nAt YCK, I was given herbal treatment, machine treatment & exercise.\nI have recovered about 90%.\nI will continue with the exercise which I am confident of improving further.” – Ms Edna C",
    "outcome": "I have recovered about 90%.",
    "link": "https://yapchankor.com/testimonials/edna-choo-upper-back-pain/",
    "length": 299
  },
  {
    "id": "testimonial-209",
    "title": "Ankle Ligament Sprain Zech",
    "slug": "sprained-ankle",
    "content": "“I injured my ankle whilst playing futsal. Initially my ankle had swollen to twice its original diameter. Thankfully I was able to schedule an appointment with Joy the very next day. I found the team here at YAPCHANKOR very professional and hospitable, and I thoroughly appreciate their service. I’ve made a nearly full recovery from being unable to walk to being able to run and jump around in just one month…truly amazing. I believe that with the rehabilitation techniques I’ve been taught, I will come out even stronger than before.” – Zechariah Lo",
    "outcome": "“I injured my ankle whilst playing futsal. Initially my ankle had swollen to twice its original diameter. Thankfully I was able to schedule an appointment with Joy the very next day. I found the team ...",
    "link": "https://yapchankor.com/testimonials/zech-ankle-ligament-sprain/",
    "length": 551
  },
  {
    "id": "testimonial-210",
    "title": "Ankle Sprain Tabitha",
    "slug": "sprained-ankle",
    "content": "“I twisted my ankle 3 times in less than a year’s time. The last time I twisted it, I didn’t get it treated immediately.\nBefore: I couldn’t walk down the stairs / applying the normal pressure on my left ankle. I also couldn’t tip toe at ease.\nNow: Feels much stronger. I can jump, run, tip toe, twist, walk up and down the stairs as usual.” – Tabitha L",
    "outcome": "Now: Feels much stronger. I can jump, run, tip toe, twist, walk up and down the stairs as usual.” – Tabitha L",
    "link": "https://yapchankor.com/testimonials/tabitha-ankle-sprain/",
    "length": 352
  },
  {
    "id": "testimonial-211",
    "title": "Knee Pain Pn Rosnah",
    "slug": "knee-pain",
    "content": "“I started to have knee injury in my 50s. It [was] getting worse for the past 10 years. I noticed the pain if I stood for long hours and sometimes when I sit for long hours. I never had proper treatment and only relied on supplements. After therapy sessions at YAPCHANKOR, my knee is getting better and it has improved, and helped a lot for my daily routines.”  – Pn Rosnah",
    "outcome": "“I started to have knee injury in my 50s. It [was] getting worse for the past 10 years. I noticed the pain if I stood for long hours and sometimes when I sit for long hours. I never had proper treatme...",
    "link": "https://yapchankor.com/testimonials/pn-rosnah-knee-pain/",
    "length": 373
  },
  {
    "id": "testimonial-212",
    "title": "Hip Pain Ryan K",
    "slug": "general",
    "content": "“We were very worried when Ryan started having very severe hip pains. The doctors and our son worried us with all possibilities. However, after the MRI and X-rays showed their results, we decided to try out physiotherapy for Ryan. He has benefited well and improved almost from the first session with Joy. We are very pleased with the results.” – Angela Kong, mother",
    "outcome": "“We were very worried when Ryan started having very severe hip pains. The doctors and our son worried us with all possibilities. However, after the MRI and X-rays showed their results, we decided to t...",
    "link": "https://yapchankor.com/testimonials/ryan-k-hip-pain/",
    "length": 366
  },
  {
    "id": "testimonial-213",
    "title": "Knee, Back and Shoulder Pain Svetlana",
    "slug": "knee-pain",
    "content": "“I started having knee pain around 5 years ago and recently when I went to hospital, it appeared that my diagnosis is osteoarthritis. Besides, I had regular back and shoulder pain. After that I decided to come for treatment to YAPCHANKOR and after 10 sessions of treatment, I started feeling perfect. The pain in my knee reduced a lot as well as uncomfortable feelings in back and shoulders.” – Svetlana",
    "outcome": "“I started having knee pain around 5 years ago and recently when I went to hospital, it appeared that my diagnosis is osteoarthritis. Besides, I had regular back and shoulder pain. After that I decide...",
    "link": "https://yapchankor.com/testimonials/svetlana-kneeback-and-shoulder-pain/",
    "length": 403
  },
  {
    "id": "testimonial-214",
    "title": "Tennis Elbow Elizabeth",
    "slug": "general",
    "content": "“Due to old injury at 50 years, the pain resurfaced. Could not lift any heavy things, elbow was in pain. Found out about this place and followed advice and underwent treatment. Happy to report I am well now. The dedicated, concern and care of Vicky and other staff aided my recovery. The amazing green paste plus physiotherapy, ultrasound etc is a surefire solution to recovery. Thanks to all staff and god bless.” – Elizabeth",
    "outcome": "“Due to old injury at 50 years, the pain resurfaced. Could not lift any heavy things, elbow was in pain. Found out about this place and followed advice and underwent treatment. Happy to report I am we...",
    "link": "https://yapchankor.com/testimonials/elizabeth-tennis-elbow/",
    "length": 426
  },
  {
    "id": "testimonial-215",
    "title": "Ankle Sprain H.P. Ong",
    "slug": "back-pain",
    "content": "“I twisted both my ankles on 30/1/2014 (1st day of Chinese New Year). I went to clinic for the treatment and the doctor just gave me painkillers and gel to apply on my ankles. I also went for Chinese traditional treatment but the pain came back on the next day. After 2 weeks of my injury, I went to the medical centre to do an X-ray on both my ankles. Doctor just gave me painkiller and gel to apply on my ankles. My joints are ok as from the X-ray. However, the pain comes back after I stop the painkillers. My colleague introduced me to YAPCHANKOR. I made an appointment for the treatment. First visit, the physiotherapist checked on my injury and planned 14 treatments for me. After 5 treatments, the pain on the ankles were reduced. Now after 13 treatments, I can walk normally and the pain has gone. The physiotherapist provided a list of exercises to improve my leg muscles. YAPCHANKOR really helped me to recover from the injury.” – HP Ong",
    "outcome": "“I twisted both my ankles on 30/1/2014 (1st day of Chinese New Year). I went to clinic for the treatment and the doctor just gave me painkillers and gel to apply on my ankles. I also went for Chinese ...",
    "link": "https://yapchankor.com/testimonials/h-p-ong-ankle-sprain/",
    "length": 947
  },
  {
    "id": "testimonial-216",
    "title": "Frozen Shoulder Bipin R",
    "slug": "frozen-shoulder",
    "content": "“I have been going through this frozen shoulder for past 2 yrs, which originated after exercise. I have visited few places like acupressure, modern physiotherapist but nothing worked. I came to know through the website about YAPCHANKOR. Looking at me they told me I will be ok, and today I am completely recovered. All the staff here are knowledgeable and expert in their field. I must thank Vicky, as I was going through her advice and treatment and her caring nature has helped to recover faster.” – Bipin R.",
    "outcome": "“I have been going through this frozen shoulder for past 2 yrs, which originated after exercise. I have visited few places like acupressure, modern physiotherapist but nothing worked. I came to know t...",
    "link": "https://yapchankor.com/testimonials/bipin-r-frozen-shoulder/",
    "length": 510
  },
  {
    "id": "testimonial-217",
    "title": "Ankle Sprain Madam Lim",
    "slug": "back-pain",
    "content": "“I accidentally sprained my right ankle while walking to the market. I had a very severe pain and I cannot move and walk. So I just stood there and cried, my friends rushed to my side and put me down to a chair. One of my friends recommended me to see YAPCHANKOR. I had my 21 days treatment in the clinic. Eventually the pain disappeared. Then I feel my ankle has totally cured.\nNow I am very happy to come back (walking) normal. Anyway, I really thank Dr Yap and his physiotherapist.” – PF Lim",
    "outcome": "Now I am very happy to come back (walking) normal. Anyway, I really thank Dr Yap and his physiotherapist.” – PF Lim",
    "link": "https://yapchankor.com/testimonials/madam-lim-ankle-sprain/",
    "length": 494
  },
  {
    "id": "testimonial-218",
    "title": "Back Pain Fong S.K.",
    "slug": "back-pain",
    "content": "“I got injured in my lower back during exercise at the gym. Found YAPCHANKOR on the internet and then went for the 14 day treatment. Initially I can’t sit for more than 10 minutes because of the pain. After the treatment, combined with the exercises given to me, I feel much better and the pain has almost completely gone. The patches really help. Now I can resume my training at the gym. Thanks YAPCHANKOR!” – Fong SK",
    "outcome": "“I got injured in my lower back during exercise at the gym. Found YAPCHANKOR on the internet and then went for the 14 day treatment. Initially I can’t sit for more than 10 minutes because of the pain....",
    "link": "https://yapchankor.com/testimonials/fong-s-k-back-pain/",
    "length": 418
  },
  {
    "id": "testimonial-219",
    "title": "Knee Pain Ms. Low",
    "slug": "knee-pain",
    "content": "“- Overall, recovered fast and the herbal medicine helped [me] to recover. Not really sure how I got injured.\n– Service of the staff are good and really helpful.\n– Lastly, I feel lucky that I came over here for my treatment and made my paid reduce fast & less. Thank you” – Low S.C.",
    "outcome": "“- Overall, recovered fast and the herbal medicine helped [me] to recover. Not really sure how I got injured.",
    "link": "https://yapchankor.com/testimonials/ms-low-knee-pain/",
    "length": 282
  },
  {
    "id": "testimonial-220",
    "title": "Knee Pain Patricia",
    "slug": "knee-pain",
    "content": "“After the 14 days of treatment, I feel very good. The way the therapist treats me is much professional. I came here [when] my both knees were in pain, now [they] have recovered 99% well. The person who took charge of me here is very good and guided me a lot at home [with] what type of exercises I have to do.” – Patricia Shamini",
    "outcome": "“After the 14 days of treatment, I feel very good. The way the therapist treats me is much professional. I came here [when] my both knees were in pain, now [they] have recovered 99% well. The person w...",
    "link": "https://yapchankor.com/testimonials/patricia-knee-pain/",
    "length": 330
  },
  {
    "id": "testimonial-221",
    "title": "Ankle Sprain Chan Ming Yang",
    "slug": "sprained-ankle",
    "content": "“I have engaged the treatment at YAPCHANKOR, I knew the injury would take a few weeks to heal and so we organised each session well. My injury has improved vastly since I started, and all the staff have treated me well. I got this injury from playing sports. I would like to say thank you to all the staff.” – Chan Ming Yang",
    "outcome": "“I have engaged the treatment at YAPCHANKOR, I knew the injury would take a few weeks to heal and so we organised each session well. My injury has improved vastly since I started, and all the staff ha...",
    "link": "https://yapchankor.com/testimonials/chan-ming-yang-ankle-sprain/",
    "length": 324
  },
  {
    "id": "testimonial-222",
    "title": "Back and Leg Pain Mohammad",
    "slug": "back-pain",
    "content": "“Saya Mohamad bin Ruslan, umur 72 tahun, seorang pesara guru, mengidap penyakit tulang belakang dan kaki kanan sejak setahun yang lalu.\nSaya diperkenalkan di sebuah kelinik fisioterapi di Ampang, iaitu YAPCHANKOR. Mula menjalani rawatan selama tiga minggu (mulai 8.9.2014) saya dapati ada perubahan dari segi kesakitan yang dialami. Sakit yang saya alami semakin hari semakin sembuh. Saya boleh berjalan, berdiri, dan duduk seperti sebelum saya menderita sakit. Semasa sakit, saya hanya banyak berbaring.\nTerima kasih diucapkan kepada staf YAPCHANKOR yang telah berusaha dan memberi layanan yang sangat baik kepada saya yang mungkin tiada di tempat lain. Sekali lagi ucapan terima kasih saya kepada Pusat Perubatan YAPCHANKOR” – Mohamad B. Ruslan",
    "outcome": "Terima kasih diucapkan kepada staf YAPCHANKOR yang telah berusaha dan memberi layanan yang sangat baik kepada saya yang mungkin tiada di tempat lain. Sekali lagi ucapan terima kasih saya kepada Pusat ...",
    "link": "https://yapchankor.com/testimonials/mohammad-back-and-leg-pain/",
    "length": 746
  },
  {
    "id": "testimonial-223",
    "title": "Neck and Shoulder Pain Mr YAp",
    "slug": "shoulder-pain",
    "content": "“I am indeed happy to have found YAPCHANKOR to relieve my neck, shoulder and hand pain. I had the neck pain for a long time, but later the shoulder and left hand started to pain. The pain is caused by lack of exercise. Mr. Ganesh recommended me the treatment for my nerves and muscles. At the moment, I feel that I have recovered 80%, but I am satisfied with the treatment. Mr. Ganesh did a good job. Thank you.” – Yap Kin Aik",
    "outcome": "“I am indeed happy to have found YAPCHANKOR to relieve my neck, shoulder and hand pain. I had the neck pain for a long time, but later the shoulder and left hand started to pain. The pain is caused by...",
    "link": "https://yapchankor.com/testimonials/mr-yap-neck-and-shoulder-pain/",
    "length": 426
  },
  {
    "id": "testimonial-224",
    "title": "Hand Injury Charmaine Sam",
    "slug": "back-pain",
    "content": "“Quite a few years back, I injured my fifth metacarpal on my right hand from boxing. At that point in time, I thought the best thing to do was to opt for traditional Chinese treatment as that was how I have always been treated when it comes to joint and muscles injuries from a young age. As I am in Sydney, there are only quite limited ones that I can go to and unfortunately, I visited a Chinese physician who claimed to be the best in town and his father happens to be one of the very well known physicians in Petaling Street. I have to say that that was the worst experience for me as not only the whole process was painful but very expensive as well.\nWhen I went back to Kuala Lumpur, the first thing I did was to visit YAPCHANKOR because they have been treating me since my early childhood days. After a few treatments, I began to feel the difference on my hand and it started healing progressively. I cannot emphasize how good the treatment was and not only that, Mr. Yap was so gentle in administering the medication and massages which is very important especially when you are already in so much pain.\nSince then, I have told myself that there won’t be any other Chinese physician that I’ll go to except YAPCHANKOR; not only for an effective treatment but also for their very reasonable price.” – Charmaine Sam",
    "outcome": "Since then, I have told myself that there won’t be any other Chinese physician that I’ll go to except YAPCHANKOR; not only for an effective treatment but also for their very reasonable price.” – Charm...",
    "link": "https://yapchankor.com/testimonials/charmaine-sam-hand-injury/",
    "length": 1319
  },
  {
    "id": "testimonial-225",
    "title": "Thigh Pain Mohan",
    "slug": "knee-pain",
    "content": "“My father [fell down] on the floor past few weeks (ago) because the floor was so slippery. After that, he found out so pain at his knee area. And we went to private hospital for check up, the doctor gave the knee medicine ‘GLUCOSAMINE’. But my father keep telling he still have the pain, so I decided to bring him for ‘traditional medicine’. Then only I got to know bout this YAPCHANKOR treatment from one of my friends who used to come for his treatment a long time ago. The first day we came here, the physiotherapist told us that its not a knee problem, but there is a blood clot in the thigh area, and we saw the blood clot area was green in colour. After that, we decided to do treatment for 10 days. That treatment included traditional medicine patching at the thigh, food controlling, and also some exercise. Within 3 days, my father told me that the pain had reduced. And he is now recovering in a good condition with the help of the treatment and also physiotherapist.” – Loganeswary (daughter of Mohan",
    "outcome": "“My father [fell down] on the floor past few weeks (ago) because the floor was so slippery. After that, he found out so pain at his knee area. And we went to private hospital for check up, the doctor ...",
    "link": "https://yapchankor.com/testimonials/mohan-thigh-pain/",
    "length": 1012
  },
  {
    "id": "testimonial-226",
    "title": "Ankle Sprain Melody Ang",
    "slug": "sprained-ankle",
    "content": "“I sprained my ankle and it has been very painful. I could not run, and do a lot of other movements. After treatment, I don’t have so much problems with my activities anymore. The exercises which Joy taught me was very helpful and helped relieve a lot of my pain and uneasiness. Even though it is not a 100% full recovery, Joy still taught me a lot of strengthening exercises which could help improve my condition even after the treatment. Thank you.” – Melody Ang",
    "outcome": "“I sprained my ankle and it has been very painful. I could not run, and do a lot of other movements. After treatment, I don’t have so much problems with my activities anymore. The exercises which Joy ...",
    "link": "https://yapchankor.com/testimonials/melody-ang-ankle-sprain/",
    "length": 464
  },
  {
    "id": "testimonial-227",
    "title": "Back Pain Y. Mori",
    "slug": "back-pain",
    "content": "“I injured when I was in the kitchen early morning. Suddenly pain came and cannot move since pain getting worse. YAPCHANKOR make treatment to remove my pain soon using current treatment, massage and patch. After 7-days treatment , my terrible pain almost gone. Now I came back normal. I thank you Mr. Ganesh treatment @YAPCHANKOR.” – Y. Mori",
    "outcome": "“I injured when I was in the kitchen early morning. Suddenly pain came and cannot move since pain getting worse. YAPCHANKOR make treatment to remove my pain soon using current treatment, massage and p...",
    "link": "https://yapchankor.com/testimonials/y-mori-back-pain/",
    "length": 341
  },
  {
    "id": "testimonial-228",
    "title": "Ankle Sprain V.K Leong",
    "slug": "sprained-ankle",
    "content": "“I fell down in a carpark when I stepped on an oily patch on the floor. I sprained my right foot, and immediately I came to YAPCHANKOR for consultation and treatment. The physio and herbal patch treatments helped me recover fully. I am indebted to Suganthi for her patience and the treatment she gave to help me fully recover. I will not hesitate to recommend YAPCHANKOR to anyone with muscular or joint injuries.” – V.K. Leong",
    "outcome": "“I fell down in a carpark when I stepped on an oily patch on the floor. I sprained my right foot, and immediately I came to YAPCHANKOR for consultation and treatment. The physio and herbal patch treat...",
    "link": "https://yapchankor.com/testimonials/v-k-leong-ankle-sprain/",
    "length": 427
  },
  {
    "id": "testimonial-229",
    "title": "Back Pain Mohd Amin",
    "slug": "back-pain",
    "content": "“The back pain has been around for quite sometime. Lately, especially when driving long distance or sitting in the office for more than 2hours. After treatments from YAPCHANKOR (14 days), which include physio, electrical waves and applying Chinese medicine, I am now feeling a lot better. YAPCHANKOR also introduced a number of physical exercises to improve my posture. Thank you Mr. Yap and Miss Vegeneswary.” – Mohd Amin",
    "outcome": "“The back pain has been around for quite sometime. Lately, especially when driving long distance or sitting in the office for more than 2hours. After treatments from YAPCHANKOR (14 days), which includ...",
    "link": "https://yapchankor.com/testimonials/mohd-amin-back-pain/",
    "length": 422
  },
  {
    "id": "testimonial-230",
    "title": "Thumb Injury Evelyn Tan",
    "slug": "back-pain",
    "content": "“I injured my right thumb while using an office equipment. The injury resulted in the right thumb and surrounding joint & wrist being affected. Over the course of treatment at YAPCHANKOR, I have gradually gained back the strength in the thumb and wrist area, and the inflammation has subsided.\nVicky has been very meticulous and detailed in her work.” – Evelyn Tan",
    "outcome": "Vicky has been very meticulous and detailed in her work.” – Evelyn Tan",
    "link": "https://yapchankor.com/testimonials/evelyn-tan-thumb-injury/",
    "length": 364
  },
  {
    "id": "testimonial-231",
    "title": "Knee Pain Thai Ah Hing",
    "slug": "knee-pain",
    "content": "“I had my right knee pain for a couple of months. I had gone to see orthopaedic for treatment a couple of times. The orthopedic had gave me anti-inflammation jab and also extracted fluid but the pain relief was for a short while only.\nThen my daughter’s colleague recommended me to YAPCHANKOR. I went to see Mr. Yap’s physiotherapist and signed up for 10x treatment course. At that time I was scheduled to go for a holiday and was worried that I would be unable to walk. Due to that, I continuously went for treatment everyday and it really helped me a lot. The swelling was gone and I can walk better.\nAfter my trip, I continued with my treatment and signed up for a 7x treatment course as maintenance.\nToday is my last treatment and I will surely recommend YAPCHANKOR to my relatives and friends.”",
    "outcome": "Then my daughter’s colleague recommended me to YAPCHANKOR. I went to see Mr. Yap’s physiotherapist and signed up for 10x treatment course. At that time I was scheduled to go for a holiday and was worr...",
    "link": "https://yapchankor.com/testimonials/thai-ah-hing-knee-pain/",
    "length": 799
  },
  {
    "id": "testimonial-232",
    "title": "Ankle And Calf Pain Janet Wu",
    "slug": "sprained-ankle",
    "content": "I had an injury at my right leg(front area) where the soft tissue was heavily bruised and swollen.I immediately came to Yap Chan Kor’s Treatment Centre and was recommended for a 14-day treatment. After a week’s treatment,the swelling has gone. I am very happy. The herbs and together with physio treatment were excellent. The staffs(physiotherapists), all fours were very friendly,courteous and are indeed professionals.N ot forgetting a big Thank You to Sifu Yap Chan Kor for his creation for having such GREAT HERBS for Healing. I really do recommend everyone to come here for injury treatments.TU very much to you all Ms Suganthi, Ms Vicky, Ms Shamini, Ms Vaani.” – Janet Wu",
    "outcome": "I had an injury at my right leg(front area) where the soft tissue was heavily bruised and swollen.I immediately came to Yap Chan Kor’s Treatment Centre and was recommended for a 14-day treatment. Afte...",
    "link": "https://yapchankor.com/testimonials/janet-wu-ankle-and-calf-pain/",
    "length": 677
  },
  {
    "id": "testimonial-233",
    "title": "Wrist Strain Caroline",
    "slug": "wrist-pain",
    "content": "At badminton a drop shot & thats it, experienced pain in wrist. Aware of many physios but decided to give YAPCHANKOR a try cause of non-invasive treatment and guaranteed correction. After 14 sessions managed to recover significant usage of wrist but “a nagging” area/ movement has made me decide perhaps to have it examined deeper before I seek further treatment. Importantly, I feel understood, listened and comfortable with the person attending to me.” – Caroline Choo",
    "outcome": "At badminton a drop shot & thats it, experienced pain in wrist. Aware of many physios but decided to give YAPCHANKOR a try cause of non-invasive treatment and guaranteed correction. After 14 sessions ...",
    "link": "https://yapchankor.com/testimonials/caroline-wrist-strain/",
    "length": 470
  },
  {
    "id": "testimonial-234",
    "title": "Tennis Elbow Aladdin",
    "slug": "back-pain",
    "content": "“I started having tennis elbow when I played tennis and when coached by a pro/semi-pro about 30 years ago. It came back about 10 years ago. I was cured by a doctor who used steroid injection. It came back lately when I hit golf balls on the carpet at the driving range when preparing for a friendly competition. I feel much much better after treatment at YAPCHANKOR. The treatment is thorough, using multiple therapies which are effective. The physiotherapists are also friendly and knowledgeable. Thank you.” – Aladdin Mohamed Li",
    "outcome": "“I started having tennis elbow when I played tennis and when coached by a pro/semi-pro about 30 years ago. It came back about 10 years ago. I was cured by a doctor who used steroid injection. It came ...",
    "link": "https://yapchankor.com/testimonials/aladdin-tennis-elbow/",
    "length": 530
  },
  {
    "id": "testimonial-235",
    "title": "Low Back Pain L.Y. Liew",
    "slug": "back-pain",
    "content": "“I’m exposed to high risk of back pain. The pain attacks when a cough attacks, while I’m bending my body, brushing teeth. I couldn’t bend the body, as according to the physiotherapist, I hurt my nerve. After one hour of searching on the internet, I found YAPCHANKOR clinic and came directly. They suggest a trial version and I feel much more better so I decided to continue to 7 days with their herbal patch, heating, massage and so on. I’m recovered now and could bend normally.” – L.Y. Liew",
    "outcome": "“I’m exposed to high risk of back pain. The pain attacks when a cough attacks, while I’m bending my body, brushing teeth. I couldn’t bend the body, as according to the physiotherapist, I hurt my nerve...",
    "link": "https://yapchankor.com/testimonials/l-y-liew-low-back-pain/",
    "length": 492
  },
  {
    "id": "testimonial-236",
    "title": "Frozen Shoulder Alan Heng",
    "slug": "frozen-shoulder",
    "content": "“In early March 2014, I experienced sharp shoulder pain which persisted despite taking medicine and physiotherapy / acupuncture.\nI then signed up for treatment with YAPCHANKOR under Mr. Ganesh in Subang Jaya. today is the final day and I am almost healed. I am very happy with the treatment under Mr. Ganesh. ” – Alan Heng",
    "outcome": "I then signed up for treatment with YAPCHANKOR under Mr. Ganesh in Subang Jaya. today is the final day and I am almost healed. I am very happy with the treatment under Mr. Ganesh. ” – Alan Heng",
    "link": "https://yapchankor.com/testimonials/alan-heng-frozen-shoulder/",
    "length": 322
  },
  {
    "id": "testimonial-237",
    "title": "Ankle Pain P.T. Murthy",
    "slug": "sprained-ankle",
    "content": "“Pain emanating from left ankle. After applying heat, massaging with ointment and plastering with medication, the pain at the ankle has disappeared.” – P.T. Murthy",
    "outcome": "“Pain emanating from left ankle. After applying heat, massaging with ointment and plastering with medication, the pain at the ankle has disappeared.” – P.T. Murthy",
    "link": "https://yapchankor.com/testimonials/p-t-murthy-ankle-pain/",
    "length": 163
  },
  {
    "id": "testimonial-238",
    "title": "Knee and Ankle Ligament Sprain KH Soon",
    "slug": "knee-pain",
    "content": "“\nI injured my right knee during a badminton game 2 years ago and gone for 3 arthritis injections. Initially it was good but it was only temporary relief. After a year plus the pain came back and this time not only the right knee but my left ankle also felt painful. I got to know YAPCHANKOR (YCK) through their website and give it a try as this is a Chinese Traditional Herb treatment with Physiotherapy. The pain slowly reduced and towards the end of the treatment, I felt much better. Knowing [about] the herb and physical therapy exercise treatment have help reduce pain tremendously.” – Soon Kien Hoe",
    "outcome": "I injured my right knee during a badminton game 2 years ago and gone for 3 arthritis injections. Initially it was good but it was only temporary relief. After a year plus the pain came back and this t...",
    "link": "https://yapchankor.com/testimonials/kh-soon-knee-and-ankle-ligament-sprain/",
    "length": 605
  },
  {
    "id": "testimonial-239",
    "title": "Severe Back Pain Emir Asraf",
    "slug": "back-pain",
    "content": "“\nAbout a year ago, I have encountered severe back pain after each sporting activity where my lower back aches real bad and [I] was unable to walk. This problem comes and goes every month and I have also went for specialist treatment at hospital but to no avail. Once I got to know about YAPCHANKOR centre, I immediately made an appointment and was assisted by Ms. Vaharli. She did really good work during my treatment and [was] very knowledgeable about my lower back problem. Right now I am feeling so much better thanks to Ms. Vaharli and YAPCHANKOR Treatment Centre. Now I can enjoy my sports without any pain. I will surely recommned this centre to others. Thanks :)” – Emir Asraf",
    "outcome": "About a year ago, I have encountered severe back pain after each sporting activity where my lower back aches real bad and [I] was unable to walk. This problem comes and goes every month and I have als...",
    "link": "https://yapchankor.com/testimonials/emir-asraf-severe-back-pain/",
    "length": 684
  },
  {
    "id": "testimonial-240",
    "title": "Elbow Numbness KW Lum",
    "slug": "general",
    "content": "“I experienced numbness and pain at the base of the elbow. After numerous bandages with [the] Chinese medicine, it’s getting the inflammation [to improve] and after the 10th to 13th treatment, it’s healing well. Thank you Vicky for her patience and care treatment.” – Lum KW",
    "outcome": "“I experienced numbness and pain at the base of the elbow. After numerous bandages with [the] Chinese medicine, it’s getting the inflammation [to improve] and after the 10th to 13th treatment, it’s he...",
    "link": "https://yapchankor.com/testimonials/kw-lum-elbow-numbness/",
    "length": 274
  },
  {
    "id": "testimonial-241",
    "title": "Shoulder Tendinitis Ng Ah Lean",
    "slug": "shoulder-pain",
    "content": "“Before I could not lift my right hand but after 14 times treatment I have more or less been able to lift up my hand and am pleased with my treatment. And hopefully with further follow up I should be O.K. Thanks.”  – Ng Ah Lean",
    "outcome": "“Before I could not lift my right hand but after 14 times treatment I have more or less been able to lift up my hand and am pleased with my treatment. And hopefully with further follow up I should be ...",
    "link": "https://yapchankor.com/testimonials/ng-ah-lean-shoulder-tendinitis/",
    "length": 227
  },
  {
    "id": "testimonial-242",
    "title": "Shoulder Pain KP Chung",
    "slug": "back-pain",
    "content": "I had suffered a stiff and tight muscle at my left shoulder and neck that caused me sleepless.This is believed to be caused by incorrect sitting posture & long-time sitting.Then I approached YAPCHANKOR for a  7 days treatment.From day 1 till day 7,not only my pain subdue after 2 days,my muscle also are not stiff anymore.At this moment after the treatment,my left shoulder & neck are back to normal (no stiff,sleep better & exercise able).and the movement are more flexible.P.S the therapist & staff are also friendly.”",
    "outcome": "I had suffered a stiff and tight muscle at my left shoulder and neck that caused me sleepless.This is believed to be caused by incorrect sitting posture & long-time sitting.Then I approached YAPCHANKO...",
    "link": "https://yapchankor.com/testimonials/kp-chung-shoulder-pain/",
    "length": 520
  },
  {
    "id": "testimonial-243",
    "title": "Knee Sport Injury Hanif Imran",
    "slug": "knee-pain",
    "content": "My injury started in December in a friendly match. During my injury period,  I suffered a knee injury. After consulting with the team manager (Sabri), he introduced me to “YAPCHANKOR”. YAPCHANKOR treats me with professionalism and friendliness. Every treatment is done by my physiotherapist, Ganesh. He explains with a very detailed explanation how and what should I do to reduce my injury. After 5 treatments, I can see much improvement in my movement. Now I am fully recovered. Thanks YAPCHANKOR for your expertise in treating me.”",
    "outcome": "My injury started in December in a friendly match. During my injury period,  I suffered a knee injury. After consulting with the team manager (Sabri), he introduced me to “YAPCHANKOR”. YAPCHANKOR trea...",
    "link": "https://yapchankor.com/testimonials/hanif-imran-knee-sport-injury/",
    "length": 533
  },
  {
    "id": "testimonial-244",
    "title": "Shoulder Pain Puan Nabisa",
    "slug": "shoulder-pain",
    "content": "“Saya mengucapkan ribuan terima kasih kepada Pusat Perubatan YAPCHANKOR dan Che’ Norhawa kerana dapat menyelesaikan masalah tangan saya. Saya mengalami sakit yang kuat di tangan kanan hingga tak dapat mengangkat tangan dan tak dapat buat kerja rumah selama 4 bulan. Saya telah berusaha dapatkan rawatan dan terapy di hospital tetapi semuanya tidak berhasil. Akhirnya anak saya membawa saya ke Pusat Perubatan YAPCHANKOR di Subang Jaya. Di sinilah saya mendapat rawatan 14 herbal patching dan terapi setiap hari. Selepas menjalani terapy dan patching, kini saya dapat mengerakkan tangan saya dengan selesa.”",
    "outcome": "“Saya mengucapkan ribuan terima kasih kepada Pusat Perubatan YAPCHANKOR dan Che’ Norhawa kerana dapat menyelesaikan masalah tangan saya. Saya mengalami sakit yang kuat di tangan kanan hingga tak dapat...",
    "link": "https://yapchankor.com/testimonials/puan-nabisa-shoulder-pain/",
    "length": 606
  },
  {
    "id": "testimonial-245",
    "title": "Shoulder Injury John Beckett",
    "slug": "shoulder-pain",
    "content": "“I tore my rotator cuff throwing a ball and for four months, I have been suffering with pain in my bicep and shoulder. I heard about YAPCHANKOR over the internet and since there was a clinic right in my neighbourhood, I decided to give it a try. After 10 sessions, I have had significant improvement and with the exercises I was given to do daily, I feel like my arm is getting stronger and I am rebuilding muscle. It’s a long process!” – John Beckett",
    "outcome": "“I tore my rotator cuff throwing a ball and for four months, I have been suffering with pain in my bicep and shoulder. I heard about YAPCHANKOR over the internet and since there was a clinic right in ...",
    "link": "https://yapchankor.com/testimonials/john-beckett-shoulder-injury/",
    "length": 451
  },
  {
    "id": "testimonial-246",
    "title": "Back Pain Terryson Tan",
    "slug": "back-pain",
    "content": "“I had my lower back pain for more than 7 years.The treatment & especially the physiotherapist here at YAPCHANKOR is amazing, knowledgeable, helpful, kind, patient and most all very effective! And I am very grateful and thankful to God & the therapist that has helped me to recover and taught me many things that helped to heal and improve my problems.Thank you very much with my appreciation & gratitude. Thank you.” Terryson Tan",
    "outcome": "“I had my lower back pain for more than 7 years.The treatment & especially the physiotherapist here at YAPCHANKOR is amazing, knowledgeable, helpful, kind, patient and most all very effective! And I a...",
    "link": "https://yapchankor.com/testimonials/terryson-tan-back-pain/",
    "length": 430
  },
  {
    "id": "testimonial-247",
    "title": "Knee Osteoarthritis Minder Kaur",
    "slug": "knee-pain",
    "content": "“I am Minder Kaur and I had a fall and got injured at one knee then I went for treatment at HUKM. One day my husband saw the YAPCHANKOR advertisement in a magazine and he told me to give a try. So I came to YAPCANKOR. I started treatment for three weeks. After one week the therapist whose name is Vicky started with massage, physiotherapy and the herbal medicine. I improved within three days which I could walk properly without any pain. The YAPCHANKOR herbal has treated and the physiotherapist Miss Vicky had helped me to be normal again. I thank Vicky and Mr Yap with my full heart. “",
    "outcome": "“I am Minder Kaur and I had a fall and got injured at one knee then I went for treatment at HUKM. One day my husband saw the YAPCHANKOR advertisement in a magazine and he told me to give a try. So I c...",
    "link": "https://yapchankor.com/testimonials/minder-kaur-knee-osteoarthritis/",
    "length": 589
  },
  {
    "id": "testimonial-248",
    "title": "Lumbar Spondylosis Muhammad Thurai",
    "slug": "general",
    "content": "“I was suffering Lumbar Spondylosis for the past 2 months and was on pain killers since then. On 3rd February the pain was so unbearable that I had to seek treatment from YAPCHANKOR Pain Treatment Centre in Subang Jaya which the nearest to my house as our Panel Clinic was closed from the Chinese New Year. After the 21 days comprehensive pain treatment with medication and physiotherapy, I can only describe the outcome as miraculous….the pain had indeed disappeared. I can now walk and do my prayers with no pain. The physiotherapist Cik Vaharli who was assigned to me did an excellent job with upmost professionalism and understanding. To Cik Vaharli I can only say….Thank you very much for taking away the pain I was suffering from. May Allah’s blessings be with u always.” – Muhammad Thurai",
    "outcome": "“I was suffering Lumbar Spondylosis for the past 2 months and was on pain killers since then. On 3rd February the pain was so unbearable that I had to seek treatment from YAPCHANKOR Pain Treatment Cen...",
    "link": "https://yapchankor.com/testimonials/muhammad-thurai-lumbar-spondylosis/",
    "length": 795
  },
  {
    "id": "testimonial-249",
    "title": "Spinal Fracture Ngan Bee Hong",
    "slug": "back-pain",
    "content": "Ngan Bee Hong, suffered spinal fractures, located at her lower back (L3-L5), after a traffic accident. Before treatment at YAPCHANKOR, she could not work, and suffered extreme pain. Now she’s walking again!\n21-session Treatment Plan",
    "outcome": "21-session Treatment Plan",
    "link": "https://yapchankor.com/testimonials/ngan-bee-hong-spinal-fracture/",
    "length": 232
  },
  {
    "id": "testimonial-250",
    "title": "Back Pain Dexter",
    "slug": "back-pain",
    "content": "Dexter suffered from back pain for few months. Today he is pain free",
    "outcome": "Dexter suffered from back pain for few months. Today he is pain free",
    "link": "https://yapchankor.com/testimonials/dexter-back-pain/",
    "length": 68
  },
  {
    "id": "testimonial-251",
    "title": "Spondylolithesis Ann Beckett",
    "slug": "back-pain",
    "content": "“\nA year and a half ago, I was diagnosed with degenerative spondilolesthis, spinal stenosis and degenerative discs from L2/3 to L5 S1. At the time, I was given 2 options, conservative treatment or surgery. I opted for conservative. My back and leg pain began about 4 years ago during which I have undergone many treatments and therapies such as massage therapy, acupuncture, cupping, physiotherapy, chiropractic, traction, intense daily exercise in the gym and swimming daily ~ 2km. I even lost 15 kilo in an effort to decrease the pressure on my spine but nothing was resonating. In fact my pain seemed to be getting worse. YAPCHANKOR was my last hope before resorting to surgery for decompression and instrumental fusion. I was consuming a lot of medication such as [unclear] and Celebrex and didn’t want to do this for the rest of my life.\nAt first I was very skeptical that this treatment would be any different but I had to give it a try. My therapist Ganesh Vijayam seemed to understand my problem and set out a course of treatment to prove to me that YAPCHANKOR would be different. He asked me to keep a daily log of my activities to help determine if I was doing something to aggravate my problem. He showed me several exercises which have made a world of difference to managing…\nAfter 10 sessions, my pain level has gone from an 8 or 9 to a 2 or 3 – something I can now manage. And that is without any medication! I consider this a victory! Walking great distances is still a problem for me but by stretching before and after it’s not as bad.\nI must give credit to my therapist Ganesh for taking the time to listen and try to understand my pain and work with me to improve my situation. I was never made to feel like just another number. For the first time I felt that someone truly cared. Thank you YAPCHANKOR. You now have a convert!” – Ann Beckett",
    "outcome": "I must give credit to my therapist Ganesh for taking the time to listen and try to understand my pain and work with me to improve my situation. I was never made to feel like just another number. For t...",
    "link": "https://yapchankor.com/testimonials/ann-beckett-spondylolithesis/",
    "length": 1859
  },
  {
    "id": "testimonial-252",
    "title": "Thigh Fracture Lew Ah Gan",
    "slug": "back-pain",
    "content": "In October 2010, I was traveling to KL from Melaka. There were 5 of us in the car, I was the driver. Suddenly my car just stopped on the highway. I quickly asked my wife and son to help push the car to the side, but before I could do anything, I saw 2 huge lights from the back coming fast. I tried to run but couldn’t make it in time. The next thing I remember I was waking up in the hospital with two broken legs…my left leg was broken into 3 pieces, the right leg into 2.\nAfter the operation, I was hospitalised for 38 days. When I was discharged, I still could not walk. I was bedridden for 6 months until around April 2011, when a friend of mine, Nisha, insisted that I go to KL to see YAPCHANKOR. Until then, I had only seen physios, but even doing more than the suggested exercises did not help me to walk.\nAfter the 1st week of treatment at YAPCHANKOR, I was asked to walk. I was very nervous, but I could actually take 3-4 steps. My wife was stunned. In fact, when we went home, we shed tears…we were so happy. I had given up hope, my old doctor told me it was “God’s will” whether I would walk again. After 3 weeks of treatment, and also doing the exercises recommended to strengthen my legs, I went back to work in May again. After 6 months not working! And within a month I was able to walk again with crutches.\nToday, I don’t need any walking aids.I would highly recommend the treatment and medication at YAPCHANKOR and in fact I recommended a friend of mine who was suffering from a spinal injury and he has now recovered.",
    "outcome": "Today, I don’t need any walking aids.I would highly recommend the treatment and medication at YAPCHANKOR and in fact I recommended a friend of mine who was suffering from a spinal injury and he has no...",
    "link": "https://yapchankor.com/testimonials/lew-ah-gan-thigh-fracture/",
    "length": 1536
  },
  {
    "id": "testimonial-253",
    "title": "Shoulder Pain Peter Lim",
    "slug": "shoulder-pain",
    "content": "Right shoulder started to have some sharp pains recently. I appreciate  Joy’s patience and clear explanation of those muscles involved in my right hand shoulder daily movement that could have caused the pains. After doing some easy but specific exercise thought by Joy, my right shoulder is now free from these pains",
    "outcome": "Right shoulder started to have some sharp pains recently. I appreciate  Joy’s patience and clear explanation of those muscles involved in my right hand shoulder daily movement that could have caused t...",
    "link": "https://yapchankor.com/testimonials/peter-lim-shoulder-pain/",
    "length": 316
  },
  {
    "id": "testimonial-254",
    "title": "Shoulder Pain Chan Pack Yang",
    "slug": "shoulder-pain",
    "content": "I am a housewife who play some golf during my free time. I may have hurt my shoulder while playing golf.\nAfter my few visits to YAPCHANKOR for treatments I feel much better and hope to resume my routine soon",
    "outcome": "After my few visits to YAPCHANKOR for treatments I feel much better and hope to resume my routine soon",
    "link": "https://yapchankor.com/testimonials/chan-pack-yang-shoulder-pain/",
    "length": 207
  },
  {
    "id": "testimonial-255",
    "title": "Ankle Sprain Koh Su Chem",
    "slug": "sprained-ankle",
    "content": "I have sprained my ankle 3 weeks ago. On that day itself I quickly come to Yap Chan Kor for treatment. Physiotherapist suggested for the treatment plan which is 7 sessions. Surprisingly, till the 6th session, I recovered and my ankle no more pain and can walk or run as normal.",
    "outcome": "I have sprained my ankle 3 weeks ago. On that day itself I quickly come to Yap Chan Kor for treatment. Physiotherapist suggested for the treatment plan which is 7 sessions. Surprisingly, till the 6th ...",
    "link": "https://yapchankor.com/testimonials/koh-su-chem-ankle-sprain/",
    "length": 277
  },
  {
    "id": "testimonial-256",
    "title": "Ankle Sprain Suadah",
    "slug": "sprained-ankle",
    "content": "“Got injured on 2nd June 2016 coz I fell down stairs. Went to clinic and the doc said it was an ankle sprain. Will take 2 weeks to recover but unfortunately it wasn’t ok till the 3rd week. Google any physio treatment and found Yap Chan Kor. Making appointment and got the treatment by Mr. Azlan. He is super duper best! Gave me some advice and best treatment for me to recover. After 10 sessions with him, now I have recovered from pain and can walk like a model! So me would like to say a huge thank you to Yap Chan Kor esp Mr. Azlan for all your help in the physio treatment over the last few weeks with my recovery and support me through my treatment. Will recommend to others, for sure. THANK YOU”\n#anklesprain #chronicspraintreatment #yapchankor #yck #chinesemedicine #alternativetreatment #physiotherapy #shahalam #selangor",
    "outcome": "“Got injured on 2nd June 2016 coz I fell down stairs. Went to clinic and the doc said it was an ankle sprain. Will take 2 weeks to recover but unfortunately it wasn’t ok till the 3rd week. Google any ...",
    "link": "https://yapchankor.com/testimonials/suadah-ankle-sprain/",
    "length": 829
  },
  {
    "id": "testimonial-257",
    "title": "Calf Strain Faizal",
    "slug": "sprained-ankle",
    "content": "“I was an athlete, and still maintaining this lifestyle. Over these years, after exerting too much stress and much of leaving untreated injuries, the muscles and joints are starting to take its toll, especially at the calf and ankle region. After 10 sessions, the pains had gone to a minimum. There are even injuries that I never knew existed until tests were conducted. To my surprise, these treatments had done more good than I could ever imagined. I am going to spread this brand to my neighbours. It’s really something, NICE!” – Faizal\n#calfpain #calfstrain #yapchankor #shahalam #yck #chinesemedicine #physiotherapy #anklesprains #sportsinjuries #chronicpain",
    "outcome": "#calfpain #calfstrain #yapchankor #shahalam #yck #chinesemedicine #physiotherapy #anklesprains #sportsinjuries #chronicpain",
    "link": "https://yapchankor.com/testimonials/faizal-calf-strain/",
    "length": 663
  },
  {
    "id": "testimonial-258",
    "title": "Meniscus Tear Zul",
    "slug": "knee-pain",
    "content": "“Assalamualaikum, saya telah injured di bahagian lutut punca jatuh ketika bersukan dan sata telah mengalami sakit lutut 4 tahun lepas. Sebelum saya datang ke YapChanKor saya susah hendak berjalan kerana dua-dua belah lutut saya sakit. Selepas beberapa tahun saya sakit, saya telah pergi ke YAPCHANKOR untuk mendapatkan rawatan. Saya telah mendapat rawatan sebanyak 21 kali. Alhamdulillah saya boleh berjalan seperti biasa tanpa rasa sakit seperti dulu. Thank you En. Azlan kerana merawat saya sebanyak 21 kali.” – Zul\n#MeniscusTear #MeniscusInjury #KneePain #YapChanKor #SportsInjuryTreatment #ChineseMedicine #AlternativeTreatment #Malaysia",
    "outcome": "“Assalamualaikum, saya telah injured di bahagian lutut punca jatuh ketika bersukan dan sata telah mengalami sakit lutut 4 tahun lepas. Sebelum saya datang ke YapChanKor saya susah hendak berjalan kera...",
    "link": "https://yapchankor.com/testimonials/zul-meniscus-tear/",
    "length": 641
  },
  {
    "id": "testimonial-259",
    "title": "Plantar Fasciitis Wan Noraishah",
    "slug": "plantar-fasciitis",
    "content": "“Saya mengalami Plantar Fasciitis dimana saya berasa sakit di bahagian tumit kaki kiri. Saya mengetahui mengenai Yap Chan Kor melalui suami saya, dan menyarankan agar mendapatkan rawatan di sini sebagai alternatif suntikan steroid. Terima kasih kepada Cik Najihah, fisioterapi yang telah memantau perkembangan rawatan yang telah diberikan. Saya telah belajar ilmu baru dalam menjaga atau meringankan sakit tumit, penggunaan selipar atau kasut yang lebih baik, latihan rejangan serta rehat secukupnya pada kaki saya. Frankly, saya amat menyukai the patch medicine as it soothe the pain. Malah, ia menghilangkan sekahan di kaki ?\nThanks to Cik Najihah and YapChanKor!” – Wan Noraishah\n#plantarfasciitis #heelpaintreatment #yapchankor #chineseMedicine #physiotherapy #ShahAlam #Malaysia",
    "outcome": "Thanks to Cik Najihah and YapChanKor!” – Wan Noraishah",
    "link": "https://yapchankor.com/testimonials/wan-noraishah-plantar-fasciitis/",
    "length": 783
  },
  {
    "id": "testimonial-260",
    "title": "Heel Pain Zahrul",
    "slug": "plantar-fasciitis",
    "content": "“I got to know Yap Chan Kor from the internet. I had this shooting pain around my heel area and especially at the centre part of my heel area and especially at the centre part of my heel. I was suspected to have a heel spur.\nAfter about 7 sessions of treatment, the pain around the heel has gone. I felt better even though the pain caused by the spur is still there but not as severe as before, perhaps due to the ultrasound treatment that increases the collagen development. I have learned a few stretching exercises to improve the muscle pain and I will practice the exercise when ever needed. Thanks to Yap Chan Kor and I will surely recommend the treatment to my friends if any of them has any problem with their muscle or joints.” – Zahrul\n#heelpain #bonespurinheel #heelspur #yapchankor #yck #physiotherapist #subangjaya",
    "outcome": "After about 7 sessions of treatment, the pain around the heel has gone. I felt better even though the pain caused by the spur is still there but not as severe as before, perhaps due to the ultrasound ...",
    "link": "https://yapchankor.com/testimonials/zahrul-heel-pain/",
    "length": 826
  },
  {
    "id": "testimonial-261",
    "title": "Frozen Shoulder Amy",
    "slug": "frozen-shoulder",
    "content": "“Previously, I had some difficulty lifting my right arm, there was acute pain on my right shoulder and stiffness in my neck. I had sought treatment elsewhere but the problem persisted.\nNow after a few rounds of treatment at YapChanKor, I can gladly say all my pain are gone. I would also like to thank Vaharli my physiotherapist. She is superb and knows her job well. She gave clear explanations about the cause of my problem and provided me with some professional advice. She is truly an asset to the Company.” – Amy\n#FrozenShoulderResolved #YapChanKor #ShoulderPain #ChineseMedicine #Physiotherapy #FusionTreatment #Ampang #Malaysia #YCK",
    "outcome": "Now after a few rounds of treatment at YapChanKor, I can gladly say all my pain are gone. I would also like to thank Vaharli my physiotherapist. She is superb and knows her job well. She gave clear ex...",
    "link": "https://yapchankor.com/testimonials/amy-frozen-shoulder/",
    "length": 639
  },
  {
    "id": "testimonial-262",
    "title": "Knee Osteoarthritis Esah",
    "slug": "knee-pain",
    "content": "“Saya Esah bt Ses mengadapi sakit lutut sejak bulan Disember 2015. Saya berjumpa doktor mengatakan yang saya mengadapi OA. Kemudian doktor memasukkan gel di lutut kanan saya tetapi selepas beberapa bulan kemudian, sakit lutut masih sama. Selepas pada itu, menantu syorkan membuat rawatan di Yap Chan Kor. Di sini saya menerima rawatan selama 21 sesi. Sebelum ini setiap malam kaki saya berasa berdenyut dan sakit, tetapi selepas menerima rawatan di sini, sakit lutut, berdenyut dah berkurangan. Terima kasih Yap Chan Kor.” – Esah\n#kneeOAtreatment #osteoarthritis #ChineseMedicine #YAPCHANKOR #ShahAlam #paintreatmentcentre #kneepain",
    "outcome": "#kneeOAtreatment #osteoarthritis #ChineseMedicine #YAPCHANKOR #ShahAlam #paintreatmentcentre #kneepain",
    "link": "https://yapchankor.com/testimonials/esah-knee-osteoarthritis/",
    "length": 632
  },
  {
    "id": "testimonial-263",
    "title": "Chronic Neck Pain Azlina",
    "slug": "back-pain",
    "content": "“I have been diagnosed as having chronic neck pain due to long hours at the office working on a laptop. Although the diagnosis was correct, the subsequent physio treatments did not treat the problem. I continued to suffer great pain, affecting my work, rest and sleep.\nWhen I found out about YCK, to my great surprise, comprehensive explanation was given by the physiotherapist Najihah, on my condition. She even informed me there was slight impingement. I was very satisfied as I understood my conditions clearly and due to that, the treatment prescribed to me made complete sense as well.\nAfter 20 sessions, I have made vast improvements. Progress was already visible even after about 10 sessions. I am so relieved and happy that I finally got my life back as I had initially thought that my condition cannot be treated.” – Azlina\n#chronicneckpaintreatment #successstory #yapchankor #chronicneckpain #physiotherapy #AlternativeMedicine #ChineseMedicine #shahAlam",
    "outcome": "#chronicneckpaintreatment #successstory #yapchankor #chronicneckpain #physiotherapy #AlternativeMedicine #ChineseMedicine #shahAlam",
    "link": "https://yapchankor.com/testimonials/azlina-chronic-neck-pain/",
    "length": 964
  },
  {
    "id": "testimonial-264",
    "title": "Foot Injury Bruce",
    "slug": "general",
    "content": "“I was having a foot injury for quite some time and seeing orthopaedics for treatment, but the result was far from satisfactory. Then, I decided to surf the net and came across YAPCHANKOR, which is specialising in pain treatment. I went to Ampang branch and met their physiotherapist, Susilawati, who explained thoroughly the kind of treatment required.\nUnder her care, the pain I felt was disappearing and now I am able to put [my foot] down to walk again.” – Bruce L\n#FootPain #FootInjury #YCK #ChineseMedicine #Physiotherapy #YAPCHANKOR #Selangor #Ampang",
    "outcome": "#FootPain #FootInjury #YCK #ChineseMedicine #Physiotherapy #YAPCHANKOR #Selangor #Ampang",
    "link": "https://yapchankor.com/testimonials/bruce-foot-injury/",
    "length": 557
  },
  {
    "id": "testimonial-265",
    "title": "Swollen Knee Salbia",
    "slug": "knee-pain",
    "content": "“Mulanya, lutut bengkak.\nSakit bertahun-tahun menahan. Sekarang sakitnya dah banyak berkurang.\nDari tahap 7 ke tahap 2. Kaki dah banyak kurang bengkaknya. Terasa ringan. Senaman pun bagus untuk terus diamalkan. Terima kasih pada Najihah serta Yap Chan Kor.” – Salbia\n#SakitLutut #KneePain #LututBengkak #yapchankor #yck #ChineseMedicine #AlternativeMedicine #Physiotherapy #ShahAlam #Selangor #kneetreatment",
    "outcome": "#SakitLutut #KneePain #LututBengkak #yapchankor #yck #ChineseMedicine #AlternativeMedicine #Physiotherapy #ShahAlam #Selangor #kneetreatment",
    "link": "https://yapchankor.com/testimonials/salbia-swollen-knee/",
    "length": 407
  },
  {
    "id": "testimonial-266",
    "title": "Frozen Shoulder Vasu",
    "slug": "frozen-shoulder",
    "content": "“Due to over exercise I had a muscle torn on my left arm eventually turn out to frozen shoulder. I have taken treatment at other places and also physio at GH Klang. I had this problem before I came to YapChanKor for almost 4 months. The twenty days treatment has helped to overcome some level of movements of my left arm. Though it was not 100% but it has helped me certain level. Appreciate physiotherapist Najihah for the dedicated service.” – Vasu\n#frozenshoulder #bahubeku #yapchankor #YCK #Physiotherapy #ChineseMedicine #kungfumedicine #frozenshouldertreatment #stiffshoulder #shahalam",
    "outcome": "#frozenshoulder #bahubeku #yapchankor #YCK #Physiotherapy #ChineseMedicine #kungfumedicine #frozenshouldertreatment #stiffshoulder #shahalam",
    "link": "https://yapchankor.com/testimonials/vasu-frozen-shoulder/",
    "length": 591
  },
  {
    "id": "testimonial-267",
    "title": "Knee Osteoarthritis Rasilah",
    "slug": "knee-pain",
    "content": "“I have been suffering osteoarthritis for 10 years. I did arthroscopy 8 years ago. I went for knee injections several times. The pain still persists despite spending quite a sum. I discover Yap Chan Kor through Facebook and decided to try the alternative treatment. The therapist is good, makes me understand the problem I am facing and coaches me to continue doing the exercises at home. The exercises help me a lot to reduce the pain. The herbal patch is good.\nMy knees are not swelling anymore. I can sleep well now.\n” – Rasilah\n#kneeOA #osteoarthritis #alternativetreatment #chineseMedicine #physiotherapy #KneePain #SwollenKnees #yapchankor #yck #ampang",
    "outcome": "#kneeOA #osteoarthritis #alternativetreatment #chineseMedicine #physiotherapy #KneePain #SwollenKnees #yapchankor #yck #ampang",
    "link": "https://yapchankor.com/testimonials/rasilah-knee-osteoarthritis/",
    "length": 658
  },
  {
    "id": "testimonial-268",
    "title": "Medial Meniscus Knee Injury Azman",
    "slug": "knee-pain",
    "content": "“Started with left knee pain and left knee meniscus injury inhibiting lateral movement and also squatting  and bending knees. Now I can pray in a much more comfortable situation. Can also sit cross-legged  which I could not do before.” – Azman\n#KneePain #TennisInjury #MedialMeniscusInjury #YapChanKor #YCK #kneetreatment #chinesemedicine #physiotherapy #malaysia #shahalam",
    "outcome": "#KneePain #TennisInjury #MedialMeniscusInjury #YapChanKor #YCK #kneetreatment #chinesemedicine #physiotherapy #malaysia #shahalam",
    "link": "https://yapchankor.com/testimonials/azman-medial-meniscus-knee-injury/",
    "length": 373
  },
  {
    "id": "testimonial-269",
    "title": "Herniated Disc Nor Aza",
    "slug": "back-pain",
    "content": "“I was diagnosed with Herniated Disc L4/L5 which protruded my right leg nerve. I had constant lower back pain and right leg felt heavy. In Sept 2016 the pain became unbearable on my right leg. Went to Hospital for steroid injection at the slipped disc. The pain reduced a bit. Found YCK on internet and decided to have treatment for 21 sessions which involve herbal patch, specific exercises, massage, infrared.\nThanks to therapist Miss Ain who attended me with patience and moral support, which have helped me to overcome my pain and sadness. I feel much better now.” – Nor Aza S.\n#herniatedDisc #SlippedDisc #BackPain #Numbness #YAPCHANKOR #YCK #Setapak #ChineseMedicine #HerbalPatch #PainTreatment #KualaLumpur #Physiotherapy",
    "outcome": "Thanks to therapist Miss Ain who attended me with patience and moral support, which have helped me to overcome my pain and sadness. I feel much better now.” – Nor Aza S.",
    "link": "https://yapchankor.com/testimonials/nor-aza-herniated-disc/",
    "length": 728
  },
  {
    "id": "testimonial-270",
    "title": "Knee Osteoarthritis Robiah",
    "slug": "knee-pain",
    "content": "” – Dalam tempoh perubatan selama 1 minggu, kesan rawatan masih belum dapat dirasai. Kesakitan masih terasa tapi agak berkurang dari sebelumnya.\n–\nMasa rawatan masuk minggu kedua, kesan rawatan sudah mendatangkan kesan, kesakitan makin berkurang. Alhamdulillah dah nampak perbezaan sebelum dan selepas buat rawatan.\nSekian laporan saya.” – Robiah\n#kneeosteoarthritis #OA #YAPCHANKOR #ShahAlam #SakitLutut #ChineseMedicine #physiotherapy",
    "outcome": "#kneeosteoarthritis #OA #YAPCHANKOR #ShahAlam #SakitLutut #ChineseMedicine #physiotherapy",
    "link": "https://yapchankor.com/testimonials/robiah-knee-osteoarthitis/",
    "length": 436
  },
  {
    "id": "testimonial-271",
    "title": "Shoulder Pain Sim",
    "slug": "frozen-shoulder",
    "content": "“I have my shoulder pain problem for 5 – 6 months. When I got to know that I may have a frozen shoulder, I googled to look for recommended treatment. It was then I came to know YapChanKor. After a few sessions, my shoulder and arm became more flexible, pain also lessened. After my 14 sessions of patch treatment, even though my shoulder still feels tense in the morning, but the pain is very minimal already. Thanks to Vani. She’s a very responsible and capable physiotherapist.” – Sim\n#FrozenShoulderTreatment #ChineseMedicine #Physiotherapy #YAPCHANKOR #YCK #ShahAlam #Malaysia #PainTreatment #shoulderinjury #ShoulderTreatment #StiffShoulders",
    "outcome": "“I have my shoulder pain problem for 5 – 6 months. When I got to know that I may have a frozen shoulder, I googled to look for recommended treatment. It was then I came to know YapChanKor. After a few...",
    "link": "https://yapchankor.com/testimonials/sim-shoulder-pain/",
    "length": 646
  },
  {
    "id": "testimonial-272",
    "title": "Sakit lutut Zamani",
    "slug": "knee-pain",
    "content": "Encik Zamani suffered from knee pain (sakit lutut), which prevented him from doing his prayers properly. He had to sit on a chair to perform his solat prayers, instead of kneeling. We are glad that after our treatment, he has been able to go back to doing his prayers normally, and that his restricted and painful movement before has been relieved. Thanks for sharing your story Encik Zamani and for the recommendations!\n#sakitLutut #sakitmasasolat #rawatanlutut #solat #yapchankor #rawatanalternatif #fisioterapi #ubatCina #TCM #kneepain #kneetreatment  #ShahAlam #Selangor #Malaysia #LeadingAlternativeTreatment #Muscle&JointPain",
    "outcome": "Encik Zamani suffered from knee pain (sakit lutut), which prevented him from doing his prayers properly. He had to sit on a chair to perform his solat prayers, instead of kneeling. We are glad that af...",
    "link": "https://yapchankor.com/testimonials/zamani-sakit-lutut/",
    "length": 631
  },
  {
    "id": "testimonial-273",
    "title": "ACL Injury Nurbaizura",
    "slug": "knee-pain",
    "content": "Ms. Nurbaizura suffered from an ACL injury in her knee and fortunately, our treatment saved her from an invasive knee surgery that would also have cost her many thousands of ringgit. We use our proven Chinese medicine patches to help with the pain and inflammation and combine that with physiotherapy. This treatment is absolutely unique to us and has helped thousands of people since 1979. Thank you for sharing your story Ms. Nurbaizura and happy hiking!\n#aclinjury #noninvasivetreatment #alternativemedicine #yapchankor #provenchinesemedicine #kneeinjury #ampang #kualalumpur #physiotherapist #physicaltherapyfusion #tcm #traditionalchinesemedicine",
    "outcome": "Ms. Nurbaizura suffered from an ACL injury in her knee and fortunately, our treatment saved her from an invasive knee surgery that would also have cost her many thousands of ringgit. We use our proven...",
    "link": "https://yapchankor.com/testimonials/nurbaizura-acl-injury/",
    "length": 651
  },
  {
    "id": "testimonial-274",
    "title": "De Quervain Wendy",
    "slug": "wrist-pain",
    "content": "“I had been suffering pain at the base of my right thumb (“de Quervain tetenosynovitis”) for almost 1 year. I can’t squeeze a face towel and lift things up but thanks to the treatment plan which I received at Yap Chan Kor Pain Treatment Centre @ Ampang Waterfront.\nI first met my therapist Mytily in January 2017 and was advised on the treatment plans which include physiotherapy and herbal patches, thereafter I decided to sign up the treatment package plans. After few sessions of treatment plans, I can see the improvement and feel very much better after that.\nMytily has helped me to learn and manage my pain. She has given me the advice on efficient stretches which helped in improving my overall wellness and providing much relief. I am now almost fully recovered but need to be careful and to consistently practice all the stretches.\nI wish to express my sincere gratitude to Yap Chan Kor Pain Treatment Centre on their systematic physio treatments and big thank you to my therapist, Mytily who is a friendly and down-to-earth person. She is an excellent therapist, concerned for her patients and has knowledge on what works best.” – Wendy\n#WristPain #DeQuervainTreatment #yck #chinesemartialartsmedicine #chinesemedicine #TCM #physicaltherapist #ampang #yapchankor #tetenosynovitis #testimonial #wristpainrecovery\nI wish to express my sincere gratitude to Yap Chan Kor Pain Treatment Centre on their systematic physio treatments and big thank you to my therapist, Mytily who is a friendly and down-to-earth person",
    "outcome": "“I had been suffering pain at the base of my right thumb (“de Quervain tetenosynovitis”) for almost 1 year. I can’t squeeze a face towel and lift things up but thanks to the treatment plan which I rec...",
    "link": "https://yapchankor.com/testimonials/wendy-de-quervain-tenosynovitis/",
    "length": 1521
  },
  {
    "id": "testimonial-275",
    "title": "Shoulder Pain Alex",
    "slug": "back-pain",
    "content": "“My name is Alex, age 55. I had a very bad acute pain from my left shoulder/arm down toward the elbow area. Due to my work nature, sometimes I need to lift heavy stuff, coped with bad sleeping habit. The pain became unbearable. I came to Yap Chan Kor, Jalan Ampang branch for consultation and treatments. (Chinese) physician Mr Yap had recommended to me a 21 session treatment course, mainly with herbal, physiotherapy and various machine aided treatments.\n(Physiotherapist) Cik Vaharli has been very professional and friendly throughout my whole 21 sessions of treatments. Sound advice was given to me on how to relax and to strengthen back my arm muscles.\nMaybe due to my age and long history of this left arm, I would say I’m 95% recovered. Still there is a little weakness in the muscles but I’m happy that I’m able to lift my left arm and elbow with ease.\nA big thanks to you all for providing such professional services.” – Alex\n#yapchankor #shoulderpaintreatment #shoulderrecovery #numbness #badsleepinghabits #stiffshoulder #frozenshoulder #liftingheavyitems #treatmentregimen #ampang #kualalumpur #selangor #chinesemedicine #chinesemartialartsmedicine #physiotherapy #fusionphysio",
    "outcome": "Maybe due to my age and long history of this left arm, I would say I’m 95% recovered. Still there is a little weakness in the muscles but I’m happy that I’m able to lift my left arm and elbow with eas...",
    "link": "https://yapchankor.com/testimonials/alex-shoulder-pain/",
    "length": 1189
  },
  {
    "id": "testimonial-276",
    "title": "Tennis Elbow Pain Krystabel",
    "slug": "sprained-ankle",
    "content": "“I injured my elbow from playing volleyball and had pain every time I extended it fully. I had visited other physio centres but did not like having to sign up for long drawn and expensive courses. Then, I found YCK online which is affordable for a student like myself and has very good physiotherapists who will fully explain your problems and pain. Plus what exactly the different treatment methods do. I will be returning to treat my ankle here too. I highly recommend physiotherapists Sangitha and Anitha.” – KK\n#Tenniselbowtreatment #Affordablephysiotherapy #YCK #YAPCHANKOR #SubangJayaSS15 #Selangor #Chinesemedicine #Chinesemartialartsmedicine #40YearsExperience #Malaysia’sLeadingAlternativeTreatment #paintreatment #physiotherapy #physiotherapist",
    "outcome": "#Tenniselbowtreatment #Affordablephysiotherapy #YCK #YAPCHANKOR #SubangJayaSS15 #Selangor #Chinesemedicine #Chinesemartialartsmedicine #40YearsExperience #Malaysia’sLeadingAlternativeTreatment #paintr...",
    "link": "https://yapchankor.com/testimonials/krystabel-tennis-elbow-pain/",
    "length": 754
  },
  {
    "id": "testimonial-277",
    "title": "Knee Osteoarthritis Khashiyah",
    "slug": "knee-pain",
    "content": "“I am very happy to have discovered YAPCHANKOR. After having several treatments here, I noticed that my knee movement is smoother.\nOther pains have been removed and I am now concentrating on improving the muscles around the area with the hope that I will be able to avoid Total Knee Replacement procedure due May 2018.” – Khashiyah\n#kneeOsteoarthritis #kneepaintreatment #TKRalternative #TotalkneereplacementAlternative #provenChinesemedicine #alternativetreatment #paintreatment #yck #yapchankor #ampang #selangor",
    "outcome": "#kneeOsteoarthritis #kneepaintreatment #TKRalternative #TotalkneereplacementAlternative #provenChinesemedicine #alternativetreatment #paintreatment #yck #yapchankor #ampang #selangor",
    "link": "https://yapchankor.com/testimonials/khashiyah-knee-osteoarthritis/",
    "length": 514
  },
  {
    "id": "testimonial-278",
    "title": "Calf pain Peter",
    "slug": "general",
    "content": "Peter pulled a muscle in his left leg, causing severe spasms and calf pain. With our treatment, we were able to reduce the pain and spasms relatively quickly, using our proven Chinese medicine patches and physiotherapy modalities. Thank you for your testimonial Peter!\n“I pulled and strained a muscle in my left calf. When I came to YCK, the muscle was very stiff and painful. After the first treatment, the pain subsided and muscle was less stiff. After 2 to 3 treatments, the pain was substantially reduced. After 7 treatments, the pain is almost completely gone and I consider it 95-98% healed.\nThank you to Janna who administered the therapy for me. She is friendly and professional – I would recommend her. Thank you.” – Peter\n#calfmusclestrain #calfmusclepull #calfpain #musclestraintreatment #yapchankor #yck #subangjayass15 #testimonial #alternativetreatment #chinesemedicine #provenchinesemedicine #physiotherapy",
    "outcome": "Peter pulled a muscle in his left leg, causing severe spasms and calf pain. With our treatment, we were able to reduce the pain and spasms relatively quickly, using our proven Chinese medicine patches...",
    "link": "https://yapchankor.com/testimonials/peter-calf-pain/",
    "length": 921
  },
  {
    "id": "testimonial-279",
    "title": "Arm and Shoulder Pain Chow",
    "slug": "back-pain",
    "content": "After chopping down a tree, Mr. Chow suffered from intense arm and shoulder pain on his right side. He came to see us almost immediately, which definitely helps with the recovery. Within 2 sessions, the pain level dropped drastically and by the end of just 10 sessions completed in 2 weeks, he was back on his feet and had regained normal function and movement in his arm. The moral of the story is to treat you muscle and joint conditions earlier rather than later, because they usually never go away and may turn into chronic conditions.\n“Injury to arm and shoulder while cutting a tree. Right arm and shoulder was very painful due to some muscle tear. After the first 2 sessions, the pain subsided significantly. By the end of the treatment, it was completely pain free. Very grateful to have received the right treatment here. ” – Chow\n#armandshoulderpain #treatmentfor armpain #shoulderinjurytreatment #yapchankor #yck #alternativetreatment #chinesemedicine #physiotherapy #shahalam #selangor #malaysia #paintreatmentcentre\nAfter chopping down a tree, Mr. Chow suffered from intense arm and shoulder pain on his right side. He came to see us almost immediately, which definitely helps with the recovery. Within 2 sessions, the pain level dropped drastically and by the end of just 10 sessions completed in 2 weeks, he was back on his feet and had regained normal function and movement in his arm. The moral of the story is to treat you muscle and joint conditions earlier rather than later, because they usually never go away and may turn into chronic conditions.",
    "outcome": "After chopping down a tree, Mr. Chow suffered from intense arm and shoulder pain on his right side. He came to see us almost immediately, which definitely helps with the recovery. Within 2 sessions, t...",
    "link": "https://yapchankor.com/testimonials/chow-arm-and-shoulder-pain/",
    "length": 1568
  },
  {
    "id": "testimonial-280",
    "title": "Knee and calf pain Idris",
    "slug": "knee-pain",
    "content": "Idris fell in a motorcycle accident that left huge bruises and swelling in his knee and calf. He could not bend his knee and his pain level was extremely high. After he came to see us, within 10 sessions, he saw amazing recovery and he even believes that without our treatment, it would have taken him 3 to 4 months to recover, instead of 1!\nThanks Idris!\n“Kemalangan motosikal / terjatuh dari moto mencederakan lutut dan betis menyebabkan bengkak yang besar. Pada mulanya, lutut memang tidak boleh bend langsung. Sakit pada betis juga sangat sakit pada awalnya, namun selepas 10 sesi bersama YapChanKor, betis juga sudah kurang rasa sakit dan semakin pulih.\nDalam masa 1 bulan hampir pulih daripada kecederaan yang mungkin akan mengambil masa 3-4 bulan. Kini lutut dan betis cuma memerlukan exercise sahaja untuk pulih sepenuhnya.” – Ahmad Idris\n#motorcycleaccidentrecovery #yapchankor #kemalanganmotosikal #kneepain #calfpain #ampang\nIdris fell in a motorcycle accident that left huge bruises and swelling in his knee and calf. He could not bend his knee and his pain level was extremely high. After he came to see us, within 10 sessions, he saw amazing recovery and he even believes that without our treatment, it would have taken him 3 to 4 months to recover, instead of 1!\r\n\r\nThanks Idris!",
    "outcome": "Idris fell in a motorcycle accident that left huge bruises and swelling in his knee and calf. He could not bend his knee and his pain level was extremely high. After he came to see us, within 10 sessi...",
    "link": "https://yapchankor.com/testimonials/idris-knee-and-calf-pain/",
    "length": 1294
  },
  {
    "id": "testimonial-281",
    "title": "Swollen feet Foziah",
    "slug": "general",
    "content": "Pn Foziah’s lumbar spondylosis was affecting her blood circulation in her leg, causing it to swell. She had trouble walking (her foot was dragging) and performing her solat (prayers). After our treatment, she could walk and perform her solat normally again. Thank you for sharing your story!\n“Saya sangat berpuas hati dengan Perkhidmatan Yap Chan Kor. Semenjak saya menjalani rawatan susulan di sini, kaki saya semakin pulih dan beransur baik. Dengan ini saya ingin berterima kasih pada Susilawati yang telah merawat kaki saya. Sekian terima kasih.” – Foziah\n#KakiBengkak #KakiSakit #YAPCHANKOR #YCK #Fisioterapi #UbatCina #Tittar\nPn Foziah’s lumbar spondylosis was affecting her blood circulation in her leg, causing it to swell. She had trouble walking (her foot was dragging) and performing her solat (prayers). After our treatment, she could walk and perform her solat normally again. Thank you for sharing your story!",
    "outcome": "Pn Foziah’s lumbar spondylosis was affecting her blood circulation in her leg, causing it to swell. She had trouble walking (her foot was dragging) and performing her solat (prayers). After our treatm...",
    "link": "https://yapchankor.com/testimonials/foziah-swollen-feet/",
    "length": 922
  },
  {
    "id": "testimonial-282",
    "title": "Finger Injury Young KS",
    "slug": "back-pain",
    "content": "“Have been coming to YAPCHANKOR for nearly 20 years now for all our family’s injuries. Don’t know how I hurt my right middle finger but discovered that it was swollen and painful to do housework and cooking. Since being treated, the finger is back to normal and able to function satisfactorily.” – Young K\n#familyclinic #yapchankor #fingerinjury #oldklangroad #yck #fingerpain #chinesemedicine #alternativetreatment #chiropracticalternative #physiotherapy\nMadam Young is an old patient of ours. Her family and her has come to our centre for close to 20 years. This time she came for a finger injury to her right hand, which prevented her from doing her housework and to cook for her family.\r\n\r\nGlad that her finger is back to normal after our treatment then! Thank you for your family’s continued support and for sharing your story here!",
    "outcome": "Glad that her finger is back to normal after our treatment then! Thank you for your family’s continued support and for sharing your story here!",
    "link": "https://yapchankor.com/testimonials/young-ks-finger-injury/",
    "length": 837
  },
  {
    "id": "testimonial-283",
    "title": "Carpal Tunnel Tan ST",
    "slug": "wrist-pain",
    "content": "“I am suffering from CTS (Carpal Tunnel Syndrome) for 3 years and even after CTS surgery done, the pain still persisted, under BP (blood pressure) went chronic. After 14 sessions of treatment done, the pain reduced from 4/10 to 2/10 and my gripping power has improved.\nThank you very much to my physiotherapist Azlan for all his patience, understanding and exercise advice.” – Tan ST\n#CarpalTunnelTreatment #CTS #YCK #Physiotherapy #ChineseMedicine #alternativemedicine #ShahAlam #yapchankor\nMr. Tan saw rapid improvements in his wrist and hand after 14 sessions of our treatment for his carpal tunnel syndrome. Previously he could not hold a spoon and pen, and suffered constant pain and tingling sensations. He tried acupuncture and physiotherapy after his CTS surgery for 3 years, but these didn’t really help him. Frustrated, he finally came to us, and within 2-3 weeks, the improvements were drastic…his pain reduced by 50% and he can now use a spoon again.\r\n\r\nMr. Tan is continuing our treatment for another 7 sessions to reduce his pain level even further. We are optimistic with his progress. Thank you Mr. Tan for sharing your story!",
    "outcome": "Thank you very much to my physiotherapist Azlan for all his patience, understanding and exercise advice.” – Tan ST",
    "link": "https://yapchankor.com/testimonials/tan-st-carpal-tunnel/",
    "length": 1142
  },
  {
    "id": "testimonial-284",
    "title": "Ankle Sprain Fatimah",
    "slug": "sprained-ankle",
    "content": "“I sprained my ankle about 4 months ago, was told it was [in the] chronic stage by the therapist at YCK and after the sessions it is much, much better now. Thank you so much to the therapist at YAPCHANKOR especially Ms. Najihah.” – Fatimah\n#anklesprain #spraintreatment #yapchankor #yck #ChineseMedicine #alternativeMedicine #physiotherapy\nPuan Fatimah suffered from a chronic ankle sprain for 4 months and with just 2 weeks of treatment at YAPCHANKOR, she has recovered significantly over the 4 months of pain and suffering she went through. Thank you for sharing your experience Pn. Fatimah!",
    "outcome": "“I sprained my ankle about 4 months ago, was told it was [in the] chronic stage by the therapist at YCK and after the sessions it is much, much better now. Thank you so much to the therapist at YAPCHA...",
    "link": "https://yapchankor.com/testimonials/fatimah-ankle-sprain/",
    "length": 593
  },
  {
    "id": "testimonial-285",
    "title": "Knee Pain Athirah",
    "slug": "knee-pain",
    "content": "“My knees hurt when I try to move. Especially when I wanted to climb the stairs or walked on an uneven surface. After subscribing to the 7 session programme, my pain is now manageable. I was shown how to do exercises to strengthen my muscles and joints.” – Athirah\n#KneePainTreatment #ChineseMedicineTreatment #PainTreatment #Physiotherapy #yapchankor #yck #ampang #alternativetreatment\nMs Athirah had knee pain from a fall from stairs but when she came for an assessment, we found that the injury was actually at her ankles, which we treated. The result was that her knee pain reduced and her ankles recovered. Thanks for sharing your story!",
    "outcome": "Ms Athirah had knee pain from a fall from stairs but when she came for an assessment, we found that the injury was actually at her ankles, which we treated. The result was that her knee pain reduced a...",
    "link": "https://yapchankor.com/testimonials/athirah-knee-pain/",
    "length": 642
  },
  {
    "id": "testimonial-286",
    "title": "Knee Osteoarthritis Aishah",
    "slug": "knee-pain",
    "content": "“Saya berumur 71 tahun saya menghidap sakit lutut selama lima tahun saya mendapat berita Yap Chan Kor daripada anak saya. Sebelum datang di Yap Chan Kor sakit lutut saya tahap lapan (8/10). Selepas menerima (rawatan) di Yap Chan Kor, tahap kesakitan saya berkurang dalam 70%. Saya perlu meneruskan senaman di rumah juga. Terima kasih.” – Aishah\n#kneepaintreatment #kneepaintreatmentthatworks #yapchankor #yck #chinesemedicine #chinesemartialartsmedicine #alternativetreatment #kneeOA #Osteoarthritis #sakitlutut #ShahAlamYCK #physiotherapy #physiotherapyhybrid\nPuan Aishah suffered from knee osteoarthritis for 5 years. When she first came to see us, her pain level was measured at 8/10, which is near excruciating. We are glad that our treatment works for wear-and-tear arthritis or osteoarthritis, since this disease is usually only treated with painkillers which have dangerous side effects, or with invasive procedures including surgery. Thank you Puan Aishah for telling your story here!",
    "outcome": "Puan Aishah suffered from knee osteoarthritis for 5 years. When she first came to see us, her pain level was measured at 8/10, which is near excruciating. We are glad that our treatment works for wear...",
    "link": "https://yapchankor.com/testimonials/aishah-knee-osteoarthritis/",
    "length": 992
  },
  {
    "id": "testimonial-287",
    "title": "Knee Osteoarthritis Jurinah",
    "slug": "knee-pain",
    "content": "“Pada mulanya, saya hadir berkerusi roda dan tidak berdaya untuk berdiri dan berjalan selepas berada di hospital selama 7 hari. Menantu saya telah membawa saya ke YCK Shah Alam untuk rawatan selama 21 sesi. Lutut dan pergelangan kaki bengkak dan sangat. Setelah menjalani rawatan fisioterapi bersama ubat herbal Cina sini banyak perubahan yang saya alami. Terima kasih YCK Shah Alam.” – Jurinah\n#bilateralkneeOA #Osteoarthritis #KneePain #OA #SakitLutut #YapChanKor #YCK #ShahAlam #fisioterapi #physiotherapy #ChineseMedicine #ubatHerba #chinesemartialartsmedicine #alternativetreatment #testimonial #kneepainrecovery\nPatient Puan Jurinah came to us in a wheelchair with swollen knees due to knee OA (osteoarthritis). Previously she was in a hospital for 7 days and could not walk or stand. Today she can not only stand, but can move around without her wheelchair. Another happy patient and result for us.\r\n\r\nTerima kasih Puan Jurinah!",
    "outcome": "#bilateralkneeOA #Osteoarthritis #KneePain #OA #SakitLutut #YapChanKor #YCK #ShahAlam #fisioterapi #physiotherapy #ChineseMedicine #ubatHerba #chinesemartialartsmedicine #alternativetreatment #testimo...",
    "link": "https://yapchankor.com/testimonials/jurinah-knee-osteoarthritis/",
    "length": 935
  },
  {
    "id": "testimonial-288",
    "title": "Frozen Shoulder Rahmah",
    "slug": "back-pain",
    "content": "“My mother suffered frozen shoulder. Her first injury occurred 4 years back and recurred after she abandoned the exercise regime prescribed by previous physiotherapist. We encountered YCK after browsing website. My mother started with severe pain and her ability for mobility reduced to almost more than 50%. After 14 treatments, I can acknowledge that she has better mobility and close to almost no pain. She follows the exercises prescribed closely. And we are thankful to YCK physiotherapist Ema, for her patience and compassion while treating my mother.” – Aliza, daughter of Puan Rahmah\n#FrozenShoulderTestimonial #FrozenShoulderRecovery #FrozenShoulderTreatment #YAPCHANKOR #YCK #ChineseMedicine #Physiotherapy #ChineseMedicinewithPhysiotherapy #Frozenshoulderspecialist #MuscleJointInjury #ShoulderInjury\nBefore Treatment\n: Severe Pain With Range 60 / 170 degrees (about 35%).\nAfter Treatment\n: Almost No Pain with Almost Full Range 160 / 170 (about 94%).",
    "outcome": "“My mother suffered frozen shoulder. Her first injury occurred 4 years back and recurred after she abandoned the exercise regime prescribed by previous physiotherapist. We encountered YCK after browsi...",
    "link": "https://yapchankor.com/testimonials/rahmah-frozen-shoulder/",
    "length": 962
  },
  {
    "id": "testimonial-289",
    "title": "Shoulder Impingement Raj",
    "slug": "back-pain",
    "content": "The first time I came here, I had very [severe] pain at my SHOULDER JOINT. I couldn’t move normally and [so] I did my treatment and at YCK the physiotherapist Hema was very helpful. For my treatment, for my exercise and then my hand is 80 percent ok now. I can move my hand normally and my pain reduced and I am able to do my own work with my hand.” – Raj (minor edits made to this testimonial for clarification purposes).\n#ShoulderImpingementPain #ShoulderTreatment #FrozenShoulderTreatment #ShoulderImpingementRecovery #ShoulderImpingement #YapChanKor #YCK #ChineseMedicine #OldKlangRoad #Physiotherapy #PhysicalTherapy #KualaLumpur #AlternativeTreatment\nRaj, 59 years old, suffered from severe pain because of a shoulder impingement issue when he fell off his motorcycle onto his shoulder in a motor accident. Inflammation was causing swelling and pain that reduced his ability to use the arm. He could not move his arm and do his work normally. After just 1 week of sessions, he has recovered by 80% and has been able to go back to his normal job. Thank you Raj for sharing your story.",
    "outcome": "#ShoulderImpingementPain #ShoulderTreatment #FrozenShoulderTreatment #ShoulderImpingementRecovery #ShoulderImpingement #YapChanKor #YCK #ChineseMedicine #OldKlangRoad #Physiotherapy #PhysicalTherapy #...",
    "link": "https://yapchankor.com/testimonials/raj-shoulder-impingement/",
    "length": 1089
  },
  {
    "id": "testimonial-290",
    "title": "Severe Back Pain Kamariah",
    "slug": "back-pain",
    "content": "“In 1996 I first experienced frozen fingers due to cold weather that I got during my trip to Turkey. A friend in the group suggested I should try reflexology conducted by blind massage in Medan Mara. I continued doing reflexology because it helped to maintain my well-being but stopped doing after I retired in 2012. Then in 2014 I got severe frozen right shoulder that I decide to go for physiotherapy at Klinik Kesihatan G… Se… It does not help much because the session was once a month. A friend in the office suggested patting hot water bag on the injured shoulder and exercise. After repeating the procedure couple of times I am back to normal.\nIn August 2016 I suffered another severe cramp on my right thigh and back pain that I hardly could stand straight. Then I read an advert in Media Focus on Yap Chan Kor of its healing centre situated in Setapak. I called the centre and on Sunday 14/08/2016 I walked in to make an appointment with Nurulain. Honestly the cost of 21 sessions that Nurulain suggested was far from my budget. I decided to go for treatment because I believed Nurulain with her knowledge and expertise will help me overcome the pain that I am going through.\nThe first few sessions were really painful and torturing but as time went by I felt less pain. Nurulain taught me proper stretching and exercise that I need to practice. On 28 October 2016 was my last therapy session. I am now able to walk straight again with minimum pain. When I first came for this treatment I hardly could cross-legged sitting position and now I am able to do it at 45 degrees. To Nurulain and Yap Chan Kor, thank you for giving my health back.” – Kamariah\n#SevereBackPain #ThighCramps #BackPainTreatment #yapchankor #yck #setapak #kualalumpur #malaysia #physiotherapy #chinesemedicine #alternativetreatment #paintreatment #healingcentre",
    "outcome": "The first few sessions were really painful and torturing but as time went by I felt less pain. Nurulain taught me proper stretching and exercise that I need to practice. On 28 October 2016 was my last...",
    "link": "https://yapchankor.com/testimonials/kam-severe-back-pain/",
    "length": 1841
  },
  {
    "id": "testimonial-291",
    "title": "Back Pain Chen J",
    "slug": "back-pain",
    "content": "I was involved in many sport activities back in high school 12 years ago. One particular incident I remember was injuring my spine and that also affected my right leg. I sought acupuncture treatment once and thought it was healed due that the pain subsided. 12 years later the pain came back and I decided to have it X-rayed only to realize I was diagnosed with scoliosis and back pain. So I tried YAP CHAN KOR for a few months and every session showed a lot of improvement. So far, the nagging pain has been reduced to nothing and I hope it stays that way for good!” – Chen J.\n#BackPainTreatment #Scoliosis #yapchankor #yck #FirstChineseMedicine&PhysiotherapyTreatment #Ampang #Malaysia #ChineseMedicineTreatment #PainTreatment #AlternativeTreatment\nWe are so glad to help Ms Chen recover from her back pain. Her doctor diagnosed a mild scoliosis which may have been instigated by her sports injury 12 years ago. Old injuries do come back to haunt us, especially if not treated well, so we are happy that Ms Chen saw such good progress from our treatment! Thank you for sharing your treatment!",
    "outcome": "We are so glad to help Ms Chen recover from her back pain. Her doctor diagnosed a mild scoliosis which may have been instigated by her sports injury 12 years ago. Old injuries do come back to haunt us...",
    "link": "https://yapchankor.com/testimonials/chen-j-back-pain/",
    "length": 1094
  },
  {
    "id": "testimonial-292",
    "title": "Calf Injury Isyraf",
    "slug": "back-pain",
    "content": "Semasa saya bermain bola, saya mengalami sakit di bahagian tulang betis akibat hentakan. Akibatnya, kaki saya menjadi bengkak. Setelah beberapa hari, barulah saya mencari terapi dan saya menjumpai YAPCHANKOR.\nSejak hari pertama layanan yang diberikan amat memuaskan. Saya telah menjalani terapi selama 10 hari.\nAlhamdulillah akhirnya kesakitan yang saya alami beransur pulih dan pulih sepenuhnya. Saya dapat beraksi bersukan sepenuhnya. YEAY!!” – Isyraf\n#Footballinjury #CalfInjury #calfpain #swellingcalf #yapchankor #yck #shahalam #sakitbetis #rawatanbetis\n24 year old Isyraf suffered a sports injury to his calf while playing football. His calf injury caused his leg to swell up and the pain wasn’t going away. After he found us, he underwent a 10 session treatment for about 2 weeks and he is now back to enjoying football 100%. Thanks for sharing Isyraf!",
    "outcome": "24 year old Isyraf suffered a sports injury to his calf while playing football. His calf injury caused his leg to swell up and the pain wasn’t going away. After he found us, he underwent a 10 session ...",
    "link": "https://yapchankor.com/testimonials/isyraf-calf-injury/",
    "length": 859
  },
  {
    "id": "testimonial-293",
    "title": "Leg pain Norhayati",
    "slug": "knee-pain",
    "content": "Saya telah mengalami sakit kaki (antara lutut dan buku lali) lebih dari 1 tahun. Telah cuba mengurut dengan beberapa tukang urut tapi tak juga hilang. Bahkan makin teruk sehingga jalan pun sengit kerana menahan sakit.\nSecara kebetulan saya terlihat iklan YCK di FB yang di share oleh kawan saya. So I kata why not cuba.\nAlhamdulillah, selepas menerima rawatan di YCK serta digabungkan dengan pemakaian kasut yang disyorkan oleh Najihah, sakit kaki saya telah lebih 80% – 90% hilang. Saya suka sangat. Jalan pun dah tak sengit lagi.\nTerima kasih Najihah / YCK atas rawatan yang diberi.” – Norhayati, 12/5/2017\n#SakitKaki #SakitLutut #SakitBukuLali #YCK #YapChanKor #ShahAlam #Selangor #RawatanAlternatif #OtotdanSendi #RawatanUbatCina #Fisioterapi",
    "outcome": "#SakitKaki #SakitLutut #SakitBukuLali #YCK #YapChanKor #ShahAlam #Selangor #RawatanAlternatif #OtotdanSendi #RawatanUbatCina #Fisioterapi",
    "link": "https://yapchankor.com/testimonials/norhayati-leg-pain/",
    "length": 746
  },
  {
    "id": "testimonial-294",
    "title": "Wrist strain Noreen",
    "slug": "wrist-pain",
    "content": "I have had my pain for almost 2 years now and after having 7 sessions with Yap Chan Kor, the pain has subsided and I feel very much better.\nI initially cannot even open a jar but thanks to the treatment, I am stronger now. Thanks to my physiotherapist, she has done a lot of help during my physiotherapy sessions, and after the herbal patch, I would also feel very much better. The pain is almost gone and hopefully with a little more sessions, I will be relieved of the pain.” – Noreen\n#overstrainedwrist #strainedwrist #wristpain #chinesemartialartsmedicine #chinesemedicine #yapchankor #physiotherapy #alternativetreatment #yck #shahalam #malaysia",
    "outcome": "I have had my pain for almost 2 years now and after having 7 sessions with Yap Chan Kor, the pain has subsided and I feel very much better.",
    "link": "https://yapchankor.com/testimonials/noreen-wrist-pain/",
    "length": 650
  },
  {
    "id": "testimonial-295",
    "title": "Ankle Sprain Paul D",
    "slug": "sprained-ankle",
    "content": "I reported for Ankle Sprain. Took treatment for 7 days.Today I am Completely Healed.Thanks to Brian for his brilliant work. God Bless Him.\n#anklesprain #anklesprainrecovery #chronicanklepain #alternativetreatment #Malaysia’sLeadingAlternative #Yapchankor #YCK #Chinesemedicine #innovativeTCM #Physiotherapy #physiotherapist #paintreatment #pain #ankleinjury #sportsinjury #PuchongIOIMall\nPaul suffered pain from an ankle sprain that didn’t heal properly. He went to our Puchong IOI Mall outlet and after just 7 sessions, he has recovered completely. At YAPCHANKOR, we always say that we focus on long-term recovery, not just short term relief. Thanks Paul!",
    "outcome": "I reported for Ankle Sprain. Took treatment for 7 days.Today I am Completely Healed.Thanks to Brian for his brilliant work. God Bless Him.",
    "link": "https://yapchankor.com/testimonials/paul-d-ankle-sprain/",
    "length": 656
  },
  {
    "id": "testimonial-296",
    "title": "Stiff Neck Saw KS",
    "slug": "shoulder-pain",
    "content": "It is a long and old injury. Through relatives and web (search) I managed to find YCK around my area, Setapak.\nFirst met your physiotherapist Ms Bella and was advised on the treatment process. Decided to take up the treatment plan. After 2 sessions I can see the improvement and I am now almost fully recovered from the pain but need to consistently practice (the exercises) and ensure no repeated injury. Thank you to YCK treatment plan and systematic physio process. ” – Saw KS\n#stiffnecktreatment #stiffneckrecovery #yapchankor #yck #setapak #kl #malaysia #chinesemedicinepatches #physiotherapy #physiotherapist #alternativetreatment #neckpain\nMr. Saw suffered from a long-standing stiff neck injury, which is a very common problem in today’s office workers. Because of bad posture and desk work, as well as low exercise rates in our modern world, more people suffer from neck pain and shoulder stiffness. Thankfully, our unique herbal patches combined with physiotherapy sessions can help reduce the pain and inflammation as well as ensure that recovery is long term with the exercises we teach. Thank you Mr Saw for trying us and for sharing your story!",
    "outcome": "First met your physiotherapist Ms Bella and was advised on the treatment process. Decided to take up the treatment plan. After 2 sessions I can see the improvement and I am now almost fully recovered ...",
    "link": "https://yapchankor.com/testimonials/saw-ks-stiff-neck/",
    "length": 1158
  },
  {
    "id": "testimonial-297",
    "title": "Low Back Pain Awang",
    "slug": "back-pain",
    "content": "“I been treated by Physiotherapist Miss Shanmuga Vani for low back pain for 21 times. Ever since the treatment I feel better and I was also shown the way to minimise my pain that is by doing muscle stretching exercises. I hope the pain will disappear and will not come back. Treatment has been professional and good. Thank you.” – Awang\n#LowBackPainTreatment #LowBackPainRecovery #YapChanKor #yck #chinesemedicine #Physiotherapy #physicaltherapy #backpaintreatment #alternativemedicine #shahalam\nEncik Awang suffered from chronic low back pain for many months, but when the pain did not go away, he decided to look for us. After just 21 sessions, he has recovered significantly and can now go about his daily life with a real sense of normalcy that was missing before. Thank you for sharing your story!",
    "outcome": "“I been treated by Physiotherapist Miss Shanmuga Vani for low back pain for 21 times. Ever since the treatment I feel better and I was also shown the way to minimise my pain that is by doing muscle st...",
    "link": "https://yapchankor.com/testimonials/awang-low-back-pain/",
    "length": 802
  },
  {
    "id": "testimonial-298",
    "title": "Knee Pain Susanna",
    "slug": "knee-pain",
    "content": "Knee pain “I was a teacher for 33 years, I suffered this knee arthritis (knee OA) about nine years ago due to ‘wear and tear’. I went for treatment at Tags before this and my condition improved but the condition worsened probably because I failed to continue the physio exercises and hectic movement. I tried treatment here at YapChanKor, my knee pain improved too, less inflammation and less pain but I need to continue the physio exercises twice daily and hopefully my condition will get much better by the end of the year. I could feel my legs a bit stronger now. Thanks to YapChanKor, I feel that my knee condition will finally improve and there will be lesser pain and inflammation soon.” – Susanna A., 19/3/2017\n#KneeOAtreatment #kneearthritis #kneeOA #KneePainTreatment #ChineseMedicine #Yapchankor #YCK #Setapak #KualaLumpur #Physiotherapy #AlternativeTreatment #World’sFirst #ChineseMedicinewithPhysio\nWe were able to help this retired teacher, Pn Susanna, recover from her pain and inflammation caused by wear-and-tear arthritis, or knee OA, with the combination of our Chinese medicine patches and physiotherapy. Please do keep up with the exercises we taught you and let us know if we can help you further! Thank you!",
    "outcome": "Knee pain “I was a teacher for 33 years, I suffered this knee arthritis (knee OA) about nine years ago due to ‘wear and tear’. I went for treatment at Tags before this and my condition improved but th...",
    "link": "https://yapchankor.com/testimonials/susanna-knee-pain/",
    "length": 1229
  }
];

export const heroTestimonials = [
  {
    "id": "testimonial-0",
    "title": "A Healing Journey with An Osteoarthritis Patient",
    "slug": "knee-pain",
    "content": "Madam Lo, standing tall with Mr Yap Chan Kor at the Old Klang Road centre (July 2018)\nMadam Irene Lo, age 66, from Subang Jaya came to YapChanKor Pain Treatment Centre to treat severe pain in her right knee which started in March 2018. The knee pain originated from a mild sprain or injury sustained when she stood up after sitting on the floor for 30 minutes.\nWhen the pain started, she did not seek treatment from our centre immediately. She visited a medical doctor in April which resulted in a prescription for anti-inflammatory drugs and painkillers. The doctor brushed off the injury by saying that it was common for the elderly to injure themselves if they were doing anything strenuous.\nWhat started as a mild throbbing pain on her knee gradually worsened into constant and severe pain. It was aggravated by constant walking and performing household chores.\nBy May, the pain was so bad that it affected her daily mobility. She could not walk, sit or sleep without feeling the pain. While sleeping, a bent knee would trigger the pain so she had to keep her leg straight all the time. Doing housework, marketing, taking care of the grandchildren and walking the dog were all out of the question. Madam Lo was in so much pain that, where once she walked upright, now she could only walk slowly with her back bent, relying on her left knee and a cane for support.\nMadam Lo before treatment for knee osteoarthritis\nWhen she visited YapChanKor in May 2018, her condition had deteriorated and the knee was swollen with inflammation; the injured right knee was visibly larger than the left knee. She was seen by our senior physiotherapist Vicky and the case was diagnosed as Grade 3 chronic osteoarthritis. Madam Lo signed on for 21 treatments of 2 herbal patches and would also be guided to do some physiotherapy exercises at home to strengthen her joints.\nIn this article, we give you some insights into Madam Lo’s treatment course and what goes on behind the doors of the treatment rooms at YapChanKor.\n(Note: Although the 21 treatments were spread across 3 months, for the purposes of this article, we will name the first day of treatment as Day 1, second treatment as Day 2, and so on.)\nPhase I: Daily\nDay 1 to Day 3\nThe swollen knee was treated with ice packs to reduce inflammation and 2 herbal patches were wrapped around the knee before Madam Lo was sent home. As the injury was still prevalent, no massages or other treatments were done in order to prevent the inflammation from getting worse. After 3 consecutive days, the swelling had reduced tremendously and Madam Lo reported feeling less pain and tenderness around the injury.\nHerbal patches wrap the front and back knee\nPhase II: 2 to 3 Times A Week\nDay 4 to Day 12\nAfter the swelling had reduced, the proper treatment began. In every session, Madam Lo experienced the same sequence of treatments.\nFirst, the knee was warmed for 15 minutes with an infrared heat machine to relax muscles and improve blood circulation. This step is only introduced once the swelling has fully subsided, which depends on the speed of the patient’s recovery.\nInfrared heat treatment\nIf infrared heat treatment can’t be introduced yet, an ultrasound device is used on and around the injury to reduce swelling and improve the healing rate by increasing blood circulation. The device administers sound waves and low heat to the skin.\nUltrasound treatment device\nUltrasound treatment device\nFollowing that, a TENS machine providing an adjustable electricity charge was hooked up to Madam Lo’s knee to stimulate the muscles and nerves. This process takes about 15 to 20 minutes.\nElectro-stimulation with a TENS machine\nThe second last part of the treatment involved a light massage of about 10 minutes to loosen and strengthen the tight muscles of the leg. Finally, the 2 herbal patches were administered and wrapped. The patches should stay on for at least 12 to 18 hours.\nMassage being done by senior physiotherapist, Vicky\nMadam Lo was advised to come 2 to 3 times a week during this second phase of the treatment. Each appointment is given a specific date and time slot by the physiotherapist in-charge. The entire session takes approximately 1 hour.\nDay 12 – Physiotherapy Begins\nWhen Vicky, the physiotherapist, detected an improvement and reduction in the swelling of the knee, she began teaching Madam Lo some physiotherapy exercises to perform at home. All she needed are an exercise band and ankle weights. The number of repetitions was suggested and was gradually increased after monitoring the progress.\nLifting the leg and providing resistance with an exercise band\nStrengthening the knee muscles with ankle weights\nStationary cycling\nThe stationary physiotherapy cycle is an optional exercise where she could use a stationary bicycle at home or at the gym.\nMadam Lo’s skin was a bit sensitive so there were some days when the herbal patches are skipped until the following session, but the steps of the treatment still remain the same.\nPhase III: Once a Week\nDay 13 to 16\nGreat progress was seen to the knee recovery and so, Madam Lo was asked to visit only once a week from now on. During each session, she spent about 1 hour undergoing the treatment and did some physiotherapy exercises as guided by the physiotherapist for about 15 minutes.\nDay 16\nMadam Lo reported that after 16 sessions (approximately 8 weeks) and diligent practice of physiotherapy exercises, she could do some light walking around a shopping mall with barely any pain. She felt extremely relieved to know that she was on a fast journey to recovery!\nDay 17 to 21\nWith great happiness that her injury was healing well, Madam Lo was elated that she could now stand upright without her cane and walk with greater walking speed. She also felt well enough to be doing some light cooking, housework and playing with her grandchildren again!\nIn her own words, she praised the treatment at Yap Chan Kor Pain Treatment Centre for its effectiveness, comfort and efficiency in healing her osteoarthritic knee”\n“I would like to thank my therapist, Vicky, for being so patient and skilful in treating my injury. Before the treatment, I couldn’t walk due to the pain. After the treatment, I can walk very well without any pain. I want to thank YapChanKor Pain Treatment Centre for giving back my freedom and mobility.”\nBelow are videos of Madam Lo’s walking to show the difference before and after the treatment.\nThis article was written by Chuah Ai Jou, Madam Lo’s daughter, who is a returning customer herself of YapChanKor Pain Treatment Centre.\nMadam Irene Lo, age 66, from Subang Jaya came to YapChanKor Pain Treatment Centre to treat severe pain in her right knee which started in March 2018. When the pain started, she visited a medical doctor in April who prescribed anti-inflammatory drugs and painkillers. The doctor brushed off the injury by saying that it was common for the elderly to injure themselves if they were doing anything strenuous. But what started as a mild throbbing pain on her knee gradually worsened into constant and severe pain. It was aggravated by constant walking and performing household chores.",
    "outcome": "First, the knee was warmed for 15 minutes with an infrared heat machine to relax muscles and improve blood circulation. This step is only introduced once the swelling has fully subsided, which depends...",
    "link": "https://yapchankor.com/testimonials/a-healing-journey-with-an-osteoarthritis-patient/",
    "length": 7143
  },
  {
    "id": "testimonial-62",
    "title": "Slipped Disc Danny",
    "slug": "neck-pain",
    "content": "Danny suffered from a cervical slipped disc which caused discomfort, pain and numbness down his right arm to his hand. This sensation is not only very uncomfortable and painful, it also causes a loss of function. Danny had trouble using his right arm for daily activities. He came to see us and was treated by our physiotherapist Joy. Glad to hear that he’s improved tremendously. Thank you for sharing your story!\n#cervicalslippeddisc #cervicalpain #slippeddiscpain #slippeddisctreatment #yapchankor #yck #alternativetreatment #muscleandjointpaintreatment #subangjaya #subangss15 #malaysia #selangor #klangvalley",
    "outcome": "Danny suffered from a cervical slipped disc which caused discomfort, pain and numbness down his right arm to his hand. This sensation is not only very uncomfortable and painful, it also causes a loss ...",
    "link": "https://yapchankor.com/testimonials/danny-cervical-slipped-disc/",
    "length": 613
  },
  {
    "id": "testimonial-18",
    "title": "Twisted Ankle – Naomi",
    "slug": "sprained-ankle",
    "content": "“I was climbing down the stairs at the station and skipped the last few steps and that’s how I twisted my ankle. I’ve visited two clinics near my work place but all they gave me was meds for painkiller and inflammation, which weren’t a big help. I desperately was looking for a proper treatment and luckily I found YAPCHANKOR, while surfing the internet. I’ve received 10 sessions and I could gradually feel that the swelling and pain were reducing. Definitely the treatment was working for me and I can’t thank Anitha and other staff enough for healing my ankle.”\nNaomi YCK Testimonial 2018 for Twisted Ankle\nAfter trying 2 different clinics which just gave her painkillers for her twisted ankle, Naomi decided to try our treatment, which combines herbal medicine used to treat ancient Kung Fu injuries and modern physiotherapy. Within a few days she experienced rapid relief and recovery. Most other treatments for joint injuries available today don't approach healing in a holistic way like we do at YAPCHANKOR. It is either too reliant on numbing chemicals found in painkillers, which don't treat the underlying condition or too slow and ineffective, because exercise or physical movements with an injured joint is hard to do. The body needs a healing boost that we can provide via our time tested herbal medicine patches, which is made to a secret formula used previously on Kung Fu injuries.\n#twistedankleinjury\n#twistedankle\n#anklesprain\n#ankleinjury\n#ankletreatment\n#yapchankor\n#kungfumedicine\n#yck\n#chinesemedicine\n#physiotherapy\n#anklerecovery",
    "outcome": "“I was climbing down the stairs at the station and skipped the last few steps and that’s how I twisted my ankle. I’ve visited two clinics near my work place but all they gave me was meds for painkille...",
    "link": "https://yapchankor.com/testimonials/twisted-ankle-naomi/",
    "length": 1553
  },
  {
    "id": "testimonial-274",
    "title": "De Quervain Wendy",
    "slug": "wrist-pain",
    "content": "“I had been suffering pain at the base of my right thumb (“de Quervain tetenosynovitis”) for almost 1 year. I can’t squeeze a face towel and lift things up but thanks to the treatment plan which I received at Yap Chan Kor Pain Treatment Centre @ Ampang Waterfront.\nI first met my therapist Mytily in January 2017 and was advised on the treatment plans which include physiotherapy and herbal patches, thereafter I decided to sign up the treatment package plans. After few sessions of treatment plans, I can see the improvement and feel very much better after that.\nMytily has helped me to learn and manage my pain. She has given me the advice on efficient stretches which helped in improving my overall wellness and providing much relief. I am now almost fully recovered but need to be careful and to consistently practice all the stretches.\nI wish to express my sincere gratitude to Yap Chan Kor Pain Treatment Centre on their systematic physio treatments and big thank you to my therapist, Mytily who is a friendly and down-to-earth person. She is an excellent therapist, concerned for her patients and has knowledge on what works best.” – Wendy\n#WristPain #DeQuervainTreatment #yck #chinesemartialartsmedicine #chinesemedicine #TCM #physicaltherapist #ampang #yapchankor #tetenosynovitis #testimonial #wristpainrecovery\nI wish to express my sincere gratitude to Yap Chan Kor Pain Treatment Centre on their systematic physio treatments and big thank you to my therapist, Mytily who is a friendly and down-to-earth person",
    "outcome": "“I had been suffering pain at the base of my right thumb (“de Quervain tetenosynovitis”) for almost 1 year. I can’t squeeze a face towel and lift things up but thanks to the treatment plan which I rec...",
    "link": "https://yapchankor.com/testimonials/wendy-de-quervain-tenosynovitis/",
    "length": 1521
  },
  {
    "id": "testimonial-33",
    "title": "Frozen Shoulder Michael",
    "slug": "back-pain",
    "content": "Michael flies from Alaska, USA to get his frozen shoulder fixed at YAPCHANKOR!\nA bit of background about Michael’s case: We had previously treated Michael’s left frozen shoulder a year ago, and after 2-3 months, he was 75%-80% better. Before he came to see us, during the 5 years he suffered from frozen shoulder, he had tried acupuncture for 4 months, and physiotherapy for 8 months, as well as massage therapy. Nothing worked as well as he hoped, but he responded extremely well to our treatment, which combines Shaolin herbal medicine patches together with physiotherapy. Today, as he reports, he’s back to normal on his left shoulder.\nSo when his right shoulder started to give him problems, Michael decided to skip the doctors in the US, and to fly back to Malaysia for our treatment! He knew our treatment works better and faster than other treatments, and decided to incur the expense of the flight from Alaska as well as our treatment costs to heal his shoulder. This time, he underwent a couple of weeks treatment, making good progress, and we look forward to seeing him again soon when he returns! Thanks again Michael!\nRead his earlier recovery testimonial from his first frozen shoulder here: http://yapchankor.com/testimonials/mike-frozen-shoulder-1/\nAfter experiencing an almost full recovery with his previous frozen shoulder problem, Michael decides to skip all the Western doctors and alternative treatments available in the US to fly to KL from Alaska to treat his new frozen shoulder problem. Take a listen to his very generous testimonial. Thank you Michael!\nMichael flies from Alaska, USA to get his frozen shoulder fixed at YAPCHANKOR!\nA bit of background about Michael's case: We had previously treated Michael's left frozen shoulder a year ago, and after 2-3 months, he was 75%-80% better. Before he came to see us, during the 5 years he suffered from frozen shoulder, he had tried acupuncture for 4 months, and physiotherapy for 8 months, as well as massage therapy. Nothing worked as well as he hoped, but he responded extremely well to our treatment, which combines Shaolin herbal medicine patches together with physiotherapy. Today, as he reports, he's back to normal on his left shoulder.\r\n\r\nSo when his right shoulder started to give him problems, Michael decided to skip the doctors in the US, and to fly back to Malaysia for our treatment! He knew our treatment works better and faster than other treatments, and decided to incur the expense of the flight from Alaska as well as our treatment costs to heal his shoulder. This time, he underwent a couple of weeks treatment, making good progress, and we look forward to seeing him again soon when he returns! Thanks again Michael!",
    "outcome": "A bit of background about Michael’s case: We had previously treated Michael’s left frozen shoulder a year ago, and after 2-3 months, he was 75%-80% better. Before he came to see us, during the 5 years...",
    "link": "https://yapchankor.com/testimonials/frozen-shoulder-michael/",
    "length": 2711
  },
  {
    "id": "testimonial-113",
    "title": "Rotator Cuff Tear Kamariah",
    "slug": "shoulder-pain",
    "content": "This is another case we saved from surgery! Puan Kamariah suffered shoulder pains on her left side due to a diagnosed rotator cuff tear and also neck pains from a cervical disc prolapse. She had to stay in a hospital for 10 days because of these severe pains. But when the doctors advised surgery, she decided to seek a second opinion and came to see us. Well, the rest is history as they say. We managed to get rid of all her shoulder pain in just 21 sessions of treatments. When she suffered an ankle sprain during the treatment, she immediately treated that too, and we cured that in 5 days. Please read her story here…thank you so much for sharing this Puan Kamariah!\n“About 6 months ago, I have encountered rotator cuff tear and cervical prolapsed on my left side shoulder. My movement of my shoulder and my neck is getting stiff especially at nite and during getting up from bed early morning. I was admitted in the hospital for 10 days and advised to go for surgery. A friend of mine recommended to get 2nd opinion from YAPCHANKOR i.e. traditional Chinese herbs and my case was attended by Miss Bella. Before proceed with my treatments, Miss Bella explained the process treatments and the symptoms which I have to bear during treatments. She advised that I have to take 21 days treatments due to my age factor and condition of my injury.\nFor the 1st day up to 3rd day, 4 patches containing herbs [were] attached onto my injury area and I feel the pain worsen. As this is the symptoms which will occur during the treatments and [I had] been informed earlier, therefore I continued the treatments. On the 5th day, I feel [a] miracle happen to me when my shoulder movement is improved and the stiffness is lesser. With the addition of exercises and massages, it really enhanced the curing to be speedy healing. The staffs are very committed during the services. Now I feel so much better and my shoulder movement [is] without pain anymore. I still have slight pain at my neck area [but] I knes this part will take time to heal and will continue the treatment until it’s fully recovered. During this treatment, I also injured my ankle which I hardly could walk and stand properly. With the same treatments in 5 days my ankle swelling was subsided and I can walk like usual.\nI surely recommend this centre to others and thumbs up to the dedication and the services of the staffs to me during my treatments.\nThank you.\nKamariah\n#rotatorcuffteartreatment #secondopinion #yapchankor #shoulderinjurytreatment",
    "outcome": "This is another case we saved from surgery! Puan Kamariah suffered shoulder pains on her left side due to a diagnosed rotator cuff tear and also neck pains from a cervical disc prolapse. She had to st...",
    "link": "https://yapchankor.com/testimonials/kamariah-rotator-cuff-tear/",
    "length": 2506
  },
  {
    "id": "testimonial-50",
    "title": "Frozen shoulder Choo YW",
    "slug": "frozen-shoulder",
    "content": "When she could not lift up her left arm and also felt extreme pain, Madam Choo knew she had a problem. Online research told her she might have a frozen shoulder, which eventually led her to us. Given the chronic nature of her problem, she was recommended a 3 week or 21 session treatment plan, which led to her eventual long-term recovery.\nFrozen shoulder issues (known also as adhesive capsulitis) can become really serious. Ineffective or inappropriate treatment can lead to the shoulder capsule thickening and hardening further. According to a leading American clinic’s website, frozen shoulder issues resolve in 1 to 3 years, usually with range of motion exercises, corticosteroids and numbing medications injected into the joint capsule.\nSometimes even arthroscopic surgery is recommended.\nOur treatment resolves frozen shoulder issues without these invasive procedures. It also is a lot faster, taking just 1-2 months instead of years. So please come in for a consultation for any frozen shoulder issues you, your family or your friends may have!\nThank you Madam Choo for your wholehearted testimonial!\n#frozenshoulder #chinesemedicine #alternativetreatment #chiropractoralternative #physiotherapy #yapchankor #shahalam #selangor #malaysia",
    "outcome": "When she could not lift up her left arm and also felt extreme pain, Madam Choo knew she had a problem. Online research told her she might have a frozen shoulder, which eventually led her to us. Given ...",
    "link": "https://yapchankor.com/testimonials/choo-yw-frozen-shoulder/",
    "length": 1245
  },
  {
    "id": "testimonial-134",
    "title": "Herniated Disc Hana",
    "slug": "slipped-disc",
    "content": "Hana was a great success story for us recently. She suffered from herniated disc at her L5/S1 with mild scoliosis. She was suffering from really bad pain and the doctor advised surgery as her conservative treatments like physiotherapy and acupuncture weren’t working. It was a stroke of luck she came to us because of a scheduling delay for her MRI, because after our treatment, the MRI showed that her herniated disc condition was improving! Her doctor had the good sense and open mind to ask her to continue with our treatment and we hope that she’s now well on her way to a full recovery! Thanks for sharing your story Hana!!",
    "outcome": "Hana was a great success story for us recently. She suffered from herniated disc at her L5/S1 with mild scoliosis. She was suffering from really bad pain and the doctor advised surgery as her conserva...",
    "link": "https://yapchankor.com/testimonials/hana-herniated-disc/",
    "length": 628
  },
  {
    "id": "testimonial-166",
    "title": "Bone spur Philip",
    "slug": "plantar-fasciitis",
    "content": "Philip suffered from a heel bone spur which was causing him pain when he walked and whenever he rose from bed. He did some research before coming to see us, and we’re glad that we have helped him walk without as much pain as before. Thank you for sharing your story!\n“For almost a year, I had experienced heel pain during initial few steps of walking whenever rising from bed or after prolonged period of sitting. An X-ray confirmed it is a calcaneal spur and I was referred for physiotherapy. Through online research, I came across YAPCHANKOR and having read the testimonials, decided to sign up for 14-days treatment plan. Treatment has reduced inflammation of my heel tendon notably after the 7th session. It has improved my ability to walk with ease. Thank you to YAPCHANKOR and special thanks to Mr. Ganesh for his effort and services.” – Philip Liew\n#heelbonespur #yapchankor #paintreatment #heelpain #ylab #chronicpaintreatment #physiotherapy\nPhilip suffered from a heel bone spur which was causing him pain when he walked and whenever he rose from bed. He did some research before coming to see us, and we’re glad that we have helped him walk without as much pain as before. Thank you for sharing your story!",
    "outcome": "Philip suffered from a heel bone spur which was causing him pain when he walked and whenever he rose from bed. He did some research before coming to see us, and we’re glad that we have helped him walk...",
    "link": "https://yapchankor.com/testimonials/philip-bone-spur/",
    "length": 1216
  }
];
