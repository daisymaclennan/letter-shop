//An array containing the items from the site

/*The style key contains an object showing a colour and accent colour for each
of the items, this isn't required for the program to work but make it look nicer*/

/*The deal key defines how many items are required for each items to be eligible
for a deal and the discount that should be applied per eligible item*/
const items = [
  {
    product: 'Aa',
    price: 8.00,
    style: {
        color: 'rgba(225, 253, 73, 0.41)',
        accentColor: '#6C7922',
      },
    deal: {
      items_required: 0,
      discount: 0
    }
  },
  {
    product: 'Bb',
    price: 12.00,
    style: {
      color: 'rgba(29, 213, 118, 0.18)',
      accentColor: '#115E36',
    },
    deal: {
      items_required: 2,
      discount: -4
      }
  },
  {
    product: 'Cc',
    price: 4.00,
    style: {
      color: 'rgba(0, 188, 210, 0.1)',
      accentColor: '#004048',
    },
    deal: {
      items_required: 3,
      discount: -2
      }
  },
  {
    product: 'Dd',
    price: 7.00,
    style: {
      color: 'rgba(225, 253, 73, 0.42)',
      accentColor: '#6C7922',
    },
    deal: {
      items_required: 2,
      discount: -7
    }
  },
  {
    product: 'Ee',
    price: 5.00,
    style: {
      color: 'rgba(0, 188, 210, 0.1)',
      accentColor: '#004048',
    },
    deal: {
      items_required: 3,
      discount: -5
    }
  },
]

export default items
