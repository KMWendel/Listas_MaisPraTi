// 1. Crie um objeto carro com propriedades como marca, modelo, ano, e cor. Use for in para iterar sobre as propriedades e exibir seus valores 
// no console.

// let carro = {
//     marca: "Abarth",
//     modelo: "Fastback",
//     cor: "Branco",
//     ano: 2024
// }
// for(let key in carro){
//     console.log(`${key}: ${carro[key]}`)
// }


// 2. Crie um objeto livro com propriedades titulo, autor, anoPublicacao e genero. Verifique se a propriedade editora existe no objeto usando 
// for in. Se não existir, adicione essa propriedade ao objeto.

// let livro = {
//     titulo: "Um Farol no Pampa",
//     autor: "Leticia Wierzchowski",
//     anoPublicacao: 2004,
//     genero: "Romance"
// }
// let propEditora = false
// for (let key in livro){
//     if (key === "editora"){
//         propEditora = true
//         break
//     }
// }
// if (propEditora === false){
//     livro.editora = "Editora Nova"
// }
// console.log(livro)


// 3. Dado um objeto produto com várias propriedades, crie uma função que retorna um novo objeto contendo apenas as propriedades cujo valor 
// seja maior que um valor específico. Use for in para filtrar as propriedades.

// let produto = {
//     prop1: 5,
//     prop2: 9,
//     prop3: 17,
//     prop4: 18,
//     prop5: 23,
//     prop6: 24,
//     prop7: 45,
//     prop8: 59,
//     prop9: 64,
//     prop10: 89
// }
// let valor = 23
// let filtro = function(algumProduto, valorEspecifico){
//     let produto2 = {}
//     for (let key in algumProduto){
//         if (valorEspecifico < algumProduto[key]){
//             produto2[key] = algumProduto[key]
//         }
//     }
//     return produto2
// }
// let objeto = filtro(produto, valor)
// console.log(objeto)


// 4. Crie um array de objetos pessoas, onde cada objeto representa uma pessoa com nome, idade, e cidade. Use for of para exibir as informações 
// de cada pessoa no console.

// let pessoas = [
//     {nome: "Karoline", idade: 28, cidade: "Roma"},
//     {nome: "Giovanni", idade: 27, cidade: "Tivoli"},
//     {nome: "Claudia", idade: 55, cidade: "Spoleto"},
//     {nome: "André", idade: 57, cidade: "Spello"},
//     {nome: "Leonardo", idade: 30, cidade: "Assissi"}
//   ]
//   for (let pessoa of pessoas){
//      console.log(pessoa)
//   }


// 5. Crie um array de objetos alunos, cada um com propriedades nome, nota1, e nota2. Use for of para calcular a média das notas de cada aluno 
// e exibir o nome do aluno junto com sua média.

// let alunos = [
//     {nome: "Karoline", nota1: 10, nota2: 4.5},
//     {nome: "Giovanni", nota1: 9, nota2: 5.5},
//     {nome: "Claudia", nota1: 8, nota2: 6.5},
//     {nome: "André", nota1: 7, nota2: 7.5},
//     {nome: "Leonardo", nota1: 6, nota2: 8.5}
//   ]
//   for (let aluno of alunos){
//     let media = (aluno.nota1 + aluno.nota2) / 2
//     console.log(`Aluno: ${aluno.nome} - Média: ${media}`)
//   }


// 6. Crie um array de objetos funcionarios, onde cada objeto contém informações como nome, cargo, e salario. Use for of para filtrar e exibir 
// apenas os funcionários cujo salário seja maior que um valor específico.

// let funcionarios = [
//     {nome: "Karoline", cargo: "Orçamentista", salario: 20000},
//     {nome: "Giovanni", cargo: "Analista de contabilidade", salario: 15000},
//     {nome: "Claudia", cargo: "Gerente de marketing", salario: 18000},
//     {nome: "André", cargo: "Gerente de contratos", salario: 15000},
//     {nome: "Leonardo", cargo: "Estagiário", salario: 1000}
//   ]
//   let valorEspecifico = 16000
//   for (let funcionario of funcionarios){
//     if (valorEspecifico < funcionario.salario){
//       console.log(funcionario)
//     }
//   }


