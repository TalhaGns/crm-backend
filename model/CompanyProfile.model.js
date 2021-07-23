const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CompanyProfileSchema = new Schema(
	{
		name: {type:String, required:[true, `Field 'name' must be filled.`]},
		logo: String,
		phones: [{type: String, required:true}],
		address: String,
		socialMediaId: [{ type: Schema.Types.ObjectId, description: 'Hello world',  ref: 'social' }],
		email: {type:String, required:[true, `Field 'email' must be filled.`]},
		isActive: { type: Boolean, default: true },
		isDeleted: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('companyprofile', CompanyProfileSchema);
