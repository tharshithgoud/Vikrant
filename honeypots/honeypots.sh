#!/bin/bash

for dir in */; do
  if [ "$dir" != "honeytrap/" ]; then
    cd "$dir"
    echo "Running 'docker-compose up' in directory $dir"
    docker-compose up &
    cd ..
  fi
done

wait