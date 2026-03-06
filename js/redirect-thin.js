// RID Academy Thin Article Redirect System
// This file redirects old thin article URLs to their new consolidated article URLs
// Generated for consolidation of 252 thin articles into 45 comprehensive articles

(function() {
  // Complete mapping of old thin article slugs to new consolidated article slugs
  const REDIRECT_MAP = {
    "can-you-successfully-resign-from-ppo-plans-by-the-end-of-the-year": "ppo-resignation-timing-readiness",
    "details-about-timing-how-soon-can-i-start-how-long-will-it-take": "ppo-resignation-timing-readiness",
    "how-do-i-know-if-i-am-ready": "ppo-resignation-timing-readiness",
    "how-long-will-it-take-to-successfully-resign-from-ppo-plans": "ppo-resignation-timing-readiness",
    "yes-it-is-possible-to-successfully-drop-ppo-plans-in-12-months-but-should-you": "ppo-resignation-timing-readiness",
    "when-is-the-wrong-time-to-go-out-of-network": "ppo-resignation-timing-readiness",
    "simple-way-to-test-your-practice-to-see-if-you-can-successfully-resign-from-ppo": "ppo-resignation-timing-readiness",
    "could-your-bhag-for-2024-be-successfully-resigning-from-ppo-plans": "ppo-resignation-timing-readiness",
    "the-best-timing-ever-to-reduce-insurance-dependence": "ppo-resignation-timing-readiness",
    "3-most-common-mistakes-dentists-make-when-resigning-from-ppo-plans": "ppo-common-mistakes-fears",
    "5-simple-things-to-do-now-to-prepare-to-drop-ppo-plans": "ppo-common-mistakes-fears",
    "the-5-biggest-reasons-why-dentists-dont-resign-from-ppo-plans": "ppo-common-mistakes-fears",
    "what-keeps-a-dentist-from-resigning-from-ppo-plans": "ppo-common-mistakes-fears",
    "when-would-i-recommend-not-resigning-from-ppo-plans": "ppo-common-mistakes-fears",
    "10-most-common-questions-dentists-have-when-dropping-ppo-plans": "ppo-common-questions",
    "10-most-common-questions-dentists-have-when-dropping-ppo-plans-part-2": "ppo-common-questions",
    "the-10-most-common-questions-dentists-have-about-dropping-ppo-plans": "ppo-common-questions",
    "top-10-questions-from-rida-members-part-1": "ppo-common-questions",
    "top-10-questions-from-rida-members-part-2": "ppo-common-questions",
    "a-success-story-from-a-practice-that-has-reduced-insurance-dependence": "ppo-success-stories-data",
    "actual-data-from-a-dental-practice-that-has-successfully-dropped-ppo-plans": "ppo-success-stories-data",
    "dr-tracey-hughes-becomes-100-ffs-is-thriving": "ppo-success-stories-data",
    "300th-episode-success-story-special": "ppo-success-stories-data",
    "reducing-insurance-dependence-success-stories": "ppo-success-stories-data",
    "which-of-the-6-steps-to-successfully-resign-from-ppo-plans-is-most-important": "ppo-6-steps-overview",
    "five-things-to-do-now-to-prepare-to-resign-from-ppo-plans": "ppo-6-steps-overview",
    "resources-dental-practices-need-to-successfully-resign-from-ppo-plans": "ppo-6-steps-overview",
    "smart-goals-for-successfully-resigning-from-ppo-plans": "ppo-6-steps-overview",
    "can-you-successfully-resign-from-delta": "delta-dental-strategies",
    "does-it-make-sense-to-keep-delta-premier": "delta-dental-strategies",
    "delta-the-5000-pound-gorilla": "delta-dental-strategies",
    "my-experience-successfully-resigning-from-delta-with-dr-daniel-alleman": "delta-dental-strategies",
    "one-dentists-surprise-discovery-when-he-resigned-as-a-delta-ppo-provider": "delta-dental-strategies",
    "can-i-stop-seeing-new-delta-patients-as-i-transition-to-dropping-delta-entirely": "delta-dental-strategies",
    "is-delta-on-the-ropes": "delta-dental-strategies",
    "is-delta-planning-to-lower-your-contracted-fees": "delta-dental-strategies",
    "are-there-ppo-plans-that-do-not-pay-out-of-network-benefits": "insurance-contracts-rules",
    "can-insurance-companies-set-fees-for-uncovered-services": "insurance-contracts-rules",
    "can-ppo-plans-set-fees-for-uncovered-services": "insurance-contracts-rules",
    "help-im-contracted-with-many-more-ppo-plans-than-expected": "insurance-contracts-rules",
    "have-you-been-roped-into-umbrella-ppo-plans": "insurance-contracts-rules",
    "the-insurance-company-business-model": "insurance-contracts-rules",
    "understanding-dental-insurance": "insurance-contracts-rules",
    "the-insurance-concierge": "insurance-contracts-rules",
    "are-ppo-plans-going-to-be-lowering-your-contracted-fees": "insurance-industry-changes",
    "are-ppo-plans-softening-their-stance-on-negotiating": "insurance-industry-changes",
    "are-you-noticing-more-insurance-claims-being-denied": "insurance-industry-changes",
    "ppo-plans-are-cutting-fees": "insurance-industry-changes",
    "ppo-plans-are-now-lowering-your-contracted-fees": "insurance-industry-changes",
    "why-havent-ppo-plans-raised-fees-or-yearly-maximums-in-25-years": "insurance-industry-changes",
    "impact-of-ai-auto-denial-of-claims-and-how-you-can-adapt-as-a-practice": "insurance-industry-changes",
    "will-dental-insurance-finally-get-a-much-needed-overhaul-in-2025": "insurance-industry-changes",
    "negotiated-fee-schedules-truth-or-fiction": "insurance-industry-changes",
    "massachusetts-question-2-ballot-measure-wins-by-a-large-margin": "insurance-industry-changes",
    "the-november-2022-massachusetts-ballot-initiative-regarding-delta-dental": "insurance-industry-changes",
    "sneak-preview-on-possible-benefits-reform": "insurance-industry-changes",
    "1000-dollar-annual-dental-insurance-limit-really": "insurance-industry-changes",
    "the-ppo-umbrella-nightmare": "umbrella-lease-networks",
    "how-are-insurance-companies-responding-to-practices-going-out-of-network": "umbrella-lease-networks",
    "can-your-practice-truly-survive-without-insurance": "insurance-decision-framework",
    "do-i-need-to-go-all-the-way": "insurance-decision-framework",
    "finding-balance-in-dentistry-while-reducing-insurance-dependence-and-avoiding-bu": "insurance-decision-framework",
    "is-a-hybrid-practice-the-right-model-for-you": "insurance-decision-framework",
    "improving-your-practice-without-completely-committing-to-fee-for-service": "insurance-decision-framework",
    "reasons-to-stay-in-network-with-ppo-plans": "insurance-decision-framework",
    "useful-insight-on-ppo-participation": "insurance-decision-framework",
    "how-to-answer-the-question-do-you-take-my-dental-insurance": "patient-insurance-conversations",
    "how-to-answer-the-question-do-you-take-my-insurance-from-a-potential-new-pat": "patient-insurance-conversations",
    "how-to-respond-to-the-dreaded-question-is-this-covered-by-my-insurance": "patient-insurance-conversations",
    "how-is-the-best-way-to-respond-when-patients-ask-why-are-you-dropping-my-denta": "patient-insurance-conversations",
    "the-one-thing-to-tell-every-patient-about-their-dental-insurance": "patient-insurance-conversations",
    "how-to-speak-to-patients-about-the-value-of-being-out-of-network": "patient-insurance-conversations",
    "patient-communication-tips-when-dropping-ppo-plans": "patient-insurance-conversations",
    "the-end-of-the-year-insurance-letter": "patient-insurance-conversations",
    "an-important-phrase-to-stop-using": "patient-insurance-conversations",
    "should-i-accept-assignment-of-benefits-once-we-are-out-of-network": "payment-after-dropping",
    "payment-details-when-resigning-from-ppo-plans": "payment-after-dropping",
    "payment-options-and-money-issues": "payment-after-dropping",
    "successfully-handling-patient-payment-once-you-drop-ppos": "payment-after-dropping",
    "solution-to-overcome-patient-resistance-to-paying-at-time-of-service": "payment-after-dropping",
    "how-to-apply-the-influence-principle-of-authority-in-your-practice": "influence-principles-dentistry",
    "how-to-apply-the-influence-principle-of-liking-in-your-practice": "influence-principles-dentistry",
    "how-to-apply-the-influence-principle-of-reciprocity-in-your-practice": "influence-principles-dentistry",
    "how-to-apply-the-influence-principle-of-scarcity-in-your-practice": "influence-principles-dentistry",
    "how-to-apply-the-influence-principle-of-social-proof-in-your-practice": "influence-principles-dentistry",
    "how-to-apply-the-influence-principle-of-unity-in-your-practice": "influence-principles-dentistry",
    "how-to-apply-the-influence-principles-of-commitment-and-consistency-in-your-prac": "influence-principles-dentistry",
    "the-fee-that-patients-are-most-sensitive-to-when-you-resign-from-their-ppo-plan": "fee-sensitivity-strategy",
    "fee-setting-guidelines": "fee-sensitivity-strategy",
    "given-the-current-inflationary-cycle-should-i-raise-my-fees": "fee-sensitivity-strategy",
    "what-is-the-best-way-to-determine-an-appropriate-fee-schedule": "fee-sensitivity-strategy",
    "5-ways-being-a-ppo-practice-keeps-you-from-creating-an-ideal-practice": "ppo-financial-impact",
    "are-there-ppo-plans-worth-keeping": "ppo-financial-impact",
    "how-does-staying-in-network-negatively-affect-your-net-worth": "ppo-financial-impact",
    "what-are-the-consequences-of-staying-in-network-with-ppo-plans": "ppo-financial-impact",
    "does-being-a-ppo-provider-help-you-achieve-an-effective-work-life-balance": "ppo-financial-impact",
    "successfully-reducing-your-insurance-dependence-increases-the-value-of-your-prac": "ppo-financial-impact",
    "how-do-i-stay-profitable-after-dropping-ppo-plans": "ppo-financial-impact",
    "4-tips-to-get-your-team-on-board": "team-buy-in-strategies",
    "handling-team-resistance": "team-buy-in-strategies",
    "how-to-successfully-overcome-team-resistance-to-dropping-ppos": "team-buy-in-strategies",
    "strategies-to-get-your-team-members-on-board-when-resigning-from-ppo-plans": "team-buy-in-strategies",
    "tips-to-get-new-team-members-on-board-when-resigning-from-ppo-plans": "team-buy-in-strategies",
    "team-meeting-with-focus-on-successfully-dropping-ppo-plans": "team-buy-in-strategies",
    "the-important-role-of-practice-champions-in-reducing-insurance-dependance": "team-buy-in-strategies",
    "hiring-101-how-to-attract-the-best-possible-team-members": "hiring-and-staffing",
    "hiring-update-is-the-tide-changing": "hiring-and-staffing",
    "when-to-know-you-are-ready-to-hire-an-associate": "hiring-and-staffing",
    "how-to-become-the-dental-office-with-the-most-google-reviews-in-your-community": "google-reviews-strategy",
    "how-google-reviews-reduce-your-dependence-on-ppo-plans": "google-reviews-strategy",
    "how-to-deal-with-1-or-2-star-reviews": "google-reviews-strategy",
    "how-to-deal-with-negative-reviews": "google-reviews-strategy",
    "replace-ppo-plans-with-google-as-your-source-of-new-patients": "marketing-strategies-misc",
    "the-most-common-marketing-mistakes-you-must-avoid": "marketing-strategies-misc",
    "the-importance-of-marketing-in-advance-when-you-resign-from-ppo-plans": "marketing-strategies-misc",
    "marketing-audit-to-reduce-dependence-on-ppo-plans": "marketing-strategies-misc",
    "how-to-attract-fee-for-service-patients-by-working-with-small-business-owner-pa": "marketing-strategies-misc",
    "how-to-attract-better-patients": "marketing-strategies-misc",
    "using-google-to-find-emergency-patients": "marketing-strategies-misc",
    "why-google-ads-and-pay-per-click-are-a-waste-of-money": "marketing-strategies-misc",
    "using-video-as-a-patient-communication-medium-when-resigning-from-ppo-plans": "marketing-strategies-misc",
    "using-video-as-a-resource-to-successfully-resign-from-ppo-plans": "marketing-strategies-misc",
    "photography-tips": "marketing-strategies-misc",
    "attracting-high-value-patients-to-your-dental-practice": "marketing-strategies-misc",
    "3-simple-additions-to-your-website-that-will-help-more-potential-patients-choose": "website-strategy",
    "biggest-mistake-practice-owners-make-when-building-a-website": "website-strategy",
    "a-fresh-look-at-new-patient-phone-calls": "phone-skills-conversion",
    "five-phrases-to-use-on-the-phone": "phone-skills-conversion",
    "the-one-question-you-must-ask-every-new-patient-caller": "phone-skills-conversion",
    "two-powerful-questions-to-ask-all-new-patients": "phone-skills-conversion",
    "what-is-your-call-conversion-rate": "phone-skills-conversion",
    "three-tips-to-significantly-increase-your-conversion-rate": "phone-skills-conversion",
    "a-great-way-to-quickly-develop-rapport-with-your-new-patients": "new-patient-experience",
    "a-new-patient-experience-that-you-and-your-patients-will-love": "new-patient-experience",
    "do-you-roll-the-red-carpet-out-for-new-patients": "new-patient-experience",
    "turning-patients-into-ambassadors": "new-patient-experience",
    "a-winning-project-to-attract-new-patients-who-become-your-super-fans": "referral-strategies",
    "reciprocity-in-action": "referral-strategies",
    "the-most-effective-detail-to-increase-case-acceptance": "case-acceptance-tactics",
    "hygienist-as-your-partner-in-case-acceptance": "case-acceptance-tactics",
    "applying-disc-personality-styles-knowledge-when-resigning-from-ppo-plans": "case-acceptance-tactics",
    "3-mistakes-dentists-make-with-their-membership-plan": "membership-plan-growth",
    "grow-your-in-office-membership-plan": "membership-plan-growth",
    "the-insiders-guide-to-attracting-new-patients-with-your-membership-plan": "membership-plan-growth",
    "in-office-membership-plans-and-how-to-develop-yours-to-full-potential-with-jordo": "membership-plan-growth",
    "offer-your-in-office-membership-plan-to-small-businesses": "membership-plan-growth",
    "what-are-the-irs-guidelines-for-a-dental-membership-plan": "membership-plan-growth",
    "answering-your-questions-around-controlling-your-overhead": "overhead-profitability",
    "its-time-to-get-your-overhead-under-control": "overhead-profitability",
    "the-most-effective-way-to-lower-your-practice-overload": "overhead-profitability",
    "tips-to-control-your-biggest-expense-category": "overhead-profitability",
    "your-key-to-a-profitable-practice-are-these-five-expense-categories": "overhead-profitability",
    "the-goal-of-achieving-financial-independence-from-your-practice": "financial-independence",
    "are-you-busy-making-money-or-losing-money": "financial-independence",
    "successfully-resigning-from-ppo-plans-will-result-in-a-better-work-life-balance": "financial-independence",
    "4-tips-to-increase-your-production-every-single-day": "production-scheduling",
    "how-to-finish-every-day-above-goal": "production-scheduling",
    "top-3-practice-metrics": "production-scheduling",
    "10-kpis-that-define-a-thriving-profitable-dental-practice": "production-scheduling",
    "the-busyness-paradox": "production-scheduling",
    "4-tips-to-fill-hygiene-to-capacity": "hygiene-department",
    "5-tips-to-eliminate-hygiene-cancellations-and-no-shows": "hygiene-department",
    "is-hygiene-even-viable-with-ppo-fees": "hygiene-department",
    "the-hygiene-landmine-you-must-avoid": "hygiene-department",
    "at-the-end-of-the-morning-huddle": "morning-huddle-mastery",
    "first-2-of-the-24-systems-for-a-thriving-practice": "morning-huddle-mastery",
    "huddle-or-muddle": "morning-huddle-mastery",
    "6-habits-of-a-thriving-dentist": "dentist-mindset-success",
    "are-you-a-maverick": "dentist-mindset-success",
    "mindset-is-everything": "dentist-mindset-success",
    "the-power-of-creating-a-clear-vision-for-your-dental-practice": "dentist-mindset-success",
    "the-power-to-choose-your-response": "dentist-mindset-success",
    "the-mastery-ladder": "dentist-mindset-success",
    "stay-in-your-lane": "dentist-mindset-success",
    "staying-motivated-as-you-go-out-of-network": "dentist-mindset-success",
    "your-past-does-not-need-to-be-your-future": "dentist-mindset-success",
    "the-pivot-creating-new-chapters-in-life-work-and-the-thriving-dentist": "dentist-mindset-success",
    "5-strategies-thriving-dentists-are-using-to-come-back-stronger": "recession-strategies",
    "are-there-potential-new-patients-who-are-not-affected-by-a-soft-economy": "recession-strategies",
    "covid-19-opportunity-or-crisis": "recession-strategies",
    "embracing-change": "recession-strategies",
    "lessons-from-covid-19": "recession-strategies",
    "how-inflation-and-a-weak-economy-are-making-fee-for-service-an-appealing-option": "recession-strategies",
    "making-care-affordable-post-covid-19": "recession-strategies",
    "recession-proofing-your-dental-practice": "recession-strategies",
    "how-adding-high-value-services-makes-you-less-insurance-dependent": "high-value-services",
    "high-value-dentistry-series-cosmetic-dentistry": "high-value-services",
    "high-value-dentistry-series-oral-conscious-sedation": "high-value-services",
    "oral-conscious-sedation-as-a-strategy-to-reduce-insurance-dependence": "high-value-services",
    "how-to-determine-the-right-scope-of-your-practice": "high-value-services",
    "case-study-how-one-practice-added-250k-per-year-in-invisalign-cases": "high-value-services",
    "tips-to-add-same-day-dentistry": "high-value-services",
    "same-day-dentistry": "high-value-services",
    "does-it-make-sense-for-the-owner-dentist-to-be-a-fee-for-service-and-associate-d": "associate-ffs-strategy",
    "does-it-make-sense-to-offer-free-consultations": "associate-ffs-strategy",
    "does-it-work-for-me-as-an-owner-dentist-to-be-fee-for-service-but-for-my-associa": "associate-ffs-strategy",
    "a-great-way-to-help-your-patients-who-pay-for-their-own-dental-insurance": "patient-financing-membership",
    "the-24-systems-that-made-lifesmiles-a-thriving-practice": "practice-systems",
    "optimizing-systems-and-software-for-profitable-practice-with-dayna-johnson": "practice-systems",
    "how-to-develop-an-effective-blueprint-to-achieve-the-practice-results-you-deserv": "practice-systems",
    "how-to-create-accountability-in-my-practice": "practice-systems",
    "is-dentistry-a-profession-or-an-industry": "dental-industry-future",
    "what-does-it-really-mean-to-be-fee-for-service": "dental-industry-future",
    "what-is-a-top-1-practice-and-how-do-you-get-there": "dental-industry-future",
    "why-strategic-growth-is-so-powerful": "dental-industry-future",
    "the-dilemma-of-insurance-driven-patients": "dental-industry-future",
    "how-to-train-your-patients-to-keep-their-appointments": "patient-appointment-management",
    "how-thriving-dentists-are-using-the-virtual-consults": "patient-appointment-management",
    "leadership-7-habits-of-highly-effective-people": "leadership-personal-growth",
    "the-soft-skills-in-dentistry": "leadership-personal-growth",
    "are-you-a-victim-of-one-and-done-thinking": "leadership-personal-growth",
    "a-simple-tip-that-can-make-all-the-difference": "leadership-personal-growth",
    "an-old-school-tip-that-works-every-time": "leadership-personal-growth",
    "an-option-that-will-serve-you-and-your-patients": "leadership-personal-growth",
    "you-cant-give-from-an-empty-wagon": "leadership-personal-growth",
    "you-can-have-a-profitable-practice-and-serve-those-in-need": "leadership-personal-growth",
    "the-role-of-neurology-in-successfully-reducing-insurance-dependence": "leadership-personal-growth",
    "the-messy-middle": "leadership-personal-growth",
    "tips-to-build-rapport": "leadership-personal-growth",
    "is-it-possible-to-successfully-resign-from-ppo-plans-smaller-towns": "small-town-practices",
    "is-it-possible-to-negotiate-your-fee-schedule-with-dental-insurance-companies": "small-town-practices",
    "a-strategy-to-keep-more-of-your-existing-ppo-patients-when-you-resign": "patient-retention-oon",
    "a-useful-way-to-look-at-your-risk-when-resigning-from-ppo-plans": "patient-retention-oon",
    "using-demand-as-a-criteria-when-resigning-from-ppo-plans": "patient-retention-oon",
    "5-specific-things-we-learned-from-the-2022-rida-summit": "rida-event-highlights",
    "lessons-from-the-2023-rida-virtual-summit": "rida-event-highlights",
    "lessons-from-the-denver-co-study-club-presentation": "rida-event-highlights",
    "take-away-lessons-from-our-most-recent-virtual-event": "rida-event-highlights",
    "takeaways-that-you-can-use-from-the-rida-summit": "rida-event-highlights",
    "the-birth-of-the-less-insurance-dependence-podcast-7-years-ago-and-how-it-came-t": "rida-event-highlights",
    "3-simple-lessons-from-a-bootstrapped-entrepreneur-to-make-2023-your-best-year-ye": "rida-event-highlights",
    "what-percentage-of-patients-use-their-dental-insurance-benefits": "dental-insurance-education",
    "time-for-the-use-it-or-lose-it-message": "dental-insurance-education",
    "strategies-for-your-practice-when-it-comes-to-dental-insurance": "dental-insurance-education",
    "the-permission-statement": "dental-insurance-education",
    "first-things-first": "first-things-practice-growth",
    "5-less-expected-benefits-of-successfully-resigning-from-ppo-plans": "first-things-practice-growth",
    "4-tips-to-elevate-the-relationship-driven-element-of-your-practice": "first-things-practice-growth",
    "5-things-you-can-do-from-home-to-grow-your-practice": "first-things-practice-growth",
    "re-defining-success-creating-boundaries-and-thriving-beyond-insurance-dependenc": "first-things-practice-growth",
    "leveraging-the-moment": "first-things-practice-growth",
    "leveraging-the-moment-to-grow-your-ideal-practice": "first-things-practice-growth",
    "serve-patients-who-value-your-worth": "first-things-practice-growth",
    "airway-awareness-with-dr-bill-hang": "special-topics",
    "the-importance-of-treating-sleep-apnea": "special-topics",
    "the-importance-of-a-3-year-ce-plan": "special-topics",
    "dentistry-for-millennials": "special-topics",
    "frequently-asked-questions-from-the-ilove-dentistry-facebook-community": "special-topics",
    "50th-episode-special-celebrating-pankey-institutes-50th-anniversary-garys": "special-topics",
    "google-eat-update": "special-topics",
    "the-ppe-reimbursement-fiasco": "special-topics",
    "lessons-from-smile-direct-club-failure": "special-topics"
  };

  // Helper function to extract the slug from the current page URL
  function getCurrentSlug() {
    const pathname = window.location.pathname;
    // Extract slug from /blog/slug-name.html format
    const match = pathname.match(/\/blog\/(.+?)\.html$/);
    return match ? match[1] : null;
  }

  // Helper function to inject canonical link tag
  function injectCanonicalLink(newSlug) {
    // Remove existing canonical tag if present
    const existing = document.querySelector('link[rel="canonical"]');
    if (existing) {
      existing.remove();
    }

    // Create and inject new canonical link
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = '/blog/' + newSlug + '.html';
    document.head.appendChild(link);
  }

  // Show a temporary redirecting message
  function showRedirectingMessage() {
    const message = document.createElement('div');
    message.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(255, 255, 255, 0.95); display: flex; align-items: center; justify-content: center; z-index: 10000;';
    message.innerHTML = '<div style="text-align: center; font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Arial, sans-serif; color: #333;"><h2 style="margin: 0 0 10px 0; font-size: 24px;">Redirecting...</h2><p style="margin: 0; color: #666; font-size: 16px;">This article has been updated and moved.</p></div>';
    document.body.appendChild(message);
  }

  // Main redirect logic
  function performRedirect() {
    const currentSlug = getCurrentSlug();

    // Check if current page is in the redirect map
    if (currentSlug && REDIRECT_MAP.hasOwnProperty(currentSlug)) {
      const newSlug = REDIRECT_MAP[currentSlug];
      const newUrl = '/blog/' + newSlug + '.html';

      // Inject canonical link for SEO
      injectCanonicalLink(newSlug);

      // Show redirecting message
      showRedirectingMessage();

      // Perform redirect after a brief delay to allow rendering
      setTimeout(function() {
        window.location.replace(newUrl);
      }, 500);
    }
  }

  // Execute redirect when page is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', performRedirect);
  } else {
    performRedirect();
  }
})();
