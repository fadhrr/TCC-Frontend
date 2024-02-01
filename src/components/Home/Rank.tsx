
'use client'


export default function Rank() {
    return (
        <section className="bg-[#f0efeb] relative flex flex-col min-h-[60vh] justify-center items-center p-8">
            <div className="mb-10 flex flex-col gap-2 items-center w-3/4">
                <h1 className="font-mono text-4xl">
                    Our Best Player
                </h1>
                <p className="text-md text-center">
                    Honoring the excellence and dedication of our top-performing
                    player who consistently shines on the field and inspires us
                    all with their outstanding skills and sportsmanship
                </p>
            </div>
            <table className="w-3/4 ">
                <tbody className="text-center  max-w-full gap-2 flex justify-center flex-col text-black">
                    <tr className="border-2 cursor-pointer w-full flex flex-row justify-between whitespace-nowrap border-black  duration-300 hover:scale-105">
                        <td className="bg-black text-white flex items-center px-4">
                            1.
                        </td>
                        <td className="py-3 text-left w-1/2">Fajry</td>
                        <td className="p-3  text-right">120.000</td>
                    </tr>


                    <tr className="cursor-pointer border-2 border-black flex flex-row justify-between duration-300 hover:scale-105">

                        <td className="bg-black text-white flex items-center px-4">
                            1.
                        </td>
                        <td className="py-3 text-left w-1/2">Fajry</td>
                        <td className="p-3  text-right">120.000</td>
                    </tr>

                    <tr className="cursor-pointer border-2 border-black flex flex-row justify-between duration-300 hover:scale-105">
                        <td className="bg-black text-white flex items-center px-4">
                            1.
                        </td>
                        <td className="py-3 text-left w-1/2">Fajry</td>
                        <td className="p-3  text-right">120.000</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}
