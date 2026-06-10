#!/bin/bash

git checkout develop &&

# clean up
rm -rf dist docs &&

# build dist
./node_modules/.bin/babel src --extensions .ts,.tsx --out-dir dist --copy-files &&
./node_modules/.bin/tsc --project tsconfig.json &&

# build storybook
./node_modules/.bin/storybook build --output-dir docs &&

# set domain for github pages
echo "ui.invoicebox.ru" > ./docs/CNAME &&

# stage, сommit and push storybook
git add docs &&
git commit -m "storybook build" &&
git push &&

# up version
if [ -n "$VERSION" ]; then
    npm version "$VERSION"
else
    npm version prerelease --preid=alpha
fi &&
git push &&
git push --tags &&

# merge to master and publish to npm
git checkout main &&
git merge develop &&
git push &&
npm publish &&

git checkout develop