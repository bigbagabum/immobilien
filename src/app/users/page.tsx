import { User } from "@/common/types/User";
async function fetchUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    //cache: "no-store",
    next: { revalidate: 60 }, //isr - incremental static regeneration
  });
  return res.json();
}
//SSG - 	При билде (next build)
// next: { revalidate: false }, // или не указывать вовсе

//SSR	При каждом запросе
//cache: "no-store",

//ISR - Incremental static regeneration
//next: { revalidate: 60 }, save the page for 60 seconds
const UsersPage = async () => {
  const users = await fetchUsers();
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
