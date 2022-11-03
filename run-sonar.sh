#!/bin/sh
docker run --platform linux/x86_64 --rm --network host \
	-e SONAR_HOST_URL="http://localhost:9000" \
	-e SONAR_LOGIN="sqp_dd4326ab08bd76d4e7883c6fcc98997d781d79ae" \
	-v "${PWD}:/usr/src" sonarsource/sonar-scanner-cli