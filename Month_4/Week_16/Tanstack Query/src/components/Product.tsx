import {useProduct, useProducts} from "../services/queries.ts";
import {Fragment, useState} from "react";

export default function Product() {
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null)
    const productsQuery = useProducts()
    const productQuery = useProduct(selectedProductId)

    return (
        <>
            {productsQuery.data?.pages.map((group, index) => (
                <Fragment key={index}>
                    {group.map((product) => (
                        <Fragment key={product.id}>
                            <button onClick={() => setSelectedProductId(product.id)}>
                                {product.name}
                            </button>
                            <br />
                        </Fragment>
                    ))}
                </Fragment>
            ))}
            <br/>
            <div>
                <button onClick={() =>
                        productsQuery.fetchNextPage()}
                        disabled={
                    !productsQuery.hasNextPage||productsQuery.isFetchingNextPage
                }>
                {
                    productsQuery.isFetchingNextPage
                    ? "Loading More..."
                    : productsQuery.hasNextPage
                    ? "Load More"
                    : "Nothing More To Load"
                }
                </button>
            </div>
            <div>Selected Product:</div>
            {JSON.stringify(productQuery.data)}
        </>
    );
}