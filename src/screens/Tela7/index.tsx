import { useEffect } from 'react';
import { Button, StatusBar, StyleSheet } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  withSpring, 
  Easing, 
  Extrapolate, 
  withRepeat, 
  cancelAnimation,
  useAnimatedGestureHandler
} from 'react-native-reanimated';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

import {
  Container,
  Circle
} from './styles';

const SIZE = 100;

export function Tela7() {
  const TRANSLATE_X = useSharedValue(0);
  const TRANSLATE_Y = useSharedValue(0);

  const SQUARE_ANIMATED_STYLE = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX:  TRANSLATE_X.value },
        { translateY:  TRANSLATE_Y.value },        
      ]
    }
  });

  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (event, ctx: any) => {
      ctx.translateX = TRANSLATE_X.value;
      ctx.translateY = TRANSLATE_Y.value;
    },
    onActive: (event, ctx) => {
      TRANSLATE_X.value = ctx.translateX + event.translationX;
      TRANSLATE_Y.value = ctx.translateY + event.translationY;
    } ,
    onEnd: (event, ctx) => {
      const distance = Math.sqrt(TRANSLATE_X.value ** 2 + TRANSLATE_Y.value ** 2);
      if (distance < ((width*1.05) / 2)) {
        TRANSLATE_X.value = withSpring(0);
        TRANSLATE_Y.value = withSpring(0);
      }
    } 
  })

  return (
    <>
    <StatusBar barStyle="dark-content" translucent backgroundColor="transparent"/>
      <Container>
        <Circle>
          <PanGestureHandler onGestureEvent={panGestureEvent}>
            <Animated.View style={[styles.square, SQUARE_ANIMATED_STYLE]} />
          </PanGestureHandler>
        </Circle>
      </Container>
    </>
  )
}

const styles = StyleSheet.create({
  square: {
    backgroundColor: 'rgba(43, 0, 255, 0.548)',
    width: 60,
    height: 60,
    borderRadius: 20
  }
});


