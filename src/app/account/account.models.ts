import {s} from '@angular/core/src/render3';

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

export class AccountLabels {
  ACCOUNT_OPTIONS: string = 'Account Options';
  READONLY_MODE: string = 'Readonly mode';
  SUBMIT: string = 'Submit';
  STATUS_CODE: string = 'Status Code';
  ERROR_MESSAGE: string = 'Error Message';

  constructor() {
  }
}

export class AccountOptionsLabels {
  VERIFY_EMAIL: string = 'Verify Email';
  VERIFY_PROVIDER_EMAIL: string = 'Verify Provider Email';
  ALLOW_UNVERIFIED_LOGIN: string = 'Allow Unverified Login';
  PREVENT_LOGIN_ID_HARVESTING: string = 'Prevent Login ID Harvesting';
  SEND_WELCOME_EMAIL: string = 'Send Welcome Email';
  SEND_ACCOUNT_DELETED_EMAIL: string = 'Send Account Deleted Email';
  DEFAULT_LANGUAGE: string = 'Default Language';
  LOGIN_IDENTIFIERS: string = 'Login Identifiers';
  LOGIN_IDENTIFIERS_CONFLICT: string = 'Login Identifier Conflict';

  constructor() {
  }
}
