export type CakesInitState = {
  totalCakes: number;
}

export type IceCreamInitState = {
  totalIceCreams: number;
}

export type User = {
  id: number;
  name: string;
}

export type UsersInitState = {
  loading: boolean;
  users: User[];
  error: string;
}
