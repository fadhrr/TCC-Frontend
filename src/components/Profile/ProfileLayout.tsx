'use client'

import React, {useState, useEffect} from "react";
import profile_pemandu from '../../../public/assets/images/profile_pemandu.jpg'
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
 
// todo: editProfile.


const ProfileLayout = () => {
    const [user, setUser] = useState({
        name: "",
        nim: "",
        email: "",
        score: 0,
      });

    const currentUser = useAuth();


        useEffect(() => {
            const fetchDataUser = async()=>{
                try {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/${currentUser.uid}`)
                    const user = await response.json();
                    setUser(user);
                    
                } catch (error) {
                    console.log('error fetching user with id ${user.id}', error)       
                }
            }
            fetchDataUser();
        }, [currentUser.uid]);
        
  return (
    <div className="ml-2 pb-10">
        <h1 className="text-3xl font-bold pt-[70px] md:pt-[80px] lg:text-4xl">
            <span className="underline decoration-blue-500">
            Settings
            </span>
        </h1>
            <div className="border border-black mt-8">
            <div className="bg-black text-white full-width flex justify-between">
                <h3 className="pl-3 font-bold py-1 text-[22px]">Basic Profile</h3>
            </div>
            <div className="flex p-5">
                <Image src={profile_pemandu} alt="profile" className="rounded-full w-[160px] h-[160px] border-2 border-black"/>
                <div className="mt-5 ml-7">
                    <table>
                        <tbody>
                            <tr>
                                <td className="pr-6 font-semibold">Name</td>
                                <td>{user.name}</td>
                            </tr>
                            <tr>
                                <td className="w-4 font-semibold">NIM</td>
                                <td>{user.nim}</td>
                            </tr>
                            <tr>
                                <td className="w-4 font-semibold">Email</td>
                                <td>{user.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="border border-black mt-8">
                <h3 className="bg-black text-white full-width pl-3 font-bold py-1 text-[22px]">
                Problem Stats
                </h3>
                <div className="p-5">
                <table>
                    <tbody>
                        <td className=" pr-2">Scores :</td>
                        <td> <span className=" font-bold">{user.score}</span> points</td>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
    </div>
    );
    };

export default ProfileLayout;
