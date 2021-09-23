export interface Payment {
  creditCartId: number;
  customerId: number;   
  expMonth: number;
  expYear: number;
  cVV: number;
  cardLimit: number;

  cardType: string;
  fullName: string;
  cardNumber: string;

}
