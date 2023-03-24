const mongoose = require("mongoose");

/* 
1.grab mongoose
2. create mongoose.schema constructor using new.
3. set properties of model
4. call mongoose model on schema , created in step 2*/

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
  },
  description: {
    type: String,
    required: true,
    default: '',
  },
  richDescription: {
    type: String,
    required: true,
    default: '',
  },
  image: {
    type: String,
  },
  images: [
    {
      type: String,
    },
  ],
  brand: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  rating: {
    type: Number,
    required: true,
  },
  isFeatured: { type: Boolean, default: false },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  countInStock:{
    type: Number,
    required: true,
    min: 0,
    max: 255,
  },
  category:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  }
});
//5. will grab this model in controllers
module.exports = mongoose.model("Product", productSchema);

//notes
/* When you call mongoose.model() on a schema (here: productSchema), Mongoose compiles a model for you. 

The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural, lowercased version of your model name. Thus, for the example above, the model Product is for the Products collection in the database.

document: An instance of a model is called a document. Creating them and saving to the database is easy

The Model.create() method of the Mongoose API is used to create single or many documents in the collection. Mongoose by default triggers save() internally when we use the create() method on any model.

*/
