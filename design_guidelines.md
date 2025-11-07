# ProConsult Services - Design Guidelines

## Design Approach

**Reference-Based with Professional Polish**: Draw inspiration from LinkedIn's professional aesthetic, Stripe's trust-building minimalism, and modern consulting firms. Prioritize credibility, clarity, and sophisticated simplicity over flashy elements.

## Typography System

**Primary Font**: Inter (Google Fonts)
- Headings: 600-700 weight
- Body: 400-500 weight
- Accent/Stats: 300 weight for elegant large numbers

**Hierarchy**:
- H1 (Hero): text-5xl md:text-6xl lg:text-7xl, font-semibold
- H2 (Section): text-3xl md:text-4xl lg:text-5xl, font-semibold
- H3 (Cards): text-xl md:text-2xl, font-semibold
- Body: text-base md:text-lg
- Small/Meta: text-sm

## Layout System

**Spacing Primitives**: Consistently use Tailwind units of 4, 6, 8, 12, 16, and 24 (e.g., p-8, gap-12, mt-16)

**Container Strategy**:
- Full-width sections with inner max-w-7xl mx-auto px-6 lg:px-8
- Content sections: max-w-6xl
- Text-heavy areas: max-w-4xl

**Section Padding**: py-16 md:py-24 lg:py-32 for consistent vertical rhythm

## Core Components

### Navigation
- Fixed header with backdrop blur (sticky top-0 bg-white/80 backdrop-blur-md)
- Logo left, nav links center/right, CTA button (navy background with golden hover state)
- Mobile: Hamburger menu with smooth slide-in drawer
- Shadow on scroll for depth

### Cards
- Rounded corners (rounded-xl to rounded-2xl)
- Subtle shadow (shadow-lg with hover:shadow-xl transition)
- Padding: p-8 md:p-10
- Hover: Slight lift (hover:-translate-y-1 transition-transform)

### Buttons
- Primary (CTA): Navy background, white text, golden accent on hover with blur effect when on images
- Secondary: Outlined navy border, navy text, golden fill on hover
- Size: px-8 py-3.5 md:px-10 md:py-4
- Rounded: rounded-lg

### Icons
- FontAwesome line-style icons
- Size: w-12 h-12 for feature cards
- Enclosed in subtle circular backgrounds (bg-navy-50 rounded-full p-3)

## Page-Specific Guidelines

### Home Page

**Hero Section**:
- Full viewport height (min-h-screen) with professional consulting imagery (boardroom, team collaboration, or abstract business graphics)
- Image: Corporate professional setting with diverse team or modern office environment, subtle overlay gradient
- Content: Centered layout with h1 tagline, 2-line supporting text, dual CTA buttons (stacked on mobile, side-by-side desktop)
- Buttons on hero have backdrop-blur-md bg-white/10 treatment

**Services Preview**:
- 4-column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-4)
- Each card: Icon at top, service title, 2-3 line description
- Hover reveals subtle golden accent border
- Gap: gap-8

**About Snapshot**:
- 2-column layout (image left, content right on desktop, stacked mobile)
- Image: Professional team photo or office environment
- Stats row: 3-4 key metrics with large numbers (text-4xl font-light)

**Testimonials**:
- Card-based carousel, 3 visible on desktop, 1 on mobile
- Each card: Quote, client name, company, role
- Subtle quotation mark graphic element

### About Us Page

**Mission Section**:
- Clean typography-focused layout, max-w-4xl centered
- Large pull quote or mission statement (text-3xl font-light)

**Why Choose Us**:
- 3-column grid with icon + heading + description
- Stats integration: Large numbers with labels

**Team Grid**:
- 3-column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Professional headshots: Grayscale by default, color on hover
- Name, role, LinkedIn icon link
- Card hover: Gentle lift with shadow expansion

### Services Page

**Service Cards**:
- 2-column grid for detailed services
- Each card expands vertically on hover to reveal full description (max-height transition)
- Icon + title always visible, description revealed
- Alternating image placements (left/right) for visual rhythm
- Service images: Industry-specific abstract or representative imagery

### Clients & Testimonials

**Logo Showcase**:
- 4-6 columns of client logos
- Grayscale filter: filter grayscale, hover removes filter with smooth transition
- Logos on subtle background cards

**Testimonials Grid**:
- Masonry or 2-column layout
- Varying card heights for dynamic feel
- Each card: Photo (circular), quote, attribution

### Contact Page

**Layout**: 2-column (60/40 split)
- Left: Contact form (Name, Email, Subject, Message textarea)
- Right: Quick info cards (Address, Phone, Email, Hours) + map embed

**Form Design**:
- Clean inputs with border-b-2 focus states (golden accent)
- Labels: text-sm font-medium mb-2
- Submit button: Full-width navy background

**Map Section**:
- Below form grid, full-width static embed
- Rounded corners matching site style

## Images Strategy

**Hero Image**: Large, high-quality professional consulting imagery showing collaboration, leadership, or modern workspace. Subtle dark gradient overlay for text legibility.

**About Page**: Team photo, office environment shots

**Services**: Abstract business graphics or industry-specific imagery (finance charts, digital transformation visuals, HR collaboration)

**Team Members**: Professional headshots with consistent background treatment

**Clients Section**: Client logo badges (obtain or use placeholders)

## Animations

Use AOS library sparingly:
- Fade-in for section headings (data-aos="fade-up")
- Slide-in for cards (data-aos="fade-up" with stagger delay)
- Scale for stats (data-aos="zoom-in")
- Duration: 800ms, easing: ease-in-out

Avoid over-animation—maintain professional restraint.

## Responsive Behavior

**Breakpoints**:
- Mobile-first approach
- md: 768px (tablet)
- lg: 1024px (desktop)
- xl: 1280px (large desktop)

**Key Adjustments**:
- Navigation: Hamburger below md
- Grids: Stack to single column on mobile
- Hero text: Reduce from text-7xl to text-4xl on mobile
- Section padding: Scale from py-12 to py-32