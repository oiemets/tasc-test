import type { Accounts } from "../types/account";
import type { Clients } from "../types/client";
import type { ClientTypes } from "../types/clientType";
import type { Individuals } from "../types/individual";
import { getArrayOfNumbers } from "./getArrayOfNumbers";
import {
  mapClientTypeValues,
  mapClients,
  mapClientIds,
  mapIndividuals,
  mapindividualIds,
  mapAccounts
} from "./mappers";

export const clientTypes: ClientTypes = getArrayOfNumbers(3).map(mapClientTypeValues);
export const clients: Clients = clientTypes.map(mapClients);
export const individuals: Individuals = clients.flatMap(mapClientIds).map(mapIndividuals);
export const accounts: Accounts = individuals.flatMap(mapindividualIds).map(mapAccounts);