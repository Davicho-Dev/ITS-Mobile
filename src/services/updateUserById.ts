import axios from 'axios';

import type { IUserItemProps } from '@interfaces';

export const updateUserById = async (params: IUserItemProps) => {
	const { id, ...rest } = params;

	const { data } = await axios.put(`${process.env.EXPO_PUBLIC_API_URL}/users/${id}`, rest);

	return data;
};
