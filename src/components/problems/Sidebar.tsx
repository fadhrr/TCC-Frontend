"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Card, CardContent } from "@/components/problems/Card";
import { Label } from "@/components/ui/label";

export default function Sidebar({ slug }) {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // Ubah angka 768 sesuai dengan lebar piksel yang dianggap sebagai desktop
    };

    handleResize(); // Panggil fungsi handleResize() untuk mengatur nilai awal saat komponen dimuat

    window.addEventListener('resize', handleResize); // Tambahkan event listener untuk menangani perubahan ukuran layar

    return () => {
      window.removeEventListener('resize', handleResize); // Bersihkan event listener saat komponen tidak lagi digunakan
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    if (showMenu) {
      setShowMenu(false);
    }
  };

  // Function to tokenize the URL until the "submission" part
  const tokenizeUntilSubmission = (url) => {
    const tokens = url.split("/");
    const submissionIndex = tokens.indexOf("submissions");
    if (submissionIndex !== -1) {
      return tokens.slice(0, submissionIndex + 1).join("/");
    }
    return url;
  };

  // Function to determine if a link is active based on tokenization until "submission"
  const isLinkActive = (href) => {
    return tokenizeUntilSubmission(pathname) === tokenizeUntilSubmission(href);
  };

  return (
    <Card>
      <div className="p-2 border-b">
          <Label className="text-lg font-bold">Problem</Label>
        </div>
        <CardContent className="flex flex-col space-y-2">
        <Link
          href={`/problems/${slug}`}
          className={`hover:text-black ${
            isLinkActive(`/problems/${slug}`)
              ? "font-medium"
              : "text-muted-foreground"
          }`}
        >
          Detail
        </Link>
        <Link
          href={`/problems/${slug}/submissions`}
          className={`hover:text-black ${
            isLinkActive(`/problems/${slug}/submissions`)
              ? "font-medium"
              : "text-muted-foreground"
          }`}
        >
          Submissions
        </Link>
      </CardContent>
    </Card>
  );
}
