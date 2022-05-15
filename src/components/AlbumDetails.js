import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const AlbumDetail = (props) => {
  const {title, album_number, cover } = props.album;
  return (
    <View style={styles.cardContainerStyle}>
     
        <Image
          style={styles.coverStyle}
          source={{
            uri: cover
          }}
        />
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.textStyle}>{album_number}</Text>


       
    </View>
  );
}

const styles = StyleSheet.create({
  
  cardContainerStyle: {

    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
 
  coverStyle: {
      
    height: 350,
    width:350,
    borderRadius:25,
    borderWidth: 1.5,
    borderColor: "#FFF",
    marginTop:40,
    marginBottom:20,

  },
    titleStyle: {
      
    fontSize:24,
    fontWeight:"600",
    color:"#fff",

  },
    textStyle: {
    fontSize:16,
    color:"#fff",
    marginTop:5,
    marginBottom:30,

  }

});

export default AlbumDetail;