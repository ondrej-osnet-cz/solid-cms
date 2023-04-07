import { createEffect, For } from 'solid-js';
import { A, useMatch, useRouteData } from 'solid-start';
import Counter from '~/components/counter/Counter';
import { routeData } from '../(default)';

export default function About() {
  const data = useRouteData<typeof routeData>();

  const handleItemClick = (url: string) => {
    console.log('handleItemClick', { url });
  };

  createEffect(() => {
    console.log('About', data.menu()?.items);
  });

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">About Page</h1>
      <Counter />
      <p class="mt-8">
        Visit{' '}
        <a href="https://solidjs.com" target="_blank" class="text-sky-600 hover:underline">
          solidjs.com
        </a>{' '}
        to learn how to build Solid apps.
      </p>
      <p class="my-4">
        <A href="/admin" class="text-sky-600 hover:underline">
          Admin
        </A>
        {' - '}
        <span>About Page</span>
      </p>
      <For each={data.menu()?.items}>
        {(item) => (
          <div
            onClick={() => handleItemClick(item.url)}
            class={`border-b-2 ${useMatch(() => item.url) ? 'border-sky-600' : 'border-transparent hover:border-sky-600'} mx-1.5 sm:mx-6`}
          >
            <A href={item.url}>{item.label}</A>
          </div>
        )}
      </For>
    </main>
  );
}
