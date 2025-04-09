import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://shabinnicholas:NsJ123456@cluster0.hhu4n2q.mongodb.net/food-del').then(() => console.log("DB Connected"))
}