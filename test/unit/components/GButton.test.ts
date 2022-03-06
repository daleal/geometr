import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { GButton } from '@/components/GButton';

describe('GButton', () => {
  it('renders props.text when passed', () => {
    const text = 'This is a button';
    const wrapper = mount(GButton, {
      props: { text },
    });
    expect(wrapper.text()).toMatch(text);
  });
});
