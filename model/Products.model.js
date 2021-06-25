const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema(
	{
		title: { type: String },
		order: { type: Number },
		coverImageId: { type: Schema.Types.ObjectId, ref: 'media' },
		isHomePage: { type: Boolean, default: false },
		content: { type: String },
		shortDescription: { type: String },
		buttonText: { type: String },
		userId: { type: Schema.Types.ObjectId, ref: 'user' },
		isActive: { type: Boolean, default: true },
		isDeleted: { type: Boolean, default: false },
		isBlog: { type: Boolean, default: false },
		isAboveFooter: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('product', ProductsSchema);
