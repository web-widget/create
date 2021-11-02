# \<scaffold-widget>

This web widget follows the [@web-widget](https://web-widget.js.org/) recommendation.

## Installation

```bash
npm i scaffold-widget
```

## Usage

```html
<web-widget src="https://cdn.jsdelivr.net/npm/scaffold-widget/dist/esm/scaffold-widget.js">
  <span slot="title">
    Hello World!
  </span>
</web-widget>
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```

## Building with Rollup

Builds your app and outputs it in your `dist` directory:

```bash
npm run build
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to minimize the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
