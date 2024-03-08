"use client";
import React, { useState } from "react";
import Link from "next/link";
import { auth } from "@/lib/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";

export default function SignUp() {
  const router = useRouter();
  const [error, setError] = useState<string | undefined>("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        setLoading(false);
        setError(`${error.message}`);
      });
  };

  return (
    <div className="h-screen">
      <div className="container mx-auto">
        <nav className="mx-auto max-w-[525px] rounded-xlshadow-sm">
          <p className="text-4xl font-bold w-full mb-8">Log In</p>
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="mb-[22px]">
              <Input required type="email" placeholder="Email" />
            </div>
            <div className="mb-[22px]">
              <Input required type="password" placeholder="Password" />
            </div>
            <div className="space-y-2">
              <FormError message={error} />
              <Button disabled={loading} type="submit" className="w-full">
                Sign In
              </Button>
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
