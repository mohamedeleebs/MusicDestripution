# Music Distribution Frontend

This project is the Angular frontend for the Music Distribution System. It allows users to browse tracks, filter them by status, and view detailed distribution information for each track.

## Requirements

* Node.js (v18 or later)
* Angular CLI 19

## Installation

```bash
npm install
```

## Run the Application

```bash
ng serve
```

The application will be available at:

```
http://localhost:4200
```

## Backend Configuration

Before running the frontend, make sure the backend API is running.

Update the API URL in:

```
src/core/services/track.service.ts
```

Example:

```ts
apiUrl: 'https://localhost:5001/api'
```

## Features

* View all tracks
* Filter tracks by status
* View track details
* Display DSP distribution status
