# Historical Weather App

## To install: ##

-Clone the repository to your local machine

-Once the repository is cloned locally, go ahead and access the /weather_app_tutorial directory from the terminal and run npm install to install the backend dependencies from the package.json file.

-While still inside /weather_app_tutorial navigate into the /client directory and then do the same thing by running npm install to install all of the dependencies that are required for React.

-In the root directory navigate to /server/ and run node server.js to start up the Express server..

-If you head over to http://localhost:5000/ in your web browser, you should see ‘PORT 5000’. This confirms the server is up and running.

-From the terminal, navigate into the /client directory and then run npm start. This will start up the React server on port 3000. (Check out: http://localhost:3000/ if the React scripts did not launch the application automatically.)

## To Query: ##

-We offer 3 Functionalities :
1. Query on the Measurement using Absolute time.
2. Query on the Measurement using Relative time.
3. Aggregate function display using Group by on time interval.

### Query on the Measurement using Absolute time. ###
1. Please enter a city . (Cities supported: rochester, atlanta)
2. Select the desired fields and tags 
3. Enter Date and time.  Date supported : January 01, 2019 To: October 27, 2019
4. You can use the black down arrow to access the calendar and enter date. 
5. You will have to manually select the time fields and enter the time in the format “08:00:AM” or use the white up down arrow to change it.
6. Valid absolute time format : “06/05/2019, 08:00 AM”
7. Hit Enter

### Query on the Measurement using Relative time ###
1. Please enter a city . (Cities supported: rochester, atlanta)
2. Select the desired fields and tags 
3. Select the “Use Relative time instead?” checkbox
4. Relative time is supported wrt now() where now() is the current time. i.e now() -/+ "duration_literal
5. Input Format: now()-10w, now()-100d"

### Aggregate function display using Group by on time interval ###
1. Please enter a city . (Cities supported: rochester, atlanta)
2. Supported aggregate functions: COUNT(), DISTINCT(), INTEGRAL(), MEAN(), MEDIAN(), MODE(), SPREAD(), STDDEV(), SUM() (Case sensitive :Capitalization is needed)
3. Enter a tag :  clouds_all,humidity,pressure,temp,temp_max, temp_min
4. 2.Select the desired fields and tags 
5. Enter Date and time.  Date supported : January 01, 2019 To: October 27, 2019
6. You can use the black down arrow to access the calendar and enter date. 
7. You will have to manually select the time fields and enter the time in the format “08:00:AM” or use the white up down arrow to change it.
8. Valid absolute time format : “06/05/2019, 08:00 AM”
9. Group by time interval using Duration literals. Eg: 10s, 1m, 3h, 3d, 3w
10. Hit Enter
#### This application was created with Node.js, Express, React and the Influx DB. It supports two cities Atlanta and Rochester as of now. 
