-- CreateTable
CREATE TABLE "Comic" (
    "id" SERIAL NOT NULL,
    "issueNumber" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "ownerId" INTEGER NOT NULL,

    CONSTRAINT "Comic_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comic" ADD CONSTRAINT "Comic_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
