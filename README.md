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

- PBI-01: Panel de monitoreo en tiempo real (8 puntos) - Done
- PBI-02: Alertas automáticas ante anomalías (5 puntos) - Done

Capacidad del Sprint: 13 puntos. Los sensores se simulan con datos generados por el programa (`sensores.js`).

## Product Backlog
El Product Backlog tiene **15 PBI** (64 puntos), cada uno con su historia de usuario y tres criterios de aceptación.

- Detalle y estado de cada PBI: [docs/product-backlog.md](docs/product-backlog.md)
- Un issue por PBI: [Issues del repositorio](https://github.com/Krash12342/oceanix-guard/issues)

## Enlaces
- Tablero del Sprint: https://github.com/users/Krash12342/projects/1/views/1?layout_template=board
- Demo publicada: https://Krash12342.github.io/oceanix-guard/
- Video de la demostración: https://youtu.be/w6eADxrxIhk
- Pull requests: [PR-01](https://github.com/Krash12342/oceanix-guard/pull/1) y [PR-02](https://github.com/Krash12342/oceanix-guard/pull/2)
- Pipeline: [GitHub Actions](https://github.com/Krash12342/oceanix-guard/actions)

## Reglas de trabajo
- Flujo del tablero: Backlog, Ready, In Progress, Review/Test y Done.
- Ramas: `feature/PBI-<número>-<descripción>`; defectos: `fix/PBI-<número>-<descripción>`.
- Commits: `tipo(PBI-<número>): descripción`, por ejemplo `feat(PBI-01): agregar panel con datos simulados`.
- Todo cambio entra por pull request con revisión de otro integrante cuando esté disponible; si no, con una autorrevisión registrada en el PR con la lista de comprobación de la Definition of Done, y con las pruebas automáticas en verde.
- Nunca se suben credenciales, tokens de sensores ni datos reales de clientes.
- Las decisiones importantes se registran en la documentación del proyecto, no solo en el chat.

## Definition of Done
- Criterios de aceptación verificados
- Revisión de código aprobada
- Pruebas automáticas superadas
- Sin defectos críticos conocidos
- Documentación necesaria actualizada
- Integrado y disponible para demostrar

## Cómo ejecutar
Abrir `index.html` en el navegador. Para las pruebas: `npm test` (requiere Node 18 o superior).
