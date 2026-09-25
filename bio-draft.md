# Bio Draft — for review before updating AboutContent.jsx:47

Source: `Ulor_Pascal_Resume_Updated.pdf`
Target: `src/Components/views/About/AboutContent.jsx`, the `details.line1/line2/line3` object passed to `<MySection>` (currently lines 48-59).

No code has been changed. Once you've picked/edited the wording below, tell me and I'll drop it into the JSX.

---

## line1 (personal/origin story — mostly unchanged from current bio)

I am Pascal Chukwuemeka Ulor, a Jesus lover, an adventurer, an Arsenal FC fan and a total geek. All my life I've had a flair for puzzles, and this urged me to major in Mathematics at the University of Ibadan, Nigeria. My passion for programming was ignited during my final year project, when I had to analyze data using Matlab and R — that's when I realized that to solve problems efficiently as a mathematician, I needed some coding skills.

## line2 (updated: 7+ years, FinTech roles, leadership arc)

As a backend-focused Full-Stack Software Engineer with over 7 years of experience, I've spent most of my career in the FinTech space — designing payment solutions, microservices, and APIs at companies like [Woven Finance](https://business.woven.finance/login), [Payrix](https://resource.payrix.com/), and Apace Inc. Along the way I've moved from hands-on engineering into leadership, serving as CTO, Founding Software Engineer, and Senior Backend Engineer, which has taught me to balance systems architecture, API design, and CI/CD with the people side of the job — mentoring engineers, building teams, and translating business goals into technical strategy.

## line3 (updated: current role)

Today, I'm the Head of Engineering at [Grey Invent](https://www.greyinvent.com/), where I lead the engineering team, define our technical strategy, and work cross-functionally with product, design, and business stakeholders to ship reliable, scalable systems.

---

## Notes / things to confirm before this goes in

- **Company links** (per your instructions):
  - Woven Finance → https://business.woven.finance/login (per your instruction)
  - Payrix → https://resource.payrix.com/ (per your instruction)
  - Grey Invent → https://www.greyinvent.com/ (confirmed by you)
  - **Apace Inc → left unlinked.** Still no confirmed URL — send it over if you have it and I'll add it.
- **Rendering note**: these are markdown links for this review doc only. The actual bio in `AboutContent.jsx` is plain template-literal strings, not JSX with `<a>` tags — so making the company names clickable there means restructuring `line2`/`line3` from plain strings into JSX fragments with `<a href>` elements (a small change to how `MySection`/`Bio` renders `details`). Let me know if you want that, or if plain text (no live links) is fine for the site itself.
- **Dropped**: the old line3's mention of mentoring students at Lighthouse Labs and being on a "decentralized team" — nothing in the resume backs this up anymore. Let me know if it's still true and you want it kept (in either line2 or line3).
- **"over 7 years"** comes directly from the resume's personal profile section. If your actual start date differs, adjust the number.
- Resume experience order used for line2/line3: Grey Invent (Head of Engineering, Apr 2026–Present; Sr. Backend Engineer, May 2025–Mar 2026) → Apace Inc. (Founding SWE, Feb 2024–May 2025) → Payrix (Sr. SWE, Apr 2022–Aug 2023) → Woven Finance (CTO, Aug 2020–Apr 2022). Earlier roles (Lingoowl, Remote Roofing, dotpay.io, Lambda School, Andela, Code Lagos) weren't referenced directly to keep the bio concise — say the word if you want any of them called out by name.
- Tone/length kept close to the original three-paragraph structure. Happy to make it punchier/shorter or more detailed if you want a different feel.
