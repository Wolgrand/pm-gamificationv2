import { MongoClient, Collection, Db } from 'mongodb';

interface ConnectType {
  db: Collection;
  client: MongoClient;
}

const client = new MongoClient(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function connect(collection:string): Promise<ConnectType> {
  if (!client.isConnected()) await client.connect();

  const db = client.db('EAC').collection(collection);
  return { db, client };
}
