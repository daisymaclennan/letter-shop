import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Item from "../components/Item";
import Button from "../components/Button";

import items from "../lib/items";
import UnidaysDiscountChallenge from "../lib/UnidaysDiscountChallenge";

const Page = () => (
  <Layout>
    <UnidaysDiscountChallenge>
      {({ addToBasket }) => (
        <>
          <Link href="/basket">
            <a>
              <Button>Your basket</Button>
            </a>
          </Link>
          <div
            className="inner-container"
            css={`
              @media screen and (max-width: 550px) {
                display: flex;
                flex-wrap: wrap;

                div {
                  margin-right: 30px;
                  margin-bottom: 30px;
                }
              }

              @media screen and (min-width: 551px) {
                padding-bottom: 30px;

                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 1fr 1fr 1fr;
                grid-column-gap: 30px;
                grid-row-gap: 30px;

                .Aa {
                  grid-area: 1 / 1 / 2 / 2;
                }
                .Bb {
                  grid-area: 2 / 1 / 3 / 2;
                }
                .Cc {
                  grid-area: 2 / 2 / 3 / 3;
                }
                .Dd {
                  grid-area: 3 / 2 / 4 / 3;
                }
                .Ee {
                  grid-area: 3 / 3 / 4 / 4;
                }
              }
            `}
          >
            {items.map((item) => (
              <Item
                name={item.product}
                price={item.price}
                color={item.style.color}
                accentColor={item.style.accentColor}
                className={item.product}
                key={item.product}
                item={item}
                addToBasket={addToBasket}
              />
            ))}
          </div>
        </>
      )}
    </UnidaysDiscountChallenge>
  </Layout>
);

export default Page;
