import React, { Fragment } from "react";
import "./CartItem.css";
import PropTypes from "prop-types";
import Package from "./package.jpg"

const CartItem = props => {
  return (
    <Fragment>
      <tr>
        <td>
          {" "}
          <img
            src={Package}
            alt={props.name}
            className="Cart-Item-Photo"
          />{" "}
        </td>
        <td>{props.name}</td>
        <td>{props.weight}</td>
        <td>${props.price}</td>
        <td><i className="fa fa-times" onClick={props.removeWholeItem} style={{ color: 'red', cursor: 'pointer' }}></i></td>
      </tr>

    </Fragment>
  );
};

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.string.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
}

export default CartItem;
