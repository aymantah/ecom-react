import { Grid, Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";
import CustomCard from "../CustomCard";
import Spinner from "../Spinner";
import Banner from "./Banner";

import "./style.css";

const Basket = ({
  basketData,
  updateProduct,
  handleEmptyBasket,
  RemoveItemFromBasket,
}) => {
  const [showSpinner, setShowSpinner] = useState(true);
  const loading = () => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 2000);
    if (showSpinner) {
      return <Spinner />;
    }
    return <Banner />;
  };

  if (!basketData.line_items || !basketData.line_items.length) return loading();
  return (
    <Container id="basket">
      <Grid container justify="center" spacing={4}>
        {basketData.line_items.map((item) => {
          return (
            <Grid key={item.id} item xs={6} sm={3}>
              <CustomCard
                basket
                product={item}
                updateProduct={updateProduct}
                RemoveItemFromBasket={RemoveItemFromBasket}
              />
            </Grid>
          );
        })}
      </Grid>
      <div className="actions">
        <Button
          size="small"
          color="action"
          variant="contained"
          onClick={handleEmptyBasket}
        >
          Vider le panier
        </Button>

        <Button
          size="small"
          variant="contained"
          component={Link}
          to="/Form"
        >
          payer
        </Button>
      </div>
    </Container>
  );
};

export default Basket;
