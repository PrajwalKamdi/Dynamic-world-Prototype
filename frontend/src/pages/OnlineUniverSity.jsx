import React, { useEffect, useMemo, useState, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
const COLORS = {
  brand: "#3E96F4",
  text: "#31393C",
  chipBg: "#EDEEEB",
  white: "#FFFFFF",
};

const fallbackImg =
  "https://res.cloudinary.com/dtaitsw4r/image/upload/v1759919759/DynamicWorld-University-Fallback_tuk0no.webp";

const SkeletonCard = () => (
  <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden animate-pulse">
    <div className="h-36 w-full bg-slate-200" />
    <div className="p-4 space-y-2">
      <div className="h-4 w-2/3 bg-slate-200 rounded" />
      <div className="h-3 w-1/3 bg-slate-200 rounded" />
    </div>
  </div>
);

export default function OnlineUniverSity() {
  const API = import.meta.env.VITE_BACKEND_API; // e.g. https://api.dynamicworld.in
  const [isLoading, setIsLoading] = useState(true);
  const [universities, setUniversities] = useState([]);
  const [error, setError] = useState(null);
  const [q, setQ] = useState("");

  const fetchList = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Try your common list endpoints. Adjust to your real one:
      // 1) /regular-list       2) /onlineUniversitiesV2       3) /regular?list=true
      let res = await fetch(`${API}/onlineUniversitiesV2`);
      if (!res.ok) {
        // try fallbacks if the first fails
        const alt = await fetch(`${API}/onlineUniversitiesV2`);
        if (!alt.ok) throw new Error("Failed to fetch universities");
        res = alt;
      }
      const json = await res.json();
      const raw = json?.data || json || [];

      // Normalize a minimal shape:
      const cleaned = raw.map((u) => ({
        id: u._id || u.id || u.slug || u.universityName || u.name,
        slug:
          u.slug ||
          (u.name || u.universityName || "")
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, ""),
        name: u.universityName || "Unnamed University",
        location: u.location?.city
          ? `${u.location.city}, ${u.location.state ?? ""}`.trim()
          : u.location || u.city || "",
        image: u.image || u.logo || u.imageUrl || u.images?.[0] || fallbackImg,
      }));

      // If you only want to show exactly 39, you can slice:
      // setUniversities(cleaned.slice(0, 39));
      setUniversities(cleaned);
    } catch (err) {
      setError(err.message || "Something went wrong");
      setUniversities([]);
    } finally {
      setIsLoading(false);
    }
  }, [API]);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  const filtered = useMemo(() => {
    if (!q) return universities;
    const s = q.toLowerCase();
    return universities.filter(
      (u) =>
        u.name?.toLowerCase().includes(s) ||
        u.location?.toLowerCase().includes(s)
    );
  }, [universities, q]);

  return (
    <div className="min-h-screen bg-[#EDEEEB] text-[#31393C]">
      {/* Header */}
      <header className="bg-[#FFC067] text-black py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl md:text-3xl font-bold">Top Universities</h1>
          <p className="text-gray-900/90 mt-1">
            Browse all universities and open details in one click.
          </p>

          {/* Search */}
          <div className="mt-4">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by name or location..."
              className="w-full md:w-96 rounded-xl bg-white/95 text-[#31393C] px-4 py-2 outline-none ring-1 ring-white/40 focus:ring-2 focus:ring-white"
            />
          </div>
        </div>
      </header>

      {/* Grid */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6">
        {error ? (
          <div className="rounded-2xl bg-red-50 border border-red-200 p-4 text-red-700">
            {error}
          </div>
        ) : null}

        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((u) => (
              <NavLink
                key={u.id}
                to={`${u.slug}`}
                state={{ universityName: u.name }} // fallback for detail API
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition group"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <div className="aspect-[4/3] w-full  overflow-hidden">
                  <img
                    src={u.image || fallbackImg}
                    alt={u.name}
                    loading="lazy"
                    className="h-full w-full object-contain group-hover:scale-[1.02] transition"
                    onError={(e) => (e.currentTarget.src = fallbackImg)}
                  />
                </div>
                <div className="p-4 bg-slate-100">
                  <h2 className="text-xs lg:text-[15px] font-semibold line-clamp-1">
                    {u.name}
                  </h2>
                  {u.location ? (
                    <p className="text-xs text-slate-500 mt-0.5">
                      {u.location}
                    </p>
                  ) : null}
                </div>
              </NavLink>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
