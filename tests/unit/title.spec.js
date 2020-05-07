import { shallowMount } from '@vue/test-utils'
import Title from '@/components/Title.vue'

describe('title.vue', () => {
  it('render props untuk component title', () => {
    const titlemsg = 'Title Baru'
    const wrapper = shallowMount(Title, {
      propsData: { strtitle: titlemsg }
    })
    expect(wrapper.text()).toMatch(titlemsg)
  })
})