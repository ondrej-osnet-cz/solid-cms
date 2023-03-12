import { APIEvent, json } from 'solid-start';
import MenuModel from '~/libs/server/database/models/menu/menu.model';

export async function GET({ params }: APIEvent) {
  const menu = await MenuModel.findOne();
  return json({ menu });
}
