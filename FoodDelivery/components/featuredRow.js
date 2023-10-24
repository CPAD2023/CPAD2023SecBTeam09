import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import RestaurantCard from './restaurantCard'
import { themeColors } from '../theme'

export default function FeaturedRow({id, title, description, restaurants}) {

  // const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // getFeaturedRestaurantById(id).then(data=>{
    //   // console.log('got data: ',data);
    //   setRestaurants(data?.restaurants);
    // })
  }, [id])
  // console.log(restaurants);
  
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">
            {description}
          </Text>
        </View>
        
        <TouchableOpacity>
          <Text style={{color: themeColors.text}} className="font-semibold">See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:15,
        }}
        className="overflow-visible py-5"
       >
        {
          restaurants.map(restaurant=>{
            return (
                <RestaurantCard
                  key={restaurant.id}
                  id={restaurant.id}
                  imgUrl={restaurant.image}
                  title={restaurant.name}
                  rating={restaurant.rating}
                  type={restaurant.type?.name}
                  address="123 main street"
                  description={restaurant.description}
                  dishes={restaurant.dishes}
                  lng={restaurant.lng}
                  lat={restaurant.lat}

              />    
            )
          })
        }           
       </ScrollView>
    
    </View>
  )
}