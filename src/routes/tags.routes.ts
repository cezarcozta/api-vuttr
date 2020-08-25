import { Router } from 'express'
import { getRepository } from 'typeorm';

import CreateTagsService from '../services/tags/CreateTagsService';

import Tags from '../models/Tags';

const tagsRouter = Router();

tagsRouter.get('/', async (request, response) => {
  const tagsRepository = getRepository(Tags);

  const tags = await tagsRepository.find();

  return response.status(200).json(tags);
})

tagsRouter.post('/', async (request, response) => {
  const { name } = request.body;

  const createtag = new CreateTagsService();

  const tag = await createtag.execute({ name });

  return response.status(201).json(tag);
});

export default tagsRouter;
