export interface Menu {
  _id: string;

  name: string;

  items: MenuItem[];
}

export interface MenuItem {
  _id: string;

  label: string;

  url: string;

  icon?: string;

  order?: number;

  parentId?: string;
}
