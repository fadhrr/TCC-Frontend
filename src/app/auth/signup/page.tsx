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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [nim, setNim] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed up
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
          // Check if the request was successful (status code 2xx)
          if (res.ok) {
            const data = await res.json();
            console.log(data.status)
          }
        }        
        router.push("/auth/signin");
        // ...
      })
      .catch((error) => {
        throw new Error(`${error.code}${error.message}`);
      });
  };

  return (
    <div className="bg-[#F4F7FF] h-screen py-12">
      <div className="container mx-auto">
        <div className="mx-auto max-w-[525px] rounded-xl bg-white px-8 py-16 shadow-sm">
          <p className="text-4xl font-bold w-full mb-8">Sign up</p>
          <form className="mb-8">
            <div className="mb-[22px]">
              <Input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-md border border-stroke bg-transparent px-5 py-5  text-base text-dark outline-none transition placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white dark:focus:border-primary"
              />
            </div>
            <div className="mb-[22px]">
              <Input
                type="text"
                placeholder="Username"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full rounded-md border border-stroke bg-transparent px-5 py-5 text-base text-dark outline-none transition placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white dark:focus:border-primary"
              />
            </div>
            <div className="mb-[22px]">
              <Input
                type="text"
                placeholder="NIM"
                name="nim"
                id="nim"
                value={nim}
                onChange={(e) => setNim(e.target.value)}
                required
                className="w-full rounded-md border border-stroke bg-transparent px-5 py-5 text-base text-dark outline-none transition placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white dark:focus:border-primary"
              />
            </div>
            <div className="mb-[22px]">
              <Input
                type="password"
                placeholder="Password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white dark:focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Button
                type="submit"
                onClick={onSubmit}
                className="h-11 w-full cursor-pointer rounded-md border border-primary bg-primary text-base text-white transition duration-300 ease-in-out hover:bg-slate-500"
              >
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
