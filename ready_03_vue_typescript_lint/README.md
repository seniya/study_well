# ready_03_vue_typescript_lint

```
vue create ready_03_vue_typescript_lint

manualy : Typescript, Linter /Formatter 선택
Please pick a preset: Manually select features
? Check the features needed for your project: TS, Linter
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? No
? Pick a linter / formatter config:  ESLint + Standard config 
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
❯ In dedicated config files 
```


> https://kr.vuejs.org/v2/guide/typescript.html
```js
import Vue from 'vue'

const Component = Vue.extend({
  // 타입 유추기능 사용
})

const Component = {
  // 이 방식은 타입 유추가 되지 않습니다.
  // TypeScript가 Vue 컴포넌트에 대한 옵션을 알 수 없기 때문입니다.
}
```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
