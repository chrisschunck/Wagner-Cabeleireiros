/* ==========================================================================
   Studio Wagner Cabeleireiros — script.js
   Vanilla JS, sem frameworks e sem fetch/JSON externo — os dados ficam em
   arrays literais aqui embaixo para funcionar mesmo se a página for aberta
   direto do disco (file://), sem servidor.
   ========================================================================== */

// ---------- Configuração ----------

// TODO: trocar pelo número real do salão, formato DDI+DDD+número, só dígitos.
const whatssapp_numero_santa_cecilia = "5511989723130";
const whatssapp_numero_casa_verde = "551139514715";

// ---------- Dados: catálogo de produtos ----------
// TODO: ajustar preços/nomes reais e trocar "imagem" pelo caminho definitivo
// em assets/img/produtos/ quando as fotos chegarem.

const procedimentos_santa_cecilia = [
  {
    id: "proc-001",
    categoria: "Cabelo",
    nome: "Corte Masculino",
    preco: 70.0,
  },
  {
    id: "proc-002",
    categoria: "Cabelo",
    nome: "Corte Maquina",
    preco: 40.0,
  },
  {
    id: "proc-003",
    categoria: "Cabelo",
    nome: "Pezinho Cabelo",
    preco: 20.0,
  },
  {
    id: "proc-004",
    categoria: "Cabelo",
    nome: "Barba",
    preco: 50.0,
  },
  {
    id: "proc-005",
    categoria: "Cabelo e Barba",
    nome: "Corte + Barba",
    preco: 120.0,
  },
  {
    id: "proc-006",
    categoria: "Cabelo",
    nome: "Corte Feminino",
    preco: 70.0,
  },
  {
    id: "proc-007",
    categoria: "Pedicure",
    nome: "Pé",
    preco: 45.0,
    adicional: "francesinha + R$ 5,00",
  },
  {
    id: "proc-008",
    categoria: "Manicure",
    nome: "Mão",
    preco: 40.0,
    adicional: "francesinha + R$ 5,00",
  },
  {
    id: "proc-009",
    categoria: "Manicure e Pedicure",
    nome: "Mão + Pé",
    preco: 85.0,
    adicional: "francesinha + R$ 5,00",
  },
  {
    id: "proc-010",
    categoria: "Podologia",
    nome: "Podologia",
    preco: 140.0,
    adicional: "pintada + R$ 20,00",
  },
  {
    id: "proc-011",
    categoria: "Pintura",
    nome: "Pintura",
    preco: 20.0,
  },
  {
    id: "proc-012",
    categoria: "Cabelo",
    nome: "Escova a partir de",
    preco: 50.0,
  },
  {
    id: "proc-013",
    categoria: "Depilação",
    nome: "Sobrancelha",
    preco: 40.0,
    adicional: "pintada + R$ 20,00",
  },
]

const procedimentos_casa_verde = []

const marcas = [
  {
    id: "marca-001",
    nome: "Alfaparf",
  },
  {
    id: "marca-002",
    nome: "Red Iron",
  },
  {
    id: "marca-003",
    nome: "Loréal",
  },
  {
    id: "marca-004",
    nome: "Raiz Latina",
  },
  {
    id: "marca-005",
    nome: "Joico",
  },
  {
    id: "marca-004",
    nome: "MBH",
  },
  {
    id: "marca-005",
    nome: "Pierry Lohan",
  },
  {
    id: "marca-006",
    nome: "Black Fox",
  },
  {
    id: "marca-007",
    nome: "Soft Hair",
  },
  {
    id: "marca-008",
    nome: "Charming",
  }
]

