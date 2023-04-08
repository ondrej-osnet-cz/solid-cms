import { For, onMount } from 'solid-js';
import { isServer } from 'solid-js/web';
import { A, Outlet, createRouteData, useLocation, useRouteData } from 'solid-start';
import { createServerData$ } from 'solid-start/server';
import { Menu } from '~/libs/core/bo/menu';
import MenuModel from '~/libs/server/database/models/menu/menu.model';

export function routeData() {
  let menu;
  if (isServer) {
    menu = createServerData$(async () => {
      const menuModel = await MenuModel.findOne();
      const menuJson = JSON.parse(JSON.stringify(menuModel?.toJSON())) as Menu;
      console.log('server menu', menuJson);
      return menuJson;
    });
  } else {
    menu = createRouteData(async () => {
      const response = await fetch('http://localhost:3000/api/v1/menu');
      const menu = (await response.json()) as Menu;
      console.log('client menu', menu);
      return menu;
    });
  }
  return { menu };
}

export default function Layout() {
  console.log('Layout');
  const data = useRouteData<typeof routeData>();

  onMount(() => {
    console.log('Layout onMount', data.menu());
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
          <For each={data.menu()?.items} fallback={<div>Loading...</div>}>
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
