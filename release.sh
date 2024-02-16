#!/bin/bash

git checkout develop &&

# clean up
rm -rf dist storybook-static &&

# build dist
./node_modules/.bin/babel src --extensions .ts,.tsx --out-dir dist && 
./node_modules/.bin/tsc --project tsconfig.json &&

# build storybook
./node_modules/.bin/storybook build &&

# stage, сommit and push storybook
git add storybook-static && 
git commit -m "storybook build" &&
git push &&

# up version
npm version $VERSION &&
git push &&
git push --tags &&

# merge to master and publish to npm
git checkout main && 
git merge develop && 
git push && 
npm publish && 

git checkout develop