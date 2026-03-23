import mongoose from "mongoose";

 
const connectDb = async()=>{
    
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined');
    }


    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log('MONGODB connection error', error);
    process.exit(1);
  }
}

export default connectDb