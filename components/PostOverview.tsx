import React, {useEffect, useState} from 'react';
import {IPost} from "../interfaces/post.interface";
import {PostService} from "../services/PostService";
import {FlatList, View, Text, TouchableOpacity} from "react-native";
import PostItem from "./PostItem";

function PostOverview({navigation}: {navigation: any}) {

    const [posts, setPosts] = useState<IPost[]>([]);
    const [errorMessage, setErrorMessage] = useState("");

    const fetchPosts = async () => {
        try {
            const data = await PostService.getPosts();
            setPosts(data);
        } catch (e) {
            const err = e as Error;
            setErrorMessage(err.message);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <View style={{flex: 1}}>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <PostItem item={item} navigation={navigation} />
                )}
            />
            {errorMessage && <Text>{errorMessage}</Text>}
        </View>
    );
}

export default PostOverview;