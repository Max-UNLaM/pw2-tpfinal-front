export interface OauthLogin {
  email: string;
  password: string;
}

export interface OauthLoginResponse {
  success?: string;
}

export interface OauthLoginSuccess {
  success: OauthLoginToken;
}

export interface OauthLoginToken {
  token: string;
}
