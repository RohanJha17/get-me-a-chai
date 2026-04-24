import PaymentPage from '@/components/PaymentPage'
import { notFound } from "next/navigation"
import connectDb from '@/db/connectDb'
import User from '@/models/User'

const Username = async ({ params }) => {
  const { username } = await params; 

  await connectDb();
  const u = await User.findOne({ username });

  if (!u) {
    return notFound();
  }

  return <PaymentPage username={username} />;
};

export default Username;

export async function generateMetadata({ params }) {
  const { username } = await params; 

  return {
    title: `BrewFund - Support ${username}`,
  };
}
