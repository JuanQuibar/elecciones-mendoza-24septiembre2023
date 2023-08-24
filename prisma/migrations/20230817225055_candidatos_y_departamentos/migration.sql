/*
  Warnings:

  - You are about to drop the column `categoriaId` on the `candidato` table. All the data in the column will be lost.
  - Added the required column `departamentoId` to the `Candidato` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `candidato` DROP FOREIGN KEY `Candidato_categoriaId_fkey`;

-- AlterTable
ALTER TABLE `candidato` DROP COLUMN `categoriaId`,
    ADD COLUMN `departamentoId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Candidato` ADD CONSTRAINT `Candidato_departamentoId_fkey` FOREIGN KEY (`departamentoId`) REFERENCES `Departamento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
