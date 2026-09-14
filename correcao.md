#Criterio1 — Mínimo 8 commits na main
Parcialmente correto
Nota: 0,50

#Criterio2 — Mínimo 5 componentes funcionais
Correto
Nota: 1,00

#Criterio3 — useState para gerenciar estado
Parcialmente correto
Nota: 0,50

#Criterio4 — useEffect para efeitos colaterais
Incorreto
Nota: 0,00

#Criterio5 — Next Router com navegação entre páginas
Incorreto
Nota: 0,00

#Criterio6 — Props passadas entre componentes
Incorreto
Nota: 0,00

#Criterio7 — Formulário funcional para criar anotações
Parcialmente correto
Nota: 0,50

#Criterio8 — Lista de anotações com ver detalhes e excluir
Incorreto
Nota: 0,00

#Criterio9 — Comentários no código (useState, useEffect, eventos)
Incorreto
Nota: 0,00

#Criterio10 — Data/hora automática em cada anotação
Incorreto
Nota: 0,00

Subtotal: 2,50

Penalizações:
- Nenhuma (participantes.md presente com nomes completos; ausência de RM não gera desconto)

Total final: 2,50

🧾 EXPLICAÇÃO DA CORREÇÃO

*Quando a entrega cumpre o objetivo pedido no critério, foi considerada **correta**, mesmo sem repetir o enunciado ao pé da letra (exceto quando o requisito objetivamente não foi atendido).*

**Critério 1 — Mínimo 8 commits na main:** 7 commits na `main` (`first commit` … `Update participantes.md`). Entre 5 e 7 → Parcialmente correto.

**Critério 2 — Mínimo 5 componentes funcionais:** Em `app/components/`: `Botao.js`, `Conteudo.js`, `Form.js`, `Item.js`, `Titulo.js` (5 componentes). Correto.

**Critério 3 — useState para gerenciar estado:** `Form.js` declara `const [form, setForm] = useState()` com `"use client"` na página, mas o estado não controla os campos de título/conteúdo e não há estado de lista de anotações. Apenas parte do requisito → Parcialmente correto.

**Critério 4 — useEffect para efeitos colaterais:** Nenhum `useEffect` no projeto. `notes/[id]/page.js` está praticamente vazio. Incorreto.

**Critério 5 — Next Router com navegação entre páginas:** Pasta `app/notes/[id]/` existe, mas o `page.js` não implementa detalhes nem `useSearchParams`/`useRouter`. Sem navegação funcional. Incorreto.

**Critério 6 — Props passadas entre componentes:** `Formulario` renderiza `Titulo`, `Conteudo` e `Botao` sem passar props; os filhos não recebem dados/callbacks do pai. Incorreto.

**Critério 7 — Formulário funcional para criar anotações:** Estrutura visual de formulário (título, conteúdo, botão), porém `addNote` em `Botao.js` está vazio e os inputs não estão controlados corretamente → Parcialmente correto.

**Critério 8 — Lista de anotações com ver detalhes e excluir:** `Item.js` é esboço incompleto; não há lista com ver detalhes/excluir. Incorreto.

**Critério 9 — Comentários no código:** Sem comentários explicativos sobre hooks/eventos. Incorreto.

**Critério 10 — Data/hora automática em cada anotação:** Não há atribuição de data/hora a anotações. Incorreto.

## CONTEXTO GIT
```
Repositório: https://github.com/esthertozzo/checkpoint-4-webdev-1ESR
Branch: main
Commits HEAD: 7
Autores: 5 Laboratório FIAP; 2 Esther Tozzo
participantes.md: Esther dos Santos de Almeida Tozzo, Fabricio Mendoza, Izabela Pordeus, Thiago Alexandre Santos (nomes presentes; RM não obrigatório para evitar −1)
```
