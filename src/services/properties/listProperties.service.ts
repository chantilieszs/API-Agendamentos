import AppDataSource from "../../data-source";
import { Propertie } from "../../entities/properties.entities";



const listPropertiesService = async () => {
  const propertyRepository = AppDataSource.getRepository(Propertie);

  const properties = await propertyRepository.find();

  return properties;
};

export default listPropertiesService;