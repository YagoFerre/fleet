/* eslint-disable no-undef */
import { TouchableOpacityProps } from 'react-native'
import { IconProps } from 'phosphor-react-native'

import { Container } from './styles'

export type IconBoxProps = (props: IconProps) => JSX.Element

type Props = TouchableOpacityProps & {
  icon: IconBoxProps
}

export function ButtonIcon({ icon: Icon, ...rest }: Props) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <Icon size={24} color="#00875F" />
    </Container>
  )
}
