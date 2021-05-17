const mongoose = require('mongoose');
const ExpertModel = require('../model/Expert.model');

exports.getAllExperts = async (req, res) => {
	try {
		const response = await ExpertModel.find();
		res.json(response);
	} catch (error) {
		res.status(500).json(error);
	}
};

exports.createExpert = async (req, res) => {
	const { firstname, lastname, expertise, isActive, isDeleted } = req.body;
	const newExpert = await new ExpertModel({
		firstname,
		lastname,
		expertise,
		isActive,
		isDeleted,
	});
	newExpert
		.save()
		.then((response) =>
			res.json({
				status: true,
				message: 'Added new expert successfully.',
				response,
			}),
		)
		.catch((error) => res.json({ status: false, message: error }));
};
