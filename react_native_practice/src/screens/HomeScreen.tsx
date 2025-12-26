import { Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getItem } from '../utils/storage';

export default function HomeScreen() {
  const [name, setName] = useState('');

  useEffect(() => {
    const loadName = async () => {
      const username = await getItem('username');
      setName(username || '');
    };
    loadName();
  }, []);

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Text>Hello {name}</Text>
    </SafeAreaView>
  );
}