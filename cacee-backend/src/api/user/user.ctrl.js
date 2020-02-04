import Joi from 'joi';
import User from '../../models/user';

/*
  GET /api/user/
*/
export const list = async ctx => {
  try {
    const users = await User.find().exec();
    ctx.body = users;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
  POST /api/user/edit
  {
    firstname: 'firstname',
    lastname: 'lastname'
  } 
*/
export const edit = async ctx => {
  const schema = Joi.object().keys({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string()
      .email()
      .max(256)
      .required(),
  });

  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    console.log(result.error);
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { firstname, lastname, email } = ctx.request.body;
  try {
    const user = await User.findByEmail(email);
    if (user) {
      user.firstname = firstname;
      user.lastname = lastname;
      user.displayname = firstname;

      await user.save();

      ctx.body = user.serialize();

      // const token = user.generateToken();
      // ctx.cookies.set('access_token', token, {
      //   maxAge: 1000 * 60 * 60 * 24 * 7,
      //   httpOnly: true,
      // });
      return;
    } else {
      ctx.status = 400;
      console.log('email does not exist');
      return;
    }
  } catch (e) {
    ctx.throw(500, e);
  }
};