// 7. Crie um array de objetos produtos, onde cada objeto tem nome, preco, e desconto. Use forEach para aplicar um desconto de 10% em todos os 
// produtos e exibir o novo preço.

// let produtos = [
//     {nome: "Panela", preco: 250, desconto: 0.1},
//     {nome: "Prato", preco: 35, desconto: 0.1},
//     {nome: "Toalha", preco: 130, desconto: 0.1},
//     {nome: "Chaleira", preco: 150, desconto: 0.1},
//     {nome: "Escorredor", preco: 80, desconto: 0.1}
//   ]
//   produtos.forEach(produto => {
//     let novoPreco = produto.preco * (1 - produto.desconto)
//     console.log(`Valor com desconta do(a) ${produto.nome}: R$ ${novoPreco}`)
//   })


// 8. Crie um array de objetos filmes, onde cada filme tem titulo, diretor, e anoLancamento. Use forEach para criar um novo array contendo 
// apenas os títulos dos filmes.

// let filmes = [
//     {titulo: "A Origem", diretor: "Christopher Nolan", anoLancamento: 2010},
//     {titulo: "O Segredo dos Seus Olhos", preco: "Juan José Campanella", desconto: 2009},
//     {titulo: "Brilho Eterno de uma Mente Sem Lembranças", preco: "Michel Gondry", desconto: 2004},
//     {titulo: "A Vida dos Outros", preco: "Florian Henckel von Donnersmarck", desconto: 2006},
//     {titulo: "Bastardos Inglórios", preco: "Quentin Tarantino", desconto: 2009}
//   ]
//   let filmes2 = []
//   filmes.forEach(nome => {
//     filmes2.push(nome.titulo)
//   })
//   console.log(filmes2)


// 9. Crie um array de objetos clientes, cada um com propriedades nome, idade, e cidade. Use forEach para contar quantos clientes têm mais de 
// 30 anos.

// let clientes = [
//     {nome: "Karoline", idade: 28, cidade: "Roma"},
//     {nome: "Giovanni", idade: 27, cidade: "Tivoli"},
//     {nome: "Claudia", idade: 55, cidade: "Spoleto"},
//     {nome: "André", idade: 57, cidade: "Spello"},
//     {nome: "Leonardo", idade: 30, cidade: "Assissi"}
//   ]
//   let idadeCount = 0
//   clientes.forEach(cliente => {
//       if(cliente.idade > 30){
//           idadeCount++
//       }
//   })
//   console.log(`Clientes com mais de 30 anos: ${idadeCount}`)


// 10. Crie um array de objetos vendas, onde cada objeto tem produto, quantidade e valor. Use forEach para calcular o valor total de vendas de 
// todos os produtos.

// let vendas = [
//     {produto: "Panela", quantidade: 1, valor: 250},
//     {produto: "Prato", quantidade: 2, valor: 35},
//     {produto: "Toalha", quantidade: 3, valor: 130},
//     {produto: "Chaleira", quantidade: 4, valor: 150},
//     {produto: "Escorredor", quantidade: 5, valor: 80}
//   ]
//   let valorTotal = 0
//   vendas.forEach(venda => {
//     valorTotal += venda.quantidade * venda.valor
//   })
//   console.log(`Valor total: R$ ${valorTotal}`)


// 11. Crie um array de objetos pedidos, onde cada pedido tem cliente, produto, e quantidade. Use forEach para criar um objeto que agrupa a 
// quantidade total de produtos por cliente.

