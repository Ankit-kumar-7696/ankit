pipeline {
    agent any

    options {
        timestamps()
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('my-app') {
                    sh 'npm ci'
                }
            }
        }

        stage('Build') {
            steps {
                dir('my-app') {
                    sh 'npm run build'
                }
            }
        }
    }

    post {
        success {
            echo '✅ Frontend Build Successful'
        }

        failure {
            echo '❌ Frontend Build Failed'
        }

        always {
            cleanWs()
        }
    }
}