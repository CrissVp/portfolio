import { Resend } from 'resend';

const API_KEY = import.meta.env.RESEND_API_KEY;
const resend = new Resend(API_KEY);

interface MAIL_FIELDS {
	name: string;
	email: string;
	message: string;
}

export const sendEmail = async ({ name, email, message }: MAIL_FIELDS) => {
	const html = `
          <div>
            <p><strong>Name: </strong>${name}</p>
            <p><strong>Email: </strong>${email}</p>
            <p><strong>Message: </strong>${message}</p>
          </div>`;

	const { data, error } = await resend.emails.send({
		from: 'Acme <onboarding@resend.dev>',
		to: ['crissvph@gmail.com'],
		subject: 'Portfolio Email',
		html
	});

	if (error) throw new Error(error.message);
	return data;
};
