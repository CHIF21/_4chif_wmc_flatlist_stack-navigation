import React from 'react';
import {IPost} from "../interfaces/post.interface";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

interface IPostItemProps {
    item: IPost;
    navigation: any;
}

function PostItem({item, navigation} : IPostItemProps) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Details')} style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.body}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f5",
        borderStyle: "solid",
        borderColor: "#000",
        borderWidth: 1,
        padding: 10,
        margin: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    }
})

export default PostItem;