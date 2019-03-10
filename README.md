## Would You Rather...?
This is the final assessment project for Udacity's React-Redux course, which is a part of the [React Nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019). 

This is a web app that lets a user play the “Would You Rather?” game. The game goes like this: 
A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.

In this app, users are able to ask and answer questions, see which questions they have/haven’t answered, see how other people have voted, and see the ranking of users on the leaderboard.

Once the user logs in, the user is able to toggle between his/her answered and unanswered polls on the home page. The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom).

Upon voting in a poll, all of the information of an answered poll is displayed. The user’s response is recorded and clearly visible on the poll details page. Users can only vote once per poll; they are not allowed to change their answer after they’ve voted. When the user comes back to the home page, the polling question appears in the “Answered” column.
### How to use the application
- A user can login by entering a valid username on the Login screen. All valid usernames can be found by pressing the `Help` button
- Once logged in a user can use the navigation bar at the top left of the app to navigation between the `Questions` list, the `Leaderboard` and the `New Question` form. A user can also log out using the logout button in the top right of the navigation bar.
- A user can see the details of a question (voting options for unanswered and voting results for answered) by clicking the `Details` link within each Question object.
- A user can add a new question to the `Questions` list by using the `New Question` form. The text for both option one and option two of the desired question can be assigned in the text input and submitted to the list.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technologies used:

* React
* Redux
* React Router
* React semantic ui
* React - avatar 

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

working url of the project : https://sujilnt.github.io/wouldyouRatherProject/
