"use client";

import { signIn } from "next-auth/react";

export default function AuthjsPage() {
  return (
    <div>
      <button onClick={() => signIn()}>サインイン</button>
    </div>
  );
}
