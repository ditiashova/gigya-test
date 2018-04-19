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

export class AccountOptionsLabels {
  verifyEmail: string;
  verifyProviderEmail: string;
  allowUnverifiedLogin: string;
  preventLoginIDHarvesting: string;
  sendWelcomeEmail: string;
  sendAccountDeletedEmail: string;
  defaultLanguage: string;
  loginIdentifiers: string;
  loginIdentifierConflict: string;

  constructor() {
    this.verifyEmail = 'Verify Email';
    this.verifyProviderEmail = 'Verify Provider Email';
    this.allowUnverifiedLogin = 'Allow Unverified Login';
    this.preventLoginIDHarvesting = 'Prevent Login ID Harvesting';
    this.sendWelcomeEmail = 'Send Welcome Email';
    this.sendAccountDeletedEmail = 'Send Account Deleted Email';
    this.defaultLanguage = 'Default Language';
    this.loginIdentifiers = 'Login Identifiers';
    this.loginIdentifierConflict = 'Login Identifier Conflict';

  }
}
