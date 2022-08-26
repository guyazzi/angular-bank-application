import {AccountType} from "./accounttype";

export interface Account {
  id: number;
  type: AccountType;
  currency: number;
  balance: number;
}
