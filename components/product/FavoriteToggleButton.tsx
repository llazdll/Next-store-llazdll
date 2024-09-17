import { FaHeart } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
function FavoriteToggleButton({ productId }: { productId: string }) {
  console.log(productId);
  
  return (
    <Button size='icon' variant='outline' className='p-2 cursor-pointer'>
      <FaHeart />
    </Button>
  );
}
export default FavoriteToggleButton;