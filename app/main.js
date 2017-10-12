const app = require('express')(),
  settings = {
    port: 3000
  };

app.use('/postcode', require('./router/postcode'));

app.listen(settings.port, () => {
  console.log(`app listeneng on ${settings.port}`);
});
