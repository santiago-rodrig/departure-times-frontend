![license badge](https://img.shields.io/github/license/santiago-rodrig/departure-times-frontend)
![followers](https://img.shields.io/github/followers/santiago-rodrig?style=social)
![stars](https://img.shields.io/github/stars/santiago-rodrig/departure-times-frontend?style=social)

# departure-times-frontend

> This project is under development, it is on a very
> early-stage, and lacks many important features.

The idea behind this application is to render a set of
points in a map that represent a collection of bus stops
in San Francisco together with the position of the
user, then, predictions on the time of departure
on the selected bus stop will be given after
selecting some options on a dashboard.

[The API](https://github.com/santiago-rodrig/departure-times)
is a separate project also built by me.

The data that comes from the API is enough for connecting with
yet another API and create some maps for the user.

The API for creating the maps is [HERE](https://developer.here.com/products/maps).

### Expectation of the result

<img src="./doc/expectation.jpg" alt="result expectation" width="250" height="250" />

## Features to be implemented

- The dashboard must trigger the rendering of a map with the bus stations that belong to a direction
- The user must be able to trigger predictions over a bus stop selected beforehand on the dashboard
- There should be GIFs everywhere indicating the state of the applications (fetching, failed, etc.)
- The predictions must be made on every San Francisco's public transport agency, not just one
- The application must look neat and modern
- The application must be responsive and render properly on all screen sizes
- There are no tests

That's everything I can think off by now, feel free to suggest more requirements using
the [issues section of the repository](https://github.com/santiago-rodrig/departure-times-frontend/issues).

### `yarn eject`

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

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
