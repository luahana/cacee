import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  displayname: String,
  hashedPassword: String,
  // cartItems: {
  //   _id: mongoose.Types.ObjectId,
  //   category: String,
  //   name: String,
  //   quality: Number,
  //   color: String,
  //   size: Number,
  //   stone: String,
  // },
  // purchaseItems: {
  //   _id: mongoose.Types.ObjectId,
  //   category: String,
  //   name: String,
  //   quality: Number,
  //   color: String,
  //   size: Number,
  //   stone: String,
  // },
});

UserSchema.methods.setPassword = async function(password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function(password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result;
};

UserSchema.methods.serialize = function() {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

UserSchema.statics.findByEmail = function(email) {
  return this.findOne({ email });
};

UserSchema.methods.generateToken = function() {
  const token = jwt.sign(
    {
      _id: this.id,
      email: this.email,
      firstname: this.firstname,
      lastname: this.lastname,
      displayname: this.firstname,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '7d',
    },
  );
  return token;
};

const User = mongoose.model('User', UserSchema);
export default User;
