import axios from 'axios';

export interface GeocodeResponse {
  place_id: number;
  licence: string;
  lat: string;
  lon: string;
  category: string;
  type: string;
  place_rank: number;
  importance: number;
  addresstype: string;
  name: string;
  display_name: string;
  boundingbox: string[];
}


export default class ZipCodeService {
  // Function to fetch geocode from ZIP code using Nominatim
  static async fetchGeocodeFromZip(zipCode: string): Promise<GeocodeResponse | null> {
    try {
      const response = await axios.get('https://nominatim.openstreetmap.org/search', {
        params: {
          postalcode: zipCode,
          country: 'us',
          format: 'json',
          addressdetails: 1,
          limit: 1,
        },
        headers: {
          'User-Agent': 'goodtotshop.com',
        },
      });

      if (response.status === 200) {
        const data: any[] = response.data;
        if (data.length > 0) {
          const location = data[0];
          return location;
        } else {
          throw new Error("No results found for the given ZIP code.");
        }
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (error) {
      throw new Error(`Error fetching geocode: ${error}`);
    }
  }
}