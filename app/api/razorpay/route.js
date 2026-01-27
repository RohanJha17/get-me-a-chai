import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import connectDb from "@/db/connectDb";
import Payment from "@/models/Payment";

export const POST = async (req) => {
  await connectDb();

  const formData = await req.formData();
  const body = Object.fromEntries(formData);

  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  } = body;

  const payment = await Payment.findOne({
    oid: razorpay_order_id,
  });

  if (!payment) {
    return NextResponse.json(
      {
        success: false,
        message: "Order not found",
      },
      { status: 400 }
    );
  }

  const isValid = validatePaymentVerification(
    {
      order_id: razorpay_order_id,
      payment_id: razorpay_payment_id,
    },
    razorpay_signature,
    process.env.RAZORPAY_KEY_SECRET // ✅ SAME SECRET
  );

  if (!isValid) {
    return NextResponse.json(
      {
        success: false,
        message: "Payment verification failed",
      },
      { status: 400 }
    );
  }

  const updatedPayment = await Payment.findOneAndUpdate(
    { oid: razorpay_order_id },
    { done: true },
    { new: true }
  );

  return NextResponse.redirect(
  `${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`
  );

};
