import { useMutation } from '@tanstack/react-query';

import { updateUserById } from '@services';

import type { IUserProps } from '@interfaces';

export const useUpdateUserById = ({ id }: Pick<IUserProps, 'id'>) => {
	const updateUser = useMutation({
		mutationFn: updateUserById,
		mutationKey: ['users', 'user', id],
	});

	return { ...updateUser };
};
