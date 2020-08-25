import { getRepository } from 'typeorm';
import Tags from '../../models/Tags';

class DeleteTagsService {
  public async execute(id: string) {
    const tagRepository = getRepository(Tags);

    const tag = await tagRepository.findOne(id);

    if (!tag) {
      throw new Error('Tag not found!');
    }

    await tagRepository.remove(tag);
  }
}

export default DeleteTagsService;
