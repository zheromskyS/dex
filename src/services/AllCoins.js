export async function getAllCoins() {
  const url = `https://api.coincap.io/v2/assets/`;
  const res = await fetch(url);
  const data = await res.json();

  return data.data;
}
