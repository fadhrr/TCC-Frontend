"use client";

import { Input } from "@/components/ui/input";
import { auth } from "@/lib/firebase-config";
import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        router.push("/");
        console.log("Sign Up successfully");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="bg-[#F4F7FF] h-screen py-12">
      <div className="container mx-auto">
        <nav className="mx-auto max-w-[525px] rounded-xl bg-white px-8 py-16 shadow-sm">
          <p className="text-4xl font-bold w-full mb-8">Log In</p>
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
                type="password"
                placeholder="Password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-stroke bg-transparent px-5 py-5  text-base text-dark outline-none transition placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white dark:focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <button
                type="submit"
                onClick={onSubmit}
                className="w-full cursor-pointer rounded-md border border-primary bg-primary py-3  text-base text-white transition duration-300 ease-in-out hover:bg-slate-800"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="text-body-secondary text-base">
            Not a member yet?{" "}
            <Link
              href="/auth/signup"
              className="text-slate-800 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </nav>
      </div>
    </div>
  );
}
