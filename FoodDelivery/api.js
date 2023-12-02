import sanityClient from './sanity';
let sanityQuery = (query, params)=> sanityClient.fetch(query, params);

export const getFeaturedRestaurants = async(selectedLocation)=>{
    console.log("rahul3", selectedLocation);
    const currentLocation = { "lat": selectedLocation.latitude, "lng": selectedLocation.longitude, "alt": selectedLocation.altitude }; 
    
    const result = await sanityQuery(`
    *[_type == 'featured'] {
        ...,
        restaurants[]->{
        ...,
        "distance": geo::distance(location, $currentLocation),
        type->{
            name
        },
        dishes[]->
        }
    }
    `, { currentLocation });


    const filteredResult = result.map(featuredItem => {
        const filteredRestaurants = featuredItem.restaurants.filter(restaurant => {
            return restaurant.distance <= 16093.4; // Assuming a 10 miles radius for proximity
        });

        return { ...featuredItem, restaurants: filteredRestaurants };
    });

    return filteredResult;
}

export const getCategories = ()=>{
    return sanityQuery(`
        *[_type == 'category']
    `);
}

export const getFeaturedRestaurantById = id=>{
    return sanityQuery(`
        *[_type == 'featured' && _id == $id] {
            ...,
            restaurants[]->{
                ...,
                dishes[]->,
                type->{
                    name
                }
            }
        }[0]
    `, {id})
}

export const generateUniqueKey = () => {
    // Generate a timestamp and add some random characters to make it unique
    const timestamp = new Date().getTime();
    const randomChars = Math.random().toString(36).substring(2, 4); // You can adjust the length of random characters
  
    return `${timestamp}${randomChars}`;
  };

export const saveOrders = async(restaurantName, itemsArr) => {

    try {
        const orderData = {
          restaurantName: restaurantName,
          items: [...itemsArr],
        };
        await sanityClient.create({ _type: 'orders', _key: generateUniqueKey(), ...orderData });
        console.log({ _type: 'orders', _key: generateUniqueKey(), ...orderData })
        console.log('Order successfully created!');
      } catch (error) {
        console.error('Error creating order:', error);
      }
}

