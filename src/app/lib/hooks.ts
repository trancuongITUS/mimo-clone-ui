import { auth } from "@/utils/firebase/config";
import { AUTH_TOKEN_LOCAL_STORAGE_KEY } from "@/utils/constant";
import { User, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchUserInfo } from "@/utils/lib/userInfo";
import { UserRole } from "@/utils/types";

export const useProtectedRoute = () => {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        localStorage.removeItem(AUTH_TOKEN_LOCAL_STORAGE_KEY);
        // User is not authenticated, redirect to '/login'
        router.push("/login");
      } else {
        user.getIdToken().then((token) => {
          localStorage.setItem(AUTH_TOKEN_LOCAL_STORAGE_KEY, token);
        });
      }
    });

    return unsubscribe; // Unsubscribe from the auth state change observer when the component unmounts
  }, [router]);
};

export const useProtectedAdminRoute = () => {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        localStorage.removeItem(AUTH_TOKEN_LOCAL_STORAGE_KEY);
        // User is not authenticated, redirect to '/login'
        router.push("admin/login");
      } else {
        fetchUserInfo(user.uid).then((user) => {
          if (user?.role !== UserRole.ADMIN) {
            router.push("admin/login");
          }
        });
        user.getIdToken().then((token) => {
          localStorage.setItem(AUTH_TOKEN_LOCAL_STORAGE_KEY, token);
        });
      }
    });

    return unsubscribe; // Unsubscribe from the auth state change observer when the component unmounts
  }, [router]);
};
export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe; // Unsubscribe from the auth state change observer when the component unmounts
  }, []);

  return currentUser;
};
