# gousto-exam [![Build Status](https://travis-ci.org/hourliert/gousto-exam.svg?branch=master)](https://travis-ci.org/hourliert/gousto-exam)

## Getting started

First, you should install the project dependencies by running the command: `yarn`.

Then simply run: `yarn start` and go to [http://localhost:3000](http://localhost:3000).

Don't forget to disable cross origin restriction in your browser!

## More details

I am using every major libraries of the React ecosystem (redux, react-router, reselect, immutable, etc...).

I have chosen not to create a "build chain" (webpack) and use `create-react-app` that bootstraps a react project really quickly.
That allowed me to focus on code and not on the build chain.

This project is a bit "overkill" for this simple app but it shows a testable and maintainable architecture.
In an ideal world, I would upgrade the promise middleware into a "observable" middleware. 
Observable offers more than promise. The major benefit is that they are cancellable. That means we could cancel an
AJAX call.

Major components have been split into modules. The project has 2 modules:
* product (display the products list and filter)
* category (display the categories list)

Each module contains its own reducers, selectors, actions and components.
Shared components and helpers have been placed into a shared folder.

Finally, the index file is bootstrapping everything (create redux store, initialize react router, render the app).

## To go further

* Use proper routing
  * We should save the selected category in the router (ie: as url parameter) (to allow the user to come back to a specific category later)
  * We should create a CategoryDetail route and page. This page should contains a list of products (belonging to this category)
* Optimize AJAX requests: request only what we need
  * Eg. Products in a specific category
  * Cancel request that are not relevant (when switching categories)
* Do the product search server-side
* Unit tests reducers and selectors
* e2e tests app behavior
* Make the app beautiful, we are fetching product images, we should use them
