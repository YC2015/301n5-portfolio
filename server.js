// var express = require('express'),
//   port = process.env.PORT || 3000,
//   app = express();
//
// app.use(express.static('./'));
//
// app.get('*', function(request, response) {
//   console.log('New request:', request.url);
//
//   response.sendFile('index.html', { root: '.' });
// });
//
// app.listen(port, function() {
//   console.log('Server started on port ' + port + '!');
// });

var requestProxy = require('express-request-proxy'),
  express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

var proxyGitHub = function(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: 'https://api.github.com/' + request.params[0],
    headers: { Authorization: 'token ' + process.env.GITHUB_TOKEN }
  }))(request, response);
};

app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.' });
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});


// I still need to create my Heroku instance
// I will do this by using heroku create naming it YCportfolio
// Once I add changes to my master (accessing the github api), I will push onto my new Heroku app using git push origin Heroku
// I will use Heroku open to test my app

//Token Information
// I have configured an environment variable for my github token on my bash profile using env
