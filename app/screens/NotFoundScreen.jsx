import { useEffect } from 'react';
import { Redirect } from 'expo-router';

export default function NotFoundScreen() {
  useEffect(() => {
    return <Redirect href="/" />;
  }, []);

  return null;
}
