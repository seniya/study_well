# ready_01_typescript

## Project setup
```
npm install
```

### Compiles and hot-reloads for development

type script 맛보기 




```
01. npm init
02. npm install -g typescript 
    tsc --init
    tsc -v
    tsconfig target ES6
03. make main.ts
    tsc

04. 

```


```sh
$ npm init -y # package.json
$ tsc -init # tsconfig.json
```

```sh
# TypeScript
$ npm i typescript

# ESLint packages
$ npm i eslint eslint-plugin-import

# TypeScript ESLint packages
$ npm i  @typescript-eslint/eslint-plugin @typescript-eslint/parser

# npx eslint --init  or make '.eslintrc.js'
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/eslint-recommended"
  ]
};
#package.json add
"lint": "eslint src/**/*.ts",
"lint:fix": "eslint --fix src/**/*.ts"
```