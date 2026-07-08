export async function logoutUser() {
  const response = await fetch("/api/auth/logout", {
    method: "POST",
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message);
  }

  return result;
}
