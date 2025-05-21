import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://ankit:1234@cluster0.fyokvyb.mongodb.net/FoodDel').then(()=>console.log("DB Connected"));

}