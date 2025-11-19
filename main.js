/* ========================================
   VARIÁVEIS GLOBAIS
======================================== */
let currentScreen = 'home'
let navigationHistory = []
let isOnline = navigator.onLine

/* ========================================
   HAPTIC FEEDBACK (iOS Style)
======================================== */
function hapticFeedback(type = 'light') {
  // Simular feedback tátil
  if (navigator.vibrate) {
    const patterns = {
      light: [10],
      medium: [15],
      heavy: [25],
      success: [10, 50, 10],
      error: [25, 100, 25],
      warning: [15, 50, 15]
    }
    navigator.vibrate(patterns[type] || patterns.light)
  }
}

/* ========================================
   MENU LATERAL (SIDEBAR) - iOS Enhanced
======================================== */
function toggleMenu() {
  const sidebar = document.getElementById('sidebar')
  const overlay = document.getElementById('overlay')

  hapticFeedback('light')

  sidebar.classList.toggle('active')
  overlay.classList.toggle('active')

  // Prevenir scroll do body quando menu aberto
  if (sidebar.classList.contains('active')) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

/* ========================================
   NAVEGAÇÃO ENTRE TELAS - iOS Enhanced
======================================== */
function navigateTo(screenName) {
  // Haptic feedback
  hapticFeedback('light')

  // Adicionar ao histórico
  addToHistory(screenName)

  // Esconder todas as telas
  const screens = document.querySelectorAll('.screen')
  screens.forEach(screen => screen.classList.remove('active'))

  // Mostrar a tela selecionada
  const targetScreen = document.getElementById(`screen-${screenName}`)
  if (targetScreen) {
    targetScreen.classList.add('active')
    currentScreen = screenName

    // Atualizar título do header
    updateHeaderTitle(screenName)

    // Atualizar item ativo no menu
    updateActiveMenuItem(screenName)

    // Fechar menu lateral
    const sidebar = document.getElementById('sidebar')
    if (sidebar.classList.contains('active')) {
      toggleMenu()
    }

    // Track navegação
    trackEvent('navigation', { to: screenName })

    // Scroll para o topo
    targetScreen.scrollTop = 0

    // Animar métricas quando abrir tela ODS
    if (screenName === 'ods-impact') {
      setTimeout(() => {
        animateMetrics()
      }, 400)
    }
  }
}

/* ========================================
   ATUALIZAR TÍTULO DO HEADER
======================================== */
function updateHeaderTitle(screenName) {
  const headerTitle = document.getElementById('header-title')

  const titles = {
    home: 'SafeSales AI',
    vision: 'Visão SafeSales AI',
    details: 'Detalhes do Cliente',
    'ods-impact': 'Impacto ODS',
    'ai-features': 'Como a IA Funciona'
  }

  // Animação de fade no título
  headerTitle.style.opacity = '0'
  setTimeout(() => {
    headerTitle.textContent = titles[screenName] || 'SafeSales AI'
    headerTitle.style.transition = 'opacity 0.3s ease'
    headerTitle.style.opacity = '1'
  }, 150)
}

/* ========================================
   ATUALIZAR ITEM ATIVO NO MENU
======================================== */
function updateActiveMenuItem(screenName) {
  const menuItems = document.querySelectorAll('.sidebar-item')

  menuItems.forEach(item => {
    item.classList.remove('active')
  })

  // Adicionar classe active ao item correspondente
  const menuMapping = {
    home: 0,
    vision: 1,
    'ai-features': 2,
    'ods-impact': 10
  }

  const index = menuMapping[screenName]
  if (index !== undefined && menuItems[index]) {
    menuItems[index].classList.add('active')
  }
}

/* ========================================
   TABS DA IA (AI PANEL) - iOS Enhanced
======================================== */
function showAITab(tabName) {
  hapticFeedback('light')

  // Esconder todos os conteúdos de tabs
  const tabContents = document.querySelectorAll('.tab-content')
  tabContents.forEach(content => content.classList.remove('active'))

  // Remover classe active de todos os botões
  const tabButtons = document.querySelectorAll('.tab-button')
  tabButtons.forEach(button => button.classList.remove('active'))

  // Mostrar o conteúdo da tab selecionada
  const targetTab = document.getElementById(`ai-${tabName}`)
  if (targetTab) {
    targetTab.classList.add('active')
  }

  // Adicionar classe active ao botão clicado
  event.target.closest('.tab-button').classList.add('active')

  // Animação das barras de progresso quando abrir tab de risco
  if (tabName === 'risk') {
    animateRiskBars()
  }

  // Animação das barras de impacto quando abrir tab
  if (tabName === 'impact') {
    animateImpactBars()
  }

  // Track mudança de tab
  trackEvent('ai_tab_change', { tab: tabName })
}

/* ========================================
   ANIMAÇÃO DAS BARRAS DE RISCO - iOS Enhanced
======================================== */
function animateRiskBars() {
  setTimeout(() => {
    const riskFills = document.querySelectorAll('.risk-fill')
    riskFills.forEach((fill, index) => {
      const width = fill.style.width
      fill.style.width = '0%'

      // Delay progressivo para cada barra
      setTimeout(() => {
        fill.style.width = width
      }, 100 + index * 150)
    })
  }, 100)
}

/* ========================================
   ANIMAÇÃO DAS BARRAS DE IMPACTO ODS
======================================== */
function animateImpactBars() {
  setTimeout(() => {
    const impactFills = document.querySelectorAll('.impact-fill')
    impactFills.forEach((fill, index) => {
      const width = fill.style.width
      fill.style.width = '0%'

      setTimeout(() => {
        fill.style.width = width
      }, 100 + index * 200)
    })
  }, 100)
}

/* ========================================
   ANIMAR MÉTRICAS DE IMPACTO
======================================== */
function animateMetrics() {
  setTimeout(() => {
    const metricFills = document.querySelectorAll('.metric-fill')
    metricFills.forEach((fill, index) => {
      const width = fill.style.width
      fill.style.width = '0%'

      setTimeout(() => {
        fill.style.width = width
      }, 100 + index * 200)
    })
  }, 100)
}

/* ========================================
   TOAST NOTIFICATION - iOS Enhanced
======================================== */
function showToast(message, duration = 3000, type = 'info') {
  const toast = document.getElementById('toast')

  // Haptic feedback baseado no tipo
  const hapticMap = {
    success: 'success',
    error: 'error',
    warning: 'warning',
    info: 'light'
  }
  hapticFeedback(hapticMap[type] || 'light')

  // Ícones por tipo
  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  }

  const icon = icons[type] || ''
  toast.innerHTML = `${icon} ${message}`
  toast.classList.add('show')

  // Adicionar classe de tipo
  toast.className = `toast show toast-${type}`

  setTimeout(() => {
    toast.classList.remove('show')
    setTimeout(() => {
      toast.className = 'toast'
    }, 400)
  }, duration)
}

