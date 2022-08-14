import {AccountsComponent} from "../accounts/accounts.component";

export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  accounts: AccountsComponent[];
}
