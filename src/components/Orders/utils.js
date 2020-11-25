export const formattedDate = dateInMillis => {
  var date = new Date(dateInMillis);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  return `${
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2)
  } ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export const byDate = (order1, order2) => {
  return order1.date - order2.date;
};
