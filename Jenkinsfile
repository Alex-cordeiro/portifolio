pipeline{
    agent any

    stages{
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t portifolio_alex . '
            }
        }

        stage('Up') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }

}