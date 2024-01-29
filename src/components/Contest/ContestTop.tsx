export default function ContestTop() {
    return (
        <section className="bg-white">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-black capitalize lg:text-4xl ">
                    <span className="underline decoration-blue-500">
                        Contest
                    </span>
                </h1>
                <p className="mt-4 w-full lg:w-3/5 text-black xl:mt-6 ">
                    Welcome to the 'Contests' section , here you'll find a
                    variety of exciting contests and challenges that cater to
                    diverse interests and skills. Each contest is designed to
                    test your abilities and knowledge in a specific area.
                </p>
                <div className="flex justify-between">
                    <form className="mt-4 md:w-1/3 xl:mt-6">
                        <label
                            htmlFor="default-search"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                        >
                            Search
                        </label>
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
                                placeholder="Search Contest..."
                                required
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
