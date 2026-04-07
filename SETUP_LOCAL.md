# 🚀 Quick Local Setup Guide

Run this project locally in 5 minutes.

## Prerequisites

```bash
node --version    # Ensure v16+
npm --version
mongod --version  # or use MongoDB Atlas
```

## Setup Steps

### 1️⃣ Install & Configure Backend

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
PORT=4000
NODE_ENV=development
MONGO_URL="mongodb://127.0.0.1:27017/grocery_ecommerce"
JWT_SECRET="your_secret_key"
SELLER_EMAIL="admin@gmail.com"
SELLER_PASSWORD="admin123"
FRONTEND_URL="http://localhost:5173"
```

### 2️⃣ Start Backend

```bash
npm run dev
```

→ Runs on http://localhost:4000

### 3️⃣ Install & Start Frontend

```bash
cd Client
npm install
npm run dev -- --host
```

→ Runs on http://localhost:5173

### 4️⃣ Start MongoDB (if local)

```bash
# In another terminal
mongod
```

## 🎯 Access Points

| Feature     | URL                                | Credentials                 |
| ----------- | ---------------------------------- | --------------------------- |
| User App    | http://localhost:5173              | Register or use any account |
| Admin Panel | http://localhost:5173/seller-login | admin@gmail.com / admin123  |
| Backend API | http://localhost:4000              | Base URL for all requests   |

## 📋 Order Status Values

When testing orders, use these status values:

- `Order Received`
- `Packed`
- `Out for Delivery`
- `Delivered`

To update: Edit order document in MongoDB directly (temporary until UI is built).

## ⚠️ Common Issues

**Backend won't start?**

- Check MongoDB is running
- Verify port 4000 is free
- Check MONGO_URL in .env is correct

**Frontend shows blank page?**

- Wait 5-10 seconds for Vite to bundle
- Check http://localhost:5173 in browser
- Clear browser cache

**Can't login as admin?**

- Ensure email & password match .env exactly
- Check backend is running

## 📚 Full Guide

See [README.md](README.md) for detailed instructions, troubleshooting, and optional Cloudinary/Stripe setup.

## 🔑 Key Env Variables

| Variable                    | Purpose                    | Example                                     |
| --------------------------- | -------------------------- | ------------------------------------------- |
| MONGO_URL                   | Database connection        | mongodb://127.0.0.1:27017/grocery_ecommerce |
| JWT_SECRET                  | Session token encryption   | any_random_string                           |
| SELLER_EMAIL                | Admin login email          | admin@gmail.com                             |
| SELLER_PASSWORD             | Admin login password       | admin123                                    |
| VITE_BACKEND_URL (Frontend) | API base URL for frontend  | http://localhost:4000                       |
| CLOUD_NAME                  | Cloudinary (optional)      | your_cloud_name                             |
| STRIPE_SECRET_KEY           | Stripe payments (optional) | sk_test_xxxxx                               |

---

**Need help?** Check [README.md](README.md) Troubleshooting section.
