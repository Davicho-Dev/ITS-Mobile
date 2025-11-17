import { Text, View } from 'react-native';

import { useLocalSearchParams } from 'expo-router';

import { ButtonSolid, Separator } from '@atoms';
import { useGetUserById } from '@hooks';
import { Error, Loading } from '@molecules';

const UserByIdPage = () => {
	const { id } = useLocalSearchParams();

	const { user, isLoading, isError } = useGetUserById({ id: id as string });

	if (isLoading) return <Loading />;

	if (isError) return <Error />;

	return (
		<View style={{ flexGrow: 1 }}>
			<View style={{ flexGrow: 1 }}>
				<View
					style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 8, paddingBottom: 8 }}
				>
					<Text style={{ fontSize: 16, fontWeight: 'bold' }}>Nombre: </Text>
					<Text style={{ fontSize: 16 }}> {user?.name}</Text>
				</View>
				<Separator />
				<View
					style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 8, paddingBottom: 8 }}
				>
					<Text style={{ fontSize: 16, fontWeight: 'bold' }}>Email: </Text>
					<Text style={{ fontSize: 16 }}> {user?.email}</Text>
				</View>
				<Separator />
				<View
					style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 8, paddingBottom: 8 }}
				>
					<Text style={{ fontSize: 16, fontWeight: 'bold' }}>Teléfono: </Text>
					<Text style={{ fontSize: 16 }}> {user?.phone ?? 'N/A'}</Text>
				</View>
				<Separator />
				<View
					style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 8, paddingBottom: 8 }}
				>
					<Text style={{ fontSize: 16, fontWeight: 'bold' }}>Dirección: </Text>
					<Text style={{ fontSize: 16 }}> {user?.address ?? 'N/A'}</Text>
				</View>
				<Separator />

				<View
					style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 8, paddingBottom: 8 }}
				>
					<Text style={{ fontSize: 16, fontWeight: 'bold', color: user?.isActive ? 'green' : 'red' }}>
						{user?.isActive ? 'Activo' : 'Inactivo'}
					</Text>
				</View>
			</View>
			<View style={{ flexShrink: 1, rowGap: 8 }}>
				<ButtonSolid variant='secondary'>Editar</ButtonSolid>
				<ButtonSolid variant='danger'>Eliminar</ButtonSolid>
			</View>
		</View>
	);
};

export default UserByIdPage;
