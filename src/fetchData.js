import axios from 'axios';

const BASE_URL ='https://youtube-v31.p.rapidapi.com/search';
const options = {
  params: {
    part: 'snippet,id',
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': "f13642dbabmsh93b190160e4a1a5p1d613ajsn7bfe3388ce5f",
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};



const fetchData = async (searchTerm) => {
    console.log(searchTerm);
    options.params.q = searchTerm;
    const { data } = await axios.get(BASE_URL, options);
    return data;
}
export default fetchData;