import { useEffect, useState } from "react";
import { Prodcuts, useGetProducts } from "../hooks/useGetProducts";
import { Link } from "react-router-dom";
//const [cart, setCart] = useState<Prodcuts[]>([]);

export const ProductsPage = () => {
    const [search, setSearch] = useState<string>("");
    const { data: response, isLoading } = useGetProducts({search});
    

    const data = response as Prodcuts[];

     /*const handleAddEntry = (product: Prodcuts) => {
        setCart([...cart, product]);
        console.log("Product added to cart:", product);
    };*/

    return (
        <div className="container mx-auto px-4">
            <div className="text-3xl font-semibold">Products Page</div>
            
            <div className="flex flex-row justify-center items-center gap-10 my-10">
                <input type="text" placeholder="Search products" onChange={(e) => setSearch(e.target.value)} className="w-full px-4 rounded-lg border border-gray-300 focus:outline-none" />

                <div className="flex flex-row gap-2">
                    <button className="btn btn-sm btn-primary mt-2">Highest Price</button>
                    <button className="btn btn-sm btn-primary mt-2">Lowest Price</button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 relative">
                {response && data.map((product, index) => (
                    <div key={index} className="drop-shadow-md">
                        <img src="https://via.placeholder.com/1080" alt="product" className="rounded-2xl w-full h-52 object-cover" />
                        <div className="flex flex-col mt-2">
                            <div className="flex flex-row justify-between">
                                <div className="text-lg font-semibold">{product.name}</div>
                                <div className="text-lg font-semibold">${product.price}</div>
                            </div>
                            <Link to={`/paper/${product.id}`} className="btn btn-primary mt-2">View Item</Link>
                            <button
                                //onClick={() => handleAddEntry(product)}
                                className="btn btn-secondary mt-2"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
