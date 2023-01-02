# IP Addresses
* São os endereços dos computadores na rede em que estão conectados.
* Protocolos:
	* IPv4: IP da forma aaa.a.a.aaa onde a é um dígito de 0 a 9
	* IPv6: IP da forma bbbb:bbbb:bbbb:bbbb:bbbb:bbbb:bbbb (7 quartetos) onde b é um dígito hexadecimal (0-9, a-f).

* Os dados são mandados como datagrams (IP packets)
	* Header
		* Endereço de envio (no caso do pacote precisar retorno, em caso de erro)
		* Endereço de destino
	* Payload (data)
* Possíveis problemas:
	* Chegada fora de ordem
	* Corrupção de pacotes
	* Perda de pacotes
* Protocolos de manutenção da integridade dos pacotes:
	* TCP: 
		* Pode resolver todos os problemas acima
		* Custo : pequeno delay
		* Usado em informações que precisam de precisão (texto e imagem) - ou seja, precisam chegar corretas e em ordem
	* UDP (User datagram protocol):
		* Pode resolver apenas a corrupção do pacote
		* Usado em informações que podem tolerar pequenas perdas (como vídeos e chamadas)

# HTTP
* Ícone de cadeado: aquele site usa HTTPS (versão **S**egura do HTTP)
* HTTP = Hypertext transfer protocol
	Pode enviar tanto HTML, styles (CSS), imagens, ou arquivos. 

## Baseado em request-response

### HTTP request:
Composição:
	
	METHOD /PATH VERSION_OF_PROTOCOL 
	
	HEADERS
	
	BODY

O método informa o que o cliente deseja fazer. Métodos comuns são:

* GET: recuperar dado do servidor
* POST: enviar dado ao servidor
* PUT: substituir dado no servidor
* DELETE: remover dado do servidor

O caminho (path) é o endereço daquela webpage específica do website que contém o recurso que a request precisa. Ex.:
	example.com/images/images.jpg

Os headers contém mais informações sobre a requisição. 
Cada header é um nome (case-insensitive) + ":" + um valor.
Mais comuns:

* Host: o host do servidor para onde se faz a requisição
* User-Agent: informa qual aplicação está fazendo a request
(bem como sistema operacional desse client)
* Accept: que tipo de conteúdo será aceito
* Accept-Language: qual língua é preferida
* Content-type: o tipo de conteúdo da request
etc.

O corpo (BODY) da request contém conteúdo que o cliente está enviando, e pode ser necessário em alguns métodos (POST/PUT), e desnecessário em outros (GET).

### HTTP response
Primeira linha é a status line, que contém:
	
	PROTOCOL_VERSION STATUS_CODE STATUS_MESSAGE

* Status codes: código que representa o estado da mensagem
	* Status message: transcrição em texto de seu significado
	* São números de 100 a 599, e são classificados pelo 1º dígito.
* Classificação dos status codes 
	* 100-199: informational
		* Resposta temporária.
		* 100 (CONTINUE)
		* 101 (SWITCHING PROTOCOLS): o client pediu para mudar de protocolos e o servidor aceitou
	* 200-299: sucessful
		* 200 (OK)
		* 201 (Created): recurso criado
		* 202 (Accepted): request aceita, mas não completa
		* 204 (No Content): processada, mas nada retornado
		* Significado de OK depende do método
	* 300-399: redirection
		* O recurso necessário foi movido para outro lugar
		* 301 (MOVED PERMANENTLY): redireção permanente
		* 302 (FOUND): o recurso foi movido apenas temporariamente 
			(envia o novo endereço dele)
	* 400-499: client error
		* Requsição não conseguiu ser processada
		* 400: request não conseguiu ser processada (inválida, quantidade alta demais de dados transmitidos, etc.)
		* 401: o usuário precisa fazer login antes da request poder ser processada
		* 403: a request é válida, mas foi recusada (ex.: permissão insuficiente)
		* 404: recurso não encontrado
		* 405: método da request não suportado pelo servidor
	* 500-599: server error
		* 500: INTERNAL SERVER ERROR (o servidor falhou em processar a request)
		* 502 (BAD GATEWAY): resposta inválida recebida
		* 503 (SERVICE UNAVAILABLE)
* Headers comuns da resposta:
	* Date (data e hora da geração da resposta)
	* Server
	* Content-Length (tamanho em caracteres)
	* Content-Type: tipo de conteúdo retornado

### HTTPS
* Versão mais segura.
* Encripta as requisições e respostas
(See: public and private keys)

# Outros protocolos

## Dynamic Host Configuration Protocol (DHCP)
* Designa um IP a cada computador que se conecta à rede
* Para tal, o computador se conecta por UDP(User Datagram Protocol) com um servidor DHCP especializado
	* Gerencia os IPs já assumidos na rede

## Domain Name System Protocol (DNS)
* Gerencia a associação de um domínio/domain name de um website ao correto IP de seu servidor

## Internet Message Access Protocol (IMAP)
* Gerencia o acesso a emails (armazenados no respectivo servidor) via sua caixa de entrada.

## Simple Mail Transfer Protocol (SMTP)
* Gerencia o envio de e-mails

## File Transfer Protocol (FTP)
* Gerencia a transferência de arquivos (envio e recebimento, listagem e remoção de arquivos de/para um servidor).

## Secure Shell Protocol (SSH)
* Permite a identificação do cliente (log-in) e a interação com o servidor de forma segura.
* Os dados enviados são encriptados.

### SSH File Transfer Protocol (SFTP)
* Versão segura do FTP, que transmite arquivos de forma encriptada usando o protocolo SSH.
