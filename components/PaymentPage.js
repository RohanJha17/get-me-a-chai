"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";
import { useSession } from "next-auth/react";
import { fetchuser, fetchpayments, initiate } from "@/actions/useractions";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notFound } from "next/navigation";

const PaymentPage = ({ username }) => {
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const router = useRouter();



  const [paymentform, setPaymentform] = useState({
    name: "",
    message: "",
    amount: "",
  });

  const [currentUser, setcurrentUser] = useState({});
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (
      searchParams.get("paymentdone") === "true" &&
      !toast.isActive("payment-success")
    ) {
      toast.success("Thanks for your donation!", {
        toastId: "payment-success",
        onClose: () => router.replace(`/${username}`),
      });
    }
  }, [searchParams, router, username]);


  const handleChange = (e) => {
    setPaymentform({
      ...paymentform,
      [e.target.name]: e.target.value,
    });
  };

  const getData = async () => {
    let u = await fetchuser(username);
    setcurrentUser(u);

    let dbpayments = await fetchpayments(username);
    setPayments(dbpayments);
    setLoading(false);
  };

  const pay = async (amount) => {
    // Get the order Id
    let a = await initiate(amount, username, paymentform);

    if (a.error) {
      toast.error(a.error);
      return;
    }

    let orderId = a.orderId;
    var options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: amount,
      currency: "INR",
      name: "BrewFund",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId,
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        name: paymentform.name,
        email: "rohan.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new Razorpay(options);
    rzp1.open();
  };

  if (status === "loading" || (status === "authenticated" && loading)) {
    return <p className="text-center mt-20 text-white">Loading...</p>
  }

  if (status === "unauthenticated") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-white mt-20">
        <h2 className="text-3xl font-bold mb-4">You have to login first</h2>
        <p className="text-slate-400 mb-6">Please log in to view this creator's page and make a donation.</p>
        <button onClick={() => router.push('/login')} className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Go to Login</button>
      </div>
    );
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      <div className="cover w-full relative mt-18">
        <img
          className="w-full h-100 shadow-blue-700 shadow-sm"
          src={currentUser.coverpic || "/coverpic.png"}
          alt="Cover Image"
          onError={(e) => { e.currentTarget.src = "/coverpic.png"; e.currentTarget.onerror = null; }}
        />

        <div className="absolute -bottom-20 right-[33%] md:right-[46%] border-white overflow-hidden border-2 rounded-full size-36 bg-white">
          <img
            className="rounded-full object-cover size-36"
            src={currentUser.profilepic || "/avatar.gif"}
            alt="Profile Image"
            onError={(e) => { e.currentTarget.src = "/avatar.gif"; e.currentTarget.onerror = null; }}
          />
        </div>
      </div>

      <div className="info flex justify-center items-center my-24 mb-32 flex-col gap-2">
        <div className="font-bold text-lg">@{username}</div>

        <div className="text-slate-400">
          Lets help {username} fund their next brew!
        </div>

        <div className="text-slate-400">
          {payments.length} Payments · ₹
          {payments.reduce((a, b) => a + b.amount, 0)} raised
        </div>

        <div className="payment flex gap-3 w-[80%] mt-11 flex-col md:flex-row">
          {/* Supporters */}
          <div className="supporters w-full md:w-1/2 bg-slate-900 rounded-lg text-white px-2 md:p-10">
            <h2 className="text-2xl font-bold my-5">Top 10 Supporters</h2>

            <ul className="mx-5 text-lg">
              {payments.length === 0 && <li>No payments yet</li>}

              {payments.map((p, i) => (
                <li key={i} className="my-4 flex gap-2 items-center">
                  <Image width={33} height={33} src="/avatar.gif" alt="user avatar" unoptimized />
                  <span>
                    {p.name} donated{" "}
                    <span className="font-bold">₹{p.amount}</span> with a
                    message &quot;{p.message}&quot;
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Make Payment */}
          <div className="makePayment w-full md:w-1/2 bg-slate-900 rounded-lg text-white px-2 md:p-10">
            <h2 className="text-2xl font-bold my-5">Make a Payment</h2>

            <div className="flex gap-2 flex-col">
              <input
                onChange={handleChange}
                value={paymentform.name}
                name="name"
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Name"
              />

              <input
                onChange={handleChange}
                value={paymentform.message}
                name="message"
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Message"
              />

              <input
                onChange={handleChange}
                value={paymentform.amount}
                name="amount"
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Amount"
              />

              <button
                onClick={() =>
                  pay(Number.parseInt(paymentform.amount) * 100)
                }
                disabled={
                  paymentform.name.length < 3 ||
                  paymentform.message.length < 4 ||
                  paymentform.amount.length < 1
                }
                className="text-white bg-linear-to-br from-purple-900 to-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 disabled:bg-slate-600 cursor-pointer disabled:cursor-not-allowed"
              >
                Pay
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-2 mt-5">
              <button className="bg-slate-800 p-3 rounded-lg cursor-pointer disabled:cursor-not-allowed disabled:bg-slate-600 disabled:text-slate-400" disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4} onClick={() => pay(1000)}>
                Pay ₹10
              </button>
              <button className="bg-slate-800 p-3 rounded-lg cursor-pointer disabled:cursor-not-allowed disabled:bg-slate-600 disabled:text-slate-400" disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4} onClick={() => pay(2000)}>
                Pay ₹20
              </button>
              <button className="bg-slate-800 p-3 rounded-lg cursor-pointer disabled:cursor-not-allowed disabled:bg-slate-600 disabled:text-slate-400" disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4} onClick={() => pay(3000)}>
                Pay ₹30
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
