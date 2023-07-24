# Org Monster Backend

Org Monster is a Chrome Extension designed to help you effortlessly follow GitHub organizations. This repository serves as the backend for the Org Monster Chrome Extension. Please note that the project is currently under development and not fully integrated yet.

## Introduction

Org Monster is a tool that aims to simplify the process of following GitHub organizations, keeping you updated with their latest activities and repositories. The backend is built using [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/), providing a robust foundation for handling user data and organization updates.

## Installation

To set up the Org Monster backend locally, follow these steps:

1. Clone the repository from GitHub:

```bash
git clone https://github.com/whoisaditya/org-monster-backend.git
cd org-monster-backend
```

2. Install the required dependencies using npm:

```bash
npm install
```

3. Configure Environment Variables:

   - Create a `.env` file in the root directory of the project.
   - Define the necessary environment variables in this file, such as database credentials and GitHub API tokens.

4. Start the development server:

```bash
npm run dev
```

The backend server should now be up and running locally.

## Routes

The backend provides the following API routes:

### POST /api/user/add

This route allows you to add a new user to the Org Monster system. Users are required to provide their GitHub credentials to access organization information.

#### Request Body

- `username`: GitHub username of the user (string, required)
- `password`: GitHub password of the user (string, required)

#### Response

- Success: Status 200 and a success message.
- Failure: Status code and an error message.

### PUT /api/user/:userId/updateorg

This route enables users to update the organizations they are following. The user's GitHub credentials are used to fetch the latest organization data.

#### Parameters

- `userId`: The ID of the user (string, required)

#### Request Body

- `username`: GitHub username of the user (string, required)
- `password`: GitHub password of the user (string, required)

#### Response

- Success: Status 200 and a success message.
- Failure: Status code and an error message.

## License

Org Monster Backend is released under the [MIT License](LICENSE).

---