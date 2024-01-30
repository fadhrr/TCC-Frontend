import Link from "next/link";

export default async function Problems() {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/problems`
  );
  const problems = await res.json();
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return (
    <>
      <section className="bg-white mx-24 my-12">
        <div className="container">
          <h1 className="text-3xl font-semibold text-black capitalize lg:text-4xl ">
            <span className="underline decoration-blue-500">Problems</span>
          </h1>
          <p className="mt-4 w-3/5 text-black xl:mt-6 ">
            Within the &rsquo;Problem&rsquo; section, explore a diverse range of
            problem categories. By selecting the right category, you can dive
            into engaging challenges and refine your skills
          </p>

          <form className="my-4 w-1/3 xl:my-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Categorize..."
                required
              />
            </div>
          </form>

          {/* <div className="max-w-sm md:mb-6 mb-4 p-6 flex flex-col justify-center bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">
            <Link href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Database
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              enhance your knowledge of data management, database modeling, and
              database programming
            </p>
            <Link
              href="/problems/slug/detail"
              className="inline-flex items-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div> */}

          <div className="flex flex-wrap md:gap-6 gap-4">
            {problems.map((problem) => (
              <Link
                href={`/problems/detail/${problem.id}`}
                key={problem.id}
                className="transition max-w-sm p-6 flex flex-col justify-center bg-white border border-gray-200 rounded-lg shadow hover:bg-slate-100 dark:border-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {problem.title}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {problem.description}
                </p>
                {/* <Link
                  href={`/problems/detail/${problem.id}`}
                  className="inline-flex items-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link> */}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
