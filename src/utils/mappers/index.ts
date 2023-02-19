import type { ClientType } from "../../types/clientType";
import type { Client } from "../../types/client";
import type { Individual, PartialIndividuals, PartialIndividual } from "../../types/individual";
import type { Account, PartialAccount, PartialAccounts } from "../../types/account";
import { getArrayOfNumbers } from "../getArrayOfNumbers";
import { CLIENT_TYPE_NAME, CLIENT_NAME, INDIVIDUAL_NAME, ACCOUNT_NAME } from '../../constants';

export const mapClientTypeValues = (id: number): ClientType => ({ id, name: `${CLIENT_TYPE_NAME}${id}` });

export const mapClients = ({ id }: ClientType, index: number): Client => {
  const clientId = index + 1;
  return ({ id: clientId, name: `${CLIENT_NAME}${clientId}`, clientTypeId: id})
}

export const mapClientIds = ({ id: clientId }: Client): PartialIndividuals => 
  getArrayOfNumbers(50).map(() => ({ clientId }));

export const mapIndividuals = ({ clientId }: PartialIndividual, index: number): Individual => {
  const id = index + 1;
  return {
    id,
    clientId,
    name: `${INDIVIDUAL_NAME}${id}`
  }
}

export const mapindividualIds = ({ id: individualId }: Individual): PartialAccounts =>
  getArrayOfNumbers(3).map(() => ({ individualId }));

export const mapAccounts = ({ individualId }: PartialAccount, index: number): Account => {
  const id = index + 1;
  return {
    id,
    individualId,
    name: `${ACCOUNT_NAME}${individualId}`,
    individualName: null,
    clientTypeName: null
  }
}

export const mapClientTypeValuesQuery = ({ id, name }: ClientType) => `(${id}, '${name}')`;
export const mapClientValuesQuery = ({ id, name, clientTypeId }: Client) => `(${id}, '${name}', ${clientTypeId})`;
export const mapIndividualValuesQuery = ({ id, clientId, name }: Individual) => `(${id}, '${clientId}', '${name}')`;
export const mapAccountValuesQuery = ({ individualId, name }: Account) => `(${individualId}, '${name}')`;