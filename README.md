# PhonePe Clone - Backend

A Node.js/Express backend implementation of a digital payment system similar to PhonePe. This project includes user authentication, wallet management, and transaction processing.

## Features

- **User Authentication**: Register and login with email/phone
- **JWT-based Authorization**: Secure token-based authentication
- **Wallet Management**: Manage user balance and transaction history
- **Money Transfer**: Send money between users using UPI IDs
- **MPIN Security**: Set and verify MPIN for transactions
- **Transaction History**: View all transaction records
- **Swagger Documentation**: Auto-generated API documentation

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Swagger** - API documentation
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment configuration

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Steps

1. **Clone the repository**

```bash
git clone https://github.com/AARAMBH12/Phonepe-clone-Backend.git
cd phonepeclone
```

2. **Install dependencies**

```bash
npm install
```

3. **Create `.env` file** in the root directory:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/phonepe-BE-system-DEV
JWT_SECRET=your_jwt_secret_key_HHD,DDNDVMDFDFK,VNMDBDCNDSBDJCDCBDSscdddcjj
```

4. **Start the server**

```bash
npm run dev
```

The server will run on `http://localhost:3000`

## API Endpoints

### Authentication Routes (`/api/auth`)

#### Register User

```
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "password": "password123"
}
```

#### Login

```
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Profile

```
GET /api/auth/profile
Authorization: Bearer <JWT_TOKEN>
```

#### Setup MPIN

```
POST /api/auth/set-mpin
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

{
  "mpin": "1234"
}
```

### Transaction Routes (`/api/transactions`)

#### Send Money

```
POST /api/transactions/send
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

{
  "receiverUpi": "john954@phonepe",
  "amount": 500,
  "mpin": "1234",
  "description": "Payment for lunch"
}
```

#### Get Transaction History

```
GET /api/transactions/history
Authorization: Bearer <JWT_TOKEN>
```

## Project Structure

```
phonepeclone/
├── src/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js  # Auth logic
│   │   └── transactionController.js # Transaction logic
│   ├── models/
│   │   ├── User.js            # User schema
│   │   └── Transaction.js     # Transaction schema
│   ├── middlewares/
│   │   └── authMiddleware.js  # JWT verification
│   └── routes/
│       ├── authRoutes.js      # Auth endpoints
│       └── transactionRoutes.js # Transaction endpoints
├── server.js                  # Express app setup
├── swagger.js                 # Swagger config
├── package.json               # Dependencies
└── .env                       # Environment variables
```

## Usage Example

### 1. Register a new user

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Alice",
    "email": "alice@example.com",
    "phone": "9876543210",
    "password": "securepass123"
  }'
```

### 2. Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "alice@example.com",
    "password": "securepass123"
  }'
```

### 3. Setup MPIN

```bash
curl -X POST http://localhost:3000/api/auth/set-mpin \
  -H "Authorization: Bearer <JWT_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "mpin": "1234"
  }'
```

### 4. Send Money

```bash
curl -X POST http://localhost:3000/api/transactions/send \
  -H "Authorization: Bearer <JWT_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "receiverUpi": "receiver_upi@phonepe",
    "amount": 100,
    "mpin": "1234",
    "description": "Payment"
  }'
```

## API Documentation

Access Swagger documentation at:

```
http://localhost:3000/api-docs
```

## Database Models

### User Schema

- `name`: String (required)
- `email`: String (required, unique)
- `phone`: String (required, unique)
- `password`: String (required, hashed)
- `upiId`: String (unique, auto-generated)
- `mpin`: String (hashed)
- `balance`: Number (default: 1000)
- `timestamps`: createdAt, updatedAt

### Transaction Schema

- `sender`: ObjectId (reference to User)
- `receiver`: ObjectId (reference to User)
- `amount`: Number (required)
- `type`: String (TRANSFER, ADD_MONEY, WITHDRAW, BILL_PAY)
- `status`: String (SUCCESS, FAILED, PENDING)
- `description`: String
- `timestamps`: createdAt, updatedAt

## Security Features

- **Password Hashing**: Passwords are hashed using bcryptjs with salt rounds
- **MPIN Protection**: MPIN is hashed and verified before transactions
- **JWT Authentication**: Secure token-based authorization
- **CORS**: Cross-origin requests are controlled
- **Environment Variables**: Sensitive data stored in `.env`

## Error Handling

The API returns appropriate HTTP status codes:

- `200`: Success
- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `404`: Not Found
- `500`: Server Error

## Contributing

Contributions are welcome! Please feel free to submit pull requests.

## License

This project is open source and available under the MIT License.

## Contact

For questions or support, please reach out to the repository owner.

---

**Note**: This is a demo/educational project. For production use, implement additional security measures, data validation, and error handling.
