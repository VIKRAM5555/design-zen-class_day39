import {clients} from "../index.js"
import express from 'express'
import bcrypt from 'bcrypt'
import {auth} from"../Middleware/auth.js"


var apps=express.Router()

/*1.Find all the topics and tasks which are thought in the month of October*/

apps.get("/",async function(req,res){
    res.send(await clients.db("Class").collection("topics_task").find({month:october}).toArray())

 })

 /*2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020*/ 

 apps.get("/",async function(req,res){
    res.send(await clients.db("Class").collection("company_drives").find( { "month.october":  { $gt: 14 } }).toArray())

 })

/* 3.Find all the company drives and students who are appeared for the placement. */
apps.get("/",async function(req,res){
    res.send(await clients.db("Class").collection("attendence").find( { "attendence.company_drives":   { $all: [ "placement_taken" ] } } ).toArray())

})

apps.get("/",async function(req,res){
    res.send(await clients.db("Class").collection("attendence").find( { "attendence.student":   { $all: [ "placement_attended" ] } } ).toArray())

})

/*4.Find the number of problems solved by the user in codekata */
apps.get("/",async function(req,res){
    res.send(await clients.db("Class").collection("codekata").find({ "codekata": { $all: [ "solved_problems" ] } }).toArray())
 
/* 5.Find all the mentors with who has the mentee's count more than 15 */
apps.get("/",async function(req,res){
    res.send(await clients.db("Class").collection("mentors").find( { "mentors.student":  { $gt: 14 } }).toArray())

 export var CRUD=  apps