# Como a internet funciona:
## Network:
Rede de computadores conectados (por fio ou wireless). Cada computador da rede se conecta a todos os outros.
(é um grafo completo).

Podem haver switches (hubs) que servem como ponto de encontro e direcionamento de todas as conexões. Switches podem se comunicar também, conectando redes como um todo.

Um conjunto de redes/networks conectadas é a internet. As redes de cada país/região são conectadas por cabos submarinos de longa extensão e de capacidade de transmissão de dados muito alta.

## Client-server model
Servers: providenciam os serviços da internet
Client: dispositivo do usuário.

### Web Server
Armazenados em Data Centers aos milhares.
**A escolha de região em um website ou serviço é para garantir que sua conexão use o Data Center mais próximo de você**.

* Web request: o web server processa a request criada ao digitar a URL do site e apertar Enter (garante que seja levado ao site correto).
* Request/Response cycle

### Web page X Web site
* Web page é um documento, uma única página que apresenta o conteúdo.
* Web site é um conjunto conectado de web pages com endereço semelhantes (mesmo _domain name_).
(Analogia: artigos na wikipedia)
* Web application: é um termo frequentemente utilizado de forma equivalente a website
	* Porém, em geral, web apps são mais interativos e personalizados para o usuário, muitas vezes com informações que se atualizam dinamicamente conforme o uso, enquanto website são mais informativos e tendem a serem mais estáticos.

Na forma mais básica, é um text document (read/edit).

* HTML: estrutura
* CSS: estilo e cores
* JS: lida com a interação do usuário

## Overview
### HTML
* Hypertext markup language
* Consiste de **markup tags**, que descrevem o tipo de conteúdo dentro delas. Exemplo: \<h1\> (título), \<p\> (parágrafo), etc.

### CSS
* Cascading style sheets
Diz aos elementos HTML como aparecerem/serem dispostos na tela.

### JS
* Modificação dos elementos conforme a interação do usuário.

Page rendering: o web server lida com a requisição do usuário, processa o código do web site e retorna uma web page completa (a página em si dependendo do endereço digitado - em geral a home page).

## Web browser
É uma aplicação usada para acessar a internet e suas páginas

O browser funciona enviando uma request para o servidor(web server), através do protocolo (em geral, HTTP). O servidor responde com uma página da web completa.

### Composição de uma URL
* URL: Uniform resource locator
	* Ex.: http://www.nomedosite.com/index.html
	* http:// = protocolo (HTTP)
	* www.nomedosite.com = nome do website (domain name)
	* /index.html = file path (caminho para o arquivo específico com o código daquela web page) **?** 

### Request-response cycle
* HTTP: Hypertext transfer protocol
* Request: o client requisita (através de inserindo o URL e apertando Enter) uma determinada página da web
* Response: um web server responde com um documento (html) com o código necessário, e o browser/navegador renderiza ele como a página. 

## Web Hosting
* Conceito: você coloca seu website no servidor da empresa de hosting (--> paga por espaço e pela garantia de conexão estável).
* Tipos
	1. Shared hosting: você paga por um espaço em um servidore seus recursos, o qual é compartilhado com vários outros websites.
	2. Virtual private hosting:
		* Usa um VPS (virtual private server). 
		* É como uma máquina virtual, que possui recursos dedicados (de memória, bandiwth e poder de processamento) para aquele website.
		* Um servidor físico pode ter vários VPS, mas cada VPS
			* Possui recursos próprios.
			* Serve a somente um website
	3. Dedicated hosting
		* Servidor físico dedicado àquele único website.
	4. Cloud hosting
		* O website é suportado por uma **nuvem de servidores**, que dividem as demandas de processamento. Essa nuvem combina servidores físicos e virtuais. Ou seja, cada website usa múltiplos servidores e cada servidor atende múltiplos websites (**many to many** relationship):
			* Menos impacto se um servidor falhar.
			* Você paga por recurso utilizado. 
			* Facilmente escalável.
