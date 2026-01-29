import { createTodo } from "@/app/actions/create-todo";

export default function AddTodo() {
  return (
    <section>
      <h2>Add todo</h2>
      <form action={createTodo}>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="description" placeholder="description" />

        <button type="submit">Save</button>
      </form>
    </section>
  );
}