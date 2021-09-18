const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI =
"SECRET_INFORMATION";

let cachedDb = null;

async function connectToDatabase() {

  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(MONGODB_URI);
  const db = await client.db('db_02');
  cachedDb = db;
  return db
}

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const db = await connectToDatabase();

  // Insert the event object, which is the test data we pass in
  const result = await db.collection("stories").insertOne(event);
  const response = {
    headers: {
    'Access-Control-Allow-Origin': '*',
  },
    statusCode: 200,
    body: JSON.stringify(result),
  };

  return response;
};
