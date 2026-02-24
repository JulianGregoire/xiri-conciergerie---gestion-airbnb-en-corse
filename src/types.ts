
export type View = 'home' | 'service' | 'article' | 'blog' | 'about' | 'local-seo';

export interface LocalCityData {
  id: string;
  name: string;
  title: string;
  heroImg: string;
  intro: string;
  localExpertise: string;
  neighborhoods: string[];
  metaTitle: string;
  metaDesc: string;
}

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  fullContent: string;
  img: string;
  gallery: string[];
  expertisePoints: string[];
}

export interface ArticleData {
  id: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  author: string;
}
