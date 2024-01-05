import { MongoClient } from "mongodb";
import { config } from "dotenv";

config();

// Replace the uri string with your connection string.
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@huytoan.8kpntu8.mongodb.net/`;

class DatabaseService {
  constructor() {
    this.client = new MongoClient(uri);
    this.db = this.client.db("finaltest");
  }
  run() {
    try {
      this.client.connect();
    } catch (error) {
      console.log("error", error);
    }
  }
  get inventory(){
   return this.db.collection("inventory")
  }
  get order(){
    return this.db.collection("order")
   }
   get user(){
    return this.db.collection("user")
   }
}
const databaseService = new DatabaseService()
export default databaseService;