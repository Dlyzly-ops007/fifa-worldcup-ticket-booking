# FIFA World Cup Ticket Booking

React (Vite) + Supabase. Same structure as the IPL reference project, re-themed
for football and wired so **Matches** loads live from Supabase instead of
being hardcoded.

## Setup

1. **Create a Supabase project** at https://supabase.com (new org/project, pick a DB password).

2. **Create the tables.** In your project: SQL Editor -> New query -> paste the
   contents of `supabase/schema.sql` -> Run.
   This creates `matches` and `bookings`, sets up RLS policies so the app can
   read/write with the public anon key, and inserts 4 sample matches.

3. **Get your API keys.** Project Settings -> API -> copy the Project URL and
   the `anon` `public` key.

4. **Paste them into `src/supabase.js`**, replacing the two placeholder strings.

5. **Install and run:**
   ```
   npm install
   npm run dev
   ```

## Pages

- `/` — Home
- `/matches` — fetches rows from the `matches` table (live, on page load)
- `/booking` — inserts a row into `bookings`
- `/history` — fetches all rows from `bookings` on button click

## Notes

- The sample matches in `schema.sql` are placeholder data — edit/delete the
  `insert into matches...` block, or add rows via the Table Editor instead.
- Both tables are open for public select/insert (fine for a class project).
  For anything real-world, you'd lock `bookings` down (e.g. only let a user
  read their own rows) instead of the public read policy used here.
