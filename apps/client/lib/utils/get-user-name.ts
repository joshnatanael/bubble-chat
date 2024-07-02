import { UserModel } from "@/redux/slices";

export const getUserName = (user?: UserModel) => {
  if (!user) return "";
  if (!user.firstName && !user.lastName) return user.email;
  if (!user.lastName && user.firstName) return user.firstName;
  return `${user.firstName} ${user.lastName}`;
};
