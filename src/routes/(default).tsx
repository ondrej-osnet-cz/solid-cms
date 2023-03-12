import { For, onMount, Suspense } from 'solid-js';
import { A, Outlet, useLocation, useRouteData } from 'solid-start';
import { createServerData$ } from 'solid-start/server';
import MenuModel from '~/libs/server/database/models/menu/menu.model';

export function routeData() {
  return createServerData$(() => MenuModel.findOne());
}

export default function Layout() {
  console.log('Layout');
  const menu = useRouteData<typeof routeData>();

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
    <Suspense>
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
    </Suspense>
  );
}
