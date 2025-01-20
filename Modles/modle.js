import mongoose from 'mongoose'; // Import mongoose
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true, 
        unique: true, 
        
    },
    address: {
        type: String,
        required: true, 
        trim: true,
    },
    
});
export default mongoose.model('User', userSchema);