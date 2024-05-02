import { auth } from "@/pages/firebase/config";
import { User, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useProtectedRoute = () => {
	const router = useRouter();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (!user) {
				// User is not authenticated, redirect to '/login'
				router.push("/login");
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
