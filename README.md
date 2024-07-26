# Projeto de Validação de Email e CPF

## Índice

- [Descrição](#descrição)
- [Introdução](#introdução)
- [Funcionalidades](#funcionalidades)
- [Interface](#interface)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Autor](#autor)
- [Documentação JavaScript](#documentação-javascript)

## Descrição
Este projeto tem como objetivo demonstrar a validação de CPF e Email utilizando JavaScript. Ele foi desenvolvido como parte de uma atividade em sala de aula e serve como exemplo prático de como aplicar técnicas de validação em formulários web.

## Introdução
A validação de dados é uma parte essencial do desenvolvimento de aplicações web. Este projeto contém dois exemplos de validação:
1. Validação de CPF
2. Validação de Email
Cada exemplo está documentado de forma separada, explicando os recursos JavaScript utilizados.

## Funcionalidades
### Validação de CPF
- Recebe um número de CPF e valida se é um CPF válido de acordo com os critérios de formação do documento.
- Exibe uma mensagem indicando se o CPF é válido ou inválido.
### Validação de Email
- Recebe um endereço de email e valida se contém os caracteres essenciais (`@` e `.`).
- Exibe uma mensagem indicando se o email é válido ou inválido.

## Interface
### Validação de CPF
![interface](img/validacao-cpf.png)

A interface consiste em um formulário simples onde o usuário pode inserir seu CPF e verificar sua validade. A página exibe uma mensagem com o resultado da validação.
### Validação de Email
![interface](img/validacao-email.com)

A interface consiste em um formulário onde o usuário pode inserir seu email. Ao perder o foco do campo de entrada, a validação é realizada e o resultado é exibido.

## Documentação JavaScript

## Validação de CPF

## Estrutura Básica
No arquivo `cpf.js`, adicionamos um escutador de eventos ao formulário para interceptar a submissão, prevenindo o envio padrão e realizando a validação do CPF inserido.

## Função de Validação
A função `validarCPF(cpf)` realiza a validação do CPF em várias etapas:
- **Remover caracteres não numéricos**: `cpf.replace(/[^\d]+/g, '')`
- **Verificar se o CPF tem 11 dígitos e se todos os dígitos não são iguais**: `cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)`
- **Calcular o primeiro dígito verificador**: Iteração de 1 a 9, multiplicando os dígitos por valores decrescentes de 10 a 2, somando e calculando o resto da divisão por 11.
- **Comparar o primeiro dígito verificador**: `if(resto !== parseInt(cpf.substring(9, 10))) return false`
- **Calcular o segundo dígito verificador**: Iteração de 1 a 10, multiplicando os dígitos por valores decrescentes de 11 a 2, somando e calculando o resto da divisão por 11.
- **Comparar o segundo dígito verificador**: `if(resto !== parseInt(cpf.substring(10, 11))) return false`

## Atualizando o DOM
- **Exibir mensagem de validação**: `msg.textContent = 'O CPF é válido!'; msg.style.color = 'green';`

## Validação de Email

## Estrutura Básica
No arquivo `email.js`, a função `checarEmail()` é chamada quando o campo de email perde o foco.

## Função de Validação
A função `checarEmail()` realiza a validação básica do email:
- **Obter o valor do campo de email**: `const email = document.forms[0].email.value`
- **Verificar se o campo está vazio ou se não contém os caracteres essenciais**: `if (email === "" || email.indexOf('@') === -1 || email.indexOf('.') === -1)`
- **Exibir mensagem de alerta**: `alert("Por favor, informe um e-mail válido")`
- **Atualizar o conteúdo do parágrafo**: `document.getElementById('email').innerHTML = email`

Ambas as validações são exemplos básicos de como garantir que os dados inseridos pelos usuários estão no formato esperado, utilizando JavaScript para manipular e validar os valores dos campos de entrada dos formulários.
tem menu de contexto

## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript

## Autor
- João Pedro Gonçalves