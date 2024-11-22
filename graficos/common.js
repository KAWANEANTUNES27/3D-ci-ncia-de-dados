// script.js
// Dados fictícios sobre tipos de jogadores e percentuais de vício em jogos de azar
const data = [
    { categoria: "Casual", percentual: 20 },
    { categoria: "Regular", percentual: 45 },
    { categoria: "Compulsivo", percentual: 35 }
];

// Configuração do gráfico
const width = 500;
const height = 300;
const barWidth = 80; // Largura de cada barra

const svg = d3.select("#chart-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// Escala de cores para cada categoria
const colorScale = d3.scaleOrdinal()
    .domain(["Casual", "Regular", "Compulsivo"])
    .range(["#4CAF50", "#FFC107", "#F44336"]);  // Verde, amarelo, vermelho

// Adicionar barras
svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * (barWidth + 20))  // Espaçamento entre barras
    .attr("y", d => height - d.percentual * 5)
    .attr("width", barWidth)
    .attr("height", d => d.percentual * 5)
    .attr("fill", d => colorScale(d.categoria));

// Adicionar rótulos de categoria
svg.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .attr("x", (d, i) => i * (barWidth + 20) + barWidth / 2)
    .attr("y", d => height - d.percentual * 5 - 10) // Posição acima da barra
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("fill", "#000")
    .text(d => `${d.percentual}%`);

// Adicionar nomes das categorias abaixo das barras
svg.selectAll(".label")
    .data(data)
    .enter()
    .append("text")
    .attr("class", "label")
    .attr("x", (d, i) => i * (barWidth + 20) + barWidth / 2)
    .attr("y", height + 15)
    .attr("text-anchor", "middle")
    .attr("font-size", "16px")
    .attr("fill", "#000")
    .text(d => d.categoria);// script.js
// Dados fictícios sobre tipos de jogadores e percentuais de vício em jogos de azar
const data = [
    { categoria: "Casual", percentual: 20 },
    { categoria: "Regular", percentual: 45 },
    { categoria: "Compulsivo", percentual: 35 }
];

// Configuração do gráfico
const width = 500;
const height = 300;
const barWidth = 80; // Largura de cada barra

const svg = d3.select("#chart-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// Escala de cores para cada categoria
const colorScale = d3.scaleOrdinal()
    .domain(["Casual", "Regular", "Compulsivo"])
    .range(["#4CAF50", "#FFC107", "#F44336"]);  // Verde, amarelo, vermelho

// Adicionar barras
svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * (barWidth + 20))  // Espaçamento entre barras
    .attr("y", d => height - d.percentual * 5)
    .attr("width", barWidth)
    .attr("height", d => d.percentual * 5)
    .attr("fill", d => colorScale(d.categoria));

// Adicionar rótulos de categoria
svg.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .attr("x", (d, i) => i * (barWidth + 20) + barWidth / 2)
    .attr("y", d => height - d.percentual * 5 - 10) // Posição acima da barra
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("fill", "#000")
    .text(d => `${d.percentual}%`);

// Adicionar nomes das categorias abaixo das barras
svg.selectAll(".label")
    .data(data)
    .enter()
    .append("text")
    .attr("class", "label")
    .attr("x", (d, i) => i * (barWidth + 20) + barWidth / 2)
    .attr("y", height + 15)
    .attr("text-anchor", "middle")
    .attr("font-size", "16px")
    .attr("fill", "#000")
    .text(d => d.categoria);
