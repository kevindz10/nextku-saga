# Next.js 8 Boilerplate (saga)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Next.js 8 boilerplate with redux, redux-saga, styled-components, SASS

### Prerequisites

- Node.js (v10 or higher)
- `npm` (v6.5 or higher)
- `yarn` (v1.14 or higher)

### Getting Started

- Development
    ```bash
    # Clone the repo and then run
    $ npm install # or yarn install
    $ npm run dev # or yarn dev
    ```

- Production
    ```bash
    # Clone the repo and then run
    $ npm install # or yarn install
    $ npm run build # or yarn build
    $ npm start # or yarn start
    ```

### Testing

- Standard.js Lint Test
    ```bash
    $ npm run standard # or yarn standard
    ```

### Project Directory

```
.
+-- pages/
+-- src/
|   +-- actions/
|   +-- components/
|   |   +-- styled/
|   +-- reducers/
|   +-- sagas/
|   +-- styles/
+-- next.config.js
+-- store.js
```

`pages/` - Next.js pages

`src/` - Actions, components, reducers, sagas, styles

`src/actions` - Redux actions

`src/components` - Pure React components.

`src/components/styled` - React styled-component

`src/reducers` - Redux reducers

`src/sagas` - Redux sagas

`src/styles` - SASS

`next.config.js` - Next.js config

`store.js` - Redux store