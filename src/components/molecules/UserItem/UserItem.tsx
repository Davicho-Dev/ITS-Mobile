import type { FC } from 'react';

import { Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';

import { colors } from '@utils';

import type { IUserProps } from '@interfaces';

export const UserItem: FC<IUserProps> = ({ id, name, email, isActive, phone, address }) => {
	return (
		<Link
			href={{
				pathname: '/users/[id]',
				params: {
					id,
				},
			}}
			style={{
				padding: 10,
			}}
		>
			<View
				style={{
					width: '100%',
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<View style={{ columnGap: 4, flexGrow: 1 }}>
					<Text style={{ fontFamily: 'inter_500' }}>Nombre: {name}</Text>
					<Text style={{ fontFamily: 'inter_500' }}>Email: {email}</Text>
					<Text style={{ fontFamily: 'inter_500' }}>Teléfono: {phone ?? 'N/A'}</Text>
					<Text style={{ fontFamily: 'inter_500' }}>Dirección: {address ?? 'N/A'}</Text>
					<Text style={{ fontFamily: 'inter_500', color: isActive ? 'green' : 'red' }}>
						{isActive ? 'Activo' : 'Inactivo'}
					</Text>
				</View>
				<View style={{ flexGrow: 0, flexShrink: 0 }}>
					<AntDesign name='right' size={16} color={colors.darkGray} />
				</View>
			</View>
		</Link>
	);
};
