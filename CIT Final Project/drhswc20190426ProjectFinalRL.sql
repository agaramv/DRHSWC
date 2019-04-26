CREATE DATABASE  IF NOT EXISTS `drhswc` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `drhswc`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: drhswc
-- ------------------------------------------------------
-- Server version	5.5.57

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `appointment`
--

DROP TABLE IF EXISTS `appointment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `appointment` (
  `appt_date` date NOT NULL,
  `lunch_type` varchar(1) NOT NULL COMMENT 'Lunch types values - Lunch-A and Lunch-B',
  `time_slot` int(2) NOT NULL COMMENT 'Max time slots in numerical order',
  `student_first_name` varchar(25) DEFAULT NULL,
  `student_last_name` varchar(30) DEFAULT NULL,
  `student_grade` int(11) DEFAULT NULL,
  `student_email` varchar(45) DEFAULT NULL,
  `student_teacher` varchar(30) DEFAULT NULL,
  `student_topic` varchar(20) DEFAULT NULL,
  `file_link` varchar(400) DEFAULT NULL,
  `consultant_id` int(2) DEFAULT NULL,
  `review` varchar(500) DEFAULT NULL,
  `review_date` datetime DEFAULT NULL,
  `create_timestamp` datetime DEFAULT NULL,
  PRIMARY KEY (`appt_date`,`lunch_type`,`time_slot`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointment`
--