/* ========================================
   LOADING iOS STYLE
======================================== */
function showIOSLoading(message = 'Carregando...') {
  // Criar elemento de loading se não existir
  let loader = document.getElementById('ios-loader')

  if (!loader) {
    loader = document.createElement('div')
    loader.id = 'ios-loader'
    loader.className = 'ios-loader'
    document.body.appendChild(loader)
  }

  loader.innerHTML = `
    <div class="ios-loader-content">
      <div class="ios-spinner"></div>
      <p>${message}</p>
    </div>
  `

  loader.style.display = 'flex'

  // Adicionar estilos se não existirem
  if (!document.getElementById('ios-loader-styles')) {
    const style = document.createElement('style')
    style.id = 'ios-loader-styles'
    style.textContent = `
      .ios-loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
      }
      
      .ios-loader-content {
        background: rgba(255, 255, 255, 0.95);
        padding: 30px 40px;
        border-radius: 16px;
        text-align: center;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      }
      
      .ios-spinner {
        width: 40px;
        height: 40px;
        border: 3px solid rgba(102, 126, 234, 0.2);
        border-top-color: var(--primary-purple);
        border-radius: 50%;
        animation: spin 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
        margin: 0 auto 15px;
      }
      
      .ios-loader-content p {
        margin: 0;
        font-size: 15px;
        font-weight: 500;
        color: var(--text-dark);
      }
      
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `
    document.head.appendChild(style)
  }

  return loader
}

