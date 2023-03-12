import { createHandler, renderAsync, StartServer } from 'solid-start/entry-server';
import { connectToDatabase } from './libs/server/database/database-connection';

connectToDatabase();

export default createHandler(renderAsync((event) => <StartServer event={event} />));
