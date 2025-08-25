// components/ui/ProductCardSkeleton.tsx

const ProductCardSkeleton = () => {
    return (
      <div className="border rounded-lg overflow-hidden shadow-sm bg-background animate-pulse">
        <div className="relative w-full h-52 bg-muted"></div>
        <div className="p-4 space-y-3">
          <div className="h-5 w-3/4 bg-muted rounded"></div>
          <div className="h-4 w-full bg-muted rounded"></div>
          <div className="h-4 w-1/2 bg-muted rounded"></div>
          <div className="h-6 w-1/3 bg-muted rounded mt-2"></div>
        </div>
      </div>
    );
  };
  
  export default ProductCardSkeleton;