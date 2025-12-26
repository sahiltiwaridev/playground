import { Text, Button, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { setItem } from '../utils/storage';

export default function CreateAccountScreen({ navigation }: any) {
  const [text, setText] = useState('');

  const handleCreateAccount = async () => {
    await setItem('username', text);
    navigation.replace('HomeScreen');
  };

  return (
    <SafeAreaView>
      <Text>Create Account</Text>
      <TextInput
        onChangeText={setText}
        value={text}
        placeholder="Enter your text here"
      />
      <Button
        title="Create account"
        onPress={handleCreateAccount}
      />
    </SafeAreaView>
  );
}