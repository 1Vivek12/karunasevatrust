import { ServiceCard, StatItem, ValueItem, GalleryItem, ActivityEvent, RecentDonor, TrusteeMember } from '../types';

export const TRUST_INFO = {
  nameHi: "करुणा सेवा ट्रस्ट",
  nameEn: "Karuna Seva Trust",
  taglineHi: "सेवा ही सबसे बड़ा धर्म है",
  taglineEn: "Service is the highest virtue",
  heroSubtitleHi: "हमारा उद्देश्य समाज के जरूरतमंद लोगों की सहायता करना, पर्यावरण संरक्षण को बढ़ावा देना तथा मानवता की सेवा करना है।",
  heroSubtitleEn: "Our goal is to assist the needy in society, promote environmental protection, and serve humanity with compassion.",
  badgeTextHi: "मानवता हमारी पहचान",
  badgeTextEn: "Humanity is our Identity",
  regNo: "NGO/KST/2018/84920",
  panNo: "AAATK8492K",
  taxExemption: "Section 80G Tax Exempt Certified (80G/12A Registered)",
  phone: "+91 7905357033, +91 8840193573",
  email: "info@karunasevatrust.com",
  address: "हरसेवकपुर नंबर- 2, निकट अंबा चरण चौराहा, गोरखपुर",
  workingHours: "सोमवार - शनिवार: सुबह 8:00 बजे से शाम 7:00 बजे तक"
};

export const STATS_DATA: StatItem[] = [
  {
    id: '1',
    number: '15000+',
    label: 'लोगों को भोजन',
    labelEn: 'People Fed',
    icon: 'Utensils'
  },
  {
    id: '2',
    number: '8000+',
    label: 'वस्त्र वितरण',
    labelEn: 'Clothes Distributed',
    icon: 'Shirt'
  },
  {
    id: '3',
    number: '3000+',
    label: 'स्वास्थ्य सहायता',
    labelEn: 'Health Assistance',
    icon: 'Stethoscope'
  },
  {
    id: '4',
    number: '250+',
    label: 'विवाह सहयोग',
    labelEn: 'Marriage Support',
    icon: 'HeartHandshake'
  },
  {
    id: '5',
    number: '5000+',
    label: 'वृक्षारोपण',
    labelEn: 'Trees Planted',
    icon: 'Trees'
  }
];

