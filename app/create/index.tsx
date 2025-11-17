import { useEffect } from 'react';

import { Text, View } from 'react-native';

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'expo-router';

import { CreateUserForm } from '@organisms';
import { useCreateUser } from '@hooks';

import type { IUserItemProps } from '@interfaces';

const CreatePage = () => {
	const router = useRouter();

	const form = useForm();

	const { mutate, isSuccess, isError, isPending } = useCreateUser();

	const hdlSubmit: SubmitHandler<IUserItemProps> = data => mutate(data);

	const hdlReset = () => form.reset();

	useEffect(() => {
		if (isSuccess) router.replace('/');
	}, [isSuccess]);

	return (
		<View style={{ gap: 24, flex: 1 }}>
			<Text style={{ fontSize: 28 }}>Formulario de Registro</Text>
			<FormProvider {...form}>
				<CreateUserForm onSubmit={hdlSubmit} onReset={hdlReset} isLoading={isPending} isError={isError} />
			</FormProvider>
		</View>
	);
};

export default CreatePage;
