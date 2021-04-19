import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default class HomeScreen extends React.Component {
    constructor(){
        super()
        this.state = {movieDetails: {}} 
    }
    getMovie = ()=>{
        const url = "http://localhost:5000/get-movie"
        axios.get(url).then(responce =>{
           var details = responce.data.data
           this.setState({movieDetails: details})
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    componentDidMount(){
        this.getMovie() 
    }
  render(){
    return (
      <View style={styles.container}>
        <View>
            <Text>Movies</Text>
        </View>
      </View>
    );
  }
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
