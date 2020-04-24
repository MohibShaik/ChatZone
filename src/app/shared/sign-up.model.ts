import {
    required,
    compare,
    alpha,
    minLength,
} from '@rxweb/reactive-form-validators';

export class signUp {
    @required({ message: 'User Name is required' })
    name: string;

    @required({ message: 'Email is required' })
    email: string;

    @required({ message: 'Phone number is required' })
    phnum: number;

    @required({ message: 'password is required' })
    password: any;

    @required({ message: 'conPassword is required' })
    conPassword: string;
}