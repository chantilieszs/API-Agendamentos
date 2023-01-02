import AppDataSource from "../../data-source";
import { Address } from "../../entities/adresses.entities";
import { Category } from "../../entities/categories.entities";
import { Propertie } from "../../entities/properties.entities";
import AppError from "../../errors/appError";
import { IPropertyRequest } from "../../interfaces/properties";

const createPropertyService = async ({ value, size, address, categoryId}: IPropertyRequest) => {
    const propertyRepository = AppDataSource.getRepository(Propertie);
    const addressRepository = AppDataSource.getRepository(Address)
    const categoryRepository = AppDataSource.getRepository(Category)

    const findAddress = await addressRepository.findOneBy({
        zipCode: address.zipCode
    })

    const findCategory = await categoryRepository.findOneBy({
        id: categoryId
    })

    if(!findCategory) {
        throw new AppError("That category don't exists", 404)
    }
    
    if (address.state.length > 2) {
        throw new AppError("State must contain 2 characters", 400)
    }
    if (findAddress) {
        throw new AppError("Address already registred", 409)
    }
    if(address.zipCode.length > 8) {
        throw new AppError("zipCode must contain 8 characters", 400)
    }


    const createAddress = addressRepository.create({
        district: address.district,
        zipCode: address.zipCode,
        number: address.number,
        city: address.city,
        state: address.state
    })

    await addressRepository.save(createAddress)

    const property = propertyRepository.create({
        value: value,
        size: size,
        address: createAddress,
        category: findCategory
    })
    await propertyRepository.save(property)

    return property

}

export default createPropertyService;