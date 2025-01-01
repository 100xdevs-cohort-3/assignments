
import { client } from "..";
import { QueryResult } from "pg";

interface TravelPlan {
  id: number;
  title: string;
  destination_city: string;
  destination_country: string;
  start_date: string;
  end_date: string;
  budget: number;
}

/*
 * Function should insert a new travel plan for this user
 * Should return a travel plan object
 * {
 *  title: string,
 *  destination_city: string,
 *  destination_country: string,
 *  start_date: string,
 *  end_date: string,
 *  budget: number,
 *  id: number
 * }
 */
export async function createTravelPlan(
  userId: number,
  title: string,
  destinationCity: string,
  destinationCountry: string,
  startDate: string,
  endDate: string,
  budget: number
) {
  const query =
    "INSERT INTO travel_plans (user_id, title, destination_city, destination_country, start_date, end_date, budget) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
  const result = await client.query(query, [
    userId,
    title,
    destinationCity,
    destinationCountry,
    startDate,
    endDate,
    budget,
  ]);
  return result.rows[0];
}

/*
 * Function should update the budget or title for a specific travel plan
 * Should return the updated travel plan object
 */
export async function updateTravelPlan(
  planId: number,
  title?: string,
  budget?: number
) {
  const query =
    "UPDATE travel_plans SET title = COALESCE($2, title), budget = COALESCE($3, budget) WHERE id = $1 RETURNING *";
  const result = await client.query(query, [planId, title, budget]);
  return result.rows[0];
}

/*
 * Function should get all the travel plans of a given user
 * Should return an array of travel plan objects
 * [{
 *  title: string,
 *  destination_city: string,
 *  destination_country: string,
 *  start_date: string,
 *  end_date: string,
 *  budget: number,
 *  id: number
 * }]
 */
export async function getTravelPlans(userId: number) {
  const query = "SELECT * FROM travel_plans WHERE user_id = $1";
  const values = [userId];
  const result = await client.query(query, values);
  return result.rows;
}
