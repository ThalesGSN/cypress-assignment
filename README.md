# Thales's Origin Frontend Take-Home Assignment
[![Netlify Status](https://api.netlify.com/api/v1/badges/196a3275-2100-4f44-a923-184ab8a8f1e9/deploy-status)](https://app.netlify.com/sites/unruffled-johnson-4bbcb4/deploys)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ThalesGSN_frontend-take-home-assignment&metric=alert_status)](https://sonarcloud.io/dashboard?id=ThalesGSN_frontend-take-home-assignment)
[![Jest Coverage Status](https://coveralls.io/repos/github/ThalesGSN/frontend-take-home-assignment/badge.svg?branch=master)](https://coveralls.io/github/ThalesGSN/frontend-take-home-assignment?branch=master)
[![frontend-take-home-assignment](https://circleci.com/gh/ThalesGSN/frontend-take-home-assignment.svg?style=svg)](https://app.circleci.com/pipelines/github/ThalesGSN/frontend-take-home-assignment)
[![frontend-take-home-assignment](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/59pzbg&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/59pzbg/runs)

This is a frontend challenge proposed by Origin Financial.
You can check the [results here.](https://useorigin.thalesnunes.com/)

# Usage

This project requires `Node >=12` and `NPM >= 6`.

After you have cloned this repo, install the dependencies with:

```
yarn install
```

You can then start the application running:

```
yarn start
```

That's it. Just Access `http://localhost:1234` in your browser.

### Linting

```
yarn lint
```

### Testing
For jest testing
```
yarn test
```

For cypress testing
```
#Add a .babelrc config file
echo "{\"plugins\": [ \"istanbul\" ]}" > .babelrc

# Start server and open cypress console
yarn start && yarn cypress open

# remove .babelrc config file
rm .babelrc
```

### Features

#### Accessibility ♿
This site is WCAG complaint. It uses all ARIA needed props and alternatives for visible contents.

#### E2e Tests
This site uses Cypress to E2e tests. Some rules are hard to test with only Jest + Enzime. Cypress solves this problem.

#### PWA basic configs
This site uses multiple favicon icons for PWA install, and a descriptive webmanifest file.

#### Basic CSS animations
This site uses keyframes animations triggered by useEffect.

### Why not redux?
Simple problems require simple solutions, redux is a useful tool, but in simple contexts like
this, can lead to unnecessary code complexity.
