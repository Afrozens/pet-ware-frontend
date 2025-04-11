import { DateAt } from "./commons";

export type typeRole = 'admin' | 'client' | 'user';

export interface Role extends DateAt {
  name: typeRole;
  description: string;
  id: string;
}

export interface User extends DateAt {
  id: string;
  name: string;
  lastname: string;
  email: string;
  active: boolean;
  address: string | null;
  document: string | null;
  type_document: string | null;
  phone_number: string | null;
  avatar?: string | null;
  roles_id: string | null;
  verified_at: string | null;
  updated_at: string | null;
  role: Role | null;
}