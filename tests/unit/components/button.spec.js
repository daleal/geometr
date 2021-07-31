import { shallowMount } from '@vue/test-utils';
import { GButton } from '@/components/button';

describe('GButton', () => {
  it('renders props.text when passed', () => {
    const text = 'This is a button';
    const wrapper = shallowMount(GButton, {
      props: { text },
    });
    expect(wrapper.text()).toMatch(text);
  });
});
