import {
    required,
    compare,
    alpha,
    minLength,
} from '@rxweb/reactive-form-validators';

export class signUp {
    @required({ message: 'User Name is required' })
    @alpha()
    userName: string;

    @required({ message: 'Email is required' })
    email: string;

    @required({ message: 'Phone number is required' })
    phnum: number;

    @required()
    @minLength({value:8,})
    password: string;

    @required()
    @compare({fieldName:'password'})
    confirmPassword: string;
}