LOCK TABLES `appointment` WRITE;
/*!40000 ALTER TABLE `appointment` DISABLE KEYS */;
INSERT INTO `appointment` VALUES ('2019-04-16','A',1,'Vidur','Agaram',11,'d@gmail.com','Norris','STEM',NULL,NULL,'test',NULL,NULL),('2019-04-16','A',2,'Tomas','Castillo',11,'d@gmail.com','Berry','RA Essay',NULL,NULL,'test',NULL,NULL),('2019-04-16','A',3,'Nandu','Agaram',12,'d@gmail.com','Berry','Ra',NULL,NULL,'test',NULL,NULL),('2019-04-16','A',4,'Test','test',11,'d@gmail.com','Norris','STEM',NULL,NULL,'test',NULL,NULL),('2019-04-16','B',1,'Alex','Samson',9,'d@gmail.com','Norris','STEM','',NULL,'The stuff was good. The stuff was good. The stuff was good. The stuff was good .The stuff was good','2019-04-21 23:05:52',NULL),('2019-04-16','B',2,'Jalen','Richardson',9,'d@gmail.com','Norris','STEM',NULL,NULL,'test','2019-04-22 18:46:28','2019-04-21 22:36:11'),('2019-04-16','B',3,'Ethan','Lyons',9,'d@gmail.com','Norris','STEM',NULL,NULL,'The stuff was good','2019-04-21 22:48:15',NULL),('2019-04-16','B',4,'Vidur','Agaram',9,'d@gmail.com','Norris','STEM',NULL,NULL,'test','2019-04-22 22:26:46','2019-04-21 22:55:09'),('2019-04-16','B',5,'Naomi','Nickols',9,'d@gmail.com','Norris','STEM',NULL,NULL,'This is good','2019-04-23 18:50:07','2019-04-21 23:01:43'),('2019-04-17','A',1,'Mike','Krause',9,'d@gmail.com','Skinner','CA',NULL,NULL,'Test','2019-04-22 17:48:00',NULL),('2019-04-17','A',2,'Krithi','Vudu',9,'d@gmail.com','Skinner','CA',NULL,NULL,'test',NULL,NULL),('2019-04-17','A',3,'Anishika','Vudu',9,'d@gmail.com','Skinner','CA',NULL,NULL,'The organs','2019-04-22 18:47:16',NULL),('2019-04-17','A',4,'Kavitha','Vudu',9,'d@gmail.com','Skinner','CA',NULL,NULL,'test',NULL,NULL),('2019-04-23','A',1,'Vidur','Agaram',11,'d@gmail.com','Berry','RA',NULL,NULL,'test',NULL,NULL),('2019-04-23','A',2,'Ravi','Vudu',9,'d@gmail.com','Skinner','CA',NULL,NULL,'test',NULL,NULL),('2019-04-23','A',3,'Nandhitha','Agaram',10,'d@gmail.com','Berry','Hay ',NULL,NULL,'test',NULL,NULL),('2019-04-24','A',1,'Chews','Clues',12,'d@gmail.com','Skinner','RA',NULL,NULL,'','2019-04-22 17:42:56',NULL),('2019-04-24','B',1,'Nandu','Agaram',12,'d@gmail.com','Berry','SA',NULL,NULL,'test',NULL,NULL),('2019-04-24','B',2,'Chews','Clues',11,'d@gmail.com','Skinner','RA',NULL,NULL,'test',NULL,NULL),('2019-04-30','A',1,'Nandhitha','Agaram',10,'d@gmail.com','Norris','SA',NULL,NULL,'test',NULL,NULL),('2019-04-30','A',2,'Nandhitha','Agaram',9,'nandu_venkat@hotmail.com','Berry','Hay ','',NULL,NULL,NULL,'2019-04-25 21:35:32'),('2019-04-30','A',3,'Nandhitha','Agaram',10,'nandu_venkat@hotmail.com','Berry','Hay ','',NULL,NULL,NULL,'2019-04-25 21:38:42'),('2019-04-30','A',4,'Vidur ','Agaram',11,'Vagaram09@gmail.com','Skinner','RA','',NULL,'TEst','2019-04-26 12:27:54','2019-04-26 12:26:25'),('2019-04-30','B',1,'Vidur ','Agaram',10,'nandu_venkat@hotmail.com','Skinner','RA',NULL,NULL,NULL,NULL,'2019-04-25 16:51:53'),('2019-04-30','B',2,'Vidur','Agaram',10,'nandu_venkat@hotmail.com','Norris','Habel',NULL,NULL,NULL,NULL,'2019-04-25 16:53:35'),('2019-04-30','B',3,'Vidur','Agaram',12,'nandu_venkat@hotmail.com','Norris','RA',NULL,NULL,NULL,NULL,'2019-04-25 16:54:36'),('2019-04-30','B',4,'Vidur','Agaram',9,'nandu_venkat@hotmail.com','Norris','RA',NULL,NULL,NULL,NULL,'2019-04-25 16:58:19'),('2019-04-30','B',5,'Vidur','Agaram',10,'nandu_venkat@hotmail.com','Norris','RA',NULL,NULL,NULL,NULL,'2019-04-25 17:01:04'),('2019-04-30','B',6,'Vidur','Agaram',10,'nandu_venkat@hotmail.com','Norris','Habel','https://docs.google.com/document/d/1t2GGg5qzlK-vbxiVTVZUjym7GWrBUGtdFzr8Bk_YJhQ/edit?usp=sharing',NULL,NULL,NULL,'2019-04-25 17:13:12'),('2019-04-30','B',7,'Vidur','Agaram',10,'nandu_venkat@hotmail.com','Norris','RA','https://docs.google.com/document/d/1t2GGg5qzlK-vbxiVTVZUjym7GWrBUGtdFzr8Bk_YJhQ/edit?usp=sharing',NULL,NULL,NULL,'2019-04-25 17:16:18'),('2019-05-01','A',1,'Nandhitha','Agaram',10,'d@gmail.com','Skinner','RA','https://docs.google.com/document/d/1t2GGg5qzlK-vbxiVTVZUjym7GWrBUGtdFzr8Bk_YJhQ/edit?usp=sharing',NULL,'test',NULL,NULL),('2019-05-01','A',2,'Vidur','Agaram',10,'Vagaram09@gmail.com','Berry','RA','',NULL,'This is a test','2019-04-25 21:19:05','2019-04-25 21:18:11'),('2019-05-01','A',3,'Nandhitha','Agaram',10,'nandu_venkat@hotmail.com','Berry','Hay ','',NULL,NULL,NULL,'2019-04-25 21:34:39'),('2019-05-01','B',1,'Nandhitha','Agaram',10,'nandu_venkat@hotmail.com','Norris','RA',NULL,NULL,NULL,NULL,'2019-04-25 16:40:09'),('2019-05-01','B',2,'Nandhitha','Agaram',10,'nandu_venkat@hotmail.com','Berry','RA','',NULL,NULL,NULL,'2019-04-25 21:26:00'),('2019-05-08','B',1,'Nandhitha','Agaram',11,'nandu_venkat@hotmail.com','Berry','RA','',NULL,NULL,NULL,'2019-04-25 22:43:05');
/*!40000 ALTER TABLE `appointment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `r_appl_config`
--

DROP TABLE IF EXISTS `r_appl_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `r_appl_config` (
  `Code` char(3) NOT NULL,
  `Code_type` char(5) NOT NULL,
  `Value` varchar(45) DEFAULT NULL,
  `Comment` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Code`,`Code_type`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='			';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `r_appl_config`
--

LOCK TABLES `r_appl_config` WRITE;
/*!40000 ALTER TABLE `r_appl_config` DISABLE KEYS */;
INSERT INTO `r_appl_config` VALUES ('TS','MAX','10','Max Time Slot');
/*!40000 ALTER TABLE `r_appl_config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `r_appt_date_config`
--

DROP TABLE IF EXISTS `r_appt_date_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `r_appt_date_config` (
  `appt_date` date NOT NULL,
  `Date_type` varchar(10) DEFAULT NULL,
  `Description` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`appt_date`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Appointment date configuration for reserverd and diabled dated';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `r_appt_date_config`
--

LOCK TABLES `r_appt_date_config` WRITE;
/*!40000 ALTER TABLE `r_appt_date_config` DISABLE KEYS */;
INSERT INTO `r_appt_date_config` VALUES ('2019-04-16','DISABLED','Test'),('2019-05-07','RESERVED','Test'),('2019-06-11','RESERVED','this is reserved');
/*!40000 ALTER TABLE `r_appt_date_config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `r_resources`
--

DROP TABLE IF EXISTS `r_resources`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `r_resources` (
  `id_resources` int(11) NOT NULL,
  `resource_title` varchar(45) DEFAULT NULL,
  `resource_desc` mediumtext,
  `resource_link` mediumtext,
  PRIMARY KEY (`id_resources`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `r_resources`
--

LOCK TABLES `r_resources` WRITE;
/*!40000 ALTER TABLE `r_resources` DISABLE KEYS */;
INSERT INTO `r_resources` VALUES (1,'Purdue Owl','Details about APA and MLA formatting, tips to avoid plagiarism, and writing business letters, and resumes.',NULL),(2,'Community for Accredited Online Schools','hosts resources on how to write Argumentative Essays, Descriptive Essay, and Expository Essay, Narrative Essay, and Personal Statements and Applications.',NULL),(3,'University of Wisconsin Writing Center','Walks you though every step of the writing process from start to finish',NULL),(4,'Checklist for Writers','Details about APA and MLA formatting, tips to avoid plagiarism, and writing business letters, and resumes.',NULL);
/*!40000 ALTER TABLE `r_resources` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `r_timeslot`
--

DROP TABLE IF EXISTS `r_timeslot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `r_timeslot` (
  `timeslot_id` int(11) NOT NULL,
  `starttime` varchar(11) DEFAULT NULL,
  `endtime` varchar(11) DEFAULT NULL,
  `active_ind` char(1) DEFAULT NULL,
  `year` varchar(4) DEFAULT NULL,
  `slots` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`timeslot_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `r_timeslot`
--

LOCK TABLES `r_timeslot` WRITE;
/*!40000 ALTER TABLE `r_timeslot` DISABLE KEYS */;
INSERT INTO `r_timeslot` VALUES (1,'12:15','12:47','y',NULL,NULL),(2,'12:47','1:20','y',NULL,NULL);
/*!40000 ALTER TABLE `r_timeslot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `r_user_info`
--

DROP TABLE IF EXISTS `r_user_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `r_user_info` (
  `consultant_id` int(3) NOT NULL,
  `type` varchar(1) DEFAULT NULL,
  `first_name` varchar(25) DEFAULT NULL,
  `last_name` varchar(30) DEFAULT NULL,
  `grade` int(2) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `email_second` varchar(45) DEFAULT NULL,
  `active` varchar(1) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `create_datatime` datetime DEFAULT NULL,
  `create_user` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`consultant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `r_user_info`
--

LOCK TABLES `r_user_info` WRITE;
/*!40000 ALTER TABLE `r_user_info` DISABLE KEYS */;
INSERT INTO `r_user_info` VALUES (1,'A','Elizabeth','Berry',11,'emberry@henrico.k12.va.us',NULL,'A','$2a$10$fw7BtP0XKHFEVbovzLxjtOUqfXfLycNgy.amb/LTWwpDIdNCCTQBW',NULL,NULL),(2,'C','Mia','Brown',12,'hcps-brownmc5@henricostudents.org','bcmiabrown@gmail.com','A','$2a$10$fw7BtP0XKHFEVbovzLxjtOUqfXfLycNgy.amb/LTWwpDIdNCCTQBW',NULL,NULL),(3,'C','Gautam','Chiang',11,'hcps-chiangg1@henricostudents.org','gautamchiang@gmail.com','A','$2a$10$fw7BtP0XKHFEVbovzLxjtOUqfXfLycNgy.amb/LTWwpDIdNCCTQBW',NULL,NULL),(4,'C','Zoe','Fields',12,'hcps-fieldsza@henricostudents.org','emutaht@gmail.com','A','$2a$10$fw7BtP0XKHFEVbovzLxjtOUqfXfLycNgy.amb/LTWwpDIdNCCTQBW',NULL,NULL),(5,'C','Drew','Greene',11,'hcps-greeneac@henricostudents.org','drewgr33ne12@gmail.com','A','$2a$10$fw7BtP0XKHFEVbovzLxjtOUqfXfLycNgy.amb/LTWwpDIdNCCTQBW',NULL,NULL),(6,'C','Sarah','Hossain',10,'hcps-hossains@henricostudents.org','hossain.sarah1716@gmail.com','A','$2a$10$fw7BtP0XKHFEVbovzLxjtOUqfXfLycNgy.amb/LTWwpDIdNCCTQBW',NULL,NULL),(7,'C','Sahil','Jaiswal',12,'hcps-jaiswalsd@henricostudents.org','sdjaiswal@outlook.com','A','$2a$10$fw7BtP0XKHFEVbovzLxjtOUqfXfLycNgy.amb/LTWwpDIdNCCTQBW',NULL,NULL),(8,'C','Emma','Johnson',12,'hcps-johnsoec3@henricostudents.org','johnsoec3@gmail.com','A','$2a$10$fw7BtP0XKHFEVbovzLxjtOUqfXfLycNgy.amb/LTWwpDIdNCCTQBW',NULL,NULL),(9,'C','Kasey','Kiefer',12,'hcps-kieferkl@henricostudents.org','kaseykiefer66@gmail.com','A','$2a$10$fw7BtP0XKHFEVbovzLxjtOUqfXfLycNgy.amb/LTWwpDIdNCCTQBW',NULL,NULL),(10,'C','Jason','Leung',11,'hcps-leungjr2@henricostudents.org','leungjr2works@gmail.com','I','$2a$10$fw7BtP0XKHFEVbovzLxjtOUqfXfLycNgy.amb/LTWwpDIdNCCTQBW',NULL,NULL),(11,'C','Alyssa','Manalo',10,'hcps-manaloaj@henricostudents.org','alyssa.manalo31@gmail.com','A','$2a$10$fw7BtP0XKHFEVbovzLxjtOUqfXfLycNgy.amb/LTWwpDIdNCCTQBW',NULL,NULL),(12,'C','Mollie','Mero',10,'hcps-merome@henricostudents.org','crud132@gmail.com','A','$2a$10$fw7BtP0XKHFEVbovzLxjtOUqfXfLycNgy.amb/LTWwpDIdNCCTQBW',NULL,NULL),(13,'C','Kali','McGough',12,'hcps-mcgoughkm@henricostudents.org','mcgoughkali@gmail.com','A','$2a$10$fw7BtP0XKHFEVbovzLxjtOUqfXfLycNgy.amb/LTWwpDIdNCCTQBW',NULL,NULL),(14,'C','Sarita','Mithal',11,'hcps-mithals@henricostudents.org','saritamithal01@gmail.com','A','$2a$10$fw7BtP0XKHFEVbovzLxjtOUqfXfLycNgy.amb/LTWwpDIdNCCTQBW',NULL,NULL),(15,'C','Ben','Nelson',11,'hcps-nilsonbb@henricostudents.org','bbntsa@gmail.com','I','$2a$10$fw7BtP0XKHFEVbovzLxjtOUqfXfLycNgy.amb/LTWwpDIdNCCTQBW',NULL,NULL),(16,'C','Donovan','Pierce',11,'hcps-piercedm1@henricostudents.org','dmpierce@gmail.com','A','$2a$10$fw7BtP0XKHFEVbovzLxjtOUqfXfLycNgy.amb/LTWwpDIdNCCTQBW',NULL,NULL),(17,'C','Vaishnavi','Ranganathan',11,'hcps-ranganatv@henricostudents.org','oneskyblue2@gmail.com','A','$2a$10$fw7BtP0XKHFEVbovzLxjtOUqfXfLycNgy.amb/LTWwpDIdNCCTQBW',NULL,NULL),(18,'C','Jenna','Sliman',10,'hcps-slimanjn@henricostudents.org','jsliman948@gmail.com','A','$2a$10$fw7BtP0XKHFEVbovzLxjtOUqfXfLycNgy.amb/LTWwpDIdNCCTQBW',NULL,NULL),(19,'C','Alannah','Bell',12,'hcps-bellaj@henricostudents.org','ballaj0801@gmail.com','A','$2a$2a$10$fw7BtP0XKHFEVbovzLxjtOUqfXfLycNgy.amb/LTWwpDIdNCCTQBW',NULL,NULL),(20,'C','Julia','Snow',10,'hcps-snowjs@henricostudents.org','jsnowhome@gmail.com',NULL,'$2a$2a$10$fw7BtP0XKHFEVbovzLxjtOUqfXfLycNgy.amb/LTWwpDIdNCCTQBW',NULL,NULL),(21,'C','Olivia','Wilkinson',11,'hcps-wilkinsoj@henricostudents.org','oliviawilk002@gmail.com','A','$2a$2a$10$fw7BtP0XKHFEVbovzLxjtOUqfXfLycNgy.amb/LTWwpDIdNCCTQBW',NULL,NULL),(25,'A','Vidur','Agaram',11,'vagaram09@gmail.com',NULL,'A','$2a$2a$10$fw7BtP0XKHFEVbovzLxjtOUqfXfLycNgy.amb/LTWwpDIdNCCTQBW',NULL,NULL),(31,'A','Melissa','Daniels',11,'mcdaniels@henrico.k12.va.us',NULL,'A','$2a$2a$10$fw7BtP0XKHFEVbovzLxjtOUqfXfLycNgy.amb/LTWwpDIdNCCTQBW',NULL,NULL);
/*!40000 ALTER TABLE `r_user_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reviews` (
  `appt_Date` date NOT NULL,
  `lunch_type` varchar(1) NOT NULL,
  `time_slot` int(2) NOT NULL,
  `consultant_id` int(11) DEFAULT NULL,
  `review` longtext,
  PRIMARY KEY (`appt_Date`,`lunch_type`,`time_slot`),
  CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`appt_Date`, `lunch_type`, `time_slot`) REFERENCES `appointment` (`appt_date`, `lunch_type`, `time_slot`),
  CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`appt_Date`, `lunch_type`, `time_slot`) REFERENCES `appointment` (`appt_date`, `lunch_type`, `time_slot`),
  CONSTRAINT `reviews_ibfk_3` FOREIGN KEY (`appt_Date`, `lunch_type`, `time_slot`) REFERENCES `appointment` (`appt_date`, `lunch_type`, `time_slot`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES ('2019-04-16','A',1,1,'The apples are good'),('2019-04-23','A',1,3,'The oranges are good');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-26 13:33:27
