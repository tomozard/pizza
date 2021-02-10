// React
import React from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { IProduct } from "../../interfaces";
import { Grid } from "@material-ui/core";
import LinesEllipsis from "react-lines-ellipsis";
import { Provider, useSelector, useDispatch } from "react-redux";
import { addCarts } from "../../store/actions/cartActions";

interface Props {
  product: IProduct;
}
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    backgroundSize: "contain",
  },
  floatRight: {
    marginLeft: "auto",
  },
});

const List = (props: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const product = props.product;

  const addToCart = () => {
    dispatch(addCarts(product));
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Grid container>
          <Grid item xs={12} md={4}>
            <CardMedia
              className={classes.media}
              image={"https://test.pizzahut1150.com" + product.image_th}
              title={product.imagealt_th}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <CardContent>
              <Typography component="h3">{product.product_name_th}</Typography>
              <LinesEllipsis
                text={product.product_detail_th}
                maxLine="3"
                ellipsis="..."
                trimRight
                basedOn="letters"
              ></LinesEllipsis>
              <Typography variant="subtitle2">฿ {product.price}</Typography>
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          className={classes.floatRight}
          onClick={() => {
            addToCart();
          }}
        >
          Add Card
        </Button>
      </CardActions>
    </Card>
  );
};

export default List;
