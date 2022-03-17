echo "Using %1 as docker username."
docker tag iexec-simple-app %1/iexec-simple-app:1.0.0
docker push %1/iexec-simple-app:1.0.0