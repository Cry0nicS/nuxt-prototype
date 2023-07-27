## Getting Started

## Setup

Make sure to install the dependencies:

```bash
npm install
```

### Run the development server:

```bash
`npm run dev` or `nuxt dev`
```

### Locally preview production build:

```bash
npm run preview
```

## Linting
* `npm run format-check` - checks for formatting errors.
* `npm run format` - auto-formats all files.
* `npm run lint` - checks for Typescript errors.
* `npm run spell-check` - checks for spelling errors (EN or DE).
* `npm run style-check` - checks for styling errors (`.scss`).
* `npm run style-fix` - tries to fix styling issues.

### Spell-checking
CSpell is a library used for spell checking the code. It checks against English, German and some technical dictionaries (e.g. Typescript).

Custom words, that we consider correct, but are not part of any dictionary in use are added to a custom file. (E.g. `custom.dic`).

Please keep all words in the `custom.dic` file sorted in alphabetical order, lower case. One word per line.

### Committing

There is a "linter" check running before every commit to ensure code quality in the entire project. All the above standards must be respected, in order to commit.

> 💡 **Note:** First time it might be necessary to run `npx simple-git-hooks` to make sure git-hooks runs correctly on commit.
