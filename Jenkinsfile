pipeline {
  agent any
  stages {
    stage('checkout') {
      steps {
        git(url: 'https://github.com/juanpablohp33/blockchainExercise1', branch: 'master', changelog: true)
      }
    }

    stage('cmd block') {
      steps {
        sh 'npm start'
      }
    }

  }
}