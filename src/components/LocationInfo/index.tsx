import { IconBox, IconBoxProps } from '../IconBox'
import { Container, Info, Label, Description } from './styles'

export interface LocationInfoProps {
  label: string
  description: string
}

interface Props extends LocationInfoProps {
  icon: IconBoxProps
}

export function LocationInfo({ label, description, icon }: Props) {
  return (
    <Container>
      <IconBox icon={icon} />

      <Info>
        <Label numberOfLines={1}>{label}</Label>

        <Description numberOfLines={1}>{description}</Description>
      </Info>
    </Container>
  )
}
