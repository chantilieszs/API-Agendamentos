import AppDataSource from "../../data-source";
import { Propertie } from "../../entities/properties.entities";
import { schedule_user_propertie } from "../../entities/schedules_user_properties.entities";
import { User } from "../../entities/user.entities";
import AppError from "../../errors/appError";
import { IScheduleRequest } from "../../interfaces/schedules";

const createScheduleService = async ({ date, hour, propertyId, userId}: IScheduleRequest, id: string) => {
    const userRepository = AppDataSource.getRepository(User)
    const propertyRepository = AppDataSource.getRepository(Propertie)
    const scheduleRepository = AppDataSource.getRepository(schedule_user_propertie)

    const schedule = await scheduleRepository.createQueryBuilder("schedule_user_propertie").select(["schedule_user_propertie.date", "schedule_user_propertie.hour"]).from(schedule_user_propertie, "schedule").where('schedule_user_propertie.date = :date', {date: date}).andWhere("schedule_user_propertie.hour = :hour", {hour: hour}).getMany()

    
    if (schedule) {
        throw new AppError("Reserved time", 400)
    }

    return ''
}

export default createScheduleService;