import { endPoints } from "@/config/endPoints";
import { queryKeys } from "@/config/queryKes";
import { useAuthContext } from "@/context/AuthContext";
import usePostData from "@/hooks/curdsHook/usePostData";
import { setAuthCookie } from "@/services/cookies";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const { setToken, setUser } = useAuthContext();
  const [errorMsg, setErrorMsg] = useState(null);

  const { mutate, data, error, isPending, isSuccess, isError } = usePostData(
    endPoints.login,
    [queryKeys.login],
    [queryKeys.login, queryKeys.profile]
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess && data) {
      setAuthCookie(data?.data?.data?.token);
      setToken(data?.data?.data?.token);
      setUser(data?.data?.user);
    }

    if (isError && error) {
      setErrorMsg(error?.response?.data?.errors[0]);
    }
  }, [data, isSuccess, isError, error, navigate, setToken, setUser]);

  return {
    mutate,
    data,
    error,
    isPending,
    isSuccess,
    isError,
    errorMsg,
  };
};

export default useLogin;
