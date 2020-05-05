# Welcome to this nodejs draft sandbox.

npm:
npm -v version of npm
sudo npm i - g package  install globally the package  package@version
npm init   create the basic package.json making questions setings
npm init --yes sets all default values
npm i package install dependency
npm list list dependencies three
npm list --depth=0 list all app dependencies
npm view package list all metadata about package
npm view package dependencies  list only package direct dependencies
npm view package versions list all versions of package
npm outdated  for update versions
npm update update to wanted version
npm i package -save-dev  install package in devDependencies (only for development)
npm un package unistall package

Semantic Versioning
https://semver.org/

4.4.1 // Major.Min.Patch
4.4.2 // was created a bugfix
4.5.0 // was created a enhanced without changes actual API
5.0.0 // was created a API change
^4.4.1 is interesting only in Major version 4.x.x  Caret
~1.8.7 is interesing in Major.Minor  1.8.x   Tilde
