export interface AccountOptions {
  verifyEmail: boolean;
  verifyProviderEmail: boolean;
  allowUnverifiedLogin: boolean;
  preventLoginIDHarvesting: boolean;
  sendWelcomeEmail: boolean;
  sendAccountDeletedEmail: boolean;
  defaultLanguage: string;
  loginIdentifiers: string;
  loginIdentifierConflict: string;
}

export interface Account {
  accountOptions: AccountOptions;
}

export interface RequestResult {
  errorCode: number;
  statusCode: number;
  errorMessage?: string;
}
