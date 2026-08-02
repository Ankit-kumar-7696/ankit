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
                dir('nextjs') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Next.js') {
            steps {
                dir('nextjs') {
                    sh 'npm run build'
                }
            }
        }
    }
}