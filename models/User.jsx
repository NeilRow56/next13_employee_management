import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    avatar: { type: String },
    email: { type: String, required: true, unique: true },
    salary: { type: String, required: true },
    date: { type: String, required: true },
    status: { type: String },
    
  },
  
);

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;