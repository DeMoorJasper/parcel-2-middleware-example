module.exports = (app) => {
  // Here you have full control over the dev server...
  app.use((req, res, next) => {
    res.setHeader('x-special-fancy-header', 'This is totally possible?');
    next();
  });
};
