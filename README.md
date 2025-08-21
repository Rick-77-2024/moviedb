
---First---
1. Menu File - New - Project.
	Look files:
	1. Создание проекта React+Vite Fin.jpg
	2. Создание проекта React+Vite Fin доп подтверждение.jpg

Add in file package.json in block "dependencies"the line:
	"react-router-dom": "^7.0.1" and install
 
 ---Dependencies---

Add to file in dependencies "react-router-dom": "7.0.1"
-  react-router-dom
-  react-star-ratings
-  axios

1. npm i
2. npm install react-router-dom --save
3. npm install axios
4. npm install --save react-star-ratings
5. npm install -g react-devtools
6. npm install --save bootstrap
7. npm i -D vite-plugin-gh-pages
8. npm install gh-pages --save-dev

7. !!! IMPORTANT !!!
7. Before PUSHING use 
   - npm run build

/*
	npm install -g react-devtools
	npm eslint-plugin-react-dom
	npm install --save-dev eslint-plugin-react-x
	npm install tailwindcss @tailwindcss/vite
	  If you need eslint
	eslint-plugin-react-dom
	npm install --save-dev eslint-plugin-react-dom
	npm install react-hook-form
	npm install @hookform/resolvers
	npm install joi
*/

Create Git repository from WebSrtorm:
Menu Git - GutHub - Share Project on GitHub
UnTap Private

The Movies app
1. mockup download https://cssauthor.com/pinball-responsive-grid-style-blog-psd/

2. Movies Database. Register here:
https://www.themoviedb.org/documentation/api 

3. to ﬁnd your api key and token:

4. API is here:
https://developers.themoviedb.org/3/discover/movie-discover

5. Some API info is here: 
https://www.themoviedb.org/settings/api

6. на допомогу з візуалізації компонентів вони є як для реакту так і для ангулара (не за прямими посиланнями представленими тут, можете не використовувати їх якщо не хочете)
Components:
stars:
https://codepen.io/benjaminreid/pen/vNVwPW
https://www.npmjs.com/package/react-star-ratings
badge for genres:
https://reactstrap.github.io/?path=/docs/components-badge--badge

Концепція загального вигляду (вигляд не повинен бути такий же! Ви не верстальники. ЦЕ КОНЦЕПЦІЯ розміщення елементів. Якщо зробите так само, то це буде овер круто)
https://dribbble.com/shots/6461891-Media-store-idea-Movies
https://dribbble.com/shots/6090855-Raymov-Website-streaming-movie
https://dribbble.com/search/movies%20web%20app (!!!My choce!!!)

7. за структурою проекту:
1) основні дії
- getMovies 
2) - getGenres . Відповідно при кліку на жанр - фільми цього жанру.
3) Components:
   - Header
   - MoviesList (renders MoviesListCards)
   - MoviesListCard (contain all movie information)
   - PosterPreview (movie image)
   - StarsRating 
   - MovieInfo (contains label, description, badges)
   - GenreBadge
   - UserInfo (just hardcoded small circle and name)
4) Containers:
   - MoviesPage основний:
5) пагінація.
6) друга (наступна) сторінка з розширеним описом фільму (мається на увазі роутинг). вона повинна відкриватися, якщо користувач клікнув на картку з фільмом
7) пошук фільмів по назві, або чистині назви. подивитись що самме дає зараз апі, бо вона змінюється
------------------------

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

git rm .idea/ -r --cached / git rm --cached -r .idea/
git add -u .idea/
git commit -m "Removed the .idea folder"
