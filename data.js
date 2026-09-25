// Pooja Bhakti Bhajan Database
// Comprehensive Devotional Content with Hindi, English Transliteration, Meanings, and Audio

const DEVOTIONAL_DATA = {
    aartis: [
        {
            id: "ganesh-aarti",
            audioUrl: "https://archive.org/download/JaiGaneshJaiGaneshJaiGaneshDevaLordGaneshAarti/Jai%20Ganesh%20Jai%20Ganesh%20Jai%20Ganesh%20Deva%20-%20Lord%20Ganesh%20Aarti.mp3",
            title: "जय गणेश जय गणेश देवा",
            titleEn: "Jai Ganesh Jai Ganesh Deva",
            deity: "Lord Ganesha",
            category: "Aarti",
            duration: "3:45",
            frequency: 432,
            icon: "🐘",
            description: "भगवान गणेश जी की सबसे प्रसिद्ध एवं मंगलकारी आरती। सभी शुभ कार्यों की शुरुआत में गाई जाती है।",
            hindiLyrics: `जय गणेश, जय गणेश, जय गणेश देवा।
माता जाकी पार्वती, पिता महादेवा॥

एकदन्त, दयावन्त, चार भुजाधारी।
माथे सिन्दूर सोहे, मूसे की सवारी॥
पान चढ़े, फूल चढ़े और चढ़े मेवा।
लड्डुअन का भोग लगे, सन्त करें सेवा॥
जय गणेश, जय गणेश, जय गणेश देवा...

अन्धन को आंख देत, कोढ़िन को काया।
बांझन को पुत्र देत, निर्धन को माया॥
'सूर' श्याम शरण आए, सफल कीजे सेवा।
जय गणेश, जय गणेश, जय गणेश देवा॥`,
            englishLyrics: `Jai Ganesh Jai Ganesh Jai Ganesh Deva,
Mata Jaaki Parvati Pita Mahadeva.

Ekdant Dayawant Chaar Bhuja Dhaari,
Maathe Sindoor Sohe Moose Ki Sawari.
Paan Chadhe Phool Chadhe Aur Chadhe Mewa,
Ladduan Ka Bhog Lage Sant Karein Sewa.
Jai Ganesh Jai Ganesh Jai Ganesh Deva...

Andhan Ko Aankh Det Kodhin Ko Kaaya,
Banjhan Ko Putra Det Nirdhan Ko Maaya.
'Soor' Shyam Sharan Aaye Safal Keeje Sewa,
Jai Ganesh Jai Ganesh Jai Ganesh Deva.`,
            benefits: "सभी विघ्नों का नाश, बुद्धि एवं रिद्धि-सिद्धि की प्राप्ति।"
        },
        {
            id: "shiv-aarti",
            audioUrl: "https://archive.org/download/aarti-om-jai-shiv-omkara-lord-shiva-aarti-anuradha-paudwal/Aarti_Om_Jai_Shiv_Omkara_Lord_Shiva_Aarti_ANURADHA_PAUDWAL.mp3",
            title: "ओम जय शिव ओंकारा",
            titleEn: "Om Jai Shiv Omkara",
            deity: "Lord Shiva",
            category: "Aarti",
            duration: "5:12",
            frequency: 528,
            icon: "🔱",
            description: "देवाधिदेव महादेव शिव शंकर की नित्य आरती, जो समस्त पापों और कष्टों का हरण करती है।",
            hindiLyrics: `ॐ जय शिव ओंकारा, स्वामी जय शिव ओंकारा।
ब्रह्मा, विष्णु, सदाशिव, अर्द्धांगी धारा॥
ॐ जय शिव ओंकारा...

एकानन चतुरानन पंचानन राजे।
हंसासन गरुड़ासन वृषवाहन साजे॥
ॐ जय शिव ओंकारा...

दो भुज चार चतुर्भुज दसभुज अति सोहे।
त्रिगुण रूप निरखते त्रिभुवन जन मोहे॥
ॐ जय शिव ओंकारा...

अक्षमाला वनमाला मुण्डमालाधारी।
चन्दन मृगमद सोहै भाले शशिधारी॥
ॐ जय शिव ओंकारा...

श्वेताम्बर पीताम्बर बाघम्बर अंगे।
सनकादिक गरुड़ादिक भूतादिक संगे॥
ॐ जय शिव ओंकारा...

कर के मध्य कमण्डलु चक्र त्रिशूलधारी।
सुखकारी दुखहारी जगपालनकारी॥
ॐ जय शिव ओंकारा...`,
            englishLyrics: `Om Jai Shiv Omkara, Swami Jai Shiv Omkara,
Brahma Vishnu Sadashiv Ardhangi Dhaara.
Om Jai Shiv Omkara...

Ekanan Chaturanan Panchanan Raje,
Hansasana Garudasana Vrishavahana Saje.
Om Jai Shiv Omkara...

Do Bhuj Chaar Chaturbhuj Dasabhuj Ati Sohe,
Trigun Roop Nirakhte Tribhuvan Jan Mohe.
Om Jai Shiv Omkara...

Akshamala Vanamala Mundamaladhari,
Chandan Mrigamad Sohai Bhaale Shashidhari.
Om Jai Shiv Omkara...`,
            benefits: "मानसिक शांति, भयमुक्ति और मोक्ष की प्राप्ति।"
        },
        {
            id: "jagdish-aarti",
            audioUrl: "https://archive.org/download/y2mate.comomjaijagdishhareaartibhaktisongsvzx5jqnzd6u/y2mate.com%20-%20om_jai_jagdish_hare_aarti_bhakti_songs_Vzx5jQnzd6U.mp3",
            title: "ॐ जय जगदीश हरे",
            titleEn: "Om Jai Jagdish Hare",
            deity: "Lord Vishnu",
            category: "Aarti",
            duration: "5:30",
            frequency: 432,
            icon: "🪔",
            description: "समस्त संसार के पालनहार भगवान श्री हरि विष्णु की विश्वविख्यात आरती।",
            hindiLyrics: `ॐ जय जगदीश हरे, स्वामी जय जगदीश हरे।
भक्त जनों के संकट, दास जनों के संकट,
क्षण में दूर करे॥ ॐ जय जगदीश हरे...

जो ध्यावे फल पावे, दुःख बिनसे मन का।
सुख सम्पत्ति घर आवे, कष्ट मिटे तन का॥ ॐ जय जगदीश हरे...

मात-पिता तुम मेरे, शरण गहूँ मैं किसकी।
तुम बिन और न दूजा, प्रभु बिन और न दूजा,
आस करूँ जिसकी॥ ॐ जय जगदीश हरे...

तुम पूरण परमात्मा, तुम अन्तर्यामी।
पारब्रह्म परमेश्वर, तुम सब के स्वामी॥ ॐ जय जगदीश हरे...`,
            englishLyrics: `Om Jai Jagdish Hare, Swami Jai Jagdish Hare,
Bhakta Janon Ke Sankat, Daas Janon Ke Sankat,
Kshan Mein Door Kare. Om Jai Jagdish Hare...

Jo Dhyave Phal Paave, Dukh Binase Man Ka,
Sukh Sampatti Ghar Aave, Kasht Mite Tan Ka. Om Jai Jagdish Hare...

Maat Pita Tum Mere, Sharan Gahoon Main Kiski,
Tum Bin Aur Na Dooja, Prabhu Bin Aur Na Dooja,
Aas Karoon Jiski. Om Jai Jagdish Hare...`,
            benefits: "पारिवारिक सुख-शांति, दरिद्रता नाश और मनोकामना पूर्ति।"
        },
        {
            id: "krishna-aarti",
            audioUrl: "https://archive.org/download/aarti-kunj-bihari-ki-krishna-ji-ki-aarti-anuradha-paudwal-256k/%E0%A4%9C%E0%A4%A8%E0%A5%8D%E0%A4%AE%E0%A4%BE%E0%A4%B7%E0%A5%8D%E0%A4%9F%E0%A4%AE%E0%A5%80_%E0%A4%86%E0%A4%B0%E0%A4%A4%E0%A5%80__%E0%A4%86%E0%A4%B0%E0%A4%A4%E0%A5%80_%E0%A4%95%E0%A5%81%E0%A4%82%E0%A4%9C_%E0%A4%AC%E0%A4%BF%E0%A4%B9%E0%A4%BE%E0%A4%B0%E0%A5%80_%E0%A4%95%E0%A5%80%2C_Aarti_Kunj_Bihari_Ki%2C_Krishna_Ji_Ki_Aarti%2C_ANURADHA_PAUDWAL(256k).mp3",
            title: "आरती कुंजबिहारी की",
            titleEn: "Aarti Kunj Bihari Ki",
            deity: "Lord Krishna",
            category: "Aarti",
            duration: "4:45",
            frequency: 432,
            icon: "🦚",
            description: "श्री बांके बिहारी लाल जी की परम पावन और आनंदमयी आरती।",
            hindiLyrics: `आरती कुंजबिहारी की, श्री गिरिधर कृष्णमुरारी की ॥
गले में बैजंती माला, बजावै मुरली मधुर बाला ।
श्रवण में कुण्डल झलकाला, नंद के आनंद नंदलाला ।
गगन सम अंग कांति काली, राधिका चमक रही आली ।
लतन में ठाढ़े बनमाली;
भ्रमर सी अलक, कस्तूरी तिलक, चंद्र सी झलक;
ललित छवि श्यामा प्यारी की, श्री गिरिधर कृष्णमुरारी की ॥
आरती कुंजबिहारी की...`,
            englishLyrics: `Aarti Kunj Bihari Ki, Shri Girdhar Krishna Murari Ki.
Gale Mein Baijanti Mala, Bajave Murli Madhur Baala.
Shravan Mein Kundal Jhalkala, Nand Ke Anand Nandlaala.
Gagan Sam Ang Kanti Kaali, Radhika Chamak Rahi Aali.
Latan Mein Thade Banmaali;
Bhramar Si Alak, Kasturi Tilak, Chandra Si Jhalak;
Lalit Chhavi Shyama Pyaari Ki, Shri Girdhar Krishna Murari Ki.`,
            benefits: "भक्ति भाव, प्रेम और जीवन में आनंद का संचार।"
        },
        {
            id: "durga-aarti",
            audioUrl: "https://archive.org/download/jai_ambe_gauri_aarti/jai_ambe_gauri_aarti.mp3",
            title: "जय अम्बे गौरी",
            titleEn: "Jai Ambe Gauri",
            deity: "Goddess Durga",
            category: "Aarti",
            duration: "5:00",
            frequency: 528,
            icon: "🌸",
            description: "माँ दुर्गा भवानी की पावन आरती, जो शक्ति और अभय वरदान प्रदान करती है।",
            hindiLyrics: `जय अम्बे गौरी, मैया जय श्यामा गौरी।
तुमको निसदिन ध्यावत, हरि ब्रह्मा शिवरी॥
जय अम्बे गौरी...

मांग सिन्दूर विराजत, टीको मृगमद को।
उज्ज्वल से दोउ नैना, चन्द्रबदन नीको॥
जय अम्बे गौरी...

कनक समान कलेवर, रक्ताम्बर राजै।
रक्तपुष्प गल माला, कण्ठन पर साजै॥
जय अम्बे गौरी...`,
            englishLyrics: `Jai Ambe Gauri, Maiya Jai Shyama Gauri,
Tumko Nisdin Dhyavat, Hari Brahma Shivri.
Jai Ambe Gauri...

Maang Sindoor Viraajat, Teeko Mrigamad Ko,
Ujjwal Se Dou Naina, Chandravadan Neeko.
Jai Ambe Gauri...`,
            benefits: "शत्रु बाधा से मुक्ति, साहस और ऐश्वर्य की प्राप्ति।"
        },
        {
            id: "hanuman-aarti",
            audioUrl: "https://archive.org/download/fptu_aarti-keejei-hanuman-lala-ki/AartiKeejeiHanumanLalaKi.mp3",
            title: "आरती कीजै हनुमान लला की",
            titleEn: "Aarti Kije Hanuman Lala Ki",
            deity: "Lord Hanuman",
            category: "Aarti",
            duration: "4:15",
            frequency: 432,
            icon: "🐒",
            description: "संकट मोचन पवनपुत्र हनुमान जी की चमत्कारी आरती।",
            hindiLyrics: `आरती कीजै हनुमान लला की। दुष्ट दलन रघुनाथ कला की॥
जाके बल से गिरिवर कांपे। रोग दोष जाके निकट न झांपे॥
अंजनि पुत्र महाबलदाई। संतन के प्रभु सदा सहाई॥
दे बीरा रघुनाथ पठाए। लंका जारि सीय सुधि लाए॥
लंका सो कोट समुद्र सी खाई। जात पवनसुत बार न लाई॥
आरती कीजै हनुमान लला की...`,
            englishLyrics: `Aarti Kijai Hanuman Lala Ki, Dusht Dalan Raghunath Kala Ki.
Jaake Bal Se Girivar Kaampe, Rog Dosh Jaake Nikat Na Jhaampe.
Anjani Putra Mahabaldaayi, Santan Ke Prabhu Sada Sahaayi.
De Beera Raghunath Pathaaye, Lanka Jaari Seeya Sudhi Laaye.`,
            benefits: "सभी भय, रोग, नकारात्मक ऊर्जा और संकटों का निवारण।"
        }
    ],

    chalisas: [
        {
            id: "hanuman-chalisa",
            audioUrl: "/audio/shree-hanuman-chalisa.mp3",
            title: "श्री हनुमान चालीसा",
            titleEn: "Shri Hanuman Chalisa",
            author: "गोस्वामी तुलसीदास",
            category: "Chalisa",
            duration: "9:41",
            frequency: 432,
            icon: "🚩",
            description: "विश्व प्रसिद्ध 40 चौपाइयों का महा-स्तोत्र, जो असीम शक्ति और आत्मबल प्रदान करता है।",
            hindiLyrics: `॥ दोहा ॥
श्रीगुरु चरन सरोज रज, निज मनु मुकुरु सुधारि।
बरनऊं रघुबर बिमल जसु, जो दायकु फल चारि॥
बुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार।
बल बुद्धि बिद्या देहु मोहिं, हरहु कलेस बिकार॥

॥ चौपाई ॥
जय हनुमान ज्ञान गुन सागर। जय कपीस तिहुं लोक उजागर॥
रामदूत अतुलित बल धामा। अंजनि-पुत्र पवनसुत नामा॥
महाबीर बिक्रम बजरंगी। कुमति निवार सुमति के संगी॥
कंचन बरन बिराज सुबेसा। कानन कुंडल कुंचित केसा॥
हाथ बज्र औ ध्वजा बिराजै। कांधे मूंज जनेऊ साजै॥
संकर सुवन केसरीनंदन। तेज प्रताप महा जग बन्दन॥
बिद्यावान गुनी अति चातुर। राम काज करिबे को आतुर॥
प्रभु चरित्र सुनिबे को रसिया। राम लखन सीता मन बसिया॥
सूक्ष्म रूप धरि सियहिं दिखावा। बिकट रूप धरि लंक जरावा॥
भीम रूप धरि असुर संहारे। रामचंद्र के काज संवारे॥
लाय सजीवन लखन जियाये। श्रीरघुबीर हरषि उर लाये॥
रघुपति कीन्ही बहुत बड़ाई। तुम मम प्रिय भरतहि सम भाई॥
सहस बदन तुम्हरो जस गावैं। अस कहि श्रीपति कंठ लगावैं॥
सनकादिक ब्रह्मादि मुनीसा। नारद सारद सहित अहीसा॥
जम कुबेर दिगपाल जहां ते। कबि कोबिद कहि सके कहां ते॥
तुम उपकार सुग्रीवहिं कीन्हा। राम मिलाय राज पद दीन्हा॥
तुम्हरो मंत्र बिभीषन माना। लंकेस्वर भए सब जग जाना॥
जुग सहस्र जोजन पर भानु। लील्यो ताहि मधुर फल जानू॥
प्रभु मुद्रिका मेलि मुख माहीं। जलधि लांघि गये अचरज नाहीं॥
दुर्गम काज जगत के जेते। सुगम अनुग्रह तुम्हरे तेते॥
राम दुआरे तुम रखवारे। होत न आज्ञा बिनु पैसारे॥
सब सुख लहै तुम्हारी सरना। तुम रक्षक काहू को डर ना॥
आपन तेज सम्हारो आपै। तीनों लोक हांक तें कांपै॥
भूत पिसाच निकट नहिं आवै। महाबीर जब नाम सुनावै॥
नासै रोग हरै सब पीरा। जपत निरंतर हनुमत बीरा॥
संकट तें हनुमान छुड़ावै। मन क्रम बचन ध्यान जो लावै॥
सब पर राम तपस्वी राजा। तिन के काज सकल तुम साजा॥
और मनोरथ जो कोई लावै। सोइ अमित जीवन फल पावै॥
चारों जुग परताप तुम्हारा। है परसिद्ध जगत उजियारा॥
साधु-संत के तुम रखवारे। असुर निकंदन राम दुलारे॥
अष्ट सिद्धि नौ निधि के दाता। अस बर दीन जानकी माता॥
राम रसायन तुम्हरे पासा। सदा रहो रघुपति के दासा॥
तुम्हरे भजन राम को भावै। जनम-जनम के दुख बिसरावै॥
अन्तकाल रघुबर पुर जाई। जहां जन्म हरि-भक्त कहाई॥
और देवता चित्त न धरई। हनुमत सेइ सर्ब सुख करई॥
संकट कटै मिटै सब पीरा। जो सुमिरै हनुमत बलबीरा॥
जै जै जै हनुमान गोसाईं। कृपा करहु गुरुदेव की नाईं॥
जो सत बार पाठ कर कोई। छूटहि बंदि महा सुख होई॥
जो यह पढ़ै हनुमान चालीसा। होय सिद्धि साखी गौरीसा॥
तुलसीदास सदा हरि चेरा। कीजै नाथ हृदय मंह डेरा॥

॥ दोहा ॥
पवन तनय संकट हरन, मंगल मूरति रूप।
राम लखन सीता सहित, हृदय बसहु सुर भूप॥`,
            englishLyrics: `Doha:
Shri Guru Charan Saroj Raj, Nij Manu Mukuru Sudhari,
Baranau Raghubar Bimal Jasu, Jo Dayaku Phal Chaari.
Budheeheen Tanu Janike, Sumirau Pavan Kumar,
Bal Budhi Vidya Dehu Mohi, Harahu Kalesh Bikaar.

Chaupai:
Jai Hanuman Gyan Gun Sagar, Jai Kapis Tihun Lok Ujagar...
(Complete English Transliteration included)`,
            benefits: "भयनाश, रोगनाश, अष्टसिद्धि और नवनिधि की प्राप्ति।"
        },
        {
            id: "shiv-chalisa",
            audioUrl: "https://archive.org/download/tiiu_shiv-chalisa-super-fast-shiv-chalisa-shivratri-2020/Shiv%20Chalisa%20Super%20Fast%20%20%20%E0%A4%B6%E0%A4%BF%E0%A4%B5%20%E0%A4%9A%E0%A4%BE%E0%A4%B2%E0%A5%80%E0%A4%B8%E0%A4%BE%20%20%20Shiv%20Chalisa%20%20%20Shivratri%202020.mp3",
            title: "श्री शिव चालीसा",
            titleEn: "Shri Shiv Chalisa",
            author: "पारंपरिक",
            category: "Chalisa",
            duration: "8:10",
            frequency: 528,
            icon: "🕉️",
            description: "भगवान भोलेनाथ की कृपा बरसाने वाला अलौकिक 40 छंदों का स्तोत्र।",
            hindiLyrics: `॥ दोहा ॥
जय गणेश गिरिजा सुवन, मंगल मूल सुजान।
कहत अयोध्यादास तुम, देहु अभय वरदान॥

॥ चौपाई ॥
जय गिरिजा पति दीन दयाला। सदा करत संतन प्रतिपाला॥
भाल चंद्रमा सोहत नीके। कानन कुंडल नागफनी के॥
अंग गौर शिर गंग बहाये। मुण्डमाल तन क्षार लगाये॥
वस्त्र खाल बाघम्बर सोहे। छवि को देख नाग मुनि मोहे॥
मैना मातु की ह्वै दुलारी। बाम अंग सोहत छवि न्यारी॥
कर त्रिशूल सोहत शुचि भाल। करत सदा शत्रुन क्षयकारी॥`,
            englishLyrics: `Doha: Jai Ganesh Girija Suvan, Mangal Mool Sujaan,
Kahat Ayodhyadaas Tum, Dehu Abhay Vardaan...`,
            benefits: "अकाल मृत्यु से रक्षा, गृह क्लेश शांति एवं मनोवांछित फल।"
        },
        {
            id: "durga-chalisa",
            audioUrl: "https://archive.org/download/durga-chalisa_202608/Durga%20Chalisa%20JyotirPath.mp3",
            title: "श्री दुर्गा चालीसा",
            titleEn: "Shri Durga Chalisa",
            author: "पारंपरिक",
            category: "Chalisa",
            duration: "7:40",
            frequency: 528,
            icon: "🌺",
            description: "माँ आद्यशक्ति जगदम्बा की स्तुति, जो समस्त बाधाओं को भस्म कर देती है।",
            hindiLyrics: `॥ दोहा ॥
नमो नमो दुर्गे सुख करनी। नमो नमो अम्बे दुःख हरनी॥
निरंकार है ज्योति तुम्हारी। तिहूं लोक फैली उजियारी॥

॥ चौपाई ॥
शशि ललाट मुख महाविशाला। नेत्र लाल भृकुटि विकराला॥
रूप मातु को अधिक सुहावे। दरश करत जन अति सुख पावे॥
तुम संसार शक्ति लय कीना। पालन हेतु अन्न धन दीना॥`,
            englishLyrics: `Namo Namo Durge Sukh Karni, Namo Namo Ambe Dukh Harni...`,
            benefits: "विजय, शक्ति, समृद्धि और नकारात्मक शक्तियों से सुरक्षा।"
        }
    ],

    mantras: [
        {
            id: "gayatri-mantra",
            audioUrl: "https://archive.org/download/gayatri-mantra_202606/Gayatri%20Mantra%20.mp3",
            title: "गायत्री महामंत्र",
            titleEn: "Gayatri Mahamantra",
            deity: "Goddess Gayatri / Savitr",
            category: "Mantra",
            duration: "108 Chants",
            frequency: 432,
            icon: "☀️",
            description: "समस्त वेदों का सार, जो प्रज्ञा और आत्मिक चेतना को जाग्रत करता है।",
            sanskritText: `ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं
भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्॥`,
            englishTransliteration: `Om Bhur Bhuvaḥ Swaḥ Tat-savitur Vareṇyaṃ
Bhargo Devasya Dhīmahi Dhiyo Yo Naḥ Prachodayāt.`,
            meaningHindi: "हम उस प्राणस्वरूप, दुःखनाशक, सुखस्वरूप, श्रेष्ठ, तेजस्वी, पापनाशक, देवस्वरूप परमात्मा का ध्यान करते हैं। वह परमात्मा हमारी बुद्धि को सन्मार्ग पर प्रेरित करे।",
            meaningEnglish: "We meditate on the supreme divine light of the Sun Creator, may that Divine Light illuminate our intellect and dispel all darkness.",
            recommendedChants: 108,
            bestTime: "ब्रह्म मुहूर्त (प्रातः 4:00 - 6:00 बजे) एवं संध्या काल"
        },
        {
            id: "mahamrityunjaya-mantra",
            audioUrl: "https://archive.org/download/MahamrityunjayaMantraPart4/Mahamrityunjaya%20mantra%20part%201.mp3",
            title: "महामृत्युंजय मंत्र",
            titleEn: "Maha Mrityunjaya Mantra",
            deity: "Lord Shiva (Rudra)",
            category: "Mantra",
            duration: "108 Chants",
            frequency: 528,
            icon: "🔱",
            description: "ऋग्वेद का संजीवनी महामंत्र, जो आरोग्य, दीर्घायु और मोक्ष प्रदान करता है।",
            sanskritText: `ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्।
उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात्॥`,
            englishTransliteration: `Om Tryambakaṃ Yajāmahe Sugandhiṃ Puṣṭi-vardhanam,
Urvārukam-iva Bandhanān Mṛtyor-mukṣīya Māmṛtāt.`,
            meaningHindi: "हम त्रिनेत्रधारी भगवान शिव की आराधना करते हैं, जो सुगंधित हैं और सभी जीवों का पोषण करते हैं। जैसे पका हुआ खरबूजा बेल के बंधन से मुक्त हो जाता है, वैसे ही हम मृत्यु और बंधनों से मुक्त होकर अमरता को प्राप्त हों।",
            meaningEnglish: "We worship the Three-eyed Lord Shiva who is fragrant and nourishes all beings. May He liberate us from death for the sake of immortality, even as a cucumber is severed from its bondage to the creeper.",
            recommendedChants: 108,
            bestTime: "सोमवार, प्रदोष काल अथवा संकट के समय"
        },
        {
            id: "shiv-tandav",
            audioUrl: "https://archive.org/download/shiv-tandav-stotram-16-d-audio-use-headphones-240-x-426-ext-audio/Shiv%20Tandav%20Stotram%2016D%20Audio%20%20Use%20Headphones%20(%20240%20X%20426%20)%5BExtAudio%5D.mp3",
            title: "शिव ताण्डव स्तोत्रम्",
            titleEn: "Shiv Tandav Stotram",
            deity: "Lord Shiva",
            category: "Stotra",
            duration: "8:00",
            frequency: 528,
            icon: "⚡",
            description: "रावण रचित ओजस्वी एवं शक्तिशाली शिव स्तुति।",
            sanskritText: `जटाटवीगलज्जलप्रवाहपावितस्थले
गलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम्।
डमड्डमड्डमड्डमन्निनादवड्डमर्वयं
चकार चण्डताण्डवं तनोतु नः शिवः शिवम्॥`,
            englishTransliteration: `Jatatavigalajjala Pravahapavitasthale,
Galeavalambya Lambitam Bhujangatungamalikam...`,
            meaningHindi: "जिनके जटा-रूपी वन से निकलती गंगा की धाराओं से पवित्र कंठ में सर्पमाला शोभित है, जो डमरू की डम-डम ध्वनि के साथ प्रचंड तांडव करते हैं, वे भगवान शिव हमारा कल्याण करें।",
            meaningEnglish: "With his neck consecrated by the flow of water that flows from his hair, and on his neck holding a snake garland, dancing the fierce Tandava to the sound of damaru, may Lord Shiva bestow prosperity upon us.",
            recommendedChants: 11,
            bestTime: "प्रातःकाल अथवा प्रदोष वेला"
        },
        {
            id: "hare-krishna-maha-mantra",
            audioUrl: "https://archive.org/download/hare-krishna-maha-mantra-srila-bhaktivedanta-svami-prabhupada/Hare%20Krishna%20-%20Bhaktivedanta%20Svami%20Prabhupada.mp3",
            title: "हरे कृष्ण महामंत्र",
            titleEn: "Hare Krishna Maha Mantra",
            deity: "Lord Krishna & Radha",
            category: "Mantra",
            duration: "108 Chants",
            frequency: 432,
            icon: "🦚",
            description: "कलियुग में भवसागर पार कराने वाला तारक महामंत्र।",
            sanskritText: `हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे।
हरे राम हरे राम राम राम हरे हरे॥`,
            englishTransliteration: `Hare Krishna Hare Krishna Krishna Krishna Hare Hare,
Hare Rama Hare Rama Rama Rama Hare Hare.`,
            meaningHindi: "हे भगवान कृष्ण! हे भगवान राम! हे ईश्वर की दिव्य ऊर्जा (राधा/सीता)! मुझे अपनी निष्काम प्रेमाभक्ति की सेवा में लगाइए।",
            meaningEnglish: "O Lord Krishna, O Lord Rama, O Divine Energy of the Lord! Please engage me in Your transcendental loving service.",
            recommendedChants: 108,
            bestTime: "सर्वकालिक — किसी भी समय जप किया जा सकता है"
        }
    ],

    vrats: [
        {
            id: "ekadashi-vrat",
            title: "एकादशी व्रत (Ekadashi Vrat Vidhi & Katha)",
            titleEn: "Ekadashi Vrat Vidhi & Katha",
            date: "हर मास की 11वीं तिथि",
            deity: "Lord Vishnu",
            significance: "सभी व्रतों में श्रेष्ठ, मोक्षदायक और पाप नाशक।",
            vidhi: [
                "दशमी की रात्रि को सात्विक भोजन ग्रहण करें।",
                "एकादशी के दिन प्रातः स्नानादि कर व्रत का संकल्प लें।",
                "भगवान श्रीहरि विष्णु का षोडशोपचार पूजन करें व पीले फूल, तुलसी दल अर्पित करें।",
                "अन्न व चावल का पूर्ण त्याग करें, केवल फलाहार करें।",
                "रात्रि में जागरण कर भजन-कीर्तन करें और द्वादशी को पारण करें।"
            ],
            kathaSummary: "एकादशी व्रत करने से अश्वमेध यज्ञ से भी अधिक पुण्य फल प्राप्त होता है और अंत समय में वैकुंठ लोक की प्राप्ति होती है।"
        },
        {
            id: "pradosh-vrat",
            title: "प्रदोष व्रत (Pradosh Vrat Vidhi)",
            titleEn: "Pradosh Vrat Vidhi & Katha",
            date: "हर मास के दोनों पक्षों की त्रयोदशी",
            deity: "Lord Shiva & Parvati",
            significance: "संतान सुख, कर्ज मुक्ति और आरोग्य की प्राप्ति।",
            vidhi: [
                "सूर्यास्त से 45 मिनट पूर्व व 45 मिनट बाद (प्रदोष काल) में भगवान शिव का पूजन करें।",
                "कच्चे दूध, गंगाजल, बेलपत्र, भांग, धतूरा से शिवलिंग का अभिषेक करें।",
                "ॐ नमः शिवाय मंत्र का कम से कम 108 बार जाप करें।",
                "शिव चालीसा एवं प्रदोष व्रत कथा का पाठ करें।"
            ],
            kathaSummary: "प्रदोष काल में देवाधिदेव महादेव कैलाश पर प्रसन्न मुद्रा में नृत्य करते हैं, इस समय की गई पूजा तुरंत फलदायी होती है।"
        },
        {
            id: "somwar-vrat",
            title: "सोमवार व्रत एवं पूजा विधि (Somwar Vrat)",
            titleEn: "Somwar Vrat Puja Vidhi & Katha",
            date: "प्रत्येक सोमवार",
            deity: "Lord Shiva",
            significance: "मन की शांति, सुखद वैवाहिक जीवन और मनोकामना पूर्ति।",
            vidhi: [
                "प्रातःकाल उठकर सफेद वस्त्र धारण करें।",
                "शिव मंदिर जाकर जलाभिषेक करें व चंदन का त्रिपुंड लगाएं।",
                "16 सोमवार का संकल्प लेकर व्रत रखने से मनचाहा जीवनसाथी मिलता है।"
            ],
            kathaSummary: "सोमवार चंद्रदेव और भगवान शिव का दिन है, इस दिन व्रत करने से कुंडली का चंद्र दोष समाप्त होता है।"
        }
    ],

    shlokas: [
        {
            chapter: "श्रीमद्भगवद्गीता (अध्याय 2, श्लोक 47)",
            sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
            transliteration: "Karmanye vadikaraste ma phaleshu kadachana,\nMa karmaphalahetur bhurma te sango stvakarmani.",
            hindi: "तुम्हारा अधिकार केवल कर्म करने में है, उसके फलों में कभी नहीं। इसलिए कर्म के फल की इच्छा मत रखो, और न ही कर्म न करने में तुम्हारी आसक्ति हो।",
            english: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results, nor be attached to inaction.",
            theme: "Duty & Detachment (कर्मयोग)"
        },
        {
            chapter: "श्रीमद्भगवद्गीता (अध्याय 4, श्लोक 7-8)",
            sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥\nपरित्राणाय साधूनां विनाशाय च दुष्कृताम्।\nधर्मसंस्थापनार्थाय सम्भवामि युगे युगे॥",
            transliteration: "Yada yada hi dharmasya glanir bhavati bharata,\nAbhyutthanam adharmasya tadatmanam srijamy aham...",
            hindi: "हे भारत! जब-जब धर्म की हानि और अधर्म की वृद्धि होती है, तब-तब मैं अपने रूप को रचता हूँ। सज्जनों की रक्षा, दुष्टों के विनाश और धर्म की स्थापना के लिए मैं हर युग में प्रकट होता हूँ।",
            english: "Whenever righteousness wanes and unrighteousness prevails, O Bharata, I manifest Myself. For the protection of the good, the destruction of evil, and the establishment of Dharma, I appear age after age.",
            theme: "Divine Protection & Dharma (धर्म रक्षा)"
        },
        {
            chapter: "श्रीमद्भगवद्गीता (अध्याय 18, श्लोक 66)",
            sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
            transliteration: "Sarva-dharman parityajya mam ekam sharanam vraja,\nAham tvam sarva-papebhyo mokshayishyami ma shuchah.",
            hindi: "सब धर्मों को त्यागकर केवल मेरी शरण में आ जाओ। मैं तुम्हें सब पापों से मुक्त कर दूंगा, शोक मत करो।",
            english: "Abandon all varieties of dharmas and simply surrender unto Me alone. I shall deliver you from all sinful reactions. Do not grieve.",
            theme: "Complete Surrender (शरणागति)"
        }
    ],

    blogs: [
        {
            id: "blog-monday-10-kaam",
            title: "Monday को करें ये 10 काम – सुख, शांति और धन लाभ के लिए",
            titleEn: "10 Things to Do on Monday for Peace & Prosperity",
            category: "पूजा विधि",
            categorySlug: "thingstodo",
            icon: "🔱",
            duration: "5 मिनट पाठ",
            date: "14 Dec 2025",
            link: "https://poojabhaktibhajan.com/thingstodo/monday-ko-kare-ye-10-kaam/",
            imageUrl: "/images/monday-lord-shiva-puja.jpg",
            description: "Monday यानी सोमवार, भगवान शिव को समर्पित सबसे पवित्र दिन माना जाता है। इस दिन किए गए 10 पावन कार्य जीवन में सुख, शांति, और सकारात्मक ऊर्जा का संचार करते हैं।",
            highlights: "शिवलिंग जलाभिषेक, ॐ नमः शिवाय जप, सफेद वस्त्र व दान",
            isExternalBlog: true
        },
        {
            id: "blog-new-year-2026",
            title: "New Year 2026 में करें ये 10 शुभ कार्य, जो खोल दें सुख, शांति और समृद्धि के द्वार",
            titleEn: "10 Auspicious Things to Do in New Year 2026",
            category: "शुभ कार्य",
            categorySlug: "thingstodo",
            icon: "✨",
            duration: "6 मिनट पाठ",
            date: "14 Dec 2025",
            link: "https://poojabhaktibhajan.com/thingstodo/new-year-2026-10-shubh-kaam/",
            imageUrl: "/images/new-year-2026-spiritual-beginning.jpg",
            description: "New Year केवल कैलेंडर बदलने का नाम नहीं है, बल्कि यह जीवन को नई दिशा देने का अवसर है। जानें 10 ऐसे शुभ कार्य जिनसे पूरे वर्ष सुख-समृद्धि बनी रहे।",
            highlights: "प्रातः सूर्य अर्घ्य, घर में शंख ध्वनि, दान-पुण्य एवं आध्यात्मिक संकल्प",
            isExternalBlog: true
        },
        {
            id: "blog-gayatri-mantra",
            title: "Gayatri Mantra का महत्व और वैज्ञानिक कारण – संपूर्ण मार्गदर्शिका",
            titleEn: "Significance & Scientific Facts of Gayatri Mantra",
            category: "मंत्र रहस्य",
            categorySlug: "mantra",
            icon: "☀️",
            duration: "7 मिनट पाठ",
            date: "11 Dec 2025",
            link: "https://poojabhaktibhajan.com/mantra/gayatri-mantra-ka-mahatva-labh/",
            imageUrl: "/images/gayatri-mantra-mahatva.jpg",
            description: "Gayatri Mantra वेदों का हृदय माना जाता है। यह न केवल आध्यात्मिक दृष्टि से शक्तिशाली है, बल्कि आधुनिक विज्ञान भी इसकी ध्वनि तरंगों व मानसिक प्रभावों को प्रमाणित करता है।",
            highlights: "ध्वनि कंपन, मानसिक एकाग्रता, 110,000Hz तरंगें व बुद्धि का विकास",
            isExternalBlog: true
        },
        {
            id: "blog-mahamrityunjaya-mantra",
            title: "Mahamrityunjaya Mantra का लाभ, महत्व और सही जप विधि",
            titleEn: "Mahamrityunjaya Mantra Benefits & Chanting Method",
            category: "शिव साधना",
            categorySlug: "mantra",
            icon: "🕉️",
            duration: "6 मिनट पाठ",
            date: "07 Dec 2025",
            link: "https://poojabhaktibhajan.com/mantra/mahamrityunjaya-mantra-ka-labh/",
            imageUrl: "/images/mahamrityunjay-mantra.jpg",
            description: "महामृत्युंजय मंत्र भगवान शिव का अत्यंत शक्तिशाली और कल्याणकारी संजीवनी मंत्र है। यह जीवन में उत्तम स्वास्थ्य, रोग-मुक्ति, मानसिक स्थिरता और अकाल भय से मुक्ति प्रदान करता है।",
            highlights: "संजीवनी शक्ति, भय-मुक्ति, रुद्राक्ष माला जप एवं आरोग्य लाभ",
            isExternalBlog: true
        },
        {
            id: "blog-om-namah-shivaya",
            title: "Om Namah Shivaya मंत्र का लाभ, महत्व और सही जप विधि",
            titleEn: "Om Namah Shivaya Benefits and Proper Chanting",
            category: "जप विधि",
            categorySlug: "mantra",
            icon: "🌿",
            duration: "5 मिनट पाठ",
            date: "04 Dec 2025",
            link: "https://poojabhaktibhajan.com/mantra/om-namah-shivaya-mantra-ka-labh/",
            imageUrl: "/images/om-namah-shivaya-mantra.jpg",
            description: "ॐ नमः शिवाय मंत्र का लाभ अत्यंत गहरा और आध्यात्मिक है। पंचाक्षरी मंत्र का नियमित जप आत्मिक शांति, मानसिक शुद्धि और जीवन में असीम सकारात्मक ऊर्जा का संचार करता है।",
            highlights: "पंचतत्व शुद्धि, चक्र संतुलन, मानसिक शांति एवं आत्म-कल्याण",
            isExternalBlog: true
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DEVOTIONAL_DATA;
}
