-- CreateTable
CREATE TABLE `Candidato` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `fuerza` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NULL,
    `votos` INTEGER NOT NULL,
    `porcentaje` INTEGER NOT NULL,
    `categoriaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Departamento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `mesas` INTEGER NOT NULL,
    `escrutadas` INTEGER NOT NULL,
    `votos` INTEGER NOT NULL,
    `blanco` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Candidato` ADD CONSTRAINT `Candidato_categoriaId_fkey` FOREIGN KEY (`categoriaId`) REFERENCES `Departamento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
