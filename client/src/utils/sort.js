const compareKey = (key) => (a, b) => {
  if (a[key] < b[key]) {
    return -1;
  }
  if (a[key] > b[key]) {
    return 1;
  }
  return 0;
};

// one liner
// const compareKey = key => (a, b) => a[key] == b[key]? (a[key] < b[key] ? -1 : 1) : 0

export const AZ = (arr) => arr.sort(compareKey("name"));
export const ZA = (arr) => arr.sort(compareKey("name")).reverse();
export const lowestFirst = (arr) =>
  arr.sort((a, b) => parseInt(a.current_bid) - parseInt(b.current_bid));
export const highestFirst = (arr) =>
  arr.sort((a, b) => parseInt(b.current_bid) - parseInt(a.current_bid));
export const endingFirst = (arr) =>
  arr.sort((a, b) => parseInt(a.start_date) - parseInt(b.start_date));
export const endingLast = (arr) =>
  arr.sort((a, b) => parseInt(b.start_date) - parseInt(a.start_date));
