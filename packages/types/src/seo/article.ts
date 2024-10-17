/**
 * Maps Schema-dts @type `Article`
 *
 * An article, such as a news article or piece of investigative report.
 * Newspapers and magazines have articles of many different types and
 * this is intended to cover them all.
 *
 * See also {@link http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html blog post}.
 *
 * articleBody
 * articleSection
 * backstory - textual summary giving a brief explanation of why and how an article was created.
 *             In a journalistic setting this could include information about reporting process,
 *             methods, interviews, data sources, etc.
 * speakable - {@link https://schema.org/SpeakableSpecification}
 * wordCount
 *
 *
 */
export type ArticleType =
  | 'Article'
  /**
   * An Article that an external entity has paid to place or to produce to its specifications.
   * Includes {@link https://en.wikipedia.org/wiki/Advertorial}s,
   * sponsored content, native advertising and other paid content.
   */
  | 'AdvertiserContentArticle'
  /**
   * A Report generated by governmental or non-governmental organization.
   *
   * reportNumber - The number or other unique designator assigned to a Report by the publishing organization.
   */
  | 'Report'
  /**
   * An Article whose content is primarily satirical in nature, i.e. unlikely to be literally true.
   * A satirical article is sometimes but not necessarily also a NewsArticle.
   * ScholarlyArticles are also sometimes satirized.
   * {@link https://en.wikipedia.org/wiki/Satire}
   */
  | 'SatiricalArticle'
  | 'ScholarlyArticle'
  | 'MedicalScholarlyArticle'
  | NewsArticle
  | SocialMediaPosting
  | TechArticle

/**
 * {@link /docs/news.html schema.org News markup}
 */
type NewsArticle =
  | 'NewsArticle'
  /**
   * An Article based on factual reporting,
   * incorporates the expertise of the author/producer,
   * offering interpretations and conclusions.
   */
  | 'AnalysisNewsArticle'
  /**
   * An Article expressing an open call by a NewsMediaOrganization
   * asking the public for input, insights, clarifications, anecdotes, documentation, etc.,
   * on an issue, for reporting purposes
   */
  | 'AskPublicNewsArticle'
  /**
   * An Article providing historical context, definition and detail on a specific topic
   * (aka "explainer" or "backgrounder").
   * For example, an in-depth article or frequently-asked-questions
   * ({@link https://en.wikipedia.org/wiki/FAQ FAQ}) document on topics
   * such as Climate Change or the European Union.
   * Other kinds of background material from a non-news setting are often described
   * using Book or Article, in particular ScholarlyArticle.
   */
  | 'BackgroundNewsArticle'
  /**
   * An Article that primarily expresses opinions rather than journalistic reporting of news and events.
   * For example, a NewsArticle consisting of a column
   * or Blog/BlogPosting entry in the Opinions section of a news publication.
   */
  | 'OpinionNewsArticle'
  /**
   * Represent news articles which are the result of journalistic news reporting conventions.
   * In practice many news publishers produce a wide variety of article types,
   * many of which might be considered a NewsArticle but not a ReportageNewsArticle.
   * For example, opinion pieces, reviews, analysis, sponsored or satirical articles,
   * or articles that combine several of these elements.
   *
   * The ReportageNewsArticle type is based on a stricter ideal for "news" as a work of journalism,
   * with articles based on factual information either observed or verified by the author,
   * or reported and verified from knowledgeable sources.
   * This often includes perspectives from multiple viewpoints on a particular issue
   * (distinguishing news reports from public relations or propaganda).
   * News reports in the ReportageNewsArticle sense de-emphasize the opinion of the author,
   * with commentary and value judgments typically expressed elsewhere.
   *
   * A ReportageNewsArticle which goes deeper into analysis can also be marked
   * with an additional type of AnalysisNewsArticle.
   */
  | 'ReportageNewsArticle'
  /**
   * A NewsArticle and CriticReview providing a professional critic's assessment
   * of a service, product, performance, or artistic or literary work.
   */
  | 'ReviewNewsArticle'

/**
 * A post to a social media platform, including blog posts, tweets, Facebook posts, etc.
 *
 * sharedContent - A CreativeWork such as an image, video, or audio clip shared as part of this posting.
 */
type SocialMediaPosting =
  | 'BlogPosting'
  /**
   * A LiveBlogPosting is a BlogPosting intended to provide
   * a rolling textual coverage of an ongoing event through continuous updates.
   */
  | 'LiveBlogPosting'
  | 'DiscussionForumPosting'
  | 'SocialMediaPosting'

/**
 * A technical article - Example: How-to (task) topics, step-by-step, procedural troubleshooting, specifications, etc.
 */
type TechArticle = 'APIReference' | 'TechArticle'
