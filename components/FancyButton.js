import { View, Text, Pressable, StyleSheet } from 'react-native';

function FancyButton({title, color, isPressed}) {
    function press(){
        console.log('pressed');
    }

    return (
        <View style={[styles.outer, {backgroundColor: color || '#0041ba'}]} >
            <Pressable  style={styles.inner}
                        onPress={isPressed}
                        android_ripple={{color: "#d4ff00"}}>
                <Text style={styles.text}>{title}</Text>
            </Pressable>
        </View>
    )
}

export default FancyButton;

const styles = StyleSheet.create({
    inner: {
        padding: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },

    outer: {
        margin: 4,
        width: 90,
        borderRadius: 28,
        overflow: 'hidden', //clips the effect that overflows the border
    }, 

    text: {
        fontSize: 20,
        color: "#ffffff",
    }
});