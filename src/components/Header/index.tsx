import { TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ArrowLeft } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'

import { Container, Title } from './styles'

interface Props {
  title: string
}

export function Header({ title }: Props) {
  const { goBack } = useNavigation()

  const insets = useSafeAreaInsets()
  const paddingTop = insets.top + 42

  return (
    <Container style={{ paddingTop }}>
      <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
        <ArrowLeft size={24} weight="bold" color="#00B37E" />
      </TouchableOpacity>

      <Title>{title}</Title>
    </Container>
  )
}
