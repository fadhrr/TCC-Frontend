'use client'

import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import {
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    Button,
    useDisclosure,
    Input
  } from "@nextui-org/react";
import { Card } from "@/components/problems/Card";

const AssistantUserLayout = () => {

    const [userData, setUserData] = useState([]);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [submissionData, setSubmissionData] = useState([]);
    const [editedUserData, setEditedUserData] = useState({
        name: "",
        nim: "",
        email: "",
        score: "",
    });
    const [editingUserId, setEditingUserId] = useState(null);
    const [contestData, setContestData] = useState(null);
    const [userRoleData, setUserRoleData] = useState([]);


    useEffect(() => {
      const fetchUserData = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users`);
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.log("error fetching", error);
        }
      }

      const fetchSubmissionsData = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/submissions`);
            const data = await response.json();
            setSubmissionData(data);
        } catch (error) {
            console.log("error fetching", error);
        }
      }

      const getScoreboard = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contest/1/scoreboard`);
          const data = await response.json();
          setContestData(data);
        } catch (error) {
          console.log("error fetching scoreboard", error);
        }
      };

      const getRole = async()=> {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/role`);
            const data = await response.json();
            const updatedData = data.map((user: { role: string; })=>({...user, role: user.role!=="Admin" && user.role!=="Assistant"? "User": user.role}));

            
            setUserRoleData(updatedData)
        } catch (error) {
            console.log("Error fetching data ", error);
            
        }
      }
      
      fetchUserData();
      fetchSubmissionsData();
      getScoreboard();
      getRole();
    }, []);
    
    // Menggabungkan data submitted dan role ke userData
    const mergeData = userData.map((user) => {
        const userRole = userRoleData.find((userRole) => userRole.id === user.id);
    
        const role = userRole ? userRole.role : "User";
    
        const submitCount = submissionData.filter(
        (submission) => submission.user_id === user.id
        ).length;
    
        return { ...user, role, submitted: submitCount };
    });

    // Mengurutkan data agar admin dan assistant berada di atas
    const sortedData = mergeData.sort((a, b) => {
        const roleOrder = { Admin: 1, Assistant: 2, User: 3 };
        return roleOrder[a.role] - roleOrder[b.role];
    });
  
    
    const handleEditUser = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/${editingUserId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editedUserData)
            })

            if (response.status === 200) {
                console.log(`User with ID ${editingUserId} edited successfully.`);
                setUserData(prevData => prevData.map((user) =>
                    user.id === editingUserId ? { ...user, ...editedUserData } : user
                ));
            } else {
                const errorData = await response.json()
                console.error(`Failed to edit user with ID ${editingUserId}. Server error: ${errorData.message}`);
            }
        } catch (error) {
            console.error(`Error editing user with ID ${editingUserId}.`, error);
        }
    };

    const editUser = (userId:any) => {
        const userToEdit = userData.find((user) => user.id === userId);

        setEditedUserData({
            name: userToEdit.name,
            nim: userToEdit.nim,
            email: userToEdit.email,
            score: userToEdit.score,
        });

        setEditingUserId(userId);
        onOpen();
    };

    const deleteUser = async (userId:any) => {
        try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            setUserData((prevData) => prevData.filter((user) => user.id !== userId));
            console.log(`User with ID ${userId} deleted successfully.`);
        } else if (response.status === 404) {
            console.error(`User with ID ${userId} not found.`);
        } else {
            const errorData = await response.json();
            console.error(`Failed to delete user with ID ${userId}. Server error: ${errorData.message}`);
        }
            
        } catch (error) {
            console.error(`Error deleting user with ID ${userId}.`, error);
            
        }
    }

return (
    <Card className="w-full mt-28">
        <div className="m-10">
            <div className="mb-5">
                <h1 className="text-3xl font-bold lg:text-4xl">
                    <span className="underline decoration-blue-500">Users List</span>
                </h1>
            </div>

            <Modal 
            size="lg"
            backdrop="blur" 
            isOpen={isOpen} 
            onOpenChange={onOpenChange}
            motionProps={{
                variants: {
                    enter: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: 0.3,
                        ease: "easeOut",
                    },
                    },
                    exit: {
                    y: -20,
                    opacity: 0,
                    transition: {
                        duration: 0.2,
                        ease: "easeIn",
                    },
                    },
                }
                }}
            >
                <ModalContent>
                {(onClose) => (
                    <>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                    <ModalHeader className="flex flex-col gap-1 text-2xl">Edit</ModalHeader>
                    <ModalBody>
                            <label htmlFor="">Name</label>
                            <Input
                            autoFocus
                            placeholder="Enter your name"
                            variant="bordered"
                            value={editedUserData.name}
                            onChange={(e:any) => setEditedUserData({ ...editedUserData, name: e.target.value })}
                            />
                            <label htmlFor="">NIM</label>
                            <Input
                            autoFocus
                            placeholder="Enter your NIM"
                            variant="bordered"
                            value={editedUserData.nim}
                            onChange={(e:any) => setEditedUserData({ ...editedUserData, nim: e.target.value })}
                            />
                            <label htmlFor="">Email</label>
                            <Input
                            autoFocus
                            placeholder="Enter your email"
                            type="email"
                            variant="bordered"
                            value={editedUserData.email}
                            onChange={(e:any) => setEditedUserData({ ...editedUserData, email: e.target.value })}
                            />
                            <label htmlFor="">Score</label>
                            <Input
                            autoFocus
                            placeholder="Enter your Score"
                            variant="bordered"
                            value={editedUserData.score}
                            onChange={(e:any) => setEditedUserData({ ...editedUserData, score: e.target.value })}
                            />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose} className="hover:opacity-60">
                        Close
                        </Button>
                        <Button color="primary" onPress={()=>{onClose(); handleEditUser();}} className="px-3 py-1 rounded-sm hover:opacity-60">
                        Submit
                        </Button>
                    </ModalFooter>
                    </div>
                </>
                )}
            </ModalContent>
            </Modal>

            <div className="table-wrapper">
                <table className="w-full border-separate border-spacing-y-3">
                    <thead>
                        <tr className="text-left">
                            <th className="pl-3">Id</th>
                            <th>Name</th>
                            <th>Submitted</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((item, index) => (
                            <tr key={index} className={index%2 === 0? 'bg-white' : 'bg-[#EDEDED]'}>
                                <td className={`border-y-2 border-s-2 border-black h-10 pl-3`}>
                                    {index+1}
                                </td>
                                <td className={`border-y-2 border-black`}>
                                    {item.name}
                                </td>
                                <td className={`border-y-2 border-black`}>
                                    {item.submitted}
                                </td>
                                <td className="border-y-2 border-r-2 border-black">
                                    <div className="flex space-x-3">
                                        {item.role !== 'Admin' && (
                                            <Button onPress={()=>editUser(item.id)}>
                                                <Image alt="edit" src="/assets/icons/edit.svg" width={20} height={20} className="hover:opacity-65"/>
                                        </Button>
                                        )}
                                        {item.role !== 'Admin' && item.role !== 'Assistant' && (
                                        <Button type="submit" onPress={()=>deleteUser(item.id)}>
                                            <Image alt="remove" src="/assets/icons/trash.svg" width={20} height={20} className="hover:opacity-65" />
                                        </Button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </Card>

);
};

export default AssistantUserLayout;
