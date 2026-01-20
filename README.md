<div align="center">
  <h1="center">LeafMetric - Ceylon Tea Grading System API</h1>
</div>

### LeafMetric – Ceylon Tea Grading System API is a Node.js and Express backend that powers a mobile app for intelligent tea quality assessment. It handles secure user registration and login, manages image uploads and sensory input data, and orchestrates an AI-driven pipeline to analyze tea leaves and provide actionable feedback.

### The API emphasizes security with hashed passwords, JWT-based authentication, and input validation, while remaining modular and scalable through reusable service layers and structured route organization. It delivers reliable, production-ready functionality for the mobile client, enabling consistent tea grading and insightful quality feedback.

### Built with

- [![Node][Node.js]][Node-url]
- [![Express][Express.js]][Express.js-url]
- [![PostgreSQL][PostgreSQL]][PostgreSQL-url]
- [![Sequelize][Sequelize]][Sequelize-url]

## Getting started

### Prerequisites

- NodeJS: [NodeJS download page](https://nodejs.org/en/download)
- PostgreSQL: [PostgreSQL download page](https://www.postgresql.org/download/)
- Postman: [Postman download page](https://www.postman.com/downloads/)

### Installation

1. Clone the repo
   ```bash
   git clone https://github.com/RushRosairo0/ceylon-tea-grading-system-api.git
   ```
2. Step into the project
   ```bash
   cd ceylon-tea-grading-system-api
   ```

### Environment variables setup

#### Server side

1. Create a `.env` file in root folder
   ```
   New-Item -Path . -Name ".env" -ItemType "File"
   ```
2. Open the `.env` file and update the variables

   ```
   ## env variables
   NODE_ENV=development
   HOST=0.0.0.0
   PORT=8000

   ## database configuration
   PG_USER=<postgreSQL user name>
   PG_PASSWORD=<database password>
   PG_DATABASE=<database name>
   PG_HOST=<database host>
   PG_MAXCONN=150

   ## jwt secret
   ACCESS_TOKEN_SECRET=<randomly generated secure string>
   ```

### Start the project using terminal

1. Install NPM packages
   ```bash
   npm install
   ```
2. Create database tables
   ```bash
   npm run migrate
   ```

### Other scripts

1. Undo the most recent migration
   ```bash
   npm run migrate:down
   ```
2. Undo all migration
   ```bash
   npm run migrate:down:all
   ```

<!-- MARKDOWN LINKS & IMAGES -->

[Node.js]: https://img.shields.io/badge/Node.js-12A952?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[Express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express.js-url]: https://expressjs.com/
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[Sequelize]: https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white
[Sequelize-url]: https://sequelize.org/
