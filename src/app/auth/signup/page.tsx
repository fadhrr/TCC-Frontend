"use client";

import { Input } from "@/components/ui/input";
import { auth, googleProvider } from "@/lib/firebase-config";
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const signInWithGoogle = async () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        router.push("/auth/signin");
        console.log("Sign Up successfully");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

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
        }
        router.push("/auth/signin");
        console.log("Sign Up successfully");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className="bg-[#F4F7FF] h-screen py-12">
      <div className="container mx-auto">
        <div className="mx-auto max-w-[525px] rounded-xl bg-white px-8 py-16 shadow-sm">
          <p className="text-4xl font-bold w-full mb-8">Sign up</p>
          <form className="">
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
          <span className="relative my-4 block text-center text-slate-800">Connect With</span>
          <Button
            onClick={signInWithGoogle}
            className="flex h-11 w-full mb-8 gap-2 items-center justify-center rounded-md bg-[#D64937] text-white transition hover:bg-[#ff5858]"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8477 8.17132H9.29628V10.643H15.4342C15.1065 14.0743 12.2461 15.5574 9.47506 15.5574C5.95916 15.5574 2.8306 12.8821 2.8306 9.01461C2.8306 5.29251 5.81018 2.47185 9.47506 2.47185C12.2759 2.47185 13.9742 4.24567 13.9742 4.24567L15.7024 2.47185C15.7024 2.47185 13.3783 0.000145544 9.35587 0.000145544C4.05223 -0.0289334 0 4.30383 0 8.98553C0 13.5218 3.81386 18 9.44526 18C14.4212 18 17.9967 14.7141 17.9967 9.79974C18.0264 8.78198 17.8477 8.17132 17.8477 8.17132Z"
                fill="white"
              />
            </svg>
            Google
          </Button>
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