"use client";
import { signIn } from "@/auth";
import { Button } from "@/components/ui/button/button";

export default function LogIn({ provider }: { provider?: string }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-screen-md w-full px-20 bg-blue-50 mx-auto rounded-lg py-20">
        <h1 className="text-headline-l text-center mb-10">ログイン</h1>
        <div className="flex justify-center">
          <Button variant="ghost" className="bg-grey-600 text-white" onClick={() => signIn()}>ログインする</Button>
        </div>
      </div>
    </div>
  );
}
