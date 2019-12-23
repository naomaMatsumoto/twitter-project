import { shallowMount } from '@vue/test-utils';
import Diagnosis from '@/components/Diagnosis.vue';

describe('Diagnosis.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Diagnosis, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
