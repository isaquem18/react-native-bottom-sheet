import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Animated, { Layout, FadeIn, FadeOutUp } from 'react-native-reanimated'; 
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

import { FlatList, Platform } from 'react-native';

export const Container = styled(Animated.View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.View`
  border: 5px solid rgba(43, 0, 255, 0.548);
  width: ${width/1.05}px;
  height: ${width/1.05}px;
  position: absolute;
  border-radius: ${width}px;
  align-items: center;
  justify-content: center;

`;

// export const Square = styled.Text``;

