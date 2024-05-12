"use client";
import { handleLogout } from "@/utils/lib/auth";
import { useRouter } from "next/navigation";
import { useCurrentUser, useProtectedRoute } from "../../utils/lib/hooks";

export default function Dashboard() {
  useProtectedRoute();
  const user = useCurrentUser();
  const router = useRouter();

  return (
    <main className="min-h-screen">
      {user ? (
        <div>
          <h1>Protected Page</h1>
          <button
            onClick={async () => {
              await handleLogout();
              router.push("/login");
            }}
          >
            Log out
          </button>
        </div>
      ) : (
        <h1>Redirecting to login...</h1>
      )}
    </main>
  );
}
