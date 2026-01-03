
export type Language = 'en' | 'hi';

export interface ContactInfo {
  name: string;
  phone: string;
}

export interface ContentData {
  thankYou: string;
  reachOut: string;
  title: string;
  subtitle: string;
  dates: string;
  location: string;
  venueName: string;
  aboutTitle: string;
  aboutContent: string[];
  videoTitle: string;
  footerText: string;
  contactTitle: string;
  contacts: ContactInfo[];
}

export interface SiteContent {
  en: ContentData;
  hi: ContentData;
}
