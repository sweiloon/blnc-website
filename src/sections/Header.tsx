'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";

import { navItems } from '@/constants';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs'
import MobileNav from "@/components/MobileNav";

import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import toast from 'react-hot-toast';


export const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { user } = useUser()

  useEffect(() => {
    if (user) {
      toast.success(`Sign in successful`)
    }
  }, [user])

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-start py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={140} width={140} />
            <button className="md:hidden" onClick={toggleMobileNav}> <MenuIcon className="h-5 w-5" /></button>
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
                <a href="https://forms.gle/3f27KFXQ6PTaxkLF7">
                  <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500"> Maha</button>
                </a>
              <SignedOut>
                <a href="/sign-in">
                  <button className="btn btn-primary"> Sign In</button>
                </a>
              </SignedOut>
              <SignedIn>
                <UserButton showName={true} />
              </SignedIn>
            </nav>
          </div>
        </div>
      </div>
      {isMobileNavOpen && <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />}
    </header>
  );
};