function hideIOSLoading() {
  const loader = document.getElementById('ios-loader')
  if (loader) {
    loader.style.opacity = '0'
    setTimeout(() => {
      loader.style.display = 'none'
      loader.style.opacity = '1'
    }, 300)
  }
}

/* ========================================
   CARREGAR DADOS DO CLIENTE - iOS Enhanced
======================================== */
function loadClientData(clientName = 'Emersom Azevedo Da Mata') {
  const loader = showIOSLoading('Carregando análise da IA...')

  // Simular carregamento
  setTimeout(() => {
    hideIOSLoading()
    showToast('✓ Análise carregada com sucesso!', 2000, 'success')

    // Animar entrada dos dados
    const aiPanel = document.querySelector('.ai-panel-expanded')
    if (aiPanel) {
      aiPanel.style.opacity = '0'
      aiPanel.style.transform = 'translateY(20px)'
      setTimeout(() => {
        aiPanel.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
        aiPanel.style.opacity = '1'
        aiPanel.style.transform = 'translateY(0)'
      }, 100)
    }
  }, 1500)
}

/* ========================================
   INICIALIZAR ANIMAÇÕES DAS BARRAS ODS
======================================== */
function initODSBars() {
  const impactFills = document.querySelectorAll('.impact-fill')

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const fill = entry.target
          const width = fill.style.width
          fill.style.width = '0%'

          setTimeout(() => {
            fill.style.width = width
          }, 200 + index * 150)

          observer.unobserve(fill)
        }
      })
    },
    { threshold: 0.3 }
  )

  impactFills.forEach(fill => observer.observe(fill))
}

/* ========================================
   VALIDAÇÃO DE FORMULÁRIO - iOS Enhanced
======================================== */
function validateForm() {
  const requiredFields = document.querySelectorAll('[required]')
  let isValid = true
  let firstInvalidField = null

  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      isValid = false
      field.style.border = '2px solid var(--error-red)'
      field.style.transition = 'all 0.3s ease'

      if (!firstInvalidField) {
        firstInvalidField = field
      }

      // Remover borda vermelha ao digitar
      field.addEventListener(
        'input',
        function () {
          this.style.border = ''
        },
        { once: true }
      )
    }
  })

  if (!isValid) {
    hapticFeedback('error')
    showToast('⚠ Preencha todos os campos obrigatórios', 3000, 'warning')

    // Scroll para o primeiro campo inválido
    if (firstInvalidField) {
      firstInvalidField.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
      firstInvalidField.focus()
    }
  }

  return isValid
}

/* ========================================
   BUSCAR CLIENTE - iOS Enhanced
======================================== */
function searchClient(query) {
  if (!query || query.trim().length < 3) {
    showToast('⚠ Digite pelo menos 3 caracteres', 2000, 'warning')
    return
  }

  showIOSLoading(`Buscando: ${query}...`)

  // Simular busca
  setTimeout(() => {
    hideIOSLoading()

    const found = Math.random() > 0.3

    if (found) {
      hapticFeedback('success')
      showToast('✓ Cliente encontrado!', 2000, 'success')

      // Simular highlight do resultado
      setTimeout(() => {
        const firstCard = document.querySelector('.client-card')
        if (firstCard) {
          firstCard.style.transform = 'scale(1.02)'
          firstCard.style.boxShadow = '0 8px 24px rgba(102, 126, 234, 0.3)'

          setTimeout(() => {
            firstCard.style.transform = ''
            firstCard.style.boxShadow = ''
          }, 1000)
        }
      }, 500)
    } else {
      hapticFeedback('error')
      showToast('✕ Nenhum cliente encontrado', 2000, 'error')
    }

    trackEvent('search', { query, found })
  }, 1500)
}

