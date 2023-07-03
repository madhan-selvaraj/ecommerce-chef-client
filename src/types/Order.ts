export type OrdersResponse = {
  id: number;
  items?: Order[] | null;
  total_amount: number;
  total_quantity: number;
  status: string;
};

export interface Order {
  name: string;
  quantity: number;
  price: number;
  amount: number;
}
