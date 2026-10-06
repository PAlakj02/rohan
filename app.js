/* Rohan Manchanda portfolio. Simple hash router: #/, #/about, #/projects, #/projects/spindle ... */

const app = document.getElementById("app");
const P = SITE.person;
const SECTION_KEYS = ["research", "projects", "papers", "leadership"];

/* ---------- Icons ---------- */
const ICONS = {
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  chevron: '<path d="M6 9l6 6 6-6"/>',
  image: '<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-9 9"/>',
  flask: '<path d="M9 3h6M10 3v6L4.5 18.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-2.5L14 9V3"/><path d="M7 15h10"/>',
  robot: '<rect x="5" y="8" width="14" height="11" rx="3"/><path d="M12 4v4M9 13h.01M15 13h.01M9 16h6"/>',
  paper: '<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
  heart: '<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14 7 21l5-3 5 3-1.5-7"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m3 7 9 6 9-6"/>',
  pin: '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
  cap: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/>',
};
const icon = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;

const SECTION_ICON = { research: "flask", projects: "robot", papers: "paper", leadership: "heart" };
const TINTS = ["peach", "blue", "green", "lilac"];

/* Image or placeholder */
function img(src, label, cls = "") {
  if (src) return `<img class="media ${cls}" src="${src}" alt="${label}" loading="lazy">`;
  return `<div class="media ph ${cls}" role="img" aria-label="Image placeholder: ${label}">
      ${icon("image")}<span>${label}</span>
    </div>`;
}

const tags = (list = []) => `<div class="tags">${list.map((t) => `<span class="tag">${t}</span>`).join("")}</div>`;
const eyebrow = (text) => `<p class="eyebrow">${text}</p>`;

/* ---------- Navigation ---------- */
function buildNav() {
  const navItems = [
    { key: "about", label: "About" },
    ...SECTION_KEYS.map((k) => ({ key: k, label: SITE.sections[k].label, items: SITE.sections[k].items })),
    { key: "awards", label: "Awards" },
    { key: "skills", label: "Skills" },
    { key: "contact", label: "Contact" },
  ];

  document.getElementById("navList").innerHTML = navItems
    .map((n) => {
      if (!n.items) return `<li class="nav-item"><a class="nav-link" data-key="${n.key}" href="#/${n.key}">${n.label}</a></li>`;
      return `<li class="nav-item has-drop">
          <div class="nav-row">
            <a class="nav-link" data-key="${n.key}" href="#/${n.key}">${n.label}</a>
            <button class="drop-toggle" aria-label="Show ${n.label} menu" aria-expanded="false">${icon("chevron")}</button>
          </div>
          <div class="dropdown">
            <a class="drop-all" href="#/${n.key}">All ${n.label.toLowerCase()} ${icon("arrow")}</a>
            ${n.items
              .map(
                (it) => `<a class="drop-link" href="#/${n.key}/${it.slug}">
                  <span class="drop-title">${it.short}</span>
                  <span class="drop-meta">${it.role}</span>
                </a>`
              )
              .join("")}
          </div>
        </li>`;
    })
    .join("");

  // Dropdown toggles (tap on touch / mobile)
  document.querySelectorAll(".drop-toggle").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const item = btn.closest(".nav-item");
      const open = !item.classList.contains("open");
      document.querySelectorAll(".nav-item.open").forEach((i) => {
        i.classList.remove("open");
        i.querySelector(".drop-toggle").setAttribute("aria-expanded", "false");
      });
      item.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", String(open));
    });
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-item")) closeDrops();
  });

  // Mobile menu
  const toggle = document.getElementById("menuToggle");
  toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

function closeDrops() {
  document.querySelectorAll(".nav-item.open").forEach((i) => {
    i.classList.remove("open");
    i.querySelector(".drop-toggle").setAttribute("aria-expanded", "false");
  });
}

function setActive(key) {
  document.querySelectorAll(".nav-link").forEach((a) => a.classList.toggle("active", a.dataset.key === key));
}

