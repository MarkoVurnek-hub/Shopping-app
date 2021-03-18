import mongoose from "mongoose";

interface UserAttributes {
  email: string;
  password: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attributes: UserAttributes): UserDoc;
}

interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema<UserDoc>({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

userSchema.statics.build = (attributes: UserAttributes) => {
  return new User(attributes);
};

export { User };
