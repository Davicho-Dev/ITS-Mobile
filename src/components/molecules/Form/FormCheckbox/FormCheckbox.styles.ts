import { StyleSheet } from 'react-native';

import { colors } from '@utils';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		columnGap: 8,
		alignItems: 'center',
	},
	label: {
		fontSize: 16,
		color: colors.darkGray,
	},
});
