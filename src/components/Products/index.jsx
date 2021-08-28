import { Grid, Container } from "@material-ui/core";
import Product from "../Product";
import Spinner from "../Spinner";
import Banner from "../Banner";
import "./style.css";

const Products = ({ products, addProduct }) => {
  if (!products.length) return <Spinner />;

  return (
    <div>
      <Banner />
      <Container id="products">
        <Grid container spacing={6}>
          {products.map((product) => (
            <Grid key={product.id} item xs={6} sm={3} >
              <Product product={product} addProduct={addProduct} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
