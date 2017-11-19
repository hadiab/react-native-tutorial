import { StackNavigator } from 'react-navigation';
import Main from '../screens/Main'
import About from '../screens/About'
const RootNavigator = StackNavigator({
     Main: {
       screen: Main
       ,navigationOptions:{
         header:null
       }
     },
     About: {
      screen: About
    }
  });


  export default RootNavigator;