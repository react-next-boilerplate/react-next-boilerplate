# Command Line Commands

## Development

```Shell
yarn dev
```

or

```Shell
npm run dev
```

Starts the development server running on `http://localhost:3000`

## Server

### Development

```Shell
yarn dev
```

or

```Shell
npm run dev
```

Starts the development server and makes your application accessible at
`localhost:3000`. Changes in the application code will be hot-reloaded.

### Production

```Shell
yarn build && yarn start
```

or

```Shell
npm run build && npm run start
```

- `dev` - Runs `next` which starts Next.js in development mode
- `build` - Runs `next` build which builds the application for production usage
- `start` - Runs `next` start which starts a Next.js production server

## Building

```Shell
yarn build
```

or

```Shell
npm run build
```

Preps your app for deployment (does not run tests). Optimizes and minifies all files, piping them to the `src/.next` folder.

## Unit testing

```Shell
yarn test
```

or

```Shell
npm run test
```

Tests your application with the unit tests specified in the `**/tests/*.js` files
throughout the application.

### Watching

```Shell
yarn test:watch
```

or

```Shell
npm run test:watch
```

Watches changes to your application and re-runs tests whenever a file changes.

## Linting

```Shell
yarn lint
```

or

```Shell
npm run lint
```

Lints your JavaScript.

## Prettier

```Shell
yarn prettier
```

or

```Shell
npm run prettier
```

Lints your JavaScript.

Lints your code and tries to fix any errors it finds.
