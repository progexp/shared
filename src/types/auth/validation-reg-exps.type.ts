import { AuthValidationRegExp } from '@shared/types';

export type ValidationRegExps = {
    loginRegExps: AuthValidationRegExp;
    passwordRegExps: AuthValidationRegExp;
    emailRegExps: AuthValidationRegExp;
};
