import React, { useState, useRef, useEffect } from "react";
import Fuse from "fuse.js";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//MUI staff
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";

//Redux staff
import { connect } from "react-redux";
import { getProductAction } from "../redux/actions/productActions";

//Icons
import SearchIcon from "@material-ui/icons/Search";
import MicroIcon from "@material-ui/icons/MicNoneOutlined";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";

//Custom components
import SearchItemCard from "../components/cards/SearchItemCard";

function SearchScreen(props) {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const getAction = useRef(() => {});

  getAction.current = () => {
    return props.getProductAction();
  };

  useEffect(() => {
    getAction.current();
  }, [query]);

  const options = {
    threshold: 0.6,
    minMatchCharLength: 3,
    keys: ["title", "brand", "name"]
  };

  const { products, loading } = props.products;

  const fuse = new Fuse(products, options);

  const searchResults = fuse.search(query);

  const handleChangle = event => {
    event.target.focus();
    setSearch(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="home-screen">
      <div className="header search-header">
        <Slide in={true} direction="up" appear={true}>
          <header>
            <div className="header-bar">
              <div className="menu__logo">
                <IconButton
                  onClick={() => {
                    props.history.goBack();
                  }}
                >
                  <ArrowBackIcon />
                </IconButton>
                <h3>
                  <Link to="/">Shopify</Link>
                </h3>
              </div>
              <Link to="/cart">
                <ShoppingCartIcon />
              </Link>
            </div>
            {/* Search Input */}
            <div className="search-container">
              <div className="header-subHeader">
                <SearchIcon />
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="search"
                    value={search}
                    onChange={event => handleChangle(event)}
                    placeholder="Search products, brands and categories"
                  />
                </form>
              </div>
              <div className="camera">
                <IconButton>
                  <MicroIcon />
                </IconButton>
              </div>
            </div>
          </header>
        </Slide>
      </div>
      <div className="main">
        {!loading ? (
          searchResults.map(item => {
            const { description, title, price, images, name, _id } = item.item;
            return (
              <SearchItemCard
                key={_id}
                id={_id}
                title={title}
                name={name}
                imageUrl={images}
                description={description}
                price={price}
              />
            );
          })
        ) : (
          <div className="progress">
            <CircularProgress color="secondary" />
          </div>
        )}
      </div>
    </div>
  );
}

// SearchScreen.propTypes = {
//   products: PropTypes.object.isRequired,
//   getProductAction: PropTypes.func.isRequired
// };

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = {
  getProductAction
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