/* ========================================
   REALIZAR CHECK-IN - iOS Enhanced
======================================== */
function performCheckIn() {
  if (currentScreen !== 'details') {
    hapticFeedback('warning')
    showToast('⚠ Selecione um cliente primeiro!', 2000, 'warning')
    return
  }

  showIOSLoading('Realizando check-in...')
  hapticFeedback('medium')

  setTimeout(() => {
    hideIOSLoading()
    hapticFeedback('success')
    showToast('✓ Check-in realizado com sucesso!', 2000, 'success')

    // Salvar dados
    const timestamp = new Date().toLocaleString('pt-BR')
    const checkInData = {
      timestamp,
      client: 'Emersom Azevedo Da Mata',
      location: 'R PEDRO E PEREIRA, 319',
      status: 'completed'
    }

    localStorage.setItem('lastCheckIn', JSON.stringify(checkInData))
    trackEvent('check_in', checkInData)

    // Voltar para home após 2 segundos
    setTimeout(() => {
      navigateTo('home')
    }, 2000)
  }, 2000)
}

/* ========================================
   EXPORTAR RELATÓRIO - iOS Enhanced
======================================== */
function exportReport(format = 'pdf') {
  showIOSLoading(`Gerando relatório ${format.toUpperCase()}...`)
  hapticFeedback('medium')

  setTimeout(() => {
    hideIOSLoading()
    hapticFeedback('success')
    showToast(`✓ Relatório ${format.toUpperCase()} exportado!`, 2000, 'success')

    trackEvent('export_report', { format })
  }, 2000)
}

/* ========================================
   COMPARTILHAR ANÁLISE - iOS Enhanced
======================================== */
function shareAnalysis() {
  hapticFeedback('light')

  if (navigator.share) {
    navigator
      .share({
        title: 'SafeSales AI - Análise do Cliente',
        text: 'Confira a análise completa gerada pela IA',
        url: window.location.href
      })
      .then(() => {
        hapticFeedback('success')
        showToast('✓ Análise compartilhada!', 2000, 'success')
        trackEvent('share', { method: 'native' })
      })
      .catch(error => {
        if (error.name !== 'AbortError') {
          hapticFeedback('error')
          showToast('✕ Erro ao compartilhar', 2000, 'error')
        }
      })
  } else {
    // Fallback: copiar link
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        hapticFeedback('success')
        showToast('✓ Link copiado!', 2000, 'success')
        trackEvent('share', { method: 'clipboard' })
      })
      .catch(() => {
        hapticFeedback('error')
        showToast('✕ Erro ao copiar link', 2000, 'error')
      })
  }
}

/* ========================================
   SALVAR/CARREGAR PREFERÊNCIAS
======================================== */
function saveUserPreferences() {
  const preferences = {
    theme: 'light',
    notifications: true,
    language: 'pt-BR',
    hapticFeedback: true,
    lastAccess: new Date().toISOString()
  }

  localStorage.setItem('userPreferences', JSON.stringify(preferences))
}

function loadUserPreferences() {
  const stored = localStorage.getItem('userPreferences')

  if (stored) {
    try {
      const preferences = JSON.parse(stored)
      return preferences
    } catch (e) {
      console.error('Erro ao carregar preferências:', e)
      return null
    }
  }

  return null
}

