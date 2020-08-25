import { getRepository } from 'typeorm';
import Tags from '../../models/Tags';

class DeleteTagsService {
  public async execute(id: string): Promise<void> {
    const tagRepository = getRepository(Tags);

    try {
      const tag = await tagRepository.findOne(id);
      console.log(tag)
      if (!tag) {
        throw new Error('Tag not found!');
      }

      await tagRepository.remove(tag);
    } catch (error) {

      throw new Error(error.message);
    }
  }
}

export default DeleteTagsService;
