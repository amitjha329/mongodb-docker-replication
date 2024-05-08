FROM mongodb/mongodb-community-server:latest

# Set up environment variables for MongoDB
ENV MONGODB_INITDB_ROOT_USERNAME=mongodb
ENV MONGODB_INITDB_ROOT_PASSWORD=mongodbpass

# Copy the keyfile for MongoDB replica set authentication
USER root
COPY ./replica-key /opt/keyfile
RUN ls -la /opt/keyfile
RUN chmod 600 /opt/keyfile && chown mongodb:mongodb /opt/keyfile
USER mongodb

# Set the replica set name
CMD ["mongod", "--replSet", "--bind_ip", "0.0.0.0", "rs0", "--keyFile", "/opt/keyfile"]
