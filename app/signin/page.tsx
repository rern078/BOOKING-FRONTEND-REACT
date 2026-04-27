import * as React from "react";
import { SignInClient } from "./SignInClient";

export default function SignInPage() {
  return (
    <React.Suspense fallback={<div className="px-6 py-10" />}>
      <SignInClient />
    </React.Suspense>
  );
}

