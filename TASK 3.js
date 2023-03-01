// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const data = require('./dados/dados.json')
function processData() {
    // Encontrar o menor e o maior valor do faturamento diário
    const lowerValue = Math.min(...data.map(data => data.valor))
    const biggerValue = Math.max(...data.map(data => data.valor))

    console.log(`Menor valor: ${lowerValue}`);
    console.log(`Maior valor: ${biggerValue}`);

    // Calcular a média mensal de faturamento
    let sunValues = 0, daysWithInvoicing = 0;

    data.map(data => {
        if (data.valor != 0) {
            sunValues += data.valor;
            daysWithInvoicing++;
        }
    })
    const monthlyAverage = sunValues / daysWithInvoicing;
    console.log(`Média mensal: ${monthlyAverage}`);

    // Encontrar o número de dias em que o faturamento diário foi superior à média mensal
    let aboveAverageDays = 0;

    data.map((data => {
        if (data.valor > monthlyAverage) {
            aboveAverageDays++;
        }
    }))
    console.log(`Número de dias acima da média: ${aboveAverageDays}`);
}

processData()