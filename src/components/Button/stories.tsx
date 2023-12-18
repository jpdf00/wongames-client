import { Meta } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      control: {
        type: ''
      }
    }
  }
} as Meta

export const Default = (args: ButtonProps) => <Button {...args} />

Default.args = {
  children: 'Buy now'
}

export const withIcon = (args: ButtonProps) => <Button {...args} />

withIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />
}
