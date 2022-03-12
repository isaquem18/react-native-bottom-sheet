import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Animated, { Layout, FadeIn, FadeOutUp } from 'react-native-reanimated'; 

import {FlatList} from 'react-native';

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
export const Container = styled.View`
  flex: 1;
  background-color: #252547;
`;

export const ProductList = (styled.FlatList.attrs({
  contentContainerStyle: {
    paddingVertical: 50,
    paddingHorizontal: 6
  }
})`` as unknown) as typeof FlatList;
 
