import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingVertical: 50
  }
})`
  flex: 1;
  background-color: #252547;
`;

export const Task = styled.View`
  height: ${RFPercentage(7)}px;
  width: 100%;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  margin: 8px 0;
  border-radius: 10px;
`;

export const TaskName = styled.Text`
  color: #252547;
  font-size: 20px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: ${RFPercentage(10)}px;
  background-color: #fff;
  padding: 0 14px;
  border-radius: 10px;
  margin: 30px 0;
`;

