import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Animated, { Layout, FadeIn, FadeOutUp } from 'react-native-reanimated'; 

import { FlatList, Platform } from 'react-native';

interface ProductProps {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: {
    rate?: number;
    count?: number;
  }
}
export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 12,
    paddingTop: Platform.OS === 'ios' ? RFPercentage(6) : RFPercentage(20)
  }
})`
  flex: 1;
  background-color: #252547;
`;

export const ProductList = (styled.FlatList.attrs({
  contentContainerStyle: {
    paddingVertical: 50,
    paddingHorizontal: 6
  }
})`` as unknown) as typeof FlatList;
 
export const Title = styled.Text``;



export const ProductItem = styled(Animated.View)`
  width: 100%;
  height: ${RFPercentage(10)}px;
  background-color: #434392;
  margin-bottom: ${RFPercentage(2)}px;
`;