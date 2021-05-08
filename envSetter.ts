const {writeFile} = require('fs');
// read environment variables from .env file
require('dotenv').config();
const targetPath = `./src/environments/environment.base.ts`;
// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
export const environmentBase = {
  PORT: ${process.env.PORT},
  AUDIENCE: '${process.env.AUDIENCE}',
  CLIENT_ID: '${process.env.CLIENT_ID}',
  DOMAIN: '${process.env.DOMAIN}'
};
`;
console.log('environmentFileContent', environmentFileContent);
// write the content to the respective file
writeFile(targetPath, environmentFileContent, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Wrote variables to ${targetPath}`);
});
