import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";
import AppError from "../../errors/appError";

const deleteUserService = async (userID: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: userID,
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  if (!findUser.isActive) {
    throw new AppError("User already deleted", 400);
  }

  await userRepository.update(
    {
      id: userID,
    },
    {
      isActive: false,
    }
  );

  return {};
};

export default deleteUserService;