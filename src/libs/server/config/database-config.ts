export interface MongoDbConfig {
  mongoUri: string;
}

export const mongoConfig: MongoDbConfig = {
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:63008/solid-cms'
};
