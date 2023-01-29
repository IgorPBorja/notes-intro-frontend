# Node

- Runtime environment para Javascript

  - Permite que JS seja executado fora do navegador
  - Realiza tarefas de forma assíncrona
  - Sintaxe:
    - Verificando versão
      ```bash
      $ node -v
      ```
    - Executando um arquivo
      ```bash
      $ node file.js
      ```
  - Todo arquivo é considerado um módulo (e logo pode ser executado)

- Diferenças para o JS executado em navegadores:
  - Com NodeJS é possível acessar arquivos locais
  - NodeJS mantém objetos <strong>globais</strong>, que podem ser acessados a qualquer momento no código:
    - \_\_dirname: path do diretório atual
    - \_\_filename: nome do arquivo sendo executado
    - require: permite importar outros módulos
    - module: informações no módulo atual
    - process: informações no ambiente atual

# Sistema de módulos

Por padrão, NodeJS <strong>não permite que funções e objetos sejam acessados a partir de outro arquivo</strong>: para isso, precisa-se incluí-los nos objetos exportados (tornados visíveis para outros módulos) daquele módulo.

- module1.js
  ```js
  const hello = function (name) {
    console.log("Hello, ", name);
  };
  const name1 = "A";
  const name2 = "B";
  module.exports = { hello, name1, name2 };
  ```
- main.js
  `js
// assumes module1.js is in the same folder
hello_module = require("./module1.js");
hello_module.hello("C");
hello_module.hello(name1);
`
  Portanto, `module.exports` é uma <em>referência</em> ao objeto exportado.
  Também podemos atribuir diretamente valores a fields existentes/criar novos fields do objeto `module.exports`:
- module2.js
  ```js
  const f = function (x, y) {
    return x + y;
  };
  const a = 3;
  const b = 5;
  module.exports.value1 = a;
  module.exports.value2 = b;
  module.exports.add = f;
  ```
- main.js

  ```js
  // assumes module2.js is in the same folder

  // assigning using object deconstruction
  const { add, value1, value2 } = require("./module2.js");
  console.log(add(value1, value2));
  ```

Usando <em>object deconstruction</em>, cada propriedade do objeto é atribuída àquela de <strong>mesmo nome</strong> no objeto desconstruído, independente da ordem em que as propriedades foram declaradas! Isso implica que substituir a primeira linha de `main.js` acima por `const {x, value1, value2} = require("./module2.js")` leva à criação de uma nova propriedade `x` de `module.exports` com valor inicial `undefined`.

Além disso, o uso de `require` <strong>executa o código do módulo</strong>.

# Manipulando arquivos e diretórios locais

## Módulo `path`

O módulo `path` permite lidar com arquivos e diretórios locais.

### `path.basename`

Dado um caminho para um arquivo qualquer, essa função retorna apenas o <strong>nome do arquivo</strong>. Ou seja, `path.basename("/some/directories/in/between/file.extension)` retorna `file.extension`.

### `path.join`

Concatena caminhos (como se concatena strings), e depois corrige os separadores (`/`) para obter um caminho válido. Exemplo:

```js
const path = require("path");
console.log(path.join(
					"/users/data/"
					"/folder/subfolder/"
					"/subsubfolder/file.txt"));
// /users/data/folder/subfolder/subsubfolder/file.txt
```

### `path.resolve`

Processa caminhos da direita para a esquerda, adicionando cada fragmento à esquerda da string atual. <strong>No final, transforma esse caminho em um caminho absoluto</strong>.

- path.resolve X path.join:

  - path.join apenas concantena caminhos com o separador daquele sistema operacional.
  - path.resolve tenta obter um caminho absoluto ao final de sua resolução. Ou seja, <em style="color: red;">se a string resultante da concatenação dos caminhos não resulta em um caminho absoluto, path.resolve adiciona `__dirname` à esquerda do caminho final.</em>

  * Exemplo (com `__dirname == /home/user1/data`):

  ```js
  const path = require("path");

  console.log(path.join("a", "b", "file.txt"));
  // a/b/file.txt

  console.log(path.resolve("a", "b", "file.txt"));
  // /home/user1/data/a/b/file.txt

  // this happens because a/b/file.txt is not an absolute path
  ```

