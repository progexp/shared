type AuthValidationRegExp = {
    Length?: RegExp;
    AllowedChars: RegExp;
};

type ValidationRegExps = {
    loginRegExps: AuthValidationRegExp;
    passwordRegExps: AuthValidationRegExp;
    emailRegExps: AuthValidationRegExp;
};

export const AuthValidationRegExps: ValidationRegExps = {
    loginRegExps: {
        Length: /^\w{3,20}$/,
        AllowedChars: /^[a-z0-9]+$/i
    },
    passwordRegExps: {
        Length: /^\w{6,40}$/,
        AllowedChars: /^[a-z0-9.,!?@#$%^&*()_\-+={}\[\]/\\;:]+$/i
    },
    emailRegExps: {
        Length: /^\w{5,25}$/,
        AllowedChars: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i
    }
};
