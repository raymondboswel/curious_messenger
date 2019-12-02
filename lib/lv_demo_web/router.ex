defmodule LvDemoWeb.Router do
  use LvDemoWeb, :router
  use Pow.Phoenix.Router

  pipeline :protected do
    plug Pow.Plug.RequireAuthenticated,
      error_handler: Pow.Phoenix.PlugErrorHandler
  end

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug Phoenix.LiveView.Flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  # Pow browser routes - remember not to add them to the existing scope referencing the
  # CuriousMessengerWeb module, but add a new block instead like this:
  scope "/" do
    pipe_through :browser

    pow_routes()
  end

  scope "/", LvDemoWeb do
    pipe_through :browser

    get "/", PageController, :index
  end

  # Make conversation routes protected by requiring authentication
  scope "/", LvDemoWeb do
    pipe_through [:browser, :protected]

    resources "/conversations", ConversationController

    live "/conversations/:conversation_id/users/:user_id", ConversationLive, as: :conversation
  end

  # Other scopes may use custom stacks.
  # scope "/api", LvDemoWeb do
  #   pipe_through :api
  # end
end
