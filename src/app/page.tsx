import Image from 'next/image';
import React from "react"
import Home from '../components/Home';

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between ">
      <Home />
    </div>
  );
}
