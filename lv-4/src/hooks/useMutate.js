import {useMutation, useQueryClient} from "react-query";

const useMutate = (action ,queryKey ) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(action, {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });
  return mutation;
};

export default useMutate;

