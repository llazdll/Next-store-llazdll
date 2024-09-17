import { Button } from '../ui/button';

function AddToCart({ productId }: { productId: string }) {
  console.log(productId);
  
  return (
    <Button className='capitalize mt-8' size='lg'>
      add to cart
    </Button>
  );
}
export default AddToCart;