import { apiFetch } from "./client";

//? GET CURRENT USER INSIDE CLIENT COMPONENTS ONLY
export async function fetchCurrentUser() {
  return apiFetch("/api/auth/me");
}
