import { useAuthContext } from "@/context/AuthContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import postRequest from "../handleRequest/PostRequest";

const usePostData = (url, mutationKeys, invalidateQueryKey) => {
  const { token } = useAuthContext();

  const queryClient = useQueryClient();
  const [requestData, setRequestData] = useState(null);

  const mutation = useMutation({
    mutationKey: mutationKeys,

    mutationFn: async ({ data }) => {
      setRequestData(data);
      return postRequest(url, data, token);
    },

    onSuccess: (data) => {
      const successMessage = data?.data?.message || "Success!";

      const invalidateKeys = Array.isArray(invalidateQueryKey)
        ? invalidateQueryKey
        : [invalidateQueryKey];

      invalidateKeys.forEach((key) => {
        queryClient.invalidateQueries({ queryKey: [key] });
      });

      console.log(data);

      return { successMessage };
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.message || "Something went wrong";
      return { errorMessage };
    },
  });

  return {
    requestData,
    ...mutation,
  };
};

export default usePostData;
