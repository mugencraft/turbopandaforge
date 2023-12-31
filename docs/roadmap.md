# TurboPandaForge Development Roadmap

## Milestone 1: Project Initialization

### Iteration 1: Project Setup and Contributor Onboarding

#### Epic: Repository Setup

- [x] Create project repository
- [x] Add LICENSE
- [x] Add turbopandaforge.png

#### Epic: Initial Documentation

- [x] Add README.md
- [x] Add ROADMAP.md
- [x] Add docs/README.md
- [x] Add docs/contributing.md
- [x] Add docs/code-of-conduct.md

#### Epic: Contributor Guidelines

- [x] Document commit conventions in ./docs/commit-conventions.md
- [x] Document workflow in ./docs/workflow.md

### Iteration 2: Development Environment Setup

#### Epic: Turbo & DevTools Setup

- [x] Implement initial project structure
- [x] Set up .gitignore
- [x] Set up Pnpm workspace
- [x] Set up Turbo
- [x] Document scripts in README

#### Epic: Linting and Formatting Setup

- [x] Add @turbopandaforge/eslint-flat-config
- [x] Prettier Setup
- [x] Set up linting (ESLint)
- [x] Set up lint-staged and Husky for pre-commit linting and formatting

#### Epic: Versioning, Change Log & Release Scripts

- [x] Changesets
- [x] Versioning
- [x] Document versioning and release scripts in README
- [x] Setup changeset, version-packages, and release scripts

#### Epic: Continuous Integration Setup

- [x] Set up Vercel CI
- [x] Set up basic GitHub Actions
- [x] Git Commit Hooks with Husky
- [x] commitlint Setup

#### Epic: Development Scripts

- [x] Setup pre-install, re-install scripts
- [x] Setup development, build, and clean scripts
- [x] Setup linting and formatting scripts
- [x] Setup testing placeholder script
- [x] Setup deduplication check script

#### Epic: Git Hooks

- [x] Setup pre-commit and pre-push hooks

#### Epic: Documentation of Scripts

- [x] Document all scripts in README, including setup and installation, development, code quality and testing, Git Hooks, and versioning and release scripts.

### Iteration 3: NextJs Setup

#### 🛠️ Epic: Core Setup

- [ ] Set up NextJs
- [ ] Implement NextJs13 appRouter
- [ ] Configure base security settings
- [ ] Directory Structure Setup (pages, components, public, styles, etc.)

#### 🎨 Epic: Styling and Theming

- [ ] Setup PandaCSS for Modules/Styled-components
- [ ] Configure Theme Provider
- [ ] Implement basic styling and theming
- [ ] Setup global styles

---

## Milestone 2: Core Functionalities

### Phase 1: Data Handling

#### Iteration 4: App Config

##### Epic: App Config

- [ ] Config and Metadata App Settings
- [ ] Static and dynamic URL handling
- [ ] Setup API calls handling (e.g., Axios or Fetch setup)
- [ ] Configure API routes if needed

#### Iteration 5: Markdown & Database

##### Epic: Markdown DB & Database Backend

- [ ] Implement Markdown DB for content
- [ ] Frontmatter integration
- [ ] SQLite setup

---

## Milestone 3: User Interface & Pages

### Phase 2: Basic UI/UX

#### Iteration 6: UI Setup

##### Epic: UI Framework

- [ ] Implement PandaCSS & ParkUI
- [ ] Basic design, including dark/light mode
- [ ] Create common components (e.g., Button, Input, Modal, etc.)
- [ ] Setup Storybook for component development and documentation

#### Iteration 7: UI Components

##### Epic: UI Components

- [ ] Implement basic Layout components
- [ ] Implement basic functionality of reading pages and posts
- [ ] Back to top button

#### Iteration 8: Page Creation

#### Iteration 8: Advanced UI Components

##### Epic: Content Components

- [ ] OG image generation
- [ ] Social icons
- [ ] MDX components
- [ ] Page Card
- [ ] Pages Cards
- [ ] Reading time
- [ ] Pagination
- [ ] prev/next post links
- [ ] related/similar posts
- [ ] Image and Gallery
- [ ] MDX code highlighting

##### Epic: Web Pages

- [ ] Page
  - [ ] Article
  - [ ] Tag
  - [ ] Image
- [ ] Collections
  - [ ] Category
  - [ ] Tags
  - [ ] Gallery
- [ ] About
  - [ ] Projects
  - [ ] Socials
  - [ ] Timeline Feed
- [ ] Marketing
  - [ ] Newsletter issues
- [ ] Profit
  - [ ] Donate

---

## Milestone 4: SEO & Advanced Features

### Phase 3: SEO & Routing

#### Iteration 9: Basic SEO

##### Epic: SEO

- [ ] Analytics
- [ ] Implement SEO metadata
- [ ] OpenGraph setup
- [ ] JSON-LD integration

### Phase 4: Advanced SEO & Performance

#### Iteration 10: Performance

##### Epic: Performance

- [ ] Bundle analysis
- [ ] Aim for 100 Lighthouse score
- [ ] Configure Image Optimization (Next.js Image component)
- [ ] Lazy Loading implementation
- [ ] Implement Server Side Rendering (SSR) or Static Site Generation (SSG) as needed

### Phase 5: User Engagement & Internationalization

#### Iteration 11: Socials & Engagement

##### Epic: Comments & Socials

- [ ] Commenting system
  - [ ] Select and integrate a commenting platform (e.g., Disqus, Commento)
  - [ ] Design comment section UI
  - [ ] Implement comment count feature
- [ ] Social sharing buttons
  - [ ] Design and implement share buttons UI
  - [ ] Configure share URLs and metadata
- [ ] Post like counter
  - [ ] Design and implement like button UI
  - [ ] Set up backend or third-party service for tracking likes
- [ ] Visitor counter
  - [ ] Implement visitor counter with privacy-preserving analytics (e.g., Plausible Analytics)
  - [ ] Display visitor count on page

#### Iteration 12: Accessibility & Internationalization

##### Epic: Accessibility

- [ ] Conduct accessibility audits
  - [ ] Utilize tools like Axe or Lighthouse for accessibility auditing
  - [ ] Identify and fix accessibility issues
  - [ ] Ensure compliance with WCAG standards

##### Epic: Internationalization

- [ ] Set up internationalization (i18n) framework
  - [ ] Select and integrate an i18n library (e.g., i18next)
  - [ ] Configure languages and translations
  - [ ] Implement language switcher UI
