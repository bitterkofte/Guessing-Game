import { View, Text, Pressable, StyleSheet } from 'react-native';

function FancyButton({title, color}) {
    function press(){
        console.log('pressed');
    }
    // const addColor = (style, color) =>{
    //     return {
    //         ...style,
    //         backgroundColor: color || "black"
    //     }
    // }
    return (
        <View style={[styles.outer, {backgroundColor: color || '#0041ba'}]} >
            <Pressable style={styles.inner} onPress={press} android_ripple={{color: "#d4ff00"}} >
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
        overflow: 'hidden',
    }, 

    text: {
        fontSize: 20,
        color: "#ffffff",
    }
});