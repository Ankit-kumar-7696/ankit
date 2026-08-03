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
                    sh 'npm install'
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
            echo 'Frontend build completed successfully!'
        }

        failure {
            echo 'Frontend build failed.'
        }
    }
}