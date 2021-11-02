# \<<%= pkgName %>>

This web widget follows the [@web-widget](https://web-widget.js.org/) recommendation.

## Installation

```bash
npm i <%= pkgName %>
```

## Usage

```html
<web-widget src="https://cdn.jsdelivr.net/npm/<%= pkgName %>/dist/esm/<%= pkgName %>.js">
  <span slot="title">
    Hello World!
  </span>
</web-widget>
```

<%= featureReadmes %>

## Tooling configs

For most of the tools, the configuration is in the `package.json` to minimize the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
