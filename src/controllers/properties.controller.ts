import { Request, Response } from "express"
import createPropertyService from "../services/properties/createProperty.service"
import listPropertiesService from "../services/properties/listProperties.service"

export const createPropertieController = async (req: Request, res: Response) => {
    const propData = req.body
    const property = await createPropertyService(propData)

    return res.status(201).json(property)
}
export const listPropertiesController = async (req: Request, res: Response) => {
    const properties = await listPropertiesService()

    return res.json(properties)
}
