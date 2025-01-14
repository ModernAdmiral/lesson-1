import React from "react";
import { ShopData } from "../../Data/SHOP_DATA.js";
import CollectionPreview from "../../Components/CollectionPreview/CollectionPreview.jsx";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ShopData
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
