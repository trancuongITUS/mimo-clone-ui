export enum UserStatus {
  BLOCK = "BLOCK",
  UNLOCK = "UNLOCK",
}
export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

export type UserInfo = {
  status: UserStatus;
  role: UserRole;
  description: string;
};
