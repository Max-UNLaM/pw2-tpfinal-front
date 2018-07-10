export interface OauthLogin {
  email: string;
  password: string;
}

export interface OauthLoginResponse {
  success?: OauthLoginToken;
}

export interface OauthLoginSuccess {
  success: OauthLoginToken;
}

export interface OauthLoginToken {
  token: string;
}
