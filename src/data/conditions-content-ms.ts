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
  relatedConditions: string[];
};

export const conditionsContentMs: Record<string, ConditionContent> = {
  "back-pain": {
    whyNotImprove:
      "Sakit belakang jarang disebabkan oleh satu punca sahaja. Dalam banyak kes, ia melibatkan gabungan tekanan struktur pada tulang belakang, had pergerakan, dan keradangan berterusan. Rawatan yang hanya menumpukan pada satu aspek — seperti pereda sakit sahaja atau senaman sahaja — mungkin tidak dapat menyelesaikan keadaan sepenuhnya. Inilah sebabnya ramai pesakit mengalami kelegaan sementara, namun sakit terus berulang.",
    whatCauses: [
      "Terikan otot dan ligamen akibat kecederaan atau penggunaan berlebihan",
      "Cakera yang tergelincir atau herniated",
      "Penyakit degeneratif cakera dan artritis",
      "Skoliosis dan ketidakaturan tulang belakang yang lain",
      "Patah tulang mampatan berkaitan osteoporosis",
      "Sakit belakang selepas kemalangan atau pembedahan",
    ],
    approach:
      "Pendekatan kami dibentuk oleh perubatan kecederaan Shaolin — tradisi yang dikembangkan melalui rawatan kecederaan muskuloskeletal sebenar — dan diperhalusi melalui lebih 45 tahun pengalaman klinikal. Di YAPCHANKOR, kami menumpukan pada memahami faktor yang menyumbang kepada kesakitan anda, dan bukannya bergantung pada satu kaedah rawatan sahaja.",
    approachPoints: [
      "Fisioterapi secara sentuhan langsung untuk mengurangkan tekanan dan meningkatkan mobiliti",
      "Rehabilitasi berstruktur untuk memulihkan pergerakan dan kestabilan",
      "Formulasi herba proprietari kami yang telah digunakan di klinik kami selama beberapa dekad pada lebih 50,000 pesakit, dan dikaji sifat anti-radangnya melalui penyelidikan makmal",
    ],
    expectation:
      "Ramai pesakit mula merasakan peningkatan dalam beberapa sesi pertama. Pemulihan bergantung pada keterukan dan tempoh keadaan anda serta konsistensi anda dengan senaman yang disyorkan. Tumpuan kami adalah pada pemulihan yang mampan — bukan kelegaan jangka pendek.",
    whenToSeek: [
      "Terus berulang selepas rawatan",
      "Menjejaskan tidur, kerja atau aktiviti harian anda",
      "Tidak bertambah baik dengan rawatan sebelumnya",
      "Membuat anda mempertimbangkan suntikan atau pembedahan",
    ],
    faqs: [
      {
        question: "Adakah saya memerlukan rujukan?",
        answer:
          "Tidak. Anda boleh membuat tempahan terus dengan kami — tiada rujukan doktor diperlukan.",
      },
      {
        question: "Berapa banyak sesi yang saya perlukan?",
        answer:
          "Ramai pesakit mula merasakan peningkatan dalam beberapa sesi pertama. Pelan pemulihan penuh dibincangkan selepas penilaian awal anda.",
      },
      {
        question:
          "Adakah ini sesuai jika saya sudah mencuba fisioterapi di tempat lain?",
        answer:
          "Ya. Ramai pesakit kami datang selepas mencuba fisioterapi konvensional tanpa keputusan yang berkekalan. Pendekatan integratif kami menangani pelbagai faktor penyumbang secara serentak.",
      },
      {
        question: "Adakah anda mempunyai kemudahan X-ray atau MRI?",
        answer:
          "Kami tidak mempunyainya. Jika patah tulang disyaki, sila berjumpa doktor untuk pengimejan terlebih dahulu sebelum melawat kami.",
      },
      {
        question: "Adakah ini sesuai untuk pesakit warga emas?",
        answer:
          "Ya. Kami kerap merawat pesakit dari semua peringkat umur, termasuk mereka yang mengalami keadaan berkaitan usia seperti osteoporosis dan penyakit degeneratif cakera.",
      },
    ],
    relatedConditions: ["lower-back-pain", "slipped-disc", "sciatica"],
  },

  "frozen-shoulder": {
    whyNotImprove:
      "Bahu beku — dikenali secara perubatan sebagai kapsulitis adhesif — berkembang secara berperingkat, setiap peringkat berlangsung beberapa bulan. Kapsul sendi secara beransur-ansur mengetat, menyekat pergerakan dan menyebabkan keradangan berterusan. Dalam banyak kes, rawatan hanya menumpukan pada sama ada mengurangkan sakit atau meningkatkan mobiliti — tetapi tidak kedua-duanya serentak. Tanpa menangani keradangan sambil memulihkan pergerakan pada masa yang sama, pemulihan mungkin terhenti dan tidak berkembang.",
    whatCauses: [
      "Bahu beku primer tanpa punca yang jelas",
      "Kekakuan selepas kecederaan termasuk kecederaan sukan dan tendinitis",
      "Masalah bahu berkaitan postur yang berpanjangan pada pekerja pejabat dan korporat",
      "Sekatan bahu selepas pembedahan",
      "Bahu beku peringkat awal di mana campur tangan tepat pada masanya boleh mencegah perkembangan lanjut",
    ],
    approach:
      "Pendekatan kami dibentuk oleh perubatan kecederaan Shaolin — tradisi yang dikembangkan melalui rawatan kecederaan muskuloskeletal sebenar — dan diperhalusi melalui lebih 45 tahun pengalaman klinikal. Di YAPCHANKOR, kami menumpukan pada menangani keradangan dan mobiliti secara serentak.",
    approachPoints: [
      "Fisioterapi secara sentuhan langsung untuk meningkatkan pergerakan sendi",
      "Latihan mobiliti berstruktur untuk memulihkan fungsi",
      "Formulasi herba proprietari kami yang telah digunakan di klinik kami selama beberapa dekad pada lebih 50,000 pesakit",
    ],
    expectation:
      "Bahu beku berkembang secara beransur-ansur — dan pemulihan juga memerlukan masa. Ramai pesakit kami melaporkan kemajuan yang ketara sekitar sesi ke-7. Kelajuan pemulihan anda bergantung pada keterukan dan tempoh keadaan anda, serta konsistensi anda dengan senaman yang disyorkan. Matlamat kami adalah pemulihan yang mampan — bukan kelegaan sementara.",
    whenToSeek: [
      "Mengganggu tidur atau aktiviti harian anda",
      "Tidak bertambah baik dengan rawatan sebelumnya",
      "Berada pada peringkat awal dan anda ingin mencegahnya daripada bertambah teruk",
      "Membuat anda mempertimbangkan suntikan atau manipulasi pembedahan",
    ],
    faqs: [
      {
        question: "Adakah saya memerlukan rujukan?",
        answer:
          "Tidak. Anda boleh membuat tempahan terus dengan kami — tiada rujukan doktor diperlukan.",
      },
      {
        question: "Berapa banyak sesi yang saya perlukan?",
        answer:
          "Ramai pesakit melaporkan kemajuan yang ketara sekitar sesi ke-7. Pelan pemulihan penuh dibincangkan selepas penilaian awal anda berdasarkan keterukan dan peringkat keadaan anda.",
      },
      {
        question:
          "Adakah ini sesuai jika saya sudah mencuba fisioterapi di tempat lain?",
        answer:
          "Ya. Ramai pesakit kami datang selepas mencuba fisioterapi konvensional tanpa keputusan yang berkekalan. Pendekatan kami menangani keradangan dan mobiliti secara serentak — yang sering kali menjadi perbezaan utama.",
      },
      {
        question: "Adakah saya memerlukan suntikan atau manipulasi?",
        answer:
          "Tidak. Pendekatan kami tidak melibatkan suntikan steroid atau manipulasi sendi secara paksa.",
      },
      {
        question: "Adakah anda mempunyai kemudahan X-ray atau MRI?",
        answer:
          "Kami tidak mempunyainya. Jika pengimejan diperlukan, sila berunding dengan doktor perubatan sebelum melawat kami.",
      },
    ],
    relatedConditions: ["shoulder-pain", "neck-pain"],
  },

  "shoulder-pain": {
    whyNotImprove:
      "Sakit bahu boleh berpunca daripada sendi itu sendiri, atau daripada otot, tendon, ligamen dan tisu lembut di sekelilingnya. Oleh kerana banyak struktur yang terlibat, masalah pada satu kawasan sering mewujudkan tekanan kompensasi pada kawasan lain — inilah sebabnya sakit boleh berterusan, merebak, atau bertambah teruk dari semasa ke semasa. Merawat satu aspek secara terpencil — seperti pereda sakit sahaja atau pengukuhan sahaja — sering kali tidak mencukupi.",
    whatCauses: [
      "Kecederaan dan koyakan rotator cuff",
      "Bursitis dan tendinitis",
      "Bahu beku (kapsulitis adhesif)",
      "Osteoartritis sendi bahu",
      "Terikan, regangan dan kecederaan tisu lembut",
      "Kecederaan bahu berkaitan sukan termasuk golf dan sukan raket",
      "Bahu tergelincir dan kerosakan rawan",
      "Sakit pergelangan tangan dan bahu yang berlaku serentak",
    ],
    approach:
      "Pendekatan kami dibentuk oleh perubatan kecederaan Shaolin — tradisi yang dikembangkan melalui rawatan kecederaan muskuloskeletal sebenar — dan diperhalusi melalui lebih 45 tahun pengalaman klinikal. Di YAPCHANKOR, kami menumpukan pada menangani keradangan, mobiliti dan kekuatan secara serentak.",
    approachPoints: [
      "Fisioterapi secara sentuhan langsung untuk mengurangkan tekanan pada sendi dan tisu di sekelilingnya",
      "Rehabilitasi berstruktur untuk memulihkan kelenturan dan kekuatan",
      "Formulasi herba proprietari kami yang telah digunakan di klinik kami selama beberapa dekad pada lebih 50,000 pesakit",
    ],
    expectation:
      "Kebanyakan pesakit mula merasakan peningkatan dalam beberapa sesi pertama. Bagi keadaan bahu kronik, kemajuan yang bermakna biasanya dirasakan dalam 7 hingga 10 sesi. Kelajuan pemulihan anda bergantung pada punca dan keterukan keadaan anda, tempoh keadaan itu berlaku, dan konsistensi anda dengan senaman yang disyorkan. Tumpuan kami adalah pada pemulihan yang mampan — bukan kelegaan jangka pendek.",
    whenToSeek: [
      "Menjejaskan tidur atau aktiviti harian anda",
      "Melibatkan sakit memancar, kebas atau rasa kesemutan ke bawah lengan",
      "Tidak bertambah baik dengan rawatan sebelumnya",
      "Membuat anda mempertimbangkan suntikan atau pembedahan",
    ],
    faqs: [
      {
        question: "Adakah saya memerlukan rujukan?",
        answer:
          "Tidak. Anda boleh membuat tempahan terus dengan kami — tiada rujukan doktor diperlukan.",
      },
      {
        question: "Berapa banyak sesi yang saya perlukan?",
        answer:
          "Kebanyakan pesakit mula merasakan peningkatan dalam beberapa sesi pertama. Keadaan kronik biasanya menunjukkan kemajuan yang bermakna dalam 7 hingga 10 sesi. Pelan penuh dibincangkan selepas penilaian awal anda.",
      },
      {
        question:
          "Adakah ini sesuai jika saya sudah mencuba fisioterapi di tempat lain?",
        answer:
          "Ya. Ramai pesakit kami datang selepas mencuba fisioterapi konvensional tanpa keputusan yang berkekalan. Pendekatan kami menangani keradangan, mobiliti dan kekuatan secara serentak — yang sering kali menjadi perbezaan utama.",
      },
      {
        question: "Adakah saya memerlukan suntikan atau manipulasi?",
        answer:
          "Tidak. Pendekatan kami tidak bergantung pada suntikan steroid atau manipulasi sendi secara paksa.",
      },
      {
        question:
          "Bolehkah anda merawat sakit pergelangan tangan dan bahu serentak?",
        answer:
          "Ya. Kami kerap merawat pesakit yang mengalami sakit pada beberapa kawasan dan akan menilai serta menangani semua kawasan yang terjejas sebagai sebahagian daripada pelan rawatan anda.",
      },
      {
        question: "Adakah anda mempunyai kemudahan X-ray atau MRI?",
        answer:
          "Kami tidak mempunyainya. Jika pengimejan diperlukan, sila berunding dengan doktor perubatan sebelum melawat kami.",
      },
    ],
    relatedConditions: ["frozen-shoulder", "neck-pain"],
  },

  "knee-pain": {
    whyNotImprove:
      "Sakit lutut boleh berpunca daripada sendi itu sendiri, ligamen, rawan, tendon atau tisu lembut di sekelilingnya. Oleh kerana lutut menanggung beban yang besar dengan hampir setiap pergerakan, masalah pada satu struktur sering mewujudkan tekanan pada struktur yang lain — menjadikan keadaan lebih sukar diselesaikan tanpa menangani pelbagai faktor penyumbang secara serentak. Keadaan seperti osteoartritis dan kecederaan ligamen khususnya cenderung terhenti apabila rawatan hanya menumpukan pada satu aspek.",
    whatCauses: [
      "Kecederaan ACL dan ligamen",
      "Koyakan meniskus (medial dan lateral)",
      "Tendinitis patellar",
      "Osteoartritis lutut",
      "Bursitis lutut",
      "Kecederaan sukan termasuk futsal, larian dan sukan mahkamah",
      "Sakit lutut berkaitan gout",
      "Kekakuan dan degenerasi lutut secara umum",
    ],
    approach:
      "Pendekatan kami dibentuk oleh perubatan kecederaan Shaolin — tradisi yang dikembangkan melalui rawatan kecederaan muskuloskeletal sebenar — dan diperhalusi melalui lebih 45 tahun pengalaman klinikal. Di YAPCHANKOR, kami menumpukan pada menangani keradangan, pergerakan dan kekuatan secara serentak.",
    approachPoints: [
      "Fisioterapi secara sentuhan langsung untuk mengurangkan tekanan pada sendi dan tisu di sekelilingnya",
      "Rehabilitasi berstruktur untuk memulihkan kelenturan dan mengukuhkan otot lutut dan kaki",
      "Formulasi herba proprietari kami yang telah digunakan di klinik kami selama beberapa dekad pada lebih 50,000 pesakit",
    ],
    expectation:
      "Kebanyakan pesakit mula merasakan peningkatan dalam 3 sesi pertama. Keadaan seperti osteoartritis lutut atau kecederaan ligamen mungkin mengambil masa sedikit lebih lama, dengan kemajuan yang bermakna biasanya dilaporkan antara 7 dan 10 sesi. Tumpuan kami adalah pada pemulihan yang mampan — bukan kelegaan jangka pendek.",
    whenToSeek: [
      "Menjejaskan kemampuan anda untuk berjalan, menaiki tangga, berlutut atau bersukan",
      "Tidak bertambah baik dengan rawatan sebelumnya",
      "Diuruskan dengan ubat penahan sakit tetapi terus berulang",
      "Membuat anda mempertimbangkan suntikan atau pembedahan",
    ],
    faqs: [
      {
        question: "Adakah saya memerlukan rujukan?",
        answer:
          "Tidak. Anda boleh membuat tempahan terus dengan kami — tiada rujukan doktor diperlukan.",
      },
      {
        question: "Berapa banyak sesi yang saya perlukan?",
        answer:
          "Kebanyakan pesakit mula merasakan peningkatan dalam 3 sesi pertama. Keadaan yang lebih kompleks biasanya menunjukkan kemajuan yang bermakna antara 7 dan 10 sesi. Pelan pemulihan penuh dibincangkan selepas penilaian awal anda.",
      },
      {
        question:
          "Adakah ini alternatif sebenar kepada suntikan atau pembedahan lutut?",
        answer:
          "Ya. Ramai pesakit kami datang kepada kami khususnya sebelum mempertimbangkan suntikan atau prosedur pembedahan. Garis panduan klinikal semasa juga menyokong percubaan rawatan konservatif berbilang disiplin terlebih dahulu — yang tepat seperti apa yang kami sediakan.",
      },
      {
        question: "Bolehkah anda merawat koyakan ligamen?",
        answer:
          "Kami boleh merawat kecederaan ligamen minor. Jika anda mengesyaki koyakan ligamen yang ketara, kami mengesyorkan anda berjumpa doktor untuk MRI terlebih dahulu. Bawa laporan tersebut bersama dan kami akan menasihatkan pelan rawatan yang paling sesuai.",
      },
      {
        question:
          "Adakah ini sesuai untuk pesakit warga emas dengan osteoartritis?",
        answer:
          "Ya. Osteoartritis lutut adalah salah satu keadaan yang paling kerap kami rawat, termasuk pada pesakit yang lebih tua. Rawatan disesuaikan mengikut keadaan dan kapasiti fizikal anda.",
      },
      {
        question: "Adakah anda mempunyai kemudahan X-ray atau MRI?",
        answer:
          "Kami tidak mempunyainya. Jika pengimejan diperlukan, sila berunding dengan doktor perubatan sebelum melawat kami.",
      },
    ],
    relatedConditions: ["osteoarthritis-knee", "hip-pain"],
  },

  "neck-pain": {
    whyNotImprove:
      "Sakit leher sering timbul daripada punca yang saling bertindih. Terikan otot akibat postur adalah perkara biasa, tetapi masalah struktur yang lebih dalam sering terlibat — termasuk spondilosis servikal atau keadaan berkaitan cakera yang mempengaruhi saraf di sekelilingnya. Apabila mampatan saraf berlaku, merawat otot sahaja sering kali tidak mencukupi. Keradangan, mobiliti dan tekanan struktur perlu ditangani secara serentak.",
    whatCauses: [
      "Terikan otot akibat kerja di meja dan penggunaan peranti berpanjangan",
      "Spondilosis servikal dan osteoartritis",
      "Cakera servikal yang herniated atau degeneratif",
      "Mampatan saraf yang menyebabkan kebas dan kesemutan pada lengan",
      "Whiplash akibat kemalangan jalan raya",
      "Kekakuan kronik dan had pergerakan servikal",
    ],
    approach:
      "Pendekatan kami dibentuk oleh perubatan kecederaan Shaolin — tradisi yang dikembangkan melalui rawatan kecederaan muskuloskeletal sebenar — dan diperhalusi melalui lebih 45 tahun pengalaman klinikal. Di YAPCHANKOR, kami menangani sakit leher dengan menyasar keradangan, memulihkan mobiliti servikal dan membina semula kekuatan yang diperlukan untuk mengekalkan pemulihan.",
    approachPoints: [
      "Fisioterapi secara sentuhan langsung",
      "Pembetulan postur dan latihan pergerakan",
      "Senaman pengukuhan berstruktur",
      "Formulasi herba proprietari kami yang telah digunakan di klinik kami selama beberapa dekad pada lebih 50,000 pesakit",
    ],
    expectation:
      "Pemulihan bergantung pada punca asas sakit leher anda. Keadaan akut mungkin bertambah baik dengan lebih cepat, manakala keadaan kronik memerlukan tempoh penjagaan berstruktur yang lebih lama. Tumpuan kami adalah pada pemulihan yang mampan dan bukannya kelegaan jangka pendek.",
    whenToSeek: [
      "Berterusan atau terus berulang",
      "Melibatkan kebas, kesemutan atau sakit memancar",
      "Menjejaskan tidur atau aktiviti harian anda",
      "Tidak bertambah baik dengan rawatan sebelumnya",
    ],
    faqs: [
      {
        question: "Adakah saya memerlukan rujukan?",
        answer:
          "Tidak. Anda boleh membuat tempahan terus dengan kami — tiada rujukan doktor diperlukan.",
      },
      {
        question: "Berapa banyak sesi yang saya perlukan?",
        answer:
          "Ia bergantung pada keterukan dan tempoh keadaan anda. Pelan penuh dibincangkan selepas penilaian awal anda.",
      },
      {
        question:
          "Bolehkah anda merawat kebas dan kesemutan yang merebak ke lengan?",
        answer:
          "Ya. Gejala-gejala ini sering dikaitkan dengan mampatan saraf di tulang belakang servikal, yang kami nilai dan uruskan sebagai sebahagian daripada rawatan.",
      },
      {
        question:
          "Adakah ini sesuai jika saya sudah mencuba fisioterapi di tempat lain?",
        answer:
          "Ya. Ramai pesakit datang kepada kami selepas mencuba fisioterapi konvensional tanpa keputusan yang berkekalan.",
      },
      {
        question: "Adakah anda mempunyai kemudahan X-ray atau MRI?",
        answer:
          "Kami tidak mempunyainya. Jika pengimejan diperlukan, sila berunding dengan doktor perubatan sebelum melawat kami.",
      },
    ],
    relatedConditions: ["shoulder-pain", "slipped-disc"],
  },

  "sprained-ankle": {
    whyNotImprove:
      "Apabila anda terseliuh buku lali, ligamen yang menyokong sendi teregang atau koyak sebahagian. Tindak balas semula jadi badan — bengkak, lebam, dan sakit — adalah sebahagian daripada proses penyembuhan. Penjagaan peringkat awal standard seperti rehat, ais, mampatan, dan penggantungan anggota boleh membantu menguruskan gejala. Walau bagaimanapun, tanpa rehabilitasi aktif dan pemulihan berstruktur, buku lali mungkin tidak memperoleh semula kekuatan dan kestabilan penuh. Ini boleh menyebabkan penyembuhan yang tidak lengkap dan peningkatan risiko terseliuh semula.",
    whatCauses: [
      "Terseliuh buku lali akut akibat sukan, terjatuh, atau permukaan yang tidak rata",
      "Terseliuh buku lali kronik atau berulang",
      "Kelonggaran ligamen dan ketidakstabilan buku lali",
      "Kecederaan buku lali dengan bengkak dan lebam",
      "Kekakuan selepas terseliuh dan had pergerakan",
    ],
    approach:
      "Pendekatan kami dibentuk oleh perubatan kecederaan Shaolin — tradisi yang dikembangkan melalui rawatan kecederaan muskuloskeletal sebenar — dan diperhalusi melalui lebih 45 tahun pengalaman klinikal. Di YAPCHANKOR, kami menyokong pemulihan dengan menangani keradangan, memulihkan mobiliti sendi, dan membina semula kestabilan.",
    approachPoints: [
      "Fisioterapi yang disasarkan untuk mengurangkan bengkak dan meningkatkan pergerakan sendi",
      "Rehabilitasi berstruktur untuk membina semula kekuatan dan kestabilan",
      "Formulasi herba proprietari kami yang telah digunakan di klinik kami selama beberapa dekad pada lebih 50,000 pesakit",
    ],
    expectation:
      "Terseliuh akut biasanya bertambah baik dengan lebih cepat berbanding kecederaan kronik atau berulang. Masa pemulihan bergantung pada keterukan kecederaan dan konsistensi dengan rehabilitasi. Tumpuan kami adalah pada pemulihan yang lengkap — bukan sekadar kembali bergerak, tetapi memulihkan kekuatan yang diperlukan untuk mencegah berulang.",
    whenToSeek: [
      "Tidak bertambah baik dengan rehat",
      "Melibatkan bengkak, lebam atau ketidakstabilan yang ketara",
      "Berulang",
      "Menyekat kemampuan anda untuk berjalan atau kembali beraktiviti",
    ],
    faqs: [
      {
        question: "Adakah saya memerlukan rujukan?",
        answer:
          "Tidak. Anda boleh membuat tempahan terus dengan kami — tiada rujukan doktor diperlukan.",
      },
      {
        question: "Berapa banyak sesi yang saya perlukan?",
        answer:
          "Ia bergantung pada keterukan kecederaan. Pelan penuh dibincangkan selepas penilaian anda.",
      },
      {
        question: "Perlukah saya berjumpa doktor sebelum datang kepada anda?",
        answer:
          "Jika anda mengesyaki patah tulang atau koyakan ligamen yang ketara, kami mengesyorkan anda berjumpa doktor untuk pengimejan terlebih dahulu.",
      },
      {
        question:
          "Bolehkah anda membantu mencegah buku lali saya daripada terseliuh semula?",
        answer:
          "Ya. Mengukuhkan dan menstabilkan buku lali adalah sebahagian teras daripada pendekatan rehabilitasi kami.",
      },
      {
        question: "Adakah anda mempunyai kemudahan X-ray atau MRI?",
        answer:
          "Kami tidak mempunyainya. Jika pengimejan diperlukan, sila berunding dengan doktor perubatan sebelum melawat kami.",
      },
    ],
    relatedConditions: ["plantar-fasciitis"],
  },

  "wrist-pain": {
    whyNotImprove:
      "Sakit pergelangan tangan boleh timbul daripada struktur yang berbeza bergantung pada puncanya. Terseliuh menjejaskan ligamen. Terikan berulang menjejaskan tendon dan tisu lembut. Keadaan seperti sindrom terowong karpal melibatkan mampatan saraf pada pergelangan tangan. Tanpa mengenal pasti punca asas, rawatan mungkin menangani isu yang salah — menyebabkan peningkatan sementara sahaja.",
    whatCauses: [
      "Terseliuh pergelangan tangan dan kecederaan tisu lembut",
      "Sindrom terowong karpal",
      "Kecederaan terikan berulang akibat penggunaan pekerjaan atau sukan",
      "Osteoartritis pergelangan tangan",
      "Tendinitis dan kerengsaan tendon",
      "Keadaan pergelangan tangan berkaitan kerja",
    ],
    approach:
      "Pendekatan kami dibentuk oleh perubatan kecederaan Shaolin — tradisi yang dikembangkan melalui rawatan kecederaan muskuloskeletal sebenar — dan diperhalusi melalui lebih 45 tahun pengalaman klinikal. Di YAPCHANKOR, kami menangani sakit pergelangan tangan dengan menyasar keradangan, memulihkan mobiliti, dan membina semula kekuatan secara serentak.",
    approachPoints: [
      "Fisioterapi secara sentuhan langsung untuk meningkatkan pergerakan dan mengurangkan tekanan",
      "Senaman rehabilitasi berstruktur untuk memulihkan fungsi",
      "Formulasi herba proprietari kami yang telah digunakan di klinik kami selama beberapa dekad pada lebih 50,000 pesakit",
    ],
    expectation:
      "Pemulihan bergantung pada sifat dan keterukan keadaan tersebut. Sesetengah keadaan bertambah baik dengan lebih cepat, manakala yang lain memerlukan tempoh penjagaan berstruktur yang lebih lama. Tumpuan kami adalah pada pemulihan yang mampan dan bukannya kelegaan jangka pendek.",
    whenToSeek: [
      "Menjejaskan kemampuan anda untuk bekerja atau menjalankan tugas harian",
      "Melibatkan kesemutan, kebas atau rasa seperti dicucuk jarum",
      "Tidak bertambah baik dengan rehat atau rawatan sebelumnya",
      "Membuat anda mempertimbangkan pembedahan sebagai langkah seterusnya",
    ],
    faqs: [
      {
        question: "Adakah saya memerlukan rujukan?",
        answer:
          "Tidak. Anda boleh membuat tempahan terus dengan kami — tiada rujukan doktor diperlukan.",
      },
      {
        question: "Berapa banyak sesi yang saya perlukan?",
        answer:
          "Ia bergantung pada keadaan dan keterukannya. Pelan penuh dibincangkan selepas penilaian anda.",
      },
      {
        question:
          "Bolehkah anda merawat sindrom terowong karpal tanpa pembedahan?",
        answer:
          "Ya. Rawatan konservatif biasanya disyorkan sebagai langkah pertama, dan ramai pesakit mengalami peningkatan tanpa pembedahan.",
      },
      {
        question:
          "Adakah ini sesuai untuk keadaan pergelangan tangan berkaitan kerja?",
        answer:
          "Ya. Terikan berulang dan keadaan pergelangan tangan pekerjaan adalah antara kes yang paling kerap kami rawat.",
      },
      {
        question: "Adakah anda mempunyai kemudahan X-ray atau MRI?",
        answer:
          "Kami tidak mempunyainya. Jika pengimejan diperlukan, sila berunding dengan doktor perubatan sebelum melawat kami.",
      },
    ],
    relatedConditions: ["elbow-pain", "shoulder-pain"],
  },

  "plantar-fasciitis": {
    whyNotImprove:
      "Fasciitis plantar melibatkan keradangan fascia plantar — jalur tisu yang menghubungkan tumit anda ke jari-jari kaki. Tanpa mengurangkan keradangan secara aktif dan membina semula kekuatan kaki, keadaan ini mungkin berterusan atau berulang.",
    whatCauses: [
      "Fasciitis plantar dan sakit tumit kronik",
      "Taji tulang tumit (taji kalkaneal)",
      "Kekakuan tendon Achilles yang menyumbang kepada sakit tumit",
      "Tekanan kaki akibat berdiri atau berjalan berpanjangan",
      "Sakit tumit yang bertambah teruk selepas berehat",
    ],
    approach:
      "Pendekatan kami dibentuk oleh perubatan kecederaan Shaolin — tradisi yang dikembangkan melalui rawatan kecederaan muskuloskeletal sebenar — dan diperhalusi melalui lebih 45 tahun pengalaman klinikal. Di YAPCHANKOR, kami menangani fasciitis plantar dengan mengurangkan keradangan dan memulihkan kekuatan yang diperlukan untuk sokongan kaki jangka panjang.",
    approachPoints: [
      "Fisioterapi yang disasarkan untuk mengurangkan tekanan pada fascia plantar dan struktur di sekelilingnya",
      "Senaman pengukuhan berstruktur untuk kaki dan bahagian bawah kaki",
      "Formulasi herba proprietari kami yang telah digunakan di klinik kami selama beberapa dekad pada lebih 50,000 pesakit",
    ],
    expectation:
      "Pemulihan bergantung pada keterukan dan tempoh keadaan anda, serta konsistensi dengan rawatan dan senaman. Ramai pesakit mula merasakan peningkatan apabila rawatan berkembang. Tumpuan kami adalah pada menyelesaikan keadaan dan menyokong fungsi jangka panjang.",
    whenToSeek: [
      "Bertambah teruk semasa langkah pertama anda di waktu pagi atau selepas berehat",
      "Menjejaskan kemampuan anda untuk berjalan atau berdiri dengan selesa",
      "Tidak bertambah baik dengan rawatan sebelumnya",
      "Membuat anda mempertimbangkan suntikan sebagai langkah seterusnya",
    ],
    faqs: [
      {
        question: "Adakah saya memerlukan rujukan?",
        answer:
          "Tidak. Anda boleh membuat tempahan terus dengan kami — tiada rujukan doktor diperlukan.",
      },
      {
        question: "Berapa banyak sesi yang saya perlukan?",
        answer:
          "Ia bergantung pada keterukan dan tempoh keadaan anda. Pelan penuh dibincangkan selepas penilaian anda.",
      },
      {
        question: "Bolehkah anda merawat taji tulang tumit?",
        answer:
          "Ya. Taji tulang tumit sering berlaku bersama fasciitis plantar. Rawatan menumpukan pada mengurangkan keradangan dan meningkatkan fungsi.",
      },
      {
        question:
          "Perlukah saya berhenti berjalan atau bersenam semasa rawatan?",
        answer:
          "Ahli fisioterapi anda akan memberi nasihat berdasarkan keadaan anda. Pengubahsuaian aktiviti mungkin disyorkan.",
      },
      {
        question: "Perlukah saya menggunakan ortotik?",
        answer:
          "Ortotik mungkin memberikan sokongan sementara. Kami juga menumpukan pada mengukuhkan kaki untuk menyokong pemulihan jangka panjang.",
      },
      {
        question: "Adakah anda mempunyai kemudahan X-ray atau MRI?",
        answer:
          "Kami tidak mempunyainya. Jika pengimejan diperlukan, sila berunding dengan doktor perubatan sebelum melawat kami.",
      },
    ],
    relatedConditions: ["sprained-ankle", "knee-pain"],
  },

  "lower-back-pain": {
    whyNotImprove:
      "Sakit belakang bawah jarang berpunca daripada satu punca sahaja. Ia mungkin melibatkan terikan otot atau ligamen, cakera yang tergelincir atau herniated, degenerasi sendi seperti artritis, ketidakaturan tulang belakang seperti skoliosis, atau mampatan saraf yang menyebabkan saraf tersepit. Oleh kerana faktor-faktor ini sering bertindih, merawat hanya satu aspek — seperti pereda sakit sahaja atau senaman sahaja — mungkin tidak dapat menyelesaikan keadaan sepenuhnya.",
    whatCauses: [
      "Terikan otot dan ligamen",
      "Cakera yang tergelincir atau herniated",
      "Saraf tersepit dan sakit berkaitan saraf",
      "Osteoartritis dan degenerasi tulang belakang",
      "Skoliosis dan ketidakseimbangan postur",
      "Masalah mampatan berkaitan osteoporosis",
    ],
    approach:
      "Pendekatan kami dibentuk oleh perubatan kecederaan Shaolin — tradisi yang dikembangkan melalui rawatan kecederaan muskuloskeletal sebenar — dan diperhalusi melalui lebih 45 tahun pengalaman klinikal. Di YAPCHANKOR, kami menumpukan pada menangani keradangan, memulihkan pergerakan, dan membina semula kekuatan secara serentak.",
    approachPoints: [
      "Fisioterapi secara sentuhan langsung untuk mengurangkan tekanan dan meningkatkan mobiliti",
      "Rehabilitasi berstruktur untuk memulihkan fungsi dan kestabilan",
      "Formulasi herba proprietari kami yang telah digunakan di klinik kami selama beberapa dekad pada lebih 50,000 pesakit",
    ],
    expectation:
      "Sakit belakang bawah sering berkembang dari masa ke masa, dan pemulihan juga mengambil masa. Sesetengah pesakit merasakan peningkatan lebih awal, manakala keadaan yang lebih kronik memerlukan tempoh penjagaan berstruktur yang lebih lama. Tumpuan kami adalah pada pemulihan yang mampan dan bukannya kelegaan jangka pendek.",
    whenToSeek: [
      "Berterusan atau terus berulang",
      "Melibatkan kebas atau kesemutan ke bawah kaki",
      "Menjejaskan tidur, kerja, atau mobiliti anda",
      "Tidak bertambah baik dengan rawatan sebelumnya",
    ],
    faqs: [
      {
        question: "Adakah saya memerlukan rujukan?",
        answer:
          "Tidak. Anda boleh membuat tempahan terus dengan kami — tiada rujukan doktor diperlukan.",
      },
      {
        question: "Berapa banyak sesi yang saya perlukan?",
        answer:
          "Ia bergantung pada keterukan dan tempoh keadaan anda. Pelan penuh dibincangkan selepas penilaian anda.",
      },
      {
        question: "Bolehkah anda merawat saraf tersepit?",
        answer:
          "Ya. Saraf tersepit, yang melibatkan sakit berkaitan saraf yang memancar ke bawah kaki, adalah salah satu keadaan yang kami nilai dan uruskan sebagai sebahagian daripada rawatan belakang bawah.",
      },
      {
        question: "Adakah ini sesuai jika saya sudah mencuba rawatan lain?",
        answer:
          "Ya. Ramai pesakit datang kepada kami selepas mencuba pendekatan lain tanpa peningkatan yang berkekalan.",
      },
      {
        question: "Adakah anda mempunyai kemudahan X-ray atau MRI?",
        answer:
          "Kami tidak menyediakan pengimejan. Jika diperlukan, sila berunding dengan doktor perubatan sebelum melawat kami.",
      },
    ],
    relatedConditions: ["back-pain", "sciatica", "slipped-disc"],
  },

  "slipped-disc": {
    whyNotImprove:
      "Cakera yang tergelincir bukan sekadar masalah struktur — ia sering melibatkan gabungan anjakan cakera yang mempengaruhi saraf di sekelilingnya, keradangan yang menyumbang kepada sakit dan kerengsaan saraf, serta mobiliti yang berkurang dan kelemahan otot di sekitar tulang belakang. Apabila rawatan hanya menumpukan pada satu aspek, seperti pereda sakit sahaja, gejala mungkin bertambah baik sementara tetapi berulang apabila faktor asas tidak ditangani secara serentak.",
    whatCauses: [
      "Cakera yang herniated atau menonjol di tulang belakang lumbar (contohnya L4/L5, L5/S1)",
      "Keadaan cakera servikal yang menjejaskan leher",
      "Saraf tersepit dengan sakit memancar ke bawah kaki",
      "Mampatan saraf yang menyebabkan kebas pada lengan atau kaki",
      "Sakit belakang bawah atau leher berkaitan cakera",
    ],
    approach:
      "Pendekatan kami dibentuk oleh perubatan kecederaan Shaolin — tradisi yang dikembangkan melalui rawatan kecederaan muskuloskeletal sebenar — dan diperhalusi melalui lebih 45 tahun pengalaman klinikal. Di YAPCHANKOR, kami menumpukan pada mengurangkan keradangan, memulihkan pergerakan, dan membina semula sokongan tulang belakang untuk menstabilkan pemulihan.",
    approachPoints: [
      "Fisioterapi secara sentuhan langsung untuk mengurangkan tekanan dan meningkatkan mobiliti",
      "Rehabilitasi berstruktur untuk memulihkan kekuatan dan kestabilan tulang belakang",
      "Formulasi herba proprietari kami yang telah digunakan di klinik kami selama beberapa dekad pada lebih 50,000 pesakit",
    ],
    expectation:
      "Pemulihan bergantung pada keterukan keadaan cakera, tempoh gejala, dan konsistensi dengan rawatan dan rehabilitasi. Sesetengah pesakit merasakan peningkatan lebih awal, manakala keadaan yang lebih berterusan memerlukan tempoh penjagaan berstruktur yang lebih lama. Tumpuan kami adalah pada pemulihan yang mampan dan bukannya kelegaan gejala jangka pendek.",
    whenToSeek: [
      "Melibatkan sakit belakang atau leher yang berterusan",
      "Termasuk kebas, kesemutan, atau kelemahan pada anggota badan",
      "Menjejaskan aktiviti harian atau kerja anda",
      "Tidak bertambah baik dengan rawatan sebelumnya",
    ],
    faqs: [
      {
        question: "Adakah saya memerlukan rujukan?",
        answer:
          "Tidak. Anda boleh membuat tempahan terus dengan kami — tiada rujukan doktor diperlukan.",
      },
      {
        question: "Berapa banyak sesi yang saya perlukan?",
        answer:
          "Ia bergantung pada keterukan dan tempoh keadaan anda. Pelan penuh dibincangkan selepas penilaian anda.",
      },
      {
        question:
          "Bolehkah cakera yang tergelincir dirawat tanpa pembedahan?",
        answer:
          "Banyak keadaan berkaitan cakera diuruskan secara konservatif. Garis panduan klinikal mengesyorkan memulakan dengan rawatan bukan invasif sebelum mempertimbangkan pembedahan.",
      },
      {
        question: "Bolehkah anda merawat saraf tersepit?",
        answer:
          "Ya. Saraf tersepit, yang melibatkan sakit berkaitan saraf ke bawah kaki, adalah salah satu keadaan yang kami nilai dan uruskan.",
      },
      {
        question: "Adakah anda mempunyai kemudahan X-ray atau MRI?",
        answer:
          "Kami tidak menyediakan pengimejan. Jika diperlukan, sila berunding dengan doktor perubatan sebelum melawat kami.",
      },
    ],
    relatedConditions: ["sciatica", "lower-back-pain", "back-pain"],
  },

  "osteoarthritis-knee": {
    whyNotImprove:
      "Osteoartritis lutut bukan sekadar masalah haus dan lusuh. Ia sering melibatkan gabungan degenerasi rawan di dalam sendi, keradangan yang menyumbang kepada sakit dan kekakuan, mobiliti sendi dan fungsi yang berkurang, serta pelemahan otot di sekelilingnya akibat penggunaan yang berkurang. Tanpa menangani fungsi sendi dan sokongan otot di sekelilingnya, keadaan ini mungkin terus menyekat mobiliti dari masa ke masa.",
    whatCauses: [
      "Degenerasi sendi berkaitan usia",
      "Berat badan berlebihan yang meningkatkan beban pada lutut",
      "Terikan berulang akibat aktiviti seperti larian atau sukan",
      "Kecederaan lutut sebelumnya",
      "Faktor keturunan",
    ],
    approach:
      "Pendekatan kami dibentuk oleh perubatan kecederaan Shaolin — tradisi yang dikembangkan melalui rawatan kecederaan muskuloskeletal sebenar — dan diperhalusi melalui lebih 45 tahun pengalaman klinikal. Di YAPCHANKOR, kami menumpukan pada mengurangkan keradangan, meningkatkan mobiliti sendi, dan mengukuhkan struktur yang menyokong lutut.",
    approachPoints: [
      "Fisioterapi secara sentuhan langsung untuk mengurangkan tekanan dan meningkatkan pergerakan sendi",
      "Rehabilitasi berstruktur untuk memulihkan kekuatan dan mobiliti",
      "Formulasi herba proprietari kami yang telah digunakan di klinik kami selama beberapa dekad pada lebih 50,000 pesakit",
    ],
    expectation:
      "Osteoartritis lutut adalah keadaan kronik yang berkembang dari masa ke masa, dan pemulihan juga memerlukan pendekatan berstruktur dari masa ke masa. Ramai pesakit mula merasakan peningkatan apabila rawatan berkembang. Tumpuan kami adalah pada meningkatkan fungsi dan mengurangkan ketidakselesaan secara mampan.",
    whenToSeek: [
      "Menjejaskan kemampuan anda untuk berjalan, menaiki tangga, atau berdiri dengan selesa",
      "Semakin bertambah teruk",
      "Tidak bertambah baik dengan rawatan sebelumnya",
      "Membuat anda mempertimbangkan suntikan atau pembedahan",
    ],
    faqs: [
      {
        question: "Adakah saya memerlukan rujukan?",
        answer:
          "Tidak. Anda boleh membuat tempahan terus dengan kami — tiada rujukan doktor diperlukan.",
      },
      {
        question: "Berapa banyak sesi yang saya perlukan?",
        answer:
          "Ia bergantung pada keterukan dan tempoh keadaan anda. Pelan penuh dibincangkan selepas penilaian anda.",
      },
      {
        question:
          "Adakah ini sesuai sebelum mempertimbangkan suntikan atau pembedahan?",
        answer:
          "Ya. Penjagaan konservatif biasanya disyorkan sebagai langkah pertama untuk osteoartritis lutut.",
      },
      {
        question: "Bolehkah pesakit warga emas menjalani rawatan ini?",
        answer:
          "Ya. Rawatan disesuaikan berdasarkan keadaan dan kapasiti fizikal anda.",
      },
      {
        question: "Adakah anda mempunyai kemudahan X-ray atau MRI?",
        answer:
          "Kami tidak menyediakan pengimejan. Jika diperlukan, sila berunding dengan doktor perubatan sebelum melawat kami.",
      },
    ],
    relatedConditions: ["knee-pain", "osteoarthritis"],
  },

  "osteoarthritis": {
    whyNotImprove:
      "Osteoartritis pinggul bukan sekadar masalah haus dan lusuh. Ia sering melibatkan gabungan degenerasi rawan di dalam sendi pinggul, keradangan yang menyumbang kepada sakit dan kekakuan, julat pergerakan dan mobiliti sendi yang berkurang, serta pelemahan otot di sekelilingnya akibat penggunaan yang berkurang. Tanpa menangani fungsi sendi dan sokongan otot, keadaan ini mungkin terus menyekat mobiliti dari masa ke masa.",
    whatCauses: [
      "Degenerasi sendi berkaitan usia",
      "Kecederaan pinggul sebelumnya",
      "Tekanan berulang pada sendi pinggul",
      "Kelemahan otot yang menjejaskan sokongan sendi",
      "Faktor keturunan",
    ],
    approach:
      "Pendekatan kami dibentuk oleh perubatan kecederaan Shaolin — tradisi yang dikembangkan melalui rawatan kecederaan muskuloskeletal sebenar — dan diperhalusi melalui lebih 45 tahun pengalaman klinikal. Di YAPCHANKOR, kami menumpukan pada mengurangkan keradangan, meningkatkan mobiliti pinggul, dan mengukuhkan struktur yang menyokong sendi.",
    approachPoints: [
      "Fisioterapi secara sentuhan langsung untuk meningkatkan pergerakan sendi dan mengurangkan tekanan",
      "Rehabilitasi berstruktur untuk memulihkan kekuatan dan mobiliti",
      "Formulasi herba proprietari kami yang telah digunakan di klinik kami selama beberapa dekad pada lebih 50,000 pesakit",
    ],
    expectation:
      "Osteoartritis pinggul berkembang dari masa ke masa, dan pemulihan juga memerlukan pendekatan yang berstruktur dan konsisten. Ramai pesakit mula merasakan peningkatan apabila rawatan berkembang. Tumpuan kami adalah pada meningkatkan mobiliti dan mengurangkan ketidakselesaan secara mampan.",
    whenToSeek: [
      "Menjejaskan kemampuan anda untuk berjalan atau berdiri dengan selesa",
      "Semakin bertambah teruk",
      "Tidak bertambah baik dengan rawatan sebelumnya",
      "Membuat anda mempertimbangkan suntikan atau pembedahan",
    ],
    faqs: [
      {
        question: "Adakah saya memerlukan rujukan?",
        answer:
          "Tidak. Anda boleh membuat tempahan terus dengan kami — tiada rujukan doktor diperlukan.",
      },
      {
        question: "Berapa banyak sesi yang saya perlukan?",
        answer:
          "Ia bergantung pada keterukan dan tempoh keadaan anda. Pelan penuh dibincangkan selepas penilaian anda.",
      },
      {
        question:
          "Adakah ini sesuai sebelum mempertimbangkan suntikan atau pembedahan?",
        answer:
          "Ya. Penjagaan konservatif biasanya disyorkan sebagai langkah pertama untuk osteoartritis pinggul.",
      },
      {
        question: "Adakah ini sesuai untuk pesakit yang lebih tua?",
        answer:
          "Ya. Rawatan disesuaikan berdasarkan keadaan dan kapasiti fizikal anda.",
      },
      {
        question: "Adakah anda mempunyai kemudahan X-ray atau MRI?",
        answer:
          "Kami tidak menyediakan pengimejan. Jika diperlukan, sila berunding dengan doktor perubatan sebelum melawat kami.",
      },
    ],
    relatedConditions: ["hip-pain", "osteoarthritis-knee"],
  },

  "sciatica": {
    whyNotImprove:
      "Saraf tersepit bukan sekadar masalah saraf. Ia sering melibatkan gabungan masalah berkaitan cakera seperti cakera yang tergelincir atau menonjol, keradangan yang menjejaskan saraf, kekakuan otot yang memberi tekanan tambahan pada saraf, serta mobiliti dan kekuatan yang berkurang di bahagian belakang bawah dan pinggul. Apabila rawatan hanya menumpukan pada pereda sakit, gejala mungkin bertambah baik sementara tetapi berulang kerana punca asas tidak ditangani secara serentak.",
    whatCauses: [
      "Cakera yang tergelincir atau herniated (tulang belakang lumbar)",
      "Mampatan saraf di bahagian belakang bawah",
      "Tekanan berkaitan otot pada saraf siatik",
      "Ketidakseimbangan postur atau pergerakan",
      "Keadaan belakang bawah yang berulang yang membawa kepada kerengsaan saraf",
    ],
    approach:
      "Pendekatan kami dibentuk oleh perubatan kecederaan Shaolin — tradisi yang dikembangkan melalui rawatan kecederaan muskuloskeletal sebenar — dan diperhalusi melalui lebih 45 tahun pengalaman klinikal. Di YAPCHANKOR, kami menangani saraf tersepit dengan mengurangkan keradangan di sekeliling saraf, memulihkan pergerakan, dan membina semula kekuatan yang diperlukan untuk pemulihan jangka panjang.",
    approachPoints: [
      "Fisioterapi secara sentuhan langsung untuk mengurangkan tekanan pada saraf dan meningkatkan mobiliti",
      "Rehabilitasi berstruktur untuk memulihkan kekuatan dan corak pergerakan",
      "Formulasi herba proprietari kami yang telah digunakan di klinik kami selama beberapa dekad pada lebih 50,000 pesakit",
    ],
    expectation:
      "Saraf tersepit boleh berbeza-beza dengan ketara dalam keterukannya. Sesetengah pesakit mengalami peningkatan lebih awal, manakala yang lain memerlukan tempoh penjagaan berstruktur yang lebih lama bergantung pada punca dan tempoh gejala. Tumpuan kami adalah pada pemulihan yang mampan dan bukannya kelegaan gejala jangka pendek.",
    whenToSeek: [
      "Termasuk sakit memancar dari belakang bawah ke dalam kaki",
      "Melibatkan kebas, kesemutan, atau kelemahan",
      "Menjejaskan kemampuan anda untuk berjalan, duduk, atau bekerja",
      "Tidak bertambah baik dengan rawatan sebelumnya",
    ],
    faqs: [
      {
        question: "Adakah saya memerlukan rujukan?",
        answer:
          "Tidak. Anda boleh membuat tempahan terus dengan kami — tiada rujukan doktor diperlukan.",
      },
      {
        question: "Berapa banyak sesi yang saya perlukan?",
        answer:
          "Ia bergantung pada punca dan keterukan keadaan anda. Pelan penuh dibincangkan selepas penilaian anda.",
      },
      {
        question: "Adakah saraf tersepit berkaitan dengan cakera yang tergelincir?",
        answer:
          "Dalam banyak kes, saraf tersepit dikaitkan dengan masalah berkaitan cakera di bahagian belakang bawah. Perkara ini dinilai semasa lawatan pertama anda.",
      },
      {
        question:
          "Bolehkah ini dirawat tanpa suntikan atau pembedahan?",
        answer:
          "Penjagaan konservatif biasanya disyorkan sebagai langkah pertama untuk saraf tersepit.",
      },
      {
        question: "Adakah anda mempunyai kemudahan X-ray atau MRI?",
        answer:
          "Kami tidak menyediakan pengimejan. Jika diperlukan, sila berunding dengan doktor perubatan sebelum melawat kami.",
      },
    ],
    relatedConditions: ["slipped-disc", "lower-back-pain", "back-pain"],
  },

  "hip-pain": {
    whyNotImprove:
      "Sakit pinggul jarang disebabkan oleh satu punca sahaja. Ia sering melibatkan gabungan kekakuan otot dan ketidakseimbangan di sekeliling sendi pinggul, kekakuan sendi yang mengurangkan julat pergerakan, keradangan yang menjejaskan tisu di sekelilingnya, dan corak pergerakan yang terus menekan sendi. Oleh kerana pinggul adalah sendi yang dalam dan menanggung beban, masalah di sini juga boleh menjejaskan belakang bawah, lutut, dan postur keseluruhan. Apabila rawatan hanya menumpukan pada satu aspek — seperti pereda sakit sahaja — gejala mungkin berulang apabila faktor asas tidak ditangani secara serentak.",
    whatCauses: [
      "Terikan otot dan kecederaan tisu lembut di sekeliling pinggul",
      "Kekakuan sendi pinggul dan had pergerakan",
      "Kerengsaan tendon (contohnya tendinitis pinggul)",
      "Kecederaan pinggul berkaitan sukan",
      "Ketidakseimbangan postur atau pergerakan",
      "Sakit yang dirujuk dari belakang bawah",
    ],
    approach:
      "Pendekatan kami dibentuk oleh perubatan kecederaan Shaolin — tradisi yang dikembangkan melalui rawatan kecederaan muskuloskeletal sebenar — dan diperhalusi melalui lebih 45 tahun pengalaman klinikal. Di YAPCHANKOR, kami menangani sakit pinggul dengan mengurangkan keradangan, memulihkan mobiliti sendi, dan membina semula kekuatan untuk menyokong pergerakan jangka panjang.",
    approachPoints: [
      "Fisioterapi secara sentuhan langsung untuk mengurangkan ketegangan dan meningkatkan pergerakan sendi",
      "Rehabilitasi berstruktur untuk memulihkan kekuatan dan mobiliti",
      "Formulasi herba proprietari kami yang telah digunakan di klinik kami selama beberapa dekad pada lebih 50,000 pesakit",
    ],
    expectation:
      "Pemulihan bergantung pada punca dan tempoh sakit pinggul anda. Sesetengah keadaan bertambah baik dengan lebih cepat, manakala yang lain memerlukan tempoh penjagaan berstruktur yang lebih lama. Tumpuan kami adalah pada memulihkan fungsi dan mengurangkan ketidakselesaan secara mampan.",
    whenToSeek: [
      "Menjejaskan kemampuan anda untuk berjalan, duduk, atau bergerak dengan selesa",
      "Terus berulang walaupun selepas berehat atau rawatan",
      "Merebak ke belakang bawah atau lutut anda",
      "Tidak bertambah baik dengan rawatan sebelumnya",
    ],
    faqs: [
      {
        question: "Adakah saya memerlukan rujukan?",
        answer:
          "Tidak. Anda boleh membuat tempahan terus dengan kami — tiada rujukan doktor diperlukan.",
      },
      {
        question: "Berapa banyak sesi yang saya perlukan?",
        answer:
          "Ia bergantung pada punca dan keterukan keadaan anda. Pelan penuh dibincangkan selepas penilaian anda.",
      },
      {
        question: "Adakah sakit pinggul berkaitan dengan masalah belakang bawah?",
        answer:
          "Dalam banyak kes, sakit pinggul dikaitkan dengan masalah belakang bawah atau berkaitan pergerakan. Perkara ini dinilai semasa lawatan anda.",
      },
      {
        question:
          "Bolehkah ini dirawat tanpa suntikan atau pembedahan?",
        answer:
          "Penjagaan konservatif biasanya disyorkan sebagai langkah pertama untuk kebanyakan keadaan berkaitan pinggul.",
      },
      {
        question: "Adakah anda mempunyai kemudahan X-ray atau MRI?",
        answer:
          "Kami tidak menyediakan pengimejan. Jika diperlukan, sila berunding dengan doktor perubatan sebelum melawat kami.",
      },
    ],
    relatedConditions: ["osteoarthritis", "knee-pain", "lower-back-pain"],
  },

  "elbow-pain": {
    whyNotImprove:
      "Sakit siku biasanya bukan sekadar masalah sendi yang terpencil. Ia sering melibatkan gabungan penggunaan berlebihan otot dan tendon lengan bawah, keradangan pada titik lampiran tendon, terikan berulang akibat aktiviti kerja atau sukan, serta kelemahan pada kumpulan otot yang menyokong. Oleh kerana faktor-faktor ini berkembang dari masa ke masa, sekadar merehatkan siku mungkin tidak dapat menyelesaikan keadaan sepenuhnya. Tanpa memulihkan kekuatan dan mengurangkan tekanan asas, gejala sering berulang apabila aktiviti disambung semula.",
    whatCauses: [
      "Siku tenis (sakit siku luar)",
      "Siku pemain golf (sakit siku dalam)",
      "Kecederaan terikan berulang akibat kerja pejabat atau buruh manual",
      "Kerengsaan tendon akibat sukan seperti badminton, tenis, atau golf",
      "Kekakuan dan kelemahan siku secara umum",
    ],
    approach:
      "Pendekatan kami dibentuk oleh perubatan kecederaan Shaolin — tradisi yang dikembangkan melalui rawatan kecederaan muskuloskeletal sebenar — dan diperhalusi melalui lebih 45 tahun pengalaman klinikal. Di YAPCHANKOR, kami menangani sakit siku dengan mengurangkan keradangan, memulihkan pergerakan, dan membina semula kekuatan untuk mencegah berulang.",
    approachPoints: [
      "Fisioterapi secara sentuhan langsung untuk mengurangkan tekanan dan meningkatkan pergerakan",
      "Rehabilitasi berstruktur untuk memulihkan kekuatan pada lengan bawah dan siku",
      "Formulasi herba proprietari kami yang telah digunakan di klinik kami selama beberapa dekad pada lebih 50,000 pesakit",
    ],
    expectation:
      "Sakit siku yang disebabkan oleh terikan berulang biasanya bertambah baik dengan rawatan berstruktur, walaupun pemulihan bergantung pada tempoh keadaan itu berlaku, tahap tekanan yang dikenakan pada siku, dan konsistensi dengan senaman rehabilitasi. Tumpuan kami adalah pada pemulihan yang mampan dan mencegah berulang.",
    whenToSeek: [
      "Menjejaskan kemampuan anda untuk memegang, mengangkat, atau membawa objek",
      "Bertambah teruk dengan penggunaan berulang",
      "Tidak bertambah baik dengan rehat atau rawatan sebelumnya",
      "Terus berulang apabila anda menyambung semula aktiviti",
    ],
    faqs: [
      {
        question: "Adakah saya memerlukan rujukan?",
        answer:
          "Tidak. Anda boleh membuat tempahan terus dengan kami — tiada rujukan doktor diperlukan.",
      },
      {
        question: "Berapa banyak sesi yang saya perlukan?",
        answer:
          "Ia bergantung pada keterukan dan tempoh keadaan anda. Pelan penuh dibincangkan selepas penilaian anda.",
      },
      {
        question:
          "Adakah ini sesuai jika saya banyak menggunakan tangan untuk bekerja?",
        answer:
          "Ya. Banyak kes sakit siku berkaitan kerja, dan rawatan termasuk panduan untuk mengurangkan tekanan sambil mengekalkan aktiviti.",
      },
      {
        question:
          "Bolehkah ini dirawat tanpa suntikan atau pembedahan?",
        answer:
          "Penjagaan konservatif biasanya disyorkan sebagai langkah pertama untuk keadaan berkaitan tendon.",
      },
      {
        question: "Adakah anda mempunyai kemudahan X-ray atau MRI?",
        answer:
          "Kami tidak menyediakan pengimejan. Jika diperlukan, sila berunding dengan doktor perubatan sebelum melawat kami.",
      },
    ],
    relatedConditions: ["wrist-pain", "shoulder-pain"],
  },
  "post-surgery-rehab": {
    title: "Pemulihan Selepas Pembedahan dan Kecederaan di Malaysia",
    subtitle: "Pemulihan Berstruktur untuk Mengembalikan Fungsi Selepas Kecederaan atau Pembedahan",
    intro: "Pemulihan daripada kecederaan atau pembedahan tidak berakhir apabila prosedur atau rawatan awal selesai.\n\nRamai pesakit mendapati bahawa walaupun selepas rawatan perubatan, mereka terus mengalami kekakuan, kelemahan, pergerakan terhad, atau kesakitan berulang. Tanpa pemulihan yang betul, proses baik pulih mungkin kekal tidak lengkap.\n\nDi YAPCHANKOR, kami menyokong pesakit dalam fasa pemulihan — membantu memulihkan pergerakan, membina semula kekuatan, dan kembali kepada aktiviti biasa dengan pendekatan berstruktur dan bersepadu.",
    whyNotImprove: "Selepas kecederaan atau pembedahan, tubuh melalui proses penyembuhan — tetapi penyembuhan sahaja tidak selalu memulihkan fungsi sepenuhnya.\n\nTanpa pemulihan berstruktur, faktor seperti pergerakan yang terhad, kelemahan otot, dan kekakuan boleh membawa kepada ketidakselesaan yang berpanjangan atau pemulihan yang tidak lengkap.",
    whatCauses: [
      "Pergerakan terhad pada sendi atau kawasan yang terjejas",
      "Kelemahan otot akibat tidak digunakan",
      "Tisu parut atau kekakuan yang mengehadkan pergerakan",
      "Keradangan berpanjangan yang menjejaskan pemulihan",
      "Takut untuk bergerak atau kecederaan semula"
    ],
    approach: "Pendekatan kami dibentuk oleh perubatan kecederaan Shaolin — tradisi yang dikembangkan melalui rawatan kecederaan sebenar — dan diperhalusi melalui lebih 45 tahun pengalaman klinikal. Di YAPCHANKOR, kami memberi tumpuan kepada menyokong pemulihan selepas fasa perubatan awal — memulihkan fungsi, pergerakan, dan kekuatan secara berstruktur.",
    approachPoints: [
      "Fisioterapi secara sentuhan langsung untuk meningkatkan pergerakan dan mengurangkan kekakuan",
      "Pemulihan berstruktur untuk membina semula kekuatan dan koordinasi",
      "Formulasi herba proprietari yang digunakan di klinik kami selama beberapa dekad pada lebih 50,000 pesakit, dan dikaji untuk sifat anti-radangnya melalui penyelidikan makmal"
    ],
    expectation: "Garis masa pemulihan berbeza-beza bergantung pada jenis kecederaan atau pembedahan, berapa lama prosedur itu berlaku, mobiliti asas anda, dan konsistensi dengan pemulihan. Fokus kami adalah untuk memulihkan fungsi dan membantu anda mendapatkan semula keyakinan dalam pergerakan dari masa ke masa.",
    whenToSeek: [
      "berasa kaku atau lemah selepas kecederaan atau pembedahan",
      "tidak mendapat pergerakan penuh",
      "mengalami ketidakselesaan berterusan selepas rawatan awal",
      "mahu kembali dengan selamat kepada aktiviti biasa"
    ],
    faqs: [
      { question: "Adakah saya memerlukan rujukan?", answer: "Tidak. Anda boleh membuat tempahan terus dengan kami — tiada rujukan doktor diperlukan." },
      { question: "Bila saya harus mulakan pemulihan?", answer: "Ini bergantung pada keadaan anda dan nasihat perubatan. Kami boleh menilai dan membimbing anda berdasarkan tahap pemulihan anda." },
      { question: "Bolehkah anda bekerjasama dengan doktor atau pakar bedah saya?", answer: "Ya. Peranan kami adalah untuk menyokong pemulihan anda bersama-sama dengan penjagaan perubatan sedia ada." },
      { question: "Adakah ini sesuai selepas pembedahan?", answer: "Ya. Pemulihan selepas pembedahan adalah salah satu bidang utama yang kami sokong." },
      { question: "Adakah anda mempunyai kemudahan X-ray atau MRI?", answer: "Kami tidak menyediakan pengimejan. Sila bawa sebarang laporan sedia ada jika ada." }
    ],
    relatedConditions: ["osteoarthritis-knee", "slipped-disc", "shoulder-pain"]
  },
  "chronic-pain": {
    title: "Rawatan Kesakitan Kronik di Malaysia",
    subtitle: "Apabila Kesakitan Terus Berulang, Pasti Ada Sebabnya",
    intro: "Ramai yang datang kepada kami dengan pengalaman yang sama. Kesakitan reda seketika — selepas berehat, ubat, urutan, atau rawatan — tetapi kemudian ia kembali lagi.\n\nLama kelamaan, kitaran ini menjadi mengecewakan. Anda mula terfikir sama ada keadaan ini akan sembuh sepenuhnya.\n\nDi YAPCHANKOR, kami kerap melihat pesakit yang telah berhadapan dengan kesakitan selama berbulan-bulan atau bertahun-tahun. Dalam banyak kes ini, masalahnya bukanlah kerana kesakitan itu tidak boleh bertambah baik — tetapi ia belum ditangani dengan cara yang berstruktur.",
    whyNotImprove: "Kesakitan tidak selalu disebabkan oleh satu masalah. Apabila hanya satu bahagian masalah yang dirawat — contohnya, mengurangkan kesakitan tanpa memulihkan pergerakan — keadaan mungkin bertambah baik buat sementara waktu tetapi kembali berulang.",
    whatCauses: [
      "keradangan tersembunyi yang belum sembuh sepenuhnya",
      "pergerakan terhad atau kekakuan sendi",
      "kelemahan atau ketidakseimbangan otot",
      "ketegangan berulang dari aktiviti harian",
      "pemulihan yang tidak lengkap daripada kecederaan lalu"
    ],
    approach: "Perubatan kecederaan Shaolin dibangunkan melalui rawatan kecederaan sebenar — bukan sekadar melegakan simptom, tetapi membantu tubuh memulihkan fungsi dari masa ke masa. Di YAPCHANKOR, kami menggunakan prinsip yang sama pada kesakitan kronik. Fokus kami bukan sekadar untuk mengurangkan ketidakselesaan, tetapi untuk menangani faktor-faktor yang menyebabkan kesakitan berulang.",
    approachPoints: [
      "Fisioterapi secara sentuhan langsung untuk memulihkan pergerakan dan mengurangkan ketegangan",
      "Pemulihan berstruktur untuk membina semula kekuatan dan kestabilan",
      "Formulasi herba proprietari yang digunakan di klinik kami selama beberapa dekad pada lebih 50,000 pesakit, dan dikaji untuk sifat anti-radangnya melalui penyelidikan makmal"
    ],
    expectation: "Kesakitan kronik berkembang dari masa ke masa, dan pemulihan juga memerlukan masa. Kemajuan mungkin tidak sentiasa segera, tetapi pendekatan berstruktur boleh membawa kepada peningkatan bermakna dalam fungsi dan keselesaan. Fokus kami adalah untuk membantu anda bergerak dengan lebih baik dan mengekalkan peningkatan tersebut.",
    whenToSeek: [
      "terus berulang selepas rawatan",
      "telah berlarutan selama berminggu-minggu atau berbulan-bulan",
      "menjejaskan kehidupan harian atau kerja anda",
      "tidak sembuh sepenuhnya walaupun selepas berehat atau makan ubat"
    ],
    faqs: [
      { question: "Adakah saya memerlukan rujukan?", answer: "Tidak. Anda boleh membuat tempahan terus dengan kami — tiada rujukan doktor diperlukan." },
      { question: "Berapa lama kesakitan kronik mengambil masa untuk sembuh?", answer: "Ia bergantung pada berapa lama keadaan telah berlaku dan punca dasarnya. Pelan berstruktur dibincangkan selepas penilaian." },
      { question: "Adakah ini sesuai jika saya telah mencuba rawatan lain?", answer: "Ya. Ramai pesakit datang kepada kami selepas mencuba pendekatan lain tanpa hasil yang berkekalan." },
      { question: "Adakah kesakitan akan kembali?", answer: "Pendekatan kami memberi tumpuan kepada mengurangkan keadaan berulang dengan menangani faktor asas, bukan hanya simptom." },
      { question: "Adakah anda mempunyai kemudahan X-ray atau MRI?", answer: "Kami tidak menyediakan pengimejan. Jika perlu, sila berunding dengan doktor perubatan sebelum melawat kami." }
    ],
    relatedConditions: ["back-pain", "knee-pain", "shoulder-pain", "sciatica"]
  },
  "sports-injury": {
    title: "Rawatan Kecederaan Sukan di Malaysia",
    subtitle: "Pulih Daripada Kecederaan dan Kembali Aktif dengan Pemulihan Berstruktur",
    intro: "Kecederaan sukan boleh berlaku secara tiba-tiba — semasa perlawanan, larian, atau senaman biasa. Apa yang bermula sebagai ketegangan ringan boleh menjadi masalah jangka panjang jika tidak diuruskan dengan betul.\n\nBagi kebanyakan pesakit, cabarannya bukan sekadar pulih daripada kecederaan, tetapi kembali aktif tanpa rasa sakit berulang.\n\nDi YAPCHANKOR, kami kerap melihat pesakit yang telah mencuba rehat, fisioterapi asas, atau rawatan sendiri tetapi tidak dapat pulih sepenuhnya. Di sinilah pendekatan yang lebih berstruktur dan bersepadu boleh membawa perubahan.",
    whyNotImprove: "Kecederaan sukan bukan sekadar mengenai kerosakan awal. Apabila masalah seperti penyembuhan tidak lengkap, keradangan berpanjangan, atau ketidakstabilan sendi tidak ditangani bersama, pesakit mungkin pulih separuh — dan kecederaan itu kembali apabila aktiviti disambung.",
    whatCauses: [
      "penyembuhan tidak lengkap pada ligamen atau tendon",
      "keradangan berpanjangan yang menjejaskan pemulihan",
      "pergerakan terhad atau ketidakstabilan sendi selepas kecederaan",
      "kelemahan pada kumpulan otot di sekeliling",
      "kembali semula ke aktiviti sebelum sembuh sepenuhnya"
    ],
    approach: "Pendekatan kami dibentuk oleh perubatan kecederaan Shaolin — tradisi yang dikembangkan melalui rawatan kecederaan sebenar — dan diperhalusi melalui lebih 45 tahun pengalaman klinikal. Di YAPCHANKOR, kami bukan sahaja menyembuhkan kecederaan, tetapi memulihkan fungsi dan kekuatan yang diperlukan untuk kembali aktif dengan selamat.",
    approachPoints: [
      "Fisioterapi secara sentuhan langsung untuk mengurangkan kesakitan dan meningkatkan mobiliti",
      "Pemulihan berstruktur untuk membina semula kekuatan dan kestabilan sendi",
      "Formulasi herba proprietari yang digunakan di klinik kami selama beberapa dekad pada lebih 50,000 pesakit, dan dikaji untuk sifat anti-radangnya melalui penyelidikan makmal"
    ],
    expectation: "Pemulihan bergantung kepada tahap keterukan kecederaan dan sejauh mana awal ia dirawat. Sesetengah kecederaan ringan sembuh dengan cepat, manakala kecederaan yang lebih kompleks atau berulang memerlukan tempoh pemulihan berstruktur yang lebih lama. Fokus kami adalah pada pemulihan penuh dan mengurangkan risiko kecederaan berulang.",
    whenToSeek: [
      "tidak bertambah baik selepas berehat",
      "terus berulang apabila anda kembali aktif",
      "menjejaskan prestasi atau pergerakan harian anda",
      "terasa tidak stabil atau lemah"
    ],
    faqs: [
      { question: "Adakah saya memerlukan rujukan?", answer: "Tidak. Anda boleh membuat tempahan terus dengan kami — tiada rujukan doktor diperlukan." },
      { question: "Berapa cepat saya harus mendapatkan rawatan selepas kecederaan?", answer: "Penilaian awal boleh membantu menghalang kecederaan daripada menjadi lebih teruk atau berulang." },
      { question: "Bolehkah saya terus bersenam semasa rawatan?", answer: "Ini bergantung pada kecederaan anda. Fisioterapis anda akan menasihatkan tahap aktiviti yang selamat." },
      { question: "Adakah ini sesuai untuk kecederaan berulang?", answer: "Ya. Menangani punca utama kecederaan berulang merupakan bahagian penting dalam pendekatan kami." },
      { question: "Adakah anda mempunyai kemudahan X-ray atau MRI?", answer: "Kami tidak menyediakan pengimejan. Jika perlu, sila berunding dengan doktor perubatan sebelum melawat kami." }
    ],
    relatedConditions: ["sprained-ankle", "knee-pain", "shoulder-pain", "elbow-pain"]
  }
} as const;
