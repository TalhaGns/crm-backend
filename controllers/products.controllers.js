const mongoose = require('mongoose');
const ProductModel = require('../model/Products.model');
const Media = require('../model/Media.model');

const S3 = require('../config/aws.s3.config');

exports.getAllProduct = (req, res) => {
	ProductModel.find()
		.sort({ createdAt: -1 })
		.populate('coverImageId', 'title url alt')
		.populate('user', 'firstname lastname email')
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json(err);
		});
};

exports.createProduct = async (req, res) => {
	const data = async (data) => {
		console.log(data);
		const newMedia = await new Media({
			url: data.Location || null,
			title: 'products',
			mediaKey: data.Key,
			alt: req.body.alt || null,
		});

		newMedia.save();

		const mediaIds = newMedia._id;

		const {
			title,
			order,
			isHomePage,
			content,
			shortDescription,
			buttonText,
			userId,
			isActive,
			isDeleted,
			isBlog,
			isAboveFooter,
		} = req.body;

		const product = await new ProductModel({
			title,
			order,
			coverImageId: mediaIds,
			isHomePage,
			content,
			shortDescription,
			buttonText,
			userId,
			isActive,
			isDeleted,
			isBlog,
			isAboveFooter,
		});

		product
			.save()
			.then((response) =>
				res.json({
					status: true,
					message: 'Added a new product successfully.',
					response,
				})
			)
			.catch((error) => res.json({ status: false, message: error }));
	};
	await S3.uploadNewMedia(req, res, data);
};

/************************************ */
exports.deleteProduct = (req, res, next) => {
	ProductModel.findByIdAndRemove({ _id: req.params.productId })
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			next({ message: 'The product deleted.', code: 99 });
			res.json(err);
		});
};

exports.updateSingleProduct = (req, res) => {
	ProductModel.findByIdAndUpdate(
		{ _id: req.params.productId },
		{ $set: req.body },
		{ useFindAndModify: false, new: true }
	)
		.then(async (product) => {
			await Media.findByIdAndUpdate(
				product.coverImageId,
				{
					$set: {
						url: req.body.coverImageId.url,
					},
				},
				{ useFindAndModify: false, new: true }
			);
		})
		.then((data) => res.json({ message: 'Product updated', status: true, data }))
		.catch((err) => res.json({ message: err, status: false }));
};
