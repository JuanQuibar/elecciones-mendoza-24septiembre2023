/*
  Warnings:

  - You are about to alter the column `votos` on the `candidato` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `candidato` MODIFY `votos` INTEGER NULL;
