import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #252547;
  padding: 20px 14px;
  padding-top: 100px;
`;

export const Ball = styled.View`
  width: ${RFPercentage(10)}px;
  height: ${RFPercentage(10)}px;
  background-color: #b97a2a;
  border-radius: ${RFPercentage(5)}px;
`;
