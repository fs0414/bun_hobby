// import { prismaContext } from "../../src/infrastructure/database/prismaContext";
const { prismaContext } = require("../../src/infrastructure/database/prismaContext")

async function main() {
    // const users = await Promise.all([
    //     prismaContext.user.create({
    //         data: {
    //             name: 'user01',
    //             email: 'user01@i.com',
    //             password: 'user01',
    //         },
    //     }),
    //     prismaContext.user.create({
    //         data: {
    //             name: 'user02',
    //             email: 'user02@i.com',
    //             password: 'user02',
    //         },
    //     }),
    //     prismaContext.user.create({
    //         data: {
    //             name: 'user03',
    //             email: 'user03@i.com',
    //             password: 'user03',
    //         },
    //     }),
    //   ]);
    
    const user = await prismaContext.user.create({
        data: {
            name: 'user01',
            email: 'user01@i.com',
            password: 'user01',
        },
    })

    console.log({ user })
}

main()
  .catch((e) => {
    console.log('user seed filed')
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    console.log('user seed success')
    await prismaContext.$disconnect();
  });