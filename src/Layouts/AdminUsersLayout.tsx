    'use client'

    import React from "react";
    import Link from "next/link";
    import Image from "next/image";
    import { useState } from "react";

    const AdminUserLayout = () => {
        const [data, setData] = useState(
            [
                { id: 1011010,  nama: "Sepuh", role: "Admin" },
                { id: 1011011,  nama: "Andi", role: "User"},
                { id: 1011012,  nama: "Sepuh", role: "Admin" },
                { id: 1011013,  nama: "Andi", role: "User"},
                { id: 1011014,  nama: "Michel", role: "Admin" },
                { id: 1011015,  nama: "Ridwan", role: "Admin" },
                { id: 1011016,  nama: "Sepuh", role: "Asisten"},
                { id: 1011017,  nama: "Andi", role: "Asisten"},
                { id: 1011018,  nama: "Michael", role: "Asisten"},
                { id: 1011019,  nama: "Rifa", role: "Asisten"},
            ]
        );

        
        const [sortOption, setSortOption] = useState('default');
        const [selectedRole, setSelectedRole] = useState('default');

        const updatedSortedData = [...data].sort((a, b) => {
            const rolesOrder = { 'Asisten': 1, 'Admin': 2, 'User': 3 };
            return rolesOrder[a.role] - rolesOrder[b.role];
        });

        const filteredData = selectedRole !== 'default'
        ? updatedSortedData.filter(item => item.role === selectedRole)
        : updatedSortedData;

        const handleSortChange = (e:any) => {
            const selectedOption = e.target.value;
            const selectedRoleForSorting = selectedOption === 'default' ? 'default' : selectedOption;
            setSelectedRole(selectedRoleForSorting);
            setSortOption(selectedOption);
        };
        

    return (
    <div>
        <div className="pt-[70px] md:pt-[80px] mb-5">
            <h1 className="text-3xl font-bold lg:text-4xl">
                <span className="underline decoration-blue-500">Users List</span>
            </h1>
        </div>
        <select className="mt-2 p-2 border" value={sortOption} onChange={handleSortChange}>
            <option value="default">Sort By Role</option>
            <option value="Admin">Admin</option>
            <option value="Asisten">Asisten</option>
            <option value="User">User</option>
        </select>
        <div className="table-wrapper">
            <table className="w-full border-separate border-spacing-y-3">
                <thead>
                    <tr className="text-left">
                        <th className="pl-3">Id</th>
                        <th>Name</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item, index) => (
                        <tr key={index} className={index%2 === 0? 'bg-white' : 'bg-[#EDEDED]'}>
                            <td className={`border-y-2 border-s-2 border-black h-10 pl-3`}>
                                {item.id}
                            </td>
                            <td className={`border-y-2 border-black`}>
                                {item.nama}
                            </td>
                            <td className={`border-y-2 border-r-2 border-black`}>
                                {item.role}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    );
    };

    export default AdminUserLayout;
