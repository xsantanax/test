WITH FORNECEDORES_VITORIA AS
(SELECT *
FROM FORNECEDOR
WHERE CIDADE = 'VITORIA')
 
WITH FORNECIMENTO_MOTOR_KOMBI AS
(SELECT *
FROM FORNECIMENTO
WHERE CODIGO_PECA = 'MOTOR' AND CODIGO_CARRO = 'KOMBI')

WITH FORNECIMENTO_MOTOR_KOMBI_VITORIA AS
(SELECT *
FROM FORNECEDORES_VITORIA
INNER JOIN FORNECIMENTO_MOTOR_KOMBI
ON FORNECEDORES_VITORIA.CODIGO_FORNECEDOR = FORNECIMENTO_MOTOR_KOMBI.CODIGO_FORNECEDOR)

SELECT NOME_FORNECEDOR, PRECO
FROM FORNECIMENTO_MOTOR_KOMBI_VITORIA
INNER JOIN PEÇA
ON FORNECIMENTO_MOTOR_KOMBI_VITORIA.CODIGO_PECA = PEÇA.CODIGO_PEÇA

