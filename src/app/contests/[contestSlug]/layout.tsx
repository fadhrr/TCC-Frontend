'use client';
import Sidebar from '@/components/Contest/Sidebar';
import { useEffect, useState } from 'react';
import { AuthContextProvider } from '@/context/AuthContext';

async function getId(contestId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contest/s/${contestId}`
  );
  if (res.status == 404) {
    return res.status;
  }
  if (!res.ok) {
    throw new Error("Failed to fetch score memory data");
  }
  return res.json();
}

export default function ContestLayout({ children, params }) {
  const [open, setOpen] = useState(true);
  const [contestId, setContestId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contestObj = await getId(params.contestSlug);
        setContestId(contestObj.id);
      } catch (error) {

      } finally {
      }
    };
    fetchData();
  }, [params.contestSlug]);

  return (
    <AuthContextProvider>

      <div className="container flex md:flex-row flex-col mx-auto md:my-8 md:space-x-4">
        <div className="h-max min-w-80 space-y-4">
          <Sidebar slug={params.contestSlug} open={open}/>
        </div>
        {children}
      </div>
    </AuthContextProvider>
  );
}
