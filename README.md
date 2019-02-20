# Camper Leaderboard App

This is a react app scaffolding with create-react-app, with the apis powered by
NodeJS Express. The client app stack includes ReactJS, Redux, Redux-Saga, React-Bootstrap.

The app has a set of radio buttons which sorts the campers based on `Past 30 Day Points` and `All Time Points`.

### Get Started

- Run `npm install` to install all the required packages.
- Run `npm server` to boot up the server.
- Run `npm run start` to start the app.
  you will need to run the server and the client respectively.

### Test

Run `npm test` to trigger the unit tests.

### Notes

The mock data is generated with 100 random campers. The data structure is {id,
username, image, recent, allTime, lastUpdated}.
