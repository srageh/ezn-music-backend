## About

This web app uses the spotify api to display a users top artists, tracks, and new releases.

## Getting Started

Visit and register a spotify application here https://developer.spotify.com/my-applications
After logging in enter http//localhost:8888/callback as the redirect uri
Create a .env file, then copy the client id(XXXX) and client secret(YYYY)

```
REACT_APP_SPOTIFY_CLIENT_ID=XXXX
REACT_APP_SPOTIFY_CLIENT_SECRET=YYYY
```

Make sure to add .env file to gitignore


## Start Server

install the dependencies  ```npm install```
run the server ```node main.js```


## Start Client
npm start
Then go to http://localhost:8888. This will initiate the login flow and redirect you to http://localhost:3000?access_token=ZZZZZ where ZZZZZ is a valid access token that you can use to do operations in the Spotify API.

## Credits
OAuth user authorization code (main.js) from

username: mpg
repo: https://github.com/mpj/oauth-bridge-template