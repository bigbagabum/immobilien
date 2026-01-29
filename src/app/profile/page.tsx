import { getServerSession } from "next-auth/next";
import Image from "next/image";

const Profile = async () => {
  const session = await getServerSession();
  if (!session) {
    return (
      <div>
        <h1>Please log in to view your profile.</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome, {session.user?.name}!</p>
      <p>{session.user?.email}</p>
      <Image
        src={session.user?.image || ""}
        alt={session.user?.name || ""}
        width={200}
        height={200}
        unoptimized
      />
    </div>
  );
};

export default Profile;
