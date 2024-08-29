
# Setting-Up the localHost
- make all the js,css,html file.
- do npm init (for initilize your project) --> package.json (installed dep..)
- do npm install -D parcel (installing parcel as dev-dep..) -->(node_module, package-lock.json(exact version all dep.. for parcel))
- do npx parcel index.html (executing parcel)--> (.parcel-cache, dist)
   
- set up the tailwindcss and react dependencies (react-dom, react-router and more..)
  


# Redux Toolkit
- install @reduxjs/toolkit and react-redux.
- Build our store (using configureStore HOOK).
- connect our store to our app (wrapping app.js with Provider HOOK).
- createslice for the store (cartSlice).
- dispatch Action to use the reduser funtion.
- useSelector for subscribing to the value(linking the element to the store value).



# Testing (JEST)
- types of testing
- Unit Testing , Interation Testing, E2E(end to end) Testing.

# Setting UP Testing
- install @testing-library/react (react Testing Library)
- install jest  (@testing-library/react uses jest).
- install dependencies (--save-dev babel-jest @babel/core @babel/preset-env) for using with babel.
- make babel config file at the root, config it.
- make and config .parcelrc file to disable bable default tanspilation and use the new one that we made.
- do "npx jest --init"  to initialize and execute jest.
- choose jsdom and babel during init.
- install jest-environment-jsdom.
- NOW READY TO TEST YOUR APP.

-install @babel/preset-react for making it compatible with jsx.
-add (@babel/preset-react) to config file of babel.
-install @testing-library/jest-dom 



