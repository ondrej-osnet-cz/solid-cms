import { A } from 'solid-start';
import Counter from '~/components/counter/Counter';

export default function Admin() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Login Page</h1>
      <Counter />
      <A href="/">Home</A>
    </main>
  );
}
