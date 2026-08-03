pipeline {
    agent any

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

        stage('Archive') {
            steps {
                archiveArtifacts artifacts: 'my-app/.next/**', fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'Build Successful'
        }
        failure {
            echo 'Build Failed'
        }
    }
}