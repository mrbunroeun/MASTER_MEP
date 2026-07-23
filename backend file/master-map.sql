-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 20, 2026 at 03:04 PM
-- Server version: 11.8.8-MariaDB-log
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u666521654_mastermap`
--

-- --------------------------------------------------------

--
-- Table structure for table `abouts`
--

CREATE TABLE `abouts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(191) DEFAULT NULL,
  `video_url` varchar(500) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `abouts`
--

INSERT INTO `abouts` (`id`, `title`, `description`, `image`, `video_url`, `is_active`, `created_at`, `updated_at`) VALUES
(4, 'Professional MEP Engineering & Installation Company in Cambodia', 'Master MEP Solution Co., Ltd is a professional MEP engineering company in Cambodia specializing in HVAC systems, electrical systems, ELV systems, plumbing systems, fire protection systems, and maintenance services. Since its establishment, the company has successfully delivered engineering solutions for commercial, residential, hospitality, and industrial projects.', NULL, 'https://youtu.be/zkhUrZgPjSI?si=KJg3BwaoT6C-QvFY', 1, '2026-07-17 21:15:07', '2026-07-17 21:15:07');

-- --------------------------------------------------------

--
-- Table structure for table `activities`
--

CREATE TABLE `activities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) NOT NULL,
  `category` varchar(191) NOT NULL,
  `activity_date` date NOT NULL,
  `excerpt` text DEFAULT NULL,
  `content` longtext DEFAULT NULL,
  `image` varchar(191) DEFAULT NULL,
  `gallery_images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `activities`
--

INSERT INTO `activities` (`id`, `title`, `category`, `activity_date`, `excerpt`, `content`, `image`, `gallery_images`, `is_active`, `created_at`, `updated_at`) VALUES
(2, 'Master MEP Expands Solar Installation Services', 'Company News', '0026-03-06', 'We\'re excited to announce the expansion of our solar PV installation services, now offering on-grid, off-grid, and hybrid systems for residential and industrial clients.', NULL, NULL, NULL, 1, '2026-07-05 19:31:46', '2026-07-05 19:31:46'),
(3, 'Technical Team Completes Advanced HVAC Certification', 'Training', '2026-04-04', 'expert', '<ol><li><p></p></li></ol><p><strong>HVAC System Installation Guide for Commercial Buildings in Cambodia</strong></p><p><strong>Introduction</strong></p><p><em>HVAC systems are essential for maintaining indoor comfort, ventilation, and energy efficiency in commercial buildings. Proper HVAC installation helps businesses improve operational performance, reduce energy consumption, and create a healthier indoor environment for employees and visitors.</em></p><p><em>Choosing the Right HVAC System</em></p><p>Commercial buildings may require different HVAC solutions depending on building size and operational needs. Common systems include VRV/VRF systems, split-type air conditioners, ventilation systems, chilled water systems, and AHU/FCU systems.</p><p><strong>Importance of Professional Installation</strong></p><p>Professional HVAC installation ensures proper system sizing, efficient airflow, stable cooling performance, and long-term operational reliability. Proper engineering design can also help reduce maintenance costs and improve energy efficiency.</p><p><strong>Long-Term Maintenance Support</strong></p><p>Regular preventive maintenance helps HVAC systems operate efficiently while reducing unexpected breakdowns and extending equipment lifespan.</p><p></p>', 'activities/AuprezQWWwEgKntRwjDL9FIPcXDU7tJhASzlA0rO.jpg', '[\"activities/gallery/g6bpfyVtbyiZ3aoX1pjzFgdyyubad3Cttmkl4bzL.jpg\", \"activities/gallery/a8NtC4PdRTP06FAMJNxDOELWIPvUFOiTske6Qodk.jpg\", \"activities/gallery/pLrzM0eNBufGX0NzmYZqyciRqxPRM5nhZI5fteo1.jpg\", \"activities/gallery/50eKizJpqw9UERynAKv4g1B5VDdqTAM4wQat4vBU.jpg\"]', 1, '2026-07-05 19:32:50', '2026-07-17 02:43:10'),
(4, 'Free Site Survey Program Launched for AMS Customers', 'Site Visit', '2026-03-31', 'We launched a free site survey program to help businesses assess their air conditioning maintenance needs before enrolling in our Annual Maintenance Service.', NULL, NULL, NULL, 1, '2026-07-05 19:33:54', '2026-07-05 19:33:54'),
(7, 'Customer Relationship Building', 'Customer Relationship Building', '2026-07-01', NULL, NULL, NULL, '[]', 1, '2026-07-20 11:02:34', '2026-07-20 11:02:34');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(191) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(191) NOT NULL,
  `owner` varchar(191) NOT NULL,
  `expiration` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `category_galleries`
--

CREATE TABLE `category_galleries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category` varchar(191) NOT NULL,
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category_galleries`
--

INSERT INTO `category_galleries` (`id`, `category`, `images`, `created_at`, `updated_at`) VALUES
(1, 'Banks', '[\"category-galleries/DnSanssSFLzVUAoqc09J9v4o8cvLWN8KCNebK7XP.jpg\", \"category-galleries/GHiwYGz5tStKb2sSzVTEyoeQ6J43SOuhdvxaNyx8.jpg\", \"category-galleries/ocqhO2XP9zQMi2eU1dtWB3Ou1bVaG6p46WUhIDfr.png\"]', '2026-07-05 18:51:51', '2026-07-05 18:52:05'),
(2, 'Hospitals', '[\"category-galleries/e9WpLjhcENdhkQ2lScNqhoPLWNpkLp89WptRsvqW.png\", \"category-galleries/rTsgRQ2SHjhC8B9g6GBqfStdXADxB3gVA38ms1Pw.png\", \"category-galleries/6XvQiZurrmIjdCLJtfenC8NpvA4vzjsNv9nGMAPJ.png\"]', '2026-07-07 02:17:11', '2026-07-07 02:17:11'),
(3, 'Restaurants & Cafés', '[\"category-galleries/ViBYew4zMlGZ6WfH62ZYLdMBCFIq9X2ud4SKxGgK.jpg\", \"category-galleries/mSRdZoTUa79sexVjUubLO4nZ32ocLqmJM7GiSRHl.jpg\", \"category-galleries/nrBXz67HXS0dZdhXto54p6WPB7DOb8yDmBNdfTNP.jpg\"]', '2026-07-07 02:23:09', '2026-07-07 02:23:09'),
(4, 'Commercial Buildings', '[\"category-galleries/YSOxMz5pYmCtTa1XzBUR7OSyH7rdiiXnxqFq6oeF.png\", \"category-galleries/r2uDmwHHKYtmldr5DLywm5yKsq4PvlkpB1x0UON6.jpg\", \"category-galleries/GyiGV8OiBjjND43XrlQXWkIHAQpssutpgBZV1nvP.jpg\"]', '2026-07-07 02:27:39', '2026-07-07 02:31:40');

-- --------------------------------------------------------

--
-- Table structure for table `certifications`
--

CREATE TABLE `certifications` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) DEFAULT NULL,
  `image` varchar(191) NOT NULL,
  `order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `certifications`
--

INSERT INTO `certifications` (`id`, `title`, `image`, `order`, `is_active`, `created_at`, `updated_at`) VALUES
(1, NULL, 'certifications/vk2zHsqX5G2R0TizzfkJlAJBEp8YpsvmSsbhybIR.png', 1, 1, '2026-07-06 20:55:19', '2026-07-06 20:55:19'),
(2, NULL, 'certifications/i9rhwKWRGc8nE4xuQmEh0YeT1qfJhMmrrKkC9jiN.jpg', 2, 1, '2026-07-07 05:02:08', '2026-07-07 05:02:08'),
(3, NULL, 'certifications/43SAYNGOwYBzkYg80egobyrq6jRzneikUyxKCypR.jpg', 3, 1, '2026-07-07 05:03:28', '2026-07-07 05:03:28');

-- --------------------------------------------------------

--
-- Table structure for table `cta_banners`
--

CREATE TABLE `cta_banners` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) NOT NULL,
  `description` text DEFAULT NULL,
  `button_text` varchar(191) DEFAULT NULL,
  `button_link` varchar(191) DEFAULT NULL,
  `image` varchar(191) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cta_banners`
--

INSERT INTO `cta_banners` (`id`, `title`, `description`, `button_text`, `button_link`, `image`, `is_active`, `created_at`, `updated_at`) VALUES
(2, 'Trusted by Leading Brands in Cambodia', 'Master MEP has worked with leading brands, banks, restaurants, hospitals, retail stores, and commercial developers in Cambodia.', NULL, NULL, 'cta/GM6rryBJ5bi394WcCJoELTo7LnlFI1z7rb9BXdX4.png', 1, '2026-06-21 01:01:45', '2026-06-21 01:01:45');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) NOT NULL,
  `connection` varchar(100) NOT NULL,
  `queue` varchar(100) NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faqs`
--

