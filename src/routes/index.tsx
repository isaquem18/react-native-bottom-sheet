import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Tela2 } from '../screens/Tela2';
import { Tela3 } from '../screens/Tela3';
import { Tela4 } from '../screens/Tela4';
import { Tela5 } from '../screens/Tela5';
import { Tela6 } from '../screens/Tela6';
import { Tela7 } from '../screens/Tela7';

export function Routes() {
  const { 
    Navigator,
    Screen
  } = createNativeStackNavigator();
  return (
    <Navigator>
      {/* <Screen name="home" component={Home} options={{
        headerShown: false
      }} />
      <Screen name="tela2" component={Tela2} />
      <Screen name="Tela3" component={Tela3} />
      <Screen name="Tela4" component={Tela4} />
      <Screen name="Tela5" component={Tela5} />
      <Screen name="Tela6" component={Tela6} options={{
        headerShown: false
      }}/>*/} 
       <Screen name="Tela7" component={Tela7} options={{
        headerShown: false
      }}/>
    </Navigator>
  )
}