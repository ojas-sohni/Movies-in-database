import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}

//this is pagination on client side

//_.take([1, 2, 3]);
// => [1]

//_.take([1, 2, 3], 2);
// => [1, 2]
//here we have page size = 4. Thus it will take 4 from the movies array

//_.slice(array, [start=0], [end=array.length])
