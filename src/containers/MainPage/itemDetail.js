import React from "react";

import ItemField from "./itemField";

const ItemDetails = (props) => {
  const something = props.itemsData.map((item, index) => {
    return (
      <ItemField
        data={item}
        key={index}
        handleDelete={() => props.handleDelete(item._id)}
      />
    );
  });
  return something;
};

export default ItemDetails;
