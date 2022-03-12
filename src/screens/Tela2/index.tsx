import { useState } from 'react';
import {
  Container,
  Task,
  TaskName,
  Input
} from './styles';
import uuid from 'react-native-uuid';
import Animated, { 
  FadeInRight,
  FadeOutLeft,
  LayoutAnimation,
  Layout
} from 'react-native-reanimated';
import { Button, Pressable } from 'react-native';
export function Tela2() {
  const [ list, setList ] = useState([ 'ana', 'bruna', 'carlos', 'daniel', 'erick', 'felipe' ]);
  const [ valor, setValor ] = useState(0); 

  function handleAddTask() {
    const NEW_VALUE = String(uuid.v4());
    let NEW_LIST_ADDED = [...list];
    NEW_LIST_ADDED.splice(valor, 0, NEW_VALUE);

    setList(NEW_LIST_ADDED);
  }

  function handlePopTask() {
    let newValue = [...list].splice(0, list.length -1);
    setList(newValue);
  }

  return (
      <Container>
        <Input value={String(valor)} onChangeText={(text) => setValor(Number(text))} keyboardType="numeric"/>
        <Button 
            title="add item" 
            onPress={handleAddTask}
        />
          <Button 
            title="delete item" 
            onPress={handlePopTask}
        />
        {
          list.map((item, index) => (
            <Animated.View
              key={item}
              layout={Layout}
              entering={FadeInRight.delay(90 * index)}
              exiting={FadeOutLeft}
            >
              <Pressable>
                <Task>
                  <TaskName>{item}</TaskName>
                </Task>
              </Pressable>  
            </Animated.View>
          ))
        }

      </Container>
  )
}








