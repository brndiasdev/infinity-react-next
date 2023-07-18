import {Schema, model, models} from "mongoose";

const userSchema = new Schema({
	// Schema is a class from mongoose
	email: {
		type: String,
		unique: [true, "Email already exists!"], // unique is a validator
		required: [true, "Email is required!"],
	},
	username: {
		type: String,
		required: [true, "Username is required!"],
		match: [
			/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, // regex - (https://stackoverflow.com/questions/12018245/regular-expression-to-validate-username)
			"Username must be between 8 and 20 characters long and can only contain letters, numbers, underscores and dots!",
		],
	},
	image: {
		type: String, // url
	},
});

const User = models.User || model("User", userSchema); // models.User is a class from mongoose - if it exists, use it, otherwise create a new model

export default User;
