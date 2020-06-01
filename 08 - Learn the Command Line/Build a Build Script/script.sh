#!/bin/bash
echo "Welcome to this tiny build project!"

firstline=$(head -n 1 source/changelog.md)

read -a splitfirstline <<< $firstline

version=$(splitfirstline[1])

echo "The current version is " $version

echo "Do you want to continue? Type 1 for YES, 0 for NO: "

read versioncontinue

if [ versioncontinue -eq 1 ]
then 
  echo "OK"
else
  echo "Please come back when you are ready"
fi

for filename in source/*
do 
  if [ "$filename" == "source/secretinfo.md"]
  then
    echo "No copying" $filename
  else
    echo "Copying" $filename
    cp $filename ./build/.
  fi
done