## React Docker Tutorial
This repository demonstrates how to bootstrap a React app using `create-react-app` and add  Docker container and using ENV variables. This is the TL;DR version of normal trial and error to get Docker and ENV variables to work nicely in a React app. The goal is allowing you to package and deploy your app to any environment and adhere to 12-factor-app principles.

# Requirements
## NodeJS version 6 or later
You need NodeJS installed on your machine at least version 6, and a general understanding of NPM and how to install, configure, and start a Node app. You don't need experience with React to follow this tutorial, however it is preferred.

## Docker
In order to test the Docker container you need to be able to perform `docker` commands. Familiarity with building and running images is preferred.

# Setup
1. Bootstrap your application with `create-react-app`
```
npx create-react-app my-docker-react-app
```

2. Verify application runs
```
cd my-docker-react-app
npm install
npm start
```

Your browser will likely launch a window or tab for `http://localhost:3000` and you should see a React icon and welcome screen. If everything is running, then `CTRL + C` to stop the app and proceed. If it is not working, visit create-react-app's website for instructions and troubleshooting tips for your environment.

# Add Docker container
If you tested the app above, and the values you set in your local environment appear, then proceed to package your app in a container.

## Create Docker image and run script
1. Add `Dockerfile` as example in this repository

2. Add `run` script (this is the secret)
Adding a separate script for the `CMD` of your `Dockerfile` allows you to inject the container's ENV params during `docker run ...`. If you build your React app in the `Dockerfile` it will not recognize the ENV variables you pass as arguments when you run it.

3. Set script permissions
**IMPORTANT** `chmod +x run` to allow Docker to execute the script during the `CMD`. Alternatively you could add another layer to the `Dockerfile` and a `RUN chmod+x run` step.

## Build and run Docker image
1. Build docker image
```
docker build -t myimage .
```

2. Run image and add ENV variables to container
```
docker run --name myapp -p 8080:5000 \
-e REACT_APP_ENVIRONMENT=docker \
-e REACT_APP_TIMEZONE=America/Pacific \
--rm myimage
```

3. Test that your app is running on port 8080 in local browser at http://localhost:8080 and you should see the default screen but the values match ENV variable values passed in your run command.

# Congratulations
If you made it this far, then you have successfully extended `create-react-app` to use environment variables and added a Docker image that allows you to configure your application dynamically to run anywhere!
