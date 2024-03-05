'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/problems/Card';

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

async function getContestProblems(contestId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contest/${1}/problems`
  );
  if (res.status == 404) {
    return res.status;
  }
  if (!res.ok) {
    throw new Error("Failed to fetch score memory data");
  }
  return res.json();
}

export default function ContestProblem({
  params,
}: {
  params: { contestId: string };
}) {
  const [contestProblems, setContestProblems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contestProbsData = await getContestProblems(params.contestId);
        setContestProblems(contestProbsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params.contestId]);

  if (loading || contestProblems == null) {
    return <>Loading</>;
  }

  return (
    <Card className="container md:mt-0 !z-0 py-8 px-6">
      <h1 className="text-4xl font-bold text-center w-full mb-8">Contest Information</h1>

      <div className="space-y-10 text-black">
        {contestProblems.map((section, index) => (
          <div key={index} className="space-y-5">
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

