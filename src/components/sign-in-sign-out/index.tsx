"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function SignInSignOut() {
  const { data: session } = useSession();

  if (session) {
    return (
      <button
        type="button"
        onClick={() => signOut()}
        className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
      >
        <span className="text-lg">👋</span>
        Sign out
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => signIn("google")}
      className="inline-flex items-center gap-3 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
    >
      <span className="text-lg">🔐</span>
      Sign in with Google
    </button>
  );
}
