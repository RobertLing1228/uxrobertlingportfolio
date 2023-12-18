---
title: "A Weather App HD edition"
type: "Modification on tutorial"
date: "17 December 2023"
img: "/myWeatherApp/coverPage_weatherApp.png"
---

![Head Image](/myWeatherApp/coverPage_weatherApp.png)
This is a tutorial I follow to improve my vue skills, to make it more beatiful I decide to
add abit more flavor to my test. 
1. local images from unsplash by searching the location

link to project: https://robertweatherapp.netlify.app/

## Context about the project
A simple weather app that search location and show it's local temperature. To improve the
experience, I add transition effect and local images to support the UX.

# Designing multi-purpose overlay
This feature was very useful for may types of app. Vue provide very good feature of easily
implementing good transition design to the overlay. Below is one of the example:
![Overlay Design](/myWeatherApp/1.gif)


# Search the city
Here I followed the tutorial making a search input to find the right location to prompt.
This place i learn how to get location/places through an API (MapBox):
![Search city at search input](/myWeatherApp/2.gif)

# Learn about the city & add to list
"Kuala Lumpur" was the city I want to add here. The result show the city's temperature from
an API (Openweather). It return, a few types of info. This project I use the temperature data:
![Temperature Data](/myWeatherApp/3.gif)

# Removing the city
I can remove the city by click "remove city" in the city detail.
![Delete city from list](/myWeatherApp/4.gif)