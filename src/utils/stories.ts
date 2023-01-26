import type { Component } from 'vue';
import type { StoryFn } from '@storybook/vue3';

const getComponentName = <ComponentType extends Component>(component: ComponentType) => {
  // @ts-expect-error: public interface does not include __name attribute
  const componentName = component.__name; // eslint-disable-line no-underscore-dangle
  if (componentName === undefined) {
    throw new Error('Component does not include a `__name` attribute.');
  }
  return componentName;
};

export const buildStoryFactory = <ComponentType extends Component>(
  component: ComponentType,
  renderingTemplate: string,
) => {
  const templateFunction: StoryFn<ComponentType> = (args) => {
    const componentName = getComponentName(component);
    return {
      components: { [componentName]: component },
      setup() {
        return { args };
      },
      template: renderingTemplate,
    };
  };

  const storyFactory = (args: Partial<ComponentType>) => {
    const story = templateFunction.bind({});
    story.args = args;
    return story;
  };

  return storyFactory;
};
