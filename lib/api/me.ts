//? GET CURRENT USER INSIDE CLIENT COMPONENTS ONLY
export async function fetchCurrentUser() {
  const response = await fetch("/api/auth/me");

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message);
  }

  return result.data;
}
