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
    Input,
  } from "@nextui-org/react";
import { Card } from "@/components/problems/Card";

const AdminUserLayout = () => {

    const [data, setData] = useState([]);
    const [editingUserId, setEditingUserId] = useState(null);
    const [sortOption, setSortOption] = useState('default');
    const [selectedRole, setSelectedRole] = useState('default');

    const [isEditUserOpen, setIsEditUserOpen] = useState(false);
    const [isAddRolesOpen, setIsAddRolesOpen] = useState(false);

    const [emailSuggestions, setEmailSuggestions] = useState([]);
    const [emailData, setEmailData] = useState<string | undefined>(undefined);


    
    const [editedUserData, setEditedUserData] = useState({
        name: "",
        nim: "",
        email: "",
        score: "",
});


    const [addRoleUser, setAddRoleUser] = useState('');

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

    // Filter based on the selected role
    const filteredData = selectedRole !== 'default'
    ? data.filter(item => item.role === selectedRole)
    : data;

    // Sort data by role
    const updatedSortedData = [...filteredData].sort((a, b) => {
        const rolesOrder = { Admin: 1, Assistant: 2, User: 3};
        return rolesOrder[a.role] - rolesOrder[b.role];
    });

    // Set data sorting options based on the selected role
    const handleSortChange = (e:any) => {
        const selectedOption = e.target.value;
        const selectedRoleForSorting = selectedOption === 'default' ? 'default' : selectedOption;
        setSelectedRole(selectedRoleForSorting);
        setSortOption(selectedOption);
    };

    // edit user
    const editUser = (userId:any) => {
        const userToEdit = data.find((user) => user.id === userId);
        
        setEditedUserData({
            name: userToEdit.name,
            nim: userToEdit.nim,
            email: userToEdit.email,
            score: userToEdit.score,
        });
        
        setEditingUserId(userId);
        setIsEditUserOpen(true);
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

    // delete user
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
    
    // create roles for user as admin or assistant
    const addRoles = async () => {
        setIsAddRolesOpen(true);
    
        const emailToSearch = emailData || '';
    
        const userWithEmail = data.find(user => user.email && user.email.toLowerCase().includes(emailToSearch.toLowerCase()));
    
        if (!userWithEmail) {
            console.log(`User with email ${emailToSearch} not found.`);
            return;
        }
    
        const userId = userWithEmail.id;
    
        let mappedRole:any;
    
        if (addRoleUser === 'admin') {
            mappedRole = 2;
        } else if (addRoleUser === 'assistant') {
            mappedRole = 1;
        } else {
            mappedRole = 0;
        }
    
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/admin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: userId,
                    user_id: userId,
                    role: mappedRole,
                }),
            });
    
            if (response.status === 200) {
                console.log(`Successfully added role for user with ID ${userId}`);

                if (mappedRole === 2) {
                    mappedRole = "Admin";
                } else if(mappedRole === 1){
                    mappedRole = "Assistant";
                } else {
                    mappedRole = "User";
                }
                
                setData((prevData) =>
                    prevData.map((user) =>
                        user.id === userId ? { ...user, role: mappedRole } : user
                    )
                );
            } else {
                console.log(`Error adding role. Status: ${response.status}`);
            }
        } catch (error) {
            console.log('Error:', error);
        }
        setIsAddRolesOpen(false);
    };

    // sugestion email
    const handleEmailChange = (value: string) => {
        setEmailData(value);
    
        if (value.length >= 2) {
            const matchingEmails = data
                .filter(user => user.email && user.email.toLowerCase().includes(value.toLowerCase()))
                .map(user => user.email)
                .slice(0, 10); 
    
            setEmailSuggestions(matchingEmails);
        } else {
            setEmailSuggestions([]);
        }
    };
    
    // select email
    const handleEmailSelection = (selectedEmail: string) => {
        setEmailData(selectedEmail);
        setEmailSuggestions([]);
    };
    
    // auto-fill email when pressing enter if there is one email left
    const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && emailSuggestions.length === 1) {
            setEmailData(emailSuggestions[0]);
            setEmailSuggestions([]);
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

        {/* Modals edit user */}
        <Modal 
        size="lg"
        backdrop="blur" 
        isOpen={isEditUserOpen}
        onOpenChange={() => setIsEditUserOpen(!isEditUserOpen)}
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

        {/* modals add role */}
        <Modal 
        size="lg"
        backdrop="blur" 
        isOpen={isAddRolesOpen}
        onOpenChange={() => setIsAddRolesOpen(!isAddRolesOpen)}
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
            }}>
            <ModalContent>
            {(onClose) => (
                <>
                <div className="bg-white p-4 rounded-lg shadow-md">
                <ModalHeader className="flex flex-col gap-1 text-2xl">Add Role</ModalHeader>
                <ModalBody>
                <label htmlFor="">Email</label>
                <Input
                    autoFocus
                    placeholder="Enter your email"
                    type="email"
                    variant="bordered"
                    value={emailData}
                    onChange={(e:any) => {
                        setEmailData(e.target.value);
                        handleEmailChange(e.target.value);
                    }}
                    onKeyDown={(e:any) => handleEnterKeyPress(e)}
                />
               {emailSuggestions.length > 0 && (
                <div className="mt-2">
                    <p className="text-sm font-medium text-gray-500">Suggestions:</p>
                    <ul className="ml-2 grid-cols-2 grid">
                        {emailSuggestions.map((suggestion, index) => (
                            <li
                                key={index}
                                className="text-sm text-gray-600 cursor-pointer hover:underline"
                                onClick={() => handleEmailSelection(suggestion)}>
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                </div>
                )}

                    <select
                        value={addRoleUser}
                        onChange={(e) => setAddRoleUser(e.target.value)} className=" mt-3 mb-6"
                    >
                        <option value="" selected>Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="assistant">Assistant</option>
                    </select>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose} className="hover:opacity-60">
                    Close
                    </Button>
                    <Button color="primary" onPress={()=>{onClose(); addRoles();}} className="px-3 py-1 rounded-sm hover:opacity-60">
                    Submit
                    </Button>
                </ModalFooter>
                </div>
            </>
            )}
        </ModalContent>
        </Modal>

        <div className="flex items-center mb-3">
            <select className="mt-2 p-2 border" value={sortOption} onChange={handleSortChange}>
                <option value="default">Sort By Role</option>
                <option value="Admin">Admin</option>
                <option value="Assistant">Assistant</option>
                <option value="User">User</option>
            </select>
            <button className="relative inline-block text-md group ml-6 mt-1 focus:outline-none" onClick={()=>setIsAddRolesOpen(true)}>
                <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-1 py-1 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span className="relative">Add Role</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-8 -mb-1 mr-[-2px] transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </button>
        </div>
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
