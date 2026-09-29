# Oceanix Guard

Plataforma de monitoreo en tiempo real y alertas tempranas para granjas marinas.

## Problema
Los administradores y operadores de granjas marinas necesitan monitorear en tiempo real las variables ambientales (temperatura, pH, oxígeno disuelto) y el estado de la infraestructura. La falta de supervisión continua y de alertas tempranas provoca pérdidas de producción y dificulta la respuesta rápida ante emergencias.

## Product Goal
En los próximos meses, los operadores podrán visualizar en tiempo real los parámetros de la granja marina y recibir alertas automáticas en una plataforma centralizada para mitigar riesgos operativos y optimizar la producción.

## Scrum Team (Oceanix Team)
| Rol | Integrante(s) |
|---|---|
| Product Owner | Edwin Albor |
| Scrum Master | Dylan Ibañez |
| Developers | Yoifer Gomez y Brayan Espitia |

## Sprint 1
**Sprint Goal:** Al finalizar el Sprint, el equipo entregará el panel de monitoreo en tiempo real y el sistema de alertas tempranas para los parámetros ambientales.

- PBI-01: Panel de monitoreo en tiempo real (8 puntos)
- PBI-02: Alertas automáticas ante anomalías (5 puntos)

Los sensores se simulan con datos generados por el programa (`sensores.js`).

## Enlaces
- Tablero: pegar aquí el enlace del tablero (GitHub Projects o Trello)
- Demo publicada: pegar aquí la URL de GitHub Pages

## Reglas de trabajo
- Flujo del tablero: Backlog → Ready → In Progress → Review/Test → Done.
- Ramas: `feature/PBI-<número>-<descripción>`; defectos: `fix/PBI-<número>-<descripción>`.
- Commits: `tipo(PBI-<número>): descripción`, por ejemplo `feat(PBI-01): agregar panel con datos simulados`.
- Todo cambio entra por pull request con revisión de al menos otro integrante y las pruebas en verde.
- Nunca se suben credenciales ni datos reales de clientes.

## Definition of Done
- Criterios de aceptación verificados
- Revisión de código aprobada
- Pruebas automáticas superadas
- Sin defectos críticos conocidos
- Documentación necesaria actualizada
- Integrado y disponible para demostrar

## Cómo ejecutar
Abrir `index.html` en el navegador. Para las pruebas: `npm test` (requiere Node 18 o superior).
