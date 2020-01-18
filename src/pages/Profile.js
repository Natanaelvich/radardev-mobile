import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
// import { Container } from './styles';

export default function Profile({ navigation }) {
  const usernameGithub = navigation.getParam('username_github');

  return <WebView source={{ uri: `https://github.com/${usernameGithub}` }} />;
}
