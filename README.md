# Backend Ledger

A backend-focused ledger system built with **Node.js, Express.js, and MongoDB** to manage accounts, process transactions, and maintain ledger records. The project explores transactional workflows, authentication, idempotency, and database aggregation.

## 🚀 Features

- **Account Management** — Organizes account data using MongoDB and Mongoose models.
- **Transaction Processing** — Implements backend workflows for handling account transactions.
- **Ledger Records** — Maintains transaction-related ledger entries for tracking financial activity.
- **JWT Authentication** — Uses JSON Web Tokens to support authenticated requests.
- **Idempotency Handling** — Includes checks intended to prevent duplicate transaction processing.
- **MongoDB Transactions** — Uses MongoDB sessions to coordinate related database operations.
- **Balance Aggregation** — Uses MongoDB aggregation pipelines to calculate account balances from ledger data.
- **Email Notifications** — Integrates Nodemailer for transaction-related email notifications.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | REST API and backend routing |
| MongoDB | Persistent data storage |
| Mongoose | Schema modeling and database operations |
| JSON Web Token (JWT) | Authentication |
| Nodemailer | Email notifications |

## 📂 Core Components

The backend is organized around the following concepts:

- **Accounts:** Stores account-related information.
- **Transactions:** Represents transaction requests and their associated details.
- **Ledger:** Stores transaction-related entries used for balance calculations.
- **Authentication:** Handles token-based authentication.
- **Notifications:** Supports email delivery through Nodemailer.

## ⚙️ Getting Started

### Prerequisites

- Node.js and npm
- MongoDB running locally or a MongoDB Atlas connection
- Email account or SMTP credentials for notifications

### 1. Clone the repository

```bash
git clone https://github.com/kaustubh-web/Backend-Ledger.git
cd Backend-Ledger
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root and configure the variables expected by your application.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_secret_key
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_or_smtp_credential
```

Use the exact environment variable names referenced in your source code. Keep `.env` out of version control and never commit real credentials.

### 4. Start the server

Run the development or start command configured in your `package.json`, for example:

```bash
npm run dev
```

If your project uses a different script, use the corresponding command from `package.json`.

## 🔄 Transaction Workflow

The intended transaction workflow is designed around these steps:

1. Authenticate the request.
2. Validate the transaction details.
3. Check for an existing idempotency key where applicable.
4. Execute related database operations using a MongoDB session.
5. Record the associated ledger entries.
6. Calculate balances using ledger data.
7. Trigger transaction-related email notifications.

The exact guarantees of this workflow depend on validation, transaction handling, and error recovery in the implementation.

## 🔐 Security Considerations

- Store secrets and credentials in environment variables.
- Validate and authorize requests before modifying account data.
- Validate transaction amounts and account ownership.
- Ensure transaction operations are atomic and idempotent before relying on them for financial workflows.
- Configure appropriate database permissions and secure SMTP credentials.

## 🧠 What This Project Explores

- REST API development with Express.js
- Data modeling with MongoDB and Mongoose
- JWT-based authentication
- Database transactions and session management
- Idempotency in transaction APIs
- Ledger-based balance calculations
- Error handling and asynchronous backend operations
- Email integration using Nodemailer

## 👨‍💻 Author

**Kaustubh Bramhe**

- GitHub: [kaustubh-web](https://github.com/kaustubh-web)
- LinkedIn: [Kaustubh Bramhe](https://www.linkedin.com/in/kaustubh-bramhe-1b7565291/)

---

*This project is intended for learning and demonstrating backend engineering concepts. It should not be used to process real financial transactions without thorough correctness, security, concurrency, and failure-recovery testing.*
