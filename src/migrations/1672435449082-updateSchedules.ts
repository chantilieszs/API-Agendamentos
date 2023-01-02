import { MigrationInterface, QueryRunner } from "typeorm";

export class updateSchedules1672435449082 implements MigrationInterface {
    name = 'updateSchedules1672435449082'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" DROP CONSTRAINT "FK_bd21a878d4ef1370248ed78544a"`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" DROP CONSTRAINT "FK_3ec23d8274d8829506272e5ccfd"`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" DROP COLUMN "propertieId"`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" DROP COLUMN "categoryId"`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" ADD "propertyId" uuid`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" ADD CONSTRAINT "FK_d38c8782cbb21122d7c6c531a78" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" ADD CONSTRAINT "FK_235777864d81d2513cb8d6118f0" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" DROP CONSTRAINT "FK_235777864d81d2513cb8d6118f0"`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" DROP CONSTRAINT "FK_d38c8782cbb21122d7c6c531a78"`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" DROP COLUMN "propertyId"`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" ADD "categoryId" uuid`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" ADD "propertieId" uuid`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" ADD CONSTRAINT "FK_3ec23d8274d8829506272e5ccfd" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" ADD CONSTRAINT "FK_bd21a878d4ef1370248ed78544a" FOREIGN KEY ("propertieId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