export const MAJOR_WORKS: ServiceCard[] = [
  {
    id: 'food',
    title: 'भोजन सेवा',
    titleEn: 'Food Distribution Service',
    icon: 'UtensilsCrossed',
    description: 'जरूरतमंद लोगों को स्वच्छ और पौष्टिक भोजन उपलब्ध कराना।',
    descriptionEn: 'Providing clean and nutritious meals to underprivileged and hungry people.',
    details: 'करुणा सेवा ट्रस्ट दैनिक "अन्नक्षेत्र" रसोई संचालित करता है जिसमें बेघर, अस्पतालों के बाहर परिजनों और झुग्गी-झोपड़ियों के बच्चों को रोजाना ताजा गरम भोजन परोसा जाता है। त्योहारों पर विशेष भंडारे आयोजित किए जाते हैं।',
    impactMetric: '15,000+ जरूरतमंदों को निशुल्क भोजन',
    image: '/assets/food_distribution.jpg'
  },
  {
    id: 'health',
    title: 'स्वास्थ्य सेवा',
    titleEn: 'Healthcare Camps',
    icon: 'Stethoscope',
    description: 'स्वास्थ्य शिविर, दवा वितरण और जरूरतमंदों को चिकित्सा सहायता प्रदान करना।',
    descriptionEn: 'Organizing free health checkup camps, distributing medicines, and providing medical aid.',
    details: 'अनुभवी डॉक्टरों की टीम के साथ ग्रामीण व झुग्गी इलाकों में नि:शुल्क चिकित्सा शिविर, मोतियाबिंद ऑपरेशन सहायता, नि:शुल्क रक्तचाप एवं शुगर जांच तथा जरूरतमंद मरीजों को दवाई वितरण की जाती है।',
    impactMetric: '3,000+ रोगियों का सफल इलाज व जांच',
    image: '/assets/healthcare_camp.jpg'
  },
  {
    id: 'clothes',
    title: 'वस्त्र वितरण',
    titleEn: 'Clothes & Blanket Drive',
    icon: 'Shirt',
    description: 'जरूरतमंद लोगों को कपड़े उपलब्ध कराकर उनकी सहायता करना।',
    descriptionEn: 'Distributing clean clothes and winter blankets to needy families and elderly people.',
    details: 'सर्दियों के मौसम में गरीबों और सड़कों पर रहने वाले बेघर वृद्धों को गर्म कंबल एवं पूरे साल स्वच्छ वस्त्रों का वितरण किया जाता है। वस्त्र बैंक के माध्यम से नए और अच्छे वस्त्र एकत्रित किए जाते हैं।',
    impactMetric: '8,000+ से अधिक वस्त्र व कंबल वितरित',
    image: '/assets/blanket_distribution.jpg'
  },
  {
    id: 'marriage',
    title: 'विवाह सहयोग',
    titleEn: 'Marriage Support for Daughters',
    icon: 'HeartHandshake',
    description: 'निर्धन परिवारों की बेटियों के विवाह में आर्थिक एवं सामग्री सहयोग।',
    descriptionEn: 'Financial assistance and wedding kits for marriage of daughters from underprivileged families.',
    details: 'गरीब और बेसहारा परिवारों की बेटियों के सामूहिक विवाह समारोह आयोजित किए जाते हैं। नवदंपति को गृहस्थी का आवश्यक सामान जैसे बर्तन, वस्त्र, सिलाई मशीन एवं उपहार देकर उनका आशीर्वाद दिया जाता है।',
    impactMetric: '250+ कन्याओं का सम्मानजनक विवाह',
    image: '/assets/marriage_support.jpg'
  },
  {
    id: 'tree',
    title: 'वृक्षारोपण',
    titleEn: 'Tree Plantation & Nature',
    icon: 'Trees',
    description: 'पर्यावरण संरक्षण के लिए अधिक से अधिक वृक्षारोपण और जागरूकता अभियान।',
    descriptionEn: 'Mass tree planting drives and environmental awareness campaigns to preserve nature.',
    details: 'प्रकृति संतुलन और हरियाली बढ़ाने के लिए प्रतिवर्ष पार्कों, सड़कों के किनारे और स्कूलों में छायादार एवं फलदार पौधे लगाए जाते हैं। स्थानीय निवासियों को पौधों की देखभाल की जिम्मेदारी दी जाती है।',
    impactMetric: '5,000+ फलदार व छायादार पौधे रोपे गए',
    image: '/assets/tree_plantation.jpg'
  },
  {
    id: 'education',
    title: 'शिक्षा एवं जागरूकता',
    titleEn: 'Education & Awareness',
    icon: 'GraduationCap',
    description: 'शिक्षा को बढ़ावा देना और समाज में जागरूकता फैलाने के लिए विभिन्न कार्यक्रम।',
    descriptionEn: 'Promoting education for underprivileged children and driving social awareness programs.',
    details: 'झुग्गी-झोपड़ी के बच्चों के लिए नि:शुल्क ट्यूशन कक्षाएं, पाठ्य सामग्री (कॉपियाँ, पेन, बैग) वितरण, बालिकाओं की शिक्षा सहायता तथा नशा मुक्ति व स्वच्छता जागरूकता अभियान आयोजित किए जाते हैं।',
    impactMetric: '1,200+ बच्चों को निशुल्क पठन सामग्री',
    image: '/assets/education_support.jpg'
  }
];

