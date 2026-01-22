import Image from "next/image";
export default function Me() {
  const avatarUrl =
    "https://cdn.iconscout.com/icon/free/png-256/free-avatar-icon-svg-download-png-456327.png";

  return (
    <section className="Grid grid-cols-4">
      <h2>John Smith</h2>
      <Image src={avatarUrl} alt="avatar" width={200} height={200} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi obcaecati explicabo inventore aperiam fugiat praesentium eum dicta quibusdam veniam iusto. Exercitationem consequatur eligendi, consectetur minima nesciunt cum nobis sequi corrupti.</p>
      <div className="min-h-16 m-12">
      <a href="mailto:dmitrii@gmail.com" className="border px-12 m-10 hover:bg-amber-200 round-4xl transition">Contact me</a>
        
      </div>
    </section>
  );
}
