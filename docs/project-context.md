# Smallcrowdd Project Context

## Source Repo

Reference repo: `/Users/eugene/Desktop/Develop/Nextjs/smallcrowdd-website`

This sibling project is for the original/proposed portfolio concept. The existing repo should be treated as source material only.

## Current Production Direction

- Grid-based, restrained studio layout.
- Lowercase editorial copy.
- Hard borders and split panels.
- Video and stills are the primary proof points.
- Motion stack already uses GSAP and Framer Motion.

## Content Model

The Sanity setup is compact and studio-specific:

- `siteSettings`: copyright, Instagram, fallback SEO.
- `homePage`: hero video, award badges, SEO.
- `studioPage`: intro, partnership copy, services, awards, brand partners.
- `testsPage`: headline, subheadline, two video sections, mid-page text.
- `theRisingTimesPage`: hero image, subtitle, SEO.
- `workProject`: hero carousel videos and stills gallery.

The concept repo currently mirrors those schemas so CMS migration stays simple. The model can be expanded later if the portfolio concept needs case-study sections, manifesto blocks, or animation-led editorial pages.

## Asset Library

Copied local assets include:

- Logos: `public/assets/logos`
- Award marks: `public/assets/awards`
- Brand marks: `public/assets/brands`
- Icons: `public/assets/icons`
- Hero stills and gallery images: `public/assets/images`
- Tests thumbnails: `public/assets/tests`
- Loading video: `public/videos/Loading.mp4`

## Design Direction For This Repo

This repo should not reproduce the deployed final site. It should use the earlier concept direction and can be more expressive:

- Heavier page transitions.
- More cinematic scroll and reveal behavior.
- Stronger image/video choreography.
- Portfolio-ready narrative framing around "original concept" and "proposed direction".
- A visual system that can stand alone as a case-study artifact.
