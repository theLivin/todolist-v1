module.exports.getDateFn = function () {

  const today = new Date();
  //const currentDay = today.getDay();

  const options = {
    weekday: "long",
    day: "numeric",
    //year: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("en-Us",options);
}

module.exports.getDayFn = function () {

  const today = new Date();

  const options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-Us",options);
}
