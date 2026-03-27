import { useEffect } from "react";
import {
  aboutParagraphs,
  experience,
  hobbies,
  otherProjects,
  profile,
  proofItems,
  proofRibbon,
  projects,
  researchItems,
  values,
  ventures,
  type LinkItem,
  type ExperienceItem,
  type LegacyProjectItem,
  type ProjectItem,
  type ProofItem,
  type ResearchItem,
  type ThemePillar,
  type VentureItem,
} from "./data/portfolio";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Ventures", href: "#ventures" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Other Projects", href: "#other-projects" },
  { label: "Research", href: "#research" },
  { label: "Proof", href: "#proof" },
  { label: "Values", href: "#values" },
  { label: "Contact", href: "#contact" },
];

const kindLabels: Record<ProofItem["kind"], string> = {
  article: "Press",
  blog: "Writing",
  video: "Video",
  award: "Recognition",
  patent: "Patent",
  post: "LinkedIn",
};

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((node) => {
        node.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="brand-lockup">
          <span className="brand-mark" aria-hidden="true">
            MR
          </span>
          <div>
            <p className="brand-name">{profile.name}</p>
            <p className="brand-subtitle">{profile.title}</p>
          </div>
        </div>

        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="main">
        <section id="about" className="section section-grid about-intro">
          <div className="about-left-column" data-reveal>
            <div className="portrait-card about-portrait-card">
              <div className="card-media portrait-media">
                <img src={profile.profileImage} alt={`${profile.name} portrait`} />
              </div>
              <p className="portrait-caption">Santa Clara, California</p>
              <div className="portrait-actions">
                <div className="portrait-links">
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a href={`mailto:${profile.email}`}>Email</a>
                </div>
                <a className="button button-secondary portrait-resume-button" href={profile.resume} target="_blank" rel="noreferrer">
                  Open resume
                </a>
              </div>
            </div>
            <div className="mini-card about-mini-card">
              <p className="mini-card-label">Off screen</p>
              <ul>
                {hobbies.map((hobby) => (
                  <li key={hobby}>{hobby}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="section-copy about-copy" data-reveal>
            <p className="eyebrow">About</p>
            <h1>Hey there, I&apos;m {profile.name}</h1>
            <p className="hero-summary">{profile.heroSummary}</p>
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="about-tags" aria-label="Highlights">
              {proofRibbon.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="ventures" className="section">
          <div className="section-copy ventures-copy" data-reveal>
            <p className="eyebrow">What I am building</p>
            <h2>I like building AI that can hold up inside real work, not just a polished demo.</h2>
            <p>
              The problems I gravitate toward usually look messy at first: scattered context, unclear ownership, too
              many manual steps, and important decisions trapped in someone&apos;s head. That is usually a good sign
              there is a product worth building.
            </p>
            <p>
              I keep coming back to agentic systems, retrieval, graphs, and human-in-the-loop workflows because they
              let intelligence become operational. The interesting part is rarely the model by itself. It is the system
              around it, the handoff into action, and whether people would actually trust it enough to use it.
            </p>
            <p className="quote-line">I like turning chaotic workflows into products that feel crisp, useful, and hard to replace.</p>
          </div>

          <div className="venture-stack venture-stack-row">
            {ventures.map((venture, index) => (
              <VentureCard key={venture.name} venture={venture} index={index} />
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <SectionHeading
            eyebrow="Experience"
            title="Operating experience in production AI and autonomous systems."
            description="The startup work is one side of the story. This is the systems-and-infrastructure side that shaped how I think about reliability, debugging, and performance under real constraints."
          />

          <div className="experience-grid">
            {experience.map((item) => (
              <ExperienceCard key={`${item.company}-${item.role}`} item={item} />
            ))}
          </div>
        </section>

        <section id="work" className="section">
          <SectionHeading
            eyebrow="Selected work"
            title="A few projects that show how I think, not just what I can code."
            description="These are the builds I would use to explain my taste in problems, systems, and product tradeoffs."
          />

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="other-projects" className="section">
          <SectionHeading
            eyebrow="Other projects"
            title="The earlier builds that shaped how I work."
            description="From computer vision to recommendation systems to classic ML apps, these projects built the foundation behind the more recent founder-led work."
          />

          <div className="legacy-grid">
            {otherProjects.map((project) => (
              <LegacyProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="research" className="section">
          <SectionHeading
            eyebrow="Research and publications"
            title="Research depth and academic grounding."
            description="Work that shaped how I think about rigor, experimentation, and technical systems beyond product demos."
          />

          <div className="research-grid">
            {researchItems.map((item) => (
              <ResearchCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section id="proof" className="section">
          <SectionHeading
            eyebrow="Writing and recognition"
            title="The proof layer."
            description="Talks, write-ups, project pages, coverage, and public traces of the work."
          />

          <div className="proof-grid">
            {proofItems.map((item) => (
              <ProofCard key={item.label} item={item} />
            ))}
          </div>
        </section>

        <section id="values" className="section">
          <SectionHeading
            eyebrow="What I care about"
            title="I like AI when it earns its place inside real work."
            description="The through-lines behind the kinds of problems I keep choosing."
          />

          <div className="pillars-grid">
            {values.map((pillar) => (
              <ValueCard key={pillar.title} pillar={pillar} />
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <div className="footer-copy" data-reveal>
          <p className="eyebrow">Contact</p>
          <h2>Building something ambitious in AI with real workflow constraints?</h2>
          <p>
            I like conversations about products that need both technical rigor and shipping instinct. If that sounds
            like your lane, let&apos;s talk.
          </p>
        </div>

        <div className="footer-actions" data-reveal>
          <a className="button button-primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="contact-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
          <p className="footer-location">
            {profile.name} - {profile.location}
          </p>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading(props: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="section-heading" data-reveal>
      <p className="eyebrow">{props.eyebrow}</p>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

function VentureCard({ venture, index }: { venture: VentureItem; index: number }) {
  return (
    <article className={`venture-card ${index === 0 ? "venture-card-emphasis" : ""}`} data-reveal>
      {venture.image ? (
        <div className="card-media venture-media">
          <img
            src={venture.image}
            alt={venture.imageAlt ?? venture.name}
            style={venture.imagePosition ? { objectPosition: venture.imagePosition } : undefined}
          />
        </div>
      ) : null}
      <div className="card-topline">
        <span>{venture.role}</span>
        <span>{venture.name}</span>
      </div>
      <h3>{venture.headline}</h3>
      <p>{venture.summary}</p>
      <ul className="tag-row">
        {venture.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="link-row">
        {venture.links.map((link) => (
          <ExternalLink key={link.url} link={link} />
        ))}
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className={`project-card ${project.featured ? "project-card-featured" : ""}`} data-reveal>
      {project.image ? (
        <div className="card-media project-media">
          <img src={project.image} alt={project.imageAlt ?? project.title} />
        </div>
      ) : null}
      <p className="project-hook">{project.hook}</p>
      <div className="project-title-row">
        <div>
          <h3>{project.title}</h3>
          <p className="project-role">{project.role}</p>
        </div>
        <span className="project-highlight">{project.highlight}</span>
      </div>
      <p className="project-summary">{project.summary}</p>
      <ul className="tag-row">
        {project.tech.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="link-row">
        {project.links.map((link) => (
          <ExternalLink key={link.url} link={link} />
        ))}
      </div>
    </article>
  );
}

function ProofCard({ item }: { item: ProofItem }) {
  return (
    <a className="proof-card" data-reveal href={item.url} target="_blank" rel="noreferrer">
      <span className="proof-kind">{kindLabels[item.kind]}</span>
      <h3>{item.label}</h3>
      <p>{item.source}</p>
    </a>
  );
}

function ValueCard({ pillar }: { pillar: ThemePillar }) {
  return (
    <article className="value-card" data-reveal>
      <h3>{pillar.title}</h3>
      <p>{pillar.description}</p>
    </article>
  );
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <article className="experience-card" data-reveal>
      <div className="card-topline">
        <span>{item.role}</span>
        <span>{item.location}</span>
      </div>
      <h3>{item.company}</h3>
      <p>{item.summary}</p>
      <ul className="experience-list">
        {item.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <ul className="tag-row">
        {item.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}

function LegacyProjectCard({ project }: { project: LegacyProjectItem }) {
  return (
    <article className="legacy-card" data-reveal>
      <div className="card-media legacy-media">
        <img src={project.image} alt={project.imageAlt} />
      </div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <a href={project.url} target="_blank" rel="noreferrer">
        View project {"->"}
      </a>
    </article>
  );
}

function ResearchCard({ item }: { item: ResearchItem }) {
  return (
    <article className="research-card" data-reveal>
      <div className="card-media research-media">
        <img src={item.image} alt={item.imageAlt} />
      </div>
      <span className="proof-kind">{item.label}</span>
      <h3>{item.title}</h3>
      <p className="research-context">{item.context}</p>
      <p>{item.description}</p>
      <a href={item.url} target="_blank" rel="noreferrer">
        Read more {"->"}
      </a>
    </article>
  );
}

function ExternalLink({ link }: { link: LinkItem }) {
  return (
    <a href={link.url} target="_blank" rel="noreferrer">
      {link.label}
    </a>
  );
}

export default App;
