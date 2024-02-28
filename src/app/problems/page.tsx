'use client';
import React, { useEffect, useState } from 'react';
import { Headline } from '@/components/ui/headline';
import SectionContainer from '@/Layouts/SectionContainer';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardTitle, CardDescription, CardFooter } from '@/components/problems/Card';
import SearchBar from '@/components/SearchBar';
import PaginationControls from '@/components/PaginationControls';
import Loading from '@/components/problems/ProblemsLoader';

async function getProblems() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/problems`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}


export default function Problems({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  //pagination
  const page = searchParams['page'] ?? '1';
  const perPage = searchParams['per_page'] ?? '5';

  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage);

  
  //Slice problem data
  const entries = problems.slice(start, end);

  // pagination
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProblems();
        setProblems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [searchParams]);

  if (error) {
    console.log(error);
  }

  if (loading) {
    return <Loading />;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = problems.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

  // combines search and pagination features
  const displayedData = searchTerm ? filteredData : entries;

  return (
    <SectionContainer className="container py-8 px-0">
      <Headline
        title="Problem"
        desc=" Welcome to the Contests section, here you will find a variety of exciting contests and challenges that cater to diverse interests and skills. Each contest is designed to test your abilities and knowledge in a specific area."
      />
      <div className="flex justify-start mb-4 gap-4 items-center">
        <SearchBar searchTerm={searchTerm} handleChange={handleChange} />
      </div>
      <div className="flex flex-col pt-10 w-full space-y-4">
        {displayedData.map((problem, index) => (
          <Link key={index} href={`/problems/${problem.id}`}>
            <Card>
              <CardContent>
                <CardTitle>{problem.title}</CardTitle>
                <CardDescription>{problem.description}</CardDescription>
                <CardFooter>
                  {problem.categories.map((category, index) => (
                    <Badge key={index} variant={category.id}>
                      {category.name}
                    </Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </Link>
        ))}
        <PaginationControls hasNextPage={end < problems.length} hasPrevPage={start > 0} problems={problems} />
      </div>
    </SectionContainer>
  );
}
