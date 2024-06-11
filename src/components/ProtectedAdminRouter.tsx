"use client";
import { useCurrentUser, useProtectedAdminRoute } from "@/app/lib/hooks";

type Props = {
  children: React.ReactNode;
};

export default function ProtectedAdminRouter({ children }: Props) {
  useProtectedAdminRoute();
  const user = useCurrentUser();

  return (
    <main>{user ? <>{children}</> : <h1>Checking auth status...</h1>}</main>
  );
}
