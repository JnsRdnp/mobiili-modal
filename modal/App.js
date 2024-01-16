import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';

export default function App() {
  const [modalOn, setModalOn] = useState(false)

  const toggleModalOnOff = () => {
    setModalOn(!modalOn)
  }

  return (
    <View style={styles.container}>

      {modalOn ? (
      
      <View style={styles.centeredView}>
          <Modal
              animationType='slide'>
              <View style={styles.modalView}>
              <Text>This is modal!</Text>
              <Pressable onPress={()=> setModalOn(false)}>
                <Text>cancel</Text>
              </Pressable>
              </View>
          </Modal>
      </View>
      )
      :
      (
        <Pressable onPress={()=>setModalOn(true)}>
          <Text>Show modal message</Text>
        </Pressable>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  modalView: {
    backgroundColor:'red',
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    height:'1%',
    height: 'auto',
    width: 'auto'

  }
  ,
  centeredView: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'10%',
    height: 'auto',
    width: 'auto'
    
  }

});
