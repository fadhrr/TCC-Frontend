'use client';
import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/Problems/Card';

const menuItems = [
  {
    name: 'Pack 1',
    items: [
      {
        id: 1,
        name: 'tesssss',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, velit! Dolorum dolore rem odio dicta, error voluptatum quaerat sint eius architecto eveniet nemo quae, asperiores tenetur nulla ut magni fuga?',
      },
      {
        id: 1,
        name: 'tesssss',
        description: ' quae, asperiores tenetur nulla ut magni fuga?',
      },
      
    ],
  },
  {
    name: 'Pack 2',
    items: [
      {
        id: 1,
        name: 'tesssss',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, velit! Dolorum dolore rem odio dicta, error voluptatum quaerat sint eius architecto eveniet nemo quae, asperiores tenetur nulla ut magni fuga?',
      },
      {
        id: 1,
        name: 'tesssss',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, velit! Dolorum dolore rem odio dicta, error voluptatum quaerat sint eius architecto eveniet nemo quae, asperiores tenetur nulla ut magni fuga?',
      },
      
    ],
  },
  {
    name: 'Pack 2',
    items: [
      {
        id: 1,
        name: 'tesssss',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, velit! Dolorum dolore rem odio dicta, error voluptatum quaerat sint eius architecto eveniet nemo quae, asperiores tenetur nulla ut magni fuga?',
      },
      {
        id: 1,
        name: 'tesssss',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, velit! Dolorum dolore rem odio dicta, error voluptatum quaerat sint eius architecto eveniet nemo quae, asperiores tenetur nulla ut magni fuga?',
      },
      
    ],
  },
  // Tambahkan package lain jika diperlukan
];

export default function ContestProblem() {
  return (
    <Card className="container md:mt-0 !z-0 py-8 px-6">
      <h1 className="text-4xl font-bold text-center w-full mb-8">Contest Information</h1>

      <div className="space-y-10 text-black">
        {menuItems.map((section) => (
          <div key={section.name} className="space-y-5">
            <div className="text-xs font-semibold uppercase tracking-wider ">{section.name}</div>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {section.items.map((item) => (
                <Link key={item.id} href="#" className="group block space-y-1.5 rounded-lg  px-5 py-3 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                  <div className="font-medium  group-hover:text-gray-50">{item.name}</div>
                  {item.description ? <div className="line-clamp-3 text-sm  group-hover:text-gray-300">{item.description}</div> : null}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
