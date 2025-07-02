CREATE TABLE `vehicles`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `type` VARCHAR(255) NOT NULL,
    `brand` VARCHAR(255) NOT NULL,
    `model` VARCHAR(255) NOT NULL,
    `plate` VARCHAR(255) NOT NULL,
    `frame_number` VARCHAR(255) NOT NULL,
    `color` VARCHAR(255) NOT NULL,
    `fuel` ENUM('') NOT NULL
);