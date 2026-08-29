export type ActiveTab = 'home' | 'about' | 'works' | 'activities' | 'gallery' | 'volunteer' | 'contact' | 'opinion';

export interface ServiceCard {
  id: string;
  title: string;
  titleEn: string;
  icon: string;
  description: string;
  descriptionEn: string;
  details: string;
  impactMetric: string;
  image: string;
}

export interface StatItem {
  id: string;
  number: string;
  label: string;
  labelEn: string;
  icon: string;
}

export interface ValueItem {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'food' | 'health' | 'clothes' | 'marriage' | 'tree' | 'education';
  categoryLabel: string;
  imageUrl: string;
  date: string;
  location: string;
}

export interface ActivityEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  imageUrl: string;
  isUpcoming: boolean;
  registeredCount?: number;
}

export interface RecentDonor {
  id: string;
  name: string;
  amount: number;
  cause: string;
  city: string;
  date: string;
}

export interface TrusteeMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface DonationFormData {
  amount: number;
  cause: string;
  fullName: string;
  phone: string;
  email: string;
  panNumber: string;
  city: string;
  paymentMethod: 'upi' | 'card' | 'netbanking' | 'qr';
}

export interface VolunteerFormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  occupation: string;
  interests: string[];
  availability: string;
  message: string;
}

export interface DonationReceipt {
  receiptNo: string;
  donorName: string;
  amount: number;
  cause: string;
  date: string;
  panNo: string;
  phone: string;
  txnId: string;
  paymentMode: string;
}

