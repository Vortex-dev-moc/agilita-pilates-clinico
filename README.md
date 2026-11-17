# Agilità Pilates Clínico — Home page

Site institucional (one-page) da **Agilità Pilates Clínico**, construído a partir do Manual de Marca 2024.

## Stack

HTML + CSS + JavaScript puros, sem etapa de build. Pode ser hospedado em qualquer serviço de site estático (Vercel, Netlify, GitHub Pages).

```
index.html        Estrutura e conteúdo da página
styles.css        Estilos, tokens de cor e responsividade
main.js           Menu mobile, header ao rolar, animações de entrada
assets/
  logo.svg        Logo vetorial (usa currentColor)
  logo-sage.svg   Logo na cor sálvia escura (header)
  logo-white.svg  Logo branco (rodapé)
  favicon.svg
  img/            Fotos otimizadas em WebP
```

## Rodar localmente

```bash
python -m http.server 5173
```

Acesse http://localhost:5173.

## Identidade visual

| Token          | Cor       | Uso                         |
| -------------- | --------- | --------------------------- |
| `--sage`       | `#8D9283` | Cor principal / fundos      |
| `--sage-deep`  | `#575B47` | Logo, botões                |
| `--olive`      | `#363C1F` | Títulos                     |
| `--leaf`       | `#C7CFAA` | Destaques verdes claros     |
| `--moss`       | `#B7BE9D` | Detalhes                    |
| `--mist`       | `#D8DAD6` | Bordas / cinza claro        |
| `--cream`      | `#F9F7F3` | Fundo da página             |

**Tipografia:** o manual usa *All Round Gothic* (títulos) e *Montserrat* (texto). Como All Round Gothic não está disponível gratuitamente na web, os títulos usam **Questrial** (Google Fonts) como alternativa visual próxima. Para usar a fonte original, adicione os arquivos licenciados com `@font-face` e ela entra automaticamente — já está na pilha de `--font-display`.

## Seções

1. Hero com CTA para WhatsApp
2. Sobre a Agilità
3. Serviços — Avaliação inicial, Pilates clínico (2x/3x por semana), Fisioterapia pélvica, Liberação miofascial
4. Equipe — Marcella Maia, Brenda Silva, Lorena Sena, Stephanie Aquino
5. Nosso espaço (galeria)
6. Orientações para a avaliação
7. Contato — WhatsApp, Instagram, endereço e mapa

## Contato da clínica

- WhatsApp: (38) 99813-8268
- Instagram: [@pilatesclinicoagilita](https://www.instagram.com/pilatesclinicoagilita/)
- Rua Dr. Henrique Chaves, nº 448 — Augusta Mota, 2º piso (Clínica Reabilitar)
