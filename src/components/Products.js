import React, { useEffect, useRef } from "react";

//MUI Staff
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";

//Redux
import { connect } from "react-redux";
import { getProductAction } from "../redux/actions/productActions";

//custom components
import ProductCard from "./cards/ProductCard";
import ProductCardLoading from "./loading/ProductCardLoading";

const useStyles = makeStyles(() => ({
  itemContainer: {
    paddingLeft: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  root: {
    flexGrow: 1,
    width: "100%",
    marginTop: 5,
    alignItems: "center"
  }
}));

function Product(props) {
  const { products, loading } = props.products;

  const getAction = useRef(() => {});

  getAction.current = () => {
    return props.getProductAction();
  };

  useEffect(() => {
    getAction.current();
  }, []);

  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item sm={6}>
        <Grid container spacing={1} className={classes.itemContainer}>
          {loading ? (
            <ProductCardLoading />
          ) : (
            products.map(item => {
              const { _id, description, images, name, price } = item;
              return (
                <Grid item key={_id}>
                  <ProductCard
                    _id={_id}
                    name={name}
                    price={price}
                    images={images}
                    description={description}
                  />
                </Grid>
              );
            })
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = {
  getProductAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
