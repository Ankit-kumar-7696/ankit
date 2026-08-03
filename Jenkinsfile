pipeline {
    agent any

    options {
        timestamps()
    }

    environment {
        NODE_ENV = "production"
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

        stage('Lint') {
            steps {
                dir('my-app') {
                    sh 'npm run lint'
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

        stage('Archive Build') {
            steps {
                archiveArtifacts artifacts: 'my-app/.next/**'
            }
        }
    }

    post {

        success {
            echo "Frontend Build Successful"
        }

        failure {
            echo "Frontend Build Failed"
        }

        always {
            cleanWs()
        }
    }
}