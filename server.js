const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/api/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.send(users);
});

app.delete("/api/users/:userId", async (req, res) => {
  try{
  const deletedUser = await prisma.user.delete({
    where: {
      id: parseInt(req.params.userId),
    },
  });
  res.send(deletedUser);
  }
  catch(err){
    console.log(err);
    res.status(500).send(err);
  }
});

app.get("/api/comics", async (req, res) => {
  const comics = await prisma.comic.findMany();
  res.send(comics);
});

app.delete("/api/comics/:comicId", async (req, res) => {
  const deletedComic = await prisma.comic.delete({
    where: {
      id: parseInt(req.params.comicId),
    },
  });

  res.send(deletedComic);
});

app.delete("/api/comics/deleteAllByTitle/:comicTitle", async (req, res) => {
  const deletedComics = await prisma.comic.deleteMany({
    where: {
      title: req.params.comicTitle,
    },
  });

  res.send(deletedComics);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
