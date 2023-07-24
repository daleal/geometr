# Geometr

To see the library documentation, please head over to [the official documentation](https://geometr.daleal.dev) or simply run StoryBook locally. Every part of the library is documented there. For general library development documentation, continue reading this `README.md` file.

## Dependencies

To run this project, you will need [pnpm](https://pnpm.io). You can install the dependencies by running:

```sh
pnpm install
```

## StoryBook

To run StoryBook, run the following command:

```sh
pnpm run storybook:dev
```

Then, open your browser on `http://localhost:6006`.

## Using the Playground

You can visually test your components by using the Playground provided by this project. On a new terminal, `cd` into `playground`, run `pnpm ci` and use `pnpm run dev` to start the Playground. You can learn more about this development aid by reading [its `README.md` file](./playground/README.md).

## Developing with an external project

To develop the library along side another external project, you can add the following entry to the `package.json` of the external project:

```json
{
   "devDependencies": {
      "geometr": "file:./relative/path/to/this/folder"
   }
}
```

Install the external project dependencies and use the library as the documentation states.

## Bumping the version

To bump the version before publishing, switch to the `main` branch and run the following command:

```sh
pnpm run bump! minor
```

You can run a `patch`, `minor` or `major` bump, depending on the changes to be released.
