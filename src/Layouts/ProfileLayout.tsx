'use client'

import React, {useState} from "react";
import profile_pemandu from '../../public/assets/images/profile_pemandu.jpg'
import Image from "next/image";
 
const ProfileLayout = () => {
    const [data, setData] = useState(
        [
            { name: "Sepuh", rating: 12000, scores: 1200, attempted: 12, ac: 8, wa: 4},
        ]
    );
  return (
    <div className="ml-2 pb-10">
        <h1 className="text-3xl font-bold pt-[70px] md:pt-[80px] lg:text-4xl">
            <span className="underline decoration-blue-500">
            Settings
            </span>
        </h1>
        {data.map((profile, index) => (
            <div key={index} className="border border-black mt-8">
            <div className="bg-black text-white full-width flex justify-between">
                <h3 className="pl-3 font-bold py-1 text-[22px]">Basic Profile</h3>
            </div>
            <div className="flex p-5">
                <Image src={profile_pemandu} alt="profile" className="rounded-full w-[160px] h-[160px] border-2 border-black"/>
                <div className="mt-5 ml-7">
                <p className="font-semibold">
                    Name <span className="font-normal ml-7">{profile.name}</span>
                </p>
                <p className="font-semibold">
                    Rating <span className="font-normal ml-3">{profile.rating}</span>
                </p>
                </div>
            </div>
            <div className="border border-black mt-8">
                <h3 className="bg-black text-white full-width pl-3 font-bold py-1 text-[22px]">
                Problem Stats
                </h3>
                <div className="p-5">
                <ul>
                    <li>
                    ● Scores : <span className="font-bold">{profile.scores}</span> pts
                    </li>
                    <li>
                    ● Attempted : <span className="font-bold">{profile.attempted}</span>
                    </li>
                </ul>
                <ul className="ml-6">
                    <li>● <span className="font-bold">AC</span> : {profile.ac}</li>
                    <li>● <span className="font-bold">WA</span> : {profile.wa}</li>
                </ul>
                </div>
            </div>
            </div>
        ))}
    </div>
    );
    };

export default ProfileLayout;
