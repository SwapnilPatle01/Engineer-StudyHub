import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
<<<<<<< HEAD
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['user', 'company'], // Adjust based on your requirements
  },
   companyDetails: {
    type: String,
    default: null, // If applicable
   },
=======
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ['company', 'student', 'admin'],
    },
    // companyDetails: {
    //   type: String,
    //   default: null, // If applicable
    // },
>>>>>>> 283d195aa26df8b3d58e7d725f896c24f86c1406
});

// // Hash password before saving
// userSchema.pre('save', async function(next) {
//     if (this.isModified('password')) {
//         this.password = await bcrypt.hash(this.password, 10);
//     }
//     next();
// });

const User = mongoose.model('User', userSchema);


export default User;