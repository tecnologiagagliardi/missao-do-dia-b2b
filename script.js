const form = document.getElementById('missaoForm');
const relatorioDiv = document.getElementById('relatorio');
const botao = form.querySelector('button');

let relatorioGerado = false;
let botaoCancelar;

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Pegar valores dos inputs
    const data = document.getElementById('data').value;
    const consultor = document.getElementById('consultor').value;

    const visitas = document.getElementById('visitas').value;
    const inadimplentes = document.getElementById('inadimplentes').value;
    const semCompras = document.getElementById('semCompras').value;
    const parcerias = document.getElementById('parcerias').value;
    const reativacao = document.getElementById('reativacao').value;
    const positivacao = document.getElementById('positivacao').value;
    const pipeline = document.getElementById('pipeline').value;

    const lub = document.getElementById('lub').value;
    const graxas = document.getElementById('graxas').value;
    const shc = document.getElementById('shc').value;
    const tirreno = document.getElementById('tirreno').value;
    const pneus4r = document.getElementById('pneus4r').value;
    const arla = document.getElementById('arla').value;
    const quimics = document.getElementById('quimics').value;

    const textoRelatorio = `
📌 MISSÃO DO DIA B2B
📅 Data: ${data}
👤 Consultor: ${consultor}

📊 KPI's Estratégicos
- Nº de Visitas = ${visitas}
- Clientes Inadimplentes = ${inadimplentes}
- Clientes sem Compras 2025 = ${semCompras}
- Clientes Parcerias = ${parcerias}
- Meta Dia Reativação = ${reativacao}
- Meta Dia Positivação = ${positivacao}
- Meta Pipeline = ${pipeline}

📈 KPI's Táticos
- Meta Dia LUB (Lts) = ${lub}
- Meta Dia Graxas (Kg) = ${graxas}
- Meta SHC (Lts) = ${shc}
- Meta Dia Tirreno (Lts) = ${tirreno}
- Meta Dia Pneus 4R = ${pneus4r}
- Meta Gforce Arla (Unds) = ${arla}
- Meta Gforce Quimics (Unds) = ${quimics}
`;

    if (!relatorioGerado) {
        relatorioDiv.innerText = textoRelatorio;
        botao.innerText = "Compartilhar";
        relatorioGerado = true;

        if (!botaoCancelar) {
            botaoCancelar = document.createElement('button');
            botaoCancelar.type = 'button';
            botaoCancelar.innerText = 'Cancelar';
            botaoCancelar.style.marginTop = '10px';
            botaoCancelar.style.background = '#c0392b';
            botaoCancelar.style.color = '#fff';
            botaoCancelar.style.border = 'none';
            botaoCancelar.style.padding = '10px';
            botaoCancelar.style.borderRadius = '8px';
            botaoCancelar.style.cursor = 'pointer';
            botaoCancelar.addEventListener('click', () => {
                relatorioDiv.innerText = '';
                form.reset();
                botao.innerText = 'Gerar Relatório';
                relatorioGerado = false;
            });
            form.appendChild(botaoCancelar);
        }
    } else {
        // Modal de confirmação
        const modal = document.getElementById('modalConfirmacao');
        const modalTexto = document.getElementById('modalTexto');
        const btnConfirmar = document.getElementById('btnConfirmar');
        const btnFechar = document.getElementById('btnFechar');

        modalTexto.textContent = textoRelatorio;
        modal.style.display = "flex";

        btnConfirmar.onclick = () => {
            const linkWhats = `https://wa.me/?text=${encodeURIComponent(textoRelatorio)}`;
            window.open(linkWhats, '_blank');
            modal.style.display = "none";
        };

        btnFechar.onclick = () => {
            modal.style.display = "none";
        };

        window.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
    }
});