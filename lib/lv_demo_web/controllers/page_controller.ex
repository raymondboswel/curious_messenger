defmodule LvDemoWeb.PageController do
  use LvDemoWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
