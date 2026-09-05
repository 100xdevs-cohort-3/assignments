export interface Course {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageLink: string;
  published: boolean;
}
export interface Session {
  token: string;
  role: 'admin' | 'user';
}
export interface AuthProps {
  mode?: 'signup' | 'login';
  onSubmit: (
    values: { username: string; password: string; role: 'admin' | 'user' },
    action: 'signup' | 'login',
  ) => Promise<void>;
  busy: boolean;
}
