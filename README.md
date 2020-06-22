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
  <img alt="github-license" src="https://img.shields.io/static/v1?label=license&message=MIT&color=blueviolet">
</p>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#warning-prerequisites">Prerequisites</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

This project was developed by Rcketseat Bootcamp course.

## :rocket: Technologies

#### Frontend
-  [Typescript](https://www.typescriptlang.org/)
-  [React Js](https://reactjs.org/)
-  [styled-components](https://www.styled-components.com/)
-  [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

#### Backend
-  [Typescript](https://www.typescriptlang.org/)
-  [Node.js](https://nodejs.org/en/)
-  [Docker](https://www.docker.com/)

## :warning: Prerequisites

To run this aplication you need to download:
- [Git](https://git-scm.com)
- [Node.js v12.18.1](https://nodejs.org/dist/v12.18.1/node-v12.18.1-linux-x64.tar.xz)(LTS version)
- [Yarn v1.13][yarn] - package manager
- [Docker with postgres database](https://hub.docker.com/_/postgres) - follow the instructions to create a conteiner that will      contains the image of postgres.
- [React Js](https://reactjs.org/)

  
## :information_source: Getting Started

```bash
# Clone this repository
$ git clone https://github.com/esterandr02/Go-Finances

# Go into the repository
$ cd Go-Finances
```
### Backend

```bash
$ cd backend

# Install dependences
$ yarn

# Create a Docker container
$ sudo docker run --name gostack-postgres -e POSTGRES_PASSWORD=gostack -p 5432:5432 -d postgres

# Start conteiner - (if your machine has been power off)
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

Made with ♥ by Ester :wave: [Get in touch!](https://www.linkedin.com/in/esterandr/)
