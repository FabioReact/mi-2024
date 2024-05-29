import { User, UserRequest } from '../types/user';

export const registerUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<{ accessToken: string }> => {
  const response = await fetch('http://localhost:4000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  return response.json();
};

export const loginUser = async ({ email, password }: UserRequest): Promise<User|{ error: string }> => {
  const response = await fetch('http://localhost:4000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  if (!response.ok) return {
    error: data
  }
  return { email: data.user.email, token: data.accessToken }
};
