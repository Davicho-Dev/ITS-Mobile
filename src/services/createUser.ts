import axios from 'axios';

import type { IUserItemProps } from '@interfaces';

export const createUser = async (payload: IUserItemProps) => {
	const { data } = await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/users`, payload);

	return data;
};
