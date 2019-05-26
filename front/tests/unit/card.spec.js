import { shallowMount } from '@vue/test-utils'
import Card from '@/components/Card.vue'
import Vue from 'vue'

Vue.config.ignoredElements = ['v-lazy-image', 'VLazyImage']

describe('When I create the Card component', () => {
  const createComponent = (propsData = {}, slot) => {
    return shallowMount(Card, {
      propsData,
      slots: {
        default: slot || 'Card'
      }
    })
  }

  function getCard (isTurned = false) {
    const card = { handleTurn: () => (0), isTurned, isOtherWay: false, cardIndex: 0, imageUrl: '../../src/assets/img/jace.jpeg' }

    return createComponent({ ...card })
  }

  it('should be have a turn card props', () => {
    const wrapper = getCard(true)
    const inside = wrapper.find('.card > .inside')
    expect(inside.attributes().style).toBe('transform: rotateY(180deg);')
  })

  it('should be have a front div', () => {
    const wrapper = getCard(true)
    const front = wrapper.find('.card > .inside > .front')
    expect(front.exists()).toBe(true)
  })

  it('should be have a back div', () => {
    const wrapper = getCard()
    const back = wrapper.find('.card > .inside > .back')
    expect(back.exists()).toBe(true)
  })
})
