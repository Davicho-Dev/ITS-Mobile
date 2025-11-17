import type { FC } from 'react';

import { Text, TouchableOpacity } from 'react-native';

import { Controller } from 'react-hook-form';
import { Fontisto } from '@expo/vector-icons';

import type { FieldValues } from 'react-hook-form';

import { colors } from '@utils';

import type { IFormCheckboxProps } from './FormCheckbox.interfaces';

import { styles } from './FormCheckbox.styles';

export const FormCheckbox = <T extends FieldValues>({ label, control, name, rules }: IFormCheckboxProps<T>) => {
	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({ field: { value, onChange } }) => (
				<TouchableOpacity style={styles.container} onPress={() => onChange(!value)}>
					<Fontisto
						name={value ? 'checkbox-active' : 'checkbox-passive'}
						size={16}
						color={value ? colors.primary : colors.darkGray}
					/>
					<Text style={styles.label}>{label}</Text>
				</TouchableOpacity>
			)}
		/>
	);
};
