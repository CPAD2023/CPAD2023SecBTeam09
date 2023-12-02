// schema.js
export default {
    name: 'orders',
    title: 'Orders',
    type: 'document',
    fields: [
      {
        name: 'restaurantName',
        title: 'Restaurant Name',
        type: 'string',
      },
      {
        name: 'items',
        title: 'Items Ordered',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'itemName',
                title: 'Item Name',
                type: 'string',
              },
              {
                name: 'quantity',
                title: 'Quantity',
                type: 'number',
              },
            ],
          },
        ],
      },
    ],
  };
  