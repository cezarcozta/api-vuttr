import { getRepository } from 'typeorm';
import Tools from '../../models/Tools';

class DeleteToolsService {
  public async execute(id: string) {
    const toolsRepository = getRepository(Tools);

    const tool = await toolsRepository.findOne(id);

    if (!tool) {
      throw new Error('Tool not found!');
    }

    await toolsRepository.remove(tool);
  }
}

export default DeleteToolsService;
