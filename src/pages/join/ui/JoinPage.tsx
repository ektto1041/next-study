"use client";

import { joinAction } from "@shared/apis/actions";
import { useActionState } from "react";

export function JoinPage() {
  const [state, formAction, pending] = useActionState(joinAction, {
    message: "",
  });

  return (
    // <form action="http://localhost:8080/join" method="post" target="_blank">
    <form action={formAction}>
      <div>
        <label>
          Car Name:
          <input name="carName" type="text" />
        </label>
      </div>
      <div>
        <label>
          Car Dist:
          <input name="carDist" type="number" />
        </label>
      </div>
      <button type="submit" disabled={pending}>
        Submit
      </button>
      <p style={{ color: "red" }}>{state?.message}</p>
    </form>
  );
}
