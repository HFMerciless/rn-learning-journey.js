import type {Product} from "@/types/product.ts";

export type CartProduct = Product & {qty:number}