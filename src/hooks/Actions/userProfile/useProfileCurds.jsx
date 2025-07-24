import { endPoints } from "@/config/endPoints";
import { queryKeys } from "@/config/queryKes";
import useGetData from "@/hooks/curdsHook/useGetData";
import usePostData from "@/hooks/curdsHook/usePostData";

export const useGetUserProfile = () => {
  const { data, isPending, isSuccess, refetch } = useGetData(
    endPoints.profile,
    queryKeys.profile,
    [queryKeys.profile]
  );

  return { data, isPending, isSuccess, refetch };
};

export const useUpdateUserProfile = () => {
  const { mutate, data, error, isPending, isSuccess, isError } = usePostData(
    endPoints.updateProfile,
    [queryKeys.updateProfile],
    [queryKeys.updateProfile, queryKeys.profile]
  );

  return { mutate, data, error, isPending, isSuccess, isError };
};
