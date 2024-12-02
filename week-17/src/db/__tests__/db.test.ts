import { client } from '../..';
import { createUser, getUser } from '../user';
import { createTables, dropTables } from '../setup';
import { createTravelPlan, updateTravelPlan, getTravelPlans } from '../travel';

beforeAll(async () => {
    await client.connect();
    await dropTables();
    await createTables();
});

afterAll(async () => {
    await client.end();
});

describe('User Database Operations', () => {
    test('createUser inserts a new user into the database', async () => {
        const username = 'testuser';
        const password = 'testpass';
        const name = 'Test User';

        await createUser(username, password, name);
        const user = await client.query('SELECT * FROM users WHERE username = $1', [username]);
        expect(user.rows[0]).toHaveProperty('username', username);
        expect(user.rows[0]).toHaveProperty('name', name);
        expect(user.rows[0].password).toBe(password);
    });

    test('getUser retrieves a user by ID', async () => {
        const userId = 1;
        const user = await getUser(userId);

        expect(user).toHaveProperty('id', userId);
        expect(user).toHaveProperty('username');
        expect(user).toHaveProperty('name');
    });
});

describe('Travel Plan Operations', () => {
    let userId: number;

    beforeAll(async () => {
        const res = await client.query('SELECT id FROM users WHERE username = $1', ['testuser']);
        userId = res.rows[0].id;
    });

    test('createTravelPlan inserts a new travel plan for a user', async () => {
        const title = 'Test Travel Plan';
        const destinationCity = 'Paris';
        const destinationCountry = 'France';
        // Use the next day to avoid timezone issues
        const startDate = '2024-06-02';
        const endDate = '2024-06-11';
        const budget = 2500;

        const travelPlan = await createTravelPlan(
            userId,
            title,
            destinationCity,
            destinationCountry,
            startDate,
            endDate,
            budget
        );

        expect(travelPlan).toHaveProperty('id');
        expect(travelPlan.title).toEqual(title);
        expect(travelPlan.destination_city).toEqual(destinationCity);
        expect(travelPlan.destination_country).toEqual(destinationCountry);

        // Format the received date to match our input format
        const receivedStartDate = new Date(travelPlan.start_date);
        const receivedEndDate = new Date(travelPlan.end_date);
        
        const formatDate = (date: Date) => {
            return date.toLocaleDateString('en-CA'); // Returns YYYY-MM-DD format
        };

        expect(formatDate(receivedStartDate)).toEqual(startDate);
        expect(formatDate(receivedEndDate)).toEqual(endDate);
        expect(Number(travelPlan.budget)).toEqual(budget);
    });
    test('updateTravelPlan updates the title or budget for a travel plan', async () => {
        const { id: planId } = await createTravelPlan(
            userId,
            'Original Title',
            'Tokyo',
            'Japan',
            '2024-09-02',
            '2024-09-11',
            3000
        );

        const updatedPlan = await updateTravelPlan(planId, 'Updated Title', 3500);

        expect(updatedPlan?.title).toEqual('Updated Title');
        expect(Number(updatedPlan?.budget)).toEqual(3500);
    });

    test('getTravelPlans retrieves all travel plans for a user', async () => {
        const travelPlans = await getTravelPlans(userId);

        expect(travelPlans.length).toBeGreaterThan(0);
        travelPlans.forEach(plan => {
            expect(plan).toHaveProperty('id');
            expect(plan.user_id).toEqual(userId);
        });
    });
});
