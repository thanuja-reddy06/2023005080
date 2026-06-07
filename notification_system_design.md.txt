# Notification System Design

## Overview

The notification system fetches notifications from the Affordmed Notification API and displays them in a React application.

## Notification Types

1. Placement
2. Result
3. Event

## Priority Strategy

Notifications are prioritized as:

Placement > Result > Event

Priority values:

* Placement = 3
* Result = 2
* Event = 1

Notifications are sorted in descending priority order and displayed in the Priority Notifications page. The top N notifications can be displayed based on the configured limit.

## Components

### All Notifications Page

Displays all notifications returned by the API.

### Priority Notifications Page

Displays notifications sorted according to priority.

### Notification Card

Reusable component used to render notification details.

### Logging Middleware

Reusable logging utility that sends logs to the Affordmed logging endpoint.

## Scalability

* Supports pagination
* Supports filtering by notification type
* Supports configurable limits
* Client-side priority sorting
* Reusable component architecture

## Logging

The Log() middleware records:

* API calls
* Page loads
* Errors
* Notification fetch events

## Technology Stack

* React
* Vite
* Axios
* React Router
* Material UI

