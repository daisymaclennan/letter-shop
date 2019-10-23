import React from 'react'
import Layout from '../../components/layout'
import Button from '../../components/Button'
import CheckoutItem from '../../components/CheckoutItem'

import UnidaysDiscountChallenge from '../../lib/UnidaysDiscountChallenge'

const Page = ({ directory }) => {
  const basket = new UnidaysDiscountChallenge()

  if(process.browser){
    const items = JSON.parse(localStorage.getItem('basket'))
  }
  return(
    <Layout>
      <Button>
        Continue shopping
      </Button>

      <div>
        <h2>Your items</h2>

        {items.map(item => {
          <CheckoutItem item={item} />
        })}

      </div>
    </Layout>
  )}

export default Page
