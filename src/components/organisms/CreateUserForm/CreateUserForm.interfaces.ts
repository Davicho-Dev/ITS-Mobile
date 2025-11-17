import type { SubmitHandler } from 'react-hook-form';

import type { IUserItemProps } from '@interfaces';

interface ICreateUserFormProps {
	onSubmit: SubmitHandler<IUserItemProps>;
	onReset: () => void;
	isLoading?: boolean;
	isError?: boolean;
}

export type { ICreateUserFormProps };
