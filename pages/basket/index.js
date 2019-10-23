import React from 'react'
import Link from 'next/link'
import Layout from '../../components/layout'
import Button from '../../components/Button'
import CheckoutItem from '../../components/CheckoutItem'

import UnidaysDiscountChallenge from '../../lib/UnidaysDiscountChallenge'

const Page = ({ directory }) => {
  const basket = new UnidaysDiscountChallenge

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

        {myItems.map(item => {
          <CheckoutItem item={item} />
        })}
        
      </div>
    </Layout>
  )}

export default Page
