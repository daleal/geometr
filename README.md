# Geometr

To see the library documentation, please start StoryBook. Every part of the library is documented there. For general library development documentation, continue reading this `README.md` file.

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
