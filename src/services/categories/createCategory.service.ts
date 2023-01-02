import AppDataSource from "../../data-source";
import AppError from "../../errors/appError";
import { ICategoryRequest } from "../../interfaces/categories";
import { Category } from "../../entities/categories.entities";

const createCategoryService = async (
  userData: ICategoryRequest
): Promise<typeof category> => {
  const categoryRepository = AppDataSource.getRepository(Category);
  const verifyingCategory = await categoryRepository.findOneBy({
    name: userData.name,
  });
  if (verifyingCategory) {
    throw new AppError("Category already exists", 409);
  }
  const category = categoryRepository.create(userData);

  await categoryRepository.save(category);

  return category;
};

export default createCategoryService;