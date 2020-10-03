export const environment = {
  production: false,
  apiUrl: 'http://localhost:9000',
  tokenWhitelistedDomains: [new RegExp('localhost:9000')],
  tokenBlacklistedRoutes: [new RegExp('/auth/login'), new RegExp('/users')],
};
