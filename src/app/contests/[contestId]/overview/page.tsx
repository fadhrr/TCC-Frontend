'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ModalSucces } from '@/components/ui/modal';
import Image from 'next/image';
import SectionContainer from '@/Layouts/SectionContainer';
import { Card } from '@/components/Problems/Card';

const articlesData = [
  {
    title: 'Bracket Competion',
    imageUrl: '/images/compete.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, ?',
    details: [
      { label: 'Time', value: 'Saturday, 20 Jan 2024' },
      { label: 'Difficulty', value: 'Hard' },
      { label: 'Author', value: 'Mas Ben' },
      { label: 'Question', value: '50' },
      { label: 'Duration', value: '100' },
    ],
  },
];
export default function ContestDetail() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Card className="container md:mt-0 !z-0 py-8 px-6">
      <h1 className="text-4xl font-bold text-center w-full mb-8">Contest Information</h1>
      {articlesData.map((article, index) => (
        <article key={index} className="group w-full flex-col flex gap-6 mb-8">
          <div className="flex gap-8 justify-center items-center flex-col">
            <Image src={article.imageUrl} width={800} height={600} className="md:h-56 md:w-56 w-full object-cover rounded-md border-2 border-black transition group-hover:grayscale-[50%]" alt="" />
            <div className="w-full flex text-center items-center justify-center flex-col ">
              <a href="#">
                <h3 className="md:text-4xl text-2xl font-reguler text-gray-900">{article.title}</h3>
              </a>
              <p className="mt-2 line-clamp-3 w-4/5  text-sm/relaxed text-gray-500">{article.description}</p>
            </div>
          </div>
          <ul className="list-disc  px-4">
            {article.details.map((detail, index) => (
              <li key={index}>
                {detail.label}: {detail.value}
              </li>
            ))}
          </ul>
        </article>
      ))}
      <Button
        className="w-40"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Join
      </Button>
      {showModal && <ModalSucces setOpenModal={setShowModal} />}
    </Card>
  );
}
