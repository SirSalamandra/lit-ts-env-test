# Info

A sample of an application running with typescript, lit, dotenv and webpack.

## Usage
- Create a new '.env' file and copy all the configs in the 'sample.env' to the new one.

- Run the following commands: 

```bash
npm install
npm run watch
npm run build-dev or npm run build-prod
npm run start
```

- Obs: In order to change the env configs, you will need to restart the build process (webpack) since the webpack does not detect the changes.

## Webpack version

The webpack bundle generated use the same version that is defined in the package.json file.