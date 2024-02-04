import React from "react";

const SubmissionsLayout = ({data, title}) => {
  return (
    <div className="pb-8">
        <h1 className="text-3xl font-bold pt-[70px] md:pt-[80px] lg:text-4xl">
            <span className="underline decoration-blue-500">
                {title}
            </span>
        </h1>
        <div className="table-wrapper">
            <table className="w-full border-separate border-spacing-y-3">
                <thead>
                    <tr className="text-left">
                        <th className="pl-3">Id</th>
                        <th>User</th>
                        <th>Archive</th>
                        <th>Problems</th>
                        <th>Lang</th>
                        <th>Verdict</th>
                        <th>Pts</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className={index%2 === 0? 'bg-white' : 'bg-[#EDEDED]'}>
                            <td className={`border-y-2 border-s-2 border-black h-10 pl-3`}>
                                {item.id}
                            </td>
                            <td className={`border-y-2 border-black`}>
                                {item.user}
                            </td>
                            <td className={`border-y-2 border-black`}>
                                {item.archive}
                            </td>
                            <td className={`border-y-2 border-black`}>
                                {item.problems}
                            </td>
                            <td className={`border-y-2 border-black`}>
                                {item.lang}
                            </td>
                            <td className={`border-y-2 border-black`}>
                                {item.verdict}
                            </td>
                            <td className={`border-y-2 border-black`}>
                                {item.pts}
                            </td>
                            <td className={`border-y-2 border-e-2 border-black`}>
                                {item.time}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
};

export default SubmissionsLayout;