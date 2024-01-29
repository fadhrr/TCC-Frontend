import Link from 'next/link';

export default function Problems() {
  const data = [
    {
      title: 'Database',
      description: 'Enhance your knowledge of data management, database modeling, and database programming',
      link: '/problems/slug/detail',
    },
    {
      title: 'Database',
      description: 'Enhance your knowledge of data management, database modeling, and database programming',
      link: '/problems/slug/detail',
    },
    {
      title: 'Database',
      description: 'Enhance your knowledge of data management, database modeling, and database programming',
      link: '/problems/slug/detail',
    },
    {
      title: 'Database',
      description: 'Enhance your knowledge of data management, database modeling, and database programming',
      link: '/problems/slug/detail',
    },
    // Tambahkan data lainnya sesuai kebutuhan
  ];
  return (
    <>
      <section className="bg-white lg:px-4  lg:my-12  pb-[60px] pt-[70px] md:pt-[80px]">
        <div className="container w-full flex flex-col items-start">
          <h1 className="text-3xl font-semibold text-black capitalize lg:text-4xl ">
            <span className="underline decoration-blue-500">Problems</span>
          </h1>
          <p className="mt-4 lg:w-3/5 w-full text-black xl:mt-6 ">
            Within the &rsquo;Problem&rsquo; section, explore a diverse range of problem categories. By selecting the right category, you can dive into engaging challenges and refine your skills
          </p>

          <form className="my-4 md:w-1/3 w-full xl:my-6">
            <div className="relative flex items-start">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full  px-10 py-2 md:py-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Categorize..."
                required
                style={{ fontSize: '16px' }}
              />
            </div>
          </form>

          {/* Card 1 */}
          <div className="grid md:grid-cols-3 grid-cols-2 gap-4 items-stretch md:mx-0 mt-4 flex-wrap">
            {/* <div className='flex sm:gap-6 gap-4  xl:justify-start justify-center flex-wrap'> */}
            {data.map((item, index) => (
              <div key={index} className="lg:w-80 sm:w-60 w-full md:p-6 p-4 flex flex-col justify-center bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
                <Link href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{item.title}</h5>
                </Link>
                <p className="mb-3 lg:text-base sm:text-xs text-[10px]  text-gray-700 ">{item.description}</p>
                <Link
                  href={item.link}
                  className="flex lg:justify-between justify-center items-center md:w-1/2 w-full px-1 lg:px-3 py-2 lg:text-sm text-[10px]  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg className="w-3.5 h-3.5 ml-2 md:block hidden" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
