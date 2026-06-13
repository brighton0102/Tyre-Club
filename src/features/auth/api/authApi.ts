import type { AuthResponse, LoginCredentials } from '../types/auth';

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  await delay(800);

  return {
    user: {
      id: '1',
      email: credentials.email,
      name: credentials.email.split('@')[0],
    },
    token: 'mock-jwt-token',
  };
}
