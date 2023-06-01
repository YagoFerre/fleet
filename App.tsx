/* eslint-disable camelcase */
import 'react-native-get-random-values'
import './src/libs/dayjs'

import { StatusBar } from 'react-native'
import { WifiSlash } from 'phosphor-react-native'
import { ThemeProvider } from 'styled-components/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { useNetInfo } from '@react-native-community/netinfo'

import { AppProvider, UserProvider } from '@realm/react'

import { REALM_APP_ID } from '@env'

import theme from './src/theme'

import { Routes } from './src/routes'
import { RealmProvider, syncConfig } from './src/libs/realm'

import { SignIn } from './src/screens/SignIn/Index'
import { Loading } from './src/components/Loading'
import { TopMessage } from './src/components/TopMessage'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  const netInfo = useNetInfo()

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <AppProvider id={REALM_APP_ID}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider style={{ flex: 1, backgroundColor: '#202024' }}>
          <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
          {!netInfo.isConnected && <TopMessage title="Você está off-line." icon={WifiSlash} />}

          <UserProvider fallback={SignIn}>
            <RealmProvider sync={syncConfig} fallback={Loading}>
              <Routes />
            </RealmProvider>
          </UserProvider>
        </SafeAreaProvider>
      </ThemeProvider>
    </AppProvider>
  )
}
