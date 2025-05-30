import Axios from 'axios';

const axios = Axios.create({
baseURL: 'https://pixabay.com/api/',
  params: {
key: '50467285-01ba3d908a621ec7bfe384c55',
image_type: 'photo',
orientation: 'horizontal',
      safesearch: true,
per_page: 15,
    }
})


export async function getImagesByQuery(query, page) {
    try {
      const res = await axios.get('', {
            params: {
                q: query,
                page: page,
            },
        })
return res.data  
    } catch (error) {
        throw error
    }
    
}