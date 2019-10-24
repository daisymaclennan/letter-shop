import React from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Button from '../../components/Button'
import CheckoutItem from '../../components/CheckoutItem'
import Totals from '../../components/Totals'

import items from '../../lib/items'
import UnidaysDiscountChallenge from '../../lib/UnidaysDiscountChallenge'

const Page = ({ directory }) => {
  const basket = new UnidaysDiscountChallenge(items)

  const myItems = basket.getItems()
  console.log("My items:", myItems)
  return(
    <Layout>
      <Link href="/">
        <a>
          <Button>
            Continue shopping
          </Button>
        </a>
      </Link>

      <div>
        <h2>Your items</h2>

        {process.browser && myItems.map(item => (
          <CheckoutItem item={item} basket={basket} allItems={items} key={item.product}/>
        ))}

        <Totals>
          <span>
            <p>Subtotal</p>
            <p>£{basket.calculateSubTotal()}</p>
          </span>

          <span>
            <p>You saved</p>
            <p>£{basket.calculateDiscount() * -1}</p>
          </span>

          <span>
            <p>Delivery fee</p>
            <p>£{basket.deliveryFee()}</p>
          </span>
        </Totals>

      </div>
    </Layout>
  )}

export default Page
