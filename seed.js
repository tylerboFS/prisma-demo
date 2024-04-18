const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createUsers = async () => {
  const user1 = await prisma.user.create({
    data: {
      username: "tylerbo",
      password: "tyler",
      firstName: "Tyler",
      lastName: "Wright",
      prefix: "Mr.",
      age: 40,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      username: "billyboy",
      password: "billyboy",
      firstName: "Billy",
      lastName: "Boy",
      prefix: "Dr.",
      age: 248,
    },
  });
}

const createComics = async () => {
  const comic1 = await prisma.comic.create({
    data:{
      issueNumber: 23,
      title: "The Amazing Spider-Man",
      ownerId: 1
    }
  });
  const comic2 = await prisma.comic.create({
    data:{
      issueNumber: 23,
      title: "X Men",
      ownerId: 1
    }
  });
  const comic3 = await prisma.comic.create({
    data:{
      issueNumber: 23,
      title: "Superman",
      ownerId: 1
    }
  });

  const comic4 = await prisma.comic.create({
    data:{
      issueNumber: 24,
      title: "Superman",
      ownerId: 2
    }
  });
}

const main = async () => {
  await createUsers();
  await createComics();

  const comic = await prisma.comic.findUnique({
    where: {
      id: 2
    },
    include: {
      owner: {
        include: {
          comics: true
        }
      }
    }
  })
  // console.log(comic);

};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
