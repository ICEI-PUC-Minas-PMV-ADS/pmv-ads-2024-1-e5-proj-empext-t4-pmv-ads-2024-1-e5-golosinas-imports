#!/bin/bash

# Because somehow the envs are not being loaded in my computer and I don't know why.
source codigo-fonte/frontend/.env.local
if [ $? -eq 0 ]; then
    echo "Configured variables successfully!"
else
    echo "Error: Unable to configure variables."
fi