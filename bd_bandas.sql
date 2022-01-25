SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `bd_bandas`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb01_bandas`
--

CREATE TABLE `tb01_bandas` (
  `banda_id` int(11) NOT NULL,
  `banda_nome` varchar(120) NOT NULL,
  `banda_estilo` varchar(40) NOT NULL,
  `banda_ano` year(4) NOT NULL,
  `banda_descricao` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `tb01_bandas` (`banda_id`, `banda_nome`, `banda_estilo`, `banda_ano`, `banda_descricao`) VALUES
(9, 'Paralamas do Sucesso', 'Rock', 1981, 'Banda nacional'),
(10, 'Mamonas Assasinas', 'Rock', 1998, 'Banda de comédia.');

ALTER TABLE `tb01_bandas`
  ADD PRIMARY KEY (`banda_id`);

ALTER TABLE `tb01_bandas`
  MODIFY `banda_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;COMMIT;