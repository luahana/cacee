import Collection from '../../models/collection';
import mongoose from 'mongoose';
import Joi from 'joi';
// import checkLoggedInAsAdmin from '../../lib/checkLoggedInAsAdmin';

const { ObjectId } = mongoose.Types;

export const checkObjectId = (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }
  return next();
};

/*
  POST /api/collections
  {
    category: 'category',
    name: 'name',
    color: 'color',
    size: 'size',
    desc: 'item description',
    images: 'image address',
    bestSeller: 'true',
    newProduct: 'true'
  }
*/
export const add = async ctx => {
  const schema = Joi.object().keys({
    category: Joi.string().required(),
    name: Joi.string().required(),
    colors: Joi.array()
      .items(Joi.string())
      .required(),
    sizes: Joi.array().items(Joi.number()),
    desc: Joi.string().required(),
    prices: Joi.array().items(Joi.number()),
    images: Joi.array()
      .items(Joi.string())
      .required(),
    bestSeller: Joi.boolean().required(),
    newProduct: Joi.boolean().required(),
  });

  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const {
    category,
    name,
    colors,
    sizes,
    desc,
    prices,
    images,
    bestSeller,
    newProduct,
  } = ctx.request.body;

  const collection = new Collection({
    category,
    name,
    colors,
    sizes,
    prices,
    desc,
    images,
    bestSeller,
    newProduct,
  });
  try {
    await collection.save();
    ctx.body = collection;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
  GET /api/collections/:category
*/
export const list = async ctx => {
  const { category } = ctx.params;
  let query = {
    ...(category ? { category: category } : {}),
  };
  console.log(query);
  try {
    if (query.category === 'all') {
      query = { category: { $exists: true } };
    }
    const collections = await Collection.find(query)
      .sort({ _id: -1 })
      .exec();
    ctx.body = collections;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
  GET /api/collections/:id
*/
export const get = async (ctx, next) => {
  const { id } = ctx.params;
  console.log(id);
  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }
  try {
    const collection = await Collection.findById(id).exec();
    if (!collection) {
      ctx.status = 404;
      return;
    }
    ctx.body = collection;
    return next();
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
  DELETE /api/collections/:id
*/
export const remove = async ctx => {
  const { id } = ctx.params;
  try {
    await Collection.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
  PATCH /api/collections/:id
  {
    category: 'category',
    name: 'name',
    color: 'color',
    size: 'size',
    desc: 'description',
    images: 'image addresses',
    bestSeller: 'true',
    newProduct: 'true'
  }
*/
export const update = async ctx => {
  const { id } = ctx.params;

  const schema = Joi.object().keys({
    category: Joi.string(),
    name: Joi.string(),
    color: Joi.array().items(Joi.string()),
    size: Joi.array().items(Joi.number()),
    desc: Joi.string().required(),
    prices: Joi.array().items(Joi.number()),
    images: Joi.array()
      .items(Joi.string())
      .required(),
    bestSeller: Joi.boolean().required(),
    newProduct: Joi.boolean().required(),
  });

  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }
  try {
    const collection = await Collection.findByIdAndUpdate(
      id,
      ctx.request.body,
      {
        new: true,
      },
    ).exec();
    if (!collection) {
      ctx.status = 404;
      return;
    }
    ctx.body = collection;
  } catch (e) {
    ctx.throw(500, e);
  }
};
