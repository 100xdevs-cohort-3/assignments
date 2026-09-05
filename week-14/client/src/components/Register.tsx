import { AuthProps } from '../types';
import Login from './Login';
export default function Register(props: AuthProps) {
  return (
    <section>
      <h2>Create your account</h2>
      <p>Choose Student to enroll, or Instructor to publish courses.</p>
      <Login {...props} mode="signup" onSubmit={(values) => props.onSubmit(values, 'signup')} />
    </section>
  );
}