/* ---------- Pages ---------- */
function pageHome() {
  return `
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-copy">
        ${eyebrow("Hello, I'm")}
        <h1 class="hero-title">${P.name}</h1>
        <h2 class="hero-sub">A student researcher building technology that keeps people safe.</h2>
        <p class="lead">I'm an IB Diploma student from Gurugram working where engineering, economics and social impact meet, from AI medical assistants and mine-rescue robots to research on India's markets.</p>
        <div class="btn-row">
          <a href="#/projects" class="btn btn-dark">View my work ${icon("arrow")}</a>
          <a href="#/about" class="btn btn-light">More about me</a>
        </div>
        <div class="hero-status"><span class="dot"></span> Currently piloting CarePal in hospitals across Delhi NCR & Kolkata</div>
      </div>
      <div class="hero-visual">
        <div class="hero-blob"></div>
        ${img(P.heroImage, "Portrait of Rohan", "hero-img")}
        <div class="float-card fc-top"><strong>Top 1%</strong><span>IB Grade 11</span></div>
        <div class="float-card fc-bottom"><strong>1560</strong><span>SAT score</span></div>
      </div>
    </div>
  </section>`;
}

function awardCard(a) {
  return `<div class="award-card">
      <span class="icon-badge">${icon("award")}</span>
      <div>
        <h3>${a.title}</h3>
        <p class="muted">${a.note}</p>
      </div>
      <span class="year">${a.year}</span>
    </div>`;
}

function pageAbout() {
  return `
  <section class="section page-top">
    <div class="container about-grid">
      <div class="about-photo">
        <div class="about-photo-back"></div>
        ${img(P.aboutImage, "Photo of Rohan", "about-img")}
      </div>
      <div>
        ${eyebrow("About me")}
        <h1 class="page-title">Curious about how things work, and who they work for.</h1>
        <p class="lead">I'm Rohan, an IB Diploma student at Heritage International Xperiential School in Gurugram, where I'm in the top 1% of my grade. I'm drawn to problems that sit between disciplines, where engineering, economics and people's everyday safety meet.</p>
        <p>Over the past few years that has meant building an AI medical assistant at MIT Media Lab, designing a patented mine-rescue robot, investigating safety at collieries in the Jharia coal belt, and publishing econometric research on India's exchange rates and stock markets.</p>
        <p>Outside research, I founded LokGharana to revive dying Indian musical instruments, advocate for coal workers and their families, and started my school's first basketball league.</p>
        <div class="btn-row">
          <a href="${P.resume}" class="btn btn-dark" download>${icon("download")} Download resume</a>
          <a href="#/contact" class="btn btn-light">Contact me</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">${eyebrow("Education")}<h2>Where I study</h2></div>
      <div class="grid-2">
        ${SITE.education
          .map(
            (e) => `<div class="card">
              <span class="icon-badge">${icon("cap")}</span>
              <p class="muted small">${e.date}</p>
              <h3>${e.school}</h3>
              <p class="program">${e.program}</p>
              <ul class="ticks">${e.details.map((d) => `<li>${d}</li>`).join("")}</ul>
            </div>`
          )
          .join("")}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">${eyebrow("Standardized testing")}<h2>My scores</h2></div>
      <div class="score-grid">
        ${SITE.scores
          .map((s) => `<div class="score"><strong>${s.n}</strong><span>${s.l}</span>${s.sub ? `<em>${s.sub}</em>` : ""}</div>`)
          .join("")}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container grid-2">
      <div class="card">
        <h3>Languages I speak</h3>
        <ul class="lang-list">
          ${SITE.languages.map((l) => `<li><span>${l.name}</span><span class="muted">${l.level}</span></li>`).join("")}
        </ul>
      </div>
      <div class="card">
        <h3>Coursework</h3>
        <ul class="ticks">${SITE.coursework.map((c) => `<li>${c}</li>`).join("")}</ul>
        <a href="#/skills" class="text-link">See my skills ${icon("arrow")}</a>
      </div>
    </div>
  </section>`;
}