/* ========================================
   MÉTRICAS EM TEMPO REAL
======================================== */
function updateMetrics() {
  const metrics = {
    totalClients: Math.floor(Math.random() * 100) + 50,
    activeVisits: Math.floor(Math.random() * 20) + 5,
    aiRecommendations: Math.floor(Math.random() * 30) + 10,
    odsImpact: Math.floor(Math.random() * 100) + 70
  }

  console.log('Métricas atualizadas:', metrics)
  trackEvent('metrics_update', metrics)

  return metrics
}

/* ========================================
   FILTRAR CLIENTES
======================================== */
function filterClients(criteria) {
  hapticFeedback('light')
  const clientCards = document.querySelectorAll('.client-card')

  let visibleCount = 0

  clientCards.forEach((card, index) => {
    let shouldShow = false

    if (criteria === 'all') {
      shouldShow = true
    } else {
      const riskLevel = card.dataset.risk || 'low'

      if (criteria === 'high-priority' && riskLevel === 'high') {
        shouldShow = true
      } else if (criteria === 'medium-risk' && riskLevel === 'medium') {
        shouldShow = true
      } else if (criteria === 'low-risk' && riskLevel === 'low') {
        shouldShow = true
      }
    }

    // Animação de saída/entrada
    if (shouldShow) {
      setTimeout(() => {
        card.style.display = 'block'
        card.style.opacity = '0'
        card.style.transform = 'translateY(20px)'

        setTimeout(() => {
          card.style.transition = 'all 0.3s ease'
          card.style.opacity = '1'
          card.style.transform = 'translateY(0)'
        }, 50)
      }, index * 50)

      visibleCount++
    } else {
      card.style.opacity = '0'
      card.style.transform = 'translateY(-20px)'
      setTimeout(() => {
        card.style.display = 'none'
      }, 300)
    }
  })

  setTimeout(() => {
    showToast(`${visibleCount} cliente(s) encontrado(s)`, 2000, 'info')
  }, 500)

  trackEvent('filter_clients', { criteria, count: visibleCount })
}

/* ========================================
   GERAR INSIGHTS COM IA
======================================== */
function generateAIInsights(clientData) {
  showIOSLoading('🤖 IA gerando insights...')

  setTimeout(() => {
    const insights = {
      profileType: 'Analítico',
      riskLevel: 'Baixo',
      priority: 'Alta',
      recommendations: [
        'Contato proativo esta semana',
        'Apresentar novo produto X',
        'Agendar reunião estratégica'
      ],
      predictedRevenue: 'R$ 15.000',
      churnProbability: '15%'
    }

    hideIOSLoading()
    hapticFeedback('success')
    showToast('✓ Insights gerados com sucesso!', 2000, 'success')

    console.log('Insights gerados:', insights)
    trackEvent('ai_insights_generated', insights)

    return insights
  }, 2500)
}

/* ========================================
   SINCRONIZAR COM SERVIDOR
======================================== */
function syncWithServer() {
  if (!isOnline) {
    showToast(
      '⚠ Sem conexão - dados serão sincronizados depois',
      3000,
      'warning'
    )
    return
  }

  showIOSLoading('Sincronizando dados...')

  setTimeout(() => {
    hideIOSLoading()
    hapticFeedback('success')
    showToast('✓ Dados sincronizados!', 2000, 'success')

    const timestamp = new Date().toLocaleString('pt-BR')
    localStorage.setItem('lastSync', timestamp)

    trackEvent('sync_completed', { timestamp })
  }, 1500)
}

/* ========================================
   MODO OFFLINE
======================================== */
function checkOnlineStatus() {
  isOnline = navigator.onLine

  if (!isOnline) {
    showToast('⚠️ Modo offline ativado', 4000, 'warning')
  }
}

window.addEventListener('online', () => {
  isOnline = true
  hapticFeedback('success')
  showToast('✓ Conectado - sincronizando...', 3000, 'success')
  syncWithServer()
})

