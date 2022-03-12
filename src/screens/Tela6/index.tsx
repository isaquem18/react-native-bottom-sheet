import { useEffect } from 'react';
import { Button, StatusBar, StyleSheet, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring, Easing, Extrapolate, withRepeat, cancelAnimation } from 'react-native-reanimated';
import { RFPercentage } from 'react-native-responsive-fontsize';

import {
  Container,
} from './styles';


export function Tela6() {
  const SQUARE_OPACITY_VALUE = useSharedValue(0);
  const SQUARE_TRANSLATIONY_VALUE = useSharedValue(100);

  const TEXT_OPACITY_VALUE = useSharedValue(0);
  const TEXT_TRANSLATIONY_VALUE = useSharedValue(-30);

  const YELLOW_ROTATE_VALUE = useSharedValue(0);
  const YELLOW_SCALE_VALUE = useSharedValue(0);

  const squareAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: SQUARE_OPACITY_VALUE.value,
      transform: [{ translateY: SQUARE_TRANSLATIONY_VALUE.value }]
    } 
  });

  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: TEXT_OPACITY_VALUE.value,
      transform: [{ translateY: TEXT_TRANSLATIONY_VALUE.value }]
    }
  });

  const yellowAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate:  `${YELLOW_ROTATE_VALUE.value}deg` },
        { scale: YELLOW_SCALE_VALUE.value }
      ],
    } 
  });

  useEffect(() => {
    YELLOW_ROTATE_VALUE.value = withRepeat(withTiming(360, { duration: 5000, easing: Easing.linear }), -1, false);
    YELLOW_SCALE_VALUE.value = withSpring(1);
    SQUARE_OPACITY_VALUE.value = withTiming(1, { duration: 1000 }),
    SQUARE_TRANSLATIONY_VALUE.value = withTiming(0, {
      duration: 1200,
      easing: Easing.bezier(.3,.64,.46,.97)
    }, () => {
      TEXT_OPACITY_VALUE.value = withTiming(1, { 
        duration: 400,
        easing: Easing.bezier(.3,.64,.46,.97)
      });
      TEXT_TRANSLATIONY_VALUE.value = withTiming(0, { 
        duration: 300,
        easing: Easing.bezier(.3,.64,.46,.97)
      })
    });
  }, [YELLOW_ROTATE_VALUE.value])

  return (
    <>
    <StatusBar barStyle="light-content" translucent backgroundColor="transparent"/>
      <Container style={[styles.container]}>
        <Animated.View style={[styles.square, squareAnimatedStyle]}/>
        <Animated.Text style={[styles.name, textAnimatedStyle]}>MyNewApp</Animated.Text>
        <Animated.View>
          <View style={styles.yellow}></View>
        </Animated.View>
        <Button 
          title="parar"
          onPress={() => {
            cancelAnimation(YELLOW_ROTATE_VALUE)
          }}
        />
      </Container>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#252547'
  },
  square: {
    backgroundColor: '#fff',
    width: 100,
    height: 100
  },
  name: {
    color: '#fff',
    fontSize: 16,
    marginTop: RFPercentage(1)
  },
  yellow: {
    backgroundColor: '#ffd000',
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 50,
    left: 50
  },
});







