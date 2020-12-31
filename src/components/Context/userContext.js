import React from 'react'

const UserContext = React.createContext();


const NameProvider =  UserContext.Provider
const NameConsumer = UserContext.Consumer


const PictureContext = React.createContext()


const PictureProvider =  PictureContext.Provider
const PictureConsumer = PictureContext.Consumer

const CountContext = React.createContext()

const CountProvider =  CountContext.Provider
const CountConsumer = CountContext.Consumer

export {
  NameProvider, 
  NameConsumer,
  PictureProvider, 
  PictureConsumer,
  UserContext,
  PictureContext,
  CountContext,
  CountProvider,
  CountConsumer
}
