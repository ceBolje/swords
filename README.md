# Online casino DEV environment installation:

## Clone repository

    git clone git@lab.megatron.pw:react-app/react-casino/casino-online-core.git

## Install project

    yarn install

## Install theme

    yarn run:theme

-   Steps:

        -   theme: skeleton
        -   branch: develop
        -   reinstall

    <br />
    <br />

## Install Redis locally or on Docker container

-   docker see: docker-compose.yml
-   locally: https://redis.io/topics/quickstart
    <br />
    <br />

## Create .ENV file

-   copy file .env and create .env.development
-   check Redis cridential
-   fill out API and SMAS credentials
    <br /><br />

## Core Available Scripts

In the project directory, you can run:

    yarn dev

Runs the app in the development mode.<br />

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

    yarn build

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
<br />
<br />

## Theme Available Scripts

In the theme directory, you can run:

    yarn install

Install all dependencies

    yarn check-locales

Check locale updates

    yarn update-locales

Update locale files
