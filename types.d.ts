interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

type ProductType = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  handle: string;
  tags: string;
};

interface Product {
  id: number;
  title: string;
  body_html: string;
  vendor: string;
  product_type: string;
  created_at: string;
  handle: string;
  updated_at: string;
  published_at: string;
  template_suffix: null | string;
  published_scope: string;
  tags: string;
  status: string;
  admin_graphql_api_id: string;
  variants: Array<{
    /* Detalles de la variante */
  }>; // Necesitarías definir el tipo para las variantes
  options: Array<{
    /* Detalles de las opciones */
  }>; // Necesitarías definir el tipo para las opciones
  images: Array<{
    /* Detalles de las imágenes */
  }>; // Necesitarías definir el tipo para las imágenes
  image: {
    id: number;
    alt: null | string;
    position: number;
    product_id: number;
    created_at: string;
    updated_at: string;
    admin_graphql_api_id: string;
    width: number;
    height: number;
    src: string;
    variant_ids: number[];
  };
}

interface SmartCollection {
  id: number;
  handle: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  published_at: string;
  updated_at: string;
  rules: {
    column: string;
    relation: string;
    condition: string;
  }[];
  disjunctive: boolean;
  sort_order: string;
  template_suffix: string | null;
  admin_graphql_api_id: string;
}
