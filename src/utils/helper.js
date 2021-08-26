import { api } from "./consts";

const getCall = (url) => {
  return fetch(`${api}/${url}`).then((res) => {
    return res;
  });
};

const format_okr_results = (okr_list) => {
  // to filter only parent items
  let parent_list = okr_list.filter(
    (line_item) => line_item.parent_objective_id === ""
  );

  let categories = parent_list.map((line_item) => line_item.category); // to get categories
  let uniq_categories = Array.from(new Set(categories)); // to get unique categories
  let categories_status = {}; // to maintain each category status

  uniq_categories.forEach((category) => {
    categories_status[category] = true; // each category is key and value is the status
  });

  // iterate through parent items and map the associated children items
  parent_list = parent_list.map((parent_item) => {
    return {
      ...parent_item,
      children: okr_list.filter(
        (child_item) => child_item.parent_objective_id === parent_item.id
      ),
    };
  });

  return {
    parent_list,
    categories: categories_status,
  }; // return the parent list and categories
};
export { getCall, format_okr_results };