const produtos = [
  {
    id: "prod-001",
    categoria: "Cuidado",
    nome: "Cera Caramelo Efeito Brilho MBH - 150g",
    preco: 25.0,
    imagem: "assets/caramelo.jpg",
  },
  {
    id: "prod-002",
    categoria: "Cuidado",
    nome: "Cera Incolor Efeito Brilho MBH- 150g",
    preco: 25.0,
    imagem: "assets/cerambh.jpg",
  },
  {
    id: "prod-003",
    categoria: "Cuidado",
    nome: "Cera Verde MBH - 150g",
    preco: 25.0,
    imagem: "assets/vmbh.jpg",
  },
  {
    id: "prod-004",
    categoria: "Cuidado",
    nome: "Pasta Modeladora Efeito Matt Duck - 120g",
    preco: 25.0,
    imagem: "assets/duck.jpg",
  },
  {
    id: "prod-005",
    categoria: "Cuidado",
    nome: "Gel Cera Pierry Lohan - 250g",
    preco: 25.0,
    imagem: "assets/lohan.jpg",
  },
  {
    id: "prod-006",
    categoria: "Cuidado",
    nome: "Gel Cera Pierry Lohan - 500g",
    preco: 30.0,
    imagem: "assets/gel500g.jpg",
  },
  {
    id: "prod-007",
    categoria: "Cuidado",
    nome: "Gel Cola Black Fox - 300g",
    preco: 20.0,
    imagem: "assets/gelfox.jpg",
  },
  {
    id: "prod-008",
    categoria: "Cuidado",
    nome: "Gel Modelador Extra Forte Force MBH - 240g",
    preco: 20.0,
    imagem: "assets/gelmbh.jpg",
  },
  {
    id: "prod-009",
    categoria: "Cuidado",
    nome: "Shampoo Soft Hair - 500ml",
    preco: 40.0,
    imagem: "assets/soft.jpg",
  },
  {
    id: "prod-010",
    categoria: "Cuidado",
    nome: "Shampoo Precius Nature Alfaparf - 250ml",
    preco: null,
    imagem: "assets/nature.jpg",
  },
  {
    id: "prod-011",
    categoria: "Cuidado",
    nome: "Shampoo Real Rigen Reparador Alfaparf- 250ml",
    preco: 55.0,
    imagem: "assets/srigen.jpg",
  },
  {
    id: "prod-012",
    categoria: "Cuidado",
    nome: "Condicionador Real Rigen Reparador Alfaparf - 250ml",
    preco: 55.0,
    imagem: "assets/cond.jpg",
  },
  {
    id: "prod-013",
    categoria: "Cuidado",
    nome: "Shampoo Raiz Latina - 250ml",
    preco: 75.0,
    imagem: "assets/sraiz.jpg",
  },
  {
    id: "prod-014",
    categoria: "Cuidado",
    nome: "Condicionador Raiz Latina - 250ml",
    preco: 75.0,
    imagem: "assets/craiz.jpg", 
  },
  {
    id: "prod-015",
    categoria: "Finalização",
    nome: "Finalizador Raiz Latina - 250ml",
    preco: 75.0,
    imagem: "assets/fraiz.jpg",
  },
  {
    id: "prod-016",
    categoria: "Finalização",
    nome: "Óleo Finalizador Semi Di Lino - 100ml",
    preco: 150.0,
    imagem: "assets/semi.jpg",
  },
  {
    id: "prod-017",
    categoria: "Finalização",
    nome: "Óleo Finalizador Fusion - 50ml",
    preco: 75.0,
    imagem: "assets/fusion.jpg",
  },
  {
    id: "prod-018",
    categoria: "Styling",
    nome: "Spray Fixador Charming - 400ml",
    preco: 65.0,
    imagem: 'assets/spray.jpg',
  },
  {
    id: "prod-019",
    categoria: "Styling",
    nome: "Kit Smooth Control Shampoo Tratamentos Leave-in Red Iron",
    preco: null,
    imagem: 'assets/kit.jpg',
  },
  {
    id: "prod-020",
    categoria: "Cuidado",
    nome: "Kit Raiz Latina Tutano",
    preco: 245.0,
    imagem: 'assets/raiz.jpg',
  },
  {
    id: "prod-021",
    categoria: "Cuidado",
    nome: "Kit Alfaparf Semi Di Lino Moisture",
    preco: 360.0,
    imagem: "assets/rosa.jpg",
  },
  {
    id: "prod-022",
    categoria: "Cuidado",
    nome: "Kit Alfaparf Semi Di Lino Smoothing Smooth",
    preco: 340.0,
    imagem: "assets/lilas.jpg",
  },
  {
    id: "prod-023",
    categoria: "Cuidado",
    nome: "Kit Alfaparf Semi Di Lino Reconstruction Reparative",
    preco: 280.0,
    imagem: "assets/kit-verde.webp",
  },
  {
    id: "prod-024",
    categoria: "Cuidado",
    nome: "Kit Alfaparf Semi Di Lino Diamond",
    preco: 280.0,
    imagem: "assets/kit-branco.webp",
  },
  {
    id: "prod-025",
    categoria: "Cuidado",
    nome: "Kit Real Rigen Shampoo + Condicionador Reparador Alfaparf",
    preco: 110.0,
    imagem: "assets/kitr.jpg",
  },
  {
    id: "prod-026",
    categoria: "Cuidado",
    nome: "Cold Cream Pós-Barba - 250g",
    preco: 45.0,
    imagem: "assets/barba.jpg",
  },
  {
    id: "prod-027",
    categoria: "Cuidado",
    nome: " Grooming Modelador Volume E Textura MBH- 240ml",
    preco: 45.0,
    imagem: "assets/grooming.jpg",
  },
  {
    id: "prod-028",
    categoria: "Cuidado",
    nome: "Matizador Magic Color 3D Prata - 300ml",
    preco: 85.0,
    imagem: "assets/prata.jpg",
  },
  {
    id: "prod-029",
    categoria: "Cuidado",
    nome: "Matizador Magic Color 3D Pérola - 300ml",
    preco: 85.0,
    imagem: "assets/perola.jpg",
  },
  {
    id: "prod-030",
    categoria: "Cuidado",
    nome: "Shampoo Semi Di Lino Reconstruction Reparative - 250ml",
    preco: 100.0,
    imagem: "assets/ssemi.jpg",
  }
];

