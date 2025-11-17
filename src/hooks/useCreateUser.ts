import { useMutation } from '@tanstack/react-query';
import { createUser } from '@services';

export const useCreateUser = () => {
	const { mutate, isSuccess, isError, isPending } = useMutation({ mutationFn: createUser, mutationKey: ['users'] });

	return { mutate, isSuccess, isPending, isError };
};
