# Question-by-question solution map

The working solutions live outside the original reference-solution folders.

## Week 1 — HTML and CSS

| Exercise                 | Implementation                                                                | Main idea                                                                                              |
| ------------------------ | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Horizontal alignment     | [0-horizontal-align](week-1/problems/0-horizontal-align/index.html)           | A fixed 1200px by 500px container centered horizontally                                                |
| Vertical alignment       | [1-vertical-align](week-1/problems/1-vertical-align/index.html)               | Center the container on the page and its text on both axes                                             |
| Flex layout              | [2-flex-layout](week-1/problems/2-flex-layout/index.html)                     | Red/blue columns in a 1:2 ratio, with vertically centered content                                      |
| Grid layout              | [3-grid-layout](week-1/problems/3-grid-layout/index.html)                     | The same layout with fractional grid tracks                                                            |
| Nested grid              | [4-more-complicated-grid](week-1/problems/4-more-complicated-grid/index.html) | A three-column grid inside the wider right panel                                                       |
| VS Code language section | [5-vscode-bottombar](week-1/problems/5-vscode-bottombar/index.html)           | Recreate the supplied language-panel reference                                                         |
| VS Code landing page     | [6-vs-code-landing-page](week-1/problems/6-vs-code-landing-page/index.html)   | Responsive navigation, hero/editor, language grid, extensions, customization, remote tools, and footer |

## Week 2 — JavaScript

| Exercise             | File                                                                     | Approach                                                                                                    |
| -------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| Anagram              | [anagram.js](week-2/week-2-js/easy/anagram.js)                           | Normalize case and compare sorted characters                                                                |
| Expenditure analysis | [expenditure-analysis.js](week-2/week-2-js/easy/expenditure-analysis.js) | Accumulate category totals in a Map, retaining insertion order                                              |
| Largest element      | [findLargestElement.js](week-2/week-2-js/easy/findLargestElement.js)     | Linear scan; empty input returns undefined                                                                  |
| Vowels               | [countVowels.js](week-2/week-2-js/medium/countVowels.js)                 | Count case-insensitive vowel matches                                                                        |
| Palindrome           | [palindrome.js](week-2/week-2-js/medium/palindrome.js)                   | Normalize case and punctuation before comparing with the reverse                                            |
| Computation timing   | [times.js](week-2/week-2-js/medium/times.js)                             | Measure an actual summation loop in seconds                                                                 |
| Todo class           | [todo-list.js](week-2/week-2-js/hard/todo-list.js)                       | Add, remove, update, retrieve, and clear; validate indices                                                  |
| Calculator           | [calculator.js](week-2/week-2-js/hard/calculator.js)                     | Recursive descent parser with precedence, parentheses, unary signs, decimals, and division-by-zero handling |

The calculator parses arithmetic explicitly rather than evaluating arbitrary JavaScript. The original Jest assertions are retained.

## Week 2 — Async JavaScript

| Exercise                    | File                                                                                            | Approach                                                 |
| --------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Counter                     | [1-counter.js](week-2/week-2-async-js/easy/1-counter.js)                                        | setInterval; return a stop function                      |
| Counter without setInterval | [2-counter.js](week-2/week-2-async-js/easy/2-counter.js)                                        | Recursive setTimeout with cancellation                   |
| File reading                | [3-read-from-file.js](week-2/week-2-async-js/easy/3-read-from-file.js)                          | Async file read plus synchronous-work demonstration      |
| File writing                | [4-write-to-file.js](week-2/week-2-async-js/easy/4-write-to-file.js)                            | Await UTF-8 file writing                                 |
| File cleaner                | [1-file-cleaner.js](week-2/week-2-async-js/medium/1-file-cleaner.js)                            | Read, normalize whitespace, write                        |
| Clock                       | [2-clock.js](week-2/week-2-async-js/medium/2-clock.js)                                          | Padded 24-hour and 12-hour clocks with AM/PM             |
| Promisified timeout         | [1-promisify-setTimeout.js](<week-2/week-2-async-js/hard (promises)/1-promisify-setTimeout.js>) | Resolve after the specified number of seconds            |
| Blocking sleep              | [2-sleep-completely.js](<week-2/week-2-async-js/hard (promises)/2-sleep-completely.js>)         | Deliberate busy wait, as required by the question        |
| Promise.all                 | [3-promise-all.js](<week-2/week-2-async-js/hard (promises)/3-promise-all.js>)                   | Concurrent waits take approximately the longest duration |
| Promise chain               | [4-promise-chain.js](<week-2/week-2-async-js/hard (promises)/4-promise-chain.js>)               | Sequential waits take approximately the sum of durations |

Run individual scripts with `node path/to/file.js`. Read/write/cleaner scripts accept a file path as their first argument; writing also accepts content as its second argument. Counter and clock scripts run until interrupted.

## Week 3 — DOM projects

| Project            | Implementation                         | Features                                                                                    |
| ------------------ | -------------------------------------- | ------------------------------------------------------------------------------------------- |
| Background changer | [folder](week-3/easy/bg-color-changer) | Color buttons, custom colors, duplicate prevention, selected state                          |
| Quiz               | [folder](week-3/easy/quiz-app)         | Uses supplied data, required answers, scoring, review, retry                                |
| Pokémon cards      | [folder](week-3/easy/The-Pokémon)      | Type selection, card count, PokéAPI fetch, loading/error handling                           |
| Form builder       | [folder](week-3/medium/Form-Builder)   | Text, checkbox, radio groups, required fields, preview, removal                             |
| Taskify            | [folder](week-3/hard/taskify)          | Add/delete tasks, drag/drop categories, keyboard-accessible status menus, local persistence |

