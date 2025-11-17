import type { FC } from 'react';

import { FlatList, Text, View } from 'react-native';

import Feather from '@expo/vector-icons/Feather';

import { UserItem } from '@molecules';
import { Separator } from '@atoms';
import { colors } from '@utils';

import type { IUserListProps } from './UserList.interfaces';

export const UserList: FC<IUserListProps> = ({ users }) => {
	if (users?.length === 0 || !users) {
		return (
			<View
				style={{
					alignItems: 'center',
					borderColor: colors.lightGray,
					borderRadius: 6,
					borderWidth: 1,
					flex: 1,
					gap: 16,
					justifyContent: 'center',
				}}
			>
				<Feather name='alert-circle' size={54} color={colors.darkGray} />
				<Text style={{ color: colors.darkGray, fontFamily: 'inter_600', fontSize: 30 }}>Lo sentimos!</Text>
				<Text style={{ color: colors.darkGray }}>No hay usuarios disponibles</Text>
			</View>
		);
	}

	return (
		<View>
			<FlatList
				data={users}
				renderItem={({ item }) => <UserItem key={item.id} {...item} />}
				ItemSeparatorComponent={() => <Separator />}
				style={{
					flexGrow: 0,
					borderWidth: 1,
					borderColor: colors.lightGray,
					borderRadius: 6,
				}}
			/>
		</View>
	);
};
