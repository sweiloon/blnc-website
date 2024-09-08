"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex h-screen items-center justify-center text-center">
      <div>
        <span className="bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent">
          404
        </span>
        <h2 className="font-heading my-2 text-2xl font-bold">
          Something&apos;s missing
        </h2>
        <p>
          Sorry, the page you are looking for doesn&apos;t exist or has been
          moved.
        </p>
        <div className="mt-8 flex justify-center gap-2">
          <button 
            className="btn btn-primary" 
            onClick={() => router.back()}
          >
            Go back
          </button>
          <button
            className="btn btn-text gap-1" 
            onClick={() => router.push("/")}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}