// ---------- Dados: equipe ----------
// TODO: trocar "foto" pelo caminho em assets/img/equipe/ quando chegarem.
const equipe_santa_cecília = [
  { id: "eq-001", nome: "Eliane Ribeiro", cargo: "Auxiliar", foto: "assets/eliane_freitas.jpg" },
  { id: "eq-002", nome: "Christian Schunck", cargo: "Recepcionista", foto: "assets/christian_schunck.jpg" },
  { id: "eq-003", nome: "Cris Camargo", cargo: "Recepcionista", foto: "assets/cris_camargo.jpg" },
  { id: "eq-004", nome: "Juliana Rocha", cargo: "Manicure/Pedicure", foto: "assets/juliana.jpg" },
  { id: "eq-005", nome: "Wagner Coelho", cargo: "Barbeiro/Boss", foto: "assets/wagner.jpg" },
  { id: "eq-006", nome: "Carlos Eduardo (Cadu)", cargo: "Barbeiro/Cabeleireiro masculino", foto: "assets/carlos_eduardo.jpg" },
  { id: "eq-007", nome: "Nilson Nunes", cargo: "Barbeiro/Cabeleireiro", foto: "assets/nilson_nunes.jpg" },
  { id: "eq-008", nome: "Solange Passarini (Sol)", cargo: "Cabeleireira", foto: "assets/solange_passarini.jpg" },
  { id: "eq-009", nome: "Creuza Araújo", cargo: "Manicure/Pedicure", foto: "assets/creuza_araujo.jpg" },
  { id: "eq-010", nome: "Joh Fonseca (Jo)", cargo: "Barbeiro/Cabeleireiro", foto: "assets/joh_fonseca.jpg" },
  { id: "eq-011", nome: "Taciana Soares", cargo: "Podologa/Manicure/Pedicure", foto: "assets/taciana_soares.jpg" },
  { id: "eq-012", nome: "Luciana Cortez", cargo: "Manicure/Pedicure", foto: "assets/luciana_cortez.jpg" }
];

