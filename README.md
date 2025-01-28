# Tech Blog

## Description
A CMS-style blog site where developers can publish their blog posts and comment on other developers' posts. This application follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Database Schema](#database-schema)
- [API Routes](#api-routes)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features
- User authentication (signup/login)
- Create, read, update, and delete blog posts
- Comment on blog posts
- Dashboard for managing your posts
- Responsive design
- Session management
- Password encryption

## Installation
1. Clone the repository:

2. Install dependencies:

3. Create a `.env` file in the root directory with the following content:

DB_NAME='techblog_db'
DB_USER='your_username'
DB_PASSWORD='your_password'

4. Create the database:

mysql -u root -p
source db/schema.sql

5. Seed the database (optional):

npm run seed

## Usage
1. Start the server:

npm start

2. Visit `http://localhost:3001` in your browser

## Technologies Used
- Node.js
- Express.js
- MySQL2
- Sequelize
- Handlebars.js
- bcrypt
- express-session
- connect-session-sequelize
- dotenv
- PostgreSQL

## Database Schema

### Users
- id (Primary Key)
- name
- email
- password

### Posts
- id (Primary Key)
- title
- content
- user_id (Foreign Key)
- created_at
- updated_at

### Comments
- id (Primary Key)
- content
- user_id (Foreign Key)
- post_id (Foreign Key)
- created_at
- updated_at

## API Routes

### User Routes
- `POST /api/users` - Create new user
- `POST /api/users/login` - User login
- `POST /api/users/logout` - User logout

### Post Routes
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create new post
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post

### Comment Routes
- `POST /api/comments` - Create new comment
- `DELETE /api/comments/:id` - Delete comment

## Screenshots
[Add screenshots of your application here]

## Contributing
1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License
This project is licensed under the ISC License.

## Questions
For any questions, please contact [Alberto] at [your.email@example.com].

