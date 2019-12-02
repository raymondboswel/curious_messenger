defmodule LvDemoWeb.PageController do
  use LvDemoWeb, :controller

  plug LvDemoWeb.AssignUser, preload: :conversations

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
