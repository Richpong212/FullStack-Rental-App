// interface for user

export interface IUser {
  _id: string;
  fullname: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  isadmin: boolean;
  isverified: boolean;
}

export interface ActivationTokenPayload {
  fullName: string;
  email: string;
  password: string;
  iat: number;
  exp: number;
}
