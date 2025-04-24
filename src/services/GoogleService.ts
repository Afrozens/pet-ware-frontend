import axios, { AxiosError } from 'axios';

import { Place } from "@/models/commons";

const headers = {
  'Content-Type': 'application/json',
  'X-Goog-Api-Key': process.env.NEXT_PUBLIC_GOOGLE_PLACE,
};

export const getPlace = async (place: string): Promise<Place | string> => {
    try {
      if (!place) return '';
  
      const data = {
        input: place,
        includedPrimaryTypes: ['country', 'administrative_area_level_1', 'locality'],
      };
  
      const { data: dataFetch } = await axios.post(
        'https://places.googleapis.com/v1/places:autocomplete',
        data,
        { headers },
      );
  
      return dataFetch;
    } catch (error) {
      const err = error as AxiosError;
      throw err.message;
    }
  };