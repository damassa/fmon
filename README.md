# [Football Manager Online](https://fmon.org) [![MIT License](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://github.com/lpeil/fmon/blob/master/LICENSE)

The FMON is the biggest site of Football Manager E-Sport, and this project is the new version, migrating to Node.JS and React.

## Quick Start

git clone https://github.com/lpeil/fmon

### Server Side

In the fmon directory

	cd ./server/

Create a file named ".env", open and paste this informations:

PORT=4000
SECRET=YOUR_SECRET_TOKEN
DB_HOST=YOUR_DATABASE_HOST
DB_PORT=PORT
DB_USER=USER
DB_PASSWORD=PASSWORD
DB_DATABASE=DB
MAX_IMAGE_SIZE=1000000

And you can start.

  yarn start
  
### Client Side

Just verify if the port is correctly configured, and you can start.

  yarn start
