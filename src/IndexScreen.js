import React,{ useContext } from 'react';
import {View,Text,StyleSheet,FlatList,Button,TouchableOpacity} from 'react-native';
import { Context } from './context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {
    const {state,addBlogPost,deleteBlogPost} = useContext(Context);
    return (
        <View>
            <Button title="Add Post" onPress={() => addBlogPost()}
            />
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) => {
                    return <View style={styles.row}>
                    <Text style={styles.title}>{item.title}- {item.id}</Text>
                    <TouchableOpacity onPress={ () => deleteBlogPost(item.id)}>
                    <Feather style={styles.icon} name="trash"/>
                    </TouchableOpacity>
                    </View>
                }}
            />
        </View>
    );    
};


const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth:1,
        borderColor: 'gray',
        paddingHorizontal: 10,
        backgroundColor:'green'

    },
    title: {
        fontSize: 12,
        color:'white'


    },
    icon:{
      fontSize: 24,
      color:'black'

    }
});



export default IndexScreen;