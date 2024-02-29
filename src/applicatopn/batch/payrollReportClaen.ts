import cron from "node-cron";
import fs from "fs";

export const payrollReportClaen = () => {
    cron.schedule('* * * * *', async() => {
        // const csvFiles = await fs.readFile("../../../.csv", 'utf-8');

        // console.log(csvFiles);
        
        // const csvFiles = fs.readFile("../../../.csv/", 
        //     (error: unknown, file) => {
        //         if(error) {
        //             throw new Error('Error reading csv file');
        //         }
        //         return file;
        //     });

        // console.log(csvFiles);

        // fs.readdir('../../../.csv/', (err, files) => {
        //     files.forEach(file => {
        //         console.log(file);
        //     });
        // });
    })
}