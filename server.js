const express = require('express')
const path = require('path')
const app = express()

const configs = {
  caminho: 'build', // Aqui será definido a pasta de saída onde contém o index.html e os outros arquivos.
  port: process.env.PORT || 3000,
  forcarHTTPS: true // Defina para true se desejar que o redirecionamento para HTTPS seja forçado (é necessário certificado SSL ativo)
}

// Se o redirecionamento HTTP estiver habilitado, registra o middleware abaixo
if (configs.forcarHTTPS) {
  app.use((req, res, next) => {
    // Cria um middleware onde todas as requests passam por ele

    // Checa se o protocolo informado nos headers é HTTP
    if ((req.headers['x-forwarded-proto'] || '').endsWith('http')) res.redirect(`https://${req.headers.host}${req.url}`)
    // Redireciona pra HTTPS
    // Se a requisição já é HTTPS
    else next() // Não precisa redirecionar, passa para os próximos middlewares que servirão com o conteúdo desejado
  })
}

app.use(express.static(configs.caminho)) // Serve os outros arquivos, como CSSs, Javascripts, Imagens etc.

app.get('*', (req, res) => {
  // O wildcard '*' serve para servir o mesmo index.html independente do caminho especificado pelo navegador.
  res.sendFile(path.join(__dirname, configs.caminho, 'index.html'))
})

app.listen(configs.port, () => {
  console.log(`Escutando na ${configs.port}!`)
})
