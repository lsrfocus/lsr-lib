# LSR Lib

[![Build status](https://travis-ci.org/lsrfocus/lsr-lib.svg?branch=master)](https://travis-ci.org/lsrfocus/lsr-lib)

Lerna repo for simple common components.

See the [lsr-lib](/packages/lsr-lib/) directory for the package that's published to npm.

## Development

This mono-repo is managed by [Lerna](https://github.com/lerna/lerna).

[Yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)
mean that installing anywhere will install and link the entire project automatically.
You only need to install once, from the root.

See the app-specific subfolders for more detailed information about running each app.

### Getting started

Link everything together automatically:

```bash
yarn install
```

### Publishing

Prompt for new version numbers of all modified libs and publish all to npm:

```bash
yarn run lerna publish
```
