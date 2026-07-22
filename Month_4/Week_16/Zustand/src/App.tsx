import {PRODUCTS_DATA} from "@/lib/mockData.ts";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card.tsx";
import {useStore} from "@/store/store.ts";
import {Button} from "@/components/ui/button.tsx";
import {ChangeQtyButtons} from "@/components/ui/changeQtyButtons.tsx";
import {Cart} from "@/components/ui/Cart.tsx";
import {User} from "@/components/ui/User.tsx";

export default function App() {
    const addProduct = useStore((state)=> state.addProduct)
    const cartProducts = useStore((state)=> state.products)

    return <main className="space-y-2 dark h-screen bg-background max-w-sm mx-auto mt-2">
        <div>
            <Cart/>
            <User/>
        </div>
        <h1 className="text-2xl">Products:</h1>
        <div className="space-y-2">{PRODUCTS_DATA.map((product)=>(
            <Card key={product.id}>
                <CardHeader>{product.title}</CardHeader>
                <CardContent>{product.price}$</CardContent>
                <CardFooter>
                    {cartProducts.find((item) => item.id === product.id) ? (
                        <ChangeQtyButtons productId={product.id} />
                    ) : (
                        <Button onClick={() => addProduct(product)} variant="default">
                            Add to cart
                        </Button>
                    )}
                </CardFooter>
            </Card>
        ))}</div>
    </main>;
}


/*const { address } = useStore(
        useShallow(
            (state) => ({
            address: state.address,
        }))
    );*/


//const address=useStore((state)=> state.address)


/*
import { Button } from "@/components/ui/button";
import { create } from "zustand";

interface StoreState {
  count: number;x
  inc: () => void;
  dec: () => void;
}

const useStore = create<StoreState>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));

function App() {
  const store = useStore();

  return (
      <div className="p-4 flex items-center gap-4">
        <Button onClick={store.dec}>-</Button>
          <Count/>
        <Button onClick={store.inc}>+</Button>
      </div>
  );
}
function Count() {
    const store = useStore();
    return <div>{store.count}</div>;
}

export default App;*/
