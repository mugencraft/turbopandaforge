/**
 * Base Page
 */
export interface BasePage {
  slug: string
}

/**
 * Extends RawFrontmatterMetadata with additional computed and optional fields.
 * `date`: The publish date as a string
 * `images`: Optional image metadata
 * `readingTime`: Reading time, computed based on `_raw_content`
 * `slug`: Slug, computed based on `url_path` and RawFrontmatterMetadata
 * `tags`: An array of string tags
 * `title`: The title of the page or article computed on file_path
 * `wordCount`: Word count, computed based on `_raw_content`
 */
export interface PageMetadata {
  date: string
  images?: string | string[]
  slug: string
  tags: string[]
  title: string
  wordCount: number
  articleType?: string
  authors?: string | string[]
  bibliography?: string
  canonicalUrl?: string
  description?: string
  draft?: boolean
  language?: string
  lastMod?: string
  layout?: string
  mainEntity?: string
  pageType?: string
  twitterCard?: string | string[]
}
