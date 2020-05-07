import { shallowMount } from '@vue/test-utils'
import axios from 'axios'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  // reset semua pemalsuan (mock) setiap selesai test
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('memanggil Rest API dengan Axios', async (done) => {
    const mockSuccessResponse = [
      'a', 'b', 'c'
    ];
    const mockFetchPromise = Promise.resolve({
      data: mockSuccessResponse,
    });
    // memalsukan fungsi fetch API
    // selalu mengembalikan nilai sesuai yang diinginkan
    axios.get = jest.fn().mockResolvedValue(mockFetchPromise)

    const wrapper = shallowMount(HelloWorld)
    await wrapper.vm.fetchDataAxios()

    // memastikan fungsi fetch dipanggil sekali
    expect(axios.get).toHaveBeenCalledTimes(1)
    // memastikan fungsi dipanggil dengan URL yang benar
    expect(axios.get).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
    expect(wrapper.vm.dataResponse).toEqual(mockSuccessResponse)
    done()
  })
})