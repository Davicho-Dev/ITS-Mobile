import type { SubmitHandler } from 'react-hook-form';

import type { IUserItemProps } from '@interfaces';

interface IEditUserFormProps {
	onSubmit: SubmitHandler<IUserItemProps>;
	isLoading?: boolean;
	isError?: boolean;
}

export type { IEditUserFormProps };
