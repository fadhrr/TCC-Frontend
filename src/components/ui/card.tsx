import React from 'react';
import Link from 'next/link';

// Perbaikan: Menambahkan `export`
export const ProblemCard: React.FC<{ data: { title: string; description: string; link: string }[] }> = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <Link href={item.link} key={index} className="rounded-lg bg-[#F5F5F5] border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]  p-4 transition hover:shadow-lg sm:p-6">
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">{item.title}</h3>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">{item.description}</p>

          <div className="group mt-4 inline-flex items-center gap-1 text-sm font-medium hover:text-[#fae74d]">
            Find out more
            <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
              &rarr;
            </span>
          </div>
        </Link>
      ))}
    </>
  );
};

export const ContestCard: React.FC<{ contestData: { title: string; link: string; content: string; duration: string; time: string }[] }> = ({ contestData }) => {
  return (
    <div className="px-8">
      {contestData.map((article, index) => (
        <article key={index} className="group relative w-full my-4 cursor-pointe inline-block">
          <div className="relative bg-gray-50 z-10 flex flex-col overflow-hidden p-4 border-2 rounded-lg border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:gap-4">
            <div className="flex justify-start">
              <h3 className="mt-4 text-lg font-medium sm:text-xl">
                <a href={article.link} className="hover:underline">
                  {article.title}
                </a>
              </h3>
            </div>

            <p className="mt-1 text-sm text-gray-700">{article.content}</p>
            {/* tag */}
            <div className="mt-4 flex gap-2 sm:items-center">
              <div className="flex items-center gap-1 p-1 text-gray-500">
                <p className="text-xs font-medium">{article.duration}</p>
                <span>|</span>
                <p className="text-xs font-medium">{article.time}</p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};
