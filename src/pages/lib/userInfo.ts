import { get, getDatabase, ref, set } from "firebase/database";

const db = getDatabase();

export const updateUserDescription = (userId: string, description: string) => {
  set(ref(db, `users/${userId}/description`), description);
};

export const fetchDescriptionFromDatabase = async (userId: string) => {
  const snapshot = await get(ref(db, `users/${userId}/description`));
  return snapshot.val();
};
