"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const email = e.target[0].value;
    const username = e.target[1].value;
    const nim = e.target[2].value;
    const password = e.target[3].value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        if (user) {
          await updateProfile(user, {
            displayName: username,
          });

          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user`,
            {
              method: "POST",
              body: JSON.stringify({
                id: user.uid,
                name: user.displayName,
                nim: `${nim}`,
                score: 0,
                email: user.email,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        }
        router.push("/auth/signin");
      })
      .catch((error) => {
        setLoading(false);
        alert(`${error.message}`);
      });
  };

  return (
    <div className="h-screen">
      <div className="container mx-auto">
        <div className="mx-auto max-w-[525px]">
          <p className="text-4xl font-bold w-full mb-8">Sign up</p>
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="mb-[22px]">
              <Input required type="email" placeholder="Email" />
            </div>
            <div className="mb-[22px]">
              <Input required type="text" placeholder="Username" />
            </div>
            <div className="mb-[22px]">
              <Input required type="text" placeholder="NIM" />
            </div>
            <div className="mb-[22px]">
              <Input required type="password" placeholder="Password" />
            </div>
            <div className="space-y-2">
              <Button disabled={loading} type="submit" className="w-full">
                Sign Up
              </Button>
            </div>
          </form>

          <p className="text-body-secondary text-base">
            Already join member?{" "}
            <Link
              href="/auth/signin"
              className="text-slate-800 hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
