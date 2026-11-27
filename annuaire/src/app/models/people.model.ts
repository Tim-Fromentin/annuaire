export type People = {
  email: string;
  name: {
    first: string;
    last: string;
  };
  location: {
    city: string;
    country: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  login: {
    uuid: string;
  };
  dob: {
    age: number;
  };
  phone: string;
  cell: string;
};

export type PeopleResponse = {
  results: People[];
  info: {
    seed: string;
    results: number;
    page: null;
    version: string;
  };
};
