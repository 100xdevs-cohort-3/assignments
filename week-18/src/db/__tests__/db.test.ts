import { PrismaClient } from '@prisma/client';
import { createUser, getUser } from '../user';
import { createTravelPlan, updateTravelPlan, getTravelPlans } from '../travelPlan';
import { dropTables } from '../setup';

const prisma = new PrismaClient();

beforeAll(async () => {
    await dropTables();
});

afterAll(async () => {
    await prisma.$disconnect();
});

describe('User Database Operations', () => {
    test('createUser inserts a new user into the database', async () => {
        const username = 'testuser';
        const password = 'testpass'; // Consider using hashed passwords in actual tests
        const name = 'Test User';

        const user = await createUser(username, password, name);

        expect(user).toHaveProperty('username', username);
        expect(user).toHaveProperty('name', name);
        // Assuming password is hashed, you might not compare it directly
    });

    test('getUser retrieves a user by ID', async () => {
        // Create a user first to ensure there is a user to retrieve
        const newUser = await createUser('newuser', 'password', 'New User');
        const user = await getUser(newUser.id);

        expect(user).toHaveProperty('id', newUser.id);
        expect(user).toHaveProperty('username', 'newuser');
        expect(user).toHaveProperty('name', 'New User');
    });
});

describe('TravelPlan Operations', () => {
    let userId: number;

    beforeAll(async () => {
        // Create a user for travel plans
        const user = await createUser('traveluser', 'password', 'Travel User');
        userId = user.id;
    });

    test('createTravelPlan inserts a new travel plan for a user', async () => {
        const title = 'Beach Vacation';
        const destinationCity = 'Goa';
        const destinationCountry = 'India';
        const startDate = '2024-12-20';
        const endDate = '2024-12-30';
        const budget = 1000;

        const travelPlan = await createTravelPlan(
            userId,
            title,
            destinationCity,
            destinationCountry,
            startDate,
            endDate,
            budget
        );

        expect(travelPlan).toHaveProperty('title', title);
        expect(travelPlan).toHaveProperty('destinationCity', destinationCity);
        expect(travelPlan).toHaveProperty('destinationCountry', destinationCountry);
        expect(travelPlan).toHaveProperty('budget', budget);
    });

    test('updateTravelPlan updates the title and/or budget of a travel plan', async () => {
        const initialPlan = await createTravelPlan(
            userId,
            'Old Plan',
            'Paris',
            'France',
            '2024-06-01',
            '2024-06-15',
            1500
        );

        const updatedPlan = await updateTravelPlan(initialPlan.id, 'Updated Plan', 2000);

        expect(updatedPlan).toHaveProperty('title', 'Updated Plan');
        expect(updatedPlan).toHaveProperty('budget', 2000);
    });

    test('getTravelPlans retrieves all travel plans for a user', async () => {
        await createTravelPlan(
            userId,
            'Mountain Hike',
            'Shimla',
            'India',
            '2025-01-10',
            '2025-01-20',
            800
        );

        const travelPlans = await getTravelPlans(userId);

        expect(travelPlans.length).toBeGreaterThan(0);
        travelPlans.forEach((plan: any) => {
            expect(plan).toHaveProperty('userId', userId);
            expect(plan).toHaveProperty('title');
            expect(plan).toHaveProperty('destinationCity');
        });    });
});
