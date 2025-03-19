import { ItemMinPrices, SkinportItem } from "../interfaces/skinport-api.interface";

async function fetchSkinportData(tradable: boolean): Promise<SkinportItem[]> {
  const response = await fetch(
    `https://api.skinport.com/v1/items?app_id=730&currency=EUR&tradable=${tradable}`
  );
  if (!response.ok) throw new Error(`HTTP error, status: ${response.status}`);
  return response.json();
}

async function getMinPrices(): Promise<ItemMinPrices[]> {
  const [tradableItems, nonTradableItems] = await Promise.all([
    fetchSkinportData(true),
    fetchSkinportData(false),
  ]);

  const tradableMap = new Map<string, number>();
  const nonTradableMap = new Map<string, number>();

  tradableItems.forEach((item) => tradableMap.set(item.market_hash_name, item.min_price));
  nonTradableItems.forEach((item) => nonTradableMap.set(item.market_hash_name, item.min_price));

  const allNames = new Set<string>([
    ...tradableMap.keys(),
    ...nonTradableMap.keys(),
  ]);

  return Array.from(allNames).map((name) => ({
    market_hash_name: name,
    prices: [
      { type: 'tradable' as 'tradable', price: tradableMap.get(name) || null },
      { type: 'non-tradable' as 'non-tradable', price: nonTradableMap.get(name) || null },
    ],
  })).filter(item => 
    item.prices.some(p => p.price !== null)
  );
}
export default getMinPrices;