export const environment = {
  production: false,
  apiUrl: 'http://localhost:9000',
  // authorization: 'Basic ZGlhZ25vc3RpY29hcHA6Z3JlYXREaWFnbm9zaXM==',
  tokenWhitelistedDomains: [new RegExp('localhost:9000')],
  tokenBlacklistedRoutes: [new RegExp('/auth/login')],
};
