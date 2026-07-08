// lib/api/client.ts
export async function apiFetch(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);

  if (!response.ok) {
    switch (response.status) {
      case 401:
        window.location.href = "/unauthorized";
        break;

      case 403:
        window.location.href = "/forbidden";
        break;

      case 404:
        window.location.href = "/not-found";
        break;

      default:
        if (response.status >= 500) {
          window.location.href = "/error";
        }
    }

    throw new Error(await response.text());
  }

  return response.json();
}
