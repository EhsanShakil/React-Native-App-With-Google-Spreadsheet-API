const DataAPI = async () => {
  try {
    let data = await fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1NaJ7GjCME0PaYCAbt3ct10Cl6bSUOlz6XpMS7ASdUQM/values/sheet1?valueRenderOption=FORMATTED_VALUE&key=AIzaSyAMoO3NijVmRDKFdtkfUjIDBWgw831k0PQ"
    );
    let { values } = await data.json();
    let [, ...Data] = values.map((data) => data);
    return Data;
  } catch {
    console.log("Error");
  }
};
export default DataAPI;
