import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {



    login(): string {
        return 'Login successful';
    }

    logout(): string {
        return 'Logout successful';
    }
    register(): string {
        return 'Registration successful';
    }
    authenticate(): string {
        return 'Authentication successful';
    }
}
