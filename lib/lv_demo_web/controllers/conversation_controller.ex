defmodule LvDemoWeb.ConversationController do
  use LvDemoWeb, :controller

  require IEx

  plug LvDemoWeb.AssignUser

  def create(_conn, %{"conversation" => _params}) do
    # case Chat.create_conversation(%{params})
  end
end
