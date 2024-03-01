'use client';
import ScoreboardLayout from '@/Layouts/ScoreboardLayout';
import { Card } from '@/components/problems/Card';

const Scoreboard = () => {
  return (
    <Card className="w-full container md:mt-0 !z-0 py-8 px-6">
      <h1 className="text-3xl font-bold font-lato">The final round of who will be the Sepuh</h1>
      <ScoreboardLayout />
    </Card>
  );
};

export default Scoreboard;
