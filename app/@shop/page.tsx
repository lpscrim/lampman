import ProductList from "../../components/ProductList";

export default function Shop({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <p>Shop</p>
      {children}
      <ProductList/>
    </div>
  );
}
