import type { FC } from 'react';

import { TextInput } from 'react-native';

import { colors } from '@utils';

import type { IFormInputSearchProps } from './FormInputSearch.interfaces';

import { styles } from './FormInputSearch.styles';

export const FormInputSearch: FC<IFormInputSearchProps> = props => {
	return <TextInput style={styles} placeholderTextColor={colors.darkGray} {...props} />;
};
