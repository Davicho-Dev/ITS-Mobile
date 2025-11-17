import { Text, View } from 'react-native';

import { useLocalSearchParams, useRouter } from 'expo-router';

import { ButtonSolid, Separator } from '@atoms';
import { useDeleteUserById, useGetUserById } from '@hooks';
import { Error, Loading } from '@molecules';
import { useEffect } from 'react';

const UserByIdPage = () => {
	const router = useRouter();

	const { id } = useLocalSearchParams();

	const userId = typeof id === 'string' ? id : id[0];

	const { user, isLoading, isError } = useGetUserById({ id: userId });

	const { mutate, isPending, isSuccess } = useDeleteUserById({ id: userId });

	useEffect(() => {
		if (isSuccess) router.push('/');
	}, [isSuccess]);

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
				<ButtonSolid variant='secondary' onPress={() => router.navigate(`/users/${userId}/edit`)}>
					Editar
				</ButtonSolid>
				<ButtonSolid variant='danger' onPress={() => mutate({ id: userId })}>
					{isPending ? 'Eliminando...' : 'Eliminar'}
				</ButtonSolid>
			</View>
		</View>
	);
};

export default UserByIdPage;
