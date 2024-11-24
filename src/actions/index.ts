import { ActionError, defineAction } from 'astro:actions';
import { sendEmail } from './utils';
import { z } from 'astro:schema';

enum INPUT_ERRORS {
	REQUIRED = 'REQUIRED',
	INVALID = 'INVALID'
}

export const prerender = false;

export const server = {
	sendEmail: defineAction({
		accept: 'form',
		input: z.object({
			name: z.string({ message: INPUT_ERRORS.REQUIRED }).trim().min(5, INPUT_ERRORS.INVALID),
			email: z.string({ message: INPUT_ERRORS.REQUIRED }).email(INPUT_ERRORS.INVALID),
			message: z.string({ message: INPUT_ERRORS.REQUIRED })
		}),
		handler: async ({ name, email, message }) => {
			try {
				return await sendEmail({ name, email, message });
			} catch (error) {
				throw new ActionError({
					code: 'INTERNAL_SERVER_ERROR',
					message: 'Failed to send email. ' + error.message
				});
			}
		}
	})
};
