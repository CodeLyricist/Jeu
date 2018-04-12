-- phpMyAdmin SQL Dump
-- version 4.5.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 13, 2018 at 08:43 PM
-- Server version: 5.7.11
-- PHP Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bdjeuvideo`
--
CREATE DATABASE IF NOT EXISTS `bdjeuvideo` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `bdjeuvideo`;
DROP TABLE IF EXISTS `membre`;
DROP TABLE IF EXISTS `table_connexion`;


-- --------------------------------------------------------

--
-- Table structure for table `membre`
--

CREATE TABLE `membre` (
  `idmembre`   INT(10) NOT NULL,
  `pseudonyme` VARCHAR(50) COLLATE utf8_unicode_ci NOT NULL UNIQUE,
  `avatar` 	   VARCHAR(130)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


ALTER TABLE `membre`
   ADD CONSTRAINT usager_primary_key PRIMARY KEY (`idmembre`);

-- --------------------------------------------------------

--
-- Table structure for table `table_connexion`
--

CREATE TABLE `table_connexion` (
  `idmembre`   INT(10) NOT NULL,
  `courriel`   VARCHAR(50) COLLATE utf8_unicode_ci NOT NULL UNIQUE,
  `motdepasse` VARCHAR(30) NOT NULL,
  `status` 	   ENUM('activé','désactivé') default 'désactivé',
  `role` 	   VARCHAR(12) NOT NULL DEFAULT 'UTILISATEUR'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


ALTER TABLE `table_connexion`
   ADD CONSTRAINT table_connexion_nousager_fk FOREIGN KEY (`idmembre`)
	REFERENCES `membre`(`idmembre`);

--
-- AUTO_INCREMENT for table `membre`
--
ALTER TABLE `membre`
	MODIFY `idmembre` INT(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

--
-- Dumping data for table `membre` and  `table_connexion` 
--

INSERT INTO `membre`(`pseudonyme`) VALUES ('Malik');
INSERT INTO `membre`(`pseudonyme`) VALUES ('Alex');
INSERT INTO `membre`(`pseudonyme`) VALUES ('Suzy');


INSERT INTO `table_connexion`(`idmembre`,`courriel`,`motdepasse`) VALUES (1,'martinlegrand@gmail.com','abc');
INSERT INTO `table_connexion`(`idmembre`,`courriel`,`motdepasse`,`status`,`role`) VALUES (2,'admin@gmail.com','ADMIN','activé','ADMIN');
INSERT INTO `table_connexion`(`idmembre`,`courriel`,`motdepasse`) VALUES (3,'suzannedubois@gmail.com','abc');