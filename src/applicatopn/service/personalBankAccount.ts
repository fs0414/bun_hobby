import json2csv from "json2csv";
import path from "path";
import fs from "fs";
import type { PersonalBankAccount } from "@prisma/client";
import type { PersonalBankAccountServiceInterface } from "./interface/personalBankAccount";

export class PersonalBankAccountService implements PersonalBankAccountServiceInterface{
    addPayrollReport = async(
        payrollToUser: PersonalBankAccount,
        amount: number,
        adminUserId: number
    ): Promise<void> => {
        const dataList = [{
            id: payrollToUser.id,
            amount: amount,
            balance: payrollToUser.balance,
            adminUserId: adminUserId,
            userId: payrollToUser.user_id,
        }];

        const csv = json2csv.parse(dataList);

        const rootDir = path.resolve(__dirname, '../../../.csv/');
        // const reportingDate = new Date().toISOString().split('T')[0].replace(/-/g, '');
        const reportingDate = new Date().toISOString().split('T')[0].replace(/-/g, '');
        const time = new Date().toISOString().split('T')[1].split(':');
        const formattedDateTime = `${reportingDate}_${time[0]}${time[1]}`;


        console.log("formattedDateTime", formattedDateTime);
        const csvFilePath = path.join(rootDir,
            `payroll_${adminUserId}to${payrollToUser.id}_${formattedDateTime}.csv`
        );

        fs.writeFile(csvFilePath, csv, (error: unknown) => {
            if(error) {
                throw new Error('Error writing csv file');
            }
        });

        return;
    }
}