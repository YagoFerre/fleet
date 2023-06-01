import { useRef, useState } from 'react'
import { TextInput, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native'

import { useUser } from '@realm/react'
import { useRealm } from '../../libs/realm'
import { Historic } from '../../libs/realm/schemas/Historic'

import { useNavigation } from '@react-navigation/native'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { LicensePlateInput } from '../../components/LicensePlateInput'
import { TextAreaInput } from '../../components/TextAreaInput'

import { licensePlateValidate } from '../../utils/licensePlateValidate'

import { Container, Content } from './styles'

const keyboardAvoidingViewBehavior = Platform.OS === 'android' ? 'height' : 'position'

export function Departure() {
  const [licensePlate, setLicensePlate] = useState('')
  const [description, setDescription] = useState('')
  const [isRegistering, setIsRegistering] = useState(false)

  const { goBack } = useNavigation()
  const realm = useRealm()
  const user = useUser()

  const descriptionRef = useRef<TextInput>(null)
  const licensePlateRef = useRef<TextInput>(null)

  function handleDepartureRegister() {
    try {
      if (!licensePlateValidate(licensePlate)) {
        licensePlateRef.current?.focus()
        return Alert.alert('Placa inválida', 'A placa é inválida. Por favor informe a placa correta do veículos.')
      }

      if (description.trim().length === 0) {
        descriptionRef.current?.focus()
        return Alert.alert('Finalidade', 'Por favor, informe a finalidade da utilização do veículo.')
      }

      setIsRegistering(true)

      realm.write(() => {
        realm.create(
          'Historic',
          Historic.generate({
            user_id: user!.id,
            license_plate: licensePlate.toUpperCase(),
            description,
          }),
        )
      })

      Alert.alert('Saída', 'Saída do veículo registrada com sucesso!')

      goBack()
    } catch (error) {
      console.log(error)
      Alert.alert('Erro', 'Não foi possível registrar a saída do veículo.')

      setIsRegistering(false)
    }
  }

  return (
    <Container>
      <Header title="Saída" />

      <KeyboardAvoidingView style={{ flex: 1 }} behavior={keyboardAvoidingViewBehavior}>
        <ScrollView>
          <Content>
            <LicensePlateInput
              ref={licensePlateRef}
              label="Placa do veículo"
              placeholder="BRA1E34"
              onSubmitEditing={() => descriptionRef.current?.focus()}
              returnKeyType="next"
              onChangeText={(value) => setLicensePlate(value)}
            />

            <TextAreaInput
              ref={descriptionRef}
              label="Finalidade"
              placeholder="Vou utilizar o carro para..."
              onSubmitEditing={handleDepartureRegister}
              returnKeyType="send"
              blurOnSubmit
              onChangeText={(value) => setDescription(value)}
            />

            <Button title="Registrar Saída" isLoading={isRegistering} onPress={handleDepartureRegister} />
          </Content>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  )
}
