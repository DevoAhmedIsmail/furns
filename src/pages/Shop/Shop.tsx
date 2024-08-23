import { useEffect, useState } from "react";
import PageHeader from "../../components/shared/PageHeader/PageHeader";
import { useParams } from "react-router-dom";
import { TAppliedFilters, TFilterItem, TProduct, Tsort } from "../../types";
import productsServices from "../../servcies/productsServices";
import ProductCard from "../../components/shared/ProductCard/ProductCard";
import ProductsLabel from "../../Data/ProductsLabel";
import { IoIosArrowBack } from "react-icons/io";
import Pagination from "react-js-pagination";
import Sort from "../../components/Shop/Sort/Sort";
import Filters from "../../components/Shop/Filters/Filters";
import changeState from "../../helpers/changeStateOfFilter";



const Shop = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState<TProduct[]>([]);
  const [activePage, setActivePage] = useState(1);
  const [itemsCount, setItemsCount] = useState(0);
  const [sortBy, setSortBy] = useState<Tsort>("newest");
  const [appliedFilters, setAppliedFilters] = useState<TAppliedFilters>({});

  

  const allFilters: TFilterItem[] = [
    {
      title: "category",
      displayedData: ["All", "Shoes", "Clothes", "Accessories"],
      state: appliedFilters?.category,
      changeState: (category: string) => setAppliedFilters(prev => ({...prev, category})),
    },
    {
      title: "brand",
      displayedData: ["Nike", "Adidas", "Puma", "Reebok"],
      state: appliedFilters?.brand,
      changeState: (brand: string) => changeState("brand", brand, setAppliedFilters),
      isMultiSelect: true,
    },
    {
      title: "color",
      displayedData: ["Black", "White", "Red", "Blue"],
      state: appliedFilters?.color,
      changeState: (color: string) => changeState("color", color, setAppliedFilters),
      isMultiSelect: true,
    },
    {
      title: "size",
      displayedData: ["S", "M", "L", "XL"],
      state: appliedFilters?.size,
      changeState: (size: string) => changeState("size", size, setAppliedFilters),
      isMultiSelect: true,
    },
  ];

  const sortType = {
    newest: "_sort=-createdDate",
    "price-asc": "_sort=price",
    "price-desc": "_sort=-price",
    "name-asc": "_sort=name",
    "name-desc": "_sort=-name",
  };

  const getProducts = async () => {
    try {
      // _sort=createdDate&_order=desc
      // _sort=price
      const productsData = await productsServices.getProducts(
        activePage,
        sortType[sortBy]
      );
      console.log(productsData.data);
      setProducts(productsData.data.data);
      setItemsCount(productsData.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const changeActivePage = (newPage: number) => {
    setActivePage(newPage);
    document
      .getElementById("products-list")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const changeSortBy = (newSort: Tsort) => {
    setSortBy(newSort);
  };

  useEffect(() => {
    getProducts();
  }, [activePage, sortBy]);

  return (
    <div className="">
      <PageHeader
        title="Shop"
        links={[{ name: "Home", url: "/" }, { name: categoryName || "Shop" }]}
      />

      <section className="wrapper">
        <div className="grid grid-cols-4 gap-8">
          {/* Filters */}
          <div className="col-span-4 lg:col-span-1">
            <Filters allFilters={allFilters} />
          </div>

          {/* Products Display */}
          <div className="col-span-4 lg:col-span-3">
            {/* Sort */}
            <Sort
              itemsCount={itemsCount}
              sortBy={sortBy}
              changeSortBy={changeSortBy}
            />
            {/* Products List */}
            <div
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3"
              id="products-list"
            >
              {products?.map((product) => (
                <ProductCard
                  key={product.id}
                  img={product.img}
                  price={product.price}
                  oldPrice={product["old-price"]}
                  title={product.name}
                  productLabel={product.add_new ?? ProductsLabel.newArrival.key}
                  discount={product.discount}
                  category={product.category}
                />
              ))}
            </div>

            <Pagination
              activePage={activePage}
              itemsCountPerPage={12}
              hideFirstLastPages={true}
              prevPageText={
                <IoIosArrowBack className="w-6 h-3 rtl:rotate-180" />
              }
              nextPageText={
                <IoIosArrowBack className="w-6 h-3 rotate-180 rtl:rotate-0" />
              }
              totalItemsCount={itemsCount} //length
              pageRangeDisplayed={
                // Math.ceil(itemsCount / 12) > 4 ? 5 : Math.ceil(itemsCount / 12)
                5
              } // total tickets length / number of items per page to the nearest integer
              onChange={(pageNumber: number) => changeActivePage(pageNumber)}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
