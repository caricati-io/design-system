import { Story } from '@storybook/react'
import Accordion, { Props } from '.'
import AccordionItem from './item'

export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    status: {
      options: [undefined, 'online', 'busy', 'away', 'offline'],
      status: { type: 'select' },
    },
  },
}

const Template: Story<Props> = (args) => <Accordion {...args} />

export const Default = Template.bind({})
Default.args = {
  openOnlyOne: false,
  children: (
    <>
      <AccordionItem title="item 1">
        Praesent blandit euismod tempor. Pellentesque pulvinar pharetra porta.
        Vivamus ac maximus arcu. Quisque quis lobortis justo, ac posuere ex.
        Mauris ut ornare urna. Etiam molestie pretium nunc eget egestas. In hac
        habitasse platea dictumst. Aliquam non libero a mauris pharetra
        tincidunt id ut augue. Nulla molestie quam eu risus condimentum, quis
        viverra nulla ultricies. Aliquam ut tellus vitae velit viverra ultrices.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis
        mollis metus quam, vitae iaculis sapien pellentesque et.
      </AccordionItem>
      <AccordionItem title="item 2">
        Donec feugiat ac metus vitae congue. Vivamus augue libero, hendrerit vel
        velit a, facilisis bibendum metus. Curabitur quis lectus cursus, auctor
        felis in, congue dui. Quisque ligula augue, sollicitudin eu cursus a,
        fringilla a nisi. Nunc dui sapien, accumsan vitae erat pulvinar,
        interdum aliquet justo. Suspendisse potenti. Etiam semper, mi eget
        aliquam pharetra, mauris lectus commodo magna, eget vulputate nunc
        tortor eu est. Mauris tempor libero et pretium dapibus. Etiam vestibulum
        dui at dolor viverra aliquet. Donec sed justo consectetur, semper erat
        vel, ornare purus. Quisque eu convallis libero. Sed lacinia nulla ac
        sapien facilisis, ac tristique odio dapibus. Phasellus tristique eu sem
        dictum mattis. Quisque at massa pellentesque ligula lobortis molestie ac
        non velit.
      </AccordionItem>
      <AccordionItem title="item 3">
        Donec aliquet euismod lacus. Integer quis pellentesque augue. Mauris
        pretium ac ex sit amet tempor. Aenean tincidunt augue et rhoncus
        commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Quisque lobortis consequat ligula, non finibus risus euismod id. Vivamus
        elementum aliquet pulvinar. Nulla volutpat pharetra sapien, eu
        scelerisque magna mattis in. Mauris porttitor tellus est, ut semper
        augue scelerisque sit amet. Aenean libero massa, sollicitudin non
        lobortis sit amet, mattis non est. In malesuada efficitur mi,
        consectetur vulputate nunc vulputate vel. Mauris euismod lectus at orci
        fringilla, at bibendum libero venenatis. Nam eget nisi vulputate,
        pulvinar est quis, varius ligula.
      </AccordionItem>
    </>
  ),
}
