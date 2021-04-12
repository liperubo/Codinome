# Codinome
Refazendo o jogo de tabuleiro "Codinome" utilizando JavaScript, Node.js e Socket.io

Jogos de tabuleiro ainda são um dos melhores passa-tempo que conseguimos encontrar, porém, graças à pandemia, esse tipo de jogatina se torna inviavel.

Em Codinome, os jogadores se dividem em duas equipes, de pelo menos duas pessoas em cada. Cada equipe escolhe um jogador para ser seu Espião Mestre, o resto dos jogadores se tornam então Agentes de Campo.
O tabuleiro consiste de uma grade de 5x5 com palavras aleatórias.
Cada partida possuí uma Chave, que revela a identidade das cartas na mesa. Essa chave corresponde à grade na mesa. 
  * 8 Quadrados Azuis correspondem a palavras que a Equipe Azul terá de adivinhar.
  * 8 Quadrados Vermelhos correspondem a palavras que a Equipe Vermelhos terá de adivinhar.
  * 1 Agente Duplo, entra para o time que começar primeiro.
  * 7 Quadrados sem cor correspondem a Civis Inocentes.
  * 1 Quadrado Preto corresponde ao Assassino que nunca deve ser contactado (Spoiler: Você perde)
  
Espiões Mestres conhecem as identidades secretas dos 25 Agentes, e tentam passar essas identidades para seus colegas utilizando dicas, que não podem ser o codinome direto de uma carta, e que podem relacionar varias ao mesmo tempo. Ganha o time que encontrar todas seus agentes primeiro.
As dicas devem ser apenas uma palavra, e deverá ser acompanhada de um número, ao qual significa a quantidade de palavras a serem relacionadas.
Ex.: Duas de suas palavras são CASCA e TRONCO, Ambas são relacionadas a àrvores, então você diz: "Árvore 2".
Nada te impede de dar uma pista de uma palavra ("Banana 1"), mas é bem mais divertido tentar relacionar 2+.
