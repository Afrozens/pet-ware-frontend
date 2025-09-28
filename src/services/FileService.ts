import { formatedErrorServices } from '@/utils/error';
import axios from 'axios';

class FileService {
  fileGet = async (fileId: string): Promise<string> => {
    try {
      const { data } = await axios.get(`/file/image/${fileId}`);
      return data as string;
    } catch (error) {
      throw formatedErrorServices(error);
    }
  };
}

export default FileService;