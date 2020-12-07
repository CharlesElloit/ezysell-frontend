import React, { useEffect, useRef, Fragment } from "react";
import { Link } from "react-router-dom";
import PropsTypes from "prop-types";

//Redux Staff
import { connect } from "react-redux";
import { getProductAction } from "../redux/actions/productActions";

//Custom components
import Card from "./cards/Card";
import LoadingCard from "./loading/LoadingCard";

const TrendingItems = props => {
  const { products, loading } = props.products;

  const getAction = useRef(() => {});

  getAction.current = () => {
    return props.getProductAction();
  };

  useEffect(() => {
    getAction.current();
  }, []);

  let productList = !loading ? (
    products.map(item => {
      const { _id, description, images, name, price } = item;
      return (
        <Card
          key={_id}
          id={_id}
          description={description}
          imageUrl={images}
          title={name}
          price={price}
        />
      );
    })
  ) : (
    <LoadingCard />
  );
  return (
    <Fragment>
      <div className="trending">
        <h3>Trending</h3>
        <Link to="/alltrendings">See all</Link>
      </div>
      <div className="trending-items-container">
        <div className="trending-items">
          <div className="items">{productList}</div>
        </div>
      </div>
    </Fragment>
  );
};

TrendingItems.propsTypes = {
  products: PropsTypes.object.isRequired,
  getProductAction: PropsTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = {
  getProductAction
};

export default connect(mapStateToProps, mapDispatchToProps)(TrendingItems);
