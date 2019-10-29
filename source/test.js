import React from 'react'
import render from 'riteway/render-component'
import {describe} from 'riteway'
import UnidaysDiscountChallenge from '../lib/UnidaysDiscountChallenge-alt'

//Here I have created a testing component
const testingEnvironment = (myItems, method) => {
  const basket = new UnidaysDiscountChallenge()
  //Loop through the test case items and add each one to the basket
  myItems.map(item => {
    basket.addToBasket(item)
  })
  if(method === "deliveryFee"){
    return basket.deliveryFee()
  }else if(method === "total"){
    return basket.calculateTotalWithoutDelivery()
  }
}

describe('calculate costs', async assert => {
  //Test case 1
  {
    const items = []

    assert({
      given: 'an empty array',
      should: 'return the correct total excluding delivery',
      actual: testingEnvironment(items, "total"),
      expected: 0
    })

    assert({
      given: 'an empty array',
      should: 'return the correct delivery fee',
      actual: testingEnvironment(items, "deliveryFee"),
      expected: 0
    })
  }

  //Test case 2
  {
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
      }
    ]

    assert({
      given: 'A',
      should: 'return the correct total excluding delivery',
      actual: testingEnvironment(items, "total"),
      expected: 8
    })

    assert({
      given: 'A',
      should: 'return the correct delivery fee',
      actual: testingEnvironment(items, "deliveryFee"),
      expected: 7
    })
  }

  //Test case 3
  {
    const items = [
      {
        product: 'Bb',
        price: 12.00,
        style: {
          color: 'rgba(29, 213, 118, 0.18)',
          accentColor: '#115E36',
        },
        deal: {
          items_required: 2,
          discount: -8
          }
      }
    ]

    assert({
      given: 'B',
      should: 'return the correct total excluding delivery',
      actual: testingEnvironment(items, "total"),
      expected: 12
    })

    assert({
      given: 'B',
      should: 'return the correct delivery fee',
      actual: testingEnvironment(items, "deliveryFee"),
      expected: 7
    })
  }

  //Test case 4
  {
    const items = [
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
      }
    ]

    assert({
      given: 'C',
      should: 'return the correct total excluding delivery',
      actual: testingEnvironment(items, "total"),
      expected: 4
    })

    assert({
      given: 'C',
      should: 'return the correct delivery fee',
      actual: testingEnvironment(items, "deliveryFee"),
      expected: 7
    })
  }
  //Test case 5
  {
    const items = [
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
      }
    ]

    assert({
      given: 'D',
      should: 'return the correct total excluding delivery',
      actual: testingEnvironment(items, "total"),
      expected: 7
    })

    assert({
      given: 'D',
      should: 'return the correct delivery fee',
      actual: testingEnvironment(items, "deliveryFee"),
      expected: 7
    })
  }
  //Test case 6
  {
    const items = [
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
      }
    ]

    assert({
      given: 'E',
      should: 'return the correct total excluding delivery',
      actual: testingEnvironment(items, "total"),
      expected: 5
    })

    assert({
      given: 'E',
      should: 'return the correct delivery fee',
      actual: testingEnvironment(items, "deliveryFee"),
      expected: 7
    })
  }
  //Test case 7
  {
    const items = [
      {
        product: 'Bb',
        price: 12.00,
        style: {
          color: 'rgba(29, 213, 118, 0.18)',
          accentColor: '#115E36',
        },
        deal: {
          items_required: 2,
          discount: -8
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
          discount: -8
          }
      }
    ]

    assert({
      given: 'BB',
      should: 'return the correct total excluding delivery',
      actual: testingEnvironment(items, "total"),
      expected: 20
    })

    assert({
      given: 'BB',
      should: 'return the correct delivery fee',
      actual: testingEnvironment(items, "deliveryFee"),
      expected: 7
    })
  }
  //Test case 8
  {
    const items = [
      {
        product: 'Bb',
        price: 12.00,
        style: {
          color: 'rgba(29, 213, 118, 0.18)',
          accentColor: '#115E36',
        },
        deal: {
          items_required: 2,
          discount: -8
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
          discount: -8
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
          discount: -8
          }
      }
    ]

    assert({
      given: 'BBB',
      should: 'return the correct total excluding delivery',
      actual: testingEnvironment(items, "total"),
      expected: 32
    })

    assert({
      given: 'BBB',
      should: 'return the correct delivery fee',
      actual: testingEnvironment(items, "deliveryFee"),
      expected: 7
    })
  }
  //Test case 9
  {
    const items = [
      {
        product: 'Bb',
        price: 12.00,
        style: {
          color: 'rgba(29, 213, 118, 0.18)',
          accentColor: '#115E36',
        },
        deal: {
          items_required: 2,
          discount: -8
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
          discount: -8
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
          discount: -8
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
          discount: -8
          }
      }
    ]

    assert({
      given: 'BBBB',
      should: 'return the correct total excluding delivery',
      actual: testingEnvironment(items, "total"),
      expected: 40
    })

    assert({
      given: 'BBBB',
      should: 'return the correct delivery fee',
      actual: testingEnvironment(items, "deliveryFee"),
      expected: 7
    })
  }
  //Test case 10
  {
    const items = [
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
    ]

    assert({
      given: 'CCC',
      should: 'return the correct total excluding delivery',
      actual: testingEnvironment(items, "total"),
      expected: 10
    })

    assert({
      given: 'CCC',
      should: 'return the correct delivery fee',
      actual: testingEnvironment(items, "deliveryFee"),
      expected: 7
    })
  }
  //Test case 11
  {
    const items = [
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
    ]

    assert({
      given: 'CCCC',
      should: 'return the correct total excluding delivery',
      actual: testingEnvironment(items, "total"),
      expected: 14
    })

    assert({
      given: 'CCCC',
      should: 'return the correct delivery fee',
      actual: testingEnvironment(items, "deliveryFee"),
      expected: 7
    })
  }
  //Test case 12
  {
    const items = [
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
    ]

    assert({
      given: 'DD',
      should: 'return the correct total excluding delivery',
      actual: testingEnvironment(items, "total"),
      expected: 7
    })

    assert({
      given: 'DD',
      should: 'return the correct delivery fee',
      actual: testingEnvironment(items, "deliveryFee"),
      expected: 7
    })
  }
  //Test case 13
  {
    const items = [
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
    ]

    assert({
      given: 'DDD',
      should: 'return the correct total excluding delivery',
      actual: testingEnvironment(items, "total"),
      expected: 14
    })

    assert({
      given: 'DDD',
      should: 'return the correct delivery fee',
      actual: testingEnvironment(items, "deliveryFee"),
      expected: 7
    })
  }
  //Test case 14
  {
    const items = [
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

    assert({
      given: 'EE',
      should: 'return the correct total excluding delivery',
      actual: testingEnvironment(items, "total"),
      expected: 10
    })

    assert({
      given: 'EE',
      should: 'return the correct delivery fee',
      actual: testingEnvironment(items, "deliveryFee"),
      expected: 7
    })
  }
  //Test case 15
  {
    const items = [
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

    assert({
      given: 'EEE',
      should: 'return the correct total excluding delivery',
      actual: testingEnvironment(items, "total"),
      expected: 10
    })

    assert({
      given: 'EEE',
      should: 'return the correct delivery fee',
      actual: testingEnvironment(items, "deliveryFee"),
      expected: 7
    })
  }
  //Test case 16
  {
    const items = [
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

    assert({
      given: 'EEEE',
      should: 'return the correct total excluding delivery',
      actual: testingEnvironment(items, "total"),
      expected: 15
    })

    assert({
      given: 'EEEE',
      should: 'return the correct delivery fee',
      actual: testingEnvironment(items, "deliveryFee"),
      expected: 7
    })
  }
  //Test case 17
  {
    const items = [
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
      }
    ]

    assert({
      given: 'DDDDDDDDDDDDDD',
      should: 'return the correct total excluding delivery',
      actual: testingEnvironment(items, "total"),
      expected: 49
    })

    assert({
      given: 'DDDDDDDDDDDDDD',
      should: 'return the correct delivery fee',
      actual: testingEnvironment(items, "deliveryFee"),
      expected: 7
    })
  }
  //Test case 18
  {
    const items = [
      {
        product: 'Bb',
        price: 12.00,
        style: {
          color: 'rgba(29, 213, 118, 0.18)',
          accentColor: '#115E36',
        },
        deal: {
          items_required: 2,
          discount: -8
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
          discount: -8
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
          discount: -8
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
          discount: -8
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
    ]

    assert({
      given: 'BBBBCCC',
      should: 'return the correct total excluding delivery',
      actual: testingEnvironment(items, "total"),
      expected: 50
    })

    assert({
      given: 'BBBBCCC',
      should: 'return the correct delivery fee',
      actual: testingEnvironment(items, "deliveryFee"),
      expected: 0
    })
  }
  //Test case 19
  {
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
          discount: -8
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
          discount: -8
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

    assert({
      given: 'ABBCCCDDEE',
      should: 'return the correct total excluding delivery',
      actual: testingEnvironment(items, "total"),
      expected: 55
    })

    assert({
      given: 'ABBCCCDDEE',
      should: 'return the correct delivery fee',
      actual: testingEnvironment(items, "deliveryFee"),
      expected: 0
    })
  }
  //Test case 20
  {
    const items = [
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
        product: 'Bb',
        price: 12.00,
        style: {
          color: 'rgba(29, 213, 118, 0.18)',
          accentColor: '#115E36',
        },
        deal: {
          items_required: 2,
          discount: -8
          }
      },
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
        product: 'Bb',
        price: 12.00,
        style: {
          color: 'rgba(29, 213, 118, 0.18)',
          accentColor: '#115E36',
        },
        deal: {
          items_required: 2,
          discount: -8
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
    ]

    assert({
      given: 'EDCBAEDCBC',
      should: 'return the correct total excluding delivery',
      actual: testingEnvironment(items, "total"),
      expected: 55
    })

    assert({
      given: 'EDCBAEDCBC',
      should: 'return the correct delivery fee',
      actual: testingEnvironment(items, "deliveryFee"),
      expected: 0
    })
  }


})