// let pedidos = [
//     {cliente: "Karoline", produto: "Panela", quantidade: 1},
//     {cliente: "Giovanni", produto: "Prato", quantidade: 2},
//     {cliente: "Claudia", produto: "Toalha", quantidade: 3},
//     {cliente: "Andre", produto: "Chaleira", quantidade: 4},
//     {cliente: "Leonardo", produto: "Escorredor", quantidade: 5}
//   ]
//   let totalProdutos = {}
//   pedidos.forEach(pedido => {
//       if (totalProdutos[pedido.cliente]){
//           totalProdutos[pedido.cliente] += pedido.quantidade
//       } else {
//           totalProdutos[pedido.cliente] = pedido.quantidade
//       }
//   })
//   console.log(totalProdutos)


// 12. Crie um array de objetos estoque, onde cada objeto tem produto, quantidade e minimo. Use forEach para atualizar a quantidade dos produtos 
// que estão abaixo do mínimo, duplicando suas quantidades.

// let estoque = [
//     {produto: "Panela", quantidade: 170, minimo: 250},
//     {produto: "Prato", quantidade: 40, minimo: 35},
//     {produto: "Toalha", quantidade: 120, minimo: 130},
//     {produto: "Chaleira", quantidade: 200, minimo: 150},
//     {produto: "Escorredor", quantidade: 10, minimo: 80}
//   ]
//   estoque.forEach(est => {
//     if (est.quantidade < est.minimo){
//         est.quantidade *= 2
//     }
//   })
//   console.log(estoque)


// 13. Crie um objeto carrinho com uma propriedade itens, que é um array de objetos. Cada objeto dentro de itens deve representar um produto 
// no carrinho, com nome, quantidade, e precoUnitario. Use forEach para calcular o valor total do carrinho.

// let carrinho = {
//     itens: [
//          {nome: "Panela", quantidade: 1, precoUnitario: 250},
//          {nome: "Prato", quantidade: 2, precoUnitario: 35},
//          {nome: "Toalha", quantidade: 3, precoUnitario: 130},
//          {nome: "Chaleira", quantidade: 4, precoUnitario: 150},
//          {nome: "Escorredor", quantidade: 5, precoUnitario: 80}
//     ]
// }
// let valorTotal = 0
// carrinho.itens.forEach(item => {
//     valorTotal += item.quantidade * item.precoUnitario
// })
// console.log(`Valor total: R$ ${valorTotal}`)


// 14. Crie um objeto empresa com uma propriedade departamentos, que é um array de objetos. Cada departamento tem um nome e uma lista de 
// funcionarios. Use for in e for of para iterar sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com 
// o departamento ao qual pertence.

// let empresa = {
//     departamentos: [
//          {nome: "Produção", funcionarios: ["Guilherme", "Gustavo", "Rafael"]},
//          {nome: "Orçamentos", funcionarios: ["Karoline", "Bruna", "Juliano"]},
//          {nome: "Apoio", funcionarios: ["Alex", "Mauricio", "Larissa"]},
//          {nome: "Financeiro", funcionarios: ["Adriano", "Marcelo", "Leonardo"]},
//          {nome: "Logistica", funcionarios: ["Aline", "Herivelton", "João"]}
//     ]
// }
// for (let key in empresa.departamentos) {
//     let departamento = empresa.departamentos[key]
//     for (let funcionario of departamento.funcionarios){
//         console.log(`${funcionario} - ${departamento.nome}`)
//     }
// }


// 15. Crie um array de objetos transacoes, onde cada transação tem tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final, 
// somando as entradas e subtraindo as saídas.

// let transacoes = [
//     {tipo: "entrada", valor: 10 },
//     {tipo: "entrada", valor: 20 },
//     {tipo: "saida", valor: 30 },
//     {tipo: "saida", valor: 40 },
//     {tipo: "saida", valor: 50 }
// ]
// let saldoFinal = 0
// transacoes.forEach(transacao => {
//     if (transacao.tipo === "entrada"){
//         saldoFinal += transacao.valor
//     } else {
//         saldoFinal -= transacao.valor
//     }
// })
// console.log(`Saldo final: R$ ${saldoFinal}`)
