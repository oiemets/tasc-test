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
import { ACCOUNT, CLIENT, CLIENT_TYPE, INDIVIDUAL } from "../constants/tables";

const clientTypes: ClientTypes = getArrayOfNumbers(3).map(mapClientTypeValues);
const clients: Clients = clientTypes.map(mapClients);
const individuals: Individuals = clients.flatMap(mapClientIds).map(mapIndividuals);
const accounts: Accounts = individuals.flatMap(mapindividualIds).map(mapAccounts);

const clientTypeQuery = joinValues<ClientType>(`${CLIENT_TYPE}(id, name)`, clientTypes, mapClientTypeValuesQuery);
const clientQuery = joinValues<Client>(`${CLIENT}(id, name, clientTypeId)`, clients, mapClientValuesQuery);
const individualQuery = joinValues<Individual>(`${INDIVIDUAL}`, individuals, mapIndividualValuesQuery);
const accountQuery = joinValues<Account>(`${ACCOUNT}(individualId, name)`, accounts, mapAccountValuesQuery)

export const tablesValues = `
  ${clientTypeQuery}
  ${clientQuery}
  ${individualQuery}
  ${accountQuery}
`
