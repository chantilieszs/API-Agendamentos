import { Request, Response } from "express"
import { ICategoryRequest } from "../interfaces/categories"
import createCategoryService from "../services/categories/createCategory.service"
import listCategoriesService from "../services/categories/listCategories.service"
import listPropertiesByCategoryService from "../services/categories/listPropertiesByCategory.service"

export const createCategoryController = async (req: Request, res: Response) => {
    const userData: ICategoryRequest = req.body
    const newCategory = await createCategoryService(userData)

    return res.status(201).json(newCategory)
}

export const listCategoryController = async (req: Request, res: Response) => {
    const categories = await listCategoriesService()

    return res.json(categories)
}

export const listPropertiesByCategoryController = async (req: Request, res: Response) => {
    const id = req.params.id;

    const propertie = await listPropertiesByCategoryService(id);

    return res.status(200).json(propertie)
}
