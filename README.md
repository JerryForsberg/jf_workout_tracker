# jf_workout_tracker

To use the dpeloyed version of the app, please use the following link https://jf-workout-tracker.herokuapp.com/

**overview**
    - The basic use of this app is for the user to be able to create and track workouts. The user can access previous workouts to view, or add exercised to the workout, or create a new workout with new exercises. The user can also view the total stats of the exercise.

**technology** 
    - This app was created using express for the REST API, Javascript for the logic, html and css for the structure and styling and mongoose for the mongo database.

**structure**
    
  - Models:
       - The models folder contains 3 files, an exercise model, a workout model, and an index.
           - exercise model: 
                   - The exercise model creates a mongoose schema, and takes in the keys and types for the model. It is then exported so that the model can be used in other                          parts of the code.
            
            - workout model: 
                    - also creates a mongoose schema, but also takes in the date, and then creates an array that is then populated by the exercises created for that workout. It                        accomplishes this by using a "ref" to the exercise model. It then uses virtuals to add the duration of the exercises
            
            - index:
                    - The index file takes in the 2 previously created models into an object and exports them, so thaty instead of importing them individually in other parts of                       the app, we can require the index file and have use of both models
    
    - Public
        - The public folder contains all of the apps front end javascript, html, and css. it contains the API calls to the back end to get the data that needs to be displayed on           the page, and then sends the data to the html components to be displayed for each page.        

        
    - Routes
        - The routes contain the backend API handling, using the express router and our models folder, as well as path to send html files based on the paths hit.

        - The first route is a get route to /api/workouts. It finds all workouts, populates the exercises, sorts them by date and then sends back the json data.

        - The post route creates a workout using the Workout model and the mongoose create method, passing through the request body

        - The get route at /api/workouts/range is finding workouts from a certain range, and again sends the json data

        - The put route is referencing a workout by id, creatingn a exercise using the request body, and then taking that exercise and pushing it to "exercises" using the id.

        - We then use path to sendFile to the proper paths, for instance /exercise will get the exercise.html file, and /stats will get the stats.html file
      
