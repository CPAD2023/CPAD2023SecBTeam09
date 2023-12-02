import React, { useLayoutEffect, useState, useEffect } from 'react';
import { View, SafeAreaView, StatusBar, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme'
import Categories from '../components/categories';
import { featured } from '../constants';
import FeaturedRow from '../components/featuredRow';
import { auth } from '../firbase';
import { useNavigation } from '@react-navigation/native';
import { getFeaturedRestaurants } from '../api';
import { Picker } from '@react-native-picker/picker';

export default function HomeScreen() {

    const [featuredRestaurants, setFeaturedRestaurants] = useState([])
    const [selectedLocation, setSelectedLocation] = useState(null);

    const locations = [
        { index:0, label: 'SAP Labs', value: 'SAP Labs', latitude: 12.9746, longitude: 77.6153, altitude: 910},
        { index:1, label: 'JP Nagar', value: 'JP Nagar', latitude: 4.567, longitude: 1.345, altitude: 910},
        { index:2, label: 'Hyderabad', value: 'Hyderabad', latitude: 17.3879977, longitude: 78.565194, altitude: 910},
      ];
    
    const navigation = useNavigation();
    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }
    useLayoutEffect(() => {
        navigation.setOptions({headerShown: false})
    }, [])

    useEffect(() => {
        console.log("rahul" ,selectedLocation);
        if (selectedLocation !== null && selectedLocation >= 0 ) {
          getFeaturedRestaurants(locations[selectedLocation]).then(data => {
            console.log(data);
            setFeaturedRestaurants(data);
          });
        }
      }, [selectedLocation]);
    
    const handlePickerChange = (location) => {
        setSelectedLocation(location);
    };

    return (
        <SafeAreaView className="bg-white">
            <StatusBar barStyle="dark-content" />
            {/* Search Bar */}
            <View className="flex-row items-center space-x-2 px-4 pb-2 ">
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                    <Icon.Search height="25" width="25" stroke="gray" />
                    <TextInput placeholder='Restaurants' className="ml-2 flex-1" keyboardType='default' />
                    <View style={{ height: 20}} className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                        <Icon.MapPin height="20" width="20" stroke="gray" />
                        <Picker
                            selectedValue={selectedLocation}
                            style={{ height: 50, width: 110 }}
                            onValueChange={handlePickerChange}
                            >
                            {locations.map((item) => (
                                <Picker.Item key={item.index} label={item.label} value={item.index} />
                            ))}
                        </Picker>
                    </View>
                </View>
                <View style={{ backgroundColor: themeColors.bgColor(1) }} className="p-3 rounded-full">
                    <Icon.Sliders height={20} width={20} strokeWidth="2.5" stroke="white" />
                </View>
                <View>
                <View>
                    <TouchableOpacity onPress={handleSignOut} style={{ backgroundColor: '#14b8a6' }} className="p-3 rounded-full">
                        <Icon.LogOut height={20} width={20} strokeWidth="2.5" stroke="white" />
                    </TouchableOpacity>
                </View>
                </View>
            </View>

            {/* main view*/}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 50
                }}
            >

                {/* categories */}
                <Categories />

                {/* featured */}
                <View className="mt-5">
                    {
                        featuredRestaurants.map((item, index) => {
                            return (
                                <FeaturedRow
                                    key={index}
                                    title={item.name}
                                    description={item.description}
                                    restaurants={item?.restaurants}
                                    featuredCategory={item.type}
                                />
                            )
                        })
                    }
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}