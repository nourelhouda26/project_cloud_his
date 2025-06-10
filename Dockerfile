# Dockerfile - Image Docker pour héberger l'application avec Apache HTTP Server

# Utilise l'image officielle Apache HTTP Server
FROM httpd:2.4

# Copie les fichiers HTML, CSS, JS dans le répertoire de base d'Apache
COPY ./ /usr/local/apache2/htdocs/

# Aucun autre paramètre nécessaire, le serveur servira index.html par défaut
