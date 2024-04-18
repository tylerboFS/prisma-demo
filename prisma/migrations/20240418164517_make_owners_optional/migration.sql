-- DropForeignKey
ALTER TABLE "Comic" DROP CONSTRAINT "Comic_ownerId_fkey";

-- AlterTable
ALTER TABLE "Comic" ALTER COLUMN "ownerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Comic" ADD CONSTRAINT "Comic_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
