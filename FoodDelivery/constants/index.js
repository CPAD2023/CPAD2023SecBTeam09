export const categories = [
    {
        id: 1,
        name: 'Pizza',
        image: require('../assets/images/pizza.png'),
    },
    {
        id: 2,
        name: 'Burger',
        image: require('../assets/images/hamburger.png'),
    },
    {
        id: 3,
        name: 'Italian',
        image: require('../assets/images/tropical-fish.png'),
    },
    {
        id: 4,
        name: 'Chinese',
        image: require('../assets/images/takeout-box.png'),
    },
    {
        id: 5,
        name: 'Noodles',
        image: require('../assets/images/spaghetti.png'),
    },
    {
        id: 6,
        name: 'Sweets',
        image: require('../assets/images/cupcake-emoji.png'),
    },

]

export const featured = {
    id: 1,
    title: 'Hot and Spicy',
    description: 'soft and tender fried chicken',
    restaurants: [
        {
            id: 1,
            name: 'Cafe BERP',
            image: require('../assets/images/papaJohns.jpg'),
            description: 'Hot and spicy food',
            lng: 77.7155193,
            lat: 12.9789875,
            address: 'SAP Labs, BLR',
            stars: 4,
            reviews: '4.5k',
            category: 'Multi cuisine',
            dishes: [
                {
                   id: 1,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image: require('../assets/images/papaJohns.jpg')
                },
                {
                   id: 2,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image: require('../assets/images/papaJohns.jpg')
                },
                {
                   id: 3,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image: require('../assets/images/papaJohns.jpg')
                },
            ]
    
        },
        {
            id: 2,
            name: 'Papa Johns',
            image: require('../assets/images/papaJohns.jpg'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image: require('../assets/images/papaJohns.jpg')
                },
                {
                   id: 2,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image: require('../assets/images/papaJohns.jpg')
                },
                {
                   id: 3,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image: require('../assets/images/papaJohns.jpg')
                },
            ]
    
        },
        {
            id: 3,
            name: 'Papa Johns',
            image: require('../assets/images/papaJohns.jpg'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image: require('../assets/images/papaJohns.jpg')
                },
                {
                   id: 2,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image: require('../assets/images/papaJohns.jpg')
                },
                {
                   id: 3,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image: require('../assets/images/papaJohns.jpg')
                },
            ]
    
        }
    ]
}

const deliveryPartners = [
    "Eleanor Smith",
    "Lucas Johnson",
    "Sophia Anderson",
    "Benjamin Brown",
    "Olivia Davis",
    "Henry Wilson",
    "Charlotte Taylor",
    "Liam Clark",
    "Ava Martinez",
    "Noah Jones"
  ];

export function getDeliveryPartner() {
    return deliveryPartners[(Math.floor(Math.random() * deliveryPartners.length))];
}