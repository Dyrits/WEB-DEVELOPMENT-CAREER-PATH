# [Jamming](https://www.codecademy.com/paths/web-development/tracks/front-end-applications-with-react/modules/jammming/projects/jammming-prj)

## About this project

### Related course
[code]cademy / PRO | Web Development ~ 10. Building Front-end Applications with React  
Jamming  
[Feature Request: Jammming](https://www.codecademy.com/paths/web-development/tracks/front-end-applications-with-react/modules/jammming/projects/feature-request-prj)

### Description (from [code]cademy / PRO)

<details markdown="block">
<summary>Jamming</summary>

In this project, you will build a React web application called [Jammming](http://jammming.s3-website-us-east-1.amazonaws.com/). You will use your knowledge of React components, passing state, and requests with the Spotify API to build a website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.

We’ve broken the Jammming project into 13 sections. Each section contains a descriptive header with an introductory step followed by a set of steps that guide you to the outcome. The first step of each section will explain the goal and provide a brief overview of how we’ll accomplish it. Before you start the second step, try to plan how you would complete the section. As you finish the rest of the steps, reflect on how your solution compares to ours.

This is a long project, but we’ll be with you every step of the way. Whether you’re completing assessments without the additional steps or banging your head against the wall trying to understand a hint, always use best practices and reflect on your growth. If you get stuck or just want to see how a seasoned developer tackles this project, click “get help” to see a walkthrough video.

Good luck!

</details>
<details markdown="block">
<summary>Feature Request: Jammming</summary>

In this project, you will select a feature that you think should be added to your Jammming app. You will use this [technical design document template](https://docs.google.com/document/d/1QIBjLcNH5t7FrPwuC7jNnhE1JPmwskdB7U7z0OSeDsU/edit?usp=sharing) to lay out all of the necessary functionality of this feature, how the feature should be implemented, and why you chose that specific approach. This is an essential step in the development process, so we encourage you to think carefully and thoroughly about your feature and implementation as you work on this project.

[Here is an example of a technical design document](https://docs.google.com/document/d/1bHEQvYYAwSpAkdpv7hp8eu-iMnvqYVS4UffCLKvaKGg/edit?usp=sharing) for implementing multiple playlists in Jammming. You should use it as a resource when deciding what level of information you should include in your design document.

You can pick any feature you want for this project, but we have provided a list of potential options at the end of this article for inspiration. We can’t wait to see your cool new features and unique solutions!

#### How to Get Started

To start this project, you will need to make a copy of our [technical design document template](https://docs.google.com/document/d/1QIBjLcNH5t7FrPwuC7jNnhE1JPmwskdB7U7z0OSeDsU/edit?usp=sharing). Open the template in a new tab and then copy the file by selecting all of the content (by clicking and dragging over all of the content, or pressing Ctrl + A) and then pressing copy (by selecting the “Edit” tab and clicking “Copy”, or by pressing Ctrl + C). Then create a new document by navigating to docs.google.com and selecting “Start a New Document > Blank”. Finally, paste the contents of the template into the new document (by selecting the “Edit” tab and clicking “Paste”, or by pressing Ctrl + V). Update the name of the document to something descriptive, and you’ll be ready to work on your project.

Potential Jammming Features:
- Include preview samples for each track
- Only display songs not currently present in the playlist in the search results
- Add a loading screen while playlist is saving
- Update the access token logic to expire at exactly the right time, instead of setting expiration from when the user initiates their next search
- After user redirect on login, restoring the search term from before the redirect
- Ensure playlist information doesn’t get cleared if a user has to refresh their access token

</details>

### Technologies | Frameworks
- JavaScript
- React

### Details | Comments
This project has been made from scratch following specific instructions. Several elements have been directly provided by the related course.

### Changelog

<details markdown="block">
<summary>V1.02</summary>

- The tracks added to the playlist are now removed from the search results.
- The search results don't display the tracks already in the playlist anymore.
- The tracks removed from the playlist are now added at the top of the search results.
    
</details>

<details markdown="block">
<summary>V1.02.05</summary>

- The tracks removed from the playlist are not added at the top of search results anymore. Instead, an update of the search results occurs.
    
</details>


### Deployment
This project has been published on [surge](http://jamming-dyrits.surge.sh/).

### Status
Completed (V1.02.05)

#### Last update
10/07/2020
(README | 10/07/2020)

---

# React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
