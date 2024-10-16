# Random User Fetcher with Pagination

This project demonstrates a React component that fetches random user data using the [RandomUser API](https://randomuser.me/api/) and displays their name and picture. The app implements pagination to allow fetching additional users by clicking a "Load More Users" button.

## Task

Create a React component that fetches random user data using the `https://randomuser.me/api/` API and displays their name and picture. Use Axios for fetching data and implement pagination, so a button can be used to load more users. Follow these requirements:  
- Use `useEffect` to fetch data when the component mounts (similar to `componentDidMount`).
- Display the users in a grid-like layout.
- When the "Load More Users" button is clicked, fetch additional users and append them to the list.
- Ensure each user has a unique `key` when rendering the list of users.
- Use pagination by fetching new users from the `https://randomuser.me/api?page=2` endpoint when needed.

## Future Improvements

- Add a loading indicator while users are being fetched.
- Implement error handling and retry logic for failed requests.
- Customize the number of users fetched per request.

## Refecrence UI

![Image](https://utfs.io/f/A8JZzw0Laf9jyvMCIikuNmbLHSZhjdl15eEqAOaxiK6o7wRp)