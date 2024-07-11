import React from "react"

const ProductsGrid = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="grid grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {children}
    </div>
  )
}

export default ProductsGrid