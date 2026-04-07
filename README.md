E-Commerce Grocery Project

A full-stack grocery e-commerce web application where users can browse products, add items to their cart, place orders, and track order statuses.  
Admin (seller) can manage products, view orders, and update stock availability.

> 🚀 **New to this project?** Check [SETUP_LOCAL.md](SETUP_LOCAL.md) for a 5-minute quick-start guide.

---

## Live Demo

**Frontend:** "https://e-commerce-groceryproject.onrender.com"

**Backend:** https://e-commerce-groceryproject-1.onrender.com

---

## Admin Demo

###**Login Credentials**
SELLER_EMAIL="admin@gmail.com"
SELLER_PASSWORD="admin123"

### 🪄 **Admin Demo Steps**

1. **Login as Admin**
   - Go to the deployed site: https://e-commerce-groceryproject-1.onrender.com/
   - Navigate to the **Admin Login** (or **Seller Login**) page.
   - Enter the credentials above to log in.

2. **Access the Dashboard**
   - After successful login, you’ll be redirected to the **Admin Dashboard**.
   - From here, the admin can:
     - Add new grocery items/products
     - Update product details or stock availability
     - Delete specific items
     - View and manage customer order statuses

3. **Order Management**
   - Admin can track customer orders and update their statuses  
     (e.g., _Pending → Processing → Shipped → Delivered_).

---

## User Features

- Register and Login securely (JWT-based)
- Browse grocery items by category
- Add items to cart
- Place and track orders
- Manage delivery address
- Checkout functionality

---

## Tech Stack

### Frontend

- React.js
- Vite
- Axios
- Tailwind CSS

### Backend

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Cloudinary (for image storage)

---

## How to Run Locally

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)
- **MongoDB** (local installation or MongoDB Atlas cloud)
- **Git**

### Step-by-Step Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/Bhoomikals06/E-commerce-groceryproject.git
cd E-commerce-groceryproject
```

#### 2. Set Up MongoDB (Local)

**Option A: Local MongoDB**

- Install MongoDB on your machine
- Start MongoDB service:

  ```bash
  # Windows
  mongod

  # macOS/Linux
  brew services start mongodb-community
  ```

- Default connection: `mongodb://127.0.0.1:27017/grocery_ecommerce`

**Option B: MongoDB Atlas (Cloud)**

- Create account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
- Create a free cluster
- Get your connection string and use it in backend `.env`

#### 3. Set Up Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder with these keys:

```env
PORT=4000
NODE_ENV=development

MONGO_URL="mongodb://127.0.0.1:27017/grocery_ecommerce"
JWT_SECRET="your_secret_key_here"

SELLER_EMAIL="admin@gmail.com"
SELLER_PASSWORD="admin123"

# Optional (for image uploads)
CLOUD_NAME=""
CLOUD_API_KEY=""
CLOUD_API_SECRET=""

# Optional (for Stripe payment)
STRIPE_SECRET_KEY=""

# Frontend URL for CORS
FRONTEND_URL="http://localhost:5173"
```

Start backend dev server:

```bash
npm run dev
```

✅ Backend runs on `http://localhost:4000`

#### 4. Set Up Frontend

```bash
cd Client
npm install
```

The `.env` file should already point to local backend:

```env
VITE_BACKEND_URL="http://localhost:4000"
```

Start frontend dev server:

```bash
npm run dev -- --host
```

✅ Frontend runs on `http://localhost:5173`

#### 5. Access the Application

**User App:** http://localhost:5173/

- Browse products
- Add to cart
- Register/Login
- Place orders

**Admin Panel:** http://localhost:5173/seller-login

- **Email:** admin@gmail.com
- **Password:** admin123
- Manage products, orders, and inventory

---

### Troubleshooting

| Issue                        | Solution                                                       |
| ---------------------------- | -------------------------------------------------------------- |
| MongoDB connection error     | Ensure MongoDB is running. Check `MONGO_URL` in `.env`         |
| Frontend can't reach backend | Verify backend is on port 4000. Check CORS settings.           |
| Port already in use          | Change `PORT` in backend `.env` or kill process using the port |
| Module not found errors      | Run `npm install` again in the respective folder               |
| CSS not loading              | Clear browser cache or do hard refresh (Ctrl+Shift+R)          |

---

### Optional: Cloudinary Setup (Image Upload)

1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Get your credentials from the dashboard
3. Add to backend `.env`:

```env
CLOUD_NAME="your_cloud_name"
CLOUD_API_KEY="your_api_key"
CLOUD_API_SECRET="your_api_secret"
```

### Optional: Stripe Setup (Online Payments)

1. Create account at [stripe.com](https://stripe.com)
2. Get your secret key from the dashboard
3. Add to backend `.env`:

```env
STRIPE_SECRET_KEY="your_stripe_secret_key"
```

---

### Clone the Repository

```bash
git clone https://github.com/Bhoomikals06/E-commerce-groceryproject.git

```
