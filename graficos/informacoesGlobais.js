const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    try {
        const res = await fetch(url)
        if (!res.ok) throw new Error('Erro ao buscar os dados da URL.')

        const dados = await res.json()

        // Validação de dados
        if (!dados.total_pessoas_conectadas || !dados.total_pessoas_mundo || !dados.tempo_medio) {
            throw new Error('Dados incompletos ou inválidos.')
        }

        // Cálculos
        const pessoasConectadas = dados.total_pessoas_conectadas / 1e9; // em bilhões
        const pessoasNoMundo = dados.total_pessoas_mundo / 1e9; // em bilhões
        const horas = Math.floor(dados.tempo_medio);
        const minutos = Math.round((dados.tempo_medio - horas) * 60);
        const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo) * 100).toFixed(2);

        // Formatação dos números com separadores de milhar
        const formatarNumero = new Intl.NumberFormat('pt-BR');
        const pessoasConectadasFormatado = formatarNumero.format(pessoasConectadas);
        const pessoasNoMundoFormatado = formatarNumero.format(pessoasNoMundo);

        // Criar o parágrafo com as informações
        const paragrafo = document.createElement('p');
        paragrafo.classList.add('graficos-container__texto');
        paragrafo.innerHTML = `
            Você sabia que o mundo tem <span>${pessoasNoMundoFormatado} bilhões</span> de pessoas e que aproximadam