CREATE TABLE `faqs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `question` varchar(191) NOT NULL,
  `answer` text NOT NULL,
  `order` int(11) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
-- Table structure for table `feature_project_cards`
--

CREATE TABLE `feature_project_cards` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) NOT NULL,
  `description` text DEFAULT NULL,
  `location` varchar(191) DEFAULT NULL,
  `timeline` varchar(191) DEFAULT NULL,
  `image` varchar(191) DEFAULT NULL,
  `link` varchar(191) DEFAULT NULL,
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `feature_project_cards`
--

INSERT INTO `feature_project_cards` (`id`, `title`, `description`, `location`, `timeline`, `image`, `link`, `sort_order`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Techo Santepheap National Hospital', 'Fresh Air System\r\nExhaust Ventilation\r\nDucting Installation', 'Phnom Penh', '2025', 'feature-project-cards/elJw0QLlrj0915SRUqJuwIKUG2G5t5YwbZOFOcYL.png', '/services/mechanical', 1, 1, '2026-07-18 22:28:00', '2026-07-18 23:04:59'),
(2, 'ABA Bank Siem Reap', 'Electrical Installation\r\nLighting Systems\r\nElectrical Panels', 'Siem Reap', '2025', 'feature-project-cards/qpUIPWSICWFOzQseAdoevO3eOloH8D7QatczraqG.jpg', '/services/electrical', 1, 1, '2026-07-18 23:04:09', '2026-07-18 23:04:09'),
(3, 'Commercial Building 7F @ TK', 'Plumbing Systems\r\nDrainage Systems\r\nMEP Design', 'Phnom Penh', '2025', 'feature-project-cards/cun9ihmhaz3tx9RLGTcCdFN0VAPFDIhK08BlGoKb.jpg', '/services/plumbing', 1, 1, '2026-07-19 07:47:07', '2026-07-19 07:47:07');

-- --------------------------------------------------------

--
-- Table structure for table `heroes`
--

CREATE TABLE `heroes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(191) DEFAULT NULL,
  `has_link` tinyint(1) NOT NULL DEFAULT 0,
  `link_text` varchar(191) DEFAULT NULL,
  `link_url` varchar(191) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `order` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `heroes`
--

INSERT INTO `heroes` (`id`, `title`, `description`, `image`, `has_link`, `link_text`, `link_url`, `is_active`, `order`, `created_at`, `updated_at`) VALUES
(7, 'Home', 'page', 'hero/JPmPfSiGD2Lc8QDdezIdk7VuooEXSAvEUOp0Q5Rn.jpg', 0, NULL, NULL, 1, 0, '2026-06-17 02:47:58', '2026-07-04 01:44:28'),
(3, 'image contect', 'contact', 'hero/zTiqlAd6dsMfPEFAHHAcolFj6O4wmnY0GYyxjMPo.jpg', 0, NULL, NULL, 1, 0, '2026-06-16 20:17:28', '2026-07-04 01:44:38'),
(4, 'hero project', 'Hom Home Hero project', 'hero/aQh1UIcBs47m50EgqtBB6BWA2wm3mMHVXWI4O604.jpg', 1, 'w', '/maintenance', 1, 0, '2026-06-16 21:19:54', '2026-07-01 18:49:36'),
(8, 'About Us', 'Hello about Us', 'hero/nauflLxUdR54Yx4BSCVmM47eo2V6l0CkxqkXqMnL.jpg', 0, NULL, NULL, 1, 0, '2026-06-17 20:14:15', '2026-07-04 01:44:20');

-- --------------------------------------------------------

--
-- Table structure for table `insights`
--

CREATE TABLE `insights` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `slug` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `category` varchar(191) DEFAULT NULL,
  `published_date` date DEFAULT NULL,
  `image` varchar(191) DEFAULT NULL,
  `introduction` text DEFAULT NULL,
  `cta_text` text DEFAULT NULL,
  `layout` varchar(191) NOT NULL DEFAULT 'default',
  `highlight_title` text DEFAULT NULL,
  `highlight_body` text DEFAULT NULL,
  `sections_title` text DEFAULT NULL,
  `sections` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `insights`
--

INSERT INTO `insights` (`id`, `slug`, `title`, `category`, `published_date`, `image`, `introduction`, `cta_text`, `layout`, `highlight_title`, `highlight_body`, `sections_title`, `sections`, `is_active`, `created_at`, `updated_at`) VALUES
(3, 'why-mep-design-matters', 'Why Proper MEP Design Matters for Construction Projects', 'MEP Design', '2026-02-01', 'insights/3xQ9YZCnDe4STZDzIFD6VkO7eH1rHPtMDrNbW1Fe.jpg', 'Proper MEP design is one of the most important factors in successful construction projects. Mechanical, electrical, and plumbing systems must work together efficiently to support building safety, functionality, and long-term performance.', 'Looking for professional MEP design services in Cambodia?', 'default', 'solutions tailored to your project\'s requirements', NULL, NULL, '[{\"body\": \"Well-planned MEP systems help reduce construction conflicts, improve workflow coordination, and minimize costly modifications during the construction phase.\", \"image\": \"insights/sections/Z4PlmNbXnDvkcQkM4i0iJekSQNaBTZKMao3jgQWV.jpg\", \"title\": \"Improving Project Coordination\", \"existing_image\": \"insights/sections/Z4PlmNbXnDvkcQkM4i0iJekSQNaBTZKMao3jgQWV.jpg\"}, {\"body\": \"Professional MEP design helps optimize energy usage, improve system performance, and ensure compliance with engineering and safety standards.\", \"image\": \"insights/sections/9EdWT6rcf9U1ryyPf6IICgyO7CxRQujYvkr59uto.jpg\", \"title\": \"Energy Efficiency & Safety\"}, {\"body\": \"A properly designed MEP system can improve operational efficiency, simplify maintenance, and extend the lifespan of building systems.\", \"image\": \"insights/sections/8lOtLccGR8Zh7SRTmrhaZ45hHdMlgysWZIsqs9mb.jpg\", \"title\": \"Supporting Long-Term Building Performance\", \"existing_image\": \"insights/sections/8lOtLccGR8Zh7SRTmrhaZ45hHdMlgysWZIsqs9mb.jpg\"}]', 1, '2026-06-19 20:03:59', '2026-07-08 00:02:00'),
(4, 'benefits-of-preventive-mep', 'Benefits of Preventive MEP Maintenance Services', 'Maintenance', '2026-02-01', 'insights/cDYZPcpmhanSWDhWJv1RW7GDPyGM9puU8QU2Ylvn.jpg', 'Preventive maintenance is essential for maintaining reliable building operations and reducing unexpected equipment failures. Regular inspections and servicing help improve system efficiency and long-term performance.', 'Need Reliable Preventive Maintenance Support for Your Building Systems?', 'default', NULL, NULL, NULL, '[{\"body\": \"Scheduled maintenance can help reduce breakdown risks, improve energy efficiency, extend equipment lifespan, and lower long-term repair costs for commercial buildings and facilities.\", \"image\": \"insights/sections/q81KdkMpg7eoPl009qe9b1u5nNVxtAMAlESIwjEz.jpg\", \"title\": \"Why Preventive Maintenance Matters\", \"existing_image\": \"insights/sections/q81KdkMpg7eoPl009qe9b1u5nNVxtAMAlESIwjEz.jpg\"}, {\"body\": \"HVAC systems, electrical systems, plumbing infrastructure, and fire protection equipment require regular maintenance to operate safely and efficiently. Consistent servicing helps maintain occupant comfort, safety, and productivity.\", \"image\": \"insights/sections/t2oHtQrYsJw6fWYgEJtPo5Nh6LB5OJnKWNdwezYJ.jpg\", \"title\": \"Supporting Building Safety & Operations\", \"existing_image\": \"insights/sections/t2oHtQrYsJw6fWYgEJtPo5Nh6LB5OJnKWNdwezYJ.jpg\"}, {\"body\": \"HVAC systems, electrical systems, plumbing systems, and ELV systems all require regular maintenance to maintain operational stability and safety.\", \"image\": \"insights/sections/YJSZ0t6hurCh2VXYwv3IpOcacIBz6gnoFBVh0DiE.jpg\", \"title\": \"Supporting Building Safety & Operations\", \"existing_image\": \"insights/sections/YJSZ0t6hurCh2VXYwv3IpOcacIBz6gnoFBVh0DiE.jpg\"}, {\"body\": \"Preventive maintenance helps businesses avoid major repairs and minimize downtime that could affect daily operations.\\r\\ncommerProfessional plumbing design is essential for maintaining reliable water supply, proper drainage, hygiene, and operational safety in modern buildings.\", \"title\": \"Long-Term Cost Savings\"}, {\"body\": \"Modern plumbing systems typically include water supply systems, drainage systems, sewage systems, stormwater systems, water tanks, and water pump systems.\", \"title\": \"Key Plumbing System Components\"}, {\"body\": \"Well-designed plumbing systems help minimize water leakage risks, improve water pressure stability, and reduce long-term maintenance issues.\", \"title\": \"Reducing Long-Term Problems\"}, {\"body\": \"Proper pipe sizing, material selection, system layout, and pressure testing all contribute to long-term plumbing system performance and durability.\", \"title\": \"Importance of Professional Engineering\"}, {\"body\": \"HVAC systems, electrical systems, plumbing systems, and ELV systems all require regular maintenance to maintain operational stability and safety.\", \"title\": \"Supporting Building Safety & Operations\"}, {\"body\": \"Preventive maintenance helps businesses avoid major repairs and minimize downtime that could affect daily operations.\", \"title\": \"Long-Term Cost Savings\"}]', 1, '2026-06-19 20:03:59', '2026-07-08 00:17:54'),
(6, 'plumbing-design', 'Plumbing Design Best Practices for Modern Buildings', 'Plumbing', NULL, 'insights/XPObIcECuMRFUffNbOn13CZ8tUSlCurJv8tOSkPr.jpg', 'Professional plumbing design is essential for maintaining reliable water supply, proper drainage, hygiene, and operational safety in modern buildings.', 'Need professional plumbing design and installation services in Cambodia?', 'default', NULL, NULL, NULL, '[{\"body\": \"Modern plumbing systems typically include water supply systems, drainage systems, sewage systems, stormwater systems, water tanks, and water pump systems.\", \"image\": \"insights/sections/X9pB7x5fFgywm3SdTt9lk3CnwwXtOHvJIqkNhBn2.jpg\", \"title\": \"Key Plumbing System Components\"}, {\"body\": \"Well-designed plumbing systems help minimize water leakage risks, improve water pressure stability, and reduce long-term maintenance issues.\", \"image\": \"insights/sections/UOtX3qkuHxKC1Z00arynwxgqwGixMn5UGuz2gNEj.jpg\", \"title\": \"Reducing Long-Term Problems\", \"existing_image\": \"insights/sections/UOtX3qkuHxKC1Z00arynwxgqwGixMn5UGuz2gNEj.jpg\"}, {\"body\": \"Proper pipe sizing, material selection, system layout, and pressure testing all contribute to long-term plumbing system performance and durability.\", \"image\": \"insights/sections/a0A5jK4XrRMPiplwKnlo2tbG7bhNlUxiyQxMCcU9.jpg\", \"title\": \"Importance of Professional Engineering\", \"existing_image\": \"insights/sections/a0A5jK4XrRMPiplwKnlo2tbG7bhNlUxiyQxMCcU9.jpg\"}]', 1, '2026-06-19 20:03:59', '2026-07-08 00:02:37'),
(8, 'why-proper-mep-design-matters-for-construction-projects-qQYiR', 'HVAC System Installation Guide for Commercial Buildings in Cambodia', 'MEP Design', NULL, 'insights/bXNw1fsbPCz2eH8DMr9WTYns0SOi2cI4YAolGM7T.jpg', 'HVAC systems are essential for maintaining indoor comfort, ventilation, and energy efficiency in commercial buildings. Proper HVAC installation helps businesses improve operational performance, reduce energy consumption, and create a healthier indoor environment for employees and visitors.', 'Looking for professional MEP design services in Cambodia?', 'default', NULL, NULL, 'Choosing the Right HVAC System', '[{\"body\": \"Commercial buildings may require different HVAC solutions depending on building size and operational needs. Common systems include VRV/VRF systems, split-type air conditioners, ventilation systems, chilled water systems, and AHU/FCU systems.\", \"image\": \"insights/sections/mldDQ0sh5SblAuMHqYIPJFMrugJZCM6GlhgAV090.jpg\", \"title\": \"Choosing the Right HVAC System\", \"existing_image\": \"insights/sections/mldDQ0sh5SblAuMHqYIPJFMrugJZCM6GlhgAV090.jpg\"}, {\"body\": \"Commercial buildings may require different HVAC solutions depending on building size and operational needs. Common systems include VRV/VRF systems, split-type air conditioners, ventilation systems, chilled water systems, and AHU/FCU systems.\", \"title\": \"Choosing the Right HVAC System\"}, {\"body\": \"Professional HVAC installation ensures proper system sizing, efficient airflow, stable cooling performance, and long-term operational reliability. Proper engineering design can also help reduce maintenance costs and improve energy efficiency.\", \"title\": \"Importance of Professional Installation\"}, {\"body\": \"Regular preventive maintenance helps HVAC systems operate efficiently while reducing unexpected breakdowns and extending equipment lifespan.\", \"title\": \"Long-Term Maintenance Support\"}]', 1, '2026-07-01 20:21:34', '2026-07-07 21:48:18'),
(9, 'how-to-choose-an-mep-contractor-in-cambodia', 'How to Choose an MEP Contractor in Cambodia', NULL, NULL, 'insights/ZmfapiY9VGLmh2GlHPTacGJXRd8LaZsoLEOG5WaO.jpg', 'Choosing the right MEP contractor is important for ensuring project quality, safety, efficiency, and long-term building performance.', NULL, 'default', NULL, NULL, NULL, '[{\"title\":\"Important Factors to Consider\",\"body\":\"Technical Experience\\r\\nAn experienced MEP contractor should have expertise in HVAC systems, electrical systems, plumbing systems, ELV systems, and maintenance support.\\r\\nProject Portfolio\\r\\nReviewing completed projects can help evaluate technical capability and industry experience.\\r\\nEngineering Standards & Compliance\",\"existing_image\":\"insights\\/sections\\/IB29soV7nacLLseQQaFdkRR1gUGo1q381ZeGbIIG.jpg\",\"image\":\"insights\\/sections\\/IB29soV7nacLLseQQaFdkRR1gUGo1q381ZeGbIIG.jpg\"}]', 1, '2026-07-08 00:20:49', '2026-07-17 02:38:03');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(191) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` smallint(5) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `key_highlights`
--

CREATE TABLE `key_highlights` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `number` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `type` varchar(191) NOT NULL DEFAULT 'general',
  `order` int(11) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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

CREATE TABLE `maintenance_benefits` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) NOT NULL,
  `image` varchar(191) DEFAULT NULL,
  `points` text DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `maintenance_benefits`
--

INSERT INTO `maintenance_benefits` (`id`, `title`, `image`, `points`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Benefits of Professional Maintenance Services', 'maintenance-benefits/WpHtmQje2Uk2kI1J1P0TrdZW4g4gnTUER2MRd2C0.jpg', 'Reliable system performance year-round\r\nReduced risk of unexpected breakdowns\r\nExtended equipment lifespan\r\nLower long-term repair costs\r\nImproved safety and compliance\r\nFaster response to urgent issues', 1, '2026-06-18 19:39:01', '2026-06-18 19:39:01');

-- --------------------------------------------------------

--
-- Table structure for table `maintenance_categories`
--

CREATE TABLE `maintenance_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) NOT NULL,
  `image` varchar(191) DEFAULT NULL,
  `points` text DEFAULT NULL,
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `maintenance_categories`
--

