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

## Debugging

In VSCode, open debug section and select `Client debug`. It should open default browser and start debug session.
