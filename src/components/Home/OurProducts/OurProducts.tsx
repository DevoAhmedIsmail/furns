import ProductsTabs from "./ProductsTabs/ProductsTabs"

const OurProducts = () => {
  return (
    <div className="py-5">
        <div className="wrapper">
            <div className="flex-col text-center flex-center">
                <h1 className="h3-bold">Our Products</h1>
                <p className="mt-2 max-w-[500px]">Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore</p>
            </div>

            <ProductsTabs />
        </div>
    </div>
  )
}

export default OurProducts