const equipe_casa_verde = [
  { id: "eq-013", nome: "Sindy Machado", cargo: "Cabeleireira", foto: "assets/sindy.jpg" },
  { id: "eq-014", nome: "Elisa Almeida", cargo: "Gerente", foto: "assets/elisa.jpg" },
  { id: "eq-015", nome: "Chrys Sanson", cargo: "Cabeleireira/Manicure/Pedicure", foto: "assets/chrys.jpg" },
  { id: "eq-016", nome: "Eduardo Fernandes", cargo: "Cabeleireiro", foto: "assets/eduardo.jpg" },
  { id: "eq-017", nome: "Léia", cargo: "Auxiliar", foto: "assets/leia.jpg" },
  { id: "eq-018", nome: "Evellyn Oliveira", cargo: "Cabeleireira/Lash Designer", foto: "assets/evellyn.jpg" },
  { id: "eq-019", nome: "Andrea de Oliveira", cargo: "Nail Designer", foto: "assets/andrea.jpg" },
  { id: "eq-020", nome: "Max Santos", cargo: "Estetica facial e corporal", foto: "assets/max.jpg" },
  { id: "eq-021", nome: "Lia Maria", cargo: "Manicure/Pedicure", foto: "assets/lia.jpg" },
];

// ---------- Formatação ----------

