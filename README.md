---
permalink: 'init/index.html'
title: Create Web Widget Application
section: guides
tags:
  - guides
---

# Create Web Widget Application

Web component project scaffolding.

[//]: # 'AUTO INSERT HEADER PREPUBLISH'

## Usage

```bash
npm init @web-widget/create
```

<div class="custom-block warning"><p class="custom-block-title">WARNING</p> <p><code>npm init</code> requires node 14 &amp; npm 6 or higher</p></div>

This will kickstart a menu guiding you through all available actions.

    $ npm init @web-widget/create
    npx: installed 14 in 4.074s
    ${chalk.underline('Web Widget Application Recommendations')}
    Start or upgrade your web component project with ease.
    All our recommendations at your fingertips.

    See more details at https://web-widget.js.org/


    ? What would you like to do today? › - Use arrow-keys. Return to submit.
    ❯  Scaffold a new project
       Upgrade an existing project

Our generators are very modular you can pick and choose as you see fit.

## Options

You may pass options to skip the CLI wizard in part or in whole.

| Option                  | Type                                        | Description                                                                                                               |     |
| ----------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | --- |
| `--destinationPath`     | path                                        | The path the generator will write files to                                                                                |     |
| `--type`                | `scaffold`\|`upgrade`                       | Choose scaffold to create a new project or upgrade to add features to an existing project                                 |     |
| `--features`            | `linting`\|`testing`\|`demoing`\|`building` | Which features to include. linting, testing, demoing, or building                                                         |     |
| `--pkgName`             | string                                      | The tag name for the web component or app shell element                                                                   |     |
| `--installDependencies` | `yarn`\|`npm`\|`false`                      | Whether to install dependencies. Choose npm or yarn to install with those package managers, or false to skip installation |     |
| `--writeToDisk`         | `true`\|`false`                             | Whether or not to actually write the files to disk                                                                        |     |
| `--help`                |                                             | This help message                                                                                                         |     |

## Scaffold generators

These generators help you kickstart a new app or web component.
They will create a new folder and set up everything you need to get started immediately.

Example usage:

```bash
npm init @web-widget/create
# Select "Scaffold a new project"
```

## Features

The above generators are the perfect playgrounds to prototype.
Add linting, testing, demoing and building whenever the need arises.

Example usage:

```bash
cd existing-web-component
npm init @web-widget/create
# select "Upgrade an existing project" or add features while scaffolding
```

### Available Upgrade features

- `Linting`<br>
  This generator adds a complete linting setup with ESLint, Prettier, Husky and commitlint.
  <br/>

- `Testing`<br>
  This generator adds a complete testing setup with Web Test Runner.
  <br/>

- `Demoing`<br>
  This generator adds a complete demoing setup with Storybook.
  <br/>

- `Building`<br>
  This generator adds a complete building setup with Rollup.
  <br/>

For information on how to extend and customize the generator, see the [docs page](https://open-wc.org/docs/development/generator/#extending)

## Commands
