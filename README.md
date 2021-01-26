# LvDemo

Prerequisites
 * elixir (https://elixir-lang.org/install.html)
 * postgres 
 * node

To start your Phoenix server:
  * clone repo and cd into repo directory.
  * Install dependencies with `mix deps.get`
  * Update the values under config :lv_demo, LvDemo.Repo in dev.exs to reflect the connection parameters required to connect to your local postgres server
  * Create and migrate your database with `mix ecto.setup`
  * Install Node.js dependencies with `cd assets && npm install`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

## Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: https://hexdocs.pm/phoenix/overview.html
  * Docs: https://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix
