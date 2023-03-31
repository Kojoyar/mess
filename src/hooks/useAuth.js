import { useSelector } from "react-redux";

export function useAuth() {
  const { phoneNumber, token, id } = useSelector((state) => state.user);

  return {
    isAuth: !!phoneNumber,
    phoneNumber,
    token,
    id,
  };
}
