export enum LANGUAGES {
	EN = 'en',
	ES = 'es'
}

export interface I18N_TYPES {
	SEO_TITLE: string;
	SEO_DESCRIPTION: string;
	HEADER: {
		TITLE: string;
		HOME_LINK: string;
		SKILLS_LINK: string;
		PROJECTS_LINK: string;
		ABOUT_LINK: string;
		CONTACT_LINK: string;
	};
	HOME_SECTION: {
		TITLE: string;
		SUB_TITLE: string;
		DESCRIPTION: string;
		AVAILABILITY: string;
	};
	SKILLS_SECTION: {
		TITLE: string;
	};
	PROJECTS_SECTION: {
		TITLE: string;
		CODE_BUTTON: string;
		LIVE_BUTTON: string;
		PROJECTS: {
			TITLE: string;
			DESCRIPTION: string;
		}[];
	};
	ABOUT_SECTION: {
		TITLE: string;
		SUBTITLES: {
			CERTIFICATIONS: string;
			COURSE_REPOSITORIES: string;
		};
		WHO_I_AM: {
			TITLE: string;
			TEXT: string;
		};
		STUDIES: {
			TITLE: string;
			TEXT: string;
		};
		USER_EXPERIENCE: {
			TITLE: string;
			TEXT: string;
		};
		CLEAN_CODE: {
			TITLE: string;
			TEXT: string;
		};
		COURSES_REPOSITORIES: {
			TITLE: string;
			DESCRIPTION: string;
		}[];
	};
	CONTACT_SECTION: {
		TITLE: string;
		SUBTITLE: string;
		NOTIFICATION: string;
		ERROR: string;
		NAME_INPUT: {
			TITLE: string;
			INVALID: string;
			REQUIRED: string;
		};
		EMAIL_INPUT: {
			TITLE: string;
			INVALID: string;
			REQUIRED: string;
		};
		MESSAGE_INPUT: {
			TITLE: string;
			REQUIRED: string;
		};
		BUTTON_TEXT: string;
	};
}
