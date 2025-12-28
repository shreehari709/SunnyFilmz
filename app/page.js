import { redirect } from 'next/navigation';

export default function RootPage() {
  // This automatically sends the user to /home
  redirect('/home');
}