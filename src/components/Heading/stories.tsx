import { Meta } from '@storybook/react'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default = (args: HeadingProps) => <Heading {...args} />

Default.args = {
  children: 'Most Populars',
  color: 'black'
}
