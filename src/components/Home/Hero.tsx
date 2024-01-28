import Image from 'next/image';

export default function Hero() {
  
  return (
    <section className="bg-white border-b-2 border-black">
      <div className=" container flex flex-col justify-center p-2 mx-auto sm:py-12 lg:py-20 lg:flex-row ">
        {/* image */}
        <div className="flex items-center justify-center lg:w-1/2 p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img src="/assets/images/Hand.png" alt="Hand Image" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
          {/* <Image src={hand} alt='Hand Image' className='object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128'></Image> */}
        </div>

        {/* Tulisan */}
        <div className="flex flex-col justify-center lg:w-1/2 text-black p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leadi sm:text-6xl">
            Ac mattis
            <span className="text-black"> senectus</span>erat pharetra
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Dictum aliquam porta in condimentum ac integer
            <br className="hidden md:inline lg:hidden" />
            turpis pulvinar, est scelerisque ligula sem
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border-2 border-black bg-black text-white">
              Suspendisse
            </a>
            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg text-black font-semibold border-2 border-black ">
              Malesuada
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
