import React from 'react'
import axios from "axios"
import md5 from 'md5';






const publicKey = process.env.REACT_APP_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_PRIVATE_KEY;
const timeStamp = new Date().getTime().toString();

console.log(timeStamp)

const hash = md5(`${timeStamp}${privateKey}${publicKey}`)

console.log(hash)

const apiURL = "https://gateway.marvel.com/v1/public"
const params = [

    `apikey=${encodeURIComponent(publicKey)}`,
    `ts=${encodeURIComponent(timeStamp)}`,
    `hash=${encodeURIComponent(hash)}`,




]

export const getComics = (setComics) =>{


        const paramString = params.join("&")
    
        axios.get(`${apiURL}/comics?${paramString}&limit=10`)
        .then((res) => setComics(res.data.data.results))
        .catch((err) => console.log("Error processing request: ", err ))

    }
     
    
    
    
    
    

