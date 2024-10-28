# NODE-SERVER Example 💻

Hello and welcome! This Node.JS project demonstrates a simple architecture building a full API with Node.JS, Express.JS, and MongoDB presents an architectural demo of these features:

- Built with Node.js and Express
- REST API

## Table of Contents

- [Express Router and Routes](#express-router-and-routes)
  - [Task Routes](#task-routes)
  - [Asset Routes](#asset-routes)
- [Usage](#usage)
  - [Basic example Create TASK](#basic-example-create-task-apitasks)
  - [Basic example Create ASSET](#basic-example-create-asset-apiassets)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Developing](#developing)

## Express Router and Routes

### Task Routes

| Route          | HTTP Verb | Route Middleware | Description        |
| -------------- | --------- | ---------------- | ------------------ |
| /api/tasks     | GET       |                  | Get list of tasks  |
| /api/tasks     | POST      |                  | Creates a new task |
| /api/tasks/:id | GET       |                  | Get a single task  |
| /api/tasks/:id | DELETE    |                  | Deletes a task     |
| /api/tasks/:id | PATCH     |                  | Updates a task     |

### Asset Routes

| Route                  | HTTP Verb | Route Middleware | Description          |
| ---------------------- | --------- | ---------------- | -------------------- |
| /api/assets            | GET       |                  | Get list of assets   |
| /api/assets            | POST      |                  | Creates a new asset  |
| /api/assets/:id        | GET       |                  | Get a single asset   |
| /api/assets/:id        | DELETE    |                  | Deletes an asset     |
| /api/assets/:id        | PATCH     |                  | Updates an asset     |
| /api/assets/slug/:slug | GET       |                  | Get an asset by slug |

## Usage

The use of endpoints is very simple, previously you could see a table of endpoints that you can call, if you need to create a user or log in, here we have some examples.

### Basic example **Create TASK** `/api/taks`:

Request Body:

```json
{
  "title": "Create task",
  "description": "Endpoint para crear tareas"
}
```

Response:

```json
{
  "title": "Create task",
  "description": "Endpoint para crear tareas",
  "completed": false,
  "id": 4
}
```

### Basic example **Create ASSET** `/api/assets`:

Request Body:

```json
{
  "name": "New Asset",
  "price": 300,
  "slug": "new-asset"
}
```

Response:

```json
{
  "name": "New Asset",
  "price": 300,
  "slug": "new-asset",
  "id": 3
}
```

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node >= 16.14.x, npm >= 8.3.x

### Developing

1. Run `npm install` to install server dependencies.

2. Configure the env

```shell
$ cp .env.example .env
```

3. Update `.env` with the required info

4. Run `npm run dev` to start the development server.
