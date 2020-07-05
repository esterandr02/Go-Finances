<p align="right">
  <img alt="logo" src="frontend/src/assets/logo.svg" width="550"/>
</p>

<h1 align="center">
      Go Finances
</h1>

<h4 align="center">
  A simulator that you can set and monitoring transactions.
</h4>

<p align="center">
  <img alt="github-top-language" src="https://img.shields.io/github/languages/top/esterandr02/Go-Finances">  
  <img alt="github-repo-size" src="https://img.shields.io/github/repo-size/esterandr02/Go-Finances?color=red">
  <img alt="github-last-commit" src="https://img.shields.io/github/last-commit/esterandr02/Go-Finances?color=green">
  <img alt="github-repo-license" src="https://img.shields.io/static/v1?label=license&message=MIT&color=blueviolet">
</p>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#warning-prerequisites">Prerequisites</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;
</p>

This project was taught by Rocketseat on Bootcamp course.

## Show Aplication
<img alt="gofinances-dashboard" src="https://user-images.githubusercontent.com/48167967/85358383-f3453480-b4e9-11ea-9e8d-513a7a6b9fde.png"/>
<br/>
<img alt="gofinances-upload" src="https://user-images.githubusercontent.com/48167967/85358386-f6402500-b4e9-11ea-9616-ba3eb56deeb2.png"/>
<br/>
<img alt="gofinances-upload-gif" src="https://user-images.githubusercontent.com/48167967/85365118-11fff700-b4fb-11ea-8670-47dcf7834fb3.gif"/>

## :rocket: Technologies

#### Frontend
-  [Typescript](https://www.typescriptlang.org/)
-  [React Js](https://reactjs.org/)
-  [styled-components](https://www.styled-components.com/)
-  [VS Code](https://code.visualstudio.com/) with [EditorConfig](https://editorconfig.org/) and [ESLint](https://eslint.org/docs/user-guide/getting-started)

#### Backend
-  [Typescript](https://www.typescriptlang.org/)
-  [Node.js](https://nodejs.org/en/)
-  [Docker](https://www.docker.com/)

## :warning: Prerequisites

To run this aplication you need to download:
- [Git](https://git-scm.com)
- [Node.js v12.18.1](https://nodejs.org/dist/v12.18.1/node-v12.18.1-linux-x64.tar.xz) - LTS version
- [Yarn v1.13](https://yarnpkg.com/getting-started) - package manager
- [Docker with postgres database](https://hub.docker.com/_/postgres) - follow the instructions to create a conteiner that will      contains the image of postgres.
- [React Js](https://reactjs.org/)

  
## :information_source: Getting Started

```bash
# Clone this repository
$ git clone https://github.com/esterandr02/Go-Finances.git

# Go into the repository
$ cd Go-Finances
```
### Frontend
```bash
$ cd frontend

# Install dependences
$ yarn

# Start the app
$ yarn start
```

### Backend

```bash
$ cd backend

# Install dependences
$ yarn

# Create a Docker container
$ sudo docker run --name gostack-postgres -e POSTGRES_PASSWORD=gostack -p 5432:5432 -d postgres

# Start conteiner - (if your machine has been powered off)
$ docker start (container name/id)

# Ckeck port - (if port 5432 has being used)
$ lsof -i :5432
$ sudo kill -9 (process that is using the port)

# Construct database tables
$ yarn typeorm migration:run

# Start the Server
$ yarn dev:server

Now you can use the app :D

obs: Ctrl + C to stop the server and the frontend too.
```

Made with ♥ by Ester :wave: [Get in touch!](https://www.linkedin.com/in/ester-albuquerque-3589911a6/)
