import { User } from "lucide-react";
import { NavLink } from "react-router-dom";
import DemoPages from "../components/Test";

const mockBlogPosts = [
  {
    category: "Online Education",
    title: "What is Online Education?",
    author: "MAVIMEDIA",
    date: "August 22, 2024",
    description:
      "Online education has revolutionized the way we learn, breaking down traditional barriers and offering unprecedented access to knowledge from anywhere...",
    imageURL:
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760794119/onlineEdu_dgaiwz.webp",
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
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760794114/mba_sppbxn.webp",
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
      "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760794126/distance_learning_q5pdzb.jpg",
    link: "#distance-learning-link",
  },
];

export default function Blogs() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <DemoPages />
      <section className="mx-auto max-w-7xl px-6 sm:px-10 py-6 sm:py-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-2">
          Latest Insights
        </h2>

        <div className="flex flex-col gap-8">
          <article
            key={mockBlogPosts[0].link}
            className="group flex flex-col md:flex-row bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden
                         transition hover:shadow-md"
          >
            <div className="relative w-full min-h-[200px] md:w-2/5 md:min-h-[250px]">
              <img
                src={mockBlogPosts[0].imageURL}
                alt={mockBlogPosts[0].title}
              />
            </div>

            {/* Content */}
            <div className="flex w-full md:w-3/5 flex-col justify-center p-6">
              <div className="mb-3">
                <span className="inline-block bg-cyan-100 text-cyan-900 text-xs font-semibold uppercase px-2 py-1 rounded">
                  {mockBlogPosts[0].category}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 leading-snug mb-3">
                {mockBlogPosts[0].title}
              </h3>

              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span className="inline-flex items-center gap-1 font-medium">
                  <User className="h-4 w-4 text-gray-500" />
                  By {mockBlogPosts[0].author}
                </span>
                <span className="mx-3 h-1 w-1 rounded-full bg-gray-300" />
                {/* <span className="inline-flex items-center gap-1 font-medium">
                    <Clock className="h-4 w-4 text-gray-500" />
                    {post.date}
                  </span> */}
              </div>

              <p className="text-gray-600 mb-6 text-base leading-relaxed line-clamp-3">
                {mockBlogPosts[0].description}
              </p>

              <NavLink
                to="/blogs/online-education"
                onClick={() => window.scrollTo(0, 0)} // use arrow function + scrollTo
                className="inline-flex items-center justify-center rounded-md bg-[#FFC067] text-black px-3 py-2 text-sm font-semibold text-black
             w-[130px] transition hover:bg-[#FFC067] text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Read More <span className="ml-1 text-base">&rarr;</span>
              </NavLink>
            </div>
          </article>
           <article
            key={mockBlogPosts[1].link}
            className="group flex flex-col md:flex-row bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden
                         transition hover:shadow-md"
          >
            <div className="relative w-full min-h-[200px] md:w-2/5 md:min-h-[250px]">
              <img
                src={mockBlogPosts[1].imageURL}
                alt={mockBlogPosts[1].title}
              />
            </div>

            {/* Content */}
            <div className="flex w-full md:w-3/5 flex-col justify-center p-6">
              <div className="mb-3">
                <span className="inline-block bg-cyan-100 text-cyan-900 text-xs font-semibold uppercase px-2 py-1 rounded">
                  {mockBlogPosts[1].category}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 leading-snug mb-3">
                {mockBlogPosts[1].title}
              </h3>

              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span className="inline-flex items-center gap-1 font-medium">
                  <User className="h-4 w-4 text-gray-500" />
                  By {mockBlogPosts[1].author}
                </span>
                <span className="mx-3 h-1 w-1 rounded-full bg-gray-300" />
                {/* <span className="inline-flex items-center gap-1 font-medium">
                    <Clock className="h-4 w-4 text-gray-500" />
                    {post.date}
                  </span> */}
              </div>

              <p className="text-gray-600 mb-6 text-base leading-relaxed line-clamp-3">
                {mockBlogPosts[1].description}
              </p>

              <NavLink
                to="/blogs/one-year-executive-mba"
                onClick={() => window.scrollTo(0, 0)} // use arrow function + scrollTo
                className="inline-flex items-center justify-center rounded-md bg-[#FFC067] text-black px-3 py-2 text-sm font-semibold text-black
             w-[130px] transition hover:bg-[#FFC067] text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Read More <span className="ml-1 text-base">&rarr;</span>
              </NavLink>
            </div>
          </article>
           <article
            key={mockBlogPosts[2].link}
            className="group flex flex-col md:flex-row bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden
                         transition hover:shadow-md"
          >
            <div className="relative w-full min-h-[200px] md:w-2/5 md:min-h-[250px]">
              <img
                src={mockBlogPosts[2].imageURL}
                alt={mockBlogPosts[2].title}
              />
            </div>

            {/* Content */}
            <div className="flex w-full md:w-3/5 flex-col justify-center p-6">
              <div className="mb-3">
                <span className="inline-block bg-cyan-100 text-cyan-900 text-xs font-semibold uppercase px-2 py-1 rounded">
                  {mockBlogPosts[2].category}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 leading-snug mb-3">
                {mockBlogPosts[2].title}
              </h3>

              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span className="inline-flex items-center gap-1 font-medium">
                  <User className="h-4 w-4 text-gray-500" />
                  By {mockBlogPosts[2].author}
                </span>
                <span className="mx-3 h-1 w-1 rounded-full bg-gray-300" />
                {/* <span className="inline-flex items-center gap-1 font-medium">
                    <Clock className="h-4 w-4 text-gray-500" />
                    {post.date}
                  </span> */}
              </div>

              <p className="text-gray-600 mb-6 text-base leading-relaxed line-clamp-3">
                {mockBlogPosts[2].description}
              </p>

              <NavLink
                to="distance-learning"
                onClick={() => window.scrollTo(0, 0)} // use arrow function + scrollTo
                className="inline-flex items-center justify-center rounded-md bg-[#FFC067] text-black px-3 py-2 text-sm font-semibold text-black
             w-[130px] transition hover:bg-[#FFC067] text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Read More <span className="ml-1 text-base">&rarr;</span>
              </NavLink>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
