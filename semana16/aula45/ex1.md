1) B - Renderizou uma lista com todos os banco de dados disponiveis,schemas e tables.

C - Descreveu todos os parametros da tabela e seus tipos.

//////////==========///////////

2) B - Código de erro: 1062. Entrada duplicada 'Glória Pires' para a chave 'PRIMÁRIA', por já existir um ator/atriz com o mesmo id 

C - Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1

D - Código de erro: 1364. O campo 'nome' não tem um valor padrão

E - Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1

3) A - SELECT id, name, salary,birth_date,gender from Actor WHERE gender = "female";

B - SELECT salary from Actor WHERE name ="Tony Ramos"

C - Retornou todos os valores selecionados como null(vazio) por ter sido passar um valor inválido

D - SELECT id, name, salary from Actor WHERE salary > 500.000

E - Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos',SELECT id, name from Actor WHERE id = "002"

4 A - Retorna todos os atores/atrizes em que o nome começa com a ou e com saário maior que 300000

B - WHERE (name  NOT LIKE "A%") AND salary < 35000000

C - WHERE (name LIKE  "%g%" OR name like "%G%")

D - SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
