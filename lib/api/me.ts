//? GET CURRENT USER INSIDE CLIENT COMPONENTS ONLY
export async function fetchCurrentUser() {
  const response = await fetch("/api/auth/me");

  if (!response.ok) {
    throw new Error("Unauthorized");
  }

  return response.json();
}
