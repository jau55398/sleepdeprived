import React, { useEffect } from "react";
import "../../App.css";
import '../../Form.css';
import { Link } from "react-router-dom";
import Axios from 'axios';
import { useState } from 'react';
import { Col, Card, Row } from 'antd';
import Icon from '@ant-design/icons';
import DefaultImage from '../../utils/DefaultImage';


/*Currently contains the Search, Currency, logo,
log in, create account, cart, and calls all the buttons
that are in the AppButtons.js file*/
const { Meta } = Card;

function Shop() {

  const [Products, setProducts] = useState([])
  const [Skip, setSkip] = useState(0)
  const [Limit, setLimit] = useState(8)
  const [PostSize, setPostSize] = useState()
  const [SearchTerms, setSearchTerms] = useState("")
  const [Filters, setFilters] = useState({
    continents: [],
    price: []
  })
  useEffect(() => {

    const variables = {
      skip: Skip,
      limit: Limit,
    }

    getProducts(variables)

  }, [])

  const getProducts = (variables) => {
    Axios.post('/api/product/getProducts', variables)
      .then(response => {
        if (response.data.success) {
          if (variables.loadMore) {
            setProducts([...Products, ...response.data.products])
          } else {
            setProducts(response.data.products)
          }
          setPostSize(response.data.postSize)
        } else {
          alert('Failed to fetch data')
        }
      })
  }
  

  const renderCards = Products.map((product, index) => {

    return <Col lg={6} md={8} xs={24}>
      <Card
        hoverable={true}
        cover={<a href={`/product/${product._id}`}><DefaultImage images={product.images} /></a>}>

        <Meta
          title={product.product_name}
          description={`$${product.price}`}
        />
      </Card>
    </Col>
  })
  const onLoadMore = () => {
    let skip = Skip + Limit;

    const variables = {
      skip: skip,
      limit: Limit,
      loadMore: true,
      filters: Filters,
      searchTerm: SearchTerms
    }
    getProducts(variables)
    setSkip(skip)
  }

  return (
    <div style={{ width: '75%', margin: '3rem auto' }}>
      <div style={{ textAlign: 'center' }}>
        <h2>  Products    </h2>
      </div>



      {Products.length === 0 ?
        <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
          <h2>Loading</h2>
        </div> :
        <div>
          <Row gutter={[16, 16]}>

            {renderCards}

          </Row>
        </div>
      }
      <br />
      <br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/*<button onClick={onLoadMore}>Load More</button>*/}
      </div>

      {/*<Switch>
            <Route path="/About" component={About} />
            <Route path="/item1" component={Item1} />
          </Switch>*/}
      {/*IMPORTANT:
          Dont need this or the <Router> brackets because Shop.js is inside App.js
          If you want to add a new path, add it to the switch bracket in App.js*/}
    </div>
  );
}


export default Shop;
