import axios from "axios";

const API_KEY = "000c14c8bdacaf933d6486c04d4155c0"

const OngkirService = {
    getProvinces: async () => {
        try {
            const response = await axios.get('https://api.rajaongkir.com/starter/province',
            {
                headers: {
                    key: API_KEY,
                }
            }
            );
            return response
        } catch (err) {
            console.error(err);
            throw err;
        }
    } 
}

export default OngkirService;