export const filterData = (searchText, restaurant) => {
    const filteredData = restaurant.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
      return filteredData;
    }