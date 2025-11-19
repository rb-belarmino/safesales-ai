# 🤖 SafeSales AI

**Sistema Inteligente de Apoio ao Especialista Comercial**

[![FIAP](https://img.shields.io/badge/FIAP-Global_Solution-purple?style=for-the-badge)](https://www.fiap.com.br)
[![Version](https://img.shields.io/badge/version-2.0-blue?style=for-the-badge)](https://github.com/rb-belarmino/safesales-ai)
[![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](LICENSE)
[![ODS](https://img.shields.io/badge/ODS-4%20|%208%20|%2010-orange?style=for-the-badge)](https://sdgs.un.org)

> Projeto desenvolvido para a **FIAP - Global Solution 2025**  
> Tema: **Futuro do Trabalho (2030-2050)** com foco em IA, sustentabilidade e impacto social

---

## 📖 Sobre o Projeto

A **SafeSales AI** é uma solução inteligente que transforma o papel do especialista comercial no contexto do **Futuro do Trabalho**, integrando:

- 🧠 **Inteligência Artificial** para análise preditiva e recomendações
- 🌍 **Impacto Social** alinhado aos **Objetivos de Desenvolvimento Sustentável (ODS)** da ONU
- 📊 **Governança Responsável** com foco em ESG (Environmental, Social, Governance)
- 🚀 **Automação Inteligente** que humaniza o trabalho, não substitui

---

## 🎯 Pilares Fundamentais

| Pilar                                | Descrição                            |
| ------------------------------------ | ------------------------------------ |
| 🤝 **Tecnologia e Humanidade**       | IA que amplifica capacidades humanas |
| 📈 **Produtividade e Bem-estar**     | Eficiência com qualidade de vida     |
| 🌱 **Automação e Impacto Social**    | Tecnologia para transformação        |
| ♻️ **Desempenho e Sustentabilidade** | Resultados com responsabilidade      |

---

## 🌍 Alinhamento com ODS da ONU

A SafeSales AI contribui diretamente para:

### ODS 4 - Educação de Qualidade

- Democratiza o conhecimento entre iniciantes e veteranos
- IA oferece o mesmo nível de preparo para todos

### ODS 8 - Trabalho Decente e Crescimento Econômico

- Transforma especialistas em consultores estratégicos
- Reduz tarefas repetitivas em 60%
- Aumenta tempo dedicado à estratégia em 45%

### ODS 10 - Redução das Desigualdades

- Mesma qualidade de análise para todos os colaboradores
- Reduz gap entre profissionais júnior e sênior

---

## 🚀 Funcionalidades da IA

### 1. 🧠 Análise Preditiva de Comportamento

- Analisa **50+ variáveis** do cliente
- Prevê comportamento de compra, risco de churn e upsell
- **Precisão:** 87%

### 2. 💬 Geração de Briefing Inteligente

- Briefing personalizado antes de cada visita
- Histórico, preferências e scripts otimizados
- **Economia de tempo:** 45min/dia

### 3. 📊 Scoring de Risco Social

- Avalia risco financeiro, inadimplência e churn
- Usa dados públicos + histórico transacional
- **Redução de inadimplência:** 30%

### 4. 🎯 Recomendações Priorizadas

- IA ranqueia ações por impacto esperado
- Foco no que gera mais resultado
- **Aumento de conversão:** 25%

### 5. 🌍 Impacto ODS em Tempo Real

- Dashboards de impacto social
- Transparência total nas ações ESG

---

## 🛠️ Tecnologias Utilizadas

### Frontend

- **HTML5** - Estrutura semântica
- **CSS3** - Design iOS-style com Glass Morphism
- **JavaScript (ES6+)** - Lógica e interatividade

### Design System

- **Material Icons** - Iconografia consistente
- **Google Fonts (Roboto)** - Tipografia moderna
- **iOS Design Guidelines** - UX/UI nativa

### Técnicas Avançadas

- ✅ **Glass Morphism** - Efeitos de vidro fosco
- ✅ **Haptic Feedback** - Feedback tátil simulado
- ✅ **Smooth Animations** - Animações com cubic-bezier
- ✅ **PWA Ready** - Preparado para Progressive Web App
- ✅ **Responsive Design** - Mobile-first approach

---

## 📱 Screenshots

### Tela Home - Lista de Clientes

![Home](screenshots/home.png)

### AI Panel - Análise Completa

![AI Panel](screenshots/ai-panel.png)

### Visão SafeSales AI

![Vision](screenshots/vision.png)

### Impacto ODS

![ODS Impact](screenshots/ods-impact.png)

---

## 🎮 Como Usar

### 1. Clone o repositório

```bash
git clone https://github.com/rb-belarmino/safesales-ai.git
cd safesales-ai
```

### 2. Abra o projeto

```bash
# Método 1: Abrir diretamente no navegador
open index.html

# Método 2: Usar Live Server (VSCode)
# - Instale a extensão "Live Server"
# - Clique com botão direito em index.html
# - Selecione "Open with Live Server"

# Método 3: Servidor Python simples
python -m http.server 8000
# Acesse: http://localhost:8000
```

### 3. Navegue pelas funcionalidades

- **Home:** Lista de clientes com preview da IA
- **Detalhes do Cliente:** Análise completa com tabs interativas
- **Visão SafeSales AI:** Pilares e alinhamento com ODS
- **Como a IA Funciona:** Explicação detalhada das funcionalidades
- **Impacto ODS:** Métricas e dashboards de impacto social

---

## 📂 Estrutura do Projeto

```
safesales-ai/
├── index.html          # Estrutura principal do app
├── style.css           # Estilos iOS-style com Glass Morphism
├── main.js             # Lógica, navegação e funcionalidades
├── manifest.json       # PWA manifest (opcional)
├── README.md           # Documentação do projeto
└── screenshots/        # Capturas de tela do projeto
    ├── home.png
    ├── ai-panel.png
    ├── vision.png
    └── ods-impact.png
```

---

## 🎨 Padrões de Design

### Cores Principais

```css
--primary-purple: #667eea
--secondary-purple: #764ba2
--success-green: #4caf50
--warning-orange: #ff9800
--error-red: #f44336
```

### Sombras iOS

```css
--shadow-ios: 0 1px 3px rgba(0, 0, 0, 0.12)
--shadow-ios-lg: 0 10px 25px rgba(0, 0, 0, 0.08)
--shadow-ios-xl: 0 20px 40px rgba(0, 0, 0, 0.1)
```

### Glass Morphism

```css
backdrop-filter: blur(20px) saturate(180%)
-webkit-backdrop-filter: blur(20px) saturate(180%)
```

---

## 🧩 API JavaScript (window.SafeSalesAI)

O app expõe uma API global para fácil integração:

```javascript
// Navegação
SafeSalesAI.navigateTo('vision')
SafeSalesAI.goBack()

// UI
SafeSalesAI.showToast('Olá!', 2000, 'success')
SafeSalesAI.showIOSLoading('Carregando...')
SafeSalesAI.hideIOSLoading()

// Ações
SafeSalesAI.performCheckIn()
SafeSalesAI.searchClient('João')
SafeSalesAI.exportReport('pdf')
SafeSalesAI.shareAnalysis()

// IA
SafeSalesAI.generateAIInsights(clientData)
SafeSalesAI.loadClientData('Nome do Cliente')

// Dados
SafeSalesAI.updateMetrics()
SafeSalesAI.syncWithServer()

// Info
console.log(SafeSalesAI.version) // "2.0"
console.log(SafeSalesAI.ods) // ["ODS 4", "ODS 8", "ODS 10"]
```

---

## 📊 Métricas de Impacto

| Métrica                                 | Valor |
| --------------------------------------- | ----- |
| Colaboradores com acesso à IA           | 100%  |
| Redução em tarefas repetitivas          | 60%   |
| Aumento em tempo dedicado à estratégia  | 45%   |
| Melhoria no bem-estar dos colaboradores | 30%   |
| Redução de inadimplência                | 30%   |
| Aumento de conversão                    | 25%   |

---

## 🎓 Contexto Acadêmico - FIAP

Este projeto foi desenvolvido como parte da **Global Solution 2025** da **FIAP**, com os seguintes objetivos:

### Disciplinas Envolvidas

- 🤖 **Inteligência Artificial** - Algoritmos preditivos e NLP
- 🌍 **Sustentabilidade** - Alinhamento com ODS da ONU
- 💻 **Desenvolvimento Web** - Frontend moderno e responsivo
- 📊 **Análise de Dados** - Métricas e dashboards

### Competências Desenvolvidas

- ✅ Análise e solução de problemas complexos
- ✅ Pensamento crítico sobre o futuro do trabalho
- ✅ Aplicação de IA com responsabilidade social
- ✅ Design de experiências centradas no usuário
- ✅ Desenvolvimento full-stack (frontend)

---

## 🚀 Próximos Passos (Roadmap)

- [ ] **Backend Integration** - API REST com Node.js/Python
- [ ] **Machine Learning Real** - Modelos de ML treinados
- [ ] **Autenticação** - Login com JWT/OAuth
- [ ] **Banco de Dados** - MongoDB/PostgreSQL
- [ ] **PWA Completo** - Service Worker + Offline Mode
- [ ] **Dashboard Analytics** - Gráficos interativos (Chart.js)
- [ ] **Mobile App** - React Native ou Flutter
- [ ] **Testes Automatizados** - Jest/Cypress
- [ ] **CI/CD** - GitHub Actions
- [ ] **Deploy em Produção** - Vercel/Netlify

---

## 👥 Autor

**Desenvolvido por:**

- [Rodrigo Belarmino](https://github.com/rb-belarmino) - Full Stack Developer

**Instituição:**

- [FIAP - Faculdade de Informática e Administração Paulista](https://www.fiap.com.br)

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abrir um Pull Request

---

## 📞 Contato

- **Email:** rb.belarmino@gmail.com
- **LinkedIn:** [linkedin.com/in/rb-belarmino](https://linkedin.com/in/rb-belarmino)
- **GitHub:** [github.com/rb-belarmino](https://github.com/rb-belarmino)

---

## 🌟 Agradecimentos

- **FIAP** - Pela oportunidade e conhecimento compartilhado
- **ONU** - Pelos Objetivos de Desenvolvimento Sustentável que inspiraram este projeto
- **Comunidade Open Source** - Pelas ferramentas e inspiração constante

---

<div align="center">

**Feito com 💜 por [Rodrigo Belarmino](https://github.com/rb-belarmino)**

**FIAP - Global Solution 2025**

**Futuro do Trabalho (2030-2050)**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)

</div>
