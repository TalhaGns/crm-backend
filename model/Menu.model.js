const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenusSchema = new Schema(
	{
		parentId: { type: Number },
		text: { type: String, required: [true, `Field 'text' must be filled.`] },
		link: { type: String, required: [true, `Field 'link' must be filled.`] },
		iconClassName: { type: String },
		order: { type: Number },
		isActive: { type: Boolean, default: true },
		isDeleted: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('menu', MenusSchema);
