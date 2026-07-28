// --- ESTRUTURA DE ESPERA DO CMS (ES5 Tradicional) ---
var aguardarDivCms = setInterval(function() {
    if (document.querySelector('.dafitiStructureBlog')) {
        montarMenuDafiti();
        clearInterval(aguardarDivCms);
    }
}, 50);

// Fallback de segurança (4 segundos)
setTimeout(function() {
    clearInterval(aguardarDivCms);
    montarMenuDafiti();
}, 0);

// Função principal de montagem do Menu
function montarMenuDafiti() {
    // 1. Configuração dos itens do menu
    var navItems = [
        { slug: 'tendencia', label: 'Tendencia', href: 'tendencia.html' },
        { slug: 'inspiracion', label: 'Inspiración', href: 'inspiracion.html' },
        { slug: 'tips', label: 'Tips', href: 'tips.html' },
        { slug: 'glosario-fashion', label: 'Glosario Fashion', href: 'glosario-fashion.html' },
        { slug: 'dafiti', label: 'Dafiti', href: 'dafiti.html' }
    ];

    var linksPadrao = {
        loja: 'index.html',
        logoSvg: 'https://static.dafiti.com.br/cms/svg/2026_04_08_16_09_56_dft-blog.svg'
    };

    // Evita duplicidade
    if (document.querySelector('.dafitiStructureHeader')) return;

    // 2. Cria o container principal
    var dafitiHeaderContainer = document.createElement('div');
    dafitiHeaderContainer.className = 'dafitiStructureHeader';

    // 3. Monta a lista de links usando concatenação clássica (ES5)
    var menuListHtml = '';
    for (var i = 0; i < navItems.length; i++) {
        var item = navItems[i];
        menuListHtml += '<li><a class="menu-btn" href="' + item.href + '" data-slug="' + item.slug + '">' + item.label + '</a></li>';
    }

    // 4. Estrutura interna completa do Header
    dafitiHeaderContainer.innerHTML = 
        '<link rel="preconnect" href="https://fonts.googleapis.com">' +
        '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
        '<link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wdth,wght@0,87.5,100..900;1,87.5,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">' +
        '<header>' +
            '<div class="maxHeader">' +
                '<a class="barraLoja" href="' + linksPadrao.loja + '" target="_blank" rel="noopener">IR A LA TIENDA</a>' +
                '<a class="logoLink" href="' + linksPadrao.loja + '">' +
                    '<img src="' + linksPadrao.logoSvg + '" alt="Dafiti Blog" title="Dafiti Blog">' +
                '</a>' +
                '<button class="hamburger" aria-label="Abrir menu">' +
                    '<span></span><span></span><span></span>' +
                '</button>' +
                '<nav class="menu-categorias">' +
                    '<ul>' +
                        menuListHtml +
                    '</ul>' +
                '</nav>' +
                '<a class="buttonLoja" href="' + linksPadrao.loja + '" target="_blank" rel="noopener">Ir a la tienda</a>' +
            '</div>' +
        '</header>';

    // 5. Injeta na div alvo do CMS ou no body
    var targetContainer = document.querySelector('.dafitiStructure');
    if (targetContainer) {
        targetContainer.insertBefore(dafitiHeaderContainer, targetContainer.firstChild);
    } else {
        document.body.insertBefore(dafitiHeaderContainer, document.body.firstChild);
    }
    
    // Inicializa comportamentos
    initMenuMobile();
    initActiveAndScrollTop();
    configurarAnimacaoScroll();
}

// --- Lógicas de Comportamento (Convertidas para ES5) ---

// 1. Menu Mobile (Hamburger)
function initMenuMobile() {
    var hamburger = document.querySelector('.hamburger');
    var menu = document.querySelector('.menu-categorias');
    
    if (hamburger && menu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            menu.classList.toggle('active');
        });
    }
}

// 2. Links Ativos e Scroll to Top
function initActiveAndScrollTop() {
    var currentPath = window.location.pathname;
    var links = document.querySelectorAll('.menu-btn');

    function normalize(str) {
        return str.replace(/\.html$/, '').replace(/\/$/, '').toLowerCase();
    }

    for (var i = 0; i < links.length; i++) {
        (function(link) {
            var href = link.getAttribute('href') || '';
            var isCurrent = normalize(currentPath).endsWith(normalize(href)) && href !== '';

            if (isCurrent) {
                link.classList.add('active');
            }

            link.addEventListener('click', function(e) {
                if (isCurrent) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        })(links[i]);
    }

    var logoLink = document.querySelector('.logoLink');
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            var logoHref = logoLink.getAttribute('href') || '';
            var isHome = normalize(currentPath) === normalize(logoHref) || currentPath === '/' || currentPath.endsWith('index.html');
            if (isHome) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }
}

// 3. Animação de Scroll
function configurarAnimacaoScroll() {
    var titlePag = document.querySelector('.redes .titlePag');
    if (!titlePag) return;

    var timer;
    window.addEventListener('scroll', function() {
        if (timer) clearTimeout(timer);
        timer = setTimeout(function() {
            var scrollPos = window.scrollY;
            if (scrollPos > 300) {
                titlePag.classList.add('active');
                titlePag.classList.remove('block');
            } else {
                titlePag.classList.remove('active');
                titlePag.classList.add('block');
            }
        }, 50);
    }, { passive: true });
}