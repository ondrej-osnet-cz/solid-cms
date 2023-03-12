import { Outlet } from 'solid-start';

export default function Login() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h2>Login Layout</h2>
      <Outlet />
    </main>
  );
}
