import { Request, Response } from "express"
import createScheduleService from "../services/schedules/createSchedule.service"

export const createScheduleController = async (req: Request, res: Response) => {
    const data = req.body
    const id = String(req.user.id)
    
    const schedule = await createScheduleService(data, id)
    
    return res.json(schedule)
}

export const listSchedulesController = async (req: Request, res: Response) => {
    

    return res.json()
}