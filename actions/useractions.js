"use server";

import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import connectDb from "@/db/connectDb";
import User from "@/models/User";

export const initiate = async (amount, to_username, paymentform) => {
  await connectDb();

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  const order = await razorpay.orders.create({
    amount: Number(amount),
    currency: "INR",
  });

  await Payment.create({
    oid: order.id,
    amount: amount / 100,
    to_user: to_username,
    name: paymentform.name,
    message: paymentform.message,
    done: false,
  });

  // ✅ ONLY return plain data
  return { orderId: order.id };
};


export const fetchuser = async (username) => {
  await connectDb();

  const user = await User.findOne({ username }).lean();
  if (!user) return null;

  return {
    ...user,
    _id: user._id.toString(),
  };
};


export const fetchpayments = async (username) => {
  await connectDb();

  const payments = await Payment.find({
    to_user: username,
    done: true,
  })
    .sort({ amount: -1 })
    .limit(10)
    .lean();

  // 🔥 FORCE plain objects
  return payments.map(p => ({
    ...p,
    _id: p._id.toString(),
  }));
};



export const updateProfile = async (data, oldusername) => {
  await connectDb();

  const ndata = Object.fromEntries(data);

  // If username is being updated, check availability
  if (oldusername !== ndata.username) {
    const existingUser = await User.findOne({
      username: ndata.username,
    });

    if (existingUser) {
      return { error: "Username already exists" };
    }

    await User.updateOne({ email: ndata.email }, ndata);

    // Update username in Payments collection
    await Payment.updateMany(
      { to_user: oldusername },
      { to_user: ndata.username }
    );
  } else {
    await User.updateOne({ email: ndata.email }, ndata);
  }
};
