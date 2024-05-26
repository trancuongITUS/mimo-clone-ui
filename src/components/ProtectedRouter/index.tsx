"use client";
import { useCurrentUser, useProtectedRoute } from "@/app/lib/hooks";

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
