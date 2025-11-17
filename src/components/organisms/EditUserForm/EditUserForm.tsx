import type { FC } from 'react';

import { useFormContext } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

import { ButtonSolid } from '@atoms';
import { FormInput } from '@molecules';

import type { IUserProps } from '@interfaces';

import type { IEditUserFormProps } from './EditUserForm.interfaces';

export const EditUserForm: FC<IEditUserFormProps> = ({ isLoading, onSubmit, isError }) => {
	const {
		control,
		formState: { errors },
		handleSubmit,
	} = useFormContext<IUserProps>();

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			keyboardVerticalOffset={130}
			style={{ flexGrow: 1 }}
		>
			<View style={{ flexGrow: 1, rowGap: 24 }}>
				<FormInput
					label='Nombre'
					name='name'
					placeholder='Nombre'
					control={control}
					hasError={!!errors.name}
					errorMessage={errors.name?.message}
					rules={{
						required: {
							value: true,
							message: 'Este campo es requerido',
						},
						minLength: {
							value: 5,
							message: 'Mínimo 5 caracteres',
						},
						maxLength: {
							value: 50,
							message: 'Máximo 50 caracteres',
						},
					}}
				/>
				<FormInput
					label='Email'
					name='email'
					placeholder='Email'
					control={control}
					hasError={!!errors.email}
					errorMessage={errors.email?.message}
					rules={{
						required: {
							value: true,
							message: 'Este campo es requerido',
						},
						minLength: {
							value: 10,
							message: 'Mínimo 10 caracteres',
						},
						maxLength: {
							value: 100,
							message: 'Máximo 100 caracteres',
						},
					}}
				/>
				<FormInput
					label='Teléfono'
					name='phone'
					placeholder='Teléfono'
					control={control}
					hasError={!!errors.phone}
					errorMessage={errors.phone?.message}
					rules={{
						minLength: {
							value: 7,
							message: 'Mínimo 7 caracteres',
						},
						maxLength: {
							value: 12,
							message: 'Máximo 12 caracteres',
						},
					}}
				/>
				<FormInput
					label='Dirección'
					name='address'
					placeholder='Dirección'
					control={control}
					hasError={!!errors.address}
					errorMessage={errors.address?.message}
					rules={{
						minLength: {
							value: 5,
							message: 'Mínimo 5 caracteres',
						},
						maxLength: {
							value: 100,
							message: 'Máximo 100 caracteres',
						},
					}}
				/>
			</View>
			<View style={{ rowGap: 8 }}>
				<ButtonSolid onPress={handleSubmit(onSubmit)}>{isLoading ? 'Loading...' : 'Enviar'}</ButtonSolid>
			</View>
		</KeyboardAvoidingView>
	);
};
