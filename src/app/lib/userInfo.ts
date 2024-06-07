import { db } from "@/utils/firebase/config";
import { UserInfo } from "@/utils/types/user";
import { get, ref, set } from "firebase/database";

export const updateUserInfo = (userId: string, userInfo: UserInfo) => {
  set(ref(db, `users/${userId}`), userInfo);
};

export const fetchUserInfo = async (userId: string) => {
  const snapshot = await get(ref(db, `users/${userId}`));

  return snapshot.val();
};
