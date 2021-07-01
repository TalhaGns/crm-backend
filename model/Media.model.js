const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MediaSchema = new Schema(
	{
		url: String,
		title: String,
		alt: String,
		mediaKey: String,
		isHomePage: { type: Boolean, default: false },
		isActive: { type: Boolean, default: true },
		isDeleted: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('media', MediaSchema);
