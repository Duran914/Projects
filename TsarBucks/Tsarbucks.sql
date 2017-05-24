-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 29, 2017 at 08:19 AM
-- Server version: 5.6.35
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Tsarbucks`
--

-- --------------------------------------------------------

--
-- Table structure for table `baristas`
--

CREATE TABLE `baristas` (
  `user_id` int(10) UNSIGNED NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `baristas`
--

INSERT INTO `baristas` (`user_id`, `username`, `password`, `display_name`, `created_at`, `updated_at`) VALUES
(1, 'bar', '0987', 'barista', '2017-03-24 00:42:56', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `CustOrders`
--

CREATE TABLE `CustOrders` (
  `Product_id` int(11) NOT NULL,
  `Product_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Size` tinyint(2) NOT NULL,
  `Price` decimal(4,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) NOT NULL,
  `product_id` int(10) NOT NULL,
  `quantity` int(10) NOT NULL,
  `completed` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `user_id`, `product_id`, `quantity`, `completed`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 2, 1, '2017-03-24 00:27:06', NULL),
(1, 1, 2, 4, 1, '2017-03-24 00:27:06', NULL),
(1, 1, 3, 1, 1, '2017-03-24 00:27:06', NULL),
(2, 1, 2, 5, 1, '2017-03-24 00:27:06', NULL),
(2, 1, 5, 2, 1, '2017-03-24 00:27:06', NULL),
(3, 1, 4, 1, 1, '2017-03-24 00:27:06', NULL),
(4, 1, 6, 3, 1, '2017-03-24 00:27:06', NULL),
(4, 1, 8, 1, 1, '2017-03-24 00:27:06', NULL),
(5, 1, 7, 2, 0, '2017-03-24 00:27:06', NULL),
(6, 1, 3, 4, 0, '2017-03-24 00:27:06', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(10) UNSIGNED NOT NULL,
  `display_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `price` decimal(4,2) NOT NULL,
  `size` tinyint(2) NOT NULL COMMENT 'size in ounces',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `display_name`, `price`, `size`, `created_at`, `updated_at`) VALUES
(1, 'Black Coffee (Small)', '5.00', 2, '2017-03-24 00:27:06', NULL),
(2, 'Black Coffee (Medium)', '7.50', 4, '2017-03-24 00:27:06', NULL),
(3, 'Black Coffee (Large)', '10.00', 8, '2017-03-24 00:27:06', NULL),
(4, 'Espresso (Small)', '6.00', 1, '2017-03-24 00:27:06', NULL),
(5, 'Espresso (Large)', '12.00', 2, '2017-03-24 00:27:06', NULL),
(6, 'Tsartisan Coffee (Small)', '10.00', 4, '2017-03-24 00:27:06', NULL),
(7, 'Tsartisan Coffee (Large)', '20.00', 8, '2017-03-24 00:27:06', NULL),
(8, 'Plum Floating in Perfume, Served in a Man\'s Hat', '15.00', 16, '2017-03-24 00:27:06', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `system_name` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `display_name` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`system_name`, `display_name`, `created_at`, `updated_at`) VALUES
('barista', 'Barista', '2017-03-24 00:27:06', NULL),
('customer', 'Customer', '2017-03-24 00:27:06', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(10) UNSIGNED NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `display_name`, `created_at`, `updated_at`) VALUES
(1, 'cust', '1234', 'Customer', '2017-03-24 00:27:06', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `user_id` int(10) UNSIGNED NOT NULL,
  `role` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`user_id`, `role`, `created_at`, `updated_at`) VALUES
(1, 'customer', '2017-03-24 00:27:06', NULL),
(2, 'barista', '2017-03-24 00:27:06', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `baristas`
--
ALTER TABLE `baristas`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `CustOrders`
--
ALTER TABLE `CustOrders`
  ADD PRIMARY KEY (`Product_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`,`user_id`,`product_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`system_name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`user_id`,`role`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `baristas`
--
ALTER TABLE `baristas`
  MODIFY `user_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `CustOrders`
--
ALTER TABLE `CustOrders`
  MODIFY `Product_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
