import { TouchableOpacityProps } from 'react-native'
import { Key, Car } from 'phosphor-react-native'

import { Container, IconBox, Message, TextHighlight } from './styles'

interface Props extends TouchableOpacityProps {
  licensePlate?: string | null
}

export function CarStatus({ licensePlate = null, ...rest }: Props) {
  const Icon = licensePlate ? Car : Key
  const message = licensePlate ? `Veículo ${licensePlate} em uso. ` : `Nenhum veículo em uso. `
  const textHighlight = licensePlate ? `chegada` : `saída`

  return (
    <Container {...rest}>
      <IconBox>
        <Icon size={52} color="#00B37E" weight="light" />
      </IconBox>

      <Message>
        {message}
        <TextHighlight>Clique aqui para registrar a {textHighlight}.</TextHighlight>
      </Message>
    </Container>
  )
}
