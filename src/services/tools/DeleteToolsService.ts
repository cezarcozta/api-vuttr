import { getRepository } from 'typeorm';
import Tools from '../../models/Tools';

class DeleteToolsService {
  public async execute(id: string): Promise<void> {
    const toolsRepository = getRepository(Tools);

    try {
      const tool = await toolsRepository.findOne(id);

      if (!tool) {
        throw new Error('Tool not found!');
      }

      await toolsRepository.remove(tool);
    } catch (error) {

      throw new Error(error.message);
    }
  }
}

export default DeleteToolsService;
