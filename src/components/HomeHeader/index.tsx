import { TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Power } from 'phosphor-react-native'

import { useApp, useUser } from '@realm/react'

import { Container, Greeting, Message, Name, Picture } from './styles'

export function HomeHeader() {
  const user = useUser()
  const app = useApp()
  const insets = useSafeAreaInsets()

  const paddingTop = insets.top + 32

  const imagePicture = user?.profile.pictureurl as string

  function handleLogout() {
    app.currentUser?.logOut()
  }

  return (
    <Container style={{ paddingTop }}>
      <Picture source={{ uri: imagePicture }} placeholder="L184i9ofbHof00ayjsay~qj[ayjt" />

      <Greeting>
        <Message>Olá,</Message>
        <Name>{user?.profile.name}</Name>
      </Greeting>

      <TouchableOpacity activeOpacity={0.7} onPress={handleLogout}>
        <Power size={32} color="#7C7C8A" />
      </TouchableOpacity>
    </Container>
  )
}
