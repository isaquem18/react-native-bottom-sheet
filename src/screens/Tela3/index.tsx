import { useState } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector
} from 'react-native-gesture-handler';


import {
  Container,
  Ball
} from './styles';
import { Button } from 'react-native';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';

export function Tela3() {
  const {
    navigate
  } = useNavigation<any>();

  const BALL_POSITION = useSharedValue({
    x: 0,
    y: 0
  });
  const BALL_CONTEXT = useSharedValue({
    x: 0,
    y: 0
  });

  const BALL_POSITION_ANIMATED_STYLE = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withSpring(BALL_POSITION.value.x, { mass: 0.5 }) }, 
        { translateY: withSpring(BALL_POSITION.value.y, { mass: 0.5 }) }
      ]
    }
  });

  const gesture = Gesture.Pan()
    .onStart(e => {
      BALL_CONTEXT.value = {
        x: BALL_POSITION.value.x,
        y: BALL_POSITION.value.y
      }
    })
    .onUpdate(e => {
      BALL_POSITION.value = {
        x: e.translationX + BALL_CONTEXT.value.x,
        y: e.translationY + BALL_CONTEXT.value.y
      }
    })
    .onEnd(e => {
      BALL_POSITION.value = {
        x: BALL_POSITION.value.x,
        y: BALL_POSITION.value.y
      }
    });


  return (
      <Container>
          <Animated.View style={BALL_POSITION_ANIMATED_STYLE}>
            <GestureDetector gesture={gesture}>
              <Ball />
            </GestureDetector>
          </Animated.View>
          <Button 
            title="next"
            onPress={() => {
              navigate({
                name: 'Tela4'
              });
            }}
          />
          <Button 
            title="tela5"
            onPress={() => {
              navigate({
                name: 'Tela5'
              });
            }}
          />
      </Container>
  )
}








