import React from "react";
import Link from "next/link";

import Layout from "../../components/Layout";
import Button from "../../components/Button";
import CheckoutItem from "../../components/CheckoutItem";
import Totals from "../../components/Totals";
import UnidaysDiscountChallenge from "../../lib/UnidaysDiscountChallenge";

import items from "../../lib/items";

const Page = () => (
  <Layout>
    {/*Callback function so that I can access the UnidaysDiscountChallenge
    components methods throughout its contents*/}
    <UnidaysDiscountChallenge items={items}>
      {({
        addToBasket,
        myItems,
        calculateTotalBeforeDiscount,
        calculateDiscount,
        deliveryFee,
        calculateTotalPrice,
      }) => {
        //When the basket is empty it will tell the user their basket is empty
        if (calculateTotalPrice() === 0) {
          return (
            <>
              <Link href="/">
                <a>
                  <Button>Continue shopping</Button>
                </a>
              </Link>
              <div className="inner-container">
                <h2
                  css={`
                    margin-top: 10px;
                    font-weight: 300;
                  `}
                >
                  Your basket is empty
                </h2>
              </div>
            </>
          );
        }
        return (
          <>
            <Link href="/">
              <a>
                <Button>Continue shopping</Button>
              </a>
            </Link>

            <div className="inner-container">
              <h2
                css={`
                  margin-top: 0;
                  font-weight: 300;
                `}
              >
                Your items
              </h2>

              {/*If it is running in the browser it will loops through all of
                the myItems variable and creates a CheckoutItem component for each
                passing down the methods required as props*/}
              <div>
                {process.browser &&
                  myItems.map((item) => (
                    <CheckoutItem
                      item={item}
                      addToBasket={addToBasket}
                      allItems={items}
                      key={item.product}
                    />
                  ))}
              </div>

              <Totals>
                <span>
                  <p>Subtotal</p>
                  <p>£{calculateTotalBeforeDiscount()}</p>
                </span>

                <span>
                  <p>You saved</p>
                  <p>£{calculateDiscount() * -1}</p>
                </span>

                <span>
                  <p>Delivery fee</p>
                  <p>£{deliveryFee()}</p>
                </span>

                <span className="total">
                  <p>Total to pay</p>
                  <p>£{calculateTotalPrice()}</p>
                </span>
              </Totals>
            </div>
          </>
        );
      }}
    </UnidaysDiscountChallenge>
  </Layout>
);

export default Page;
