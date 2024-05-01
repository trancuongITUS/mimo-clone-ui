import { UserInfo } from "@/utils/types/user";
import { get, getDatabase, ref, set } from "firebase/database";

const db = getDatabase();

export const updateUserInfo = (userId: string, userInfo: UserInfo) => {
  set(ref(db, `users/${userId}`), userInfo);
};

export const fetchUserInfo = async (userId: string) => {
  const snapshot = await get(ref(db, `users/${userId}`));
  return snapshot.val();
};