function formatarPreco(valor) {
  if (valor === null || valor === undefined) return "Consulte";
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// ---------- Renderização: catálogo ----------

function criarCardProduto(produto) {
  const card = document.createElement("article");
  card.className = "flex h-full flex-col rounded-sm border border-ink/15 bg-surface p-3";

  const foto = document.createElement("div");
  foto.className = "mb-3.5 flex aspect-[4/5] items-center justify-center overflow-hidden rounded-md border border-dashed border-ink/15 bg-surface-2 text-center font-mono text-[11px] text-muted";
  if (produto.imagem) {
    const img = document.createElement("img");
    img.className = "h-full w-full";
    img.src = produto.imagem;
    img.alt = produto.nome;
    foto.appendChild(img);
  } else {
    foto.textContent = "Foto em breve";
  }

  const categoria = document.createElement("p");
  categoria.className = "font-mono text-[11px] uppercase tracking-wider text-gold";
  categoria.textContent = produto.categoria;

  const nome = document.createElement("h4");
  nome.className = "my-1.5 font-display text-xl";
  nome.textContent = produto.nome;

  const preco = document.createElement("p");
  preco.className = "border-t text-center pt-3 font-bold text-base text-ink";
  preco.textContent = formatarPreco(produto.preco);

  card.append(foto, categoria, nome, preco);
  return card;
}

function renderizarCatalogo() {
  const grid = document.getElementById("catalogo-grid");
  if (!grid) return;

  if (produtos.length === 0) {
    grid.dataset.state = "empty";
    grid.dataset.message = "Catálogo em atualização.";
    return;
  }

  grid.dataset.state = "";
  const fragmento = document.createDocumentFragment();
  produtos.forEach((produto) => fragmento.appendChild(criarCardProduto(produto)));
  grid.replaceChildren(fragmento);
}

// ---------- Renderização: equipe ----------

function criarCardEquipeSantaCecilia(representanteSantaCecilia) {
  const card = document.createElement("div");
  card.className = "flex flex-col items-center text-center";

  const foto = document.createElement("div");
  foto.className = "mx-auto mb-3 flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border border-dashed border-ink/15 bg-surface text-center font-mono text-[11px] text-muted sm:h-40 sm:w-40";
  if (representanteSantaCecilia.foto) {
    const img = document.createElement("img");
    img.className = "h-full w-full rounded-full object-cover object-center";
    img.src = representanteSantaCecilia.foto;
    img.alt = representanteSantaCecilia.nome;
    foto.appendChild(img);
  } else {
    foto.textContent = "Foto em breve";
  }

  const nome = document.createElement("p");
  nome.className = "font-display text-lg leading-tight";
  nome.textContent = representanteSantaCecilia.nome;

  const cargo = document.createElement("p");
  cargo.className = "font-mono text-[11px] uppercase tracking-wider text-muted";
  cargo.textContent = representanteSantaCecilia.cargo;

  card.append(foto, nome, cargo);
  return card;
}

function criarCardEquipeCasaVerde(representanteCasaVerde) {
  const card = document.createElement("div");
  card.className = "flex flex-col items-center text-center";

  const foto = document.createElement("div");
  foto.className = "mx-auto mb-3 flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border border-dashed border-ink/15 bg-surface text-center font-mono text-[11px] text-muted sm:h-40 sm:w-40";
  if (representanteCasaVerde.foto) {
    const img = document.createElement("img");
    img.className = "h-full w-full rounded-full object-cover object-center";
    img.src = representanteCasaVerde.foto;
    img.alt = representanteCasaVerde.nome;
    foto.appendChild(img);
  } else {
    foto.textContent = "Foto em breve";
  }

  const nome = document.createElement("p");
  nome.className = "font-display text-lg leading-tight";
  nome.textContent = representanteCasaVerde.nome;

  const cargo = document.createElement("p");
  cargo.className = "font-mono text-[11px] uppercase tracking-wider text-muted";
  cargo.textContent = representanteCasaVerde.cargo;

  card.append(foto, nome, cargo);
  return card;
}

function renderizarEquipeSantaCecilia() {
  const grid = document.getElementById("equipe-santa-cecília-grid");
  if (!grid) return;

  const fragmentoSantaCecília = document.createDocumentFragment();
  equipe_santa_cecília.forEach((representante) => fragmentoSantaCecília.appendChild(criarCardEquipeSantaCecilia(representante)));
  grid.replaceChildren(fragmentoSantaCecília);
}

function renderizarEquipeCasaVerde() {
  const grid = document.getElementById("equipe-casa-verde-grid");
  if (!grid) return;

  const fragmentoCasaVerde = document.createDocumentFragment();
  equipe_casa_verde.forEach((representante) => fragmentoCasaVerde.appendChild(criarCardEquipeCasaVerde(representante)));
  grid.replaceChildren(fragmentoCasaVerde);
}

// ---------- Contato via WhatsApp ----------

function montarLinkWhatsapp(numero, mensagem) {
  const mensagemCodificada = encodeURIComponent(mensagem);
  return `https://wa.me/${numero}?text=${mensagemCodificada}`;
}

function configurarBotaoWhatsappSantaCecilia() {
  const botao = document.getElementById("btn-whatsapp-santa-cecilia");
  if (!botao) return;

  const mensagem = "Olá! Vim pelo site da casa e gostaria de agendar um horário.";
  botao.href = montarLinkWhatsapp(whatssapp_numero_santa_cecilia, mensagem);
}

function configurarBotaoWhatsappCasaVerde() {
  const botao = document.getElementById("btn-whatsapp-casa-verde");
  if (!botao) return;

  const mensagem = "Olá! Vim pelo site da casa e gostaria de agendar um horário.";
  botao.href = montarLinkWhatsapp(whatssapp_numero_casa_verde, mensagem);
}


    const studioSelect = document.getElementById("studio-select");
    if (studioSelect) {
      studioSelect.addEventListener("change", (event) => {
        const destino = event.target.value;
        if (destino) {
          window.location.href = destino;
        }
      });
    }

// ---------- Inicialização ----------

document.addEventListener("DOMContentLoaded", () => {
  renderizarCatalogo();
  renderizarEquipeSantaCecilia();
  renderizarEquipeCasaVerde();
  configurarBotaoWhatsappSantaCecilia();
  configurarBotaoWhatsappCasaVerde();
});
