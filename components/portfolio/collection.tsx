import { collections } from "@/constants";
import CollectionGrid from "../collection-grid";

const Collection: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-28 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-baseline sm:justify-between mb-20">
        <h2 className="mt-4 font-serif text-5xl lg:text-7xl leading-none text-primary">
          Collections
        </h2>
        {/* <Link href="#" className="hidden text-sm font-semibold  sm:block">
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </Link> */}
      </div>

      <CollectionGrid collections={collections} type="landing" />

      <div className="mt-6 sm:hidden">
        <a href="#" className="block text-sm font-semibold ">
          Browse all collections
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  );
};

export default Collection;
