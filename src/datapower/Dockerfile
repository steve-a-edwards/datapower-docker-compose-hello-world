FROM ibmcom/datapower:latest
# THREADS NOW 4
ENV  DATAPOWER_ACCEPT_LICENSE=true \
     DATAPOWER_WORKER_THREADS=4 \
     DATAPOWER_INTERACTIVE=true

# Need to make sure drouter folder, file permissions are set to ALL read / write:
COPY src/drouter/config /drouter/config
COPY src/drouter/local /drouter/local

# ================================================================
# ALL BELOW NOT NEEDED, AS ONLY AFFECTED CFG FILES NO LONGER NEDED
# COPY src/start /start
# COPY src/start.sh /start.sh

# USER root
# RUN  set-user drouter
# USER drouter

# EXPOSE 9443
# CMD ["/start.sh"]
