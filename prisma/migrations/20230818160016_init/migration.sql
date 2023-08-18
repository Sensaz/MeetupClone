-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `email` VARCHAR(254) NOT NULL,
    `password` LONGTEXT NOT NULL,
    `location` VARCHAR(92) NOT NULL,

    UNIQUE INDEX `idnew_table_UNIQUE`(`id`),
    UNIQUE INDEX `email_UNIQUE`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
