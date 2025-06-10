# 🐳 Use the official Apache HTTP Server base image from Docker Hub
FROM httpd:2.4

# 👇 Copy all project files into Apache's default public folder
COPY ./ /usr/local/apache2/htdocs/

# ✅ No need to expose or run anything — Apache auto-runs in the base image
# 📁 index.html will load automatically when Apache starts
