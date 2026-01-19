export type CountryProbability = {
  country_id: string;
  probability: number;
};

export type NationalityInformation = {
  name: string;
  count: number;
  country: CountryProbability[];
};
