
'use client'
import React, { useState, useEffect } from "react";
import profile_pemandu from '../../../public/assets/images/profile_pemandu.jpg'
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { Settings } from "lucide-react";
import { useRouter } from "next/navigation";

const ProfileLayout = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    nim: "",
    email: "",
    score: 0,
  });

  const [editedUserData, setEditedUserData] = useState({
    name: "",
  });

  const [isSettingsPressed, setIsSettingsPressed] = useState(false);
  const [buttonText, setButtonText] = useState("Submit");

  const currentUser = useAuth();

  const router = useRouter();

  const editUser = () => {
    setIsSettingsPressed(true);
    setEditedUserData({
      ...user,
    });
  };

  const handleEditUser = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/${currentUser.uid}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editedUserData),
        }
      );

      if (response.status === 200) {
        setUser((user) => {
          if (user.id === currentUser.uid) {
            return { ...user, ...editedUserData };
          } else {
            return user;
          }
        });
        setButtonText("Settings");
        setIsSettingsPressed(false);
      } else {
        const errorData = await response.json();
        console.error(
          `Failed to edit user with ID ${currentUser.uid}. Server error: ${errorData.message}`
        );
      }
    } catch (error) {
      console.error(`Error editing user with ID ${currentUser.uid}.`, error);
    }
  };

  useEffect(() => {
    const fetchDataUser = async () => {
      try {
        if (!currentUser || !currentUser.uid) {
          router.push('/');
          return;
        }
  
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/${currentUser.uid}`
        );
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.log(`Error fetching user with id ${user.id}`, error);
      }
    };
  
    fetchDataUser();
  }, [currentUser, user.id, router]);
  

  return (
    <div className="ml-2 pb-10">
      <h1 className="text-3xl font-bold pt-[70px] md:pt-[80px] lg:text-4xl">
        <span className="underline decoration-blue-500">Settings</span>
      </h1>
      <div className="border border-black mt-8 shadow-[4px_4px_0px_rgba(0,0,0,1)] mr-10">
        <div className="bg-black text-white full-width flex justify-between">
          <h3 className="pl-3 font-bold py-1 text-[22px]">Basic Profile</h3>
          <button
            type="button"
            className="mr-3 hover:opacity-60"
            onClick={() => {
                if (isSettingsPressed) {
                handleEditUser();
                } else {
                editUser();
                }
            }}
            >
            {isSettingsPressed ? buttonText : <Settings />}
        </button>
        </div>
        <div className="flex p-5">
          <Image
            src={profile_pemandu}
            alt="profile"
            className="rounded-full w-[160px] h-[160px] border-2 border-black"
          />
          <div className="mt-5 ml-7">
            <table>
              <tbody>
                <tr>
                  <td className="pr-6 font-semibold">Name</td>
                  <td>
                    {isSettingsPressed ? (
                      <input
                        type="text"
                        value={editedUserData.name}
                        onChange={(e) =>
                          setEditedUserData({
                            ...editedUserData,
                            name: e.target.value,
                          })
                        }
                      />
                    ) : (
                      user.name
                    )}
                  </td>
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
                <tr>
                  <td className=" pr-2">Scores :</td>
                  <td>
                    {" "}
                    <span className=" font-bold">{user.score}</span> points
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