INSERT INTO `maintenance_categories` (`id`, `title`, `image`, `points`, `sort_order`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'HVAC Maintenance', 'maintenance-categories/G4oDMs7dNp6HMccck0bZUH2YD0lxiX2erCwLYruO.jpg', 'Air conditioner servicing\r\nVRV/VRF maintenance\r\nDuct cleaning\r\nFilter cleaning\r\nCoil cleaning', 1, 1, '2026-06-18 18:46:36', '2026-06-30 23:26:51'),
(2, 'Electrical Maintenance', 'maintenance-categories/s9mRsfw0JQkWupLtpjJWtu4hAw5aA1cJ6j65ZfB7.jpg', 'MDB/DB maintenance\r\nElectrical troubleshooting\r\nLighting repair\r\nGenerator maintenance\r\nPower system testing\r\nCable inspection', 2, 1, '2026-06-18 18:49:05', '2026-06-30 23:27:14'),
(3, 'ELV Maintenance', 'maintenance-categories/dYMedeFYr9LbAHG1vLpi3XiW2JIsiW1jvG2GvywB.jpg', 'CCTV maintenance\r\nAccess control servicing\r\nFire alarm testing\r\nLAN & network inspection\r\nIntercom maintenance\r\nBMS system support', 3, 1, '2026-06-18 18:50:13', '2026-06-30 23:27:27'),
(4, 'Plumbing Maintenance', 'maintenance-categories/iLz71caXX754zdf9MwGh8PH05fBGvQ4irpZgsn9j.jpg', 'Water leakage repair\r\nDrainage inspection\r\nWater pump maintenance\r\nPipe replacement\r\nWater tank cleaning\r\nPlumbing troubleshooting', 3, 1, '2026-06-18 18:52:36', '2026-06-30 23:30:09');

-- --------------------------------------------------------

--
-- Table structure for table `maintenance_contracts`
--

