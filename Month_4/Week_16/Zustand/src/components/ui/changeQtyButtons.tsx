import {useStore} from "@/store/store";
import {useShallow} from "zustand/react/shallow";
import type { Store } from '@/types/store';
import {Minus, Plus} from "lucide-react";
import {useEffect} from "react"; //


type Props = {productId: string}

export function ChangeQtyButtons({productId}: Props) {

    const { getProductById, decQty, incQty, setTotal } = useStore(
        useShallow((state: Store) => ({
            getProductById: state.getProductById,
            decQty: state.decreaseQuantity,
            incQty: state.increaseQuantity,
            setTotal: state.setTotal
        }))
    );

    const product = getProductById(productId)

    useEffect(() => {
        const unSub=useStore.subscribe(
            (state)=>state.products,
            (products) => {
            setTotal (
                products.reduce((acc, product) => acc + product.price * product.qty, 0
                ))
            },
        {fireImmediately:true}
        )
        return () => unSub()
    },[setTotal])
    return <>
        {product && (
            <div className="flex gap-2 items-center">
                <button onClick={()=>decQty(product.id)}>
                    <Minus/>
                </button>
                <span>{product.qty}</span>
                <button onClick={()=>incQty(product.id)}>
                    <Plus/>
                </button>
            </div>
        )}
    </>
}