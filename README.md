# Kuspit-exercise

Automatización de pruebas E2E para transferencias bancarias usando Cypress.  
Incluye tres casos principales: transferencias básicas, recurrentes y programadas, aplicando una arquitectura híbrida (POM + Commands + Data-Driven).

## Estructura del Proyecto

- `cypress/e2e/`: Casos de prueba principales.
- `cypress/fixtures/`: Datos de prueba (JSON).
- `cypress/reports/`: Reportes Mochawesome (generados automáticamente).
- `cypress/screenshots/`: Evidencias de ejecución (generadas automáticamente).
- `cypress/support/commands/`: Comandos personalizados de Cypress.
- `cypress/support/pages/`: Page Objects (POM).
- `cypress.config.js`: Configuración de Cypress.
- `package.json`: Dependencias y scripts.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/fmarquezUDG/kuspit-exercise.git
   cd kuspit-exercise
   ```

2. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```

3. Si tienes problemas con las dependencias o es la primera vez, instala manualmente Cypress y Mochawesome:
   ```bash
   npm install --save-dev cypress@^13.6.0 mochawesome mochawesome-merge mochawesome-report-generator
   ```

## Dependencias necesarias

- [Cypress](https://www.npmjs.com/package/cypress) ^13.6.0
- [mochawesome](https://www.npmjs.com/package/mochawesome)
- [mochawesome-merge](https://www.npmjs.com/package/mochawesome-merge)
- [mochawesome-report-generator](https://www.npmjs.com/package/mochawesome-report-generator)

## Ejecución de pruebas

- Para abrir Cypress en modo interactivo:
  ```bash
  npm run cypress:open
  ```
  o   

  ```bash
  npx cypress open 
  ```
- Para ejecutar todos los casos de prueba en modo headless:
  ```bash
  npm run test:all
  ```

  o   

  ```bash
  npx cypress run 
  ```

- Para ejecutar un caso específico:
  - Transferencias básicas:
    ```bash
    npm run test:basic
    ```
  - Transferencias programadas:
    ```bash
    npm run test:scheduled
    ```
  - Transferencias recurrentes:
    ```bash
    npm run test:recurring
    ```

## Reportes y Evidencias

- Los reportes Mochawesome se generan en `cypress/reports/` en formato JSON.
- Las capturas de pantalla de fallos se guardan en `cypress/screenshots/`.

## Arquitectura

- **POM (Page Object Model):** Los objetos de página están en `cypress/support/pages/`.
- **Commands personalizados:** En `cypress/support/commands/`.
- **Data-Driven:** Los datos de prueba están en `cypress/fixtures/`.

## Autor

Angel Francisco Sanchez de Tagle Marquez
