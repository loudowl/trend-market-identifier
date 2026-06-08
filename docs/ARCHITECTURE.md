# Architecture Document: Agentic Task Runner App

## 1. Tech Stack

### Frontend
- **Framework**: React 18.2.0
- **State Management**: Redux 4.2.0
- **Styling**: Styled-components 5.3.3
- **Typography**: Google Fonts (Roboto, Open Sans)

### Backend
- **Framework**: Node.js 18.14.0 with Express 4.18.2
- **Task Scheduling**: Bull 4.0.2 (for task queues)
- **Local Model Processing**: Ollama (latest stable version)

### Database
- **Primary Database**: PostgreSQL 14
- **Cache**: Redis 7.0.5 (for caching API responses and task results)

### Hosting and Deployment
- **Frontend Hosting**: Vercel
- **Backend Hosting**: AWS EC2
- **Database Hosting**: AWS RDS (PostgreSQL)
- **CI/CD**: GitHub Actions for automated testing and deployment

## 2. Project Structure

```
agentic-task-runner-app/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── redux/
│   │   ├── styles/
│   │   ├── utils/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   └── package.json
│
├── database/
│   ├── migrations/
│   └── seeds/
│
└── .github/
    └── workflows/
        └── ci-cd.yml
```

## 3. API Design

### Authentication
- **POST /api/auth/login**
  - Request: `{ "username": "string", "password": "string" }`
  - Response: `{ "token": "string" }`

- **POST /api/auth/register**
  - Request: `{ "username": "string", "email": "string", "password": "string" }`
  - Response: `{ "message": "string" }`

### Reports
- **GET /api/reports/:type**
  - Parameters: `type` (morning, afternoon, nightly)
  - Response: `{ "type": "string", "timestamp": "string", "data": [ ... ] }`

### Data Integration
- **GET /api/data/fetch**
  - Response: `{ "status": "string", "message": "string" }`

## 4. Data Models

### Users
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Reports
```sql
CREATE TABLE reports (
    id SERIAL PRIMARY KEY,
    type VARCHAR(50) NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data JSONB NOT NULL
);
```

## 5. Authentication

### Approach
- **JWT (JSON Web Tokens):** for stateless authentication.
- **Flow:**
  - User registers or logs in.
  - Server generates a JWT and sends it to the client.
  - Client stores the token in localStorage.
  - Subsequent requests include the JWT in the Authorization header.

## 6. State Management

- **Redux** for global state management.
- **Redux Thunk** for handling asynchronous operations like API requests.
- **Local State** managed via React hooks for component-specific states.

## 7. Key Dependencies

### Frontend
- `react`: UI framework
- `redux`: State management
- `styled-components`: Component styling

### Backend
- `express`: Web framework
- `jsonwebtoken`: JWT handling
- `pg`: PostgreSQL client
- `bull`: Task scheduling
- `axios`: HTTP client for API requests

## 8. Deployment

### Hosting
- **Frontend**: Vercel for ease of deployment and scalability.
- **Backend**: AWS EC2 for flexibility and control over server configuration.
- **Database**: AWS RDS for managed database services.

### CI/CD
- **GitHub Actions**: Automate testing and deployment.
  - On push to `main`, run tests.
  - On successful test, deploy to respective environments (staging/production).

By leveraging a combination of local models and strategic API usage, this architecture aims to balance performance, cost, and scalability effectively.