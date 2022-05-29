import client from "../providers/client";
import { apiCode } from "../config"

export const listPets = () =>
  client.get(`pets/${apiCode}`);
