import React from "react"
import { createSlice } from "@reduxjs/toolkit"

 const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
        totalQuantity:0
    },
    reducers:{
        addToCart(state,action){
            const newItem =action.payload;
            const existingItem=state.items.find(item=>item.id===newItem.id)
            state.totalQuantity++;
            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    price:newItem.price,
                    image:newItem.image,
                    category:newItem.category,
                    quantity:1,
                    totalPrice:newItem.price,
                    name:newItem.title
                });
            }else{
                    existingItem.quantity=newItem.quantity+1 || existingItem.quantity+1;
                    existingItem.totalPrice =existingItem.totalPrice+newItem.price
        }
        },
        removeItemCart(state,action){
            const id =action.payload;
            const existingItem=state.items.find(item=>item.id==id)
            state.totalQuantity--;
            // state.changed =true
            if(existingItem.quantity===1){
                state.items=state.items.filter(item=>item.id !== id);
            }else{
                existingItem.quantity--;
                existingItem.totalPrice =existingItem.totalPrice-existingItem.price
            }
        },
        
    }
})

export const cartAction=cartSlice.actions
export default cartSlice