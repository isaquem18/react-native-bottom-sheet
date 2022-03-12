import { useEffect, useState } from 'react';
import { StatusBar, Dimensions, StyleSheet, View, Button } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  withSpring, 
  interpolate, 
  Extrapolate,
  runOnJS
} from 'react-native-reanimated';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import {
  Container,
  SwipeBox,
  HandleSwipeBox,
  Line,
  ScrollContainer,
  InfoText,
  Footer,
  ScrollSwipeBox
} from './styles';
import { RFPercentage } from 'react-native-responsive-fontsize';
const { height, width } = Dimensions.get('screen');

export function Home() {
  const { navigate } = useNavigation<any>();
  const [ scrollEnabled, setScrollEnabled ] = useState(false);
  const statusbBarHeight = getStatusBarHeight();
  const positionY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });

  const translateYAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: positionY.value }]
    }
  });

  const boxRadiusAnimatedStyle = useAnimatedStyle(() => {
    const boxRadiusValue = interpolate(positionY.value, 
      [-height + 200 + statusbBarHeight, 0],
      [0, 40],
      Extrapolate.CLAMP
    );
    
    return {
      borderTopLeftRadius: boxRadiusValue,
      borderTopRightRadius: boxRadiusValue,
    }
  });




  
  
  const panGesture = Gesture.Pan()
    .hitSlop(100)
    .onStart(event => {
      context.value.y = event.translationY;
    })
    .onUpdate((event) => {
      positionY.value = withSpring(context.value.y + event.translationY);
    })
    .onEnd((event) => {
      const atributes = {
        mass: 0.4
      };
      if (event.translationY < 100) {
        positionY.value = withSpring(-height + 200 + statusbBarHeight, atributes);
      } else {
        positionY.value = withSpring(0, atributes);
      }
    });

    async function handleUpdateScroll() {
      console.log(positionY.value);
      if (positionY.value < -100) {
        setScrollEnabled(true);
      } else {
        setScrollEnabled(false);
      }
    }



  return (
    <>
      <StatusBar barStyle="light-content" translucent />
      <Container>
        <ScrollContainer pointerEvents="auto">
          <InfoText>
          minDistance(value: number)#

          Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

minPointers(value: number)#

A number of fingers that is required to be placed before gesture can activate. Should be a higher or equal to 0 integer.

maxPointers(value: number)#

When the given number of fingers is placed on the screen and gesture hasn't yet activated it will fail recognizing the gesture. Should be a higher or equal to 0 integer.

activeOffsetX(value: number | number[])#

Range along X axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

activeOffsetY(value: number | number[])#

Range along Y axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

failOffsetY(value: number | number[])#minDistance(value: number)#

Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

minPointers(value: number)#

A number of fingers that is required to be pl
Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

minPointers(value: number)#

A number of fingers that is required to be placed before gesture can activate. Should be a higher or equal to 0 integer.

maxPointers(value: number)#

When the given number of fingers is placed on the screen and gesture hasn't yet activated it will fail recognizing the gesture. Should be a higher or equal to 0 integer.

activeOffsetX(value: number | number[])#

Range along X axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

activeOffsetY(value: number | number[])#

Range along Y axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

failOffsetY(value: number | number[])#minDistance(value: number)#

Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

minPointers(value: number)#

A number of fingers that is required to be pl
Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

minPointers(value: number)#

A number of fingers that is required to be placed before gesture can activate. Should be a higher or equal to 0 integer.

maxPointers(value: number)#

When the given number of fingers is placed on the screen and gesture hasn't yet activated it will fail recognizing the gesture. Should be a higher or equal to 0 integer.

activeOffsetX(value: number | number[])#

Range along X axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

activeOffsetY(value: number | number[])#

Range along Y axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

failOffsetY(value: number | number[])#minDistance(value: number)#

Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

minPointers(value: number)#

A number of fingers that is required to be pl
Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

minPointers(value: number)#

A number of fingers that is required to be placed before gesture can activate. Should be a higher or equal to 0 integer.

maxPointers(value: number)#

When the given number of fingers is placed on the screen and gesture hasn't yet activated it will fail recognizing the gesture. Should be a higher or equal to 0 integer.

activeOffsetX(value: number | number[])#

Range along X axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

activeOffsetY(value: number | number[])#

Range along Y axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

failOffsetY(value: number | number[])#minDistance(value: number)#

Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

minPointers(value: number)#

A number of fingers that is required to be pl
Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

minPointers(value: number)#

A number of fingers that is required to be placed before gesture can activate. Should be a higher or equal to 0 integer.

maxPointers(value: number)#

When the given number of fingers is placed on the screen and gesture hasn't yet activated it will fail recognizing the gesture. Should be a higher or equal to 0 integer.

activeOffsetX(value: number | number[])#

Range along X axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

activeOffsetY(value: number | number[])#

Range along Y axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

failOffsetY(value: number | number[])#minDistance(value: number)#

Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

minPointers(value: number)#

A number of fingers that is required to be placed before gesture can activate. Should be a higher or equal to 0 integer.

maxPointers(value: number)#

When the given number of fingers is placed on the screen and gesture hasn't yet activated it will fail recognizing the gesture. Should be a higher or equal to 0 integer.

activeOffsetX(value: number | number[])#

Range along X axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

activeOffsetY(value: number | number[])#

Range along Y axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

failOffsetY(value: number | number[])#minDistance(value: number)#

Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

minPointers(value: number)#

A number of fingers that is required to be placed before gesture can activate. Should be a higher or equal to 0 integer.

maxPointers(value: number)#

When the given number of fingers is placed on the screen and gesture hasn't yet activated it will fail recognizing the gesture. Should be a higher or equal to 0 integer.

activeOffsetX(value: number | number[])#

Range along X axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

activeOffsetY(value: number | number[])#

Range along Y axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

failOffsetY(value: number | number[])#minDistance(value: number)#

Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

minPointers(value: number)#

A number of fingers that is required to be placed before gesture can activate. Should be a higher or equal to 0 integer.

maxPointers(value: number)#

When the given number of fingers is placed on the screen and gesture hasn't yet activated it will fail recognizing the gesture. Should be a higher or equal to 0 integer.

activeOffsetX(value: number | number[])#

Range along X axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

activeOffsetY(value: number | number[])#

Range along Y axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

failOffsetY(value: number | number[])#minDistance(value: number)#

Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

minPointers(value: number)#

A number of fingers that is required to be placed before gesture can activate. Should be a higher or equal to 0 integer.

maxPointers(value: number)#

When the given number of fingers is placed on the screen and gesture hasn't yet activated it will fail recognizing the gesture. Should be a higher or equal to 0 integer.

activeOffsetX(value: number | number[])#

Range along X axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

activeOffsetY(value: number | number[])#

Range along Y axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

failOffsetY(value: number | number[])#minDistance(value: number)#

Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

minPointers(value: number)#

A number of fingers that is required to be placed before gesture can activate. Should be a higher or equal to 0 integer.

maxPointers(value: number)#

When the given number of fingers is placed on the screen and gesture hasn't yet activated it will fail recognizing the gesture. Should be a higher or equal to 0 integer.

activeOffsetX(value: number | number[])#

Range along X axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

activeOffsetY(value: number | number[])#

Range along Y axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

failOffsetY(value: number | number[])#minDistance(value: number)#

Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

minPointers(value: number)#

A number of fingers that is required to be placed before gesture can activate. Should be a higher or equal to 0 integer.

maxPointers(value: number)#

When the given number of fingers is placed on the screen and gesture hasn't yet activated it will fail recognizing the gesture. Should be a higher or equal to 0 integer.

activeOffsetX(value: number | number[])#

Range along X axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

activeOffsetY(value: number | number[])#

Range along Y axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

failOffsetY(value: number | number[])#
          </InfoText>
        </ScrollContainer>

        <Footer
          pointerEvents="box-none"
        >

            <Animated.View style={[styles.radiusBox, boxRadiusAnimatedStyle, translateYAnimatedStyle]}>
              <GestureDetector gesture={panGesture}>
                <HandleSwipeBox>
                    <Line />
                </HandleSwipeBox>
              </GestureDetector>
              <ScrollSwipeBox scrollEnabled={scrollEnabled} onTouchStart={handleUpdateScroll}>
                <Button 
                  title="proxima pagina"
                  onPress={() => {
                    navigate('tela2')
                  }}
                />
                <InfoText>  
        minDistance(value: number)#

        Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

  minPointers(value: number)#

  A number of fingers that is required to be placed before gesture can activate. Should be a higher or equal to 0 integer.

  maxPointers(value: number)#

  When the given number of fingers is placed on the screen and gesture hasn't yet activated it will fail recognizing the gesture. Should be a higher or equal to 0 integer.

  activeOffsetX(value: number | number[])#

  Range along X axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

  activeOffsetY(value: number | number[])#

  Range along Y axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

  failOffsetY(value: number | number[])#minDistance(value: number)#

  Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

  minPointers(value: number)#

  A number of fingers that is required to be pl
  Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

  minPointers(value: number)#

  A number of fingers that is required to be placed before gesture can activate. Should be a higher or equal to 0 integer.

  maxPointers(value: number)#

  When the given number of fingers is placed on the screen and gesture hasn't yet activated it will fail recognizing the gesture. Should be a higher or equal to 0 integer.

  activeOffsetX(value: number | number[])#

  Range along X axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

  activeOffsetY(value: number | number[])#

  Range along Y axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

  failOffsetY(value: number | number[])#minDistance(value: number)#

  Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

  minPointers(value: number)#

  A number of fingers that is required to be pl
  Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

  minPointers(value: number)#

  A number of fingers that is required to be placed before gesture can activate. Should be a higher or equal to 0 integer.

  maxPointers(value: number)#

  When the given number of fingers is placed on the screen and gesture hasn't yet activated it will fail recognizing the gesture. Should be a higher or equal to 0 integer.

  activeOffsetX(value: number | number[])#

  Range along X axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

  activeOffsetY(value: number | number[])#

  Range along Y axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

  failOffsetY(value: number | number[])#minDistance(value: number)#

  Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

  minPointers(value: number)#

  A number of fingers that is required to be pl
  Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

  minPointers(value: number)#

  A number of fingers that is required to be placed before gesture can activate. Should be a higher or equal to 0 integer.

  maxPointers(value: number)#

  When the given number of fingers is placed on the screen and gesture hasn't yet activated it will fail recognizing the gesture. Should be a higher or equal to 0 integer.

  activeOffsetX(value: number | number[])#

  Range along X axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

  activeOffsetY(value: number | number[])#

  Range along Y axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

  failOffsetY(value: number | number[])#minDistance(value: number)#

  Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

  minPointers(value: number)#

  A number of fingers that is required to be pl
  Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

  minPointers(value: number)#

  A number of fingers that is required to be placed before gesture can activate. Should be a higher or equal to 0 integer.

  maxPointers(value: number)#

  When the given number of fingers is placed on the screen and gesture hasn't yet activated it will fail recognizing the gesture. Should be a higher or equal to 0 integer.

  activeOffsetX(value: number | number[])#

  Range along X axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

  activeOffsetY(value: number | number[])#

  Range along Y axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

  failOffsetY(value: number | number[])#minDistance(value: number)#

  Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

  minPointers(value: number)#

  A number of fingers that is required to be placed before gesture can activate. Should be a higher or equal to 0 integer.

  maxPointers(value: number)#

  When the given number of fingers is placed on the screen and gesture hasn't yet activated it will fail recognizing the gesture. Should be a higher or equal to 0 integer.

  activeOffsetX(value: number | number[])#

  Range along X axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

  activeOffsetY(value: number | number[])#

  Range along Y axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

  failOffsetY(value: number | number[])#minDistance(value: number)#

  Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

  minPointers(value: number)#

  A number of fingers that is required to be placed before gesture can activate. Should be a higher or equal to 0 integer.

  maxPointers(value: number)#

  When the given number of fingers is placed on the screen and gesture hasn't yet activated it will fail recognizing the gesture. Should be a higher or equal to 0 integer.

  activeOffsetX(value: number | number[])#

  Range along X axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

  activeOffsetY(value: number | number[])#

  Range along Y axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

  failOffsetY(value: number | number[])#minDistance(value: number)#

  Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

  minPointers(value: number)#

  A number of fingers that is required to be placed before gesture can activate. Should be a higher or equal to 0 integer.

  maxPointers(value: number)#

  When the given number of fingers is placed on the screen and gesture hasn't yet activated it will fail recognizing the gesture. Should be a higher or equal to 0 integer.

  activeOffsetX(value: number | number[])#

  Range along X axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

  activeOffsetY(value: number | number[])#

  Range along Y axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

  failOffsetY(value: number | number[])#minDistance(value: number)#

  Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

  minPointers(value: number)#

  A number of fingers that is required to be placed before gesture can activate. Should be a higher or equal to 0 integer.

  maxPointers(value: number)#

  When the given number of fingers is placed on the screen and gesture hasn't yet activated it will fail recognizing the gesture. Should be a higher or equal to 0 integer.

  activeOffsetX(value: number | number[])#

  Range along X axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

  activeOffsetY(value: number | number[])#

  Range along Y axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

  failOffsetY(value: number | number[])#minDistance(value: number)#

  Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

  minPointers(value: number)#

  A number of fingers that is required to be placed before gesture can activate. Should be a higher or equal to 0 integer.

  maxPointers(value: number)#

  When the given number of fingers is placed on the screen and gesture hasn't yet activated it will fail recognizing the gesture. Should be a higher or equal to 0 integer.

  activeOffsetX(value: number | number[])#

  Range along X axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

  activeOffsetY(value: number | number[])#

  Range along Y axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

  failOffsetY(value: number | number[])#minDistance(value: number)#

  Minimum distance the finger (or multiple finger) need to travel before the gesture activates. Expressed in points.

  minPointers(value: number)#

  A number of fingers that is required to be placed before gesture can activate. Should be a higher or equal to 0 integer.

  maxPointers(value: number)#

  When the given number of fingers is placed on the screen and gesture hasn't yet activated it will fail recognizing the gesture. Should be a higher or equal to 0 integer.

  activeOffsetX(value: number | number[])#

  Range along X axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

  activeOffsetY(value: number | number[])#

  Range along Y axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number. If range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0. If only one number p is given a range of (-inf, p) will be used if p is higher or equal to 0 and (-p, inf) otherwise.

  failOffsetY(value: number | number[])#
                </InfoText>
              </ScrollSwipeBox>
            </Animated.View>

        </Footer>
      </Container>
    </>
  )
}

const styles = StyleSheet.create({
  radiusBox: {
    backgroundColor: '#ebb63c',
    height,
    width,
    overflow: 'hidden'
  }
})