import { prismaContext } from "./prismaContext";

async function resetUserTable() {
    try {
        await prismaContext.user.deleteMany({});
        await prismaContext.$executeRaw`ALTER SEQUENCE "User_id_seq" RESTART WITH 1;`
        console.log('delete user table')
    } catch (err: any) {
        console.log('user recode reset field')
    }
}

resetUserTable();