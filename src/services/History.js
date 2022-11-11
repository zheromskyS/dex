export async function getCoinHistory(coin, rangeDays) {
  const now = Date.now();
  const start = now - rangeDays * 24 * 60 * 60 * 1000;
  const interval = rangeDays === 1 ? "h1" : "d1";

  const url = `https://api.coincap.io/v2/assets/${coin}/history?interval=${interval}&start=${start}&end=${now}`;
  const res = await fetch(url);
  const data = await res.json();

  return data.data;
}
