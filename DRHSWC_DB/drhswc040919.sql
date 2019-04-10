CREATE DATABASE  IF NOT EXISTS `drhswc` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `drhswc`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: drhswritingcenter
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
  `date` datetime NOT NULL,
  `type` varchar(1) NOT NULL,
  `slot` int(11) NOT NULL,
  `student_first_name` varchar(25) DEFAULT NULL,
  `student_last_name` varchar(30) DEFAULT NULL,
  `student_grade` int(11) DEFAULT NULL,
  `student_teacher` varchar(30) DEFAULT NULL,
  `student_topic` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`date`,`type`,`slot`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointment`
--

LOCK TABLES `appointment` WRITE;
/*!40000 ALTER TABLE `appointment` DISABLE KEYS */;
/*!40000 ALTER TABLE `appointment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `r_consultants`
--

DROP TABLE IF EXISTS `r_consultants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `r_consultants` (
  `consultant_id` int(2) NOT NULL,
  `first_name` varchar(25) DEFAULT NULL,
  `last_name` varchar(30) DEFAULT NULL,
  `grade` int(2) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `email_second` varchar(45) DEFAULT NULL,
  `active` varchar(1) DEFAULT NULL,
  `create_datatime` datetime DEFAULT NULL,
  `create_user` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`consultant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `r_consultants`
--

LOCK TABLES `r_consultants` WRITE;
/*!40000 ALTER TABLE `r_consultants` DISABLE KEYS */;
INSERT INTO `r_consultants` VALUES (1,'Alannah','Bell',12,'hcps-bellaj7@henricostudents.org','bellaj0801@gmail.com','A',NULL,NULL),(2,'Mia ','Brown',12,'hcps-brownmc5@henricostudents.org;','bcmiabrown@gmail.com','A',NULL,NULL),(3,'Gautam','Chiang',11,'hcps-chiangg1@henricostudents.org','gautamchiang@gmail.com','A',NULL,NULL),(4,'Zoe','Fields',12,'hcps-fieldsza@henricostudents.org','emutaht@gmail.com','A',NULL,NULL),(5,'Drew','Greene',11,'hcps-greeneac@henricostudents.org;','drewgr33ne12@gmail.com','A',NULL,NULL),(6,'Sarah','Hossain',10,'hcps-hossains@henricostudents.org','hossain.sarah1716@gmail.com','A',NULL,NULL),(7,'Sahil','Jaiswal',12,'hcps-jaiswalsd@henricostudents.org','sdjaiswal@outlook.com','A',NULL,NULL),(8,'Emma','Johnson',12,'hcps-johnsoec3@henricostudents.org','johnsoec3@gmail.com','A',NULL,NULL),(9,'Kasey','Kiefer',12,'hcps-kieferkl@henricostudents.org','kaseykiefer66@gmail.com','A',NULL,NULL),(10,'Jason','Leung',11,'hcps-leungjr2@henricostudents.org','leungjr2works@gmail.com','A',NULL,NULL),(11,'Alyssa','Manalo',10,'hcps-manaloaj@henricostudents.org','alyssa.manalo31@gmail.com','A',NULL,NULL),(12,'Mollie','Mero',10,'hcps-merome@henricostudents.org','crud132@gmail.com','A',NULL,NULL),(13,'Kali','McGough',12,'hcps-mcgoughkm@henricostudents.org','mcgoughkali@gmail.com','A',NULL,NULL),(14,'Sarita','Mithal',11,'hcps-mithals@henricostudents.org','saritamithal01@gmail.com','A',NULL,NULL),(15,'Ben','Nelson',11,'hcpsnilsonbb@henricostudents.org','bbntsa@gmail.com','A',NULL,NULL),(16,'Donovan','Pierce',11,'hcps-piercedm1@henricostudents.org','dmpierce@gmail.com','A',NULL,NULL),(17,'Vaishnavi','Ranganathan',11,'hcps-ranganatv@henricostudents.org','oneskyblue2@gmail.com','A',NULL,NULL),(18,'Jenna','Sliman',10,'hcps-slimanjn@henricostudents.org','jsliman948@gmail.com','A',NULL,NULL),(19,'Julia','Snow',11,'hcps-snowjs@henricostudents.org','jsnowhome@gmail.com','A',NULL,NULL),(20,'Olivia','Wilkinson',11,'hcps-wilkinsoj@henricostudents.org;','oliviawilk002@gmail.com','A',NULL,NULL),(21,'Vidur','d',11,'hcps-bellaj7@henricostudents.org','bellaj0801@gmail.com','I',NULL,NULL);
/*!40000 ALTER TABLE `r_consultants` ENABLE KEYS */;
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
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reviews` (
  `consultant_id` int(11) NOT NULL,
  `student_first_name` varchar(25) DEFAULT NULL,
  `student_last_name` varchar(30) DEFAULT NULL,
  `grade` int(2) DEFAULT NULL,
  `topic` varchar(20) DEFAULT NULL,
  `teacher` varchar(20) DEFAULT NULL,
  `review` longtext,
  PRIMARY KEY (`consultant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,'Vidur','Agaram',11,'English','berry','Good'),(2,'Alannah','Bell',12,'hcps','bellaj','a');
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

-- Dump completed on 2019-04-09 22:17:32
