import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { getItem } from '../utils/storage';

export default function LoadingScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const checkUser = async () => {
      const data = await getItem('username');
      
      setTimeout(() => {
        if (!data) {
          navigation.replace('CreateAccountScreen');
        } else {
          navigation.replace('HomeScreen');
        }
      }, 1000);
    };

    checkUser();
  }, [navigation]);

  return (
    <SafeAreaView>
      <Text>Loading...</Text>
    </SafeAreaView>
  );
}