export const VALUES_DATA: ValueItem[] = [
  {
    id: '1',
    title: 'पारदर्शी सेवा',
    titleEn: 'Transparent Service',
    description: 'हर कार्य में पूर्ण पारदर्शिता',
    descriptionEn: 'Complete financial & operational transparency in every initiative',
    icon: 'ShieldCheck'
  },
  {
    id: '2',
    title: 'निःस्वार्थ कार्य',
    titleEn: 'Selfless Work',
    description: 'मानवता की सेवा हमारा संकल्प',
    descriptionEn: 'Dedicated to pure humanitarian service without self-interest',
    icon: 'Heart'
  },
  {
    id: '3',
    title: 'सभी के लिए समान',
    titleEn: 'Equal For All',
    description: 'सभी धर्मों और समुदायों का सम्मान',
    descriptionEn: 'Respect and equal assistance to all castes, creeds & communities',
    icon: 'Users'
  },
  {
    id: '4',
    title: 'समर्पित टीम',
    titleEn: 'Dedicated Team',
    description: 'अनुभवी और समर्पित टीम',
    descriptionEn: 'Experienced and passionate volunteers serving selflessly',
    icon: 'Target'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'निःशुल्क अन्नक्षेत्र भोजन वितरण शिविर',
    category: 'food',
    categoryLabel: 'भोजन सेवा',
    imageUrl: '/assets/food_distribution.jpg',
    date: '15 मार्च 2026',
    location: 'आनंद विहार, दिल्ली'
  },
  {
    id: 'g2',
    title: 'विशाल स्वास्थ्य एवं नेत्र जांच शिविर',
    category: 'health',
    categoryLabel: 'स्वास्थ्य सेवा',
    imageUrl: '/assets/healthcare_camp.jpg',
    date: '28 फरवरी 2026',
    location: 'गांधी नगर, दिल्ली'
  },
  {
    id: 'g3',
    title: 'शीतकालीन गरम वस्त्र एवं कंबल वितरण अभियान',
    category: 'clothes',
    categoryLabel: 'वस्त्र वितरण',
    imageUrl: '/assets/blanket_distribution.jpg',
    date: '10 जनवरी 2026',
    location: 'ओखला बस्ती, दिल्ली'
  },
  {
    id: 'g4',
    title: '21 निर्धन कन्याओं का भव्य सामूहिक विवाह समारोह',
    category: 'marriage',
    categoryLabel: 'विवाह सहयोग',
    imageUrl: '/assets/marriage_support.jpg',
    date: '14 फरवरी 2026',
    location: 'करुणा सेवा आश्रम, दिल्ली'
  },
  {
    id: 'g5',
    title: 'विश्व पर्यावरण दिवस वृक्षारोपण एवं पौधा वितरण',
    category: 'tree',
    categoryLabel: 'वृक्षारोपण',
    imageUrl: '/assets/tree_plantation.jpg',
    date: '5 जून 2025',
    location: 'यमुना पार Green Belt, दिल्ली'
  },
  {
    id: 'g6',
    title: 'निःशुल्क बाल शिक्षा केंद्र एवं पुस्तक वितरण',
    category: 'education',
    categoryLabel: 'शिक्षा एवं जागरूकता',
    imageUrl: '/assets/education_support.jpg',
    date: '26 जनवरी 2026',
    location: 'सीलमपुर बस्ती, दिल्ली'
  },
  {
    id: 'g7',
    title: 'वृद्ध आश्रम में भोजन एवं फल वितरण',
    category: 'food',
    categoryLabel: 'भोजन सेवा',
    imageUrl: '/assets/food_distribution.jpg',
    date: '2 अक्टूबर 2025',
    location: 'रोहिणी वृद्धाश्रम, दिल्ली'
  },
  {
    id: 'g8',
    title: 'पौधरोपण जन जागरूकता रैली',
    category: 'tree',
    categoryLabel: 'वृक्षारोपण',
    imageUrl: '/assets/tree_plantation.jpg',
    date: '22 अप्रैल 2025',
    location: 'कनाट प्लेस, दिल्ली'
  }
];

