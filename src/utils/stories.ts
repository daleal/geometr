import type { Component } from 'vue';
import type { StoryFn } from '@storybook/vue3';

export const buildTemplate = <ComponentType extends Component>(
  component: ComponentType,
  renderingTemplate: string,
) => {
  const templateFunction: StoryFn<ComponentType> = (args) => {
    const response = {
      components: { component },
      setup() {
        return { args };
      },
      template: renderingTemplate,
    };
    console.log(response.components);
    return response;
  };

  const storyFactory = (args: Partial<ComponentType>) => {
    const story = templateFunction.bind({});
    story.args = args;
    return story;
  };

  return storyFactory;
};
