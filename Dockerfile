FROM cypress/included:cypress-13.6.3-node-20.10.0-chrome-118.0.5993.88-1-ff-118.0.2-edge-118.0.2088.46-1

ENV WORK_PATH /e2e
# Create the folder where our project will be stored
RUN mkdir $WORK_PATH
# Make it our work directory
WORKDIR $WORK_PATH
# Copy the essential files
COPY . .
RUN npm install
RUN npm update
# Add commands to run Cypress and generate Allure results
ENTRYPOINT ["npx", "cypress", "run"]
# With CMD, you can specify more parameters to the last entrypoint
CMD [""]
