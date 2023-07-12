import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummy_data = [
  {
    id: "p1",
    price: 20,
    title: "Moonfall Book",
    description: "Good Book",
  },
  {
    id: "p2",
    price: 50,
    title: "first Book",
    description: "Good Book 1",
  },
  {
    id: "p3",
    price: 30,
    title: "second Book",
    description: "Good Book 2",
  },
  {
    id: "p4",
    price: 10,
    title: "third Book",
    description: "Good Book 3",
  },
  {
    id: "p5",
    price: 9,
    title: "fourth Book",
    description: "Good Book 4",
  },
  {
    id: "p6",
    price: 12,
    title: "fifth Book",
    description: "Good Book 5",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy_data.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
