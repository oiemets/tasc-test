import { Account, Accounts } from "../types/account";
import { Client, Clients } from "../types/client";
import { ClientType, ClientTypes } from "../types/clientType";
import { Individual, Individuals } from "../types/individual";
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

const clientTypes: ClientTypes = getArrayOfNumbers(3).map(mapClientTypeValues);
const clients: Clients = clientTypes.map(mapClients);
const individuals: Individuals = clients.flatMap(mapClientIds).map(mapIndividuals);
const accounts: Accounts = individuals.flatMap(mapindividualIds).map(mapAccounts);

const clientTypeQuery = joinValues<ClientType>('clientType(id, name)', clientTypes, mapClientTypeValuesQuery);
const clientQuery = joinValues<Client>('client(id, name, clientTypeId)', clients, mapClientValuesQuery);
const individualQuery = joinValues<Individual>('individual(id, clientId, name)', individuals, mapIndividualValuesQuery);
const accountQuery = joinValues<Account>('account(individualId, name)', accounts, mapAccountValuesQuery)

export const tablesValues = `
  ${clientTypeQuery}
  ${clientQuery}
  ${individualQuery}
  ${accountQuery}
`
