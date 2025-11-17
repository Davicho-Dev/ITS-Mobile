import { useState } from 'react';

import { Text, View } from 'react-native';

import { FormInputSearch, LinkSolid } from '@atoms';
import { Error, Loading } from '@molecules';
import { UserList } from '@organisms';
import { useGetUserList } from '@hooks';

const UsersPage = () => {
	const { isError, isLoading, users } = useGetUserList();

	// TODO: Implement search functionality
	const [inputValue, setInputValue] = useState<string>('');

	if (isLoading) return <Loading />;

	if (isError) return <Error />;

	return (
		<View style={{ gap: 12, height: '97%', justifyContent: 'space-between' }}>
			<FormInputSearch value={inputValue} onChangeText={setInputValue} placeholder='Search...' />

			<View style={{ flexGrow: 1, gap: 12 }}>
				<UserList users={users} />
			</View>

			<LinkSolid href='/create'>
				<Text>Crear usuario</Text>
			</LinkSolid>
		</View>
	);
};

export default UsersPage;
