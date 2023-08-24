/*
  Warnings:

  - You are about to drop the column `color` on the `candidato` table. All the data in the column will be lost.
  - You are about to drop the column `votos` on the `candidato` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `candidato` DROP COLUMN `color`,
    DROP COLUMN `votos`;
