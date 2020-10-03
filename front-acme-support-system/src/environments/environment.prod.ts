export const environment = {
  production: true,
  apiUrl: 'http://localhost:9000',
  tokenWhitelistedDomains: [new RegExp('localhost:9000')],
  tokenBlacklistedRoutes: [new RegExp('/auth/login'), new RegExp('/users')],
};
