import { Nullable } from "./generics";

export type Account = {
  id: number;
  individualId: number;
  name: string;
  individualName: Nullable<string>;
  clientTypeName: Nullable<string>;
}

export type Accounts = Account[];

export type PartialAccount = {
  individualId: Account['individualId']
};

export type PartialAccounts = PartialAccount[];