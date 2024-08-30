## Install

Install pnpm@9.0.5 like mentioned in package.json file.

```
pnpm install
```

```
pnpm run dev
```

Normally you have to deal with an env file. However, this app doesn't have sensitive information like an api key etc. so it is skipped. If there are sensitive info, those info should go to env and be saved in a safe place.

## General remarks

It is a nice assignment!

After reading API doc and checking the entire repo, I started with data fetching. To offer a better UI and maintain a good structure of the app. I decided to add an ApiHandler to minimize the code of dealing with loading and error after retrieving data. The ApiHandler actually takes more time than I expected because some of the API calls are done with useInifiteQuery which is not async. It is a little different from what I usually work with.

After working and testing the ApiHandler, I continued with other features and UI improvement.

Until all the required features are finished, the 4-hour benchmark is almost reached. Since I have legacy code myself for search bar. The entire assignment is done within just a little more than 4 hours. If there are more time left I would love to add Vitest to the assignment. The focus will be UI elements related to data fetching.

## Features

### Store

As a standard implementation, the state management is done with a Pinia store. DOM related elements like loading, error, etc. are added to a DomStore solely responsible for generic DOM manipulation.

### ApiHandler

This is a wrapper class to handle/execute API calls and update the application's store states in order to show indicators in the UI. Also it can avoid duplicate code in each component/page. The class is a variant of Repository Pattern.

In this class, loading status is updated with every API call. For async API calls, the loading is shown before each call and hidden after each call is finished. For non-async call like useInfiniteQuery, a watch is introduced to manage loading status. The loading bar in App.vue checks the status and update accordingly. Same like errors, the class catches errors and set it up in the store. The app-error component checks the error state in the store and show it accordingly.

The class is extendable for the future, such as saving data to cookies, support more DOM and API related UI elements, etc.

### Styling and layout

A main.css is introduced in the app. The idea is to move reusable styles into the file. For example, the .card is reused between Pokemon and Rick and Morty.

A new layout is added for Rick and Morty pages. Since the changes are mostly color and classes, it is decided to add a new layout to avoid too many props, which is good for future extension. The color is changed to a greenish color to differentiate from Pokemon pages.

### SEO

A simple SEO with title and description is added to the list page and details page, following standard h1 h2 h3 structure in HTML. This is because the app is a public app instead of internal. Basic SEO is added.

### Layout toggle

It is decided to add a state in the store to save the layout type and share it throughout the app. If a user prefers one type of layout, it can be shared between Pokemon and Rick and morty for future extension of the app.

### Search bar

The search bar is extracted as a separate component solely dealing with the input and return the input back to the parent component. This way the component is de-coupled and can be easily reused.

## More to improve

If there is more time, I would like to 1. further refactor the entire app 2. add Vitest 3. make ApiHandler a plugin and add API count to support the case that different API calls are fired at the same time 4. further improve for SSR
