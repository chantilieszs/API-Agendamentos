import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entities";


const listCategoriesService = async (): Promise<Category[]> => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const categories = await categoryRepository.createQueryBuilder().getMany();

  return categories;
};

export default listCategoriesService;