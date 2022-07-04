import { shallowMount } from '@vue/test-utils'
import Login from '../../components/Login.vue'

describe('Login component test', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Login'
    const wrapper = shallowMount(Login, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
  // test("Is rendered",()=>{
  //   const text = "Login"
  //   const wrapper = shallowMount(Login ,{
  //     propsData : {
  //       task: {
  //         name : text,
  //         completed: false,
  //       }
  //     }
  //   })
  //   expect(wrapper.html()).toContain(text)
  // })
})
