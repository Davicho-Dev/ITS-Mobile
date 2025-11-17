import { forwardRef } from 'react';

import { Pressable, Text, View } from 'react-native';

import type { IButtonSolidProps } from './ButtonSolid.interfaces';

import { styles } from './ButtonSolid.styles';

export const ButtonSolid = forwardRef<View, IButtonSolidProps>(
	({ children, variant = 'primary', onPress }: IButtonSolidProps, ref) => {
		if (variant === 'secondary') {
			return (
				<Pressable ref={ref} onPress={onPress} style={[styles.button, styles.secondary]}>
					<Text style={[styles.title, styles.title_secondary]}>{children}</Text>
				</Pressable>
			);
		}

		if (variant === 'third') {
			return (
				<Pressable ref={ref} onPress={onPress} style={[styles.button, styles.third]}>
					<Text style={[styles.title, styles.title_third]}>{children}</Text>
				</Pressable>
			);
		}

		if (variant === 'danger') {
			return (
				<Pressable ref={ref} onPress={onPress} style={[styles.button, styles.danger]}>
					<Text style={[styles.title, styles.title_danger]}>{children}</Text>
				</Pressable>
			);
		}

		return (
			<Pressable ref={ref} onPress={onPress} style={[styles.button, styles.primary]}>
				<Text style={[styles.title, styles.title_primary]}>{children}</Text>
			</Pressable>
		);
	}
);
