'use client';
import ScoreboardLayout from '@/Layouts/ScoreboardLayout';

const Scoreboard = () => {
  return (
  <div className="w-full">
    <div className="my-10 pt-[70px] md:pt-[80px]">
      <h1 className="text-3xl font-bold font-lato">The final round of who will be the Sepuh</h1>
      <ScoreboardLayout/>
    </div>
  </div>
  )
};

export default Scoreboard;
