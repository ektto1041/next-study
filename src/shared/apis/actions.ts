"use server";

import { redirect } from "next/navigation";

export async function joinAction(
  prevState: { message: string },
  formData: FormData
): Promise<{ message: string }> {
  try {
    const response = await fetch("http://localhost:3000/api", {
      method: "POST",
      body: formData,
    });

    // Expected Errors
    if (!response.ok) {
      return {
        message: "Please check input",
      };
    }
  } catch (e) {
    // 이건 Unexpected, 왜냐면 아예 localhost:8080 에 서버가 없어서 fetch 자체가 실패함
    // 실패했다는 응답조차 없음
    return {
      message: (e as Error).message,
    };
  }

  redirect("/");
  return { message: "SUCCESS" };
}
