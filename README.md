# Cancel - LinkC NE

- Módulo Cancela para o Sistema Gramatta
- Realiza abertura de Cancelas CAME

## Requisitos

1. NodeJS
2. Raspberry Pi

## Instalação

### NodeJS

Abra um Terminal no Raspberry e rode os comandos abaixo para realizar a instalação do NodeJS:

```bash
wget https://nodejs.org/dist/v8.9.0/node-v8.9.0-linux-armv7l.tar.gz
```
```bash
tar -xzf node-v8.9.0-linux-armv6l.tar.gz
```
```bash
cd node-v8.9.0-linux-armv7l/
```
```bash
sudo cp -R * /usr/local/
```
```bash
node -v
```

### Sistema

Abra um Terminal no Raspberry e entre na pasta de instalação do NodeJS para clonar o projeto com o seguinte comando:

```git
git clone https://github.com/devlinkcne/cancel.git
```

### GPIO

A conexão padrão para o acionamento de cancela está na porta 7 da GPIO da Raspberry

```
POSITIVO -> PORTA 07
NEGATIVO -> GND
```
Nestas portas, será ligado o Módulo Físico de Acionamento por Relay

### Testes

Para testar o funcionamento do módulo Cancel, basta realizar uma requisição via para a URL abaixo:

```bash
localhost:2000/actCancel
```
> Ao desligar a Raspberry, a cancela CAME levanta automaticamente