window.addEventListener('offline', () => {
  isOnline = false
  hapticFeedback('warning')
  showToast('⚠️ Conexão perdida - modo offline', 3000, 'warning')
})

/* ========================================
   HISTÓRICO DE NAVEGAÇÃO
======================================== */
function addToHistory(screenName) {
  navigationHistory.push(screenName)

  if (navigationHistory.length > 10) {
    navigationHistory.shift()
  }
}

function goBack() {
  hapticFeedback('light')

  if (navigationHistory.length > 1) {
    navigationHistory.pop()
    const previousScreen = navigationHistory[navigationHistory.length - 1]
    navigateTo(previousScreen)
  } else {
    navigateTo('home')
  }
}

/* ========================================
   ATALHOS DE TECLADO
======================================== */
document.addEventListener('keydown', e => {
  // ESC para fechar menu
  if (e.key === 'Escape') {
    const sidebar = document.getElementById('sidebar')
    if (sidebar && sidebar.classList.contains('active')) {
      toggleMenu()
    }
  }

  // Ctrl/Cmd + H para home
  if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
    e.preventDefault()
    navigateTo('home')
  }

  // Ctrl/Cmd + B para voltar
  if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
    e.preventDefault()
    goBack()
  }

  // Ctrl/Cmd + K para busca
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault()
    const searchInput = document.querySelector('input[type="search"]')
    if (searchInput) {
      searchInput.focus()
    }
  }
})

/* ========================================
   ANIMAÇÃO DE ENTRADA
======================================== */
function animateEntrance() {
  const mobileFrame = document.querySelector('.mobile-frame')

  if (mobileFrame) {
    mobileFrame.style.opacity = '0'
    mobileFrame.style.transform = 'scale(0.96)'

    setTimeout(() => {
      mobileFrame.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
      mobileFrame.style.opacity = '1'
      mobileFrame.style.transform = 'scale(1)'
    }, 100)
  }
}

/* ========================================
   ANALYTICS E TRACKING
======================================== */
function trackEvent(eventName, eventData = {}) {
  const event = {
    name: eventName,
    data: eventData,
    timestamp: new Date().toISOString(),
    userId: localStorage.getItem('userId') || 'anonymous',
    sessionId: sessionStorage.getItem('sessionId') || generateSessionId()
  }

  console.log('📊 Event tracked:', event)

  // Salvar eventos localmente
  const events = JSON.parse(localStorage.getItem('analytics_events') || '[]')
  events.push(event)

  // Manter apenas últimos 100 eventos
  if (events.length > 100) {
    events.shift()
  }

  localStorage.setItem('analytics_events', JSON.stringify(events))

  // Aqui você enviaria para Google Analytics, Mixpanel, etc.
  // gtag('event', eventName, eventData);
}

function generateSessionId() {
  const sessionId = `session_${Date.now()}_${Math.random()
    .toString(36)
    .substr(2, 9)}`
  sessionStorage.setItem('sessionId', sessionId)
  return sessionId
}

/* ========================================
   NOTIFICAÇÕES PUSH
======================================== */
function requestNotificationPermission() {
  if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        hapticFeedback('success')
        showToast('✓ Notificações ativadas!', 2000, 'success')
        trackEvent('notifications_enabled')
      }
    })
  }
}

function showNotification(title, options = {}) {
  if ('Notification' in window && Notification.permission === 'granted') {
    const notification = new Notification(title, {
      icon: '/icon.png',
      badge: '/badge.png',
      ...options
    })

    notification.onclick = () => {
      window.focus()
      notification.close()
    }
  }
}

/* ========================================
   PULL TO REFRESH (iOS Style)
======================================== */
let touchStartY = 0
let touchEndY = 0

