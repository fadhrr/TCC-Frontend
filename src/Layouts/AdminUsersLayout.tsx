'use client'

import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
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

const AdminUserLayout = () => {

    const [data, setData] = useState([]);
    const {isOpen, onOpen, onOpenChange } = useDisclosure();
    const [editingUserId, setEditingUserId] = useState(null);
    const [sortOption, setSortOption] = useState('default');
    const [selectedRole, setSelectedRole] = useState('default');

    const [editedUserData, setEditedUserData] = useState({
        name: "",
        nim: "",
        email: "",
        score: "",
});

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/role`);
            const data = await response.json();

            const updatedData = data.map((user: { role: string; })=>({...user, role: user.role!=="Admin" && user.role!=="Assistant"? "User": user.role}));
            setData(updatedData);
        } catch (error) {
            console.log("Error fetching data ", error);
        }
        };
        fetchData(); 
    }, []);

    // Melakukan filter berdasarkan role yang dipilih
    const filteredData = selectedRole !== 'default'
    ? data.filter(item => item.role === selectedRole)
    : data;

    // Mengurutkan data berdasarkan role
    const updatedSortedData = [...filteredData].sort((a, b) => {
        const rolesOrder = { Admin: 1, Assistant: 2, User: 3};
        return rolesOrder[a.role] - rolesOrder[b.role];
    });

    // Mengatur opsi pengurutan data berdasarkan role yang dipilih
    const handleSortChange = (e:any) => {
        const selectedOption = e.target.value;
        const selectedRoleForSorting = selectedOption === 'default' ? 'default' : selectedOption;
        setSelectedRole(selectedRoleForSorting);
        setSortOption(selectedOption);
    };

    const editUser = (userId:any) => {
        const userToEdit = data.find((user) => user.id === userId);
        
        setEditedUserData({
            name: userToEdit.name,
            nim: userToEdit.nim,
            email: userToEdit.email,
            score: userToEdit.score,
        });
        
        setEditingUserId(userId);
        onOpen(); 
        };

    const handleEditUser = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/${editingUserId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedUserData),
        });
    
        if (response.status === 200) {
        console.log(`User with ID ${editingUserId} edited successfully.`);
        setData((prevData) =>
        prevData.map((user) =>
            user.id === editingUserId ? { ...user, ...editedUserData } : user
        )
    );

        } else {
        const errorData = await response.json();
        console.error(`Failed to edit user with ID ${editingUserId}. Server error: ${errorData.message}`);
        }
    } catch (error) {
        console.error(`Error editing user with ID ${editingUserId}.`, error);
    }
    };

    const deleteUser = async (userId: any) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/admin/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                setData((prevData) => prevData.filter((user) => user.id !== userId));
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
    };

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

        <select className="mt-2 p-2 border" value={sortOption} onChange={handleSortChange}>
            <option value="default">Sort By Role</option>
            <option value="Admin">Admin</option>
            <option value="Assistant">Assistant</option>
            <option value="User">User</option>
        </select>
        <div className="table-wrapper">
            <table className="w-full border-separate border-spacing-y-3">
                <thead>
                    <tr className="text-left">
                        <th className="pl-3">Id</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {updatedSortedData.map((user, index) => (
                        <tr key={index} className={index%2 === 0? 'bg-white' : 'bg-[#EDEDED]'}>
                            <td className={`border-y-2 border-s-2 border-black h-10 pl-3`}>
                                {index+1}
                            </td>
                            <td className={`border-y-2 border-black`}>
                                {user.name}
                            </td>
                            <td className={`border-y-2 border-black`}>
                                {user.role}
                            </td>
                            <td className="border-y-2 border-r-2 border-black">
                                <div className="flex space-x-3">
                                    <Button onPress={() => editUser(user.id)}>
                                        <Image alt="edit" src="/assets/icons/edit.svg" width={20} height={20} className="hover:opacity-65"/>
                                    </Button>
                                    {user.role !== 'Admin' && (
                                        <Button type="submit" onClick={() => deleteUser(user.id)}>
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

export default AdminUserLayout;
