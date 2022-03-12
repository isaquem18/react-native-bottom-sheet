import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const { height, width } = Dimensions.get('screen');

export const Container = styled.View`
  height: ${height}px;
  width: ${width}px;
  background-color: #272F33;
  position: relative;
`;

export const SwipeBox = styled.View`
  background-color: #ebb63c;
  height: ${height}px;
  width: 100%;
  overflow: hidden;
`;

export const ScrollSwipeBox = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 12,
    paddingVertical: 70
  },
  showsVerticalScrollIndicator: false
})`
  flex: 1;
`;

export const HandleSwipeBox = styled.View`
  height: ${RFPercentage(4)}px;
  width: 100%;
  background-color: #d8d8d8;
  position: absolute;
  top: 0;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const Line = styled.View`
  height: 3px;
  background-color: #555252;
  width: ${RFPercentage(15)}px;
  border-radius: ${RFPercentage(15)}px;
`;

export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: RFPercentage(2),
    paddingVertical: RFPercentage(12)
  }
})`
  width: ${width}px;
  flex: 1;
`;

export const InfoText = styled.Text`
    z-index: 1;
    color: #fff;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.5px;
`;

export const Footer = styled.View`
  height: 200px;
  bottom: 0;
  width: ${width}px;
  background: transparent;
`;
