import mongoose from 'mongoose';

const MenuSchema = new mongoose.Schema({
  name: String,
  items: [
    {
      label: { type: String, required: true },
      url: { type: String, required: true },
      icon: String,
      order: Number,
      parentId: String
    }
  ]
});

const MenuModel = mongoose.model('Menu', MenuSchema);

export default MenuModel;
