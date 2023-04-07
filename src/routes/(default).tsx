import { For, createResource, onMount } from 'solid-js';
import { A, Outlet, useLocation, useRouteData } from 'solid-start';
import { Menu } from '~/libs/core/bo/menu';

export function routeData() {
  const [menu] = createResource(async () => {
    const response = await fetch('http://localhost:3000/api/v1/menu');
    return (await response.json()) as Menu;
  });
  return { menu };
}

export default function Layout() {
  console.log('Layout');
  const { menu } = useRouteData<typeof routeData>();

  onMount(() => {
    console.log('Layout onMount', menu());
  });

  const active = (path: string) => {
    const location = useLocation();
    console.log('active', { path, pathName: location.pathname });
    const classes = path === location.pathname ? 'border-sky-600' : 'border-transparent hover:border-sky-600';
    return classes;
  };

  const handleItemClick = (url: string) => {
    console.log('handleItemClick', { url });
  };

  return (
    <>
      <nav class="bg-sky-800">
        <ul class="container flex items-center p-3 text-gray-200">
          <For each={menu()?.items} fallback={<div>Loading...</div>}>
            {(item) => (
              <li onClick={() => handleItemClick(item.url)} class={`border-b-2 ${active(item.url)} mx-1.5 sm:mx-6`}>
                <A href={item.url}>{item.label}</A>
              </li>
            )}
          </For>
        </ul>
      </nav>
      <Outlet></Outlet>
    </>
  );
}
