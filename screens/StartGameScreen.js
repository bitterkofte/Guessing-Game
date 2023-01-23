import { StyleSheet, View, TextInput, Pressable, Text } from "react-native";

import FancyButton from "../components/FancyButton";

function StartGameScreen() {
    return(
        <View style={styles.startContainer}>
            <Text style={styles.text} >Guess A Number</Text>
            <TextInput style={styles.input} maxLength={2} keyboardType={"number-pad"} />
            <View style={styles.buttons}>
                <FancyButton title="plus" color="#42b867" />
                <FancyButton title="minus" color="#e86101" />
            </View>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    startContainer: {
        // flex: 1,
        marginTop: 30,
        marginHorizontal: 24,
        borderRadius: 20,
        padding: 16,
        backgroundColor: '#212121',
        elevation: 20, //shadow for android
        alignItems: 'center',
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
        fontSize: 30,
        borderColor: '#0061fd',
        backgroundColor: '#323232',
        width: '20%',
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