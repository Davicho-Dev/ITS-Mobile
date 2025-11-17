import axios from 'axios';

import type { IUsersProps } from '@interfaces';

export const getUserList = async () => {
	const { data } = await axios.get<IUsersProps>(`${process.env.EXPO_PUBLIC_API_URL}/users`);

	return data;
};
