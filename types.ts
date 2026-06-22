// ─── Sanity Base Types ───

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref?: string;
    _id?: string;
    _type: 'reference' | string;
    url?: string;
    metadata?: {
      dimensions?: { width: number; height: number; aspectRatio: number };
      lqip?: string;
      palette?: unknown;
    };
  };
  alt?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export interface SanityFile {
  _type: 'file';
  asset: {
    _ref?: string;
    _id?: string;
    _type: 'reference' | string;
    url?: string;
  };
}

export interface SanitySlug {
  _type: 'slug';
  current: string;
}

// ─── SEO ───

export interface SeoFields {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImage;
  noIndex?: boolean;
}

// ─── Site Settings ───

export interface SiteSettingsData {
  copyrightText?: string;
  instagramUrl?: string;
}

// ─── Home Page ───

export interface HomePageData {
  heroVideo?: SanityFile;
  awards?: {
    _key: string;
    alt: string;
    image: SanityImage;
  }[];
  seo?: SeoFields;
}

// ─── Work Projects ───

export interface WorkVideoData {
  _key: string;
  thumbnail?: SanityImage;
  title: string;
  category?: string;
  description?: string;
  fullVideoUrl: string;
  credits?: string;
}

export interface GalleryImageData {
  _key: string;
  image: SanityImage;
  creditTitle?: string;
  creditShotBy?: string;
}

export interface WorkProjectData {
  _id: string;
  videos?: WorkVideoData[];
  galleryImages?: GalleryImageData[];
}

// ─── Tests Page ───

export interface TestVideoData {
  _key: string;
  title: string;
  fullVideoUrl: string;
  credits?: string;
  layout?: 'default' | 'extended';
}

export interface TestsPageData {
  headline: string;
  subheadline?: string;
  section1Videos?: TestVideoData[];
  midSectionText?: string;
  section2Videos?: TestVideoData[];
  seo?: SeoFields;
}

// ─── Studio Page ───

export interface StudioPageData {
  introCopy: string;
  partnershipCopy?: string;
  services?: {
    _key: string;
    title: string;
    description: string;
  }[];
  achievementHeading?: string;
  awards?: {
    _key: string;
    alt: string;
    image: SanityImage;
  }[];
  collaborationHeading?: string;
  brands?: {
    _key: string;
    alt: string;
    image: SanityImage;
  }[];
  seo?: SeoFields;
}

// ─── The Rising Times ───

export interface TheRisingTimesPageData {
  heroImage?: SanityImage;
  subtitle: string;
  seo?: SeoFields;
}

// ─── Navigation ───

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// ─── Component Props ───

export interface SectionProps {
  className?: string;
  children: React.ReactNode;
  id?: string;
}
