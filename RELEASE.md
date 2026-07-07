# Релиз и публикация

### Предварительные требования

Установите зависимости:

```bash
npm ci
```

Убедитесь, что вы залогинены в `npm`, для этого выполните команду:

```bash
npm whoami
```

Если вы не залогинены, залогинтесь:

```bash
npm login
```

Чтобы опубликовать пакет, вы должны состоять в организации [invoicebox](https://www.npmjs.com/settings/invoicebox/packages), и у вас должны быть сообтветствующие права.

Все изменения должны быть закомичены в `develop`.

Перед релизом прогоните проверки — release.sh сам их не запускает и на CI не завязан:

```bash
npm run lint && npm run typecheck && npm test && npm run build
```

### Релиз и публикация

Выполните команду, где `x.x.x` - это новая версия пакета, например `2.0.1`:

```bash
VERSION=x.x.x npm run release

или 

npm run release
```

Без `VERSION` поднимется prerelease-версия (`prerelease --preid=alpha`).

### Порядок шагов внутри release.sh

1. `git checkout develop`, очистка `dist/` и `docs/`
2. Сборка `dist/` (CJS), `dist/esm/` (ESM), деклараций
3. Сборка Storybook в `docs/`, коммит и пуш `docs/`
4. `npm version` — коммит и тег **пока только локальные**
5. **`npm publish`** — публикация происходит **до** пуша версии и тега
6. `git push && git push --tags`
7. `git checkout main && git merge develop && git push`, возврат на `develop`

Порядок шагов 5–6 намеренный: если публикация падает (сеть, истёкший токен npm, недоступный registry), в git ещё ничего не запушено и разъезда «тег есть — пакета нет» не возникает.

### Если npm publish упал

Состояние: локально есть коммит поднятия версии и тег, в npm и origin — ничего.

Откат:

```bash
git tag -d v<версия-которая-не-опубликовалась>
git reset --hard HEAD~1
```

(`HEAD~1` — это коммит `npm version`; коммит `storybook build` при этом остаётся — он уже запушен и безвреден.)

После устранения причины (обычно `npm login`) запустите `npm run release` заново.

### Если упало после publish (git push / merge main)

Версия уже в npm — переиздать её нельзя (npm запрещает повторную публикацию той же версии). Коммит версии **не откатывать**. Доделайте оставшиеся шаги руками:

```bash
git push && git push --tags
git checkout main && git merge develop && git push
git checkout develop
```
