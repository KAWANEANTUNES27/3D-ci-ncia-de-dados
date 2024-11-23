import { getCSS, tickConfig } from "./common.js";

async function quantidadeUsuariosPorRede() {
    try {
        const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json';
        
        // Requisição de dados
        const res = await fetch(url);
        if (!res.ok) throw new Error('Erro ao carregar os dados da API');
        
        const dados = await res.json();

        // Preparar os dados
        const nomeDasRedes = Object.keys(dados);
        const quantidadeDeUsuarios = Object.values(dados);

        // Configuração do gráfico
        const data = [
            {
                x: nomeDasRedes,
                y: quantidadeDeUsuarios,
                type: 'bar',
                marker: {
                    color: getCSS('--primary-color')
                }
            }
        ];

        const layout = {
            plot_bgcolor: getCSS('--bg-color'),
            paper_bgcolor: getCSS('--bg-color'),
            title: {
                text: 'Redes sociais com mais usuários',
                x: 0,
                font: {
                    color: getCSS('--primary-color'),
                    size: 30,
                    family: getCSS('--font')
                }
            },
            xaxis: {
                tickfont: tickConfig,
                title: {
                    text: 'Nome das redes',
                    font: {
                        color: getCSS('--secondary-color')
                    }
                }
            },
            yaxis: {
                tickfont: tickConfig,
                title: {
                    text: 'Bilhões de usuários ativos',
                    font: {
                        color: getCSS('--secondary-color')
                    }
                }
            }
        };

        // Criar e anexar o gráfico ao DOM
        const graficosContainer = document.getElementById('graficos-container');
        if (!graficosContainer) throw new Error('Elemento #graficos-container não encontrado no DOM');

        const grafico = document.createElement('div');
        grafico.className = 'grafico';
        graficosContainer.appendChild(grafico);

        Plotly.newPlot(grafico, data, layout);
    } catch (error) {
        console.error('Erro ao gerar o gráfico:', error.message);
    }
}

quantidadeUsuariosPorRede();

