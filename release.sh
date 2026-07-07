#!/bin/bash

git checkout develop &&

# clean up
rm -rf dist docs &&

# build dist (CommonJS — `main`)
./node_modules/.bin/babel src --extensions .ts,.tsx --out-dir dist --copy-files &&
# build dist/esm (ES modules — `module`; with sideEffects:false enables tree-shaking in consumers)
./node_modules/.bin/babel src --extensions .ts,.tsx --out-dir dist/esm --copy-files --config-file ./babel.config.esm.json &&
./node_modules/.bin/tsc --project tsconfig.json &&

# build storybook
./node_modules/.bin/storybook build --output-dir docs &&

# set domain for github pages
echo "ui.invoicebox.ru" > ./docs/CNAME &&

# stage, сommit and push storybook
git add docs &&
git commit -m "storybook build" &&
git push &&

# up version (коммит и тег пока только локальные)
if [ -n "$VERSION" ]; then
    npm version "$VERSION"
else
    npm version prerelease --preid=alpha
fi &&

# publish to npm ДО пуша версии/тега в git: если публикация упадёт,
# git-состояние ещё не тронуто — откат см. RELEASE.md
npm publish &&

git push &&
git push --tags &&

# merge to master
git checkout main &&
git merge develop &&
git push &&

git checkout develop