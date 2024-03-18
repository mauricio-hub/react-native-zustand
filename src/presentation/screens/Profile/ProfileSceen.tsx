import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from '../../../config'
import { useProfileStore } from '../../store/profile-store'


export const ProfileScreen = () => {

  const name = useProfileStore(state => state.name)
  const email = useProfileStore(state => state.email)
  const changeProfile = useProfileStore(state => state.changeProfile)






  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>

      <Pressable style={styles.primaryButton}
        onPress={() => {
          useProfileStore.setState({ name: 'Mafalda' })
        }}
      >
        <Text>Cambiar Nombre</Text>
      </Pressable>

      <Pressable style={styles.primaryButton}
        onPress={() => {
          useProfileStore.setState({ email: 'Mafalda@gmail.com' })
        }}
      >
        <Text>Cambiar email</Text>
      </Pressable>

      <Pressable style={styles.primaryButton}
        onPress={() => changeProfile('John Doe', 'jhon.doe@gmail.com')}
      >
        <Text>Regresa el estado inicial</Text>
      </Pressable>

    </View>
  )
}
