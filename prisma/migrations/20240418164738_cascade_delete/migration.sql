-- DropForeignKey
ALTER TABLE "Comic" DROP CONSTRAINT "Comic_ownerId_fkey";

-- AddForeignKey
ALTER TABLE "Comic" ADD CONSTRAINT "Comic_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
