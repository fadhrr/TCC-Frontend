// Headline.tsx
import React from 'react';

interface HeadlineProps {
  title: string;
  desc: string;
}

const Headline: React.FC<HeadlineProps> = ({ title, desc }) => {
  return (
    <>
      <h1 className="text-3xl font-semibold text-black capitalize lg:text-4xl ">
        <span className="underline decoration-blue-500">{title}</span>
      </h1>
      <p className="mt-4 w-full lg:w-3/5 text-black xl:mt-6 ">{desc}</p>
    </>
  );
};

export default Headline;