export const ACTIVITIES_DATA: ActivityEvent[] = [
  {
    id: 'act1',
    title: 'महा रक्तदान एवं नि:शुल्क स्वास्थ्य जांच शिविर',
    date: '15 अगस्त 2026',
    time: 'प्रातः 9:00 बजे से अपराह्न 4:00 बजे',
    location: 'करुणा सेवा आश्रम प्रांगण, गांधी नगर, नई दिल्ली',
    description: 'स्वतंत्रता दिवस के पावन अवसर पर विशाल रक्तदान शिविर एवं निःशुल्क हृदय व डायबिटीज जांच शिविर का आयोजन।',
    category: 'स्वास्थ्य सेवा',
    imageUrl: '/assets/healthcare_camp.jpg',
    isUpcoming: true,
    registeredCount: 142
  },
  {
    id: 'act2',
    title: '1100 छायादार व फलदार पौधों का हरित धरा रोपण',
    date: '1 अगस्त 2026',
    time: 'प्रातः 7:00 बजे से दोपहर 12:00 बजे',
    location: 'यमुना खादर पार्क क्षेत्र, दिल्ली',
    description: 'मानसून सत्र में 1100 बरगद, नीम, पीपल और आम के पौधे लगाने का संकल्प। सभी वालंटियर्स सादर आमंत्रित हैं।',
    category: 'वृक्षारोपण',
    imageUrl: '/assets/tree_plantation.jpg',
    isUpcoming: true,
    registeredCount: 89
  },
  {
    id: 'act3',
    title: 'निःशुल्क अन्नपूर्णा रसोई - 2000 लोगों को भोजन',
    date: '10 जुलाई 2026',
    time: 'दोपहर 12:00 बजे से शाम 4:00 बजे',
    location: 'एम्स अस्पताल के पास, दिल्ली',
    description: 'अस्पताल में भर्ती मरीजों के परिजनों एवं निर्धन जनों के लिए गरम कढ़ी-चावल, पूरी-सब्जी का सात्विक भोजन वितरण।',
    category: 'भोजन सेवा',
    imageUrl: '/assets/food_distribution.jpg',
    isUpcoming: false
  },
  {
    id: 'act4',
    title: 'स्कूली बच्चों को बैग, ड्रेस एवं पाठ्य पुस्तक वितरण',
    date: '25 जून 2026',
    time: 'प्रातः 10:00 बजे से दोपहर 1:00 बजे',
    location: 'राजकीय विद्यालय, सीलमपुर, दिल्ली',
    description: '500 मेधावी एवं जरूरतमंद छात्र-छात्राओं को विद्यालय किट एवं स्टेशनरी का नि:शुल्क वितरण।',
    category: 'शिक्षा सेवा',
    imageUrl: '/assets/education_support.jpg',
    isUpcoming: false
  }
];

export const TRUSTEES_DATA: TrusteeMember[] = [
  {
    id: 't1',
    name: 'श्री विजय प्रकाश शर्मा',
    role: 'मुख्य संस्थापक एवं अध्यक्ष',
    image: '/assets/founder.jpg',
    bio: 'विगत 25 वर्षों से समाज सेवा में समर्पित। करुणा सेवा ट्रस्ट की स्थापना निर्धन उत्थान के उद्देश्य से की।'
  },
  {
    name: 'श्रीमती अनीता गर्ग',
    id: 't2',
    role: 'उपाध्यक्ष एवं महिला कल्याण प्रभारी',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    bio: 'कन्या विवाह योजना व बालिका शिक्षा अभियानों का कुशलतापूर्वक संचालन करती आ रही हैं।'
  },
  {
    id: 't3',
    name: 'डॉ. राजेश कुमार सिंघल',
    role: 'कोषाध्यक्ष एवं स्वास्थ्य परामर्शदाता',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop',
    bio: 'वरिष्ठ चिकित्सक जो नि:शुल्क स्वास्थ्य शिविरों का नेतृत्व करते हैं।'
  },
  {
    id: 't4',
    name: 'श्री अमित वर्मा',
    role: 'महासचिव एवं पर्यावरण प्रमुख',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    bio: 'वृक्षारोपण एवं युवा स्वयंसेवक प्रबंधन के कार्यों की देखरेख करते हैं।'
  }
];

export const RECENT_DONORS: RecentDonor[] = [
  { id: 'd1', name: 'श्री रमेश चंद शर्मा', amount: 5100, cause: 'भोजन सेवा', city: 'दिल्ली', date: 'आज' },
  { id: 'd2', name: 'श्रीमती सुनीता गर्ग', amount: 11000, cause: 'विवाह सहयोग', city: 'जयपुर', date: 'आज' },
  { id: 'd3', name: 'श्री विकास गुप्ता', amount: 2100, cause: 'वृक्षारोपण', city: 'नोएडा', date: 'कल' },
  { id: 'd4', name: 'डॉ. संजय मेहरा', amount: 5000, cause: 'स्वास्थ्य सहायता', city: 'गुरुग्राम', date: 'कल' },
  { id: 'd5', name: 'श्रीमती पुष्पा देवी', amount: 1100, cause: 'वस्त्र वितरण', city: 'गाजियाबाद', date: '2 दिन पहले' }
];

export const BANK_DETAILS = {
  bankName: "Punjab National Bank (पंजाब नेशनल बैंक)",
  accountName: "ABHINAV KUMAR / KARUNA SEVA TRUST",
  accountNumber: "4894001500006683",
  ifscCode: "PUNB0489400",
  branch: "Rapti Nagar Chauraha, Gorakhpur, UP",
  upiId: "karunasevatrust@axl",
  qrNote: "किसी भी UPI ऐप (GPay, PhonePe, Paytm, BHIM) से QR कोड स्कैन करके दान करें"
};
