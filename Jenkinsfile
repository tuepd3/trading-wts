pipeline {
    agent any

    tools {
        nodejs "node16" // Tên đã cấu hình trong Jenkins
    }

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm ci'
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run 1 test file') {
            steps {
                sh 'npx playwright test tests/checkDailyWebTrading.spec.ts'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
    }
}
