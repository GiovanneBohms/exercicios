import mongoose, { mongo } from "mongoose";

async function conectaNaDatabase() {
  mongoose.connect("mongodb+srv://LivrariaBohms:admin123@cluster0.sihpat0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  return mongoose.connection;
};

export default conectaNaDatabase;
