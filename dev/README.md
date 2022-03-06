# Development Application

You can use this application as a development playground.

Inside the `src` sub-folder you will find a `GPlayground.template.vue` file. Copy the contents of that file into a `GPlayground.vue` file on the same directory and put anything you need inside that file! It will be gitignored, so you can't screw up your Pull Request by trying your component.

## Importing components

To import a component from the library, you can use two methods:

1. Import the component directly from the Geometr project by using something like this:
    ```ts
    import { GButton } from '~/src/main';
    ```
2. Import the component from the `dist` folder after building the project using something like this:
    ```ts
    // For ES module imports
    import { GButton } from '~/dist/index.es';

    // For CJS imports
    import { GButton } from '~/dist/index.cjs';
    ```
