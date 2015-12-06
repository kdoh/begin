# begin
Simple starting point for new projects and tomfoolery.

# features
- React
- es6 compilation with webpack and babel-loader
- webpack-dev-server what for the fast dev feedback loop
- a tiny starting component

# use

```sh
git clone git@github.com:kdoh/begin newComponent
cd newComponent


# nuke template history to begin anew
rm -fr .git

# (optional) rename the component to something sensical
# if you do this you'll need to update the import statement in app.js
mv src/component.js src/newComponent.js

# so fresh and so clean clean
git init
git remote add origin git@github.com:yourName/repoName.git

# install dependencies
npm i

# fire up a webpack dev server with hot reloading
npm start

# start working
open http://localhost:4000
```
