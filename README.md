# RID Academy — Reducing Insurance Dependence Academy

The #1 resource for dental practice owners reducing dependence on PPO insurance plans.

**Live at:** [rida.narenlife.com](https://rida.narenlife.com)
**Production target:** [test.rid.academy](https://test.rid.academy) → [rid.academy](https://rid.academy)

---

## What This Is

A complete static website for RID Academy featuring:
- **4 Interactive Tools** — PPO Write-Off Calculator, Readiness Scorecard, Revenue Impact Simulator, Membership Plan Pricing Calculator
- **Blog/Learn Hub** — Article listing with pillar/cluster SEO architecture (800+ articles planned from podcast transcriptions)
- **Resource Library** — Templates, scripts, checklists, guides, spreadsheets
- **Community Page** — Community platform integration (Circle.so)
- **Summit Page** — Annual virtual event with CE credits
- **Glossary** — 40+ dental insurance terms (SEO goldmine)
- **About Page** — Mission, founders, partners

## Tech Stack

- **HTML5** — Semantic, accessible, SEO-optimized
- **CSS3** — Custom design system with CSS variables (no framework dependency)
- **Vanilla JavaScript** — Interactive tools, animations, navigation
- **Chart.js** — Revenue simulator chart (CDN)
- **Google Fonts** — Inter (sans) + DM Mono (mono)
- **Deployment** — GitHub Pages or any static host (Netlify, Vercel, Cloudflare Pages)

## File Structure

```
rida/
├── docs/                           # Strategy & brand documents
│   ├── RID_Academy_Growth_Strategy.docx
│   └── RID_Academy_Brand_Guide.docx
│
└── site/                           # Website files
    ├── index.html                  # Homepage
    ├── 404.html                    # Error page
    ├── css/
    │   └── styles.css              # Design system + all styles
    ├── js/
    │   └── main.js                 # Shared JavaScript
    ├── tools/
    │   ├── index.html              # Tools hub
    │   ├── ppo-calculator.html     # PPO Write-Off Calculator
    │   ├── readiness-scorecard.html# Insurance Independence Scorecard
    │   ├── revenue-simulator.html  # Revenue Impact Simulator
    │   └── membership-calculator.html # Membership Pricing Calculator
    ├── blog/
    │   └── index.html              # Blog/Learn hub
    ├── resources/
    │   └── index.html              # Resource library
    ├── pages/
    │   ├── about.html              # About RID Academy
    │   ├── summit.html             # Annual Summit
    │   ├── community.html          # Community page
    │   └── glossary.html           # Dental insurance glossary
    └── images/                     # Images (add as needed)
```

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Navy | `#0F2B46` | Primary brand, headings, trust |
| Teal | `#00B4A6` | Secondary, buttons, growth |
| Coral | `#FF6B35` | CTAs, alerts, energy |
| Green | `#22C55E` | Success states |
| Amber | `#F59E0B` | Warnings |
| Red | `#EF4444` | Errors |

## Deployment

### GitHub Pages
1. Push to `main` branch
2. Go to repo Settings → Pages → Source: Deploy from branch → `main` / `/ (root)` or `/site`
3. Set custom domain: `rida.narenlife.com`
4. Add CNAME record: `rida.narenlife.com` → `narulraj283.github.io`

### Alternative: Netlify / Vercel / Cloudflare Pages
1. Connect GitHub repo
2. Set build directory: `site/`
3. Set custom domain

## Next Steps (from Growth Strategy)

### Phase 1 (Now → 60 days)
- [ ] Deploy to rida.narenlife.com
- [ ] Begin transcribing 349+ podcast episodes
- [ ] Publish first 30–50 SEO articles from transcriptions
- [ ] Set up email capture (ConvertKit, Mailchimp, or similar)
- [ ] Add Google Analytics + Search Console

### Phase 2 (60–120 days)
- [ ] Launch Circle.so community
- [ ] Add 3 more tools from roadmap
- [ ] Publish 50–100 more articles
- [ ] Begin website UX refinement based on user feedback

### Phase 3 (120–240 days)
- [ ] Launch RID Certification program
- [ ] Publish first annual report
- [ ] YouTube channel launch
- [ ] Mobile app development (PWA)

## Key Contacts

- **Naren Arulrajah** — CEO, Ekwa Marketing — nonops.content@ekwa.com
- **Gary Takacs** — Thriving Dentist — thrivingdentist.com

---

Built with care for the dental professionals working to practice on their own terms.
