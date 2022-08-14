import {Account} from "../accounts/account";

export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  accounts: Account[];
}
