// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  env: 'dev',
  domain: '.shushuedu.com',
  fileUploadUrl: 'http://tutor-testworkshop.shushuedu.com/tutor-testworkshop/file/upload',
  fileDownloadUrl: 'http://tutor-testworkshop.shushuedu.com/tutor-testworkshop/file/download?file=',
  rzPTDomain: 'http://rz-pt.shushuedu.com/rz-pt',
  tutorTestworkshopDomain: 'http://tutor-testworkshop.shushuedu.com/tutor-testworkshop',
  rzDomain: 'http://rz.shushuedu.com/rz'
};
