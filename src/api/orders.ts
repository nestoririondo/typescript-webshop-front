import axios from "axios";
import { Order } from "../types/order";
import { SERVER } from "../constants/server";

export const createOrder = async (order: Order) => {
  return await axios.post(`${SERVER}/orders`, order);
};
