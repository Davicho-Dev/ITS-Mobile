import { useQuery } from '@tanstack/react-query';

import { getUserById } from '@services';

import type { IUserProps } from '@interfaces';

export const useGetUserById = ({ id }: Pick<IUserProps, 'id'>) => {
	const { data, isError, isLoading } = useQuery({
		queryKey: ['user', id],
		queryFn: async () => getUserById({ id }),
	});

	return { user: data, isError, isLoading };
};
