-- Run this in your Supabase project's SQL Editor
-- (Dashboard -> SQL Editor -> New query -> paste -> Run)

-- ========== Matches table ==========
create table if not exists matches (
  id bigint generated always as identity primary key,
  team1 text not null,
  team2 text not null,
  venue text not null,
  match_date date not null,
  stage text,
  created_at timestamptz default now()
);

alter table matches enable row level security;

create policy "Public can read matches"
  on matches for select
  using (true);

-- ========== Bookings table ==========
create table if not exists bookings (
  id bigint generated always as identity primary key,
  name text not null,
  tickets integer not null,
  stand text not null,
  venue text not null,
  created_at timestamptz default now()
);

alter table bookings enable row level security;

create policy "Public can insert bookings"
  on bookings for insert
  with check (true);

create policy "Public can read bookings"
  on bookings for select
  using (true);

-- ========== Sample matches (optional, delete/edit as you like) ==========
insert into matches (team1, team2, venue, match_date, stage) values
  ('Brazil', 'Argentina', 'MetLife Stadium, New Jersey', '2026-11-14', 'Group Stage'),
  ('France', 'Germany', 'AT&T Stadium, Dallas', '2026-11-17', 'Group Stage'),
  ('Spain', 'England', 'Estadio Azteca, Mexico City', '2026-11-21', 'Round of 16'),
  ('Portugal', 'Netherlands', 'BC Place, Vancouver', '2026-11-25', 'Quarter Final');
