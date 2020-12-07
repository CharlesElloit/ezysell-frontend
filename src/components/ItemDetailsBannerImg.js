import React, { useEffect, Fragment, useRef } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

//MUI Staff
import Typography from "@material-ui/core/Typography";
// import Circularprogress from "@material-ui/core/CircularProgress";
import ArrowForward from "@material-ui/icons/ArrowForwardIos";

//Custom components
import CarouselSlider from "./carousel/Carousel";
import Loading from "../components/loading/Loading";
import UserInfo from "./itemDetails/UserInfo";
import ItemDetailSumary from "./itemDetails/ItemDetailSumary";
import ItemDetailTrendingItems from "./itemDetails/ItemDetailTrendingItems";
import ItemDetailDeliveryReturn from "./itemDetails/ItemDetailDeliveryReturn";

//Redux Staff
import { connect } from "react-redux";
import { getProductDetailAction } from "../redux/actions/productActions";

function ItemDetailsBannerImg(props) {
  const getProducts = useRef(() => {});

  getProducts.current = () => {
    return props.getProductDetailAction(props.id);
  };

  useEffect(() => {
    getProducts.current();
  }, []);

  const {
    productDetails: { description, images, title, brand, price, currency },
    loading
  } = props.products;

  return (
    <Fragment>
      {!loading ? (
        <Fragment>
          <div className="itemDetails-gallery">
            <CarouselSlider imageUrl={images} />
          </div>
          <ItemDetailSumary
            name={title}
            brand={brand}
            price={price}
            currency={currency}
            description={description}
          />
          <h3 className="title">DELIVERY & RETURN</h3>
          <ItemDetailDeliveryReturn />
          <div>
            <h3 className="title">SELLER INFO</h3>
            <UserInfo />
            <h3 className="title">PRODUCT DETAILS</h3>
            <div className="description">
              <div className="delivery-info-content">
                <h3 className="subtititle">Description</h3>
                <div className="more-info">
                  <Link to="/">more</Link>
                  <ArrowForward />
                </div>
              </div>
              <hr />
              <Typography variant="caption">{description}</Typography>
            </div>
            <div className="popular-trendings">
              <div className="popular-trendings-header">
                <h3>You may also like this</h3>
                <Link to="/">Sell all</Link>
              </div>
              <hr />
              <ItemDetailTrendingItems />
            </div>
          </div>
        </Fragment>
      ) : (
        <Loading />
      )}
    </Fragment>
  );
}

// ItemDetailsBannerImg.propTypes = {
//   id: PropTypes.string.isRequired,
//   // imageUrl: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired
// };

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = {
  getProductDetailAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetailsBannerImg);
