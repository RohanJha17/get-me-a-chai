# ☕ BrewFund

**BrewFund** is a modern creator-support platform where fans can support their favorite creators by buying them a brew ☕.  
Creators can set up customizable profiles, receive secure payments, and showcase their top supporters in a simple and friendly way.

Built with **Next.js (App Router)**, **React 19**, and a scalable architecture.

---

### 🖥️ App Interface
![App Interface](./public/site.png)

## ✨ Key Features

### 👤 Creator Experience
- **Dynamic Creator Profiles:** Every creator gets a personalized route (e.g., `/[username]`) acting as their public portfolio.
- **Profile Customization:** Upload profile pictures & cover images, and set custom display names directly from a protected Dashboard.
- **Supporter Leaderboard:** Automatically displays a list of the top 10 most recent successful donations on your profile.

### ☕ Supporter Experience
- **Seamless Support:** Support creators with one-time payments through a fast, integrated checkout flow.
- **Personalized Messages:** Leave an optional name and supportive message with each contribution.

### 🧠 Platform Architecture
- **OAuth Authentication:** Secure, passwordless login using GitHub and Google (via NextAuth.js).
- **Payment Verification:** Webhook-based server-side payment signature verification using Razorpay SDK to ensure complete transaction security.
- **Data Integrity:** Intelligent username updates that automatically migrate all historical payments to the new username.
- **Server Actions:** Utilizes Next.js Server Actions for seamless client-to-server database mutations without traditional API boilerplate.

---

## 🛠️ Tech Stack

- **Framework:** Next.js v16 (App Router)
- **Frontend Library:** React v19
- **Styling:** Tailwind CSS v4
- **Database:** MongoDB
- **ORM / Data Modeling:** Mongoose v9
- **Authentication:** NextAuth.js v4 (GitHub & Google Providers)
- **Payment Gateway:** Razorpay Node SDK
- **Notifications:** React Toastify

---

## 📂 Project Structure

```text
brewfund/
├── actions/         # Next.js Server Actions (useractions.js)
├── app/             # App Router pages, layouts, and API routes (Auth & Razorpay Webhooks)
├── components/      # Reusable React components (Navbar, Footer, etc.)
├── db/              # Database connection utilities
├── models/          # MongoDB schemas (User, Payment)
├── public/          # Static assets (images, logos)
├── .env.local       # Environment variables
└── README.md
```

---

## 🧑‍💻 Getting Started

### 1️⃣ Clone the repository & Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2️⃣ Environment Variables Setup

Create a `.env.local` file in the root directory and add the following keys:

```env
# GitHub OAuth
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret

# Google OAuth (Optional, if configured)
GOOGLE_ID=your_google_client_id
GOOGLE_SECRET=your_google_client_secret

# Razorpay Keys
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
CURRENCY="₹"

# App URLs (Change to your deployed URL in production)
NEXT_PUBLIC_URL=http://localhost:3000
NEXTAUTH_URL=http://localhost:3000

# NextAuth Secret & Database
NEXTAUTH_SECRET=your_strong_random_secret_key
MONGO_URI=your_mongodb_connection_string
```

### 3️⃣ Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Your application will be available at [http://localhost:3000](http://localhost:3000).

---

## 🧑‍💻 Author

Built by **[Rohan Jha]**
💼 Full-Stack Developer
☕ Fueled by brews and clean code
