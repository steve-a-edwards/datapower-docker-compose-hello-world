#!/bin/sh

while true
do
  echo "Attempting connect to datapower:9440:"
  curl -sS --connect-timeout 5 http://datapower:9440 || echo curl error $?
  sleep 5
done
