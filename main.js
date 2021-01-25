const express = require('express');

const request = require('request')
const querystring = require('querystring')
const app = express();
const dotenv = require('dotenv');
dotenv.config();


let redirect_uri = process.env.REDIRECT_URI ||   
  'http://localhost:8888/callback'

//var my_client_id = '';
//var my_client_secret = '';




//console.log(process.env.REACT_APP_SPOTIFY_CLIENT_ID)
app.get('/login', function(req, res) {
    //var scopes = 'user-top-read user-read-private user-read-email';
    res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
      scope: 'user-top-read user-read-private user-read-email',
      redirect_uri
    }))
    });


app.get('/callback', function(req, res){
    var code = req.query.code || null;
    var state = req.query.state;

    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'

      },
      headers: {
        
        'Authorization': 'Basic ' + (Buffer.from(process.env.REACT_APP_SPOTIFY_CLIENT_ID + ':' + process.env.REACT_APP_SPOTIFY_CLIENT_SECRET).toString('base64'))
      },
      json: true
    }
    request.post(authOptions, function(error, response, body){
      var access_token = body.access_token
      console.log(body);
      let uri = process.env.FRONTEND_URI || 'http://localhost:3000'
      res.redirect(uri + '?access_token=' + access_token)
    })
    
})



   
   
let port = process.env.PORT || 8888
console.log(`Listening on port ${port}. Go /login to initiate authentication flow.`)
app.listen(port);
//console.log(process.env)