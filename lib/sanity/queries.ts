import { groq } from 'next-sanity';

const imageFields = `
  asset->{
    _id,
    url,
    metadata {
      dimensions,
      lqip,
      palette
    }
  },
  alt,
  hotspot,
  crop
`;

// ─── Site Settings ───

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    copyrightText,
    instagramUrl
  }
`;

// ─── Home Page ───

export const homePageQuery = groq`
  *[_type == "homePage"][0] {
    heroVideo {
      asset->{
        _id,
        url
      }
    },
    awards[] {
      _key,
      alt,
      image { ${imageFields} }
    },
    seo
  }
`;

// ─── Work Projects ───

export const featuredWorkProjectQuery = groq`
  *[_type == "workProject"][0] {
    _id,
    videos[] {
      _key,
      thumbnail { ${imageFields} },
      title,
      category,
      description,
      fullVideoUrl,
      credits
    },
    galleryImages[] {
      _key,
      creditTitle,
      creditShotBy,
      image { ${imageFields} }
    }
  }
`;

export const allWorkProjectsQuery = groq`
  *[_type == "workProject"] {
    _id,
    videos[] {
      _key,
      thumbnail { ${imageFields} },
      title,
      category,
      description,
      fullVideoUrl,
      credits
    },
    galleryImages[] {
      _key,
      creditTitle,
      creditShotBy,
      image { ${imageFields} }
    }
  }
`;

export const workProjectBySlugQuery = groq`
  *[_type == "workProject"][0] {
    _id,
    videos[] {
      _key,
      thumbnail { ${imageFields} },
      title,
      category,
      description,
      fullVideoUrl,
      credits
    },
    galleryImages[] {
      _key,
      creditTitle,
      creditShotBy,
      image { ${imageFields} }
    }
  }
`;

// ─── Tests Page ───

export const testsPageQuery = groq`
  *[_type == "testsPage"][0] {
    headline,
    subheadline,
    section1Videos[] {
      _key,
      title,
      fullVideoUrl,
      credits,
      layout
    },
    midSectionText,
    section2Videos[] {
      _key,
      title,
      fullVideoUrl,
      credits,
      layout
    }
  }
`;

// ─── Studio Page ───

export const studioPageQuery = groq`
  *[_type == "studioPage"][0] {
    introCopy,
    partnershipCopy,
    services[] {
      _key,
      title,
      description
    },
    achievementHeading,
    awards[] {
      _key,
      alt,
      image { ${imageFields} }
    },
    collaborationHeading,
    brands[] {
      _key,
      alt,
      image { ${imageFields} }
    },
    seo
  }
`;

// ─── The Rising Times ───

export const theRisingTimesPageQuery = groq`
  *[_type == "theRisingTimesPage"][0] {
    heroImage { ${imageFields} },
    subtitle,
    seo
  }
`;
