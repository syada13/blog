import React,{useState,useContext} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import { Context as BlogContext} from '../context/BlogContext'


const EditScreen = ({ navigation }) => {

    const { state} = useContext(BlogContext);

    const blogPost = state.find(
        blogPost => blogPost.id === navigation.getParam('id')
    );

   const [title,setTitle] = useState(blogPost.title);
   const [content,setContent] = useState(blogPost.content);


    return (
        <View>
            <Text>Enter New Title:</Text>
            <TextInput value={title} onChangeText= {(newTitleText) => setTitle(newTitleText)}/>
        </View>
    );

};


const styles = StyleSheet.create({});

export default EditScreen;