## Weeks 4–7 — Servers and full-stack apps

| Assignment             | Implementation                                                            | Features                                                                                                                           |
| ---------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Request counter        | [01-requestcount.js](week-4/middlewares/01-requestcount.js)               | Global request count, including the count endpoint                                                                                 |
| Rate limiter           | [01-ratelimitter.js](week-4/middlewares/01-ratelimitter.js)               | Five requests per user per second; HTTP 404 as specified by the tests                                                              |
| API key authentication | [02-authmiddleware.js](week-4/middlewares/02-authmiddleware.js)           | Validate the named request header                                                                                                  |
| Request logging        | [02-logIncomingRequests.js](week-4/middlewares/02-logIncomingRequests.js) | Method, URL, ISO timestamp                                                                                                         |
| Taskify backend        | [week-4/hard](week-4/hard)                                                | MongoDB models, signup/login/logout, password hashing, JWT, owned task CRUD                                                        |
| Full-stack Taskify     | [week-5](week-5)                                                          | Auth forms, board, search, edits, status changes, drag/drop, delete                                                                |
| Todo app               | [6.1-todo](week-6/6.1-todo)                                               | In-memory CRUD, search, completion, browser frontend                                                                               |
| Bookmark manager       | [6.2-bookmark-manager](week-6/6.2-bookmark-manager)                       | In-memory links, HTTP(S) validation, search, favorites, deletion                                                                   |
| Course-selling app     | [week-7](week-7)                                                          | Structured server, student/instructor roles, publish/edit courses, enrollment, purchased-course list; plain JS and React frontends |

Taskify supports `/user/signup`, `/user/login` (and `/signin` alias), `/user/logout`, `/user/todos`, and `/todo` CRUD routes. JWT logout invalidates existing user tokens. All task queries are scoped to the authenticated owner.

Coursify follows the supplied `/admin/*` and `/users/*` route contracts. Login accepts JSON credentials or the exercise's username/password headers. Instructors manage their own courses; students only discover published courses. Repeat enrollment does not duplicate purchases.

## Weeks 9–11 — React

| Assignment           | Implementation                        | Features                                                                                                                                           |
| -------------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pet adoption         | [petAdoption](week-9/petAdoption/src) | Components, controlled inputs, live validation, props, submitted-data table                                                                        |
| Timer                | [timerApp](week-9/timerApp/src)       | Drift-resistant countdown, pause, reset to configured duration, editable hours/minutes/seconds, auto-focus after two digits, counterclockwise ring |
| Random users         | [userApi](week-10/userApi/src)        | Axios/useEffect, pagination, append/deduplicate, stable keys, abort cleanup, retry                                                                 |
| Authentication state | [authSystem](week-10/authSystem/src)  | Working state-lifting and Context API variants; select an approach in the UI                                                                       |
| Shopping cart        | [amazonCart](week-11/amazonCart/src)  | Recoil atoms/selector, routing, wishlist/cart, quantities, subtotal, delete/undo, image fallback, added-to-cart feedback                           |

The Week 10 authentication exercise demonstrates UI state; it does not claim to authenticate accounts against a server. The Week 11 checkout is explicitly a demo.

## Weeks 13–14 — Tailwind and TypeScript

| Assignment                    | Implementation                      | Features                                                                                                                  |
| ----------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Favorites page                | [task-1](week-13/task-1/index.html) | Responsive sidebar, difficulty filters, reset, tags, search                                                               |
| Bookmark landing page         | [task-2](week-13/task-2/index.html) | Responsive hero, accessible tabs, browser cards, FAQ accordions, email validation                                         |
| Shopify homepage study        | [task-3](week-13/task-3/index.html) | Responsive navigation, commerce hero, product/store mockup, business sections, CTA and footer                             |
| TypeScript course application | [week-14](week-14)                  | Strictly typed Express/Mongoose backend and React frontend; interfaces for courses, sessions, inputs, and component props |

Design studies use the assignment's [Bookmark reference](https://tailwindfromscratch.com/website-projects/bookmark/index.html) and [Shopify reference](https://www.shopify.com/). Marketing links point to the relevant official sites; no subscriptions or real store accounts are created by the local study pages.

## Weeks 17–19 — Databases and Next.js

| Assignment                | Implementation             | Features                                                                                                                                                                                |
| ------------------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PostgreSQL travel manager | [week-17/src](week-17/src) | Schema, user insert/read, travel insert/update/list, foreign keys, date/budget constraints, parameterized SQL, seed script                                                              |
| Prisma travel manager     | [week-18/src](week-18/src) | Same operations through Prisma, shared client, input validation, migration, ordered retrieval                                                                                           |
| Event booking             | [week-19](week-19)         | NextAuth credentials sessions, hashed passwords, signup/login, public event search, host creation/edit/delete API, bookings, cancellation, personal booking page, ownership enforcement |

Week 19 preserves PostgreSQL and the existing migrations. The new Booking model has a unique user/event pair and cascades booking cleanup when an event is deleted. API request bodies are validated with Zod. Public responses never contain password hashes.

## Verification

See [VERIFICATION.md](VERIFICATION.md) and the repeatable [check-all script](tools/check-all.mjs). Browser layout and live third-party API availability are separate from the local build, DOM, and integration checks.