CREATE TABLE `maintenance_contracts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) NOT NULL,
  `subtitle` varchar(191) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `points` text DEFAULT NULL,
  `image` varchar(191) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `maintenance_contracts`
--

INSERT INTO `maintenance_contracts` (`id`, `title`, `subtitle`, `description`, `points`, `image`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Maintenance Contract', 'Annual Maintenance Maintenance Contract (AMC', 'Master MEP provides Annual Maintenance Contracts (AMC) for commercial buildings and businesses requiring scheduled preventive maintenance and priority technical support.', 'Monthly inspections\r\nQuarterly servicing\r\nSystem performance\r\nScheduled maintenance  planning', 'maintenance-contracts/uPXCiKfZ2BMIgKbwVuGGNNDew5UwpeqG6MgSyuKH.jpg', 1, '2026-06-18 21:21:40', '2026-06-30 23:16:25');

-- --------------------------------------------------------

--
-- Table structure for table `maintenance_features`
--

CREATE TABLE `maintenance_features` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) NOT NULL,
  `image` varchar(191) DEFAULT NULL,
  `scope` text DEFAULT NULL,
  `location` varchar(191) DEFAULT NULL,
  `timeline` varchar(191) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
(37, '2026_07_04_000002_backfill_project_images', 25),
(8, '2026_06_14_080040_create_partners_table', 3),
(9, '2026_06_14_080040_create_projects_table', 3),
(10, '2026_06_14_080041_create_faqs_table', 3),
(11, '2026_06_14_080041_create_key_highlights_table', 3),
(12, '2026_06_14_080042_create_cta_banners_table', 3),
(13, '2026_06_16_013139_add_video_url_to_projects_table', 4),
(14, '2026_06_16_020040_create_why_choose_us_table', 4),
(15, '2026_06_16_040003_add_scope_timeline_to_projects_table', 5),
(36, '2026_07_04_000001_create_project_images_table', 25),
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
(33, '2026_06_20_090205_create_services_table', 22),
(38, '2026_07_05_073728_create_services_table', 26),
(39, '2026_07_05_152952_create_category_galleries_table', 27),
(40, '2026_07_05_190338_change_images_column_in_category_galleries_table', 28),
(41, '2026_07_06_021054_create_activities_table', 29),
(42, '2026_07_06_035303_create_team_members_table', 30),
(43, '2026_07_07_014034_create_certifications_table', 31),
(44, '2026_07_07_000001_add_gallery_to_projects_table', 32),
(45, '2026_07_08_012637_create_latest_activities_table', 33),
(46, '2026_07_08_013146_add_content_and_gallery_to_activities_table', 34),
(47, '2026_07_08_020014_drop_latest_activities_table', 35),
(48, '2026_07_18_000000_replace_video_with_video_url_in_abouts_table', 36),
(49, '2026_07_18_010000_create_solar_service_overview_table', 37),
(50, '2026_07_18_010001_create_solar_service_items_table', 37),
(51, '2026_07_18_010002_create_solar_service_benefits_table', 37),
(52, '2026_07_18_020000_add_item_id_to_solar_service_benefits_table', 38),
(53, '2026_07_18_020000_add_card_color_to_solar_service_items_table', 39),
(54, '2026_07_18_020001_set_default_card_colors_on_solar_service_items', 39),
(55, '2026_07_18_030000_add_image_side_to_solar_service_items_table', 40),
(56, '2026_07_19_000000_add_service_id_to_projects_table', 41),
(57, '2026_07_20_000000_create_feature_project_cards_table', 42),
(58, '2026_07_19_010000_add_location_timeline_to_feature_project_cards_table', 43);

-- --------------------------------------------------------

--
-- Table structure for table `partners`
--

CREATE TABLE `partners` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `logo` varchar(191) DEFAULT NULL,
  `website` varchar(191) DEFAULT NULL,
  `order` int(11) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `partners`
--

INSERT INTO `partners` (`id`, `name`, `logo`, `website`, `order`, `is_active`, `created_at`, `updated_at`) VALUES
(2, 'Part ner', 'partners/k53y3qLb1jvc5KtZBuL6MYq6CFr6gSxO0UpkDm6V.png', NULL, 0, 1, '2026-06-14 19:14:10', '2026-07-05 20:31:47'),
(3, 'Partner 2', 'partners/4AAE8vTc0Tb2X7gvbN0bLt8mRzagmyfxpkiqDb0a.png', NULL, 0, 1, '2026-06-14 19:42:01', '2026-07-05 20:31:51'),
(4, 'Partner 3', 'partners/N2JpNwVHn0TRAfbcNVZX274eQvMekUlHt5tA5rJc.png', NULL, 0, 1, '2026-06-14 19:42:14', '2026-07-05 20:31:56'),
(5, 'Partner 4', 'partners/mk8tODvEx3ZkUJP89qyOExJAQjfdRYEQjRGBn6iS.png', NULL, 0, 1, '2026-06-14 19:42:30', '2026-07-05 20:32:02'),
(6, 'Partner 5', 'partners/FrX7pjnkGYRNNXQ0E2x99KqxfiWIesPiT5sUPxPW.png', NULL, 0, 1, '2026-06-14 19:42:35', '2026-07-05 20:32:08');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(191) NOT NULL,
  `token` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) NOT NULL,
  `description` text DEFAULT NULL,
  `scope` text DEFAULT NULL,
  `image` varchar(191) DEFAULT NULL,
  `gallery` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `category` varchar(191) NOT NULL DEFAULT 'commercial',
  `service_id` bigint(20) UNSIGNED DEFAULT NULL,
  `location` varchar(191) DEFAULT NULL,
  `timeline` varchar(191) DEFAULT NULL,
  `video_url` varchar(191) DEFAULT NULL,
  `order` int(11) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `title`, `description`, `scope`, `image`, `gallery`, `category`, `service_id`, `location`, `timeline`, `video_url`, `order`, `is_active`, `created_at`, `updated_at`) VALUES
(8, 'Tube Café TTP', NULL, '* Electrical Work \r\n- Install lighting \r\n- Install socket \r\n- Install electrical panel \r\n\r\n* Air Conditioning Work \r\n- Install wall mounted AC\r\n- Running Copper pipe & Drainage \r\n\r\n* Plumbing Work \r\n- Install cold & Hot water pipe \r\n- Install Soil & waste water pie', 'projects/iLWHRC3DwHVbx48qYEXxYEDV3WHDx9708r1CtYMl.jpg', '[\"projects\\/gallery\\/MpECXIQM23u7RtFhoIqGskged7yPP5ABhZGlF65k.jpg\",\"projects\\/gallery\\/jFHnBz9yWuLt1b1HxOS6cepPj1nlMBXX3lnZ382V.jpg\",\"projects\\/gallery\\/FhJoNdPah5N8ChPMRkAPyvHqYJSXtqP7XgUgd1K3.jpg\"]', 'Restaurants & Cafés', NULL, 'Siem Reap', '2020', NULL, 0, 1, '2026-06-21 01:08:18', '2026-07-17 02:06:54'),
(9, 'Canteen @ Techo Santepheap National Hospital', NULL, '* Ducting System\r\n- Install Fresh Air\r\n- Install Exhaust Fan\r\n\r\n* Design Ventilation System', 'projects/g7toDg9WQc60W2FhKZJydQMm5uQWZzMXU8CsGiza.png', '[\"projects\\/gallery\\/TuC2v7GGWzTLsr62HiOXzrhqya8V8u6GDYQDp3hO.png\",\"projects\\/gallery\\/KJPlpxFDCLjj9Buj7yXsPNZXtqYtfE8bWXd8JD7w.png\",\"projects\\/gallery\\/DNLOO6PIYQe8uZ42Y7WGdYX4C51naET7vmEfCscB.png\"]', 'Hospitals', NULL, 'Phnom Penh', '2025', NULL, 1, 1, '2026-06-21 01:10:02', '2026-07-17 18:33:51'),
(10, 'ABA Bank SR Province', NULL, 'Electrical System\r\nPlumbing System\r\nAir Conditioning System\r\nMEP Design', 'projects/aCfnWJztPfWhWjfVD5ygrRQ7e7B4wRxcdOvnXKqo.jpg', '{\"0\": \"projects/gallery/bY4TOLZTV5mfbxs1zVo1ep1fRNfwx7lkI1MboGW6.jpg\", \"1\": \"projects/gallery/iqtA1Ml5MtS84UEMVopRHTSPc1R7ACgavKbR2RO6.png\", \"2\": \"projects/gallery/obPrDIZaxpDKoMT41HmX8B2tmtRSXhRS2EXw37pw.jpg\", \"3\": null, \"4\": null}', 'Banks', NULL, 'Siem Reap', '2022', NULL, 0, 1, '2026-07-02 00:39:59', '2026-07-07 03:41:54'),
(12, 'Commercial Building 7F @ TK', NULL, '* Electrical Work \r\n- Install lighting \r\n- Install socket \r\n- Install electrical panel \r\n\r\n* Air Conditioning Work \r\n- Install wall mounted AC\r\n- Running Copper pipe & Drainage \r\n\r\n* Plumbing Work \r\n- Install cold & Hot water pipe \r\n- Install Soil & waste water pie\r\n\r\n* MEP Design', 'projects/GQT0HmFx91YgxLOr6tJJry2HSMgrKrycBG2ajvYh.jpg', '[\"projects\\/gallery\\/ruMg3OHkV8mzYPlmrK5pkD9ey6du4zhWBLZhY1ZK.jpg\",\"projects\\/gallery\\/l4lAWfdCLrmFehM0eX4PKddqJ8VFe349z9iEV1Ew.jpg\",\"projects\\/gallery\\/3IS6L6xdd8JprHN8eg24cwP6hW87TmaI0e9KsO4r.jpg\"]', 'Commercial Buildings', NULL, 'Phnom Penh', '2025', NULL, 1, 1, '2026-07-07 03:44:01', '2026-07-17 18:20:15'),
(13, 'Leng Navatra Capital Plc', NULL, '* Electrical Work \r\n- Install lighting \r\n- Install socket \r\n- Install electrical panel \r\n\r\n* Air Conditioning Work \r\n- Install wall mounted AC\r\n- Running Copper pipe & Drainage \r\n\r\n* Plumbing Work \r\n- Install cold & Hot water pipe \r\n- Install Soil & waste water pie', 'projects/XQLXS36gKwCuo0t7IhoZOGc5hOiGApBiGpZWCClZ.jpg', '[\"projects\\/gallery\\/z3M4X799imcQQN2VU60wWld3PGhxX2sEAnIMH6Gh.jpg\",\"projects\\/gallery\\/XPIsTrVEaZoMVP0fAVhNoRWus33FSxCoBwmhdi5k.jpg\"]', 'Commercial Buildings', NULL, 'Phnom Penh', '2021', NULL, 1, 1, '2026-07-07 03:44:57', '2026-07-17 18:32:06'),
(14, 'Caltex @ KPS', NULL, '* Electrical Work \r\n- Install lighting \r\n- Install socket \r\n- Install electrical panel \r\n\r\n* Air Conditioning Work \r\n- Install wall mounted AC\r\n- Running Copper pipe & Drainage \r\n\r\n* Plumbing Work \r\n- Install cold & Hot water pipe \r\n- Install Soil & waste water pie\r\n\r\n* MEP Design', 'projects/ErcmWGyTpcJAGjkfyEll2DWceEYjLZwHr2pENAT1.png', '[\"projects\\/gallery\\/eyYg9sfVQCZnL0hwuZpbmKEcg6SxH4Ty5TG8ZSco.png\",\"projects\\/gallery\\/ZPZxUtr9CThH3GOWbZcPDRiM8kkJr3ZDzt8UgHBv.jpg\",\"projects\\/gallery\\/ECLuETZyI7YxY6PvOBKrtPP5Qz7YqDmVGm66V8b2.jpg\",\"projects\\/gallery\\/I85yOTLNfCUTg3aPzCTdQAwcHt38ijZBaYMiD6IH.jpg\"]', 'Fuel & Industrial Projects', NULL, 'Phnom Penh', '2025', NULL, 1, 1, '2026-07-07 04:37:40', '2026-07-17 18:17:21'),
(15, 'Condo Phnom Penh Thmey', NULL, 'Electrical  Work :\r\nInstall lighting \r\nInstall socket \r\nInstall electrical panel\r\n\r\nAir conditioning Work :\r\nInstall  wall mounted AC \r\nRunning copper pipe & drainage', 'projects/SrfJr2I9dsOaAWZ8BtG3I4yDrwMSXocahMKFRntk.png', '[\"projects/gallery/hb0WRMyCrB6VA3SVn4Ri6Gpi3ObzcztnMtg0ABAn.png\", \"projects/gallery/kUOyei4CXJLeNIWoDOda0U2kklJk6D8g7VGp5PeA.png\", null, null, null]', 'Condo', NULL, NULL, NULL, NULL, 0, 1, '2026-07-07 23:43:21', '2026-07-08 18:54:22'),
(16, 'Master Sukisoup', NULL, '* Electrical Work \r\n- Install lighting \r\n- Install socket \r\n- Install electrical panel \r\n\r\n* Network System \r\n- Install data socket \r\n- Running data cable \r\n- Running camera cable \r\n\r\n* Plumbing Work \r\n- Install cold water & water pipe \r\n- Install Soil & waste water pie', 'projects/aARnnYsLmiCY6VGjyT0k3K127GSVU1G2Klg4mr1g.jpg', '[\"projects\\/gallery\\/ZUwICTaPu8O4h0jDB4Az3B7BB23KgCN7Rb0zGOVD.png\",\"projects\\/gallery\\/gYbSqcyoRbEYsQZTKnzWi0ULKp0Af5O6EXzf6Yg9.png\"]', 'Restaurants & Cafés', NULL, 'Phnom Penh', '2020', NULL, 0, 1, '2026-07-07 23:47:04', '2026-07-17 01:58:12'),
(17, 'Sakura  Buffet Noro Mall', NULL, '* Electrical Work \r\n- Install lighting \r\n- Install socket \r\n- Install electrical panel \r\n\r\n* ELV System \r\n- Install data socket \r\n- Running data cable \r\n- Running camera cable \r\n- Fire Alarm \r\n\r\n* Plumbing Work \r\n- Install cold water & water pipe \r\n- Install Soil & waste water pie', 'projects/0Faq7wHsRgPd73Iht3nRLffdPAtWLwBmjzH2se4N.jpg', '[\"projects\\/gallery\\/0nEVrDAPjCy19Rmw2RAmV0l7rrNdAsPvgn4oqZae.jpg\",\"projects\\/gallery\\/QeXViRCenb8jMRRxkBg5N81eGMViVRoqjvmKaPYz.jpg\",\"projects\\/gallery\\/Fs0ElZwKj5MtYR463g4SRa2KRS3UvyHMBzwIM7Yq.jpg\"]', 'Resort', NULL, 'Phnom Penh', '2020', NULL, 0, 1, '2026-07-07 23:48:42', '2026-07-17 02:04:01'),
(30, 'LUXURY VILA', NULL, '* Electrical Work \r\n- Install lighting \r\n- Install socket \r\n- Install electrical panel \r\n\r\n* Air Conditioning Work \r\n- Install wall mounted AC\r\n- Running Copper pipe & Drainage \r\n\r\n* Plumbing Work \r\n- Install cold & Hot water pipe \r\n- Install Soil & waste water pie', 'projects/g7BgrOOOf2Xt0mvdnCckm8o8WSR5wlaC8tG7PIXC.jpg', '[\"projects\\/gallery\\/vXqu2h8modpqv6NOgDxBzybXmqf2cTmwXvU55Pte.jpg\",\"projects\\/gallery\\/qUKOP6EvYQmhK0IXfzxWMuzbg5Y0IeupY0lKgRLb.jpg\",\"projects\\/gallery\\/AJUyRYq0LuEP1Lj0UlPA5WdoZOewoEQDmNT3DGcp.jpg\",\"projects\\/gallery\\/osnPDkMhvyNsuvenda320SrPECTfReb1lVo3MALZ.jpg\",\"projects\\/gallery\\/8iK9y5qmp5kqEPDws3mBRBKIMZdwq8DQBBapTMwg.jpg\"]', 'Commercial Buildings', NULL, 'Kom Pot', '2020', NULL, 1, 1, '2026-07-17 18:23:22', '2026-07-17 18:23:22'),
(31, 'Keonimol 271', NULL, '* Electrical Work \r\n- Install lighting \r\n- Install socket \r\n- Install electrical panel \r\n\r\n* Air Conditioning Work \r\n- Install wall mounted AC\r\n- Running Copper pipe & Drainage \r\n\r\n* Plumbing Work \r\n- Install cold & Hot water pipe \r\n- Install Soil & waste water pie', 'projects/hOpSwvjKNWUCvLjF2vu2VoqSNgE4M3tGb3l7hvdt.jpg', '[\"projects\\/gallery\\/Y7DIOeazkhyFUUtPet4S3vVU96nvtuCt928Ygffv.jpg\",\"projects\\/gallery\\/k4APuJ2lBwWq3hLZxLkk3jvfpts5oOEVu9ZztFoD.jpg\",\"projects\\/gallery\\/LvbhFF80WF4PjsgaI24vgxYjsFB2fhD80Z66XRNP.jpg\",\"projects\\/gallery\\/x38wEw8dTwPptHEIliF0DszXBOCNpeC5bXHdQOBE.jpg\"]', 'Commercial Buildings', NULL, 'Phnom Penh', '2021', NULL, 1, 1, '2026-07-17 18:25:53', '2026-07-17 18:25:53'),
(32, 'OFFICE & LUXURY VILLA', NULL, '* Electrical Work \r\n- Install lighting \r\n- Install socket \r\n- Install electrical panel \r\n\r\n* Air Conditioning Work \r\n- Install wall mounted AC\r\n- Running Copper pipe & Drainage \r\n\r\n* Plumbing Work \r\n- Install cold & Hot water pipe \r\n- Install Soil & waste water pie', 'projects/e909uhhveV62KUTl7igOMvxXEUas5mUr0Aizw6ve.jpg', '[\"projects\\/gallery\\/5bh38rj3iYPfCj67Ke4Eg1vg3LtQpXxveJocWqTr.jpg\",\"projects\\/gallery\\/98SO8WuVZ23mkUFqKSk7Bn0jDFGTimq32YT0l88G.jpg\",\"projects\\/gallery\\/Zos7V3EgQyJ7hxT1WzeTkPIUEOTMxxvFbZx2tiHB.jpg\",\"projects\\/gallery\\/VuIYcapku8MvRqQzEFlVrKRcrNDpQwz3gjdgTadI.jpg\"]', 'Condo', NULL, 'Phnom Penh', '2020', NULL, 1, 1, '2026-07-17 18:30:22', '2026-07-17 18:30:22'),
(33, 'The Fit Zone', NULL, '* Electrical Work \r\n- Install lighting \r\n- Install socket \r\n- Install electrical panel \r\n\r\n* Air Conditioning Work \r\n- Install wall mounted AC\r\n- Running Copper pipe & Drainage \r\n\r\n* Plumbing Work \r\n- Install cold & Hot water pipe \r\n- Install Soil & waste water pie\r\n\r\n* MEP Design', 'projects/MqWXK5lFmudOTYludnYK5ZtjUtgjIBxqnUzBvbxB.jpg', '[\"projects\\/gallery\\/ofqk9FGzaz2EVtw9qJch9hDmvvBbpZsx2uazHkIc.jpg\",\"projects\\/gallery\\/8X9bLw4P9XveNnsKsqt26yEaVXc7ieacq6EzgWW0.jpg\",\"projects\\/gallery\\/vAa9415z8mQsEW7baCyvQdpkb3YhVCFUY5IrDg5J.jpg\",\"projects\\/gallery\\/2Wv7TKSD4aNRYjkjaPZsvS1jO1k5a7ZK2TGLulCM.jpg\",\"projects\\/gallery\\/E3U7YwVi9dAsC2RuAFPGJkwGre92AKwWaBTyfvM4.jpg\"]', 'Resort', NULL, 'Phnom Penh', '2024', NULL, 1, 1, '2026-07-17 18:37:36', '2026-07-17 18:37:36'),
(34, 'LH Villa', NULL, '* Electrical Work \r\n- Install lighting \r\n- Install socket \r\n- Install electrical panel \r\n\r\n* Air Conditioning Work \r\n- Install wall mounted AC\r\n- Running Copper pipe & Drainage \r\n\r\n* Plumbing Work \r\n- Install cold & Hot water pipe \r\n- Install Soil & waste water pie', 'projects/4FuHc3XVputDuFs1iIMzk5Xx6UWkgwChLVC9cg3F.jpg', '[\"projects\\/gallery\\/XqcbcMbSHzX2WkB3JHk3O9h0mdOLUjRHkrm3WGMP.jpg\",\"projects\\/gallery\\/9z5UGXuHFlaeJkZhLu2YbRtJTplY7R5WRZJhTfJZ.jpg\",\"projects\\/gallery\\/QgBk3RdpAFZRFOjd8K4UET7udp3wdtM2YJawZwDI.jpg\",\"projects\\/gallery\\/uhf1qCAi882wAneizsrCVyUv26rPYcpXiX6jqiHE.jpg\",\"projects\\/gallery\\/PFBOY4opbRg87JQpVqeujnHeDsSFWn0yL1uqlZX1.jpg\"]', 'Commercial Buildings', NULL, 'Phnom Penh', '2024', NULL, 4, 1, '2026-07-17 18:40:34', '2026-07-17 18:40:34'),
(35, 'OBQ7 Clothes Shop', NULL, '* Electrical Work \r\n- Install lighting \r\n- Install socket \r\n- Install electrical panel \r\n\r\n* Air Conditioning Work \r\n- Install wall mounted AC\r\n- Running Copper pipe & Drainage \r\n\r\n* Plumbing Work \r\n- Install cold & Hot water pipe \r\n- Install Soil & waste water pie', 'projects/WLsBN4vPR27lA750CgeckZ5kuBLFObi4GKWR1eJZ.jpg', '[\"projects\\/gallery\\/juL8o6VAcm5Q1bwoHw0ECFN5uE8XYI8SzVbBJadO.jpg\",\"projects\\/gallery\\/nehhfBvHBTLehpcPeFYhqq0SmKJuMcZcsmdcLpaL.jpg\",\"projects\\/gallery\\/5VfXXIxglo9c0pHqfUgzxCN4AtC4GwH88Eik9lT8.jpg\",\"projects\\/gallery\\/E5iDg9rvI6nfLKOL61YYTIjhuvJoPkFF4BUlHvA8.jpg\"]', 'Restaurants & Cafés', NULL, 'Phnom Penh', '2023', NULL, 2, 1, '2026-07-17 19:27:25', '2026-07-17 19:27:25');

-- --------------------------------------------------------

--
-- Table structure for table `project_images`
--

CREATE TABLE `project_images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(191) NOT NULL,
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `project_images`
--

