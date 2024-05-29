import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ErrorMessage } from '@hookform/error-message';

const schema = z
  .object({
    email: z.string().email().min(8),
    password: z.string().min(8, { message: 'Doit contenir au moins 8 caractères' }),
    passwordConfirmation: z.string().min(8, { message: 'Doit contenir au moins 8 caractères' }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ['passwordConfirmation'],
  });
type Inputs = z.infer<typeof schema>;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });
  console.log(errors);

  const onRegister: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <section>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onRegister)}>
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' {...register('email')} />
        {errors.email?.message && <p className='text-xs text-red-600'>{errors.email.message}</p>}
        <fieldset>
          <label htmlFor='password'>Password</label>
          <input type='text' id='password' {...register('password')} />
          <ErrorMessage
            errors={errors}
            name='password'
            render={({ message }) => <p className='text-xs text-red-600'>{message}</p>}
          />
        </fieldset>
        <fieldset>
          <label htmlFor='passwordConfirmation'>Confirm Password</label>
          <input type='text' id='passwordConfirmation' {...register('passwordConfirmation')} />
          {errors.passwordConfirmation?.message && (
            <p className='text-xs text-red-600'>{errors.passwordConfirmation.message}</p>
          )}
        </fieldset>
        <button>Register</button>
      </form>
    </section>
  );
};

export default Register;
