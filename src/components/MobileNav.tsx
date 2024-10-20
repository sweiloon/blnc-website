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
import { SignOutButton } from '@clerk/nextjs'
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  const handleSignOut = async () => {
      onClose(); 
      toast.success("Signed out successfully");
      router.push('/');
  };
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
              onClick={onClose}
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="px-6 py-4 mt-auto border-t">
          <div>
            <a href="https://forms.gle/3f27KFXQ6PTaxkLF7">
              <button className="btn w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 mb-6"> Maha</button>
            </a>
          </div>
          <SignedOut>
            <Link href="/sign-in" onClick={onClose}>
              <button className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
                Sign In
              </button>
            </Link>
          </SignedOut>
          <SignedIn>
            {/* <div className="flex items-center justify-between border-gray-200">
              <span className="text-sm text-gray-600">Your Account</span>
              <div className="flex items-center space-x-2">
                <UserButton showName={true} />
              </div>
            </div> */}

              <div className="flex justify-between">
                <Link href="/user-profile" onClick={onClose}>
                  <button className="w-auto py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
                    View Profile
                  </button>
                </Link>
                <SignOutButton>
                  <button className="w-auto py-2 px-4 bg-red-500 text-white rounded-md hover:bg-primary-dark transition-colors" onClick={handleSignOut}>
                    Sign out
                  </button>
                </SignOutButton>
              </div>
          </SignedIn>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav