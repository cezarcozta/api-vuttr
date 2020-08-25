import { getRepository } from 'typeorm';
import Tags from '../../models/Tags';

interface RequestDTO {
  name: string;
}

class CreateTagsService {
  public async execute({ name }: RequestDTO) {
    const tagRepository = getRepository(Tags);

    const tag = tagRepository.create({ name });

    await tagRepository.save(tag);

    return tag;
  }
}

export default CreateTagsService;
