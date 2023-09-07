import { reverseGeocodeAsync } from 'expo-location'

interface Props {
  latitude: number
  longitude: number
}

export async function getAddressLocation({ latitude, longitude }: Props) {
  try {
    const addressResponse = await reverseGeocodeAsync({ latitude, longitude })

    return addressResponse[0]?.street
  } catch (err) {
    console.log(err)
  }
}
