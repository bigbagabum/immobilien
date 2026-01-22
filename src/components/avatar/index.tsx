import Image from "next/image";

export default function Avatar() {
  const avatarUrl =
    "https://cdn.iconscout.com/icon/free/png-256/free-avatar-icon-svg-download-png-456327.png";
  return (
    <div>
        <h2>John Smith</h2>
      <Image src={avatarUrl} alt="avatar" width={200} height={200} />
    </div>
  );
}
