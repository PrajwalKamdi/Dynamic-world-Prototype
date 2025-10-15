import React from "react";
import { Mail, Clock, User } from "lucide-react";
import { NavLink } from "react-router-dom";

// --- Data ---
const collegeCategories = [
  { name: "Al-Falah University (RE)", slug: "al-falah-university" },
  { name: "AISECT University (DE)", slug: "aisect-university" },
  { name: "Aligarh Muslim University", slug: "aligarh-muslim-university" },
  { name: "Amity University", slug: "amity-university" },
  { name: "Andhra University", slug: "andhra-university" },
  {
    name: "Arham International Institute of Information Security (RE)",
    slug: "arham-institute",
  },
  { name: "Arni University (D Part 2)", slug: "arni-university" },
  {
    name: "Asian International University (D-Part2)",
    slug: "asian-international-university",
  },
  { name: "Bachelor of Vocation", slug: "bachelor-of-vocation" },
  { name: "Bharath University", slug: "bharath-university" },
];

const mockBlogPosts = [
  {
    category: "Online BBA",
    title: "What is Online Education?",
    author: "MAVIMEDIA",
    date: "August 22, 2024",
    description:
      "Online education has revolutionized the way we learn, breaking down traditional barriers and offering unprecedented access to knowledge from anywhere...",
    imageURL:
      "https://i0.wp.com/dynamicworld.in/wp-content/uploads/2024/08/What-is-Online-Education-by-Dynamic-World.webp?w=768&ssl=1",
    link: "#online-education-link",
  },
  {
    category: "MBA",
    title:
      "What is a 1-Year Executive MBA? Eligibility, Benefits, and Career Opportunities",
    author: "MAVIMEDIA",
    date: "January 10, 2024",
    description:
      "In the dynamic business world, continuous learning is vital for professional growth. For working individuals seeking career advancement and skill development...",
    imageURL:
      "https://i0.wp.com/dynamicworld.in/wp-content/uploads/2024/01/What-is-1-Year-Executive-MBA-By-Dynamic-World.webp?w=768&ssl=1",
    link: "#executive-mba-link",
  },
  {
    category: "Distance Learning",
    title: "5 Crucial Tips for Success in Distance Education Programs",
    author: "JANE DOE",
    date: "October 5, 2024",
    description:
      "Distance learning requires discipline and specific strategies to succeed. Learn how to manage your time and maintain motivation in your studies...",
    imageURL:
      "https://placehold.co/600x400/10b981/ffffff?text=DISTANCE+LEARNING+IMAGE",
    link: "#distance-learning-link",
  },
];

// --- Component ---
export default function Blogs() {
  const mailToLink =
    "mailto:hello@dynamicworld.in?subject=Inquiry about Learning Centre";

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* SECTION 1: HERO */}
      <section
        className="relative flex items-center justify-center min-h-[50vh] bg-cover bg-center px-6 py-12 sm:px-10 sm:py-16"
        style={{
          backgroundImage:
            "url('uploaded:image_81c4ee.jpg-77da435a-d5b6-4f25-a7b6-57b209ff2e06')",
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-blue-600/75 backdrop-blur-[1px]"
          aria-hidden="true"
        />
        <div className="relative z-10 w-full max-w-4xl text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Learning Centre
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light opacity-90 mb-8">
            Empower Yourself through Education and Skill Development
          </p>
          <a
            href={mailToLink}
            className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-xl shadow-lg transition
                       hover:bg-white/80 hover:text-slate-800 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <Mail className="h-5 w-5" />
            <span className="font-semibold">hello@dynamicworld.in</span>
          </a>
        </div>
      </section>

      {/* SECTION 2: STICKY CATEGORY NAV */}
      <div className="sticky top-0 z-30 bg-white shadow-lg border-b border-gray-100 py-4 sm:py-6">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <h2 className="inline-block text-lg font-bold text-gray-800 border-b-2 border-blue-500 pb-1">
                Top Categories
              </h2>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {collegeCategories.map((college) => (
                <a
                  key={college.slug}
                  href={`/colleges/${college.slug}`}
                  className="text-sm text-gray-600 font-medium whitespace-nowrap rounded-md px-1 py-0.5
                             hover:text-blue-600 hover:bg-gray-100 transition"
                >
                  {college.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: BLOG LIST */}
      <section className="mx-auto max-w-7xl px-6 sm:px-10 py-6 sm:py-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-2">
          Latest Insights
        </h2>

        <div className="flex flex-col gap-8">
          {mockBlogPosts.map((post) => (
            <article
              key={post.link}
              className="group flex flex-col md:flex-row bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden
                         transition hover:shadow-md"
            >
              {/* Image */}
              <div className="relative w-full min-h-[200px] md:w-2/5 md:min-h-[250px]">
                <img
                  src={post.imageURL}
                  alt={post.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://placehold.co/600x400/808080/ffffff?text=Image+Unavailable";
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex w-full md:w-3/5 flex-col justify-center p-6">
                <div className="mb-3">
                  <span className="inline-block bg-cyan-100 text-cyan-900 text-xs font-semibold uppercase px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 leading-snug mb-3">
                  {post.title}
                </h3>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="inline-flex items-center gap-1 font-medium">
                    <User className="h-4 w-4 text-gray-500" />
                    By {post.author}
                  </span>
                  <span className="mx-3 h-1 w-1 rounded-full bg-gray-300" />
                  <span className="inline-flex items-center gap-1 font-medium">
                    <Clock className="h-4 w-4 text-gray-500" />
                    {post.date}
                  </span>
                </div>

                <p className="text-gray-600 mb-6 text-base leading-relaxed line-clamp-3">
                  {post.description}
                </p>

                <NavLink
                 to={'onlineEducation/read-more'}
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white
                             w-[130px] transition hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  Read More <span className="ml-1 text-base">&rarr;</span>
                </NavLink>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
