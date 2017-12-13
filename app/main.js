const app = require('express')(),
  settings = {
    port: 5000
  };

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.use('/postcode', require('./router/postcode'));

app.listen(settings.port, () => {
  console.log(`app listeneng on ${settings.port}`);
});
