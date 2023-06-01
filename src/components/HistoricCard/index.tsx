import { TouchableOpacityProps } from 'react-native'
import { Check, ClockClockwise } from 'phosphor-react-native'

import { Container, Departure, Info, LicensePlate } from './styles'

export interface HistoricCardProps {
  id: string
  licensePlate: string
  created: string
  isSync: boolean
}

interface Props extends TouchableOpacityProps {
  data: HistoricCardProps
}

export function HistoricCard({ data, ...rest }: Props) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <Info>
        <LicensePlate>{data.licensePlate}</LicensePlate>
        <Departure>{data.created}</Departure>
      </Info>

      {data.isSync ? <Check size={24} color="#00B37E" /> : <ClockClockwise size={24} color="#7C7C8A" />}
    </Container>
  )
}
