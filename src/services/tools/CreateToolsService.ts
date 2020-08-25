import { getRepository } from 'typeorm';
import Tools from '../../models/Tools';
import Tags from '../../models/Tags';

interface RequestDTO {
  title: string;
  link: string;
  description: string;
  tagsIDs: any;
}

class CreateUserService {
  public async execute({ title, link, description, tagsIDs }: RequestDTO) {
    const toolRepository = getRepository(Tools);
    const tagRepository = getRepository(Tags);

    const existsTags = await tagRepository.findByIds(tagsIDs);

    const tool = toolRepository.create({ title, link, description, tags: existsTags });
    console.log(tool);
    await toolRepository.save(tool);

    return tool;
  }
}

export default CreateUserService;
