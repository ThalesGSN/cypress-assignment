# Cypress assigment

This is a frontend challenge proposed by Thales Nunes.

# What do you need to test to qualify as a valid request:
* Different scenarios.

* Different Interest Rates.

* Edge cases.

* At least 2 different resolutions.

* Input mask.

* Month selection by mouse and by typing.


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

# Start server and open cypress console
yarn start && yarn cypress open


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
