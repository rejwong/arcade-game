# Arcade Game Project

## Table of Contents
* [Instructions](#instructions)
* [Getting started](#getting-started)
* [Notes](#notes)

## Instructions
The files provided in Udacity's starter kit have been updated to create the arcade game. 

A player must win a level by reaching the water without getting hit by a bug. 

Each time they do this they will progress to the next level where the complexity of the game increases. 

The level you are on determines the number of bugs. Each level is unique with the speed of the bugs being randomly generated. 

The player starts the game with 3 lives, but each time the player collides with a bug their lives are reduced until they are out of the game. 

Clicking on the 'reset' button starts the game over.

## Getting started
Download the repository and load the index.html in your browser. 

## Notes
This project was created as part of my Udacity Front-End Nanodegree, which was awarded through a Google Developer Scholarship. 

This arcade game was developed to meet the requirements of the [rubric](https://review.udacity.com/#!/projects/2696458597/rubric). This module focuses on writing functions that are **object-oriented** – either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions. 

Requirements also include using the keyword 'this' appropriately within a class and class prototype functions to refer to the object the function is called upon.

## Improvement
Further functionality and styling may be added and the README will be updated accordingly. 

This includes:
### Row management
For an optimum experience, the number of bugs generated per row could be improved (e.g. sometimes too many come out at once and better pacing may be required at higher levels). 
### Greater complexity - items
More items could be added to score points (e.g. player can grab stars while crossing the canvas).