INSERT INTO `project_images` (`id`, `project_id`, `image`, `sort_order`, `created_at`, `updated_at`) VALUES
(1, 5, 'projects/P7KA7UYUwrY2QHRvYPaV0UD3Po89F9cWQMnXKocF.jpg', 0, '2026-07-03 21:20:36', '2026-07-03 21:20:36'),
(2, 6, 'projects/XtOlaEnBMp1ram7mhDZ81HEIt0Vqz3wDiorYCQuh.jpg', 0, '2026-07-03 21:20:36', '2026-07-03 21:20:36'),
(3, 8, 'projects/W9j7vgFVOkDmTj6nvyrQP8EgURgF3dOAawAgzTpx.jpg', 0, '2026-07-03 21:20:36', '2026-07-03 21:20:36'),
(4, 9, 'projects/GdkA7yr4HypClaqz8EraS8WxS5kXQa3IrNj82Fny.png', 0, '2026-07-03 21:20:36', '2026-07-03 21:20:36'),
(12, 10, 'projects/RsLUzWFs1Sc8Ym1D0hAQLi219gitJ7LWUPJEd9sB.jpg', 2, '2026-07-04 00:47:01', '2026-07-04 00:47:01'),
(11, 10, 'projects/FG7y8xXSNSOhpYQK3DDb1EoQxeVIIrYU9NfZs7MY.jpg', 1, '2026-07-04 00:47:01', '2026-07-04 00:47:01'),
(10, 10, 'projects/Ca1JZM3xPfwDJrG7gwlqXO7qdPjmjUc1ebWYW8vH.png', 0, '2026-07-03 23:36:50', '2026-07-04 00:47:01');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` varchar(191) NOT NULL,
  `tagline` varchar(191) DEFAULT NULL,
  `title` varchar(191) NOT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(191) DEFAULT NULL,
  `button_text` varchar(191) DEFAULT NULL,
  `button_link` varchar(191) DEFAULT NULL,
  `benefits_title` varchar(191) DEFAULT NULL,
  `benefits_points` text DEFAULT NULL,
  `order` int(11) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `items` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `type`, `tagline`, `title`, `description`, `image`, `button_text`, `button_link`, `benefits_title`, `benefits_points`, `order`, `is_active`, `items`, `created_at`, `updated_at`) VALUES
(1, 'mechanical', NULL, 'Machanical', 'Professional air conditioning, VRV/VRF, chiller systems, ventilation systems, cold rooms, ducting, and fire protection installation services for commercial and industrial projects.', 'services/jphMVW4oyHpnt2ZHXaZhxfqgnAxSr4lbjGB2ll58.jpg', NULL, '/services/mechanical', NULL, NULL, 1, 1, '[{\"image\": \"services/items/4qEl71EpMvnFOpla7TijH8KO2gK8Ej4WcyG2hy4S.jpg\", \"title\": \"Air Conditioning Systems\", \"points\": \"Split Type AC\\r\\nCassette AC\\r\\nWall Mounted AC\\r\\nVRV / VRF Systems\\r\\nChiller Systems\"}, {\"image\": \"services/items/bWmfv50pF7NwPfOWbYomHvTXD8Zb42leWUYvKjvu.png\", \"title\": \"Ventilation Systems\", \"points\": \"Fresh Air Systems\\r\\nExhaust Systems\\r\\nSmoke Ventilation\"}, {\"image\": \"services/items/dStXYIOWlss5V4l1DvtrMs9Qceg3yn9Z3YFXIf3p.jpg\", \"title\": \"Ducting Systems\", \"points\": \"GI Ducting\\r\\nPre-Insulated Ducts\\r\\nExhaust Duct Installation\"}, {\"image\": \"services/items/RcfqXPagGf5rmWgb2CAR0rHrXTD0XgORs49Oovri.jpg\", \"title\": \"Mechanical Equipment\", \"points\": \"AHU Installation\\r\\nFCU Installation\\r\\nCooling Tower Systems\\r\\nWater Pump Systems\"}, {\"image\": \"services/items/IiFrzO3qOYC5AHOStfuyPB1lNc51fa1h3O7OXMYw.jpg\", \"title\": \"Maintenance Support\", \"points\": \"Preventive HVAC Maintenance\\r\\nCorrective Maintenance\\r\\nTroubleshooting Services\"}]', '2026-07-05 00:55:15', '2026-07-07 03:21:24'),
(2, 'electrical', NULL, 'Electrical & ELV System', 'Complete LV & ELV system installation including MDB, SMDB, CCTV, Fire Alarm, LAN cabling, Wi-Fi systems, BMS systems, access control, and smart lighting solutions.', 'services/6mlvZG2w3utUWeHRPNIlsgOrLHvRvQmRzaANhgIn.jpg', NULL, '/services/electrical', NULL, NULL, 0, 1, '[{\"title\":\"Electrical Systems\",\"points\":\"MDB Installation\\r\\nSMDB Installation\\r\\nDB Systems\\r\\nTransformer Installation\\r\\nPower Supply Systems\",\"image\":\"services\\/items\\/c0LUThbilnSdvh9wTtfdsTgnXJ3yMd4kpXBA0CfO.jpg\"},{\"title\":\"Lighting Systems\",\"points\":\"Indoor Lighting\\r\\nOutdoor Lighting\\r\\nLandscape Lighting\\r\\nSmart Lighting Control\",\"image\":\"services\\/items\\/3nc9fGDPKYif1hfue5Qlk347sRKfJeX10xjZ09rF.jpg\"},{\"title\":\"ELV Systems\",\"points\":\"CCTV Systems\\r\\nAccess Control Systems\\r\\nFire Alarm Systems\\r\\nIntrusion Alarm Systems\\r\\nLAN Cabling\\r\\nWi-Fi Systems\\r\\nPA Systems\\r\\nBMS Systems\",\"image\":\"services\\/items\\/c6BdtcctraGeD7ZUhdP63kG6yVfaI5rcUJGOb2yO.jpg\"},{\"title\":\"Backup Systems\",\"points\":\"Generator Installation\\r\\nUPS Systems\\r\\nBattery Backup System\",\"image\":\"services\\/items\\/lC7JwYf9A6tcnEb2TkSl1QeyhmZYYCv5DW5UiZq5.jpg\"}]', '2026-07-05 02:06:51', '2026-07-17 02:33:19'),
(3, 'plumbing', NULL, 'Plumbing system', NULL, 'services/j6vB2EVoiorRIeBigXtZTUCJexK9iWkjBcUXrA0E.jpg', NULL, '/services/plumbing', NULL, NULL, 0, 1, '[{\"image\": \"services/items/Lrt5yZvJF6vuXBapPuRJf4uxpItcNlzrCJcM7ZFQ.jpg\", \"title\": \"Water Supply Systems\", \"points\": \"Cold Water Systems\\r\\nHot Water Systems\\r\\nWater Heater Systems\"}, {\"image\": \"services/items/Zem4PnbkDrJTsu5pMlauhB2vtdxj1KspaglE4twI.jpg\", \"title\": \"Drainage Systems\", \"points\": \"Soil Pipe Systems\\r\\nWaste Pipe Systems\\r\\nVent Pipe Systems\\r\\nStormwater Drainage\"}, {\"image\": \"services/items/ICWQ9WCUQUrXilCxMb0tLvPIBAswzq6QKIjcnUHO.jpg\", \"title\": \"Water Equipment\", \"points\": \"Underground Water Tanks\\r\\nOverhead Water Tanks\\r\\nWater Pump Systems\"}, {\"image\": \"services/items/it4c6NrS7vqEINMzbyiCw1jrek6CWxmWp38j3bRU.jpg\", \"title\": \"Plumbing Support\", \"points\": \"Plumbing Design\\r\\nPipe Installation\\r\\nMaintenance & Repair\"}]', '2026-07-05 02:16:09', '2026-07-07 03:25:37'),
(4, 'maintenance', NULL, 'Maintence(AMS)', 'Preventive air conditioning maintenance, professional cleaning, system inspections, and performance testing to improve efficiency, reduce breakdowns, and extend equipment lifespan.', 'services/w83ijDXG2PwtbHZvWgtQcUI0SFEhxQZlZ3pXlcMz.jpg', NULL, '/services/maintenance', NULL, NULL, 1, 1, '[{\"title\":\"General Inspection\",\"points\":\"Visual inspection of indoor and outdoor units\\r\\nCheck operating condition\\r\\nCheck abnormal vibration and noise\\r\\nInspect electrical components\",\"image\":\"services\\/items\\/l6kTI5hQvyraDKmvnD8ElkdOoaqtmTg2Byhf2yvQ.jpg\"},{\"title\":\"Professional Cleaning\",\"points\":\"Clean evaporator coil\\r\\nClean condenser coil\\r\\nClean air filters\\r\\nClean drain pipe\\r\\nClean drainage tray\\r\\nRemove dust and debris\",\"image\":\"services\\/items\\/NzWSUXqjyqqPERbHIBQ8azwmH2tR66KqaAPwUbP9.jpg\"},{\"title\":\"Performance Testing\",\"points\":\"Temperature measurement\\r\\nRefrigerant pressure check\\r\\nElectrical current testing\\r\\nCompressor inspection\\r\\nFan motor inspection\\r\\nAirflow testing\"},{\"title\":\"Preventive Maintenance\",\"points\":\"Tighten electrical connections\\r\\nLubricate moving components (where applicable)\\r\\nCheck refrigerant leakage\\r\\nInspect insulation\\r\\nVerify system safety\"},{\"title\":\"Service Report\",\"points\":\"Inspection checklist\\r\\nPerformance report\\r\\nRecommended repairs (if required)\\r\\nPhotos before and after service\\r\\nMaintenance history\"}]', '2026-07-05 02:56:13', '2026-07-18 23:43:50'),
(6, 'solasystem', NULL, 'Solar System Design', NULL, 'services/thfLz4cda3cQgzuf5eSamBtzx2WYsxHMiQ0YFPtu.png', NULL, '/services/solasystem', NULL, NULL, 0, 1, '[{\"title\":\"Solar System Design\",\"points\":\"Energy consumption analysis\\r\\nSite assessment\\r\\nSystem sizing\\r\\nROI calculation\",\"image\":\"services\\/items\\/EgCebRblgJhvCNGlABkRKjlAA0ZF33NXNvHGE4h1.jpg\"},{\"title\":\"Engineering & Installation\",\"points\":\"Solar panel installation\\r\\nInverter installation\\r\\nBattery installation\\r\\nMounting structure installation\\r\\nElectrical wiring\\r\\nGrid connection\"},{\"title\":\"Testing & Commissioning\",\"points\":\"Performance testing\\r\\nSystem verification\\r\\nSafety inspection\\r\\nOperational training\",\"image\":\"services\\/items\\/k1DfiPeML9kUBRJ9dSbSP8cDssEmTPL5CswrfxrM.jpg\"},{\"title\":\"Testing & Commissioning\",\"points\":null},{\"title\":\"Testing & Commissioning\",\"points\":null},{\"title\":\"Testing & Commissioning\",\"points\":null}]', '2026-07-18 07:15:02', '2026-07-18 20:42:20');

-- --------------------------------------------------------

--
-- Table structure for table `service_items`
--

CREATE TABLE `service_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `service_type` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `image` varchar(191) DEFAULT NULL,
  `points` text DEFAULT NULL,
  `order` int(11) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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

