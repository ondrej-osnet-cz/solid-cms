# Solid test project

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), you need mongodb with data. Data is in db-data folder and needs to be imported to db `solid-cms` and collection `menus`. Or you can just simple run command

```bash
npm run run-mongo-db
```

(Docker required, free port 27017 required)
It starts MongoDb on port 27017 and imports test data.

To start a development server run:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Solid apps are built with _adapters_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `npm start`. To use a different adapter, add it to the `devDependencies` in `package.json` and specify in your `vite.config.js`.
