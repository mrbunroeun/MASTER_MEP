-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 22, 2026 at 02:43 AM
-- Server version: 8.4.7
-- PHP Version: 8.5.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `master-map`
--

-- --------------------------------------------------------

--
-- Table structure for table `abouts`
--

DROP TABLE IF EXISTS `abouts`;
CREATE TABLE IF NOT EXISTS `abouts` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `video` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `abouts`
--

INSERT INTO `abouts` (`id`, `title`, `description`, `image`, `video`, `is_active`, `created_at`, `updated_at`) VALUES
(3, 'Professional MEP Engineering Company', 'Master MEP Solution Co., Ltd is a professional MEP engineering company in Cambodia.', NULL, 'about/videos/Tx91Vzh3KdMb4HhXoOJn7PvbCLxXbb0K4EpZ9BYK.mp4', 1, '2026-06-21 01:56:31', '2026-06-21 02:08:24');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

DROP TABLE IF EXISTS `cache`;
CREATE TABLE IF NOT EXISTS `cache` (
  `key` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` bigint NOT NULL,
  PRIMARY KEY (`key`),
  KEY `cache_expiration_index` (`expiration`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

DROP TABLE IF EXISTS `cache_locks`;
CREATE TABLE IF NOT EXISTS `cache_locks` (
  `key` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` bigint NOT NULL,
  PRIMARY KEY (`key`),
  KEY `cache_locks_expiration_index` (`expiration`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cta_banners`
--

DROP TABLE IF EXISTS `cta_banners`;
CREATE TABLE IF NOT EXISTS `cta_banners` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `button_text` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `button_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cta_banners`
--

INSERT INTO `cta_banners` (`id`, `title`, `description`, `button_text`, `button_link`, `image`, `is_active`, `created_at`, `updated_at`) VALUES
(2, 'Trusted by Leading Brands in Cambodia', 'Master MEP has worked with leading brands, banks, restaurants, hospitals, retail stores, and commercial developers in Cambodia.', NULL, NULL, 'cta/GM6rryBJ5bi394WcCJoELTo7LnlFI1z7rb9BXdX4.png', 1, '2026-06-21 01:01:45', '2026-06-21 01:01:45');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`),
  KEY `failed_jobs_connection_queue_failed_at_index` (`connection`,`queue`,`failed_at`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faqs`
--

DROP TABLE IF EXISTS `faqs`;
CREATE TABLE IF NOT EXISTS `faqs` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `question` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `answer` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `order` int NOT NULL DEFAULT '0',
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `faqs`
--

INSERT INTO `faqs` (`id`, `question`, `answer`, `order`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'What is MEP engineering?', 'MEP engineering stand for Mechanical, and Plumbing engineering, which includes HVAC systems, electrical systems, plumbing systems, ELV systems, and fire protection systems used in modern buildings.', 1, 1, '2026-06-17 01:19:07', '2026-06-18 08:04:30'),
(2, 'Which areas in Cambodia do you server?', '...........', 2, 1, '2026-06-18 08:06:09', '2026-06-18 08:06:09'),
(3, 'Do you provide free consultations or site?', '.................', 3, 1, '2026-06-18 08:07:28', '2026-06-18 08:07:28'),
(4, 'What services does Master MEP provide?', '................', 4, 1, '2026-06-18 08:08:07', '2026-06-18 08:08:07'),
(5, 'Why should clients choose Master MEP?', '.............................', 5, 1, '2026-06-18 08:08:48', '2026-06-18 08:08:48'),
(6, 'What type of projects do you work on?', '.........................................', 6, 1, '2026-06-18 08:09:31', '2026-06-18 08:09:57');

-- --------------------------------------------------------

--
-- Table structure for table `heroes`
--

DROP TABLE IF EXISTS `heroes`;
CREATE TABLE IF NOT EXISTS `heroes` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `has_link` tinyint(1) NOT NULL DEFAULT '0',
  `link_text` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link_url` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `order` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `heroes`
--

INSERT INTO `heroes` (`id`, `title`, `description`, `image`, `has_link`, `link_text`, `link_url`, `is_active`, `order`, `created_at`, `updated_at`) VALUES
(7, 'MASTER MEP', 'Master MEP Solution Co., Ltd provides professional Mechanical, Electrical, Plumbing (MEP), HVAC, ELV, Fire Protection, and Maintenance Services for commercial buildings, villas, banks, restaurants, hospitals, and industrial projects across Cambodia.', 'hero/lzw2dUaIrJhZCdmDMKt65Ea72eUYcMc101aTJhuk.png', 0, NULL, NULL, 1, 0, '2026-06-17 02:47:58', '2026-06-21 02:22:02'),
(3, 'Wellcome to Home Page', 'Hello My Home Page', 'hero/1tJfR9RhKLRIGKBncEXn2LubamehFuq0oYfxEnN1.png', 1, 'Learn More', '/contact', 1, 0, '2026-06-16 20:17:28', '2026-06-21 02:37:47'),
(4, 'hero project', 'Hom Home Hero project', 'hero/wdtLlK0ozfZrgwi6zhDk8RjPrrkQUdwZ4TA8bCJ6.jpg', 1, 'w', '/projects', 1, 0, '2026-06-16 21:19:54', '2026-06-16 21:56:53'),
(6, 'Home page', 'link to Home page', 'hero/pTW5IRdWUArEZ50MTBp7OyJCrf4qWdjASsi4emuy.jpg', 1, 'link Home', '/', 1, 0, '2026-06-16 23:15:28', '2026-06-16 23:15:28'),
(8, 'About Us', 'Hello about Us', 'hero/gROCCVr0RM8ta1Ovne26AWgW3t6tOyZW56DrC5Ik.jpg', 1, 'Learn More', '/about', 1, 0, '2026-06-17 20:14:15', '2026-06-17 21:24:11');

-- --------------------------------------------------------

--
-- Table structure for table `insights`
--

DROP TABLE IF EXISTS `insights`;
CREATE TABLE IF NOT EXISTS `insights` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `published_date` date DEFAULT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `introduction` text COLLATE utf8mb4_unicode_ci,
  `cta_text` text COLLATE utf8mb4_unicode_ci,
  `layout` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default',
  `highlight_title` text COLLATE utf8mb4_unicode_ci,
  `highlight_body` text COLLATE utf8mb4_unicode_ci,
  `sections_title` text COLLATE utf8mb4_unicode_ci,
  `sections` json DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `insights_slug_unique` (`slug`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `insights`
--

INSERT INTO `insights` (`id`, `slug`, `title`, `category`, `published_date`, `image`, `introduction`, `cta_text`, `layout`, `highlight_title`, `highlight_body`, `sections_title`, `sections`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'introduction-8OYMI', 'HVAC System Installation', 'HVAC', '2026-02-06', 'insights/LPnLHADwvZ9mOcbifXO0TDPHFWjfNw3cNqtAaYou.jpg', 'HVAC systems are essential for maintaining indoor comfort, proper ventilation, and energy efficiency in commercial buildings. A professionally installed HVAC system helps businesses improve operational performance, reduce energy costs, and create a healthier indoor environment for employees and visitors.', 'Need Professional HVAC Installation for Your Commercial Project in Cambodia?', 'dark', 'System Services', 'Services', 'Partner with Master MEP for reliable HVAC design, installation, testing, commissioning, and maintenance services. Our experienced team delivers energy-efficient solutions tailored to your project\'s requirements.', '[{\"body\": \"Selecting the right HVAC system is essential to achieving optimal comfort, energy efficiency, and operational performance. Depending on building size, usage requirements, and budget, common solutions include VRF/VRV systems, split-type air conditioners, AHU/FCU systems, chilled water systems, and air-cooled chillers.\", \"image\": \"insights/sections/i4JHhs2BdAr2Hpk3weR5A3K0O2K3VQTlGNf8DAoC.jpg\", \"title\": \"Choosing the Right HVAC System\"}, {\"body\": \"Professional HVAC installation ensures proper system sizing, efficient airflow distribution, reliable cooling performance, and long-term operational stability. Expert engineering and installation practices help minimize energy consumption, reduce maintenance costs, and maximize equipment lifespan.\", \"image\": \"insights/sections/3tW8iSTuT6ivF32Armp642T1Au0Wi5Vli4I0ZfmE.jpg\", \"title\": \"Importance of Professional Installation\"}, {\"body\": \"Preventive maintenance is key to maintaining peak HVAC performance and system reliability. Our maintenance services help reduce unexpected breakdowns, improve energy efficiency, extend equipment life, and ensure continuous comfort for building occupants.\", \"image\": \"insights/sections/dP7xU4495abSe0TaorVKbswgGD58XYiUenhhKaJR.jpg\", \"title\": \"Long-Term Maintenance Support\"}]', 1, '2026-06-19 19:29:34', '2026-06-19 19:53:06'),
(3, 'why-mep-design-matters', 'MEP Design', 'MEP Design', '2026-02-01', 'insights/ZMfXzTI6Gho53jpZhRxoPkPBWPvihnvCJFLtLBoE.jpg', 'Proper MEP design is one of the most important factors in successful construction projects. Mechanical, electrical, and plumbing systems must work together seamlessly to support building safety, functionality, energy efficiency, and long-term performance.', 'Looking for professional MEP design services in Cambodia?', 'default', 'solutions tailored to your project\'s requirements', NULL, 'Partner with Master MEP Solution for expert engineering design, system planning, installation support, and maintenance services. We deliver reliable, efficient, and cost-effective MEP solutions tailored to your project\'s requirements.', '[{\"body\": \"Comprehensive MEP design improves coordination between architectural, structural, and engineering disciplines. Early planning helps identify potential conflicts, reduce costly changes during construction, and streamline project execution.\", \"image\": \"insights/sections/FCs4RXKeYgeIujoWfTnt0VM8WGabe9oSHDBiqHlZ.jpg\", \"title\": \"Improving Project Coordination\"}, {\"body\": \"Professional MEP design optimizes energy consumption while ensuring compliance with local regulations and international safety standards. Efficient system layouts contribute to lower operating costs and a safer environment for occupants.\", \"image\": \"insights/sections/aEBioXXNtsX4GVklzDpOqmaWrTvKfRuuCuSXcWDk.jpg\", \"title\": \"Energy Efficiency & Safety\"}, {\"body\": \"A properly designed MEP system improves reliability, simplifies maintenance, and extends the lifespan of building infrastructure. Thoughtful engineering decisions help reduce downtime and support sustainable facility operations.\", \"image\": \"insights/sections/pVwuP3h0X4gtxc1R8XOQTMe2r7hZjWAL8Xt6J4bs.jpg\", \"title\": \"Supporting Long-Term Building Performance\"}]', 1, '2026-06-19 20:03:59', '2026-06-19 20:12:04'),
(4, 'benefits-of-preventive-mep', 'Maintenance', 'Maintenance', '2026-02-01', 'insights/2BqPyQ2tHdcWbHmU12qbAf7lQOAcvhEEci8Zrf8d.jpg', 'Preventive maintenance is essential for maintaining reliable building operations and reducing unexpected equipment failures. Regular inspections and servicing help improve system efficiency and long-term performance.', 'Need Reliable Preventive Maintenance Support for Your Building Systems?', 'default', NULL, NULL, 'Master MEP Solution provides comprehensive maintenance services for HVAC, electrical, plumbing, ELV, and fire protection systems. Our experienced team helps keep your facilities operating safely, efficiently, and reliably year-round.', '[{\"body\": \"Scheduled maintenance helps identify potential problems before they become major failures. By addressing issues early, facility owners can improve system reliability, reduce operational risks, and extend equipment lifespan.\", \"image\": \"insights/sections/7UqymJa47HsW6Tw2COrCbMCfDnJQJDSYm1M7BspU.jpg\", \"title\": \"Why Preventive Maintenance Matters\"}, {\"body\": \"HVAC systems, electrical systems, plumbing infrastructure, and fire protection equipment require regular maintenance to operate safely and efficiently. Consistent servicing helps maintain occupant comfort, safety, and productivity.\", \"image\": \"insights/sections/Id0pzsvA5Dby1hoHCtkh8MNcdAGxbtWlJtwWeRBN.jpg\", \"title\": \"Supporting Building Safety & Operations\"}, {\"body\": \"Preventive maintenance reduces repair expenses, minimizes emergency service calls, and improves energy efficiency. Well-maintained systems consume less energy and experience fewer breakdowns, resulting in lower overall operating costs.\", \"image\": \"insights/sections/xRxbs4k4TExsa0jBxBtKkqHO4j1PwaceTqGHoddW.jpg\", \"title\": \"Long-Term Cost Savings\"}]', 1, '2026-06-19 20:03:59', '2026-06-19 20:19:34'),
(5, 'energy-efficient-air-conditioning', 'HVAC', 'HVAC', NULL, 'insights/KQGyLQ4fptHiN1GTntgWzFSdlVpawVf82MTb9nbE.jpg', 'Energy-efficient HVAC systems are essential for reducing operating costs, improving occupant comfort, and supporting sustainable building operations. Modern HVAC technologies help businesses achieve reliable climate control while minimizing energy consumption.', 'Looking for energy-efficient HVAC solutions in Cambodia?', 'default', NULL, NULL, NULL, '[{\"body\": \"Selecting the right HVAC system is critical to maximizing energy performance. Popular solutions include VRF/VRV systems, high-efficiency chillers, smart controls, AHU/FCU systems, and energy recovery ventilation systems designed to meet specific building requirements.\", \"image\": \"insights/sections/fbnYTBwOrRKgC2TfEH2iCLE5ZipYJQnu8flkIoHT.jpg\", \"title\": \"Choosing Energy-Efficient HVAC Systems\"}, {\"body\": \"A well-designed HVAC system ensures balanced airflow, optimal equipment sizing, and efficient temperature control. Professional engineering helps reduce energy waste, improve indoor comfort, and enhance overall system performance.\", \"title\": \"Proper HVAC Design Matters\"}, {\"body\": \"Energy-efficient HVAC systems provide lower utility costs, reduced environmental impact, improved equipment reliability, and enhanced occupant comfort throughout the building lifecycle.\", \"image\": \"insights/sections/PQuhH3uoCCbbv07H3H9zxTqcszOgwqezRJU9ZrHP.jpg\", \"title\": \"Long-Term Operational Benefits\"}]', 1, '2026-06-19 20:03:59', '2026-06-19 20:29:06'),
(6, 'plumbing-design', 'Plumbing', 'Plumbing', NULL, 'insights/pMSPoCOEZ9rQrwo21HeLFdzRmNXgE3ZHyOQVJGg6.jpg', 'Professional plumbing design is essential for delivering reliable water supply, efficient drainage, and sustainable building operations. A properly engineered plumbing system improves performance, reduces maintenance requirements, and supports long-term facility management.', 'Need professional plumbing design and installation services in Cambodia?', 'default', NULL, NULL, 'Master MEP Solution delivers comprehensive plumbing engineering, installation, testing, and maintenance services for commercial, industrial, healthcare, hospitality, and institutional facilities', '[{\"body\": \"Modern plumbing systems typically include water supply systems, drainage systems, sewage systems, stormwater systems, water tanks, and water pump systems.\", \"image\": \"insights/sections/LuPDskfw2MDIbNjJwi2SHKdDGrk5AHVEseMy6k5W.jpg\", \"title\": \"Key Plumbing System Components\"}, {\"body\": \"Well-designed plumbing systems help minimize water leakage risks, improve water pressure stability, and reduce long-term maintenance issues.\", \"image\": \"insights/sections/mp5wVxeCqleBkyMvbgd2MwOqMfCVlAiGN07xSZ03.jpg\", \"title\": \"Reducing Long-Term Problems\"}, {\"body\": \"Professional engineering ensures plumbing systems are designed according to project requirements, local regulations, and industry best practices. Proper system sizing and coordination improve reliability, efficiency, and durability\", \"image\": \"insights/sections/akLIMOHrTFwKLRi9wWvwmGP0chuToaqSgqnbhKkQ.jpg\", \"title\": \"Importance of Professional Engineering\"}]', 1, '2026-06-19 20:03:59', '2026-06-19 20:32:35'),
(7, 'how-to-choose-mep', 'How to Choose an MEP', 'MEP Design', NULL, 'insights/3SDC1LoNGYq3iR9qF2qIrxCTc3iVvJoVmXSApETj.jpg', 'Choosing an experienced MEP contractor is one of the most important decisions during project planning and construction. A qualified contractor brings technical expertise, industry knowledge, and reliable project execution to help deliver safe, efficient, and cost-effective building systems', 'Looking for a trusted MEP contractor in Cambodia?', 'dark', 'Why Professional MEP Contractors Matter', 'Reliable MEP contractors contribute to successful project delivery by improving coordination between disciplines, minimizing construction issues, optimizing building performance, and supporting long-term facility operations. Their expertise helps ensure that building systems operate safely, efficiently, and sustainably.', 'Important Factors to Consider', '[{\"body\": \"An experienced MEP contractor should possess expertise across multiple disciplines, including HVAC systems, electrical systems, plumbing infrastructure, ELV systems, fire protection, and facility maintenance. Strong technical knowledge helps ensure efficient system design, installation, and commissioning.\", \"image\": \"insights/sections/Aqml5LWcQTcAWvLYhupG4VwTSdSqhKTkAtvEcQ5y.jpg\", \"title\": \"Technical Experience\"}, {\"body\": \"Reviewing completed projects provides valuable insight into a contractor\'s capabilities, industry experience, and quality of work. Look for experience in projects similar to yours, whether commercial buildings, hospitals, factories, hotels, banks, or mixed-use developments.\", \"image\": \"insights/sections/MgZ2A7f3goAu5qrgjak3qRQ0BLGHXa0Uv1esmwKO.jpg\", \"title\": \"Project Portfolio\"}, {\"body\": \"Professional contractors should follow recognized engineering standards, quality assurance procedures, safety regulations, and local building codes. Compliance helps reduce project risks and ensures reliable long-term system performance.\", \"image\": \"insights/sections/avLRWxxxLddVyvgxtRbCsxN2FvBe5SNAouIVfE8C.jpg\", \"title\": \"Engineering Standards & Compliance\"}, {\"body\": \"MEP systems require ongoing maintenance throughout their operational life. Selecting a contractor that provides preventive maintenance, technical support, and responsive after-sales service can help maximize system reliability and reduce downtime.\", \"image\": \"insights/sections/569DkFnZyLVfCycisu8dHOrOvrp026QLRzEDYGpz.jpg\", \"title\": \"Maintenance & After-Sales Support\"}]', 1, '2026-06-19 20:03:59', '2026-06-21 02:34:50');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
CREATE TABLE IF NOT EXISTS `jobs` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `queue` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` smallint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

DROP TABLE IF EXISTS `job_batches`;
CREATE TABLE IF NOT EXISTS `job_batches` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `key_highlights`
--

DROP TABLE IF EXISTS `key_highlights`;
CREATE TABLE IF NOT EXISTS `key_highlights` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `number` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'general',
  `order` int NOT NULL DEFAULT '0',
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `key_highlights`
--

INSERT INTO `key_highlights` (`id`, `number`, `title`, `type`, `order`, `is_active`, `created_at`, `updated_at`) VALUES
(1, '០1', 'Experienced MEP Engineering Team', 'general', 1, 1, '2026-06-16 00:54:07', '2026-06-18 20:30:28'),
(2, '02', 'Fast Project timeline   Management', 'general', 1, 1, '2026-06-18 07:46:51', '2026-06-18 07:51:52'),
(3, '03', 'Quality &  compliance Standards', 'general', 3, 1, '2026-06-18 07:51:06', '2026-06-18 07:51:06'),
(4, '04', 'Cost- Effective  Engineering Solutions', 'general', 4, 1, '2026-06-18 07:54:41', '2026-06-18 07:54:41'),
(5, '05', 'Energy-Efficient System Design', 'general', 4, 1, '2026-06-18 07:55:45', '2026-06-18 07:55:45'),
(6, '06', '1-Year Warranty Support', 'general', 5, 1, '2026-06-18 07:56:47', '2026-06-18 07:56:47'),
(7, '07', 'In-House Maintenance Team', 'general', 7, 1, '2026-06-18 07:57:37', '2026-06-18 07:57:37'),
(8, '08', '5% Project payment deposit at the customer', 'general', 8, 1, '2026-06-18 07:58:51', '2026-06-18 07:58:51');

-- --------------------------------------------------------

--
-- Table structure for table `maintenance_benefits`
--

DROP TABLE IF EXISTS `maintenance_benefits`;
CREATE TABLE IF NOT EXISTS `maintenance_benefits` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `points` text COLLATE utf8mb4_unicode_ci,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `maintenance_benefits`
--

INSERT INTO `maintenance_benefits` (`id`, `title`, `image`, `points`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Benefits of Professional Maintenance Services', 'maintenance-benefits/WpHtmQje2Uk2kI1J1P0TrdZW4g4gnTUER2MRd2C0.jpg', 'Reliable system performance year-round\r\nReduced risk of unexpected breakdowns\r\nExtended equipment lifespan\r\nLower long-term repair costs\r\nImproved safety and compliance\r\nFaster response to urgent issues', 1, '2026-06-18 19:39:01', '2026-06-18 19:39:01');

-- --------------------------------------------------------

--
-- Table structure for table `maintenance_categories`
--

DROP TABLE IF EXISTS `maintenance_categories`;
CREATE TABLE IF NOT EXISTS `maintenance_categories` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `points` text COLLATE utf8mb4_unicode_ci,
  `sort_order` int UNSIGNED NOT NULL DEFAULT '0',
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `maintenance_categories`
--

INSERT INTO `maintenance_categories` (`id`, `title`, `image`, `points`, `sort_order`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'HVAC Maintenance', 'maintenance-categories/XwBQXEfC6XgmVOo2VwGpzw0OZC0yD7VYlnmJUzDt.jpg', 'Air conditioner servicing\r\nVRV/VRF maintenance\r\nDuct cleaning\r\nFilter cleaning\r\nCoil cleaning', 1, 1, '2026-06-18 18:46:36', '2026-06-18 18:46:36'),
(2, 'Electrical Maintenance', 'maintenance-categories/DBDYq8cj20ND15HFtYAbWsw64h38t4yXCiInjmAz.jpg', 'MDB/DB maintenance\r\nElectrical troubleshooting\r\nLighting repair\r\nGenerator maintenance\r\nPower system testing\r\nCable inspection', 2, 1, '2026-06-18 18:49:05', '2026-06-18 18:49:05'),
(3, 'ELV Maintenance', 'maintenance-categories/uWsqyFvZFmEDMqeBNkjcBImofr6mVxrLrqmjjCNZ.jpg', 'CCTV maintenance\r\nAccess control servicing\r\nFire alarm testing\r\nLAN & network inspection\r\nIntercom maintenance\r\nBMS system support', 3, 1, '2026-06-18 18:50:13', '2026-06-18 18:50:13'),
(4, 'Plumbing Maintenance', 'maintenance-categories/ez4TS5Q3nPkHjmdhH7kPvctnCq5JNUmEnYSUYdQS.jpg', 'Water leakage repair\r\nDrainage inspection\r\nWater pump maintenance\r\nPipe replacement\r\nWater tank cleaning\r\nPlumbing troubleshooting', 3, 1, '2026-06-18 18:52:36', '2026-06-18 18:52:36');

-- --------------------------------------------------------

--
-- Table structure for table `maintenance_contracts`
--

DROP TABLE IF EXISTS `maintenance_contracts`;
CREATE TABLE IF NOT EXISTS `maintenance_contracts` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `points` text COLLATE utf8mb4_unicode_ci,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `maintenance_contracts`
--

INSERT INTO `maintenance_contracts` (`id`, `title`, `subtitle`, `description`, `points`, `image`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Maintenance Contract', 'Annual Maintenance Maintenance Contract (AMC', 'Master MEP provides Annual Maintenance Contracts (AMC) for commercial buildings and businesses requiring scheduled preventive maintenance and priority technical support.', 'Monthly inspections\r\nQuarterly servicing\r\nSystem performance\r\nScheduled maintenance  planning', 'maintenance-contracts/IfdtEt2ZqHN0DL5q0MZz2STIMz2z1yc344WAtTHN.jpg', 1, '2026-06-18 21:21:40', '2026-06-18 21:25:48');

-- --------------------------------------------------------

--
-- Table structure for table `maintenance_features`
--

DROP TABLE IF EXISTS `maintenance_features`;
CREATE TABLE IF NOT EXISTS `maintenance_features` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scope` text COLLATE utf8mb4_unicode_ci,
  `location` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `timeline` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `maintenance_features`
--

INSERT INTO `maintenance_features` (`id`, `title`, `image`, `scope`, `location`, `timeline`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Caltex @ KPS', 'maintenance/VSC9JlZbbHxWhJPsYg5Ag52ixxVKY6TIoR879w6v.jpg', 'Provided integrated M&E solutions for Caltex @ KPS, covering electrical and ELV systems, air conditioning, and plumbing works. The project focused on delivering efficient building services that support smooth daily operations and long-term reliability.', 'location', 'Phnom Penh', 1, '2026-06-18 03:06:47', '2026-06-18 20:03:01'),
(2, 'ABA Bank Siem Reap', 'maintenance/S5xC4aSvgnMvdx2T7EFJKGhJOw8N6ECiSs8mSTbS.png', 'Successfully delivered a comprehensive electrical installation project for ABA Bank in Siem Reap, including lighting systems and electrical panel setup. The project was completed to ensure safe, reliable, and efficient power distribution that meets modern banking facility requirements.', 'Siem Reap', '2025', 1, '2026-06-18 18:39:43', '2026-06-18 20:04:30');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2026_06_14_043609_add_role_to_users_table', 1),
(5, '2026_06_14_052657_create_heroes_table', 2),
(6, '2026_06_14_080039_create_abouts_table', 3),
(8, '2026_06_14_080040_create_partners_table', 3),
(9, '2026_06_14_080040_create_projects_table', 3),
(10, '2026_06_14_080041_create_faqs_table', 3),
(11, '2026_06_14_080041_create_key_highlights_table', 3),
(12, '2026_06_14_080042_create_cta_banners_table', 3),
(13, '2026_06_16_013139_add_video_url_to_projects_table', 4),
(14, '2026_06_16_020040_create_why_choose_us_table', 4),
(15, '2026_06_16_040003_add_scope_timeline_to_projects_table', 5),
(17, '2026_06_16_065054_add_icon_sort_order_to_why_choose_us_table', 7),
(18, '2026_06_16_083332_add_section_fields_to_why_choose_us_table', 8),
(19, '2026_06_17_025310_add_columns_to_heroes_table', 9),
(20, '2026_06_17_034620_add_link_fields_to_heroes_table', 10),
(21, '2026_06_17_041345_add_link_fields_to_heroes_table', 11),
(22, '2026_06_18_000000_add_video_to_abouts_table', 12),
(23, '2026_06_18_041419_remove_image_from_abouts_table', 13),
(24, '2026_06_18_070754_create_maintenance_features_table', 14),
(25, '2026_06_19_011315_create_maintenance_categories_table', 15),
(26, '2026_06_19_020401_create_maintenance_benefits_table', 16),
(27, '2026_06_19_035611_create_maintenance_contracts_table', 17),
(35, '2026_06_21_062758_add_type_to_key_highlights_table', 24),
(34, '2026_06_20_093345_add_items_to_services_table', 23),
(30, '2026_06_20_014550_create_insights_table', 20),
(31, '2026_06_20_024632_change_sections_title_to_text_in_insights_table', 21),
(33, '2026_06_20_090205_create_services_table', 22);

-- --------------------------------------------------------

--
-- Table structure for table `partners`
--

DROP TABLE IF EXISTS `partners`;
CREATE TABLE IF NOT EXISTS `partners` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `order` int NOT NULL DEFAULT '0',
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `partners`
--

INSERT INTO `partners` (`id`, `name`, `logo`, `website`, `order`, `is_active`, `created_at`, `updated_at`) VALUES
(2, 'Part ner', 'partners/NsiMNRIV5Aq4wUnfZTtvI7ti33G6rZRXyhl6imUG.png', NULL, 0, 1, '2026-06-14 19:14:10', '2026-06-14 19:41:48'),
(3, 'Partner 2', 'partners/gTex4yeaOGmRBtaJkzIwmFSHaARZ0WAdPwrbCGNz.png', NULL, 0, 1, '2026-06-14 19:42:01', '2026-06-14 19:42:07'),
(4, 'Partner 3', 'partners/uR3HGZJW8FO7DlAcF3urVrQBQUPro5rK0zZYbEdp.png', NULL, 0, 1, '2026-06-14 19:42:14', '2026-06-14 19:42:24'),
(5, 'Partner 4', 'partners/ofiJr99f8HuoojN54iI1xKvpIot554vmqFiVm9WL.png', NULL, 0, 1, '2026-06-14 19:42:30', '2026-06-14 19:43:10'),
(6, 'Partner 5', 'partners/jJHARn9omthrnaohZSiwusXRpctGI5BZaiCAEDiW.png', NULL, 0, 1, '2026-06-14 19:42:35', '2026-06-14 20:07:11'),
(7, 'Partner 6', 'partners/gUj4VgUFdUqeXRK5b6uq5SFntPQyxqWmIEmmV2sp.png', NULL, 0, 1, '2026-06-14 19:42:42', '2026-06-14 19:42:42');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
CREATE TABLE IF NOT EXISTS `password_reset_tokens` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
CREATE TABLE IF NOT EXISTS `projects` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `scope` text COLLATE utf8mb4_unicode_ci,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'commercial',
  `location` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `timeline` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `video_url` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `order` int NOT NULL DEFAULT '0',
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `title`, `description`, `scope`, `image`, `category`, `location`, `timeline`, `video_url`, `order`, `is_active`, `created_at`, `updated_at`) VALUES
(5, 'Leng Navatra Capital Plc', 'Electrical Work\r\nAir Conditioning Work\r\nPlumbing Work', 'Scope of work:', 'projects/P7KA7UYUwrY2QHRvYPaV0UD3Po89F9cWQMnXKocF.jpg', 'Commercial Buildings', 'Phnom Penh', '2025', NULL, 0, 1, '2026-06-15 20:56:08', '2026-06-21 01:14:34'),
(6, 'Commercail Buildings', NULL, NULL, 'projects/XtOlaEnBMp1ram7mhDZ81HEIt0Vqz3wDiorYCQuh.jpg', 'Commercial Buildings', 'Phnom Penh', '2025', NULL, 0, 1, '2026-06-15 21:38:56', '2026-06-21 01:15:52'),
(7, 'Maline 6th Floor', 'TBC', 'Scope of Work:', NULL, 'Commercial Buildings', 'Phnom Penh', '2025', NULL, 0, 1, '2026-06-18 21:37:13', '2026-06-21 01:12:51'),
(8, 'Restaurants & Cafés', 'Electrical System\r\nPlumbing System\r\nAir Conditioning System', 'Scope of work:', 'projects/W9j7vgFVOkDmTj6nvyrQP8EgURgF3dOAawAgzTpx.jpg', 'Restaurants & Cafés', 'Siem Reap', '2020', NULL, 0, 1, '2026-06-21 01:08:18', '2026-06-21 01:08:18'),
(9, 'Canteen @ Techo Santepheap National Hospital', 'Fresh Air System\r\nExhaust Ventilation System\r\nDucting Installation\r\nVentilation Design', 'Scope of work:', 'projects/GdkA7yr4HypClaqz8EraS8WxS5kXQa3IrNj82Fny.png', 'Hospitals', 'Phnom Penh', '2025', NULL, 0, 1, '2026-06-21 01:10:02', '2026-06-21 01:10:02');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
CREATE TABLE IF NOT EXISTS `services` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tagline` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `benefits_title` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `benefits_points` text COLLATE utf8mb4_unicode_ci,
  `items` json DEFAULT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'mechanical',
  `button_text` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `button_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `order` int NOT NULL DEFAULT '0',
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `title`, `tagline`, `description`, `benefits_title`, `benefits_points`, `items`, `image`, `type`, `button_text`, `button_link`, `order`, `is_active`, `created_at`, `updated_at`) VALUES
(5, 'Core Services  Overview', NULL, 'Professional air conditioning, VRV/VRF, chiller systems, ventilation systems, cold rooms, ducting, and fire protection installation services for commercial and industrial projects.', NULL, NULL, NULL, 'services/dEkeEUELPV43NgM97aY4TQd7VWLaw4n4jhHdrekC.jpg', 'mechanical', 'Learn More About  Mechanical Systems', NULL, 1, 1, '2026-06-20 01:07:23', '2026-06-20 01:22:53'),
(4, 'Plumbing Services', NULL, 'Water supply systems, drainage systems, sewage systems, stormwater systems, water pumps, water heaters, and underground water tank installation services.', NULL, NULL, '[{\"image\": \"services/items/819IXjh0vjfctF4k8D0Sv1wdLnSlRKt8ZH4XwO5r.jpg\", \"title\": \"Lighting Systems\", \"points\": \"Indoor Lighting\\r\\nOutdoor Lighting\\r\\nLandscape Lighting\\r\\nSmart Lighting Control\"}, {\"image\": \"services/items/a52Q54KaCfeq5H6HLfcMqsQTJAEBZRFdTrwmPswc.jpg\", \"title\": \"Drainage Systems\", \"points\": \"Soil Pipe Systems\\r\\nWaste Pipe Systems\\r\\nVent Pipe Systems\\r\\nStormwater Drainage\"}, {\"image\": \"services/items/Ib4fkuwPBKhbqZYB6hkSR4rGGBeZbNwk54uR8e3n.jpg\", \"title\": \"Water Equipment\", \"points\": \"Underground Water Tanks\\r\\nOverhead Water Tanks\\r\\nWater Pump Systems\"}, {\"image\": \"services/items/8jMi8ADbd4LYo9JosPA3M28iquC32A7hBbXmznY8.jpg\", \"title\": \"Plumbing Support\", \"points\": \"Plumbing Design\\r\\nPipe Installation\\r\\nMaintenance & Repair\"}]', 'services/I2kNfVxo2vXQumJ9reZeT1J2XI31KKs7nXXs0cOB.png', 'plumbing', 'View Plumbing Solutions', '/services/plumbing', 3, 1, '2026-06-19 00:22:34', '2026-06-21 00:47:51'),
(7, 'Electrical & ELv', 'Benefits of Professional Electrical Systems', 'We provide complete electrical and ELV engineering services focused on safety, efficiency, compliance, and long-term operational reliability for commercial buildings, banks, offices, restaurants, and industrial facilities.', 'Benefits of Professional Electrical Systems', 'Improve operational safety\r\nReliable power distribution\r\nBetter security systems\r\nEnergy-efficient lighting\r\nReduced downtime risks\r\nLong-term building reliability', '[{\"image\": \"services/items/RBvUb56zGFyI6USbTWUgKezcD6yMyZOy5ISapAuK.jpg\", \"title\": \"Electrical Systems\", \"points\": \"MDB Installation\\r\\nSMDB Installation\\r\\nDB Systems\\r\\nTransformer Installation\\r\\nPower Supply Systems\"}, {\"image\": \"services/items/ZdCVshZsw1ZRVhMSaynKRDc9ZwmsJLobLDPeHpKm.jpg\", \"title\": \"Lighting Systems\", \"points\": \"Indoor Lighting\\r\\nOutdoor Lighting\\r\\nLandscape Lighting\\r\\nSmart Lighting Control\"}, {\"image\": \"services/items/ObFqAbwpHtilNIXVjqhauuI1T0sW3ifmcuHF8ioq.jpg\", \"title\": \"ELV Systems\", \"points\": \"CCTV Systems\\r\\nAccess Control Systems\\r\\nFire Alarm Systems\\r\\nIntrusion Alarm Systems\\r\\nLAN Cabling\\r\\nWi-Fi Systems\\r\\nPA Systems\\r\\nBMS Systems\"}, {\"image\": \"services/items/OXNI3pr7Bf4wujQ7LvIRhi9XtgwDLHS8a1980afM.jpg\", \"title\": \"Backup Systems\", \"points\": \"Generator Installation\\r\\nUPS Systems\\r\\nBattery Backup System\"}]', 'services/nvkYmP7D5TEDSH9RK3vc8eHCo640598LfGp6DOk4.jpg', 'electrical', NULL, '/services/electrical', 1, 1, '2026-06-20 06:00:47', '2026-06-20 06:05:22');

-- --------------------------------------------------------

--
-- Table structure for table `service_items`
--

DROP TABLE IF EXISTS `service_items`;
CREATE TABLE IF NOT EXISTS `service_items` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `service_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `points` text COLLATE utf8mb4_unicode_ci,
  `order` int NOT NULL DEFAULT '0',
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `service_items`
--

INSERT INTO `service_items` (`id`, `service_type`, `title`, `image`, `points`, `order`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'plumbing', 'Hello Blug in', 'services/kNiwtQCP1a15Fto2zTeSQoiL90AJeIPQDOYqtldn.png', NULL, 0, 1, '2026-06-16 19:00:17', '2026-06-16 19:00:17'),
(2, 'plumbing', 'dsdc', 'services/ZpAQzUA4BDrKu9y5KNUeJ4WW8dbf1rTi7u9APgV1.png', NULL, 3, 1, '2026-06-16 19:01:25', '2026-06-16 19:01:25'),
(3, 'plumbing', 'helo', 'services/JBPWfia0inOGt1KjGPljhgNBSKFmyhCfkffeClPT.png', NULL, 1, 1, '2026-06-16 19:03:18', '2026-06-16 19:03:18'),
(4, 'plumbing', 'Hello Plumbig', 'services/4tardXupiFWDCje4JWhIHGVfdgcBdhrdIFg9aVHx.jpg', 'Hello Wolrd', 0, 1, '2026-06-16 19:56:55', '2026-06-16 19:56:55'),
(5, 'plumbing', 'Hello Plumbing', 'services/8VUDWJRSXPiLmH8LqLFOxCsrKtYtv8iUZ2z1lTih.jpg', 'my plumBing', 0, 1, '2026-06-16 20:19:06', '2026-06-16 20:19:06'),
(6, 'electrical', 'Electrical Systems (lv)', 'services/ja56OpBh7F4XhBOCCfJwcHJD6vfrjEhlESAJlIZg.jpg', 'Main power supply \r\nTransformer installation', 1, 1, '2026-06-17 19:33:27', '2026-06-17 19:33:27'),
(7, 'electrical', 'Lighting Systems', NULL, 'Indoor lighting\r\nOutdoor Lighting \r\nLandscape Lighting \r\nSmart Lighting control', 2, 1, '2026-06-17 19:36:51', '2026-06-17 19:36:51'),
(8, 'mechanical', 'Ai conditioning Systems', 'services/zutrUO1iFQCSCg364AhEvxiLYpAissHUn1P5tRfH.jpg', 'Split Type AC\r\nCassette AC \r\nWall Mounted AC', 2, 1, '2026-06-17 19:40:17', '2026-06-18 02:31:57'),
(9, 'mechanical', 'machanical /HVAC', 'services/apuGA1WrPlS0mG4MlfiPolPRRTb9DoeMxkMrq1ix.jpg', 'hello \r\nhello\r\nhello\r\nhello', 1, 1, '2026-06-18 02:16:19', '2026-06-18 02:16:19');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
CREATE TABLE IF NOT EXISTS `sessions` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `role`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Super Admin', 'admin@example.com', 'admin', NULL, '$2y$12$sbBicK4u7o1CyZvYVSZGTOfTVhMaqcHuEL.tvU2na1JjoDY1qpRPW', 'O2T83FkQ376HigMO9Lg2l46uYjvTV1sxOWXL9yzAbivE4JuNGpi0G2gj0Odn', '2026-06-13 22:20:06', '2026-06-13 22:25:31');

-- --------------------------------------------------------

--
-- Table structure for table `why_choose_us`
--

DROP TABLE IF EXISTS `why_choose_us`;
CREATE TABLE IF NOT EXISTS `why_choose_us` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `icon` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'CheckCircle',
  `sort_order` int NOT NULL DEFAULT '0',
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `main_description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `section_label` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `section_title` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `order` int NOT NULL DEFAULT '0',
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `why_choose_us`
--

INSERT INTO `why_choose_us` (`id`, `title`, `description`, `icon`, `sort_order`, `image`, `main_description`, `section_label`, `section_title`, `order`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Hello chose us', 'why learn IT?', 'CheckCircle', 0, NULL, NULL, NULL, NULL, 0, 1, '2026-06-15 23:38:40', '2026-06-15 23:38:40'),
(2, 'hello', 'heloo', 'Clock', 1, 'whychooseus/dBZl8c9AsD9Xrq6p3jsFTnhUHKC2tu1tjUbdHyyt.jpg', NULL, NULL, NULL, 0, 1, '2026-06-16 01:42:02', '2026-06-16 01:42:02');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
