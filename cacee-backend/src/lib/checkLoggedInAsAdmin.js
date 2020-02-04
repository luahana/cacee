const checkLoggedInAsAdmin = (ctx, next) => {
  if (!ctx.state.user || ctx.state.user.email !== 'admin@cacee.com') {
    ctx.status = 401;
    return;
  }
  return next();
};

export default checkLoggedInAsAdmin;
