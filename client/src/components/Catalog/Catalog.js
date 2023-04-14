import { CatalogItem } from "./CatalgItem/CatalogItem";

export const Catalog = ({storyes}) => {
    return (
      <div id="box">
        <h1>Catalog</h1>
        {storyes.map(x => <CatalogItem key = {x._id} {...x}/>)}
        {storyes.lenght === 0 && <h3>Nothing</h3>}
      </div>
    );
  }
  