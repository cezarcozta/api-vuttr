import { getRepository } from 'typeorm';
import Tags from '../../models/Tags';

interface RequestDTO {
  id: string;
  name: string;
}

class UpdateTagsService {
  public async execute({ id, name }: RequestDTO) {
    const tagRepository = getRepository(Tags);

    const tag = await tagRepository.findOne(id);

    if (!tag) {
      throw new Error('Tag not found!');
    }

    tag.name = name || tag.name;

    await tagRepository.save(tag);

    return tag;
  }
}

export default UpdateTagsService;
