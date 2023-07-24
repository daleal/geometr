# Geometr Playground

You can use this application as a development playground.

Inside the `src` sub-folder you will find a `GPlayground.template.vue` file. Copy the contents of that file into a `GPlayground.vue` file on the same directory and put anything you need inside that file! It will be gitignored, so you can't screw up your Pull Request by trying your component.

## Starting the Playground

To start the Playground, first install the dependencies:

```sh
pnpm install --frozen-lockfile
```

Make sure the `src/GPlayground.vue` component exists. If it doesn't, create it by running the following code snippet:

```sh
cp src/GPlayground.template.vue src/GPlaygroynd.vue
```

Inside the `src/GPlayground.vue` you can visually test every component however you want.

Finally, just start the development server:

```sh
pnpm run dev
```

Note that the playground is always wrapped by a `GApplication` component.

## Importing components

To import a component from the library, just import it from `@/components/main`. That file corresponds to the `geometr/components` entrypoint. You can also import composables from `@/composables/main`. That file corresponds to the `geometr/composables` entrypoint. Finally, you can import directly from `@/main`. That file corresponds to the `geometr` entrypoint. Here's an example:

```ts
import { GButton } from '@/components/main';
```