function initPullToRefresh() {
  const contentArea = document.querySelector('.content-area')

  if (contentArea) {
    contentArea.addEventListener(
      'touchstart',
      e => {
        touchStartY = e.touches[0].clientY
      },
      { passive: true }
    )

    contentArea.addEventListener(
      'touchmove',
      e => {
        touchEndY = e.touches[0].clientY

        if (contentArea.scrollTop === 0 && touchEndY > touchStartY + 50) {
          e.preventDefault()
        }
      },
      { passive: false }
    )

    contentArea.addEventListener(
      'touchend',
      () => {
        if (contentArea.scrollTop === 0 && touchEndY > touchStartY + 100) {
          hapticFeedback('medium')
          syncWithServer()
        }
      },
      { passive: true }
    )
  }
}

/* ========================================
   INICIALIZAÇÃO
======================================== */
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 SafeSales AI inicializado!')
  console.log('📄 Versão: 2.0 - Futuro do Trabalho (2030-2050)')

  // Gerar session ID
  generateSessionId()

  // Carregar preferências
  const preferences = loadUserPreferences()
  console.log('Preferências carregadas:', preferences)

  // Verificar conexão
  checkOnlineStatus()

  // Inicializar animações
  initODSBars()
  animateEntrance()
  initPullToRefresh()

  // Salvar preferências
  saveUserPreferences()

  // Adicionar home ao histórico
  addToHistory('home')

  // Adicionar haptic feedback aos elementos interativos
  document
    .querySelectorAll(
      '.btn-checkin-large, .tab-button, .client-card, .sidebar-item'
    )
    .forEach(el => {
      el.addEventListener('click', () => hapticFeedback('light'))
    })

  // Track página inicial
  trackEvent('app_initialized', {
    version: '2.0',
    platform: navigator.platform,
    userAgent: navigator.userAgent,
    document: 'SafeSales AI - Sistema Inteligente',
    ods: ['ODS 4', 'ODS 8', 'ODS 10']
  })

  // Mensagem de boas-vindas
  setTimeout(() => {
    showToast(
      '🚀 Bem-vindo ao SafeSales AI - Futuro do Trabalho!',
      3000,
      'success'
    )
  }, 1000)

  // Verificar última sincronização
  const lastSync = localStorage.getItem('lastSync')
  if (lastSync) {
    console.log('Última sincronização:', lastSync)
  } else {
    console.log('Primeira inicialização - bem-vindo!')
  }

  // Log de métricas
  console.log('📊 Métricas iniciais:', updateMetrics())
})

/* ========================================
   SERVICE WORKER (PWA)
======================================== */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(registration => {
        console.log('✓ Service Worker registrado:', registration.scope)
        trackEvent('service_worker_registered')
      })
      .catch(error => {
        console.error('✕ Erro ao registrar Service Worker:', error)
        trackEvent('service_worker_error', { error: error.message })
      })
  })
}

/* ========================================
   EXPORTAR FUNÇÕES GLOBAIS (API)
======================================== */
window.SafeSalesAI = {
  // Navegação
  navigateTo,
  goBack,
  toggleMenu,

  // UI
  showToast,
  showIOSLoading,
  hideIOSLoading,
  showAITab,

  // Ações
  performCheckIn,
  searchClient,
  exportReport,
  shareAnalysis,
  filterClients,

  // IA
  generateAIInsights,
  loadClientData,

  // Sync
  syncWithServer,

  // Utils
  trackEvent,
  hapticFeedback,
  validateForm,

  // Dados
  updateMetrics,
  saveUserPreferences,
  loadUserPreferences,

  // Info
  version: '2.0',
  futuroDoTrabalho: '2030-2050',
  ods: ['ODS 4', 'ODS 8', 'ODS 10']
}

console.log('✅ SafeSales AI API disponível em window.SafeSalesAI')
console.log('💡 Use SafeSalesAI.navigateTo("vision") para navegar')
console.log('💡 Use SafeSalesAI.showToast("Olá!", 2000, "success")')
console.log('🌍 Alinhado com ODS 4, 8 e 10 da ONU')
