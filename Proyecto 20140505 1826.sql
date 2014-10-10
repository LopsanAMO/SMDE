-- MySQL Administrator dump 1.4
--
-- ------------------------------------------------------
-- Server version	5.6.16


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


--
-- Create schema aula
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ aula;
USE aula;

--
-- Table structure for table `aula`.`acceder`
--

DROP TABLE IF EXISTS `acceder`;
CREATE TABLE `acceder` (
  `ID_alum` int(10) unsigned NOT NULL DEFAULT '0',
  `Clave_UA` int(10) unsigned NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `aula`.`acceder`
--

/*!40000 ALTER TABLE `acceder` DISABLE KEYS */;
/*!40000 ALTER TABLE `acceder` ENABLE KEYS */;


--
-- Table structure for table `aula`.`administradores`
--

DROP TABLE IF EXISTS `administradores`;
CREATE TABLE `administradores` (
  `ID_admi` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Nombre_admi` varchar(45) NOT NULL DEFAULT '',
  `ApPat_admi` varchar(45) NOT NULL DEFAULT '',
  `ApMat_admi` varchar(45) NOT NULL DEFAULT '',
  `Contraseña_admi` varchar(45) NOT NULL DEFAULT '',
  PRIMARY KEY (`ID_admi`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `aula`.`administradores`
--

/*!40000 ALTER TABLE `administradores` DISABLE KEYS */;
/*!40000 ALTER TABLE `administradores` ENABLE KEYS */;


--
-- Table structure for table `aula`.`alumnos`
--

DROP TABLE IF EXISTS `alumnos`;
CREATE TABLE `alumnos` (
  `ID_alum` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Nombre_alum` varchar(45) NOT NULL DEFAULT '',
  `ApPat_alum` varchar(45) NOT NULL DEFAULT '',
  `ApMat_alum` varchar(45) NOT NULL DEFAULT '',
  `Contraseña_alum` varchar(45) NOT NULL DEFAULT '',
  PRIMARY KEY (`ID_alum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `aula`.`alumnos`
--

/*!40000 ALTER TABLE `alumnos` DISABLE KEYS */;
/*!40000 ALTER TABLE `alumnos` ENABLE KEYS */;


--
-- Table structure for table `aula`.`calificacion`
--

DROP TABLE IF EXISTS `calificacion`;
CREATE TABLE `calificacion` (
  `N_ejercicio` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Califi` varchar(45) NOT NULL DEFAULT '',
  PRIMARY KEY (`N_ejercicio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `aula`.`calificacion`
--

/*!40000 ALTER TABLE `calificacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `calificacion` ENABLE KEYS */;


--
-- Table structure for table `aula`.`consta_de`
--

DROP TABLE IF EXISTS `consta_de`;
CREATE TABLE `consta_de` (
  `ID_alum` int(10) unsigned NOT NULL DEFAULT '0',
  `ID_grp` int(10) unsigned NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `aula`.`consta_de`
--

/*!40000 ALTER TABLE `consta_de` DISABLE KEYS */;
/*!40000 ALTER TABLE `consta_de` ENABLE KEYS */;


--
-- Table structure for table `aula`.`contiene`
--

DROP TABLE IF EXISTS `contiene`;
CREATE TABLE `contiene` (
  `Clave_UA` int(10) unsigned NOT NULL DEFAULT '0',
  `N_tema` int(10) unsigned NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `aula`.`contiene`
--

/*!40000 ALTER TABLE `contiene` DISABLE KEYS */;
/*!40000 ALTER TABLE `contiene` ENABLE KEYS */;


--
-- Table structure for table `aula`.`evaluacion`
--

DROP TABLE IF EXISTS `evaluacion`;
CREATE TABLE `evaluacion` (
  `ID_ejercicio` int(10) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`ID_ejercicio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `aula`.`evaluacion`
--

/*!40000 ALTER TABLE `evaluacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `evaluacion` ENABLE KEYS */;


--
-- Table structure for table `aula`.`gestiona`
--

DROP TABLE IF EXISTS `gestiona`;
CREATE TABLE `gestiona` (
  `ID_admi` int(10) unsigned NOT NULL DEFAULT '0',
  `Clave_UA` int(10) unsigned NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `aula`.`gestiona`
--

/*!40000 ALTER TABLE `gestiona` DISABLE KEYS */;
/*!40000 ALTER TABLE `gestiona` ENABLE KEYS */;


--
-- Table structure for table `aula`.`grupo`
--

DROP TABLE IF EXISTS `grupo`;
CREATE TABLE `grupo` (
  `ID_grp` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Name_grp` varchar(45) NOT NULL DEFAULT '',
  PRIMARY KEY (`ID_grp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `aula`.`grupo`
--

/*!40000 ALTER TABLE `grupo` DISABLE KEYS */;
/*!40000 ALTER TABLE `grupo` ENABLE KEYS */;


--
-- Table structure for table `aula`.`material_didactico`
--

DROP TABLE IF EXISTS `material_didactico`;
CREATE TABLE `material_didactico` (
  `ID_md` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Referencia` varchar(45) NOT NULL DEFAULT '',
  PRIMARY KEY (`ID_md`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `aula`.`material_didactico`
--

/*!40000 ALTER TABLE `material_didactico` DISABLE KEYS */;
/*!40000 ALTER TABLE `material_didactico` ENABLE KEYS */;


--
-- Table structure for table `aula`.`modificara`
--

DROP TABLE IF EXISTS `modificara`;
CREATE TABLE `modificara` (
  `ID_prof` int(10) unsigned NOT NULL DEFAULT '0',
  `ID_md` int(10) unsigned NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `aula`.`modificara`
--

/*!40000 ALTER TABLE `modificara` DISABLE KEYS */;
/*!40000 ALTER TABLE `modificara` ENABLE KEYS */;


--
-- Table structure for table `aula`.`nivel`
--

DROP TABLE IF EXISTS `nivel`;
CREATE TABLE `nivel` (
  `ID_nivel` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Level` varchar(45) NOT NULL DEFAULT '',
  PRIMARY KEY (`ID_nivel`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `aula`.`nivel`
--

/*!40000 ALTER TABLE `nivel` DISABLE KEYS */;
/*!40000 ALTER TABLE `nivel` ENABLE KEYS */;


--
-- Table structure for table `aula`.`obtiene`
--

DROP TABLE IF EXISTS `obtiene`;
CREATE TABLE `obtiene` (
  `ID_ejercicio` int(10) unsigned NOT NULL DEFAULT '0',
  `n_ejercicio` int(10) unsigned NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `aula`.`obtiene`
--

/*!40000 ALTER TABLE `obtiene` DISABLE KEYS */;
/*!40000 ALTER TABLE `obtiene` ENABLE KEYS */;


--
-- Table structure for table `aula`.`posee`
--

DROP TABLE IF EXISTS `posee`;
CREATE TABLE `posee` (
  `N_tema` int(10) unsigned NOT NULL DEFAULT '0',
  `ID_nivel` int(10) unsigned NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `aula`.`posee`
--

/*!40000 ALTER TABLE `posee` DISABLE KEYS */;
/*!40000 ALTER TABLE `posee` ENABLE KEYS */;


--
-- Table structure for table `aula`.`profesores`
--

DROP TABLE IF EXISTS `profesores`;
CREATE TABLE `profesores` (
  `ID_prof` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Nombre_prof` varchar(45) NOT NULL DEFAULT '',
  `ApPat_prof` varchar(45) NOT NULL DEFAULT '',
  `ApMat_prof` varchar(45) NOT NULL DEFAULT '',
  `Semestre` varchar(45) NOT NULL DEFAULT '',
  `Materia` varchar(45) NOT NULL DEFAULT '',
  `Contraseña_prof` varchar(45) NOT NULL DEFAULT '',
  PRIMARY KEY (`ID_prof`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `aula`.`profesores`
--

/*!40000 ALTER TABLE `profesores` DISABLE KEYS */;
/*!40000 ALTER TABLE `profesores` ENABLE KEYS */;


--
-- Table structure for table `aula`.`tema`
--

DROP TABLE IF EXISTS `tema`;
CREATE TABLE `tema` (
  `N_tema` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Titulo` varchar(45) NOT NULL DEFAULT '',
  PRIMARY KEY (`N_tema`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `aula`.`tema`
--

/*!40000 ALTER TABLE `tema` DISABLE KEYS */;
/*!40000 ALTER TABLE `tema` ENABLE KEYS */;


--
-- Table structure for table `aula`.`tiene_un`
--

DROP TABLE IF EXISTS `tiene_un`;
CREATE TABLE `tiene_un` (
  `ID_alum` int(10) unsigned NOT NULL DEFAULT '0',
  `ID_nivel` int(10) unsigned NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `aula`.`tiene_un`
--

/*!40000 ALTER TABLE `tiene_un` DISABLE KEYS */;
/*!40000 ALTER TABLE `tiene_un` ENABLE KEYS */;


--
-- Table structure for table `aula`.`tienen`
--

DROP TABLE IF EXISTS `tienen`;
CREATE TABLE `tienen` (
  `N_tema` int(10) unsigned NOT NULL DEFAULT '0',
  `ID_ejercicio` varchar(45) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `aula`.`tienen`
--

/*!40000 ALTER TABLE `tienen` DISABLE KEYS */;
/*!40000 ALTER TABLE `tienen` ENABLE KEYS */;


--
-- Table structure for table `aula`.`ua`
--

DROP TABLE IF EXISTS `ua`;
CREATE TABLE `ua` (
  `ClavE_UA` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) NOT NULL DEFAULT '',
  `Semestre` varchar(45) NOT NULL DEFAULT '',
  `Especialidad` varchar(45) NOT NULL DEFAULT '',
  PRIMARY KEY (`ClavE_UA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `aula`.`ua`
--

/*!40000 ALTER TABLE `ua` DISABLE KEYS */;
/*!40000 ALTER TABLE `ua` ENABLE KEYS */;


--
-- Table structure for table `aula`.`visualiza`
--

DROP TABLE IF EXISTS `visualiza`;
CREATE TABLE `visualiza` (
  `ID_prof` int(10) unsigned NOT NULL DEFAULT '0',
  `ID_grp` int(10) unsigned NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `aula`.`visualiza`
--

/*!40000 ALTER TABLE `visualiza` DISABLE KEYS */;
/*!40000 ALTER TABLE `visualiza` ENABLE KEYS */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
