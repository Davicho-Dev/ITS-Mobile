import { useEffect } from 'react';

import type { FC } from 'react';

import { View, Text } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { FormProvider, useForm } from 'react-hook-form';

import type { SubmitHandler } from 'react-hook-form';

import { Error, Loading } from '@molecules';
import { EditUserForm } from '@organisms';
import { useGetUserById, useUpdateUserById } from '@hooks';

import type { IUserItemProps } from '@interfaces';

const EditUserPage: FC = () => {
	const router = useRouter();

	const { id } = useLocalSearchParams();

	const userId = typeof id === 'string' ? id : id[0];

	const { user, isError, isLoading } = useGetUserById({ id: userId });

	const { mutate, isSuccess, isPending } = useUpdateUserById({ id: userId });

	const hdlSubmit: SubmitHandler<IUserItemProps> = data => mutate(data);

	const form = useForm<IUserItemProps>({
		defaultValues: {
			id: user?.id || '',
			name: user?.name || '',
			email: user?.email || '',
			phone: user?.phone || '',
			address: user?.address || '',
		},
	});

	useEffect(() => {
		if (isSuccess) router.push(`/users/${id}`);
	}, [isSuccess]);

	if (isLoading) return <Loading />;

	if (isError) return <Error />;

	return (
		<View style={{ gap: 24, flex: 1 }}>
			<Text style={{ fontFamily: 'inter_6 00', fontSize: 26 }}>Formulario de Edición</Text>
			<FormProvider {...form}>
				<EditUserForm onSubmit={hdlSubmit} isLoading={isPending} isError={isError} />
			</FormProvider>
		</View>
	);
};

export default EditUserPage;
