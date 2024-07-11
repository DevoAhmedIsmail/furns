
interface ProductsGridProps {
  children: React.ReactNode
  className?: string;
}

const ProductsGrid = ({children, className}: ProductsGridProps) => {
  return (
    <div className={`grid grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${className}`}>
      {children}
    </div>
  )
}

export default ProductsGrid
