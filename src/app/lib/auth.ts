import { googleAuthProvider } from "@/app/firebase/authProviders/googleAuthProvider";
import { auth } from "@/app/firebase/config";
import { signInWithPopup } from "firebase/auth";

export async function handleGoogleLogin() {
	try {
		const result = await signInWithPopup(auth, googleAuthProvider);
		console.log(result);
		return result.user;
	} catch (error) {
		throw error;
	}
}

export async function handleLogout() {
	try {
		await auth.signOut();
	} catch (error) {
		throw error;
	}
}