/* Overview page with dropdown (accordion) boxes */
function pageSection(key) {
  const sec = SITE.sections[key];
  return `
  <section class="section page-top">
    <div class="container">
      <div class="section-head">
        ${eyebrow(sec.eyebrow)}
        <h1 class="page-title">${sec.heading}</h1>
        <p class="lead">${sec.intro}</p>
      </div>
      <div class="acc-list">
        ${sec.items
          .map(
            (it, i) => `<div class="acc ${i === 0 ? "open" : ""}">
              <button class="acc-head" aria-expanded="${i === 0}">
                <span class="icon-badge tint-${TINTS[i % 4]}">${icon(SECTION_ICON[key])}</span>
                <span class="acc-titles">
                  <span class="acc-title">${it.title}</span>
                  <span class="acc-meta">${it.role} · ${it.org} · ${it.date}</span>
                </span>
                <span class="acc-chev">${icon("chevron")}</span>
              </button>
              <div class="acc-body"><div class="acc-inner">
                ${img(it.cover, it.short, "acc-img")}
                <div>
                  <p>${it.summary}</p>
                  <ul class="ticks">${it.highlights.slice(0, 3).map((h) => `<li>${h}</li>`).join("")}</ul>
                  <a href="#/${key}/${it.slug}" class="btn btn-dark">Open full ${key === "papers" ? "paper" : "story"} ${icon("arrow")}</a>
                </div>
              </div></div>
            </div>`
          )
          .join("")}
      </div>
    </div>
  </section>`;
}

/* Detail page for a single project / paper / etc. */
function pageDetail(key, slug) {
  const sec = SITE.sections[key];
  const idx = sec.items.findIndex((i) => i.slug === slug);
  if (idx === -1) return pageSection(key);
  const it = sec.items[idx];
  const prev = sec.items[idx - 1];
  const next = sec.items[idx + 1];

  const facts = [
    ["Role", it.role],
    ["Organisation", it.org],
    ["Timeline", it.date],
  ];

  return `
  <section class="section page-top">
    <div class="container">
      <nav class="crumbs" aria-label="Breadcrumb">
        <a href="#/">Home</a><span>/</span><a href="#/${key}">${sec.label}</a><span>/</span><span>${it.short}</span>
      </nav>
      ${eyebrow(it.role)}
      <h1 class="page-title detail-title">${it.title}</h1>
      ${tags(it.tags)}
      ${img(it.cover, `${it.short}: cover image`, "detail-cover")}

      ${it.stats ? `<div class="stats-band compact">${it.stats.map((s) => `<div><strong>${s.n}</strong><span>${s.l}</span></div>`).join("")}</div>` : ""}

      <div class="detail-grid">
        <article class="prose">
          <h2>Overview</h2>
          ${it.body.map((p) => `<p>${p}</p>`).join("")}
          <h2>What I did</h2>
          <ul class="ticks">${it.highlights.map((h) => `<li>${h}</li>`).join("")}</ul>
        </article>
        <aside class="card facts">
          ${facts.map(([k, v]) => `<div class="fact"><span class="muted small">${k}</span><strong>${v}</strong></div>`).join("")}
          ${it.link ? `<a href="${it.link.href}" class="btn btn-dark" target="_blank" rel="noopener">${icon("link")} ${it.link.label}</a>` : ""}
          ${it.related ? `<a href="${it.related.href}" class="text-link">${it.related.label} ${icon("arrow")}</a>` : ""}
        </aside>
      </div>

      <h2 class="gallery-title">Gallery</h2>
      <div class="gallery">
        ${(it.gallery || []).map((src, i) => img(src, `${it.short}: image ${i + 1}`, "gallery-img")).join("")}
      </div>

      <div class="pager">
        ${prev ? `<a href="#/${key}/${prev.slug}" class="pager-link">${icon("back")}<span><em>Previous</em>${prev.short}</span></a>` : `<a href="#/${key}" class="pager-link">${icon("back")}<span><em>Back to</em>All ${sec.label.toLowerCase()}</span></a>`}
        ${next ? `<a href="#/${key}/${next.slug}" class="pager-link right"><span><em>Next</em>${next.short}</span>${icon("arrow")}</a>` : `<a href="#/${key}" class="pager-link right"><span><em>Back to</em>All ${sec.label.toLowerCase()}</span>${icon("arrow")}</a>`}
      </div>
    </div>
  </section>`;
}

