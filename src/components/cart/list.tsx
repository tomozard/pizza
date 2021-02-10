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
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import Divider from "@material-ui/core/Divider";
import { ICart } from "../../interfaces";
import { Grid } from "@material-ui/core";
import LinesEllipsis from "react-lines-ellipsis";
import { Provider, useSelector, useDispatch } from "react-redux";
import { updateCarts, removeCarts } from "../../store/actions/cartActions";

interface Props {
  cart: ICart;
}
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 80,
    backgroundSize: "contain",
  },
  myCartButton: {
    minWidth: 40,
  },
  myRemoveButton: {
    minWidth: 40,
    marginLeft: "auto",
  },
  floatRight: {
    marginLeft: "auto",
  },
});

const List = (props: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cart = props.cart;

  const increaseCart = () => {
    if (cart.amount < 9) {
      const amount = cart.amount++;
      dispatch(updateCarts(cart.product));
    }
  };
  const decreaseCart = () => {
    if (cart.amount > 1) {
      const amount = cart.amount--;
      dispatch(updateCarts(cart.product));
    }
  };

  const removeCart = () => {
    dispatch(removeCarts(cart.product));
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Grid container>
          <Grid item xs={12} md={4}>
            <CardMedia
              className={classes.media}
              image={"https://test.pizzahut1150.com" + cart.product.image_th}
              title={cart.product.imagealt_th}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <CardContent>
              <Typography component="h3">
                {cart.product.product_name_th} (฿ {cart.product.price}/ชิ้น)
              </Typography>
              <Typography variant="subtitle2">
                Total : ฿ {cart.amount * cart.product.price}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
      <Divider />
      <CardActions>
        <Button
          size="small"
          color="primary"
          className={classes.myCartButton}
          onClick={() => {
            decreaseCart();
          }}
        >
          <RemoveCircleIcon></RemoveCircleIcon>
        </Button>
        <Typography variant="subtitle2">จำนวน {cart.amount} ชิ้น</Typography>
        <Button
          size="small"
          color="primary"
          className={classes.myCartButton}
          onClick={() => {
            increaseCart();
          }}
        >
          <AddCircleIcon></AddCircleIcon>
        </Button>
        <Divider orientation="vertical" flexItem />
        <Button
          size="small"
          color="primary"
          className={classes.myCartButton}
          onClick={() => {
            removeCart();
          }}
        >
          <DeleteIcon></DeleteIcon>
        </Button>
      </CardActions>
    </Card>
  );
};

export default List;
