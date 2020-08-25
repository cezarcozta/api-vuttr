import { getRepository } from 'typeorm';
import Tags from '../../models/Tags';


class CreateTagsService {
  public async execute(name: string): Promise<Tags> {
    const tagRepository = getRepository(Tags);

    const tag = tagRepository.create({ name });

    await tagRepository.save(tag);

    return tag;
  }
}

export default CreateTagsService;
