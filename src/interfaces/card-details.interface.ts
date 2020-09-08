export interface CardDetails {
  creditCardNumber: string;
  cardhoder: string;
  expirationDate: Date;
  securityCode: string;
  amount: number;
}

export interface CardDetailsHttpResponse {
  success: boolean;
}
