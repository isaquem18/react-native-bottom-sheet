import { useCallback, useEffect, useRef, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import uuid from 'react-native-uuid';

import api from '../../api';
import { ProductContainer } from '../../components/ProductContainer';
import {
  Container,
  ProductItem,
  Title
} from './styles';
import { ActivityIndicator, Alert, Button, LayoutAnimation, Pressable, RefreshControl, Text } from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  Layout,
  SlideInRight,
  FadeInRight,
  FadeOutLeft,
  ZoomIn
} from 'react-native-reanimated';


export function Tela5() {
  const[ count, setCount ] = useState(10);
  const [ list, setList ] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9
  ]);

  function handleAddItem() {
    setList(oldValue => [count, ...oldValue]);
    setCount(oldValue => ++oldValue);
  }


  return (
    <Container>
      <Button 
        title="add item"
        onPress={handleAddItem}
      />
      {list.map((item) => (
        <Animated.View key={item.toString()}
          layout={Layout.springify().mass(0.5)}
          entering={FadeInRight}
          exiting={FadeOut}
        >
          <Pressable onPress={() => setList(oldValue => oldValue.filter(i => i !== item))}>
            <ProductItem>
              <Title>{item.toString()}</Title>
            </ProductItem>
          </Pressable>
        </Animated.View>
      ))}
    </Container>
  )
}








