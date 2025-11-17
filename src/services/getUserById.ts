import axios from 'axios';

import type { IUserProps } from '@interfaces';

export const getUserById = async ({ id }: Pick<IUserProps, 'id'>) => {
	const { data } = await axios.get<IUserProps>(`${process.env.EXPO_PUBLIC_API_URL}/users/${id}`);

	return data;
};
