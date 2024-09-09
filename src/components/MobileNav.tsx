'use client'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { navItems } from '@/constants';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
          <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none">
          </SheetClose>
        </SheetHeader>
        <nav className="flex flex-col px-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="px-6 py-4 mt-auto border-t">
          <SignedOut>
            <Link href="/sign-in" onClick={onClose}>
              <button className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
                Sign In
              </button>
            </Link>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Your Account</span>
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav