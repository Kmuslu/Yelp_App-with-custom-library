import React from "react";
import { SafeAreaView, View, Text,Image} from "react-native"
import cityData from "./city.json";

const First = (props) => {
    console.log(props)
    const place = props.route.params.val.image

    // function renderItem({ item }) {
    //     return (
    //         <TouchableOpacity>
        
    //                 <Image style={{ width: '70%', height: '70%', alignSelf: 'center' }} resizeMode='contain' source={{ uri: item.image }}></Image>
            
    //             <Text
    //                 style={{ flex: 1.0, textAlign: 'center', marginLeft: 4, marginRight: 4 }}>
    //                 {item.text}
    //                 </Text>

    //         </TouchableOpacity>
    //     )
    // }

    return (
        <SafeAreaView>
            <View>
               {/* <FlatList
                    data={}
                    renderItem={({ item }) => renderItem(item)}
                /> */}
                <Image source = {{uri: place}}/>
            </View>

        </SafeAreaView>
    )
}

export default First;