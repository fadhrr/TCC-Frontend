
const contestCardData = [
  {
    title: 'Hello world',
    link: '/detailcontest', // Replace with the actual link
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aut corrupti iure tempora',
    duration: '2 hours 30 minutes',
    time: 'October 21, 21:05',
  },
  {
    title: 'Die world',
    link: '#', // Replace with the actual link
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aut corrupti iure tempora',
    duration: '2 hours 30 minutes',
    time: 'October 21, 21:05',
  },
];

export default function ContesCard() {
  return (
    <div className="px-8">
      {contestCardData.map((article, index) => (
        <article key={index} className="group relative w-full my-4 cursor-pointe inline-block">
          <div className="relative bg-gray-50 z-10 flex flex-col overflow-hidden p-4 border-2 border-black sm:gap-4">
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
          <div className="absolute -z-1 bottom-0 right-0 -mb-1 -mr-1 h-36 w-full bg-black transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></div>
        </article>
      ))}
    </div>
  );

}
