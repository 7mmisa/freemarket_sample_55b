class ListingsController < ApplicationController
before_action :items_id , except: :show

  def show
    @items = Item.where(user_id: current_user.id).where(buyer_id: nil)
    
  end
  
end
