import React from "react";

const Skeleton = ({ className = "" }) => (
  <div className={`animate-pulse bg-slate-100 rounded-md ${className}`} />
);

const VocationalSkeleton = () => {
  return (
    <div className="bg-white text-[#31393C]">
      {/* Header Skeleton */}
      <header className="bg-[#FFC067] text-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-8">
          <Skeleton className="h-9 sm:h-5 w-32 max-w-2xl" />
          <Skeleton className="mt-3 h-10 w-2/3 max-w-md" />
          <Skeleton className="mt-3 h-7 w-2/3 max-w-md" />
        </div>
      </header>

      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-10 space-y-8">
          {/* Paragraph 1 */}
          <Skeleton className="h-28 w-full" />

          {/* Paragraph 2 */}
          <Skeleton className="h-24 w-11/12" />

          {/* Divider */}
          <hr className="my-10 border-gray-200" />

          {/* CTA Section */}
          <section className="flex items-center gap-4">
            <div className="hidden lg:block">
              <Skeleton className="h-5 w-40" />
              <Skeleton className="mt-2 h-4 w-56" />
            </div>
            <div className="ml-auto">
              <Skeleton className="h-11 w-44 rounded-xl" />
            </div>
          </section>
        </div>

        {/* Contact Form Skeleton */}
        <section className="border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-11 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-11 w-full" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-11 w-full" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-28 w-full" />
              </div>
              <div className="md:col-span-2 flex justify-end">
                <Skeleton className="h-11 w-40 rounded-xl" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VocationalSkeleton;
