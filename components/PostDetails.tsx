import React from 'react';
import {View, Text, TouchableOpacity} from "react-native";

function PostDetails({navigation}: {navigation: any}) {
    return (
        <View>
            <Text>Willkommen bei den Details!</Text>
            <TouchableOpacity onPress={() => navigation.pop()}>
                <Text>Zurück</Text>
            </TouchableOpacity>
        </View>
    );
}

export default PostDetails;