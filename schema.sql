-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 06, 2013 at 10:43 PM
-- Server version: 5.1.44
-- PHP Version: 5.3.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `tracker`
--

-- --------------------------------------------------------

--
-- Table structure for table `issue`
--

CREATE TABLE IF NOT EXISTS `issue` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(55) NOT NULL DEFAULT '',
  `description` text,
  `status_id` int(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `title` (`title`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=49 ;


-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE IF NOT EXISTS `status` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(55) NOT NULL DEFAULT '',
  `class` varchar(55) DEFAULT NULL,
  `style` varchar(155) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`id`, `title`, `class`, `style`) VALUES
(1, 'Open', NULL, NULL),
(2, 'Confirmed', 'label-important', NULL),
(3, 'Not A Bug', NULL, NULL),
(4, 'Fixed', 'label-success', NULL),
(5, 'Closed', 'label-success', NULL),
(6, 'In Progress', 'label-info', NULL);