CREATE TABLE `sessions` (
  `id` varchar(191) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('trKaNXBhrk9yN39TbWPEhetiE9dCNJHjt2WiBJIh', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36', 'eyJfdG9rZW4iOiJpWTBLaVk5cFU1eVpUVHlTN1U1aUtSMEdXMU5NSXJ2NEZ6aTA2blZyIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cLzEyNy4wLjAuMTo4MDAwXC9hYm91dCIsInJvdXRlIjoiYWJvdXQifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119LCJ1cmwiOnsiaW50ZW5kZWQiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvZGFzaGJvYXJkIn19', 1782811422),
('R3vZLZbLlcMBFWwhAIU3if8fh8zMXPzSs6Uh1vOu', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Code/1.126.0 Chrome/148.0.7778.97 Electron/42.2.0 Safari/537.36', 'eyJfdG9rZW4iOiJnaUlNeG5aS2NXRDdMQXdZWFFab2FQVE5ER1c2SGlwaHRsa3o3MW5jIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cLzEyNy4wLjAuMTo4MDAwIiwicm91dGUiOiJob21lIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1782811493),
('8SGRL7iZhxb2SDz7BnYDamYLtntgXyffyaCibInp', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36', 'eyJfdG9rZW4iOiIxRHBFSlVRUGIwY0V5ZmF5Q2xVMnBOWlJkdnBSa29Oc1NLc1dlYmRRIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cLzEyNy4wLjAuMTo4MDAwXC9hYm91dCIsInJvdXRlIjoiYWJvdXQifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119LCJ1cmwiOnsiaW50ZW5kZWQiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYWRtaW5cL2Fib3V0In19', 1782811508);

-- --------------------------------------------------------

--
-- Table structure for table `solar_service_benefits`
--

CREATE TABLE `solar_service_benefits` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `item_id` bigint(20) UNSIGNED DEFAULT NULL,
  `title` varchar(191) NOT NULL,
  `order` int(11) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `solar_service_benefits`
--

INSERT INTO `solar_service_benefits` (`id`, `item_id`, `title`, `order`, `is_active`, `created_at`, `updated_at`) VALUES
(10, 2, 'Complete energy independence', 1, 1, '2026-07-18 08:57:18', '2026-07-18 08:57:18'),
(11, 2, 'Reliable power in remote areas', 2, 1, '2026-07-18 08:57:33', '2026-07-18 08:57:33'),
(7, 1, 'Lower installation cost', 4, 1, '2026-07-18 08:55:45', '2026-07-18 08:55:45'),
(8, 1, 'Environmentally friendly', 5, 1, '2026-07-18 08:56:00', '2026-07-18 08:56:00'),
(9, 1, 'Ideal for daytime electricity usage', 6, 1, '2026-07-18 08:56:19', '2026-07-18 08:56:19'),
(5, 1, 'No battery maintenance', 2, 1, '2026-07-18 08:55:19', '2026-07-18 08:55:19'),
(6, 1, 'Higher energy efficiency', 3, 1, '2026-07-18 08:55:32', '2026-07-18 08:55:32'),
(4, 1, 'Lower electricity costs', 1, 1, '2026-07-18 08:55:03', '2026-07-18 08:55:03'),
(12, 2, 'Battery backup during cloudy days', 3, 1, '2026-07-18 08:57:45', '2026-07-18 08:57:45'),
(13, 2, 'Suitable for rural developments', 5, 1, '2026-07-18 08:57:56', '2026-07-18 08:57:56'),
(14, 2, 'Continuous electricity supply', 5, 1, '2026-07-18 08:58:15', '2026-07-18 08:58:15'),
(15, 3, 'Reduced electricity bills', 1, 1, '2026-07-18 08:58:50', '2026-07-18 08:58:50'),
(16, 3, 'Backup power during outages', 2, 1, '2026-07-18 08:59:00', '2026-07-18 08:59:00'),
(17, 3, 'Maximum energy security', 1, 1, '2026-07-18 08:59:15', '2026-07-18 08:59:15'),
(18, 3, 'Smart energy management', 4, 1, '2026-07-18 08:59:40', '2026-07-18 08:59:40'),
(19, 3, 'Greater energy independence', 5, 1, '2026-07-18 08:59:51', '2026-07-18 08:59:51'),
(20, 3, 'Ideal for critical business operations', 6, 1, '2026-07-18 09:00:05', '2026-07-18 09:00:05');

-- --------------------------------------------------------

--
-- Table structure for table `solar_service_items`
--

CREATE TABLE `solar_service_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) NOT NULL,
  `best_for` text DEFAULT NULL,
  `how_it_works` text DEFAULT NULL,
  `image` varchar(191) DEFAULT NULL,
  `card_color` varchar(7) DEFAULT NULL,
  `image_side` varchar(8) DEFAULT NULL,
  `order` int(11) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `solar_service_items`
--

INSERT INTO `solar_service_items` (`id`, `title`, `best_for`, `how_it_works`, `image`, `card_color`, `image_side`, `order`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'On-Grid Solar System (No Battery)', 'Homes, offices, commercial buildings, schools, factories, and businesses with reliable electricity from the national grid.', 'An On-Grid Solar System generates electricity during the day to power your building. Any additional electricity can be exported to the utility grid (subject to local regulations), helping reduce your monthly electricity bills', 'services/D50TFDAab60UokuNOlLN0OCUEfzOExjR3II3YS7t.png', '#EAF3FC', 'left', 1, 1, '2026-07-18 05:26:39', '2026-07-18 08:47:15'),
(2, 'Off-Grid Solar System (Battery Storage)', 'Remote villages, farms, construction sites, telecommunication stations, resorts, and locations without access to the electricity grid.', 'An Off-Grid Solar System stores solar energy in batteries, allowing electricity to be used day and night without relying on the national power grid.', 'services/4Ly8HTHZErAzCMtdrlrFA82fGaQdJprOVuTgWR1A.jpg', NULL, 'right', 2, 1, '2026-07-18 06:28:19', '2026-07-18 08:50:21'),
(3, 'Hybrid Solar System (Grid + Battery)', 'Businesses, hospitals, hotels, factories, offices, villas, and customers requiring uninterrupted power', 'A Hybrid Solar System combines solar panels, battery storage, and the utility grid. During the day, solar power is used first. Excess energy charges the batteries, while the grid provides additional backup when needed.', 'services/DThBnj2dGUHvlD2u18YG140IhWSqSH61F6pMTkW3.jpg', '#EAF3FC', 'left', 3, 1, '2026-07-18 06:30:11', '2026-07-18 08:50:28');

-- --------------------------------------------------------

--
-- Table structure for table `solar_service_overview`
--

CREATE TABLE `solar_service_overview` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) NOT NULL,
  `subtitle` varchar(191) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `solar_service_overview`
--

INSERT INTO `solar_service_overview` (`id`, `title`, `subtitle`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Overview', 'Smart Solar Energy Solutions for Every Building', 'Master MEP Solution specializes in designing and installing customized solar photovoltaic (PV) systems that help reduce electricity costs while supporting sustainable energy goals. Whether you need an on-grid system for lower utility bills, an off-grid solution for remote locations, or a hybrid system with battery backup, our experienced engineers deliver reliable, efficient, and long-lasting solar installations.', '2026-07-18 03:59:57', '2026-07-18 04:04:46');

-- --------------------------------------------------------

--
-- Table structure for table `team_members`
--

CREATE TABLE `team_members` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `position` varchar(191) DEFAULT NULL,
  `image` varchar(191) DEFAULT NULL,
  `order` int(11) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `team_members`
--

INSERT INTO `team_members` (`id`, `name`, `position`, `image`, `order`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Mr. Len Somoun', 'Founder/CEO', 'team/jFZeYzG15j7jAbEe8hcnTUHfWVXDYvJZSaFMyLPj.jpg', 1, 1, '2026-07-05 21:06:03', '2026-07-17 22:38:47'),
(2, 'Ms. Yonn Lida', 'HR & Admin', 'team/REbh2uMvW7Ozz0x1KS4EohCcKpKW3nQgRCHlj4Ol.png', 2, 1, '2026-07-05 21:07:42', '2026-07-07 04:43:04'),
(3, 'Ms. Song Sreymeas', 'Senior Accountant', 'team/2iw55fXgqQktLOZqaDlBKgdiHrIrjxgdNZaXXe8m.png', 3, 1, '2026-07-05 21:08:13', '2026-07-07 04:44:52'),
(4, 'Ms. Dorn Rothtan', 'Account Officer', 'team/Ni06FUm6jRRKb5CcN7AJYyYq3CZ6tWsFFBNeealv.jpg', 4, 1, '2026-07-05 21:09:04', '2026-07-07 04:47:32'),
(6, 'Ms. Hoem Sreynoy', 'Procurement Officer', 'team/eiTMMaHF9mlTf79z3CE3OxEe36kkFzIHmiOxraIO.png', 5, 1, '2026-07-07 04:48:17', '2026-07-07 04:48:17'),
(7, 'Mr. Moeun Sokleap', 'Senior Tender & Designer', 'team/pWa3HTcqZSMltg3q9AAP2iWBemtwzwuUZNaBEr3d.png', 6, 1, '2026-07-07 04:48:48', '2026-07-07 04:48:48'),
(8, 'Mr. Ham Vannmony Oudom', 'MEP Designer & QS', 'team/qI1deJCWUTAkZMnI8QrcoImkuFJlWDaQNTiyDGa2.png', 7, 1, '2026-07-07 04:50:03', '2026-07-07 04:50:03'),
(9, 'Mr. Sum Sota', 'MEP Designer & QS', 'team/cPM9hWVZzOaPNDQK0aIZUQqKhRWtcYiz50GixVyc.jpg', 8, 1, '2026-07-07 04:54:47', '2026-07-07 04:54:47'),
(10, 'Mr. Thoy Sopharin', 'Senior Customer Service', 'team/WAi1LsRkWz2ynQtx9o5Tx1fbOO7Mx0HNGq3XyI8S.png', 9, 1, '2026-07-07 04:55:26', '2026-07-07 04:55:26'),
(11, 'Mr. Van Veasna', 'Senior Customer Service', 'team/qw8v2XED3LvAzlKv7on3RYC2dc7pb4GUsNYDx29p.png', 10, 1, '2026-07-07 04:55:57', '2026-07-07 04:55:57'),
(12, 'Mr. Cheup Toley', 'Senior Customer Service', 'team/gmWJyRuFYgPvxiNmIzmBidXiVxHI7hBgWI7yqAQ1.jpg', 11, 1, '2026-07-07 04:56:30', '2026-07-07 04:56:30'),
(13, 'Mr. Thaonh Sovanarith', 'MEP Team Leader', 'team/XYQKJzrTgkpHHyNx7PV5L4wJFdcPRCgDz4S8T4j9.png', 12, 1, '2026-07-07 04:57:02', '2026-07-07 04:57:02');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `role` varchar(191) NOT NULL DEFAULT 'user',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `role`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Super Admin', 'metermepsolution@gmail.com', 'admin', NULL, '$2y$12$x67VcFhIeRzdg49yUJvkLODuooInFq0F.qYKDESLOJncSXFsSqzN.', 'O2T83FkQ376HigMO9Lg2l46uYjvTV1sxOWXL9yzAbivE4JuNGpi0G2gj0Odn', '2026-06-13 22:20:06', '2026-07-07 01:34:03');

-- --------------------------------------------------------

--
-- Table structure for table `why_choose_us`
--

CREATE TABLE `why_choose_us` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) NOT NULL,
  `description` text DEFAULT NULL,
  `icon` varchar(191) NOT NULL DEFAULT 'CheckCircle',
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `image` varchar(191) DEFAULT NULL,
  `main_description` varchar(191) DEFAULT NULL,
  `section_label` varchar(191) DEFAULT NULL,
  `section_title` varchar(191) DEFAULT NULL,
  `order` int(11) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `why_choose_us`
--

INSERT INTO `why_choose_us` (`id`, `title`, `description`, `icon`, `sort_order`, `image`, `main_description`, `section_label`, `section_title`, `order`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Hello chose us', 'why learn IT?', 'CheckCircle', 0, NULL, NULL, NULL, NULL, 0, 1, '2026-06-15 23:38:40', '2026-06-15 23:38:40'),
(2, 'hello', 'heloo', 'Clock', 1, 'whychooseus/dBZl8c9AsD9Xrq6p3jsFTnhUHKC2tu1tjUbdHyyt.jpg', NULL, NULL, NULL, 0, 1, '2026-06-16 01:42:02', '2026-06-16 01:42:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `abouts`
--
ALTER TABLE `abouts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `activities`
--
ALTER TABLE `activities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_expiration_index` (`expiration`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_locks_expiration_index` (`expiration`);

--
-- Indexes for table `category_galleries`
--
ALTER TABLE `category_galleries`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `category_galleries_category_unique` (`category`);

--
-- Indexes for table `certifications`
--
ALTER TABLE `certifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cta_banners`
--
ALTER TABLE `cta_banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`),
  ADD KEY `failed_jobs_connection_queue_failed_at_index` (`connection`,`queue`,`failed_at`);

--
-- Indexes for table `faqs`
--
ALTER TABLE `faqs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feature_project_cards`
--
ALTER TABLE `feature_project_cards`
  ADD PRIMARY KEY (`id`),
  ADD KEY `feature_project_cards_sort_order_index` (`sort_order`),
  ADD KEY `feature_project_cards_is_active_index` (`is_active`);

--
-- Indexes for table `heroes`
--
ALTER TABLE `heroes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `insights`
--
ALTER TABLE `insights`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `insights_slug_unique` (`slug`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `key_highlights`
--
ALTER TABLE `key_highlights`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `maintenance_benefits`
--
ALTER TABLE `maintenance_benefits`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `maintenance_categories`
--
ALTER TABLE `maintenance_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `maintenance_contracts`
--
ALTER TABLE `maintenance_contracts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `maintenance_features`
--
ALTER TABLE `maintenance_features`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `partners`
--
ALTER TABLE `partners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projects_service_id_index` (`service_id`);

--
-- Indexes for table `project_images`
--
ALTER TABLE `project_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `project_images_project_id_sort_order_index` (`project_id`,`sort_order`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `services_type_unique` (`type`);

--
-- Indexes for table `service_items`
--
ALTER TABLE `service_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `solar_service_benefits`
--
ALTER TABLE `solar_service_benefits`
  ADD PRIMARY KEY (`id`),
  ADD KEY `solar_service_benefits_item_id_index` (`item_id`);

--
-- Indexes for table `solar_service_items`
--
ALTER TABLE `solar_service_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `solar_service_overview`
--
ALTER TABLE `solar_service_overview`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team_members`
--
ALTER TABLE `team_members`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `why_choose_us`
--
ALTER TABLE `why_choose_us`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `abouts`
--
ALTER TABLE `abouts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `activities`
--
ALTER TABLE `activities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `category_galleries`
--
ALTER TABLE `category_galleries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `certifications`
--
ALTER TABLE `certifications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `cta_banners`
--
ALTER TABLE `cta_banners`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faqs`
--
ALTER TABLE `faqs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `feature_project_cards`
--
ALTER TABLE `feature_project_cards`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `heroes`
--
ALTER TABLE `heroes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `insights`
--
ALTER TABLE `insights`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `key_highlights`
--
ALTER TABLE `key_highlights`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `maintenance_benefits`
--
ALTER TABLE `maintenance_benefits`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `maintenance_categories`
--
ALTER TABLE `maintenance_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `maintenance_contracts`
--
ALTER TABLE `maintenance_contracts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `maintenance_features`
--
ALTER TABLE `maintenance_features`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `partners`
--
ALTER TABLE `partners`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `project_images`
--
ALTER TABLE `project_images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `service_items`
--
ALTER TABLE `service_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `solar_service_benefits`
--
ALTER TABLE `solar_service_benefits`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `solar_service_items`
--
ALTER TABLE `solar_service_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `solar_service_overview`
--
ALTER TABLE `solar_service_overview`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `team_members`
--
ALTER TABLE `team_members`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `why_choose_us`
--
ALTER TABLE `why_choose_us`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
