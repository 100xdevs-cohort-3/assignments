import { client } from '..';
export interface TravelPlan {
  id: number;
  user_id: number;
  title: string;
  destination_city: string;
  destination_country: string;
  start_date: Date;
  end_date: Date;
  budget: string | null;
}
export async function createTravelPlan(
  userId: number,
  title: string,
  destinationCity: string,
  destinationCountry: string,
  startDate: string,
  endDate: string,
  budget?: number,
): Promise<TravelPlan> {
  const result = await client.query<TravelPlan>(
    'INSERT INTO travel_plans (user_id, title, destination_city, destination_country, start_date, end_date, budget) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *',
    [userId, title, destinationCity, destinationCountry, startDate, endDate, budget ?? null],
  );
  return result.rows[0];
}
export async function updateTravelPlan(
  planId: number,
  title?: string,
  budget?: number,
): Promise<TravelPlan | undefined> {
  return (
    await client.query<TravelPlan>(
      'UPDATE travel_plans SET title = COALESCE($2, title), budget = COALESCE($3, budget) WHERE id = $1 RETURNING *',
      [planId, title ?? null, budget ?? null],
    )
  ).rows[0];
}
export async function getTravelPlans(userId: number): Promise<TravelPlan[]> {
  return (
    await client.query<TravelPlan>('SELECT * FROM travel_plans WHERE user_id = $1 ORDER BY id', [
      userId,
    ])
  ).rows;
}
