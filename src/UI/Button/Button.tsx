import { HTMLAttributes } from 'react';
import clsx from 'clsx';
import './Button.scss';

export default function Button(props: HTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			{...props}
			className={clsx('button', props.className)}
		>
			{props.children}
		</button>
	);
}
