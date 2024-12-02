### **Assignment: Build a Travel Plan Manager**

#### **Objective**
- Design a PostgreSQL schema for managing travel plans.
- Implement functions to:
  - Insert a new travel plan.
  - Update a travel plan.
  - Retrieve all travel plans for a specific user.

---

#### **Instructions**

1. **Schema Design**  
   - **users** table
     - `id`: Primary Key, auto-incremented integer.
     - `username`: Unique string, required.
     - `password`: String, required.
     - `name`: String, required.
   - **travel_plans** table
     - `id`: Primary Key, auto-incremented integer.
     - `user_id`: Foreign Key referencing `users(id)`, required.
     - `title`: String, required.
     - `destination_city`: String, required.
     - `destination_country`: String, required.
     - `start_date`: Date, required.
     - `end_date`: Date, required.
     - `budget`: Numeric, optional.

2. **Functions to Implement**  
   - `createTravelPlan(userId, title, destinationCity, destinationCountry, startDate, endDate, budget)`: Inserts a new travel plan and returns the created object.
   - `updateTravelPlan(planId, title, budget)`: Updates a travel plan's `title` or `budget` and returns the updated object.
   - `getTravelPlans(userId)`: Retrieves all travel plans for a specific user.

3. **Testing**  
   - Write a script to:
     - Create the tables.
     - Drop the tables.
     - Insert sample data into the tables.
     - Run the implemented functions.

4. **Example Data**

   - Insert users:
     ```sql
     INSERT INTO users (username, password, name)
     VALUES 
       ('john_doe', 'password123', 'John Doe'),
       ('jane_smith', 'securepass', 'Jane Smith');
     ```

   - Insert travel plans:
     ```sql
     INSERT INTO travel_plans (user_id, title, destination_city, destination_country, start_date, end_date, budget)
     VALUES 
       (1, 'Paris Adventure', 'Paris', 'France', '2024-06-01', '2024-06-10', 2500),
       (1, 'Tokyo Getaway', 'Tokyo', 'Japan', '2024-09-15', '2024-09-25', 4000),
       (2, 'London Weekend', 'London', 'UK', '2024-07-01', '2024-07-05', 1200);
     ```

   - Expected results for function calls:
     - `createTravelPlan(1, 'New York Trip', 'New York', 'USA', '2024-12-10', '2024-12-20', 3000)`  
       - Inserts and returns:
         ```json
         {
           "id": 4,
           "user_id": 1,
           "title": "New York Trip",
           "destination_city": "New York",
           "destination_country": "USA",
           "start_date": "2024-12-10",
           "end_date": "2024-12-20",
           "budget": 3000
         }
         ```
     - `updateTravelPlan(1, 'Paris Adventure Updated', 2600)`  
       - Updates and returns:
         ```json
         {
           "id": 1,
           "user_id": 1,
           "title": "Paris Adventure Updated",
           "destination_city": "Paris",
           "destination_country": "France",
           "start_date": "2024-06-01",
           "end_date": "2024-06-10",
           "budget": 2600
         }
         ```
     - `getTravelPlans(1)`  
       - Returns:
         ```json
         [
           {
             "id": 1,
             "user_id": 1,
             "title": "Paris Adventure Updated",
             "destination_city": "Paris",
             "destination_country": "France",
             "start_date": "2024-06-01",
             "end_date": "2024-06-10",
             "budget": 2600
           },
           {
             "id": 2,
             "user_id": 1,
             "title": "Tokyo Getaway",
             "destination_city": "Tokyo",
             "destination_country": "Japan",
             "start_date": "2024-09-15",
             "end_date": "2024-09-25",
             "budget": 4000
           },
           {
             "id": 4,
             "user_id": 1,
             "title": "New York Trip",
             "destination_city": "New York",
             "destination_country": "USA",
             "start_date": "2024-12-10",
             "end_date": "2024-12-20",
             "budget": 3000
           }
         ]
         
## Pre-requisites
Before you start, please grab a Postgres URL from either of the following - 
 - https://neon.tech/
 - https://aiven.io/

and put it in config.ts

## Assignment
You are supposed to write the `database` part of an full stack app. 
Specifically, you need to fill the functions in 
 - src/db/user.ts
 - src/db/travel.ts
 - src/db/setup.ts

## Testing
Run `npm run test` to run all the tests


