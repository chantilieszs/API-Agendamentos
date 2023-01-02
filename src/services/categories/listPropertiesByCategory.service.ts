import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entities";
import AppError from "../../errors/appError";

const listPropertiesByCategoryService = async (id: string): Promise<any> => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const findCategory = await categoryRepository.findOneBy({
    id: id
  });

  if (!findCategory) {
    throw new AppError("Category not found", 404);
  };

  const propertie = await categoryRepository.findOne({
    where: {
      id: id
    },
    relations: {
      properties: true
    }
  });

  return propertie;
};

export default listPropertiesByCategoryService;
