export type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

export enum USER_ROLES {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}