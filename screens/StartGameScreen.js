import { useState } from "react";
import { StyleSheet, View, TextInput, Pressable, Text, Alert } from "react-native";

import FancyButton from "../components/FancyButton";

function StartGameScreen() {
    const [ numberInput, setNumberInput ] = useState('');

    function numberHandler(packageText) {
        setNumberInput(packageText);
    }

    function resetInput( ) {
        setNumberInput('');
    }

    function confirmNumber() {
        const writtenNumber = parseInt(numberInput); //Convert string to number

        if(isNaN(writtenNumber) || writtenNumber <= 0 || writtenNumber > 99){
            Alert.alert('Invalid Number',
                        'Number has to be a number between 1 and 99.',
                        [{text: 'Okay', style: 'destructive', onPress: resetInput}])
            return;
        }
        console.log('Valid Number!');
    }

    return(
        <View style={styles.startContainer}>
            <Text style={styles.text} >Guess A Number!</Text>
            <TextInput  style={styles.input} 
                        maxLength={2}
                        keyboardType={"number-pad"}
                        onChangeText={numberHandler}
                        value={numberInput} 
                        autoFocus={false}
                        caretHidden={true}
                        // onPressIn={() => f}
                        // onFocus={ () => setState({borderColor: 'red'}) }
                         />
            <View style={styles.buttons}>
                <FancyButton isPressed={confirmNumber} title="Guess" color="#0cb000" />
                <FancyButton isPressed={resetInput} title="Reset" color="#e82f01" />
            </View>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    startContainer: {
        // flex: 1,
        height: 300,
        marginTop: 30,
        marginHorizontal: 24,
        borderRadius: 20,
        padding: 16,
        backgroundColor: '#212121',
        elevation: 20, //shadow for android
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    text: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#dedede',
        marginBottom: 10,
    },

    input: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 40,
        borderColor: '#0061fd',
        backgroundColor: '#323232',
        width: 100,
        height: 80,
        padding: 8,
        // paddingLeft: 10,
        borderLeftWidth: 3,
        borderRightWidth: 3,
        borderRadius: 15,        
    },

    buttons: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: '#f67979',
        alignSelf:"stretch",
        justifyContent: 'space-evenly',
        // alignItems: 'space-around',
    }
});