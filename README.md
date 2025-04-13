# Simple Number Management Service

A simple web service that manages a collection of numbers stored in database.

## Stack:

- **Language**: TypeScript
- **Framework**: NestJS
- **Database**: SQLite (via TypeORM)
- **Authentication**: Hardcoded Bearer Token using a NestJS Guard

## Setup

1. Clone the repository:
   git clone https://github.com/polinakremneva/number-service.git

2. Install dependencies:
   npm install

3. Run the dev mode:
   npm run start:dev

# Authentication

All endpoints are protected and require a Bearer token.
Use the following token in your requests: SECRET_TOKEN_123

Please create a .env file in the project root with the following variable: BEARER_TOKEN=SECRET_TOKEN_123

## You can test the API using Postman

Make sure to include the Authorization header in all requests.
