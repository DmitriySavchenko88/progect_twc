pipeline {
   agent any

   parameters {
       choice(name: 'SPEC', choices:['**/**',
       'testDataGeneration, cypress/e2e/inventory/adjustmentMemosSpec.cy.js, cypress/e2e/inventory/catalogSpec.cy.js, cypress/e2e/inventory/promoGroups.cy.js, cypress/e2e/inventory/promoGroups.cy.js, cypress/e2e/inventory/transferOrders.cy.js, cypress/e2e/purchasing/purchaseOrderSpec.cy.js, cypress/e2e/purchasing/purchaseReceiptSpec.cy.js, cypress/e2e/purchasing/vendorsSpec.cy.js, cypress/e2e/sales/customersSpec.cy.js, cypress/e2e/sales/giftCards.cy.js, cypress/e2e/sales/orderManagement.cy.js',
       'testDataGeneration',
       'inventory/adjustmentMemosSpec', 'inventory/catalogSpec', 'inventory/promoGroups', 'inventory/transferOrders',
       'purchasing/purchaseOrderSpec', 'purchasing/purchaseReceiptSpec', 'purchasing/vendorSpec',
       'sales/apiCheck', 'sales/customersSpec', 'sales/orderManagement' ], description: 'Pick necessary spec for execution. **/** run all specs.')
       choice(name: 'BROWSER', choices: ['electron','chrome', 'edge'], description: 'Pick the web browser you want to use to run tests')
   }

   environment {
       DOCKER_IMAGE = 'cypress_chrome_edge_image'
       WORKSPACE_PATH = "/var/lib/jenkins/workspace/${JOB_NAME}"
       HTML_REPORT_PATH = "${WORKSPACE_PATH}/cypress/reports"
   }

   stages {
       stage('Building the cypress image, copy the project from git. It might take some time, please wait') {
           steps {
                  sh "docker build -t ${DOCKER_IMAGE} ."
           }
       }

       stage('Testing CHQ. Running test specs in headless mode, after execution will be able to see a report with results, please wait') {
           steps {
               script {
                    sh "mkdir -p ${HTML_REPORT_PATH}"
                    ansiColor('xterm') {
                    sh "docker run -v ${HTML_REPORT_PATH}:/e2e/cypress/reports ${DOCKER_IMAGE} cypress run --spec cypress/e2e/${SPEC}.cy.js --browser ${BROWSER}"
                    }

               }
           }
       }
   }

   post {
       always {
           script {
                           publishHTML([
                           allowMissing: false,
                           alwaysLinkToLastBuild: false,
                            keepAll: true,
                             reportDir: "${WORKSPACE_PATH}/cypress/reports/html",
                              reportFiles: 'index.html',
                               reportName: 'REPORT. Report able to download as ZIP file and open in a browser'])
           }
       }
   }
}