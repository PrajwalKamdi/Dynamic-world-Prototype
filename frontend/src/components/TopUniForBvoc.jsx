import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

const TopUniForBvoc = () => {
  const api = import.meta.env.VITE_BACKEND_API;
  const [bvoc, setBvoc] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleApi = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${api}/bvoc-programs`);
      setBvoc(data?.data || []);
    } catch (error) {
      // It's good practice to log the error for debugging
      console.error("Something went wrong while fetching B.Voc programs:", error); 
      setBvoc([]);
    } finally {
      setLoading(false);
    }
  }, [api]);

  useEffect(() => {
    handleApi();
  }, [handleApi]);

  return (
    <section className="w-full bg-[#EDEEEB] text-[#31393C] py-8">
      {/* Header */}
      <header className="bg-[#FFC067] text-black text-xl lg:text-3xl font-semibold px-6 lg:px-10 py-6 rounded-b-2xl shadow-sm">
        Top Indian Universities for B.Voc
      </header>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 mt-6">
        {/* Loading skeleton (optional) */}
        {loading && (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={`skeleton-${i}`}
                className="animate-pulse flex items-center justify-between gap-4 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-4 sm:p-6"
              >
                <div className="flex items-center gap-4 w-full">
                  <div className="h-20 w-20 rounded-xl bg-gray-100 ring-1 ring-gray-200" />
                  <div className="flex-1 space-y-2">
                    <div className="h-5 w-56 bg-gray-100 rounded" />
                    <div className="h-4 w-80 bg-gray-100 rounded" />
                  </div>
                </div>
                <div className="h-9 w-32 bg-gray-100 rounded-lg" />
              </div>
            ))}
          </div>
        )}

        {/* University List */}
        {!loading && (
          <div className="space-y-4">
            {bvoc.map((item, index) => {
              const title = item?.universityName || item?.name || "University";
              const logo =
                Array.isArray(item?.images) && item.images.length > 0
                  ? item.images[0]
                  : null;
              const site = item?.website || null;
              const acc = Array.isArray(item?.accreditation)
                ? item.accreditation
                : [];

              return (
                <div
                  key={item?._id || item?.slug || `uni-${index}`}
                  className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-all duration-300 p-4 sm:p-6 text-xs"
                >
                  {/* Left: Image + Name + Accreditation */}
                  <div className="flex flex-col lg:flex-row items-center gap-4 w-full sm:w-auto">
                    {/* Logo */}
                    {logo ? (
                      <img
                        src={logo}
                        alt={title}
                        className="h-16  sm:h-20 sm:w-48 object-contain bg-white rounded-xl ring-1 ring-gray-200 p-2"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl bg-gray-100 ring-1 ring-gray-200" />
                    )}

                    {/* Name + Accreditation */}
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold text-[#31393C]">
                        {title}
                      </h3>

                      {/* Accreditation (optional; remove this block if you truly want ONLY name, image, website) */}
                      {acc.length > 0 && (
                        <ul className="mt-1 list-disc list-inside text-sm text-gray-700 space-y-0.5">
                          {acc.map((line, i) => (
                            <li key={`${item?.slug || index}-acc-${i}`}>
                              {line}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Right: Website Button */}
                  {site ? (
                    <a
                      href={site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#FFC067] text-black text-sm px-4 py-2 rounded-lg shadow-sm hover:bg-[#3188e3] transition"
                    >
                      Visit Website
                    </a>
                  ) : (
                    <span className="text-sm text-gray-500">
                      Website unavailable
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Empty state */}
        {!loading && bvoc.length === 0 && (
          <div className="mt-8 text-center text-gray-600">
            No universities available right now.
          </div>
        )}
      </div>
    </section>
  );
};

export default TopUniForBvoc;