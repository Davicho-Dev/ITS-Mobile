import { useQuery } from '@tanstack/react-query';

import { getUserList } from '@services';

export const useGetUserList = () => {
	const { data, isError, isLoading } = useQuery({
		queryKey: ['users'],
		queryFn: async () => getUserList(),
	});

	if (!data?.data) return { users: [], isError, isLoading };

	return { users: data?.data, isError, isLoading };
};
