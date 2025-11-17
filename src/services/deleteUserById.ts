import { IUserProps } from '@interfaces';
import axios from 'axios';

export const deleteUserById = async ({ id }: Pick<IUserProps, 'id'>) => {
	const { data } = await axios.delete(`${process.env.EXPO_PUBLIC_API_URL}/users/${id}`);

	return data;
};
