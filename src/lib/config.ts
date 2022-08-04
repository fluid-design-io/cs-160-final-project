export const apiEndpoint = `http://localhost:3000`;
export const apiProdEndpoint = `https://something.vercel.com`;
export const apiBaseUrl = process.env.NODE_ENV === "development" ? apiEndpoint : apiProdEndpoint;