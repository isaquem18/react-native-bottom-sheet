import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons'; 
import Animated from 'react-native-reanimated';

export const Container = styled.View`
  width: 100%;
  height: ${RFPercentage(40)}px;
  padding: ${RFPercentage(1)}px;
`;

export const InnerContainerProduct = styled.View`
  background-color: #FFF;
  flex: 1;
  padding: ${RFPercentage(2)}px;
  border-radius: 10px;
`;

export const TitleProduct = styled.Text``;

export const ImageProduct = styled.Image.attrs({
  resizeMode: 'contain'
})`
  width: 100%;
  height: ${RFPercentage(16)}px;
  margin-bottom: ${RFPercentage(3)}px;
`;

export const TrashIcon = styled(Feather).attrs({
  name: 'trash-2',
  size: 24,
  color: '#f00'
})`
  position: absolute;  
  right: 6px;
  bottom: 6px;
`;


