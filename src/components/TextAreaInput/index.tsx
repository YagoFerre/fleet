/* eslint-disable react/display-name */
import { TextInput, TextInputProps } from 'react-native'

import { Container, Input, Label } from './styles'
import { forwardRef } from 'react'

type Props = TextInputProps & {
  label: string
}

export const TextAreaInput = forwardRef<TextInput, Props>(({ label, ...rest }, ref) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input ref={ref} placeholderTextColor="#7C7C8A" multiline autoCapitalize="sentences" {...rest} />
    </Container>
  )
})
