import { getRepository } from 'typeorm';
import Tools from '../../models/Tools';

interface RequestDTO {
  id: string;
  title: string;
  link: string;
  description: string;
}

class UpdateToolsService {
  public async execute({ id, title, link, description }: RequestDTO): Promise<Tools> {
    const toolRepository = getRepository(Tools);

    const tool = await toolRepository.findOne(id);

    if (!tool) {
      throw new Error('tool not found!');
    }

    tool.title = title || tool.title;
    tool.link = link || tool.link;
    tool.description = description || tool.description;

    await toolRepository.save(tool);

    return tool;
  }
}

export default UpdateToolsService;
