export type Individual = {
  id: number;
  clientId: number;
  name: string;
};

export type Individuals = Individual[];

export type PartialIndividual = {
  clientId: Individual['clientId']
};

export type PartialIndividuals = PartialIndividual[];