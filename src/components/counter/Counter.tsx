"use client"

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter</h2>
      Count: {count}
    </div>
  )
}
