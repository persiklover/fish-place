import { HTMLAttributes } from 'react';
import clsx from 'clsx';
import './Button.scss';

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
	variant?: 'default' | 'pale';
};

export default function Button(props: ButtonProps) {
	return (
		<button
			{...props}
			className={clsx('button', props.variant === 'pale' && 'pale', props.className)}
		>
			{props.children}
		</button>
	);
}
