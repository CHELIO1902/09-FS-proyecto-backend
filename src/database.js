import mongoose from "mongoose";

const uri =
  "mongodb+srv://chelio1902:tuTrdAG8lPns8g2V@backendmovielist.d63hhse.mongodb.net/?retryWrites=true&w=majority";
	

mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((db) => console.log("Db is connected!!"))
	.catch((err) => console.log(err));
