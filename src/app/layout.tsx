import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import logosaas2 from "@/assets/logosaas2.png";

import { ClerkProvider} from "@clerk/nextjs";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Toaster } from "react-hot-toast"

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blnc Tech",
  description: "Template created by Frontend Tribe",
  icons: {
    icon: logosaas2.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      signInFallbackRedirectUrl="/"
      signUpFallbackRedirectUrl="/"
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string}
    >
      <html lang="en" className="relative">
        <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
          {children}
          <ScrollToTopButton />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
