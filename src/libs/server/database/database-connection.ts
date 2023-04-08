import mongoose from 'mongoose';
import { mongoConfig } from '../config/database-config';

export async function connectToDatabase(): Promise<typeof mongoose | undefined> {
  try {
    const mongooseConnected = await mongoose.connect(mongoConfig.mongoUri);
    console.log('Connected to database');

    return mongooseConnected;
  } catch (error) {
    console.log('Error connecting to database', error);
    return undefined;
  }
}
