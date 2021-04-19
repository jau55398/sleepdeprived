import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../../App.css';
import '../../Form.css';
import { getCartItems } from '../../../_actions/user_actions'

/*Currently contains the Search, Currency, logo,
log in, create account, cart, and calls all the buttons
that are in the AppButtons.js file*/
function Cart(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    let cartItems = [];
    if (props.user.userData && props.user.userData.cart) {
      if (props.user.userData.cart.length > 0) {
        props.user.userData.cart.forEach(item => {
          cartItems.push(item.id)
        });
        dispatch(getCartItems(cartItems, props.user.userData.cart))
      }
    }
  }, [])

  return (
    <div></div>
  )

}

export default Cart;