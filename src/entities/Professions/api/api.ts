import axios from 'axios';

export const fetchCategories = async () => {
    try {
        const response = await axios.get(
            'https://api.npoint.io/3856745656625b952b48'
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
