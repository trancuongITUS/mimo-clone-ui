"use client";
import { handleLogout } from "@/app/lib/auth";
import { useCurrentUser, useProtectedRoute } from "@/app/lib/hooks";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default function ProtectedRouter({ children }: Props) {
  useProtectedRoute();
  const user = useCurrentUser();

  return (
    <main>{user ? <>{children}</> : <h1>Redirecting to login...</h1>}</main>
  );
}
