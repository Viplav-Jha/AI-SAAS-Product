import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL =
  process.env.MONGODB_URL ||
  "mongodb+srv://viplavjha1993:PfYv1ksLaz4MNcKO@cluster0.kaxh4qe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URL) throw new Error("Missing MONGODB_URL");

  // Adjusted connection options for MongoDB Atlas in the connection string
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

  try {
    cached.conn = await cached.promise;
    console.log("Connected to MongoDB Atlas successfully!");
  } catch (error) {
    console.error("MongoDB Atlas connection error:", error);
    throw error;
  }
return cached.conn;
};
