export interface SkinportItem {
  market_hash_name: string;
  min_price: number;
  currency?: string;
  suggested_price?: number;
  item_page?: string;
  market_page?: string;
  max_price?: number;
  mean_price?: number;
  median_price?: number;
  quantity?: number;
  created_at?: number;
  updated_at?: number;
}

interface Price {
  type: 'tradable' | 'non-tradable';
  price: number | null;
}

export interface ItemMinPrices {
  market_hash_name: string;
  prices: Price[];
}