import type { Account, Accounts } from "../types/account";
import type { Client, Clients } from "../types/client";
import type { ClientType, ClientTypes } from "../types/clientType";
import type { Individual, Individuals } from "../types/individual";
import { joinValues } from "./joinValues";
import { getArrayOfNumbers } from "./getArrayOfNumbers";
import {
  mapClientTypeValues,
  mapClients,
  mapClientIds,
  mapIndividuals,
  mapindividualIds,
  mapAccounts,
  mapClientTypeValuesQuery,
  mapClientValuesQuery,
  mapIndividualValuesQuery,
  mapAccountValuesQuery
} from "./mappers";
import { TABLES} from "../constants";

const clientTypes: ClientTypes = getArrayOfNumbers(3).map(mapClientTypeValues);
const clients: Clients = clientTypes.map(mapClients);
const individuals: Individuals = clients.flatMap(mapClientIds).map(mapIndividuals);
const accounts: Accounts = individuals.flatMap(mapindividualIds).map(mapAccounts);

export const tablesItems = [
  joinValues<ClientType>(`${TABLES.CLIENT_TYPE}(id, name)`, clientTypes, mapClientTypeValuesQuery),
  joinValues<Client>(`${TABLES.CLIENT}(id, name, clientTypeId)`, clients, mapClientValuesQuery),
  joinValues<Individual>(`${TABLES.INDIVIDUAL}`, individuals, mapIndividualValuesQuery),
  joinValues<Account>(`${TABLES.ACCOUNT}(individualId, name)`, accounts, mapAccountValuesQuery)
].join('');
