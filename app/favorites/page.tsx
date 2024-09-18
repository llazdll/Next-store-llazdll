import { fetchUserFavorites } from '@/utils/actions';
import SectionTitle from '@/components/global/SectionTitle';
import ProductsGrid from '@/components/product/ProductsGrid';

async function FavoritesPage() {
  const favorites = await fetchUserFavorites();
  if (favorites.length === 0)
    return <SectionTitle text='You have no favorites yet.' />;
  return (
    <div>
      <SectionTitle text='Favorites' />
      <ProductsGrid products={favorites.map((favorite) => favorite.product)} />
    </div>
  );
}

export default FavoritesPage;