function pageAwards() {
  return `
  <section class="section page-top">
    <div class="container">
      <div class="section-head">
        ${eyebrow("Honors & Awards")}
        <h1 class="page-title">Recognition I've received</h1>
        <p class="lead">Awards for my work in robotics, research, mathematics and social impact.</p>
      </div>
      <div class="grid-2">${SITE.awards.map(awardCard).join("")}</div>
    </div>
  </section>`;
}

function pageSkills() {
  return `
  <section class="section page-top">
    <div class="container">
      <div class="section-head">
        ${eyebrow("Skills")}
        <h1 class="page-title">Tools and methods I use</h1>
        <p class="lead">The languages, frameworks and quantitative methods behind my projects and research.</p>
      </div>
      <div class="grid-2">
        ${SITE.skills
          .map(
            (g, i) => `<div class="card tint-${TINTS[i % 4]}">
              <h3>${g.group}</h3>
              <div class="chips">${g.items.map((s) => `<span class="chip">${s}</span>`).join("")}</div>
            </div>`
          )
          .join("")}
      </div>
    </div>
  </section>`;
}

function pageContact() {
  return `
  <section class="section page-top">
    <div class="container">
      <div class="cta-band contact-band">
        <div>
          ${eyebrow("Let's work together")}
          <h1 class="page-title">Have an idea or an opportunity?</h1>
          <p>I'm always open to research collaborations, internships and conversations about building things that matter.</p>
        </div>
        <a href="mailto:${P.email}" class="btn btn-dark">${icon("mail")} Get in touch</a>
      </div>
      <div class="grid-3 contact-grid">
        <a class="card contact-card" href="mailto:${P.email}">
          <span class="icon-badge tint-peach">${icon("mail")}</span>
          <h3>Email</h3><p class="muted">${P.email}</p>
        </a>
        <a class="card contact-card" href="${P.linkedin}" target="_blank" rel="noopener">
          <span class="icon-badge tint-blue">${icon("link")}</span>
          <h3>LinkedIn</h3><p class="muted">Connect with me</p>
        </a>
        <div class="card contact-card">
          <span class="icon-badge tint-green">${icon("pin")}</span>
          <h3>Location</h3><p class="muted">${P.location}</p>
        </div>
      </div>
    </div>
  </section>`;
}

/* ---------- Router ---------- */
function render() {
  const [key = "", slug] = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  let html;
  if (SECTION_KEYS.includes(key)) html = slug ? pageDetail(key, slug) : pageSection(key);
  else if (key === "about") html = pageAbout();
  else if (key === "awards") html = pageAwards();
  else if (key === "skills") html = pageSkills();
  else if (key === "contact") html = pageContact();
  else html = pageHome();

  app.innerHTML = html;
  setActive(key);
  closeDrops();
  document.body.classList.remove("menu-open");
  document.getElementById("menuToggle").setAttribute("aria-expanded", "false");
  window.scrollTo(0, 0);

  const titles = { about: "About", awards: "Awards", skills: "Skills", contact: "Contact" };
  const secTitle = SECTION_KEYS.includes(key)
    ? (slug && SITE.sections[key].items.find((i) => i.slug === slug)?.short) || SITE.sections[key].label
    : titles[key];
  document.title = secTitle ? `${secTitle} | ${P.name}` : P.name;
}

/* Accordion boxes */
app.addEventListener("click", (e) => {
  const head = e.target.closest(".acc-head");
  if (!head) return;
  const acc = head.parentElement;
  const open = acc.classList.toggle("open");
  head.setAttribute("aria-expanded", String(open));
});

buildNav();
window.addEventListener("hashchange", render);
render();
