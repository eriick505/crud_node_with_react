-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 13-Mar-2022 às 21:11
-- Versão do servidor: 10.4.20-MariaDB
-- versão do PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `api_node_crud`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `orders`
--

CREATE TABLE `orders` (
  `id_order` int(11) NOT NULL,
  `quantity` smallint(6) DEFAULT NULL,
  `id_product` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `orders`
--

INSERT INTO `orders` (`id_order`, `quantity`, `id_product`) VALUES
(15, 20, 69),
(17, 2, 71);

-- --------------------------------------------------------

--
-- Estrutura da tabela `products`
--

CREATE TABLE `products` (
  `id_product` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `image_product` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `products`
--

INSERT INTO `products` (`id_product`, `name`, `price`, `image_product`) VALUES
(69, 'Bleach', 24, 'uploads\\2022-03-01T20-22-38.723Z-drink.jpg'),
(71, 'happy', 41241, 'uploads\\2022-03-06T19-13-10.082Z-happy.jpg'),
(73, 'Casa', 3455, 'uploads\\2022-03-13T02-19-52.470Z-home.jpg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `product_images`
--

CREATE TABLE `product_images` (
  `id_image` int(11) NOT NULL,
  `id_product` int(11) DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `product_images`
--

INSERT INTO `product_images` (`id_image`, `id_product`, `image_path`) VALUES
(4, 69, 'uploads\\2022-03-13T19-33-06.441Z-ptd.png'),
(6, 69, 'uploads\\2022-03-13T19-36-31.664Z-ptd.png'),
(7, 69, 'uploads\\2022-03-13T20-02-55.886Z-ptd.png');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id_user`, `name`, `email`, `password`) VALUES
(34, 'Erick Santos Pereira da Silva', 'ericktrx1@hotmail.com', '$2b$10$l1vKjOo7BmTKUmtR.ho0h.HeooHPaed5VccaGsu/sR3qDux6A79Pm'),
(35, 'Erick Santos Pereira da Silva', 'santoserick9@gmail.com', '$2b$10$7o2uSwov/6ccqU7Rnhnz4eKSaJ5SWm6sHbUUTLOXt5bKF1LS4.DmS'),
(36, 'Mimizinha', 'mimizinha@mimi.com', '$2b$10$eCpdJcrOw/H7baTxw75yVeM/OWwg8wq7cuwWiBWt8Iaj3vKI2v1dC'),
(37, 'mirerick', 'erickjeck17@gmail.com', '$2b$10$moUhu9tS8gZyNfw.NviL2OWgcYh2xROVBzdUjc4RHBiQorwC0CPl.'),
(38, 'juca bala', 'juca@bala.com.br', '$2b$10$DL0mD24kpgNOk.dToIPBX.NmIVuyNKf5ebCdlhTmcMOm.2maYtex.'),
(39, 'deschamps', 'felipe@deschamps', '$2b$10$emDeeRL6CT6l6cSk9JCU1uAw38umiJD1AR/H2dJqS/GlbGHzQ8q8K'),
(40, 'fim das coisas', 'fim@jeito.com', '$2b$10$q4mv/fOqO8IdYUuiMF0Mqec7PLefoJd7si4McBjTyG.gBeU4FeT62'),
(41, 'Erick Santos Pereira da Silva', 'escolha@melhor.com', '$2b$10$WWLZlAt.ipwhID34dVwlQuMF/zAtRBEKTuA1n9Hf7fpnzmIO3kjnW'),
(42, 'conta 3', 'conta3@conta3.com', '$2b$10$VSYTVlHtnbpEfpJm9xkuRO1knDGmbrrq8Qa11Ed0tyknGTU99WNXS'),
(43, 'conta4', 'conta4@conta4.com', '$2b$10$PuKxSJ6AAqEB8OVJM/nJyeKexdZUw4cPg9BoDnU9HfNzSAfFvEmcy'),
(44, 'samatara', 'samatara@samatara.com', '$2b$10$awIsP1jrnpMexO8OLDd86OmyP.QeAs0hXBEwOVIPaJa5WCxXWYPQq'),
(45, 'Cadastrar ', 'Cadastrar@user.com', '$2b$10$OakVLno9Suhex8oDgTiOwOY7rHQ3T0D42/sz5W2L79VH2/82PKyBW'),
(46, 'bota bota', 'bota@bota.com', '$2b$10$6KmTQjjenfToEEQg9sWUnuK3DwByz.eacBsiTVGdok/Xi8Ulyv.sO'),
(47, 'Erick Santos Pereira da Silva', 'comgripe@gripe.com', '$2b$10$/m8gHv2pni6v2PuSVvOZNurPtC9LcvSbDcfNResI8GCuFWHzh0IGe'),
(48, 'julin', 'xulio@xulio.com', '$2b$10$.91lSWu.L/dQzvkU425oeeGzxQ21HxYcES9PkLB9dV.IvHNnUoz2u'),
(49, 'Erick Santos Pereira da Silva', '12312@1231321', '$2b$10$oAz.9iacSymS74sdFDXyBeXjCWA13QnRGXMh2gzQFLPddwF3cwCIS'),
(50, '123131', '123123@123123', '$2b$10$1GI0wguwlIpdg/E.8rSZ0.RW52ESQOih3V/Gr8LYjOEnIhvxWhuma'),
(51, 'Erick Santos Pereira da Silva', '312311@32123', '$2b$10$pWiOuscqOPZNuyqie.GM5OzRtZh/26VcSbmMWZ49EN9VrJ7ksF.GS'),
(52, 'audi asud', 'ayui@sud.com', '$2b$10$vCI8pu.ppufdD/EWE2TnBuVMG2YENRmPiqbwSCb0BToUEZpKjDoxe'),
(53, 'Jug Silva', 'jug@jug.com', '$2b$10$BQLblvn.SUYc0yoYfStQkuCp33xjUo2BaO6vJA5qdWZC6JfnCpXRm'),
(54, 'Xug Silva', 'xug@xug.com', '$2b$10$/jVkSTCEob5e1AQXkM7nIOkWafy7FVVjVGGkXe7nofXthqdtSEdrm'),
(55, 'Lug Silva', 'lug@lug.com', '$2b$10$XLI6wAvM57bUDCWjrPJoru/JwZRAFp.onzfFFaK1.p3WzDInAUDaO');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id_order`),
  ADD KEY `id_product` (`id_product`);

--
-- Índices para tabela `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id_product`);

--
-- Índices para tabela `product_images`
--
ALTER TABLE `product_images`
  ADD PRIMARY KEY (`id_image`),
  ADD KEY `id_product` (`id_product`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `orders`
--
ALTER TABLE `orders`
  MODIFY `id_order` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de tabela `products`
--
ALTER TABLE `products`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT de tabela `product_images`
--
ALTER TABLE `product_images`
  MODIFY `id_image` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `product_images`
--
ALTER TABLE `product_images`
  ADD CONSTRAINT `product_images_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
