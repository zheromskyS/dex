export async function getFirstCoin() {
  const firstCoin = "bitcoin";
  const url = `https://api.coincap.io/v2/assets/${firstCoin}`;
  const res = await fetch(url);
  const data = await res.json();

  return data.data;
}

export async function getSecondCoin() {
  const secondCoin = "usd-coin";
  const url = `https://api.coincap.io/v2/assets/${secondCoin}`;
  const res = await fetch(url);
  const data = await res.json();

  return data.data;
}
