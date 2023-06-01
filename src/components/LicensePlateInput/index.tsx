/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import { TextInputProps, TextInput } from 'react-native'

import { Container, Input, Label } from './styles'

interface Props extends TextInputProps {
  label: string
}

export const LicensePlateInput = forwardRef<TextInput, Props>(({ label, ...rest }, ref) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input ref={ref} maxLength={7} autoCapitalize="characters" placeholderTextColor="#7C7C8A" {...rest} />
    </Container>
  )
})
