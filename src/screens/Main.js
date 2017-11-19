import React from 'react';
import { StyleSheet,Alert,Image, Button,FlatList,Text, View } from 'react-native';
export default class Main extends React.Component {
  constructor(props){
  super(props); 
  this.state={}
  }
  
  _onPress=()=>{
    // Alert.alert("hihi")
          console.log(this.props)
          this.props.navigation.navigate('About')
  }
  render() {
    return (
      <View style={{ backgroundColor:'white', flex: 1 , justifyContent:'flex-start',alignItems:'center'}}>
        
        <View style={{ flex: 1/4, flexDirection: 'row' }}>
            <Image  style={{width:"100%" , height:"100%" , resizeMode:"center"}}source={require('../assets/snap_logo.png')}/>
        </View>
        <FlatList
        data={[{key: 'a'}, {key: 'b'}]}
        renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .33,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTow: {
    flex: .33,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
