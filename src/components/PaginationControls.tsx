'use client';

//The FC stands for Function Component. It's essentially a type definition that helps with type-checking and provides auto-completion when you're defining functional components in React.
import { FC } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const PaginationControls: FC<PaginationControlsProps> = (hasNextPage, hasPrevPage) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get('page') ?? '1'; //ngambnil nilai dari parameter page, jika tak ada maka default 1
  const per_page = searchParams.get('per_page') ?? '5'; //ngambnil nilai dari parameter per_page, jika tak ada maka defaut 5

  return (
    <>
      <div className="bg-white p-2 mt-4 text-right float-start flex justify-center items-center rounded-lg border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
        <div className="flex text-center items-center -space-x-px h-8 text-sm gap-2">
          <button
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white  hover:bg-gray-300 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            disabled={!hasPrevPage}
            onClick={() => {
              router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`);
            }}
          >
            <span className="sr-only">Previous</span>
            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
            </svg>
          </button>

          <div
            className="flex items-center gap-2 text-md font-bold"
          >
            <span className="flex  items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-[#3399ff] hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              {page}
            </span>{' '}
            <span className="flex  items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-[#3399ff] hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              {Math.ceil(10 / Number(per_page))}
            </span>
          </div>

          <button
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white   hover:bg-gray-300  hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            disabled={!hasNextPage}
            onClick={() => {
              router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`);
            }}
          >
            <span className="sr-only">Next</span>
            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default PaginationControls;
