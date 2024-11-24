import type { JSXInternal } from 'node_modules/preact/src/jsx';
import { actions, isInputError } from 'astro:actions';
import type { I18N_TYPES } from 'src/types/i18n';
import { useState } from 'preact/hooks';

import MailSent from '@components/UI/MessageSent';
import styles from '@styles/contact.module.css';

interface FormInputs {
	name: { value: string };
	email: { value: string };
	message: { value: string };
}

interface InputErrors {
	message?: string[];
	name?: string[];
	email?: string[];
	other?: boolean;
}

export default function Contact({ i18n }: { i18n: I18N_TYPES['CONTACT_SECTION'] }) {
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState<InputErrors>({});

	const handleSubmit = async (e: JSXInternal.TargetedSubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		const form = e.currentTarget as typeof e.currentTarget & FormInputs;
		const formData = new FormData(form);

		const { error } = await actions.sendEmail(formData);

		if (error) {
			setLoading(false);

			if (isInputError(error)) {
				return setErrors(error.fields);
			}

			return setErrors({ other: true });
		}

		setSuccess(true);
	};

	const inputFocus = (
		e: JSXInternal.TargetedFocusEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name } = e.currentTarget;
		setErrors({ ...errors, [name]: undefined });
	};

	if (success) return <MailSent notificationText={i18n.NOTIFICATION} />;

	return (
		<form id='form' onSubmit={handleSubmit} method='POST' class={`reveal_animation ${styles.form}`}>
			{errors.other && <p>{i18n.ERROR}</p>}

			<div class={`${styles.form__input} ${errors.name ? styles['form__input--error'] : ''}`}>
				<input onFocus={inputFocus} required type='text' id='name' name='name' placeholder='name' />
				<label for='name'>
					{i18n.NAME_INPUT.TITLE}
					{errors.name && <span> - {i18n.NAME_INPUT[errors.name[0]]}</span>}
				</label>
			</div>

			<div class={`${styles.form__input} ${errors.email ? styles['form__input--error'] : ''}`}>
				<input
					required
					type='email'
					id='email'
					name='email'
					placeholder='email'
					onFocus={inputFocus}
				/>
				<label for='email'>
					{i18n.EMAIL_INPUT.TITLE}
					{errors.email && <span> - {i18n.EMAIL_INPUT[errors.email[0]]}</span>}
				</label>
			</div>

			<div class={`${styles.form__input} ${errors.message ? styles['form__input--error'] : ''}`}>
				<textarea
					required
					id='message'
					name='message'
					placeholder='message'
					onFocus={inputFocus}
				></textarea>
				<label for='message'>
					{i18n.MESSAGE_INPUT.TITLE}
					{errors.message && <span> - {i18n.MESSAGE_INPUT[errors.message[0]]}</span>}
				</label>
			</div>

			<button disabled={loading} type='submit'>
				{loading ? <div className={styles.loader}></div> : i18n.BUTTON_TEXT}
			</button>
		</form>
	);
}
