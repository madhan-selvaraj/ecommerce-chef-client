import { OrdersResponse } from "../types/Order";

const orders: OrdersResponse[] = [
  {
    id: 1,
    items: [
      {
        name: "Chicken Briyani",
        quantity: 3,
        price: 200,
        amount: 600,
      },
      {
        name: "Grill chicken",
        quantity: 1,
        price: 400,
        amount: 400,
      },
      {
        name: "Mutton Briyani",
        quantity: 1,
        price: 300,
        amount: 300,
      },
    ],
    total_amount: 1300,
    total_quantity: 5,
    status: "NEW",
  },
  {
    id: 2,
    items: [
      {
        name: "Chicken Shwarma",
        quantity: 2,
        price: 150,
        amount: 300,
      },
      {
        name: "Bread omlette",
        quantity: 2,
        price: 60,
        amount: 120,
      },
    ],
    total_amount: 420,
    total_quantity: 4,
    status: "ACCEPTED",
  },

  {
    id: 3,
    items: [
      {
        name: "Butter Naan",
        quantity: 3,
        price: 100,
        amount: 300,
      },
      {
        name: "Panner gravy",
        quantity: 1,
        price: 300,
        amount: 300,
      },
      {
        name: "Prawn fry",
        quantity: 1,
        price: 300,
        amount: 300,
      },
    ],
    total_amount: 900,
    total_quantity: 5,
    status: "DELIVERED",
  },

  {
    id: 4,
    items: [
      {
        name: "Butter Naan",
        quantity: 3,
        price: 100,
        amount: 300,
      },
      {
        name: "Panner gravy",
        quantity: 1,
        price: 300,
        amount: 300,
      },
      {
        name: "Prawn fry",
        quantity: 1,
        price: 300,
        amount: 300,
      },
    ],
    total_amount: 900,
    total_quantity: 5,
    status: "DELIVERED",
  },
];

export default orders;
