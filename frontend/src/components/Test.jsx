import { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";

/********************* Shared UI Primitives ************************/
const SectionHeader = ({ title, subtitle, chip }) => (
  <div className="bg-[#FFC067] text-black">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6">
      <div className="flex items-center gap-3">
        {/* {chip && (
          <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-[#31393C] shadow-sm">
            {chip}
          </span>
        )} */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-1 text-sm sm:text-[15px] text-gray-900/90">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  </div>
);

const Chip = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-[#EDEEEB] px-3 py-1 text-xs font-medium text-[#31393C]">
    {children}
  </span>
);
const handleBtn = () => {
  window.scrollTo(0, 0);
};
const Button = ({
  children,
  href = "#",
  variant = "primary",
  className = "",
}) => {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles = {
    primary:
      "bg-[#FFC067] text-black hover:brightness-110 focus:ring-[#3E96F4]",
    outline:
      "border border-[#3E96F4] text-[#3E96F4] hover:bg-[#FFC067]/10 focus:ring-[#3E96F4]",
    subtle:
      "bg-[#EDEEEB] text-[#31393C] hover:bg-[#CCC7BF]/60 focus:ring-[#3E96F4]",
  };
  return (
    <NavLink
      onClick={handleBtn}
      to={href}
      className={[base, styles[variant], className].join(" ")}
    >
      {children}
    </NavLink>
  );
};

/********************* BLOG: Cards & Widgets ************************/
const BlogCard = ({ post }) => (
  <article className="rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm overflow-hidden hover:shadow-md transition">
    <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
      {post.image ? (
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="h-full w-full grid place-items-center text-gray-400">
          No Image
        </div>
      )}
    </div>
    <div className="p-4 sm:p-5">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        {post.tags?.map((t, idx) => (
          <Chip key={idx}>{t}</Chip>
        ))}
      </div>
      <h3 className="text-lg font-semibold text-[#31393C] line-clamp-2">
        {post.title}
      </h3>
      <p className="mt-2 text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>
      <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
        <span>{post.author}</span>
      </div>
      <div className="mt-4">
        {/* <Button href={post.href} variant="outline">
          Read more
        </Button> */}
        <NavLink
          to={post.href}
          onClick={handleBtn}
          className="p-2 rounded-2xl bg-[#FFC067]/10 inline-block text-sm font-medium text-blue-700 hover:bg-[#FFC067]/20"
        >
          Read article
        </NavLink>
      </div>
    </div>
  </article>
);

const BlogSidebar = () => (
  <aside className="space-y-6">
    <div className="rounded-2xl bg-white p-4 ring-1 ring-gray-200 shadow-sm">
      <h4 className="text-sm font-semibold text-[#31393C]">Popular Tags</h4>
      <div className="mt-3 flex flex-wrap gap-2">
        {[
          "Study Abroad",
          "Career Tips",
          "BVOC",
          "Admissions",
          "Exams",
          "Online Learning",
        ].map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
    </div>

    <div className="rounded-2xl bg-white p-5 ring-1 ring-gray-200 shadow-sm">
      <h4 className="text-sm font-semibold text-[#31393C]">
        Need Personalised Guidance?
      </h4>
      <p className="mt-2 text-sm text-gray-600">
        Talk to our counsellors to shortlist courses & universities.
      </p>
      <div className="mt-4 flex gap-2">
        <Button href="tel:+917887881060" variant="primary">
          Book Free Call
        </Button>
        <Button href="https://wa.me/917887881060" variant="outline">
          Video Counselling
        </Button>
      </div>
    </div>

    <div className="rounded-2xl bg-white p-5 ring-1 ring-gray-200 shadow-sm">
      <h4 className="text-sm font-semibold text-[#31393C]">Newsletter</h4>
      <p className="mt-2 text-sm text-gray-600">
        Get weekly insights on admissions, exams, and careers.
      </p>
      <div className="mt-3 flex gap-2">
        <input
          type="email"
          placeholder="you@example.com"
          className="flex-1 rounded-xl border border-gray-300 px-3 py-2 text-sm focus:border-[#3E96F4] focus:ring-[#3E96F4]"
        />
        <Button variant="primary">Subscribe</Button>
      </div>
    </div>
  </aside>
);

/********************* RESOURCES: Cards ************************/
const ResourceCard = ({ item }) => (
  <div className="rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm p-5 hover:shadow-md transition">
    <div className="flex items-start gap-4">
      <div className="grid place-items-center h-12 w-12 shrink-0 rounded-xl bg-[#EDEEEB] text-[#31393C] text-lg font-bold">
        {item.icon || "📄"}
      </div>
      <div className="min-w-0">
        <h3 className="text-base sm:text-lg font-semibold text-[#31393C] line-clamp-2">
          {item.title}
        </h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-3">{item.blurb}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags?.map((t, i) => (
            <Chip key={i}>{t}</Chip>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2">
          {item.primaryCta && (
            <Button href={item.primaryCta.href} variant="primary">
              {item.primaryCta.label}
            </Button>
          )}
          {item.secondaryCta && (
            <Button href={item.secondaryCta.href} variant="outline">
              {item.secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </div>
  </div>
);

const demoPosts = [
  {
    title: `BVOC vs MVOC: Which is Right for You in ${new Date().getFullYear()} `,
    excerpt:
      "Understand course structures, career outcomes, and fees to make a smarter decision.",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760792466/bvoc_vs_mvoc_cz75ds.avif",
    author: "Dynamic World Team",

    readTime: 6,
    tags: ["Career Tips", "BVOC", "MVOC"],
    href: "bvocVsdvoc",
  },
  {
    title: "Top 5 Affordable Countries for MBBS Abroad (2025)",
    excerpt:
      "A comparison of tuition fees, living costs, and visa rules for budget-friendly options.",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760792609/mbbs_rjjjk8.jpg",
    author: "Dynamic World Team",

    tags: ["Study Abroad", "MBBS", "Guides"],
    href: "affordable-countries",
  },
  {
    title: "Online MBA vs Distance MBA: What’s Better?",
    excerpt: "UGC approvals, flexibility, pedagogy, and ROI compared in depth.",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760792492/MBA_VS_Distance_tdzl1n.avif",
    author: "Dynamic World Team",

    tags: ["Online Learning", "MBA"],
    href: "online-mba-vs-distance-mba",
  },
  {
    title: "Exam Toolkit: NEET, JEE, NATA, CET – 90-Day Plan",
    excerpt:
      "Week-by-week planner with tips and resources to maximise your score.",
    image:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760792481/exams_byubnr.avif",
    author: "Dynamic World Team",

    tags: ["Exams", "Admissions"],
    href: "exam-toolkit-90-day-plan",
  },
];

const resourceBlocks = {
  guides: [
    {
      icon: "📘",
      title: "Study Abroad Handbook",
      blurb:
        "Step-by-step checklist for applications, visas, and scholarships.",
      tags: ["Study Abroad", "Checklist"],
      primaryCta: { label: "Download PDF", href: "#" },
      secondaryCta: { label: "View Online", href: "#" },
    },
    {
      icon: "🏛️",
      title: "Top 10 Indian Universities for BVOC",
      blurb: "Curated list with key highlights, fees, and placement stats.",
      tags: ["BVOC", "India"],
      primaryCta: { label: "View", href: "bvoc-universities" },
    },
    {
      icon: "🎓",
      title: "Scholarship Guide for International Students",
      blurb: "Where and how to find scholarships + sample SOP templates.",
      tags: ["Scholarships", "SOP"],
      primaryCta: { label: "Download", href: "#" },
    },
  ],

  brochures: [
    {
      icon: "📎",
      title: "University Brochures (PDF)",
      blurb: "Official PDFs with rankings, accreditations, and course lists.",
      tags: ["Brochures"],
      primaryCta: { label: "Browse", href: "#" },
    },
  ],
  roadmaps: [
    {
      icon: "🧭",
      title: "Career Tree: 12th Science (PCB / PCM)",
      blurb: "Visual flow of NEET/JEE/NATA/CET paths and related careers.",
      tags: ["Roadmaps"],
      primaryCta: { label: "View", href: "career-tree" },
    },
  ],
};

/********************* BLOG PAGE ************************/
export function BlogPage({ posts = demoPosts }) {
  const [selectedTag, setSelectedTag] = useState("All");
  const allTags = useMemo(
    () => ["All", ...Array.from(new Set(posts.flatMap((p) => p.tags || [])))],
    [posts]
  );
  const filtered = useMemo(
    () =>
      selectedTag === "All"
        ? posts
        : posts.filter((p) => p.tags?.includes(selectedTag)),
    [posts, selectedTag]
  );

  return (
    <div className="min-h-screen w-full bg-white text-[#31393C]">
      <SectionHeader
        chip="Blog"
        title="Dynamic World Blog"
        subtitle="Expert insights, university news, and career guidance."
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-8">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={[
                "rounded-full px-3 py-1 text-xs font-medium",
                selectedTag === tag
                  ? "bg-[#FFC067] text-black"
                  : "bg-[#EDEEEB] text-[#31393C] hover:bg-[#CCC7BF]/70",
              ].join(" ")}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-6">
            {/* Featured (top 1) */}
            {filtered[0] && (
              <div className="rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-sm bg-white">
                <div className="aspect-[16/7] w-full bg-gray-100">
                  <img
                    src={filtered[0].image}
                    alt={filtered[0].title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {filtered[0].tags?.map((t, i) => (
                      <Chip key={i}>{t}</Chip>
                    ))}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold">
                    {filtered[0].title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                    {filtered[0].excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
                    <span>{filtered[0].author}</span>
                    <span>•</span>
                  </div>
                  <div className="mt-4 p-2 rounded-2xl bg-[#FFC067]/10 inline-block text-sm font-medium text-blue-700 hover:bg-[#FFC067]/20">
                    <NavLink to={filtered[0].href}>Read article</NavLink>
                  </div>
                </div>
              </div>
            )}

            {/* Grid of remaining posts */}
            <div className="grid sm:grid-cols-2 gap-6">
              {filtered.slice(1).map((post, idx) => (
                <BlogCard key={idx} post={post} />
              ))}
            </div>
          </div>

          {/* Right rail */}
          <div className="lg:col-span-4 lg:sticky lg:top-6 self-start">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

/********************* RESOURCES PAGE ************************/
export function ResourcesPage({ data = resourceBlocks }) {
  return (
    <div className="min-h-screen w-full bg-white text-[#31393C]">
      <SectionHeader
        chip="Resources"
        title="Resources & Student Tools"
        subtitle="Everything you need to make informed decisions about your education."
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-8 space-y-8">
        {/* Quick Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {["Guides", "Brochures", "Roadmaps", "Counselling"].map((t) => (
            <div
              key={t}
              className="rounded-2xl bg-[#EDEEEB] text-[#31393C] px-4 py-3 text-center text-sm font-medium hover:bg-[#CCC7BF]/70 transition"
            >
              {t}
            </div>
          ))}
        </div>

        {/* Guides & E-Books */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Guides & E‑Books</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.guides.map((g, i) => (
              <ResourceCard key={i} item={g} />
            ))}
          </div>
        </section>

        {/* Brochures */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">University Brochures</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.brochures.map((g, i) => (
              <ResourceCard key={i} item={g} />
            ))}
          </div>
        </section>

        {/* Roadmaps */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Career Roadmaps</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.roadmaps.map((g, i) => (
              <ResourceCard key={i} item={g} />
            ))}
          </div>
        </section>

        {/* Webinars */}

        {/* CTA Strip */}
        <div className="rounded-2xl bg-[#FFC067] text-black p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold">
              Confused about which course fits you best?
            </h3>
            <p className="text-gray-900/90 text-sm mt-1">
              Talk to a counsellor and get a personalised shortlist today.
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="subtle"
              href="https://wa.me/917887881060"
              className="bg-white text-[#31393C] hover:brightness-95"
            >
              Get Free Counselling
            </Button>
            <Button
              variant="outline"
              href="#calendly"
              className="bg-transparent text-white border-white"
            >
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

/********************* DEMO EXPORT ************************/
export default function DemoPages() {
  return (
    <div className="space-y-16">
      <BlogPage />
      <ResourcesPage />
    </div>
  );
}
