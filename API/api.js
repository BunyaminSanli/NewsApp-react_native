
export const categories = [
  {
    code: "",
    pic: "https://cdn.iconscout.com/icon/free/png-256/news-1661516-1410317.png",
    name: "general",
  },
  {
    code: "",
    pic: "https://thumbs.dreamstime.com/b/dollars-suitcase-business-icon-vector-sign-symbol-isolated-white-background-logo-concept-your-web-mobile-app-design-134169376.jpg",
    name: "business",
  },

  {
    pic: "https://static.vecteezy.com/system/resources/previews/000/353/991/non_2x/vector-health-icon.jpg",
    name: "health",
  },
  {
    pic: "http://www.mcicon.com/wp-content/uploads/2021/01/Science_Science_1-copy-7.jpg",
    name: "science",
  },
  {
    pic: "https://cdn4.iconfinder.com/data/icons/supermarket-34/512/sporting-goods-ball-sport-512.png",
    name: "sports",
  },
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTikVj6eKC6JEBXurJWroWh-p_hGrpKIfitag&usqp=CAU",
    name: "technology",
  },
];

export const country = [
  {
    code: "in",
    name: "India",
  },
  {
    code: "us",
    name: "USA",
  },
  {
    code: "au",
    name: "Australia",
  },
  {
    code: "ru",
    name: "Russia",
  },
  {
    code: "fr",
    name: "France",
  },
  {
    code: "gb",
    name: "United Kingdom",
  },
];

export const BASE_URL = "https://saurav.tech/NewsAPI/";

export const getNewsAPI = (category, country = "us") => {
  return `${BASE_URL}/top-headlines/category/${category}/${country}.json`;
};