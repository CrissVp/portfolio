import { LANGUAGES } from 'src/types/i18n';
import spanish from '@i18n/es.json';
import english from '@i18n/en.json';

export const getI18N = ({ currentLocale = LANGUAGES.ES }: { currentLocale: LANGUAGES }) => {
	if (currentLocale === LANGUAGES.EN) return english;
	return spanish;
};
