import Joi from 'joi';
import User from '../../models/user';

/*
  POST /api/auth/register
  {
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email@email.com',
    password: 'password'
  }
*/
export const register = async ctx => {
  const schema = Joi.object().keys({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string()
      .email()
      .max(256)
      .required(),
    password: Joi.string().required(),
  });

  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    console.log(result.error);
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { firstname, lastname, email, password } = ctx.request.body;
  try {
    const exists = await User.findByEmail(email);
    if (exists) {
      ctx.status = 409;
      return;
    }

    const user = new User({
      firstname,
      lastname,
      email,
      displayname: firstname,
    });
    await user.setPassword(password);
    await user.save();

    ctx.body = user.serialize();

    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
  POST /api/auth/login
  {
    email: 'email@email.com',
    password: 'password'
  }
*/
export const login = async ctx => {
  const { email, password } = ctx.request.body;

  if (!email || !password) {
    ctx.status = 401;
    return;
  }

  try {
    const user = await User.findByEmail(email);
    if (!user) {
      ctx.status = 401;
      return;
    }
    const valid = await user.checkPassword(password);
    if (!valid) {
      ctx.status = 401;
      return;
    }
    ctx.body = user.serialize();

    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
  GET /api/auth/check
*/
export const check = async ctx => {
  const { user } = ctx.state;
  if (!user) {
    ctx.status = 401;
    return;
  }
  ctx.body = user;
};

/*
  GET /api/auth/logout
*/
export const logout = async ctx => {
  ctx.cookies.set('access_token');
  ctx.status = 204;
};
