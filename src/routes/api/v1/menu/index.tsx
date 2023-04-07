import { APIEvent, json } from 'solid-start';
import MenuModel from '~/libs/server/database/models/menu/menu.model';

export async function GET({ params }: APIEvent) {
  const menu = await MenuModel.findOne();
  console.log('API get menu items', menu);
  return json(menu);
}
