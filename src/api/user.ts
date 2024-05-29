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
