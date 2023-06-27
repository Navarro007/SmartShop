/*
=========================================================================
Nome do Projeto: Carrinho de Compras em Javascript
Finalidade: Cursos de Informática do IFSP campus Caraguatatuba 
Fonte Base: Projetos do Curso B7Web - https://b7web.com.br/ 
Autor: Denny Paulista Azevedo Filho
License: MIT License
========================================================================= 
*/

let modelsJson = [
    {id:1, name:'Iphone 11', img:'img/p1.png', price:[2500, 2700, 2800], sizes:['64', '128', '512'], description:'O Apple iPhone 11 é um smartphone iOS avançado e abrangente em todos os pontos de vista com algumas características excelentes.'},
    {id:2, name:'Iphone 12', img:'img/p2.png', price:[3400, 3600, 3900], sizes:['64', '128', '512'], description:'Tem um grande display de 6.1 polegadas com uma resolução de 2532x1170 pixel. As funcionalidades oferecidas pelo Apple iPhone 12 são muitas e inovadoras.'},
    {id:3, name:'Iphone 13 mini', img:'img/p3.png', price:[4000, 4150, 4300], sizes:['64', '128', '512'], description:'Tem um grande display de 6.1 polegadas com uma resolução de 2532x1170 pixel. As funcionalidades oferecidas pelo Apple iPhone 13 são muitas e inovadoras.'},
    {id:4, name:'Iphone 14', img:'img/p4.png', price:[5000, 5200, 5400], sizes:['64', '128', '512'], description:'iPhone 14 Pro. Super Retina XDR; OLED sem bordas de 6,1 polegadas (na diagonal); Resolução de 2556 x 1179 pixels a 460 ppp.'},
    {id:5, name:'A51', img:'img/p5.png', price:[1000, 1200, 1200], sizes:['64', '128', '512'], description:'A ficha técnica do A51 inclui processador Exynos 9611 com oito núcleos, que chega à velocidade máxima de 2,3 GHz.'},
    {id:6, name:'A71', img:'img/p6.png', price:[2300, 2500, 2600], sizes:['64', '128', '512'], description:'O A71 tem tela de alta qualidade, com tecnologia Super AMOLED e resolução Full HD+. Seu processador entrega um bom desempenho e o conjunto de câmeras quádruplas marca a versatilidade do aparelho para fotos.'},
    {id:7, name:'S21 Fe', img:'img/p7.png', price:[2000, 2200, 2400], sizes:['64', '128', '512'], description:'O Samsung Galaxy S21 FE é um dos smartphones Android mais avançados e completos que existem em circulação.'},
    {id:8, name:'S10 Lite', img:'img/p8.png', price:[1800, 2300, 2500], sizes:['64', '128', '512'], description:'Smartphone Samsung Galaxy S10 Lite 128GB Azul 4G - Octa-Core 6GB RAM Tela 6,7” Câm.Tripla Selfie 32MP.'}
];