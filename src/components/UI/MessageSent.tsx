import styles from '@styles/contact.module.css';

export default function MailSent({ notificationText }: { notificationText: string }) {
	return (
		<div className={styles.sent_message}>
			<p>{notificationText}</p>

			<svg width='80px' height='80px' viewBox='0 0 24 24'>
				<mask id='lineMdEmailCheckTwotone0'>
					<g
						fill='none'
						stroke='#fff'
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='2'
					>
						<path
							stroke-dasharray='64'
							stroke-dashoffset='64'
							d='M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z'
						>
							<animate fill='freeze' attributeName='stroke-dashoffset' dur='0.48s' values='64;0' />
						</path>
						<path stroke-dasharray='24' stroke-dashoffset='24' d='M3 6.5l9 5.5l9 -5.5'>
							<animate
								fill='freeze'
								attributeName='stroke-dashoffset'
								begin='0.48s'
								dur='0.16s'
								values='24;0'
							/>
						</path>
						<path fill='#fff' fill-opacity='0' stroke='none' d='M12 11l-8 -5h16l-8 5Z'>
							<animate
								fill='freeze'
								attributeName='fill-opacity'
								begin='0.8s'
								dur='0.12s'
								values='0;0.3'
							/>
						</path>
						<path
							fill='#000'
							fill-opacity='0'
							stroke='none'
							d='M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z'
						>
							<set fill='freeze' attributeName='fill-opacity' begin='0.64s' to='1' />
						</path>
						<path stroke-dasharray='10' stroke-dashoffset='10' d='M16 19l1.75 1.75l3.75 -3.75'>
							<animate
								fill='freeze'
								attributeName='stroke-dashoffset'
								begin='0.64s'
								dur='0.16s'
								values='10;0'
							/>
						</path>
					</g>
				</mask>
				<rect width='24' height='24' fill='#3caf3c' mask='url(#lineMdEmailCheckTwotone0)' />
			</svg>
		</div>
	);
}
