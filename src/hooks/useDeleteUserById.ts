import { IUserProps } from '@interfaces';
import { useMutation } from '@tanstack/react-query';
import { deleteUserById } from '@services';

export const useDeleteUserById = ({ id }: Pick<IUserProps, 'id'>) => {
	const deleteUser = useMutation({
		mutationFn: deleteUserById,
		mutationKey: ['users', 'user', id],
	});

	return { ...deleteUser };
};
