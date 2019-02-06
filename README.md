# Fender Front End Engineering Challenge

## Description

This is the Fender Front End Engineering Challenge built on React with Docker. The challange is to design and implement a web application that takes the data presented in products.json in this repository, and displays the items as a grid of products. You may use any front end frameworks, libraries, and tools of your choice.

# Build webapp with react-docker

## Build docker image
`docker build . -t react-docker`
## Run docker container
`docker run -p 8462:80 react-docker` and Navigate to `http://localhost:8462/`

## Development server

Run `yarn start` for a dev sever. Navigate to `http://localhost:3006/`. The app will automatically reload if you change any of the source files inside `app directory`.

## Build
 * Run `yarn build` to build the project. The build artifacts will be stored in the `build/` directory.
