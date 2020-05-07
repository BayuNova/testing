import { shallowMount } from '@vue/test-utils'
import Links from '@/components/Links.vue'

describe('Links.vue', () => {
  it('render props untuk component title', () => {
    const linkmsg = 'https://www.google.com/?hl=in'
    const wrapper = shallowMount(Links, {
      propsData: { linkref: linkmsg }
    })
    expect(wrapper.find('b-link')).toBe(linkmsg)
  })
})