import { notFound } from "next/navigation";
import ProductClientPage from "@/components/page/ProductClientPage";

interface ProductPageProps {
  params: {
    id: number;
  };
}

const ProductPage = ({ params }: ProductPageProps) => {
  const productId = params.id;

  if (!productId) notFound();

  return <ProductClientPage productId={productId} />;
};

export default ProductPage;