## Módulo `fs` (File System)

Permite a manipulação de arquivos de duas formas diferentes:

- Síncrona: NodeJS <strong>espera a operação ser resolvida</strong> antes de continuar com o resto do código (<em>blocking</em>).
- Assíncrona: NodeJS <strong>continua a execução do resto e, quando aquela operação é finalizada, volta para processá-la</strong> (<em>non-blocking</em>).

Em um web server, uma operação síncrona bloquearia o uso do servidor para todos os usuários, pois suspende o processamento de qualquer request até terminar a operação atual. Logo, para web server, o processamento de requests deve ser assíncrono.

### Leitura síncrona: `fs.readFileSync`

```js
const fs = require("fs");

const info = fs.readFileSync("file.txt", "utf-8");
console.log(info);
```

A sintaxe da função é `readFileSync(path, encoding)`.

### Leitura assíncrona: `fs.readFile`

```js
const fs = require("fs");

const info = fs.readFileSync("file.txt", "utf-8", (err, data) => {
  console.log(data);
});

console.log("File was read");
```

A sintaxe da função é

```js
readFile(path, encoding, callback);
```

em que `callback` é uma função que:

- Aceita dois argumentos, na seguinte ordem:
  1.  uma mensagem de erro
  2.  e os dados do arquivo.
- É chamada logo após a tentativa de ler o arquivo é finalizada.

A mensagem de erro é um objeto Javascript com as seguintes propriedades:

1. `errno`: número negativo que serve como código numérico do erro.
2. `code`: código do erro (no caso de arquivo/diretório não encontrado, por exemplo, é `ENOENT`).
3. `message`: mensagem de erro.
4. `syscall`: tipo de chamada ao sistema operacional que falhou (se houve alguma).
5. `path`: caminho de um arquivo relevante ao erro (no caso de `ENOENT`, o caminho inválido que se tentou acessar).
6. `stack`: descreve em que ponto do código foi gerado o erro

... entre outras propriedades. Para mais informações sobre os códigos de erro visite [essa página do repositório do NodeJS](https://github.com/nodejs/node-v0.x-archive/blob/3d3d48d4b78d48e9b002660fc045ba8bb4a96af2/deps/uv/include/uv.h#L65).

### Criando arquivos (assíncrono): `fs.writeFile`

A sintaxe da função é

```js
writeFile(path, data, encoding, callback);
```

em que `callback` é uma função que recebe um argumento: o objeto que representa o erro ocorrido.

<div style="align-self: center; border: 3px solid black;">
Nota: Use <code>utf-8</code> como encoding para texto.
</div>

### Copiando arquivos (assíncrono): `copyFile`

Copia o conteúdo de um arquivo para outro. A sintaxe da função é

```js
copyFile(sourceFile, destinationFile, callback);
```

em que `callback` é uma função que aceita um argumento: o objeto que representa o erro ocorrido.

### Criando diretórios (assíncrono): `mkdir`

Cria um diretório com o nome especificado dentro do <strong>diretório atual</strong> (isto é, mesmo diretório em que se localiza o arquivo `.js`). Sintaxe:

```js
mkdir(folderName, callback);
```

em que `folderName` é uma simples string e `callback` é uma função que aceita um argumento: o objeto que representa o erro ocorrido.

### Lendo diretórios (assíncrono): `readdir`

Lê diretório e retorna lista com os nomes dos arquivos e subdiretórios dentro dele. Sintaxe:

```js
readdir(folder, callback);
```

em que `callback` é uma função que aceita dois parâmetros:

1. O objeto que representa o erro ocorrido
2. A lista contendo os nomes dos arquivos e subdiretórios.

Para ler o diretório atual, basta pôr `'.'` como valor do parâmetro `folder`.

### Renomear arquivos (assíncrono): `rename`

Sintaxe:

```js
rename(currentName, newName, callback);
```

em que `callback` é uma função que aceita um argumento: o objeto que representa o erro ocorrido.
